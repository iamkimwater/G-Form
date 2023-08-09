import React, { useRef } from 'react'
import { Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Checkbox, RadioButton } from 'react-native-paper'
import { questionSlice } from '../../../../../store/slices/question-slice'
import { EtcChoiceComponentProps } from '../../../../../types/props'
import { IconButton } from '@react-native-material/core'
import { Feather } from '@expo/vector-icons'
import { QUESTION_TYPE } from '../../../../../types/enums'

const EtcChoiceComponent: React.FC<EtcChoiceComponentProps> = ({
  question,
  editingQuestionId,
  previewMode,
}) => {
  const isEditing = editingQuestionId === question.questionId
  const textInputRef = useRef<TextInput>()
  const dispatch = useDispatch()

  // 미리보기탭에서 기타선택지 고르기
  const makeEtcChoice = () => {
    if (!previewMode) {
      return
    }
    dispatch(
      questionSlice.actions.makeChoice({
        questionId: question.questionId,
        isEtcChoice: true,
      }),
    )
    if (textInputRef.current) {
      textInputRef.current.focus()
    }
  }

  // 미리보기탭에서 기타선택지 내용 변경
  const changeEtcChoiceContent = (text: string) => {
    dispatch(
      questionSlice.actions.setEtcChoiceContent({
        questionId: question.questionId,
        content: text,
      }),
    )
  }

  const handleFocus = () => {
    if (!previewMode) {
      return
    }
    dispatch(
      questionSlice.actions.makeChoice({
        questionId: question.questionId,
        isEtcChoice: true,
      }),
    )
  }

  // 홈탭 편집모드에서 기타선택지 삭제
  const deleteEtcChoice = () => {
    dispatch(
      questionSlice.actions.deleteEtcChoice({
        questionId: question.questionId,
      }),
    )
  }

  return (
    <View>
      <View
        style={{
          flex: 1,
          marginTop: 1,
          marginBottom: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {question.questionType === QUESTION_TYPE.multipleChoice ? (
          <RadioButton
            value={'기타'}
            status={
              !previewMode || !question.etcChoice.isSelected
                ? 'unchecked'
                : 'checked'
            }
            disabled={!previewMode}
            onPress={makeEtcChoice}
          />
        ) : (
          <Checkbox
            status={
              !previewMode || !question.etcChoice.isSelected
                ? 'unchecked'
                : 'checked'
            }
            disabled={!previewMode}
            onPress={makeEtcChoice}
          />
        )}

        {previewMode ? <Text style={{ fontSize: 16 }}>기타:</Text> : null}
        <TextInput
          ref={textInputRef}
          value={previewMode ? question.etcChoice.content : '기타...'}
          multiline={!previewMode}
          editable={previewMode}
          style={
            !previewMode
              ? {
                  flex: 1,
                  fontSize: 16,
                }
              : {
                  flex: 1,
                  fontSize: 16,
                  marginLeft: 10,
                  borderBottomWidth: 0.7,
                  borderColor: '#bbbbbb',
                }
          }
          onChangeText={changeEtcChoiceContent}
          onFocus={handleFocus}
        />

        {/* 홈탭 편집모드일 때만 삭제버튼 표시됨 */}
        {!previewMode && isEditing ? (
          <View style={{ justifyContent: 'flex-end' }}>
            <IconButton
              icon={
                <Feather
                  name="x"
                  size={18}
                  color="black"
                  onPress={deleteEtcChoice}
                />
              }
            />
          </View>
        ) : null}
      </View>
    </View>
  )
}

export default EtcChoiceComponent
