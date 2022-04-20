import { DollarCircleFilled, HomeFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ChiTietPhongTroService } from "service/ChiTietPhongTroService";
import styled from "styled-components";
import { formatPrice } from "utils/common";
interface Props {
  data: any;
  callback: () => void;
}

function PhongTroXemSau(props: Props) {
  const { data, callback } = props;

  const handleRemove = () => {
    ChiTietPhongTroService.removeXemSau(data.id);
    callback();
  };

  return (
    <Wrapper className="background__white">
      <Link to={"/phong-tro/" + data?.id}>
        <img
          src={data?.urlAnh ? data?.urlAnh[0] : ""}
          alt="Phong tro"
          className="phongtroxemsau-img"
        />
      </Link>
      <div className="phongtroxemsau-title">
        Phòng {data?.soPhong} - {data.toaNha}
      </div>
      <div>
        <div className="phongtroxemsau-dientich">
          <HomeFilled className="me-1" /> {data?.dienTich} m2
        </div>
        <div className="phongtroxemsau-price">
          <DollarCircleFilled className="me-1" />
          {formatPrice(data?.gia)}
        </div>
      </div>
      <div className="phongtroxemsau-containerBtn">
        <Link to={"/phong-tro/" + data?.id}>
          <Button size="small" type="primary">
            Chi tiết
          </Button>
        </Link>
        <Button size="small" danger onClick={handleRemove}>
          Xóa
        </Button>
      </div>
    </Wrapper>
  );
}

export default PhongTroXemSau;

const Wrapper = styled.div`
  padding: 8px;
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:hover {
    background: #e5f2ff;
  }

  .phongtroxemsau {
    &-img {
      height: 100px;
      width: 200px;
      object-fit: cover;
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

    &-containerBtn {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 70px;

      @media (max-width: 768px) {
        flex-direction: row;
        width: 170px;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
