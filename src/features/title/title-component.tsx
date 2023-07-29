import { TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import {
  setDescription,
  setPendingDescription,
  setPendingTitle,
  setTitle,
} from './title-slice'
import { useEffect } from 'react'

const TitleComponent = () => {
  const { title, description, pendingTitle, pendingDescription } = useSelector(
    (state: RootState) => state.title.formTitle,
  )

  const dispatch = useDispatch()

  const tryChangeTitle = (text: string) => {
    if (text !== title) {
      dispatch(setPendingTitle(text))
    }
  }

  const changeTitle = () => {
    if (pendingTitle !== title) {
      dispatch(setTitle())
      console.log(`설문지제목변경: ${pendingTitle}`)
    }
  }

  const tryChangeDescription = (text: string) => {
    if (text !== description) {
      dispatch(setPendingDescription(text))
    }
  }

  const changeDescription = () => {
    if (pendingDescription !== description) {
      dispatch(setDescription())
      console.log(`설문지설명변경: ${pendingDescription}`)
    }
  }

  return (
    <View
      style={{
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderRadius: 5,
      }}
    >
      <TextInput
        value={pendingTitle}
        multiline={true}
        onChangeText={tryChangeTitle}
        onBlur={changeTitle}
        style={{
          marginTop: 20,
          marginStart: 20,
          marginEnd: 20,
          fontSize: 30,
          color: '#000000',
        }}
      />
      <TextInput
        placeholder="설문지 설명"
        multiline={true}
        value={pendingDescription}
        onChangeText={tryChangeDescription}
        onBlur={changeDescription}
        style={{
          margin: 20,
          fontSize: 16,
          color: '#000000',
        }}
      />
    </View>
  )
}
export default TitleComponent
