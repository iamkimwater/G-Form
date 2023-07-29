import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import QuestionComponent from '../question/question-component'

const QuestionsComponent = () => {
  const { questionIds } = useSelector(
    (state: RootState) => state.question.formQuestions,
  )

  console.log(`questionIds: ${questionIds}`)

  const renderQuestionComponent = (questionId: number) => (
    <QuestionComponent key={questionId} />
  )

  return (
    <View style={{ height: 1000 }}>
      {questionIds.map(renderQuestionComponent)}
    </View>
  )
}

export default QuestionsComponent
