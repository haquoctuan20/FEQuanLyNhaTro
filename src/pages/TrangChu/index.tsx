import {
  BorderOuterOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  DollarOutlined,
  SmileOutlined,
  VideoCameraOutlined,
  SelectOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row, Image, Button } from "antd";
import LayoutPublic from "components/Layouts/LayoutPublic";
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TrangChu() {
  return (
    <LayoutPublic>
      <Wrapper>
        <div className="home-carousel">
          <Carousel
            fade
            nextIcon={<CaretRightOutlined className="icon-carousel" />}
            prevIcon={<CaretLeftOutlined className="icon-carousel" />}
          >
            <Carousel.Item className="home-carousel-item">
              <img
                className="home-carousel-image"
                src="https://dichvuchuyendo.net/wp-content/uploads/2020/10/phong-tro.jpg"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="home-carousel-image"
                src="https://blog.ohanaliving.vn/content/images/2020/05/cach-trang-tri-phong-tro-co-gac-lung-8-1.jpg"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="home-carousel-image"
                src="https://suachuanhathanhthinh.com/wp-content/uploads/2020/08/bien-phong-nha-tro-cu-thanh-moi-o-hcm-7-600x330.jpg"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="containerTitle">
          <Container>
            <div className="containerTitle-title">
              Nhà trọ Tiến Hải là một cái tên nổi bật với những khu trọ tốt tại khu vực
              phường Phú Diễn, quận Bắc Từ Liêm, thành phố Hà Nội.
            </div>
            <div className="containerTitle-sub">
              Khu trọ được được đánh giá là khu trọ tốt với các ưu điểm nổi bật so với các
              khu trọ khác trong khu vực.
              <Button type="link">
                <Link to="/gioi-thieu">Tìm hiểu thêm</Link>
              </Button>
            </div>
          </Container>
        </div>

        <Container>
          <Row className="containerInfo">
            <Col lg={6}>
              <div className="info">
                <VideoCameraOutlined className="info-icon" />
                <div className="info-title">An toàn</div>
                <div className="info-sub">
                  Hành lang và cầu trang của khu trọ được trang bị camera và đèn tự động,
                  cổng ra vào sử dụng khóa vân tay.
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="info">
                <BorderOuterOutlined className="info-icon" />
                <div className="info-title">Diện tích</div>
                <div className="info-sub">
                  So với mặt bằng chung phòng trọ trong khu vực, bạn sẽ được trải nghiệm
                  phòng trọ với không gian rộng rãi.
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="info">
                <SmileOutlined className="info-icon" />
                <div className="info-title">Không chung chủ</div>
                <div className="info-sub">
                  Khu trọ độc lập khi không ở, sinh hoạt chung cùng chủ trọ tạo cảm giác
                  tự do, thoải mái cho khách hàng.
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="info">
                <DollarOutlined className="info-icon" />
                <div className="info-title">Giá</div>
                <div className="info-sub">
                  Giá phòng tốt nhất trong khu vực, khó có thể tìm được được căn phòng tốt
                  hơn với mức giá chúng tôi đưa ra.
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Divider className=" mt-5">Hình ảnh</Divider>

        <Container className="mb-5">
          <Row justify="center" gutter={[8, 8]}>
            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://aftavietnam.com.vn/wp-content/uploads/2021/06/mau-phong-tro-co-gac-lung-dep-12.jpg.jpg"
                className="image-demo"
                preview={{
                  mask: (
                    <>
                      <SelectOutlined /> Phóng to
                    </>
                  ),
                }}
              />
            </Col>

            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://nhaodanang.com/wp-content/uploads/2020/08/chon-cau-thang-gac-lung-cho-phong-tro-dien-tich-nho-2.jpg"
                className="image-demo"
                preview={{
                  mask: (
                    <>
                      <SelectOutlined /> Phóng to
                    </>
                  ),
                }}
              />
            </Col>

            <Col md={12} lg={6}>
              <Image
                width="100%"
                src={`https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/273964566_2108108419337260_8610920058290988077_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=OhoGqoqcQxIAX_TUMxe&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8Kaf3bdwhTSLiNNSO7AjztMqU5OP1jMT7wjfhOWB4a-Q&oe=625FE8FE`}
                className="image-demo"
                preview={{
                  mask: (
                    <>
                      <SelectOutlined /> Phóng to
                    </>
                  ),
                }}
              />
            </Col>
            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://alonhatro.com/assets/upload/estate/1/cho_thue_phong_tro_30m2_gac_lung_full_noi_that_gio_tu_do_tan_phu1.jpg"
                className="image-demo"
                preview={{
                  mask: (
                    <>
                      <SelectOutlined /> Phóng to
                    </>
                  ),
                }}
              />
            </Col>
          </Row>

          <Divider className=" mt-5">Phường Phú Diễn, Từ Liêm, Hà Nội</Divider>
          <div className="googleMap mt-5">
            <iframe
              title="Địa chỉ nhà trọ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.281070942525!2d105.75663677813004!3d21.049873951646216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c4a7c60651%3A0xbec6bd3e12f90b7!2zUGjDuiBEaeG7hW4sIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1648401077654!5m2!1svi!2s"
              width="100%"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </Wrapper>
    </LayoutPublic>
  );
}

export default TrangChu;

const Wrapper = styled.div`
  .home {
    &-carousel {
      &-item {
      }

      &-image {
        width: 100%;
        height: 500px;
        object-fit: fill;

        @media only screen and (max-width: 767px) {
          height: 240px;
        }
        @media only screen and (min-width: 768px) {
          height: 300px;
        }
        @media only screen and (min-width: 992px) {
          height: 400px;
        }
        @media only screen and (min-width: 1200px) {
          height: 600px;
        }
      }
    }
  }

  .image-demo {
    width: 100%;
    height: 350px;
    object-fit: fill;
  }

  .icon-carousel {
    font-size: 30px;
    color: #000;

    &:hover {
      font-size: 40px;
    }
  }

  .containerTitle {
    text-align: center;
    padding: 55px 0px 60px;
    background-color: #12c7ff14;

    &-title {
      font-size: 22px;
    }

    &-sub {
      font-size: 16px;
    }
  }

  .containerInfo {
    margin-top: -40px;
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-icon {
        font-size: 40px;
        color: #faad14;
        padding: 20px;
        border-radius: 50px;
        background: #fff;
      }

      &-title {
        font-size: 20px;
        font-weight: bold;
        padding: 16px 0px;
      }

      &-sub {
        text-align: center;
      }
    }
  }
`;
