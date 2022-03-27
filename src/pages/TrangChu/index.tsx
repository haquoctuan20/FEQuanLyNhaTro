import { VideoCameraOutlined } from '@ant-design/icons';
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
          <Carousel fade>
            <Carousel.Item className="home-carousel-item">
              <img
                className="home-carousel-image"
                src="https://64.media.tumblr.com/0720d562319a714c020710344ed67383/84bd6032ff13f728-fa/s1280x1920/085d228f71280869ce592e242cc1173c4a7c225f.jpg"
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
                src="https://64.media.tumblr.com/f421f02d8435391a05e5c060857401dd/8cbdf2653c12b2e3-ee/s1280x1920/b5316a50187d214f5d349bd69878ee22766dbec0.jpg"
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
                src="https://64.media.tumblr.com/85bef78f194d48b3d2177d7f4bd91a40/ea2de2f36a1a24e0-16/s1280x1920/20689e1dcad97d3d567bb39a538250d560fbdbb0.jpg"
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
                src="https://64.media.tumblr.com/5221a3e77c0c00f6cf6832a5bbfef4cc/b1636df01dffa611-6e/s1280x1920/1e3fa654f32f183088837cc440d6bec4f5c46168.jpg"
              />
            </Col>

            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://64.media.tumblr.com/8e81d532e3e7f0445f997fa44c8ff310/e8745a17d9d19e7f-2c/s1280x1920/80690b768f37f43f7cb0bee136c87f705ed3998e.jpg"
              />
            </Col>

            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://64.media.tumblr.com/9ecb19ae01e708d13a4ec00e437e8218/aaee2cbb75d82401-57/s1280x1920/a8f288403ed5b8e29bcc3d00a0bf11fcb3426c1d.jpg"
              />
            </Col>
            <Col md={12} lg={6}>
              <Image
                width="100%"
                src="https://64.media.tumblr.com/13bb0703652653a1e044e7608ccd3421/ba92671098c29d33-60/s1280x1920/26f99fcc259ff8d6865b28b9f9b89c14b21f7159.jpg"
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
