import LayoutPublic from "components/Layouts/LayoutPublic";
import TitlePagePublic from "components/TitlePagePublic";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function DanhSachPhongTro() {
  return (
    <LayoutPublic>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Phòng trọ"]} />
        <Container></Container>
      </Wrapper>
    </LayoutPublic>
  );
}

export default DanhSachPhongTro;

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
`;
