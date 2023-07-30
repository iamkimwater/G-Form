import React from 'react'
import { Text, View } from 'react-native'
import { Switch } from '@react-native-material/core'
import { RequiredToggleComponentProps } from '../../../../types/props'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../types/navigation-type'
import { setQuestionRequired } from '../../../../store/slices/question-slice'

const QuestionRequiredToggleComponent: React.FC<
  RequiredToggleComponentProps
> = ({ questionId }) => {
  const question = useSelector(
    (state: RootState) => state.question.formQuestions.questions[questionId],
  )

  const dispatch = useDispatch()

  const changeQuestionRequired = (required: boolean) => {
    dispatch(setQuestionRequired({ questionId, required }))
    console.log(`질문${questionId} 필수 여부: ${required}`)
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>필수</Text>
      <Switch
        value={question?.questionRequired || false}
        onValueChange={changeQuestionRequired}
      />
    </View>
  )
}

export default QuestionRequiredToggleComponent
