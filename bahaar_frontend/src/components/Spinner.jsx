import React from 'react';
import styled, { keyframes } from 'styled-components';
import plantSpinner from '../images/plantSpinner.png'
import imageSpinner from '../images/aglaonema.png'

const SpinnerContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  position: relative;
  margin: 50px auto;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const SpinnerImage = styled.img`
  animation: ${pulse} 0.8s infinite ease-in-out;
`;

const Spinner = ({ width, type }) => {
  return (
    <SpinnerContainer width={width}>
      {
        type == 'general' ?
          <SpinnerImage width={width} src={plantSpinner} />
          :
          <SpinnerImage width={width} src={imageSpinner} /> // type = "inline"
      }

    </SpinnerContainer>
  );
};

export default Spinner;