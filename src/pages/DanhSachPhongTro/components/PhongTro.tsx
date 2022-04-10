import { DollarCircleFilled, HomeFilled } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PhongTro() {
  return (
    <Wrapper>
      <Link to="#">
        <img
          src="https://nhaodanang.com/wp-content/uploads/2020/08/chon-cau-thang-gac-lung-cho-phong-tro-dien-tich-nho-2.jpg"
          alt="Phong tro"
          className="phongtro-img"
        />
      </Link>

      <div className="phongtro-content">
        <div>
          <div className="phongtro-title">Phòng 102 - Tòa P2</div>
          <div className="phongtro-dientich">
            <HomeFilled className="me-1" /> 20 m2
          </div>
          <div className="phongtro-price">
            <DollarCircleFilled className="me-1" />
            2.000.000 VND
          </div>
        </div>

        <Space>
          <Button size="small">Chi tiết</Button>
          <Button size="small">Xem sau</Button>
        </Space>
      </div>
    </Wrapper>
  );
}

export default PhongTro;

const Wrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;

  .phongtro {
    &-img {
      height: 140px;
      width: 200px;
      object-fit: cover;

      @media (max-width: 992px) {
        height: 120px;
        width: 140px;
      }
    }

    &-content {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &-title {
      font-weight: 500;

      @media (max-width: 992px) {
        font-weight: normal;
      }
    }

    &-price {
      display: flex;
      align-items: center;
      color: #ff4d4f;

      @media (max-width: 992px) {
        font-size: 14px;
      }
    }

    &-dientich {
      display: flex;
      align-items: center;

      @media (max-width: 992px) {
        font-size: 14px;
      }
    }
  }
`;
