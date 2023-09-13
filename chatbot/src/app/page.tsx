'use client'
import * as React from 'react'
import { ChatContainer, ChatContent, ChatHeader, EndMessage } from './shared/style/pageStyle'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import { ChatMessage } from './shared/components/ChatMessage/ChatMessage'
import { jsonQuestions, sendAnswers } from './shared/API'
import useQuestionData from './shared/context/QuestionDataContext'
import { Question } from './shared/interfaces'

export default function Home() {
  const [questionsJsonFile, setQuestionsJsonFile] = React.useState<Question[]>([])
  const [shownQuestionsList, setShownQuestionsList] = React.useState<Question[]>([])
  const [showEndMessage, setShowEndMessage] = React.useState<boolean>(false)

  const { currentConversation, nextId, setNextId } = useQuestionData()

  React.useEffect(() => {
    jsonQuestions.then((questions) => {
      setQuestionsJsonFile(questions)
    })
  }, [])

  React.useEffect(() => {
    setNextId(questionsJsonFile[0]?.id)
  }, [questionsJsonFile])

  const nextQuestiontoShow = React.useCallback(() => {
    if (nextId) {
      return questionsJsonFile.find((question) => question.id === nextId)
    } else {
      return null
    }
  }, [nextId])

  React.useEffect(() => {
    if (nextId === false) {
      setShowEndMessage(true)
    }
  }, [nextId])

  React.useEffect(() => {
    nextQuestiontoShow()
  }, [nextId])

  const questionsListToShow = React.useCallback(() => {
    const questionsList: Question[] = [...shownQuestionsList]
    const nextQuestion = nextQuestiontoShow()
    if (nextQuestion !== undefined && nextQuestion !== null) {
      questionsList.push(nextQuestion)
    }
    return questionsList
  }, [nextQuestiontoShow])

  const renderQuestions = React.useCallback(() => {
    return questionsListToShow().map((question: Question, i: number, questions: string | any[]) => {
      return (
        <ChatMessage key={question.id + question.name} questionData={question} buttonsDisabled={i + 1 !== questions.length || showEndMessage} />
      )
    })
  }, [questionsListToShow, showEndMessage])

  React.useEffect(() => {
    setShownQuestionsList(questionsListToShow())
  }, [questionsListToShow])

  React.useEffect(() => {
    if (showEndMessage) sendAnswers(currentConversation)
  }, [showEndMessage])

  return (
    <main >
      <ChatContainer >
        <ChatHeader>
          <div>BotZuri</div>
          <div><IconButton aria-label="delete" color="inherit"><DeleteForeverOutlinedIcon /></IconButton></div>
          <div><IconButton aria-label="close" color="inherit"><CloseIcon /></IconButton></div>
        </ChatHeader>
        <ChatContent>
          {renderQuestions()}
          {showEndMessage &&
            <EndMessage>Herzlichen Dank für Ihre Angaben</EndMessage>
          }
        </ChatContent>
      </ ChatContainer>
    </main >
  )
}