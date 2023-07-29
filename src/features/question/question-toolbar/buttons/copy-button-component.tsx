import React from 'react'
import { IconButton } from '@react-native-material/core'
import { MaterialIcons } from '@expo/vector-icons'
import { CopyButtonComponentProps } from '../../../../types/props'
import { useDispatch } from 'react-redux'
import { copyQuestion } from '../../question-slice'

const QuestionCopyButtonComponent: React.FC<CopyButtonComponentProps> = ({
  questionId,
}) => {
  const dispatch = useDispatch()

  const copyThisQuestion = () => {
    dispatch(copyQuestion({ questionId }))
    console.log(`질문 ${questionId} 복사 완료`)
  }

  return (
    <IconButton
      icon={<MaterialIcons name="content-copy" size={25} color="black" />}
      onPress={copyThisQuestion}
    />
  )
}

export default QuestionCopyButtonComponent
