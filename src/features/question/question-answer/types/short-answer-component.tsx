import { TextInput, View } from 'react-native'
import React from 'react'
import { ShortAnswerComponentProps } from '../../../../types/props'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../types/navigation-type'

const ShortAnswerComponent: React.FC<ShortAnswerComponentProps> = () => {
  const previewMode = useSelector(
    (state: RootState) => state.preview.previewMode,
  )

  return (
    <View>
      <TextInput
        value={''}
        multiline={true}
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
