import { TextInput, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../types/navigation-type'
import { LongAnswerComponentProps } from '../../../../types/props'
import { questionSlice } from '../../../../store/slices/question-slice'

const LongAnswerComponent: React.FC<LongAnswerComponentProps> = ({
  question,
}) => {
  const { previewMode } = useSelector((state: RootState) => state.preview)

  const dispatch = useDispatch()

  // 미리보기탭에서 답변 내용 변경
  const changeContent = useCallback(
    (text: string) => {
      if (!previewMode) {
        return
      }
      dispatch(
        questionSlice.actions.setContent({
          questionId: question.questionId,
          answer: text,
        }),
      )
    },
    [question.answer],
  )

  return (
    <View>
      <TextInput
        value={previewMode ? question.answer : '장문형 텍스트'}
        multiline={true}
        placeholder={previewMode ? '내 답변' : '장문형 텍스트'}
        editable={previewMode}
        onChangeText={(text: string) => changeContent(text)}
        style={{
          fontSize: 16,
          paddingTop: 20,
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderColor: '#c9c9c9',
        }}
      />
    </View>
  )
}
export default LongAnswerComponent
