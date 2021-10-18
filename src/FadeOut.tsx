import * as React from 'react'
import styled, { keyframes } from 'styled-components';

type Timers = string | number

const fadeOutAnimation = keyframes`
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
}`;

const FadeOutDiv = styled.div <{ timer: Timers}>`
  animation: 3s ${fadeOutAnimation};
`;


export interface FadeOutProps {
  timer: Timers
}

const FadeOut: React.FC<FadeOutProps> = ({ children, timer  }): JSX.Element => {
  return (
    <FadeOutDiv timer={timer}>{children}</FadeOutDiv>
  )
}

FadeOut.defaultProps = {
  timer: 3
}

export default FadeOut;