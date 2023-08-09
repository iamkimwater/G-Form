import { TouchableOpacity, View } from 'react-native'
import QuestionTitleComponent from './question-title/question-title-component'
import ActionSheetComponent from './action-sheet/action-sheet-component'
import QuestionAnswerComponent from './question-answer/question-answer-component'
import QuestionToolbarComponent from './question-toolbar/question-toolbar-component'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/navigation-type'
import { EditingQuestionComponentProps } from '../../types/props'

const EditingQuestionComponent: React.FC<EditingQuestionComponentProps> = ({
  question,
  changeEditingState,
}) => {
  const { previewMode } = useSelector((root: RootState) => root.preview)

  return (
    <TouchableOpacity
      onPress={changeEditingState}
      style={{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderStyle: 'solid',
        borderTopWidth: 7,
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'space-between',
      }}
      activeOpacity={1}
    >
      <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
        <QuestionTitleComponent
          questionId={question.questionId}
          questionTitle={question.questionTitle}
        />
      </View>
      <View>
        {!previewMode ? (
          <View
            style={{
              marginTop: 10,
              marginStart: 20,
              marginEnd: 20,
              justifyContent: 'space-between',
            }}
          >
            <ActionSheetComponent
              questionId={question.questionId}
              questionType={question.questionType}
            />
          </View>
        ) : null}
        <View
          style={{
            marginTop: 10,
            marginStart: 20,
            marginEnd: 20,
            justifyContent: 'space-between',
          }}
        >
          <QuestionAnswerComponent question={question} />
        </View>
      </View>
      {!previewMode ? (
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginStart: 20,
            marginEnd: 20,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <QuestionToolbarComponent
            questionId={question.questionId}
            questionRequired={question.questionRequired}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

export default EditingQuestionComponent
