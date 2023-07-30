import { Text, TouchableOpacity, View } from 'react-native'
import TitleComponent from '../title/title-component'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import QuestionComponent from '../question/question-component'
import { questionSlice } from '../../store/slices/question-slice'
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist'
import { IQuestion } from '../../types/form-type'

const HomeTab = () => {
  const { questions } = useSelector((state: RootState) => state.question)

  const dispatch = useDispatch()

  const reorderQuestions = (data) => {
    console.log('드래그 끝남')
    dispatch(
      questionSlice.actions.changeOrder({
        new_questions: data,
      }),
    )
  }

  return (
    <DraggableFlatList
      ListHeaderComponent={<TitleComponent />}
      onDragBegin={() => {
        console.log('드래그 시작돔')
      }}
      onDragEnd={({ data }) => reorderQuestions(data)}
      data={questions}
      renderItem={({ item, drag, isActive }: RenderItemParams<IQuestion>) => (
        <View>
          <TouchableOpacity
            onLongPress={drag}
            disabled={isActive}
            style={{ backgroundColor: isActive ? '#b9b9b9' : 'white' }}
          >
            <View
              style={{
                backgroundColor: 'grey',
                height: 20,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Text>드래그 아이콘</Text>
            </View>
          </TouchableOpacity>
          <QuestionComponent key={item.questionId} question={item} />
        </View>
      )}
      keyExtractor={(item, index) => `${item.questionId}`}
    />
  )
}

export default HomeTab
