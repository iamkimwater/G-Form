import { PayloadAction } from '@reduxjs/toolkit'

// title
export type SetPendingTitleAction = PayloadAction<string>
export type SetPendingDescriptionAction = PayloadAction<string>

// question
export type setEditingQuestionIdAction = PayloadAction<number | null>

export type setPendingQuestionTitleAction = PayloadAction<{
  questionId: number
  pendingQuestionTitle: string
}>

export type setQuestionTitleAction = PayloadAction<{
  questionId: number
}>
