import { IconButton } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'

const QuestionAddButtonComponent = () => {
  return (
    <IconButton
      icon={<MaterialIcons name="add-circle-outline" size={25} color="black" />}
    />
  )
}

export default QuestionAddButtonComponent
