import { HeartOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Image, Row, Space } from "antd";
import LayoutPublic from "components/Layouts/LayoutPublic";
import TitlePagePublic from "components/TitlePagePublic";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ChiTietPhongTroService } from "service/ChiTietPhongTroService";
import { randomString } from "service/FAKEDATA";
import styled from "styled-components";
import ModalLienHe from "./components/ModalLienHe";

const dataImage = [
  "https://64.media.tumblr.com/179f9fc81282f8f78d324a0f28af6a1b/463d24ceb4393202-26/s1280x1920/e0828ea4418a0e82fe1142cd73c32c4aa6ac4ba1.jpg",
  "https://64.media.tumblr.com/fec40a8d789d40fc8609ee2e8cfc5689/c173fe79047a7a21-7a/s1280x1920/b15923c1a9bb569df7ce2a1c649d20a6ad133326.jpg",
  "https://64.media.tumblr.com/85bef78f194d48b3d2177d7f4bd91a40/ea2de2f36a1a24e0-16/s1280x1920/20689e1dcad97d3d567bb39a538250d560fbdbb0.jpg",
  "https://64.media.tumblr.com/4de836f19f2b4a3fbadbb640eafe8049/905792f74fa02844-73/s1280x1920/4bd25bb3b804efc110aaba2f3380b8a668e4c7ae.jpg",
  "https://64.media.tumblr.com/85bef78f194d48b3d2177d7f4bd91a40/ea2de2f36a1a24e0-16/s1280x1920/20689e1dcad97d3d567bb39a538250d560fbdbb0.jpg",
  "https://64.media.tumblr.com/4de836f19f2b4a3fbadbb640eafe8049/905792f74fa02844-73/s1280x1920/4bd25bb3b804efc110aaba2f3380b8a668e4c7ae.jpg",
];

function ChiTietPhongTro() {
  const [bigImage, setBigImage] = useState(dataImage[0]);
  const [openLienHe, setOpenLienHe] = useState(false);
  const [triggerLoadList, setTriggerLoadList] = useState(true);

  const openModalLienHe = () => {
    setOpenLienHe(true);
  };

  const closeModalLienHe = () => {
    setOpenLienHe(false);
  };

  const selectImage = (link: string) => {
    setBigImage(link);
  };

  const handleAddToXemSau = () => {
    const param = { id: randomString() };
    ChiTietPhongTroService.addToXemSau(param);
    setTriggerLoadList(!triggerLoadList);
  };

  return (
    <LayoutPublic triggerLoadList={triggerLoadList}>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Phòng trọ", "Phòng 123"]} />

        <Container className="mt-3">
          <Row gutter={[16, 8]} className="py-2 background__white">
            <Col lg={10} xs={24}>
              <div className="ChiTietPhongTro-img">
                <Image src={bigImage} height="100%" />
              </div>

              <div className="ChiTietPhongTro-containerImage">
                {dataImage.map((item, index) => (
                  <div className="ChiTietPhongTro-itemImage" key={index}>
                    <img
                      src={item}
                      alt={item}
                      className="ChiTietPhongTro-subimg"
                      onClick={() => selectImage(item)}
                    />
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={14} xs={24}>
              <div className="ChiTietPhongTro-title">Phòng 102 - Tòa P2</div>

              <div className="ChiTietPhongTro-info">
                <span>Mô tả:</span> Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Magni esse nobis sapiente nostrum suscipit! Temporibus sint cumque
                aspernatur error fugit, voluptate debitis voluptatem veritatis accusamus,
                incidunt saepe iure modi ex soluta! Distinctio odio iure porro, numquam
                ex, ratione quos magni neque reprehenderit inventore quis! Alias eius
                nostrum esse quo at!
              </div>

              <div className="ChiTietPhongTro-info">
                <span>Diện tích:</span> 20 m2
              </div>

              <div className="ChiTietPhongTro-info">
                <span>Giá:</span> 2000000vnd
              </div>

              <div className="ChiTietPhongTro-info">
                <span>Số người phù hợp:</span> 3 người
              </div>

              <Divider />

              <Space>
                <Button
                  size="large"
                  type="primary"
                  icon={<SendOutlined />}
                  className="ChiTietPhongTro-btn"
                  onClick={openModalLienHe}
                >
                  Liên hệ xem trọ
                </Button>

                <Button
                  size="large"
                  type="primary"
                  danger
                  icon={<HeartOutlined />}
                  className="ChiTietPhongTro-btn"
                  onClick={handleAddToXemSau}
                >
                  Xem sau
                </Button>
              </Space>
            </Col>
          </Row>
        </Container>

        <ModalLienHe visible={openLienHe} onClose={closeModalLienHe} />
      </Wrapper>
    </LayoutPublic>
  );
}

export default ChiTietPhongTro;

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
  background: #f5f5f5;

  .ChiTietPhongTro {
    &-img {
      height: 400px;
      display: flex;
      justify-content: center;
    }

    &-containerImage {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 10px;
    }

    &-itemImage {
      width: 80px;
      height: 80px;
      margin: 0px 4px;
      cursor: pointer;
    }

    &-subimg {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    &-title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    &-info {
      margin: 10px 0px;
      & > span {
        font-weight: 500;
      }
    }

    &-btn {
      display: flex;
      align-items: center;
    }
  }
`;
