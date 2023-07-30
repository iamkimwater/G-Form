import { createSlice } from '@reduxjs/toolkit'
import { IFormQuestionState, IQuestion } from '../../types/form-type'
import { QUESTION_TYPE } from '../../types/enums'
import {
  AddChoiceAction,
  AddOtherChoiceAction,
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
  otherChoice: { content: undefined, isSelected: false, useState: false },
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

    // 질문 제목 변경
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

    // 선택지 생성 (객관식, 체크박스인 경우)
    addChoice: (state, action: AddChoiceAction) => {
      const { questionId, newChoice } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (question.questionType === QUESTION_TYPE.multipleChoice) {
        question.choices.push({ content: newChoice, isSelected: false })
      }
    },
    makeChoice: (state, action: MakeChoiceAction) => {
      const { questionId, choiceIndex, isOtherChoice } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (question.questionType === QUESTION_TYPE.multipleChoice) {
        if (!isOtherChoice) {
          if (question.otherChoice.isSelected) {
            question.otherChoice.isSelected = false
          } else {
            const selectedChoice = question.choices.find(
              (choice) => choice.isSelected === true,
            )
            if (selectedChoice) {
              selectedChoice.isSelected = false
            }
          }
          question.choices[choiceIndex].isSelected = true
        } else {
          const selectedChoice = question.choices.find(
            (choice) => choice.isSelected === true,
          )
          if (selectedChoice) {
            selectedChoice.isSelected = false
          }
          question.otherChoice.isSelected = true
        }
      }
    },

    // 기타 선택지
    addOtherChoice: (state, action: AddOtherChoiceAction) => {
      const { questionId } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (question.questionType === QUESTION_TYPE.multipleChoice) {
        question.otherChoice.useState = true
      }
    },
    setOtherChoice: (state, action) => {
      const { questionId, content } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (question.questionType === QUESTION_TYPE.multipleChoice) {
        question.otherChoice.content = content
      }
    },
    deleteOtherChoice: (state, action: DeleteOtherChoiceAction) => {
      const { questionId } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (question.questionType === QUESTION_TYPE.multipleChoice) {
        question.otherChoice.useState = false
        question.otherChoice.content = undefined
        question.otherChoice.isSelected = false
      }
    },

    // 선택지 변경
    setChoiceContent: (state, action) => {
      const { questionId, choiceIndex, content } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (question.questionType === QUESTION_TYPE.multipleChoice) {
        question.choices[choiceIndex].content = content
      }
    },

    // 선택지 삭제 (객관식, 체크박스인 경우)
    deleteChoice: (state, action: DeleteChoiceAction) => {
      const { questionId, choiceIndex } = action.payload
      const question = state.questions.find((v) => v.questionId === questionId)
      if (question.questionType === QUESTION_TYPE.multipleChoice) {
        question.choices.splice(choiceIndex, 1)
      }
    },
  },
})

export const {
  setEditingQuestionId,
  setPendingQuestionTitle,
  setQuestionTitle,
  setQuestionType,
  setQuestionRequired,
  copyQuestion,
  deleteQuestion,
  addQuestion,
  addChoice,
} = questionSlice.actions
export default questionSlice.reducer
