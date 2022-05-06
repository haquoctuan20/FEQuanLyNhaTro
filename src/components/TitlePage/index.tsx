import styled from "styled-components";
import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

function TitlePage(props: Props) {
  const { title } = props;

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button
        icon={<ArrowLeftOutlined style={{ fontSize: " 24px" }} />}
        type="link"
        className="me-1"
        onClick={() => {
          navigate(-1);
        }}
      ></Button>
      <div>{title}</div>
    </Wrapper>
  );
}

export default TitlePage;

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  font-size: 22px;
  font-weight: 500;

  display: flex;
  align-items: center;
`;
