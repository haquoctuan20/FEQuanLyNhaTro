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
// const ReactQuill = require("react-quill");

const dataImage = [
  `https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/277794946_687632525887569_1256246728552715872_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=ZutTl3OOdB4AX-gdVgP&tn=ayinSa3Xwd2ohtsV&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8oXmHFifMezyBiXdbWGZS8T6ZX46m5dPL4DqdxcRrrOA&oe=62609B31`,
  `https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/277785839_687632602554228_8050237321463483585_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=zH3q7sjcOGIAX8ObZxg&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8VfVpLcK7PuQGajAF85KRTBEdwwQLGmhpSAxVfBpGXPw&oe=6260467F`,
  `https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/277673610_687632642554224_2934954179642950705_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=crtmd9KJmrYAX8ZyKFz&_nc_ht=scontent.fhan14-2.fna&oh=00_AT9zx0yAaYghfa7wfuPMDSUMvOGLJa5h3t_ZqogxyE381g&oe=6261A928`,
  `https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/273964566_2108108419337260_8610920058290988077_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=OhoGqoqcQxIAX_TUMxe&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8Kaf3bdwhTSLiNNSO7AjztMqU5OP1jMT7wjfhOWB4a-Q&oe=625FE8FE`,
];

function ChiTietPhongTro() {
  const [bigImage, setBigImage] = useState(dataImage[0]);
  const [openLienHe, setOpenLienHe] = useState(false);
  const [triggerLoadList, setTriggerLoadList] = useState(true);

  // const [value, setValue] = useState("");

  // const onChange = (value: any) => {
  //   console.log("❗TuanHQ🐞 💻 onChange 💻 value", value);
  //   setValue(value);
  // };

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
                <span>Mô tả:</span> <br /> Có nhà vệ sinh khép kín, có chỗ nấu ăn <br />{" "}
                Có chỗ phơi đồ rất tiện lợi <br /> Đầy đủ nóng lạnh, điều hoà <br /> có
                tầng 1 để xe rất thoải mái <br /> an ninh cực kỳ tốt <br /> có máy giặt
                chỗ phơi đồ. Phòng y hình ạ. Có sẵn gương đệm kệ nước và đồ dùng nhà tắm
                cho bạn nào có nhu cầu thuê. LIÊN HỆ ĐỂ HẸN XEM PHÒNG TRỌ
                <br />
                Liên hệ: 0587 049 999
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

          {/* <ReactQuill value={value} onChange={onChange} />

          <div dangerouslySetInnerHTML={{ __html: value }}></div> */}
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
