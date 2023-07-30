import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button } from '@react-native-material/core'
import { ActionSheetComponentProps } from '../../../types/props'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { QUESTION_TYPE } from '../../../types/enums'
import { questionSlice } from '../../../store/slices/question-slice'

const ActionSheetComponent: React.FC<ActionSheetComponentProps> = ({
  questionId,
}) => {
  const { showActionSheetWithOptions } = useActionSheet()

  const dispatch = useDispatch()

  const selectQuestionType = (questionType: QUESTION_TYPE) =>
    dispatch(
      questionSlice.actions.setQuestionType({
        questionId,
        newType: questionType,
      }),
    )

  const changeQuestionType = () => {
    const options = ['단답형', '장문형', '객관식', '체크박스']
    const cancelButtonIndex = 4

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            selectQuestionType(QUESTION_TYPE.shortAnswer)
            break

          case 1:
            selectQuestionType(QUESTION_TYPE.longAnswer)
            break

          case 2:
            selectQuestionType(QUESTION_TYPE.multipleChoice)
            break

          case 3:
            selectQuestionType(QUESTION_TYPE.checkbox)
            break

          case cancelButtonIndex:
            selectQuestionType(QUESTION_TYPE.multipleChoice)
            break
        }
      },
    )
  }

  return (
    <View>
      <Button
        title="Select Question Type"
        titleStyle={{ fontSize: 16 }}
        contentContainerStyle={{ height: 40 }}
        onPress={changeQuestionType}
      />
    </View>
  )
}

export default ActionSheetComponent
