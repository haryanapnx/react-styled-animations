import * as React from 'react'
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}`;

const FadeInDiv = styled.div`
  animation: 3s ${fadeInAnimation};
`;

const FadeIn: React.FC = ({ children }): JSX.Element => {
  return (
    <FadeInDiv>{children}</FadeInDiv>
  )
}

export default FadeIn;