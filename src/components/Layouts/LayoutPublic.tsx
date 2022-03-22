import { HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React, { ReactNode } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function LayoutPublic(props: Props) {
  const { children } = props;

  return (
    <Wrapper>
      <Navbar collapseOnSelect expand="md" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Lô gô</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse>
            <div className="containerLink">
              <Link className="containerLink-link" to="#">
                Giới thiệu
              </Link>
              <Link className="containerLink-link" to="#">
                Phòng trọ
              </Link>
              <Link className="containerLink-link" to="#">
                Liên hệ
              </Link>
            </div>

            <Button type="link" icon={<HeartFilled />} className="listLike">
              Xem sau
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}
    </Wrapper>
  );
}

export default LayoutPublic;

const Wrapper = styled.div`
  font-size: 18px;
  .containerLink {
    width: 100%;
    display: flex;
    justify-content: center;

    &-link {
      margin: 0px 8px;

      color: #000;
      text-decoration: none;
    }
  }

  .listLike {
    font-size: 18px;
    color: #000;
    display: flex;
    align-items: center;
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
`;
