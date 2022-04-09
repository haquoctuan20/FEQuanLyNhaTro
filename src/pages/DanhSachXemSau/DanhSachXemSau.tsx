import LayoutPublic from "components/Layouts/LayoutPublic";
import TitlePagePublic from "components/TitlePagePublic";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function DanhSachXemSau() {
  return (
    <LayoutPublic>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Danh sách xem sau"]} />
        <Container></Container>
      </Wrapper>
    </LayoutPublic>
  );
}

export default DanhSachXemSau;

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
`;
