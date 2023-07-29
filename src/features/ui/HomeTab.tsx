import { ScrollView } from 'react-native'
import TitleComponent from '../title/title-component'
import QuestionsComponent from '../questions/questions-component'

const HomeTab = () => {
  return (
    <ScrollView>
      <TitleComponent />
      <QuestionsComponent />
    </ScrollView>
  )
}

export default HomeTab
