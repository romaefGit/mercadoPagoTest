import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

const rotateKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const gradientKeyFrames = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg);
		/* background-position: 25% 100%; */
	}
	50% {
    opacity: 1;
    transform: translateY(-10px);
		/* background-position: 100% 100%; */
	}
	100% {
    opacity: 0;
    transform: rotate(360deg);
		/* background-position: 25% 100%; */
	}
`

const jumpKeyFrames = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg);
    transform: translateY(0);
		/* background-position: 25% 100%; */
	}
	50% {
    opacity: 1;
    transform: translateY(-10px);
		/* background-position: 100% 100%; */
	}
	100% {
    opacity: 0;
    transform: rotate(360deg);
    transform: translateY(0);
		/* background-position: 25% 100%; */
	}
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`


export const loadRotate = ({ transition = '0.5s', time = '1s', type = 'ease-in' } = {}) => css`
  -webkit-transition: all ${transition} ${type};
  -webkit-animation-name: ${rotateKeyFrames};
  -webkit-animation-duration: ${time};
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  transition: all ${transition} ${type};
  animation-name: ${rotateKeyFrames};
  animation-duration: ${time};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export const loadGradient = ({ time = '1s', type = 'ease' } = {}) => css`
  background: linear-gradient(90deg, #fff, #dd6f7e);
	/* background-size: 200% 200%; */
  animation: ${gradientKeyFrames} ${time} ${type} infinite;
`

export const jumping = ({ time = '1s', type = 'ease-in', iteration = 'infinite' } = {}) => css`
  animation: ${jumpKeyFrames} ${time} ${type} infinite;
`

