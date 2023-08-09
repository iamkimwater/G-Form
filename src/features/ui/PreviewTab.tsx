import { FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { setPreviewMode } from '../../store/slices/preview-slice'
import { PreviewProps, RootState } from '../../types/navigation-type'
import TitleComponent from '../title/title-component'
import NonEditingQuestionComponent from '../question/non-editing-question-component'
import { questionSlice } from '../../store/slices/question-slice'

const PreviewTab: React.FC<PreviewProps> = () => {
  const { questions } = useSelector((state: RootState) => state.question)

  const dispatch = useDispatch()

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setPreviewMode(true))

      return () => {
        dispatch(setPreviewMode(false))
      }
    }, [dispatch]),
  )

  const changeEditingState = (questionId) => {
    dispatch(
      questionSlice.actions.setEditingQuestionId({ questionId: questionId }),
    )
  }

  return (
    <FlatList
      removeClippedSubviews={false}
      ListHeaderComponent={<TitleComponent />}
      data={questions}
      renderItem={({ item }) => (
        <NonEditingQuestionComponent
          key={item.questionId}
          question={item}
          changeEditingState={() => changeEditingState(item.questionId)}
        />
      )}
      keyExtractor={(item, index) => `${item.questionId}`}
    />
  )
}
export default PreviewTab
