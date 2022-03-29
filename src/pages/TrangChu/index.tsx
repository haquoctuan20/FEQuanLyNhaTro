import {
  CaretLeftOutlined,
  CaretRightOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Col, Divider, Row, Image } from 'antd';
import LayoutPublic from 'components/Layouts/LayoutPublic';
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import styled from 'styled-components';

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
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="home-carousel-image"
                src="https://blog.ohanaliving.vn/content/images/2020/05/cach-trang-tri-phong-tro-co-gac-lung-8-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="home-carousel-image"
                src="https://suachuanhathanhthinh.com/wp-content/uploads/2020/08/bien-phong-nha-tro-cu-thanh-moi-o-hcm-7-600x330.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="containerTitle">
          <Container>
            <div className="containerTitle-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ex quia repudiandae dolorem pariatur, ratione
              laboriosam porro accusantium facilis facere officiis reiciendis
              vero earum consectetur ab eveniet quam at.
            </div>
            <div className="containerTitle-sub">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ex quia repudianda
            </div>
          </Container>
        </div>

        <Container>
          <Row gutter={[8, 16]} className="containerInfo">
            <Col lg={8}>
              <div className="info">
                <VideoCameraOutlined className="info-icon" />
                <div className="info-title">An toàn</div>
                <div className="info-sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nostrum quae esse voluptatem incidunt consectetur.
                  Laboriosam quia,
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <div className="info">
                <VideoCameraOutlined className="info-icon" />
                <div className="info-title">An toàn</div>
                <div className="info-sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nostrum quae esse voluptatem incidunt consectetur.
                  Laboriosam quia,
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <div className="info">
                <VideoCameraOutlined className="info-icon" />
                <div className="info-title">An toàn</div>
                <div className="info-sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nostrum quae esse voluptatem incidunt consectetur.
                  Laboriosam quia,
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Divider className=" mt-5">Hình ảnh</Divider>

        <Container className="mb-5">
          <Row gutter={[8, 8]}>
            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://aftavietnam.com.vn/wp-content/uploads/2021/06/mau-phong-tro-co-gac-lung-dep-12.jpg.jpg"
                className="image-demo"
              />
            </Col>

            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://nhaodanang.com/wp-content/uploads/2020/08/chon-cau-thang-gac-lung-cho-phong-tro-dien-tich-nho-2.jpg"
                className="image-demo"
              />
            </Col>

            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://img.vinway.vn/uploads/2021/06/29/z2555636678877a4370ff0fb702883452175aa4612c99f.jpg"
                className="image-demo"
              />
            </Col>
            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://alonhatro.com/assets/upload/estate/1/cho_thue_phong_tro_30m2_gac_lung_full_noi_that_gio_tu_do_tan_phu1.jpg"
                className="image-demo"
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
