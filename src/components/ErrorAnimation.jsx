import React from 'react';

import { styled } from 'styled-components';

const Wrapper = styled.svg`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  stroke-width: 5px;
  stroke: white;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0 0 0 #f31260;
  animation:
    fillerror 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;

  @keyframes fillerror {
    100% {
      box-shadow: inset 0 0 0 75px #f31260;
    }
  }
`;

const WrapperCircle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 5px;
  stroke-miterlimit: 10;
  stroke: #f31260;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

const WrapperPath = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.9s forwards;

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

const ErrorAnimation = () => {
  return (
    <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <WrapperCircle cx="26" cy="26" r="25" fill="none" />
      <WrapperPath fill="none" d="M16 16 36 36 M36 16 16 36" strokeLinecap="round" />
    </Wrapper>
  );
};

export default ErrorAnimation;
