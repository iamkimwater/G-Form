import { PayloadAction } from '@reduxjs/toolkit'
import { QUESTION_TYPE } from './enums'

// title
export type SetTitleAction = PayloadAction<{
  title: string
}>
export type SetDescriptionAction = PayloadAction<{
  description: string
}>

// question
export type setEditingQuestionIdAction = PayloadAction<{
  questionId: number
}>

export type setPendingQuestionTitleAction = PayloadAction<{
  questionId: number
  pendingQuestionTitle: string
}>

export type setQuestionTitleAction = PayloadAction<{
  questionId: number
}>

export type SetQuestionTypeAction = PayloadAction<{
  questionId: number
  newType: QUESTION_TYPE
}>

export type SetQuestionRequiredAction = PayloadAction<{
  questionId: number
  required: boolean
}>

export type CopyQuestionAction = PayloadAction<{
  questionId: number
}>

export type DeleteQuestionAction = PayloadAction<{
  questionId: number
}>

export type AddChoiceAction = PayloadAction<{
  questionId: number
  newChoice: string
}>

export type MakeChoiceAction = PayloadAction<{
  questionId: number
  choiceIndex?: number
  isOtherChoice: boolean
}>

export type DeleteChoiceAction = PayloadAction<{
  questionId: number
  choiceIndex: number
}>

export type AddOtherChoiceAction = PayloadAction<{
  questionId: number
}>

export type DeleteOtherChoiceAction = PayloadAction<{
  questionId: number
}>
