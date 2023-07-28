import { View } from 'react-native'
import RequiredToggleComponent from './buttons/required-toggle-component'
import CopyButtonComponent from './buttons/copy-button-component'
import DeleteButtonComponent from './buttons/delete-button-component'
import AddButtonComponent from './buttons/add-button-component'

const QuestionToolbarComponent = () => {
  return (
    <View>
      <RequiredToggleComponent />
      <CopyButtonComponent />
      <DeleteButtonComponent />
      <AddButtonComponent />
    </View>
  )
}
export default QuestionToolbarComponent
