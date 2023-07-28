import QuestionTitleComponent from './question-title/question-title-component'
import { View } from 'react-native'
import ActionSheetComponent from './action-sheet/action-sheet-component'
import QuestionAnswerComponent from './question-answer/question-answer-component'
import QuestionToolbarComponent from './question-toolbar/question-toolbar-component'

const QuestionComponent = () => {
  // 질문구성:

  // 제목영역
  // 질문타입선택영역 (액션시트)
  // 질문타입에따른답변영역
  // 질문툴바영역

  return (
    <View>
      <QuestionTitleComponent />
      <ActionSheetComponent />
      <QuestionAnswerComponent />
      <QuestionToolbarComponent />
    </View>
  )
}
export default QuestionComponent
