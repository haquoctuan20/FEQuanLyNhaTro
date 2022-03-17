import styled from 'styled-components';
import React from 'react';

interface Props {
  title: string;
}

function TitlePage(props: Props) {
  const { title } = props;
  return <Wrapper>{title}</Wrapper>;
}

export default TitlePage;

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  font-size: 22px;
  font-weight: 500;
`;
