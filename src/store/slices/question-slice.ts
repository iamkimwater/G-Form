import { createSlice } from '@reduxjs/toolkit'
import { IFormQuestionState, IQuestion } from '../../types/form-type'
import { QUESTION_TYPE } from '../../types/enums'
import {
  AddChoiceAction,
  AddEtcChoiceAction,
  CopyQuestionAction,
  DeleteChoiceAction,
  DeleteOtherChoiceAction,
  DeleteQuestionAction,
  MakeChoiceAction,
  setEditingQuestionIdAction,
  setPendingQuestionTitleAction,
  SetQuestionRequiredAction,
  setQuestionTitleAction,
  SetQuestionTypeAction,
} from '../../types/actions'

const defaultQuestion: IQuestion = {
  questionId: 1,
  questionTitle: '제목 없는 질문',
  pendingQuestionTitle: '제목 없는 질문',
  questionType: QUESTION_TYPE.multipleChoice,
  questionRequired: false,
  choices: [{ content: '옵션1', isSelected: false }],
  etcChoice: { content: undefined, isSelected: false, useState: false },
}

const formQuestionInitialState: IFormQuestionState = {
  editingQuestionId: 1,
  questions: [{ ...defaultQuestion }],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState: formQuestionInitialState,
  reducers: {
    // 편집 상태 변경
    setEditingQuestionId: (state, action: setEditingQuestionIdAction) => {
      const { questionId } = action.payload
      state.editingQuestionId = questionId
    },

    // 질문 제목 변경1
    setPendingQuestionTitle: (state, action: setPendingQuestionTitleAction) => {
      const { questionId, pendingQuestionTitle } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions[index].pendingQuestionTitle = pendingQuestionTitle
    },
    setQuestionTitle: (state, action: setQuestionTitleAction) => {
      const { questionId } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions[index].questionTitle =
        state.questions[index].pendingQuestionTitle
    },

    // 질문 타입 변경
    setQuestionType: (state, action: SetQuestionTypeAction) => {
      const { questionId, newType } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions[index].questionType = newType
    },

    // 질문 필수 여부 변경
    setQuestionRequired: (state, action: SetQuestionRequiredAction) => {
      const { questionId, required } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      if (state.questions[index]) {
        state.questions[index].questionRequired = required
      }
    },

    // 질문 복사
    copyQuestion: (state, action: CopyQuestionAction) => {
      const { questionId } = action.payload
      const originalQuestion = state.questions.find(
        (v) => v.questionId === questionId,
      )

      if (originalQuestion) {
        const maxId = Math.max(...state.questions.map((v) => v.questionId))
        const newQuestion = { ...originalQuestion, questionId: maxId + 1 }
        state.questions.push(newQuestion)
      }
    },

    // 질문 삭제
    deleteQuestion: (state, action: DeleteQuestionAction) => {
      if (state.questions.length === 1) {
        return
      }
      const { questionId } = action.payload
      const index = state.questions.findIndex(
        (v) => v.questionId === questionId,
      )
      state.questions.splice(index, 1)
    },

    // 질문 생성
    addQuestion: (state) => {
      const maxId = Math.max(...state.questions.map((v) => v.questionId))
      state.questions.push({
        ...defaultQuestion,
        questionId: maxId + 1,
      })
    },

    // 질문 순서 변경
    changeOrder: (state, action) => {
      const { new_questions } = action.payload
      state.questions = new_questions
    },

    // 선택지 생성
    addChoice: (state, action: AddChoiceAction) => {
      const { questionId, newChoice } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (
        question.questionType === QUESTION_TYPE.multipleChoice ||
        question.questionType === QUESTION_TYPE.checkbox
      ) {
        question.choices.push({ content: newChoice, isSelected: false })
      }
    },

    // 선택지 삭제
    deleteChoice: (state, action: DeleteChoiceAction) => {
      const { questionId, choiceIndex } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (
        question.questionType === QUESTION_TYPE.multipleChoice ||
        question.questionType === QUESTION_TYPE.checkbox
      ) {
        question.choices.splice(choiceIndex, 1)
      }
    },

    // 선택지 내용 변경
    setChoiceContent: (state, action) => {
      const { questionId, choiceIndex, content } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (
        question.questionType === QUESTION_TYPE.multipleChoice ||
        question.questionType === QUESTION_TYPE.checkbox
      ) {
        question.choices[choiceIndex].content = content
      }
    },

    // 선택지 체크
    makeChoice: (state, action: MakeChoiceAction) => {
      const { questionId, choiceIndex, isEtcChoice } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)

      if (question && question.questionType === QUESTION_TYPE.multipleChoice) {
        // 체크된 선택지 있는지 찾아서
        const selectedChoice = question.choices.find(
          (choice) => choice.isSelected === true,
        )
        // 있으면 체크 해제
        if (selectedChoice) {
          selectedChoice.isSelected = false
        }
        // 체크하려는 선택지가 기타선택지가 아니면`
        if (!isEtcChoice) {
          // 기타선택지가 선택되어 있는 경우 체크 해제하고 내용초기화
          if (question.etcChoice.isSelected) {
            question.etcChoice.isSelected = false
            question.etcChoice.content = undefined
          }
          // 체크한 인덱스의 선택지를 true
          question.choices[choiceIndex].isSelected = true
        } else {
          // 체크하려는 선택지가 기타선택지이면 기타선택지를 true
          question.etcChoice.isSelected = true
        }
      }

      if (question.questionType === QUESTION_TYPE.checkbox) {
        if (!isEtcChoice) {
          question.choices[choiceIndex].isSelected = true
        } else {
          question.etcChoice.isSelected = true
        }
      }
    },

    // 기타선택지 추가
    addEtcChoice: (state, action: AddEtcChoiceAction) => {
      const { questionId } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (
        question.questionType === QUESTION_TYPE.multipleChoice ||
        question.questionType === QUESTION_TYPE.checkbox
      ) {
        question.etcChoice.useState = true
      }
    },

    // 기타선택지 내용 변경
    setEtcChoiceContent: (state, action) => {
      const { questionId, content } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (
        question.questionType === QUESTION_TYPE.multipleChoice ||
        question.questionType === QUESTION_TYPE.checkbox
      ) {
        question.etcChoice.content = content
      }
    },

    // 기타선택지 삭제
    deleteEtcChoice: (state, action: DeleteOtherChoiceAction) => {
      const { questionId } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (
        question.questionType === QUESTION_TYPE.multipleChoice ||
        question.questionType === QUESTION_TYPE.checkbox
      ) {
        question.etcChoice.useState = false
        question.etcChoice.content = undefined
        question.etcChoice.isSelected = false
      }
    },
  },
})

export default questionSlice.reducer
