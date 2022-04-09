import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  title: string[];
}

function TitlePagePublic(props: Props) {
  const { title } = props;
  return (
    <Wrapper>
      <Container>{title.join(" / ").toString()}</Container>
    </Wrapper>
  );
}

export default TitlePagePublic;

const Wrapper = styled.div`
  background-color: #1890ff45;
  min-height: 80px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  user-select: none;
`;
