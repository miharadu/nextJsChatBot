# nextJsChatBot

## Features

- [x] Load the [chat bot data](flow.json) asynchronously or via SSR
- [x] The chat bot flow starts with question id 100
- [x] Use the chosen option‘s nextId to guide the user through the dynamic flow
- [x] All previously entered answers need to be displayed
- [x] If the nextId is false, the flow is terminated and the following message is shown: „Herzlichen Dank für Ihre Angaben“
- [x] Finally the answers are sent combined as a PUT request to [this endpoint](https://virtserver.swaggerhub.com/L8475/task/1.0.1/conversation) (see [OpenAPI specification](https://app.swaggerhub.com/apis-docs/L8475/task/1.0.1) for details)


All features have been implemented

## Tools & Technology Stack

*   Visual Studio Code
*   Git
*   Typescript 4+ (Strict Mode)
*   React 17+
*   Material UI 4+ and JSS - instead of JSS, I used emotion, since emotion is now the default with MUI and many developer teams that used JSS in the past are rewriting their components in emotion
