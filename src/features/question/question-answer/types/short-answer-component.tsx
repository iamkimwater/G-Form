import { TextInput, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../types/navigation-type'

const ShortAnswerComponent = () => {
  const { previewMode } = useSelector((state: RootState) => state.preview)

  return (
    <View>
      <TextInput
        value={''}
        multiline={false}
        placeholder={previewMode ? '내 답변' : '단답형 텍스트'}
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

export default ShortAnswerComponent
