import { TextInput, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import { titleSlice } from '../../store/slices/title-slice'
import React, { useCallback, useMemo } from 'react'
import { Button } from '@react-native-material/core'

const TitleComponent = () => {
  const { title, description } = useSelector((state: RootState) => state.title)
  const { previewMode } = useSelector((state: RootState) => state.preview)

  const dispatch = useDispatch()

  const changeTitle = useCallback(
    (text: string) => {
      if (text !== title) {
        dispatch(titleSlice.actions.setTitle({ title: text }))
      }
    },
    [title],
  )

  const changeDescription = useCallback(
    (text: string) => {
      if (text !== description) {
        dispatch(titleSlice.actions.setDescription({ description: text }))
      }
    },
    [description],
  )

  return (
    <View
      style={{
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
      }}
    >
      <View style={{ height: 5, backgroundColor: '#000000' }} />
      <TextInput
        value={title}
        multiline={true}
        onChangeText={changeTitle}
        editable={!previewMode}
        style={{
          marginTop: 20,
          marginStart: 20,
          marginEnd: 20,
          fontSize: 30,
          color: '#000000',
        }}
      />
      {(!previewMode || (previewMode && description)) && (
        <TextInput
          placeholder="설문지 설명"
          multiline={true}
          value={description}
          onChangeText={changeDescription}
          editable={!previewMode}
          style={{
            margin: 20,
            fontSize: 16,
            color: '#000000',
          }}
        />
      )}
      {previewMode && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text>iamkimwater@gmail.com</Text>
          <Button
            variant="text"
            title="계정 전환"
            color={'#797979'}
            titleStyle={{ fontSize: 16 }}
          />
        </View>
      )}
    </View>
  )
}
export default TitleComponent
