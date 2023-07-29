import { IconButton } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'

const QuestionDeleteButtonComponent = () => {
  return (
    <IconButton
      icon={<MaterialIcons name="delete" size={25} color="black" />}
    />
  )
}

export default QuestionDeleteButtonComponent
