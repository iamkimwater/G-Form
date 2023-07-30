import { FlatList } from 'react-native'
import TitleComponent from '../title/title-component'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import QuestionComponent from '../question/question-component'

const HomeTab = () => {
  const { questions } = useSelector((state: RootState) => state.question)

  return (
    <FlatList
      ListHeaderComponent={<TitleComponent />}
      data={questions}
      renderItem={({ item }) => (
        <QuestionComponent key={item.questionId} question={item} />
      )}
      keyExtractor={(item, index) => `${item.questionId}`}
    ></FlatList>
  )
}

export default HomeTab
