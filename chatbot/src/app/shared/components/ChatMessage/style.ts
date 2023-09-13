import styled from '@emotion/styled'
import { borderRadius, boxShadow, color, defaultTransition, font } from '../../style/globals'

export const ChatMessageContainer = styled.div`
  min-height: 100px;
  width: 100%;
`
export const ChatMessageContainerInner = styled.div`
  margin: 10px 0;
  width: 100%;
  background-color: ${color.white};
  box-shadow: ${boxShadow.default};
  text-align: left;
  border-radius: ${borderRadius.default};
  padding: 25px 20px;
`

export const ButtonContainer = styled.div`
  align-items: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
    & > * { // todo use mui palette/theme instead of using !important - ccareful with !important
      transition: ${defaultTransition.default} !important;
      background-color: ${color.darkblue} !important;
      color: ${color.white} !important; 
      font-family: ${font.regular} !important;
      margin: 5px !important;
      box-shadow: ${boxShadow.default} !important;

        :hover{
          background-color: ${color.blueHover} !important;
        }

        :active, :focus{
          background-color: ${color.blueActive} !important;
        }

        :disabled{
          background-color: ${color.orange} !important;
          color: ${color.grey} !important;
        }
    }
`