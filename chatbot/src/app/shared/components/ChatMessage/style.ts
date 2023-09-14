import styled from '@emotion/styled'
import { borderRadius, boxShadow, color, defaultTransition, font } from '../../style/globals'
import { css } from '@emotion/react'

export const ChatMessageContainer = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
`

const botAvatarStyleWithProps = (props: { imgUrl: string }) => {
  return css`
    background-image: url(${props.imgUrl});
  `
}

export const BotAvatar = styled.div`
    position: relative;
    top: 25px;
    ${botAvatarStyleWithProps};
    box-shadow: ${boxShadow.default};
    background-color: ${color.white};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 50%;
    height: 32px;
    width: 32px;
`

export const ChatMessageSquare = styled.div`
  position: relative;
  top: 5px;
  left: 38px;
  background-color: ${color.white};
  rotate: 45deg;
  height: 15px;
  width: 15px;
  z-index: 1;
`

export const ChatMessageContainerInner = styled.div`
  display: inline-block;
  position: relative;
  left: 10px;
  margin: 5px 0;
  width: calc(100% - 40px);
  background-color: ${color.white};
  box-shadow: ${boxShadow.default};
  text-align: left;
  border-radius: ${borderRadius.default};
  padding: 20px;
`

export const ButtonContainer = styled.div`
  align-items: center;
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
    & > * { // todo use mui palette/theme instead of using !important - ccareful with !important
      transition: ${defaultTransition.default} !important;
      background-color: ${color.darkblue} !important;
      color: ${color.white} !important; 
      font-family: ${font.regular} !important;
      margin: 0 5px !important;
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