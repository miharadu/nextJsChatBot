import styled from '@emotion/styled'
import { defaultTransition, color, font, boxShadow, borderRadius } from './globals'

export const ChatContainer = styled.aside`
  position: relative;
  top: 5px;
  right: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${color.lightgrey4}; 
  overflow: hidden;
  float: right;
  width: 500px;
  height: 90vh;
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.default};
  ${defaultTransition};
`

export const ChatHeader = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: row;
  background-color: ${color.darkblue}; 
  height: 55px;
  padding: 0 20px;
  border-collapse: separate;
  box-shadow: ${boxShadow.header};
    & > * {
            color: ${color.white}; 
            font-family: ${font.bold} !important; 
            font-weight: 700;  
            align-self: center;
    }
    div:nth-child(1)  {
            font-size: 22px;
            flex-grow: 2;
    }
`

export const ChatContent = styled.div`
  padding: 10px 20px;
  position: relative;
  min-height: 100px;
  width: 100%;
`

export const EndMessage = styled.div`
  margin: 20px 0;
  width: 100%;
  background-color: ${color.darkblue};
  color: ${color.white};
  box-shadow: ${boxShadow.default};
  text-align: left;
  border-radius: ${borderRadius.default};
  padding: 25px 20px;
  ${defaultTransition};
`