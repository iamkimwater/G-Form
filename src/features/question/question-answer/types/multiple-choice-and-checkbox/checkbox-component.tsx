import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from 'react-native-paper'
import { questionSlice } from '../../../../../store/slices/question-slice'
import { RootState } from '../../../../../types/navigation-type'
import { CheckboxComponentProps } from '../../../../../types/props'
import { Button } from '@react-native-material/core'
import EtcChoiceComponent from './etc-choice-component'
import ChoicesComponent from './choices-component'

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ question }) => {
  const { previewMode } = useSelector((root: RootState) => root.preview)
  const { editingQuestionId } = useSelector(
    (state: RootState) => state.question,
  )
  const isEditing = editingQuestionId === question.questionId

  const dispatch = useDispatch()

  const onAddChoice = useCallback(() => {
    dispatch(
      questionSlice.actions.addChoice({
        questionId: question.questionId,
        newChoice: `옵션${question.choices.length + 1}`,
      }),
    )
  }, [dispatch, question.questionId, question.choices.length])

  const addEtcChoice = () => {
    dispatch(
      questionSlice.actions.addEtcChoice({
        questionId: question.questionId,
      }),
    )
  }

  return (
    <View>
      <ChoicesComponent
        question={question}
        editingQuestionId={editingQuestionId}
        previewMode={previewMode}
      />
      {question.etcChoice.useState ? (
        <EtcChoiceComponent
          question={question}
          editingQuestionId={editingQuestionId}
          previewMode={previewMode}
        />
      ) : null}

      {!previewMode && isEditing && (
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Checkbox status={'unchecked'} />
          <Button
            variant="text"
            title="옵션 추가"
            color={'#797979'}
            titleStyle={{ fontSize: 16 }}
            onPress={onAddChoice}
          />
          {!question.etcChoice.useState && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16 }}>또는</Text>
              <Button
                variant="text"
                title="'기타' 추가"
                color={'#2640b4'}
                titleStyle={{ fontSize: 16 }}
                onPress={addEtcChoice}
              />
            </View>
          )}
        </View>
      )}
    </View>
  )
}

export default CheckboxComponent
