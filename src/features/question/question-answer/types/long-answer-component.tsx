import { TextInput, View } from 'react-native'
import React from 'react'
import { LongAnswerComponentProps } from '../../../../types/props'

const LongAnswerComponent: React.FC<LongAnswerComponentProps> = ({
  previewMode,
}) => {
  return (
    <View>
      <TextInput
        value={''}
        multiline={true}
        placeholder={previewMode ? '내 답변' : '장문형 텍스트'}
        editable={previewMode}
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
