import React from "react";
import LayoutPublic from "components/Layouts/LayoutPublic";
import styled from "styled-components";
import TitlePagePublic from "components/TitlePagePublic";

function GioiThieu() {
  return (
    <LayoutPublic>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Giới thiệu"]} />
      </Wrapper>
    </LayoutPublic>
  );
}

export default GioiThieu;

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
`;
