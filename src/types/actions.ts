import { PayloadAction } from '@reduxjs/toolkit'

// title
export type SetPendingTitleAction = PayloadAction<string>
export type SetPendingDescriptionAction = PayloadAction<string>

// question
export type setEditingQuestionIdAction = PayloadAction<number | null>
