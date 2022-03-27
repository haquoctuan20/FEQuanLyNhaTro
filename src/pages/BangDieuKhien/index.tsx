import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Space } from 'antd';
import HelmetComponent from 'components/HelmetComponent';
import LayoutDashboard from 'components/Layouts/LayoutDashboard';
import TitlePage from 'components/TitlePage';
import React from 'react';
import styled from 'styled-components';

const data = [
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
  {
    name: '101',
    price: '1.800.000',
  },
];

function BangDieuKhien() {
  return (
    <LayoutDashboard>
      <HelmetComponent title="Quản lý phòng trọ" />
      <TitlePage title="Quản lý phòng trọ" />

      <Wrapper>
        <div className="containerAction">
          <Space>
            <Button type="primary">Tất cả</Button>
            <Button type="default">Tòa P1</Button>
            <Button type="default">Tòa P2</Button>
            <Button type="default">Tòa P3</Button>
            <Button type="default">Tòa P4</Button>
          </Space>

          <Space>
            <Button type="primary">Thêm phòng</Button>
          </Space>
        </div>

        <Divider orientation="left">Địa chỉ</Divider>

        <Row gutter={[8, 8]} className="containerRoom">
          {data.map((p, index) => (
            <Col md={12} lg={8} xl={6} key={index}>
              <div className="containerRoom-room">
                <div className="containerRoom-numberRoom ">
                  <HomeOutlined className="me-2" /> Phong 101
                </div>
                <div className="containerRoom-user ">
                  <UserOutlined className="me-2" /> Ha quoc tuan
                </div>
                <div className="containerRoom-user ">
                  <UserOutlined className="me-2" /> 1.800.000 VND
                </div>
                <Space>
                  <Button type="primary">Trả phòng</Button>
                  <Button type="primary" danger>
                    Sửa
                  </Button>
                </Space>
                <Divider></Divider>
                <Space>
                  <Button type="primary">Sửa phòng</Button>
                  <Button type="primary" danger>
                    Xóa phòng
                  </Button>
                </Space>
              </div>
            </Col>
          ))}
        </Row>
      </Wrapper>
    </LayoutDashboard>
  );
}

export default BangDieuKhien;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 12px;
  background: #fff;

  .containerAction {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .containerRoom {
    &-room {
      border: 1px solid #c3c3c3;
      padding: 6px;
      /* max-width: 240px; */
    }

    &-numberRoom {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      justify-content: center;

      font-size: 18px;
      font-weight: 500;
    }

    &-user {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }
  }
`;
