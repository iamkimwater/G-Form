import { TextInput, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import { questionSlice } from '../../../../../store/slices/question-slice'
import { RootState } from '../../../../../types/navigation-type'
import { MultipleChoiceComponentProps } from '../../../../../types/props'
import { IconButton } from '@react-native-material/core'
import { Feather } from '@expo/vector-icons'

const ChoicesComponent: React.FC<MultipleChoiceComponentProps> = ({
  question,
}) => {
  const { previewMode } = useSelector((root: RootState) => root.preview)
  const { editingQuestionId } = useSelector(
    (state: RootState) => state.question,
  )

  const isEditing = editingQuestionId === question.questionId
  const dispatch = useDispatch()

  // 미리보기탭에서 선택지 고르기
  const makeChoice = (index) => {
    if (!previewMode) {
      return
    }
    dispatch(
      questionSlice.actions.makeChoice({
        questionId: question.questionId,
        choiceIndex: index,
        isEtcChoice: false,
      }),
    )
  }

  // 홈탭에서 선택지 내용 변경
  const changeChoiceContent = (text: string, choiceIndex: number) => {
    if (previewMode) {
      return
    }
    dispatch(
      questionSlice.actions.setChoiceContent({
        questionId: question.questionId,
        choiceIndex,
        content: text,
      }),
    )
  }

  // 홈탭 편집모드에서 선택지 삭제
  const deleteChoice = useCallback(
    (index: number) => {
      if (previewMode) {
        return
      }
      dispatch(
        questionSlice.actions.deleteChoice({
          questionId: question.questionId,
          choiceIndex: index,
        }),
      )
    },
    [previewMode, dispatch, question.questionId],
  )

  return (
    <View>
      {question.choices.map((choice, index) => {
        return (
          <View
            key={`choice-${index}`}
            style={{
              flex: 1,
              marginTop: 3,
              marginBottom: 3,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <RadioButton
              value={choice.content}
              status={
                !previewMode || !choice.isSelected ? 'unchecked' : 'checked'
              }
              disabled={!previewMode}
              onPress={() => makeChoice(index)}
            />
            <TextInput
              value={choice.content}
              multiline={true}
              editable={!previewMode}
              style={{
                flex: 1,
                fontSize: 16,
              }}
              onChangeText={(text: string) => changeChoiceContent(text, index)}
            />

            {/* 홈탭 편집모드에서 선택지가 2개 이상일 때만 삭제버튼 표시됨 */}
            {!previewMode && isEditing && question.choices.length > 1 && (
              <View style={{ justifyContent: 'flex-end' }}>
                <IconButton
                  icon={
                    <Feather
                      name="x"
                      size={18}
                      color="black"
                      onPress={() => deleteChoice(index)}
                    />
                  }
                />
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}

export default ChoicesComponent
