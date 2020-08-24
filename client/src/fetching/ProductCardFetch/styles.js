import styled from 'styled-components'
import { jumping } from '../../styles/animations'

export const Load = styled.div`
  display: flex;
  margin: 0 auto;
  width: 48px;
`
export const Circle = styled.div`
  & {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    margin: 3px;

    ${jumping()}
  }

  &:nth-of-type(1) {
    background-color: rgb(20, 101, 106);
  }

  &:nth-of-type(2) {
    animation-delay: 0.1s;
    background-color: rgb(250, 114, 104);
  }
  &:nth-of-type(3) {
    animation-delay: 0.2s;
    background-color: rgb(148, 219, 223);
  }
`