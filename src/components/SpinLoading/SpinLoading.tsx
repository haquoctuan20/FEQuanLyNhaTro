import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';

function SpinLoading() {
  return (
    <Wrapper>
      <Spin />
    </Wrapper>
  );
}

export default SpinLoading;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
