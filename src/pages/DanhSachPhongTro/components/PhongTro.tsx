import { DollarCircleFilled, HomeFilled } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ChiTietPhongTroService } from "service/ChiTietPhongTroService";
import styled from "styled-components";
import { formatPrice } from "utils/common";

interface Props {
  callback: () => void;
  data: any;
}

function PhongTro(props: Props) {
  const { callback, data } = props;

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
    callback();
  };

  return (
    <Wrapper className="background__white">
      <Link to={"/phong-tro/" + data._id}>
        <img src={data.urlAnh[0]} alt="Phong tro" className="phongtro-img" />
      </Link>

      <div className="phongtro-content">
        <div>
          <div className="phongtro-title">
            Phòng {data.phong.soPhong} - {data.phong.toaNha.tenToaNha}
          </div>
          <div className="phongtro-dientich">
            <HomeFilled className="me-1" /> {data.phong.dienTich} m2
          </div>
          <div className="phongtro-price">
            <DollarCircleFilled className="me-1" />
            {formatPrice(data.phong.gia)}
          </div>
        </div>

        <Space>
          <Link to={"/phong-tro/" + data._id}>
            <Button size="small">Chi tiết</Button>
          </Link>
          <Button size="small" onClick={handleAddToXemSau}>
            Xem sau
          </Button>
        </Space>
      </div>
    </Wrapper>
  );
}

export default PhongTro;

const Wrapper = styled.div`
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;

  &:hover {
    background: #00aeff26;
  }

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
