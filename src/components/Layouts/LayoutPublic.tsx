import { HeartFilled } from "@ant-design/icons";
import { BackTop, Badge, Button, Col, Row } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChiTietPhongTroService } from "service/ChiTietPhongTroService";
import styled from "styled-components";
import LOGO from "../../assets/logo.png";
import LOGOwhite from "../../assets/logo-white.png";

interface Props {
  children: ReactNode;
  triggerLoadList?: boolean;
}

function LayoutPublic(props: Props) {
  const { children, triggerLoadList } = props;

  const initXemSau = ChiTietPhongTroService.getListXemSau();
  const [listXemSau, setListXemSau] = useState(initXemSau ? initXemSau : []);

  useEffect(() => {
    if (triggerLoadList !== undefined) {
      const list = ChiTietPhongTroService.getListXemSau();
      setListXemSau(list ? list : []);
    }
  }, [triggerLoadList]);

  return (
    <Wrapper>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="containerNavbar">
        <Container>
          <Link to="/">
            <img src={LOGO} alt="Nhà trọ Tiến Hải" className="logoPage" />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse>
            <div className="containerLink">
              <Link className="containerLink-link" to="/">
                Trang chủ
              </Link>
              <Link className="containerLink-link" to="/danh-sach-phong-tro">
                Phòng trọ
              </Link>
              <Link className="containerLink-link" to="/gioi-thieu">
                Giới thiệu
              </Link>
            </div>

            <Link to="/xem-sau" style={{ textDecoration: "none" }}>
              <Button type="link" icon={<HeartFilled />} className="listLike">
                Danh sách xem sau{" "}
                <Badge
                  count={listXemSau.length}
                  style={{ marginLeft: "4px", backgroundColor: "#1890ff" }}
                />
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}

      <div className="footerLayout">
        <Row className="container" justify="space-around" align="middle">
          <Col span={8}>
            <img src={LOGOwhite} alt="Nhà trọ Tiến Hải" className="logoPage" />
            <div>
              Liên hệ: <a href="tel:0587049999">0587 049 999</a>
            </div>
          </Col>
          <Col span={8}>
            Thiết kế bởi{" "}
            <Link
              to="https://github.com/haquoctuan20/FEQuanLyNhaTro"
              style={{ color: "#1890ff" }}
            >
              TuanHQ
            </Link>
          </Col>
        </Row>
      </div>

      <BackTop duration={300} />
    </Wrapper>
  );
}

export default LayoutPublic;

const Wrapper = styled.div`
  font-size: 18px;

  .logoPage {
    height: 50px;
  }

  .containerNavbar {
    /* background: #1890ff; */
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  .containerLink {
    width: 100%;
    display: flex;
    justify-content: center;

    &-link {
      margin: 0px 15px;
      color: #000;
      font-size: 20px;
      text-decoration: none;

      border-bottom: 2px solid transparent;

      &:hover {
        color: #1890ff;
        border-bottom: 2px solid #1890ff;
        transition: all 0.3s ease-out;
      }
    }
  }

  .listLike {
    font-size: 20px;
    color: #000;
    display: flex;
    align-items: center;

    &:hover {
      color: #1890ff;
      transition: all 0.3s linear;
    }
  }

  @media screen and (max-width: 992px) {
    .containerLink {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-link {
        margin: 6px 0px;
      }
    }

    .listLike {
      margin: 0px auto;
    }
  }

  .footerLayout {
    padding: 12px 0px;
    color: #fff;
    background-color: #333;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
