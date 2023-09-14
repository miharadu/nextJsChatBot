import React from "react"
import useQuestionData from "../../context/QuestionDataContext"
import { ChatMessageContainer, ChatMessageContainerInner, ButtonContainer, BotAvatar, ChatMessageSquare } from "./style"
import { Button } from "@mui/material-next"
import { Answer, Question } from "../../interfaces"

const imageUrl = "./favicon-32x32.png"

export const ChatMessage = (props: {
    questionData: Question,
    buttonsDisabled: boolean,
}) => {
    const { currentConversation, setCurrentConversation, setNextId } = useQuestionData()

    const updateConversationCallback = React.useCallback((lastAnswer: Answer) => {
        const fullConversation = [...currentConversation]
        fullConversation.push(lastAnswer)
        setCurrentConversation(fullConversation)
    }, [props.questionData])

    const chosenAnswer: Answer | undefined = React.useMemo(() => {
        return currentConversation.find((answer) => answer.name === props.questionData?.name)
    }, [currentConversation, props.questionData])

    return (
        <ChatMessageContainer>
            <BotAvatar imgUrl={imageUrl}><ChatMessageSquare /></BotAvatar>
            <ChatMessageContainerInner>
                {props.questionData?.text}
                <ButtonContainer >
                    {props.questionData?.uiType === "button" &&
                        props.questionData?.valueOptions.map((valueOption) => (
                            <Button
                                key={props.questionData?.id + valueOption.nextId.toString() + valueOption.value.toString()}
                                disabled={props.buttonsDisabled}
                                style={{ opacity: `${!props.buttonsDisabled || chosenAnswer?.value == valueOption.value ? '1' : '0.3'}` }}
                                // todo instead of inline styling, use theme/palette mui
                                onClick={() => {
                                    const lastAnswer: Answer = { name: props.questionData?.name, value: valueOption.value }
                                    updateConversationCallback(lastAnswer)
                                    setNextId(valueOption.nextId)
                                }}
                            >
                                {valueOption.text}
                            </Button>
                        ))
                    }
                </ButtonContainer>
            </ChatMessageContainerInner>
        </ChatMessageContainer >
    )
}