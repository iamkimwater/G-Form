import { FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { setPreviewMode } from '../../store/slices/preview-slice'
import { PreviewProps, RootState } from '../../types/navigation-type'
import TitleComponent from '../title/title-component'
import QuestionIntroComponent from '../question/question-intro-component'
import { questionSlice } from '../../store/slices/question-slice'

const PreviewTab: React.FC<PreviewProps> = (questionId) => {
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

  const changeEditingState = () => {
    dispatch(questionSlice.actions.setEditingQuestionId())
  }

  return (
    <FlatList
      ListHeaderComponent={<TitleComponent />}
      data={questions}
      renderItem={({ item }) => (
        <QuestionIntroComponent
          key={item.questionId}
          question={item}
          changeEditingState={changeEditingState}
        />
      )}
      keyExtractor={(item, index) => `${item.questionId}`}
    ></FlatList>
  )
}
export default PreviewTab
