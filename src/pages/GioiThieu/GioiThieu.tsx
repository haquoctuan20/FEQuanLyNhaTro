import React from "react";
import LayoutPublic from "components/Layouts/LayoutPublic";
import styled from "styled-components";
import TitlePagePublic from "components/TitlePagePublic";
import { Container } from "react-bootstrap";
import { Button, Col, Divider, Row } from "antd";
import { ForwardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function GioiThieu() {
  return (
    <LayoutPublic>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Giới thiệu"]} />

        <Container className="mt-4">
          <Row gutter={[16, 8]} className="gioithieu">
            <Col lg={10} xs={24}>
              <img
                src="https://alonhatro.com/assets/upload/estate/1/cho_thue_phong_tro_30m2_gac_lung_full_noi_that_gio_tu_do_tan_phu1.jpg"
                alt="Nha tro tien hai"
                className="gioithieu__img"
              />
            </Col>

            <Col lg={14} className="gioithieu__content background__white">
              <div className="gioithieu__text">
                <div className="gioithieu__text--title">Dịch vụ</div>
                <div className="gioithieu__text--content">
                  Khu trọ được trang bị đầy đủ những thiết bị, dịch vụ thiết yếu cho cuộc
                  sống như điều hòa, nóng lạnh, nước sạch,... Có nhân viên dọn dẹp khu
                  trọ, đảm bảo vệ sinh đều đặn hàng tuần. Có dịch vụ chuyển trọ khi khách
                  hàng chuyển đến hoặc chuyển đi. Luôn có đội ngũ kỹ thuật viên hỗ trợ khi
                  gặp vấn đề trong quá trình ở, sinh hoạt tại khu trọ.
                </div>
              </div>

              <Link to="/danh-sach-phong-tro">
                <Button
                  size="large"
                  className="gioithieu__btn"
                  icon={<ForwardOutlined />}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Xem ngay
                </Button>
              </Link>
            </Col>
          </Row>

          <Divider />

          <Row gutter={[16, 8]} className="gioithieu">
            <Col lg={14} className="gioithieu__content background__white ">
              <div className="gioithieu__text">
                <div className="gioithieu__text--title">Vị trí</div>
                <div className="gioithieu__text--content">
                  Khu trọ có vị trí thuận lợi phù hợp với tất cả mọi người từ sinh viên
                  tới người đi làm. Khu vực có đầy đủ chợ, cửa hàng tiện lợi, hàng
                  quán,... Gần các trục đường lớn và các trường đại học, thuận lợi cho
                  sinh viên cũng như người đi làm.
                </div>
              </div>

              <Link to="/danh-sach-phong-tro">
                <Button
                  size="large"
                  className="gioithieu__btn"
                  icon={<ForwardOutlined />}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Xem ngay
                </Button>
              </Link>
            </Col>

            <Col lg={10} xs={24}>
              <img
                src="https://img.vinway.vn/uploads/2021/06/29/z2555636678877a4370ff0fb702883452175aa4612c99f.jpg"
                alt="Nha tro tien hai"
                className="gioithieu__img"
              />
            </Col>
          </Row>

          <Divider />

          <Row gutter={[16, 8]} className="gioithieu">
            <Col lg={10} xs={24}>
              <img
                src="https://aftavietnam.com.vn/wp-content/uploads/2021/06/mau-phong-tro-co-gac-lung-dep-12.jpg.jpg"
                alt="Nha tro tien hai"
                className="gioithieu__img"
              />
            </Col>

            <Col lg={14} className="gioithieu__content background__white">
              <div className="gioithieu__text">
                <div className="gioithieu__text--title">An ninh</div>
                <div className="gioithieu__text--content">
                  Khu trọ nằm trong khu vực có an ninh tốt, không có tệ nạn xã hội. Cùng
                  với đó là hệ thống camera an ninh và đèn tự động được trang bị xung
                  quanh khu trọ.
                </div>
              </div>

              <Link to="/danh-sach-phong-tro">
                <Button
                  size="large"
                  className="gioithieu__btn"
                  icon={<ForwardOutlined />}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Xem ngay
                </Button>
              </Link>
            </Col>
          </Row>

          <Divider />

          <Row gutter={[16, 8]} className="gioithieu">
            <Col lg={14} className="gioithieu__content background__white">
              <div className="gioithieu__text">
                <div className="gioithieu__text--title">Tính cá nhân</div>
                <div className="gioithieu__text--content">
                  Khu trọ độc lập khi không ở, sinh hoạt chung cùng chủ trọ tạo cảm giác
                  tự do, thoải mái cho khách hàng. <br /> Khách hàng không bị gò bó về mặt
                  thời gian ra vào khu trọ như các khu trọ khác, thuận lợi cho các bạn
                  sinh viên làm thêm cũng như người đi làm tăng ca. Khu trọ cho phép khách
                  hàng nuôi động vật, thú cưng.
                </div>
              </div>

              <Link to="/danh-sach-phong-tro">
                <Button
                  size="large"
                  className="gioithieu__btn"
                  icon={<ForwardOutlined />}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Xem ngay
                </Button>
              </Link>
            </Col>

            <Col lg={10} xs={24}>
              <img
                src="https://nhaodanang.com/wp-content/uploads/2020/08/chon-cau-thang-gac-lung-cho-phong-tro-dien-tich-nho-2.jpg"
                alt="Nha tro tien hai"
                className="gioithieu__img"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </LayoutPublic>
  );
}

export default GioiThieu;

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
  background: #f5f5f5;

  .gioithieu {
    &__img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__text {
      &--title {
        font-size: 24px;
        font-weight: 500;
      }
    }

    &__btn {
      display: flex;
      align-items: center;
      background: #e74c3d;
      color: #fff;

      margin: 10px 0px;
    }

    a {
      text-decoration: none;
    }
  }
`;
