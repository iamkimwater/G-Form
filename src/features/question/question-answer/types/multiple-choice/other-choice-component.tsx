import React, { useRef } from 'react'
import { TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import { questionSlice } from '../../../../../store/slices/question-slice'
import { RootState } from '../../../../../types/navigation-type'
import { MultipleChoiceComponentProps } from '../../../../../types/props'
import { IconButton } from '@react-native-material/core'
import { Feather } from '@expo/vector-icons'

const OtherChoiceComponent: React.FC<MultipleChoiceComponentProps> = ({
  question,
}) => {
  const textInputRef = useRef<TextInput>()
  const { previewMode } = useSelector((root: RootState) => root.preview)
  const dispatch = useDispatch()

  const onDeleteOtherChoice = () => {
    dispatch(
      questionSlice.actions.deleteOtherChoice({
        questionId: question.questionId,
      }),
    )
  }
  const changeOtherChoice = (text: string) => {
    dispatch(
      questionSlice.actions.setOtherChoice({
        questionId: question.questionId,
        content: text,
      }),
    )
  }
  const makeOtherChoice = () => {
    if (!previewMode) {
      return
    }
    dispatch(
      questionSlice.actions.makeChoice({
        questionId: question.questionId,
        isOtherChoice: true,
      }),
    )
    if (textInputRef.current) {
      textInputRef.current.focus()
    }
  }
  const onHandleFocus = () => {
    if (!previewMode) {
      return
    }
    dispatch(
      questionSlice.actions.makeChoice({
        questionId: question.questionId,
        isOtherChoice: true,
      }),
    )
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RadioButton
          value={'기타'}
          status={
            !previewMode || !question.otherChoice.isSelected
              ? 'unchecked'
              : 'checked'
          }
          disabled={!previewMode}
          onPress={makeOtherChoice}
        />
        <TextInput
          ref={textInputRef}
          placeholder={'기타'}
          value={previewMode ? question.otherChoice.content : '기타'}
          multiline={!previewMode}
          editable={previewMode}
          style={{
            flex: 1,
            fontSize: 16,
          }}
          onChangeText={changeOtherChoice}
          onFocus={onHandleFocus}
        />
        {!previewMode ? (
          <View style={{ justifyContent: 'flex-end' }}>
            <IconButton
              icon={
                <Feather
                  name="x"
                  size={18}
                  color="black"
                  onPress={onDeleteOtherChoice}
                />
              }
            />
          </View>
        ) : null}
      </View>
    </View>
  )
}

export default OtherChoiceComponent
