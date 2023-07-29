import { IconButton } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'

const QuestionCopyButtonComponent = () => {
  return (
    <IconButton
      icon={<MaterialIcons name="content-copy" size={25} color="black" />}
    />
  )
}

export default QuestionCopyButtonComponent
