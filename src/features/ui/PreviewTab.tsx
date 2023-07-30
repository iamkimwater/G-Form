import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { setPreviewMode } from '../../store/slices/preview-slice'
import { RootState } from '../../types/navigation-type'
import ShortAnswerComponent from '../question/question-answer/types/short-answer-component'
import LongAnswerComponent from '../question/question-answer/types/long-answer-component'
import MultipleChoiceComponent from '../question/question-answer/types/multiple-choice-component'
import CheckboxComponent from '../question/question-answer/types/checkbox-component'

const PreviewTab = () => {
  const previewMode = useSelector(
    (state: RootState) => state.preview.previewMode,
  )

  const dispatch = useDispatch()

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setPreviewMode(true))

      return () => {
        dispatch(setPreviewMode(false))
      }
    }, [dispatch]),
  )

  console.log(`previewMode: ${previewMode}`)

  return (
    <View>
      <View
        style={{
          margin: 10,
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 0.5,
        }}
      >
        <ShortAnswerComponent />
      </View>
      <View
        style={{
          margin: 20,
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 0.5,
        }}
      >
        <LongAnswerComponent />
      </View>
      <View
        style={{
          margin: 20,
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 0.5,
        }}
      >
        <MultipleChoiceComponent />
      </View>
      <View
        style={{
          margin: 20,
          padding: 20,
          borderStyle: 'solid',
          borderWidth: 0.5,
        }}
      >
        <CheckboxComponent />
      </View>
    </View>
  )
}
export default PreviewTab
