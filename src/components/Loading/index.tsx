import { Skeleton } from "antd";
import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <Skeleton.Image />
      <Skeleton active />
    </Wrapper>
  );
}

export default Loading;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
