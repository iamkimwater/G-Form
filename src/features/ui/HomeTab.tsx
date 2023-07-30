import { FlatList } from 'react-native'
import TitleComponent from '../title/title-component'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import QuestionComponent from '../question/question-component'

const HomeTab = () => {
  const { questionIds } = useSelector(
    (state: RootState) => state.question.formQuestions,
  )

  return (
    <FlatList
      ListHeaderComponent={<TitleComponent />}
      data={questionIds}
      renderItem={({ item }) => (
        <QuestionComponent key={item} questionId={item} />
      )}
      keyExtractor={(item, index) => `${item}`}
    ></FlatList>
  )
}

export default HomeTab
