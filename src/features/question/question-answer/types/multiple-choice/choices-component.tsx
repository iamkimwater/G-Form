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

  const dispatch = useDispatch()

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

  const makeChoice = (index) => {
    if (!previewMode) {
      return
    }
    dispatch(
      questionSlice.actions.makeChoice({
        questionId: question.questionId,
        choiceIndex: index,
        isOtherChoice: false,
      }),
    )
  }

  const onDeleteChoice = useCallback(
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
              marginTop: 10,
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
            {!previewMode && question.choices.length > 1 && (
              <View style={{ justifyContent: 'flex-end' }}>
                <IconButton
                  icon={
                    <Feather
                      name="x"
                      size={18}
                      color="black"
                      onPress={() => onDeleteChoice(index)}
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
