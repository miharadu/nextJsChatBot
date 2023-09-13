import React from "react"
import { Answer } from "../interfaces"

export interface QuestionDataState {
    currentConversation: Answer[] | []
    setCurrentConversation: (answers: Answer[]) => void
    nextId: number | boolean
    setNextId: (id: number | boolean) => void
}

export const QuestionDataContext = React.createContext<QuestionDataState>({
    currentConversation: [],
    setCurrentConversation: () => {/* init */ },
    nextId: 100,
    setNextId: () => {/* init */ }
})

export const QuestionDataProvider = (props: { children: React.JSX.Element }) => {
    const [currentConversation, setCurrentConversation] = React.useState<Answer[]>([])
    const [nextId, setNextId] = React.useState<number | boolean>(100)

    const providerValue = React.useMemo(() => ({
        currentConversation, setCurrentConversation, nextId, setNextId
    }), [currentConversation, setCurrentConversation, nextId, setNextId])

    return (
        <QuestionDataContext.Provider value={providerValue}>
            {props.children}
        </QuestionDataContext.Provider>
    )
}

const useQuestionData = () => React.useContext(QuestionDataContext)
export default useQuestionData