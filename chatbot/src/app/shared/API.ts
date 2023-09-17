// import questions from "./flow.json" // import locally (alternative)
// export const jsonQuestions: Question[] = questions

import { Answer, Question } from "./interfaces"

export const jsonQuestions: Promise<Question[]> = // todo Loading spinner and error handling
    // options: getStaticProps with revalidate (z.B. revalidate: 60 // seconds), getStaticPaths, getServerSideProps (for SSR)
    fetch('http://miha-codechallenge.s3.eu-central-1.amazonaws.com/flow.json')
        .then(response => response.json())
        .then(jsonResponse => {
            return jsonResponse.map((q: Question) => ({
                id: q.id,
                name: q.name,
                text: q.text,
                uiType: q.uiType,
                valueType: q.valueType,
                valueOptions: [{
                    nextId: q.valueOptions[0].nextId,
                    value: q.valueOptions[0].value,
                    text: q.valueOptions[0].text
                },
                {
                    nextId: q.valueOptions[1].nextId,
                    value: q.valueOptions[1].value,
                    text: q.valueOptions[1].text
                }]
            }))
        })
        .catch(error => { console.log(error) })

export const sendAnswers = (fullConversation: Answer[]) => {  // todo Loading spinner and error handling
    fetch('https://virtserver.swaggerhub.com/L8475/task/1.0.1/conversation', {
        method: "PUT",
        body: JSON.stringify(fullConversation),
        headers: [
            ['Content-Type', 'application/json']
        ]
    })
        .then(response => {
            if (response.status === 400) {
                return Promise.reject(new Error("invalid conversation posted"))
            } else if (response.status === 204) {
                console.log("conversation successfully saved")
                return Promise.resolve()
            }
        })
}

