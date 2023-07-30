import { TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import { titleSlice } from '../../store/slices/title-slice'
import { useCallback, useMemo } from 'react'

const TitleComponent = () => {
  const { title, description } = useSelector((state: RootState) => state.title)

  const dispatch = useDispatch()

  const changeTitle = useCallback(
    (text: string) => {
      if (text !== title) {
        dispatch(titleSlice.actions.setTitle({ title: text }))
      }
    },
    [title],
  )

  const titleTextInput = useMemo(() => {
    return (
      <TextInput
        value={title}
        multiline={true}
        onChangeText={changeTitle}
        style={{
          marginTop: 20,
          marginStart: 20,
          marginEnd: 20,
          fontSize: 30,
          color: '#000000',
        }}
      />
    )
  }, [title])

  const changeDescription = useCallback(
    (text: string) => {
      if (text !== description) {
        dispatch(titleSlice.actions.setDescription({ description: text }))
      }
    },
    [description],
  )

  const descriptionTextInput = useMemo(() => {
    return (
      <TextInput
        placeholder="설문지 설명"
        multiline={true}
        value={description}
        onChangeText={changeDescription}
        style={{
          margin: 20,
          fontSize: 16,
          color: '#000000',
        }}
      />
    )
  }, [description])

  return (
    <View
      style={{
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderRadius: 5,
      }}
    >
      {titleTextInput}
      {descriptionTextInput}
    </View>
  )
}
export default TitleComponent
