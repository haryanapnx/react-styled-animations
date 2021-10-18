import * as React from 'react'
import styled, { keyframes } from 'styled-components';

type Timers = string | number

const fadeInAnimation = keyframes`
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}`;

const FadeInDiv = styled.div <{ timer: Timers}>`
  animation: 3s ${fadeInAnimation};
`;


export interface FadeInProps {
  timer: Timers
}

const FadeIn: React.FC<FadeInProps> = ({ children, timer  }): JSX.Element => {
  return (
    <FadeInDiv timer={timer}>{children}</FadeInDiv>
  )
}

FadeIn.defaultProps = {
  timer: 3
}

export default FadeIn;