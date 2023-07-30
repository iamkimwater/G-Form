import TitleComponent from '../title/title-component'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import QuestionComponent from '../question/question-component'
import { questionSlice } from '../../store/slices/question-slice'
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist'
import { IQuestion } from '../../types/form-type'
import draggable from '../../hoc/draggable'

const HomeTab = () => {
  const { questions } = useSelector((state: RootState) => state.question)

  const dispatch = useDispatch()

  const reorderQuestions = (data) => {
    dispatch(
      questionSlice.actions.changeOrder({
        new_questions: data,
      }),
    )
  }

  return (
    <DraggableFlatList
      ListHeaderComponent={<TitleComponent />}
      onDragEnd={({ data }) => reorderQuestions(data)}
      data={questions}
      renderItem={({ item, drag, isActive }: RenderItemParams<IQuestion>) =>
        draggable({ options: { drag, isActive } })(
          <QuestionComponent key={item.questionId} question={item} />,
        )
      }
      keyExtractor={(item, index) => `${item.questionId}`}
    />
  )
}

export default HomeTab
