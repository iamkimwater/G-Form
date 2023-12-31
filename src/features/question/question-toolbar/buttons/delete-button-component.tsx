import { IconButton } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { DeleteButtonComponentProps } from '../../../../types/props'
import { useDispatch } from 'react-redux'
import { questionSlice} from '../../../../store/slices/question-slice'

const QuestionDeleteButtonComponent: React.FC<DeleteButtonComponentProps> = ({
  questionId,
}) => {
  const dispatch = useDispatch()

  const deleteThisQuestion = () => {
    dispatch(questionSlice.actions.deleteQuestion({ questionId }))
  }
  return (
    <IconButton
      icon={<MaterialIcons name="delete" size={25} color="black" />}
      onPress={deleteThisQuestion}
    />
  )
}

export default QuestionDeleteButtonComponent
