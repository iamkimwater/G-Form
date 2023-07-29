import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { setPreviewMode } from './preview-slice'
import { RootState } from '../../types/navigation-type'

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
      <Text>Preview</Text>
    </View>
  )
}
export default PreviewTab
