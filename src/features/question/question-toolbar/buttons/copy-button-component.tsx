import React from 'react'
import { IconButton } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'
import { CopyButtonComponentProps } from '../../../../types/props'
import { useDispatch } from 'react-redux'
import { questionSlice } from '../../../../store/slices/question-slice'

const QuestionCopyButtonComponent: React.FC<CopyButtonComponentProps> = ({
  questionId,
}) => {
  const dispatch = useDispatch()

  const copyThisQuestion = () => {
    dispatch(questionSlice.actions.copyQuestion({ questionId }))
  }

  return (
    <IconButton
      icon={<MaterialIcons name="content-copy" size={25} color="black" />}
      onPress={copyThisQuestion}
    />
  )
}

export default QuestionCopyButtonComponent
