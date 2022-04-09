import { HeartFilled } from "@ant-design/icons";
import { Badge, Button } from "antd";
import React, { ReactNode } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LOGO from "../../assets/logo.png";

interface Props {
  children: ReactNode;
}

function LayoutPublic(props: Props) {
  const { children } = props;

  return (
    <Wrapper>
      <Navbar collapseOnSelect expand="md" sticky="top" className="containerNavbar">
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
                Xem sau{" "}
                <Badge
                  count={10}
                  style={{ marginLeft: "4px", backgroundColor: "#1890ff" }}
                />
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}

      <div className="footerLayout"></div>
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

  @media screen and (max-width: 768px) {
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
    height: 300px;
    background-color: #333;
  }
`;
