import { IconButton } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addQuestion } from '../../../../store/slices/question-slice'

const QuestionAddButtonComponent = () => {
  const dispatch = useDispatch()

  const addNewQuestion = () => {
    dispatch(addQuestion())
  }

  return (
    <IconButton
      icon={<MaterialIcons name="add-circle-outline" size={25} color="black" />}
      onPress={addNewQuestion}
    />
  )
}

export default QuestionAddButtonComponent
