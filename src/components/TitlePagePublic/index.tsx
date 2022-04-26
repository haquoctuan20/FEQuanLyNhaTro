import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string[];
}

function TitlePagePublic(props: Props) {
  const { title } = props;
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          type="link"
          icon={<ArrowLeftOutlined style={{ fontSize: "20px", color: "#fff" }} />}
          onClick={() => {
            navigate(-1);
          }}
        ></Button>
        {title.join(" / ").toString()}
      </Container>
    </Wrapper>
  );
}

export default TitlePagePublic;

const Wrapper = styled.div`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  color: #fff;

  min-height: 80px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  user-select: none;
`;
