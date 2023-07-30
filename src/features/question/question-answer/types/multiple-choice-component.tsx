import { TextInput, View, Text, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import { questionSlice } from '../../../../store/slices/question-slice'
import { RootState } from '../../../../types/navigation-type'
import { MultipleChoiceComponentProps } from '../../../../types/props'
import { IconButton } from '@react-native-material/core'
import { Feather } from '@expo/vector-icons'
import { Button } from '@react-native-material/core'

const MultipleChoiceComponent: React.FC<MultipleChoiceComponentProps> = ({
  questionId,
  previewMode,
}) => {
  const question = useSelector((state: RootState) =>
    state.question.questions.find((v) => v.questionId === questionId),
  )

  const choices = question && 'choices' in question ? question.choices : []

  const dispatch = useDispatch()

  const onAddChoice = useCallback(() => {
    dispatch(
      questionSlice.actions.addChoice({
        questionId,
        newChoice: `옵션${choices.length + 1}`,
      }),
    )
  }, [dispatch, questionId, choices.length])

  const onDeleteChoice = useCallback(
    (deletedChoice: string) => {
      dispatch(
        questionSlice.actions.deleteChoice({ questionId, deletedChoice }),
      )
    },
    [dispatch, questionId],
  )

  return (
    <View>
      <FlatList
        data={choices}
        renderItem={({ item: choice, index }) => (
          <View
            key={index}
            style={{
              flex: 1,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <RadioButton value={choice} />
            <TextInput
              value={choice}
              multiline={true}
              editable={!previewMode}
              style={{
                flex: 1,
                fontSize: 16,
              }}
            />
            {choices.length > 1 && (
              <View style={{ justifyContent: 'flex-end' }}>
                <IconButton
                  icon={
                    <Feather
                      name="x"
                      size={18}
                      color="black"
                      onPress={() => onDeleteChoice(choice)}
                    />
                  }
                />
              </View>
            )}
          </View>
        )}
        keyExtractor={(item, index) => `choice-${index}`}
      />
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <RadioButton value={''} />
        <Button
          variant="text"
          title="옵션 추가"
          color={'#797979'}
          titleStyle={{ fontSize: 16 }}
          onPress={onAddChoice}
        />
        <Text style={{ fontSize: 16 }}>또는</Text>
        <Button
          variant="text"
          title="'기타' 추가"
          color={'#2640b4'}
          titleStyle={{ fontSize: 16 }}
        />
      </View>
    </View>
  )
}

export default MultipleChoiceComponent
