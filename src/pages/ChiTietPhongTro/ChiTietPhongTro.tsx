import { HeartOutlined, SelectOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Image, Row, Space } from "antd";
import LayoutPublic from "components/Layouts/LayoutPublic";
import Loading from "components/Loading";
import { NotificationError } from "components/Notification";
import TitlePagePublic from "components/TitlePagePublic";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ChiTietPhongTroService } from "service/ChiTietPhongTroService";
import { PhongTroClientService } from "service/PhongTroClientService";
import styled from "styled-components";
import { formatPrice } from "utils/common";
import ModalLienHe from "./components/ModalLienHe";

function ChiTietPhongTro() {
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [data, setData] = useState<any>({});

  const [bigImage, setBigImage] = useState("");
  const [openLienHe, setOpenLienHe] = useState(false);
  const [triggerLoadList, setTriggerLoadList] = useState(true);

  const { id } = useParams() as { id: string };

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
    const param = {
      id: data._id,
      soPhong: data?.phong?.soPhong,
      toaNha: data?.phong?.toaNha?.tenToaNha,
      gia: data?.phong?.gia,
      dienTich: data?.phong?.dienTich,
      urlAnh: data?.urlAnh,
    };

    ChiTietPhongTroService.addToXemSau(param);
    setTriggerLoadList(!triggerLoadList);
  };

  const handleGetDetail = () => {
    setLoadingDetail(true);
    PhongTroClientService.getDetailPhongTro(id)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi", res.data.message);
          return;
        }

        setData(res.data.data[0]);
        setBigImage(res.data.data[0].urlAnh[0]);
      })
      .catch((err) => {})
      .finally(() => {
        setLoadingDetail(false);
      });
  };

  useEffect(() => {
    handleGetDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <LayoutPublic triggerLoadList={triggerLoadList}>
      <Wrapper>
        <TitlePagePublic
          title={[
            "Trang chủ",
            "Phòng trọ",
            `Phòng ${data?.phong?.soPhong ? data?.phong?.soPhong : ""}`,
          ]}
        />

        {loadingDetail ? (
          <Loading />
        ) : (
          <Container className="mt-3">
            <Row gutter={[16, 8]} className="py-2 background__white">
              <Col lg={10} xs={24}>
                <div className="ChiTietPhongTro-img">
                  <Image
                    src={bigImage}
                    height="100%"
                    preview={{
                      mask: (
                        <>
                          <SelectOutlined /> Phóng to
                        </>
                      ),
                    }}
                  />
                </div>

                <div className="ChiTietPhongTro-containerImage">
                  {data.urlAnh?.map((item, index) => (
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
                <div className="ChiTietPhongTro-title">
                  Phòng {data.phong?.soPhong} - {data.phong?.toaNha?.tenToaNha}
                </div>

                <div className="ChiTietPhongTro-info">
                  <span>Diện tích:</span> {data.phong?.dienTich} m2
                </div>

                <div className="ChiTietPhongTro-info">
                  <span>Giá:</span> {formatPrice(data.phong?.gia)}
                </div>

                <div className="ChiTietPhongTro-info">
                  <span>Số người phù hợp:</span> {data.phong?.soLuongToiDa} người
                </div>

                <div className="ChiTietPhongTro-info">
                  <span>Giá điện:</span> {formatPrice(data.phong?.giaDien)} / số
                </div>

                <div className="ChiTietPhongTro-info">
                  <span>Giá nước:</span> {formatPrice(data.phong?.giaNuoc)} / người
                </div>

                <div className="ChiTietPhongTro-info">
                  <span>Phí dịch vụ:</span> {formatPrice(data.phong?.phiDichVu)} / người
                </div>

                <div className="ChiTietPhongTro-info">
                  <span>Địa chỉ:</span> {data.phong?.toaNha?.diaChi}
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

            <Row
              gutter={[16, 8]}
              className="ChiTietPhongTro-noidungmota background__white"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <div className="ChiTietPhongTro-info ">
                <span>Mô tả:</span>
                <div dangerouslySetInnerHTML={{ __html: data?.noiDung }}></div>
              </div>
            </Row>
          </Container>
        )}

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

    &-noidungmota {
      padding: 12px;
      font-size: 16px;

      p {
        margin: 0px;
      }
    }
  }
`;
