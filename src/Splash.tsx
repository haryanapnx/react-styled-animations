import * as React from 'react'
import styled, { keyframes } from 'styled-components';

type Timers = string | number

const splashAnimation = keyframes`
  from: { opacity: 1 },
  25%: { opacity: 0 },
  50%: { opacity: 1 },
  75%: { opacity: 0 },
  to: { opacity: 0 }
}`;

const SplashDiv = styled.div <{ timer: Timers }>`
  animation: 3s ${splashAnimation};
`;


export interface SplashProps {
  timer: Timers
}

const Splash: React.FC<SplashProps> = ({ children, timer }): JSX.Element => {
  return (
    <SplashDiv timer={timer}>{children}</SplashDiv>
  )
}

Splash.defaultProps = {
  timer: 3
}

export default Splash;