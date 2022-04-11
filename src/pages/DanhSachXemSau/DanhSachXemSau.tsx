import LayoutPublic from "components/Layouts/LayoutPublic";
import TitlePagePublic from "components/TitlePagePublic";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ChiTietPhongTroService } from "service/ChiTietPhongTroService";
import styled from "styled-components";
import PhongTroXemSau from "./components/PhongTroXemSau";

function DanhSachXemSau() {
  const initXemSau = ChiTietPhongTroService.getListXemSau();
  const [listXemSau, setListXemSau] = useState(initXemSau ? initXemSau : []);
  const [triggerGetList, setTriggerGetList] = useState(false);

  const handleGetListXemSau = () => {
    const initXemSau = ChiTietPhongTroService.getListXemSau();
    setListXemSau(initXemSau ? initXemSau : []);
    setTriggerGetList(!triggerGetList);
  };

  return (
    <LayoutPublic triggerLoadList={triggerGetList}>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Danh sách xem sau"]} />
        <Container>
          {listXemSau.map((item: any, index: any) => (
            <PhongTroXemSau data={item} key={index} callback={handleGetListXemSau} />
          ))}
        </Container>
      </Wrapper>
    </LayoutPublic>
  );
}

export default DanhSachXemSau;

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
  background: #f5f5f5;
`;
