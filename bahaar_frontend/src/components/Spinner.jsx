import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  position: relative;
  margin: 10px auto;
`;

const DoubleBounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bouncedelay 1.2s infinite ease-in-out;
`;

const DoubleBounce2 = styled(DoubleBounce1)`
  animation-delay: -0.12s;
`;

const Spinner = ({ width }) => {
  return (
    <SpinnerContainer width={width}>
      <DoubleBounce1 />
      <DoubleBounce2 />
    </SpinnerContainer>
  );
};

export default Spinner;