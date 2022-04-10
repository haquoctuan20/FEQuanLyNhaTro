import { Button, Input, Slider } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

function FilterPhongTro() {
  const [price, setPrice] = useState(0);
  const [soNguoi, setSoNguoi] = useState(0);

  const onChangePrice = (value: any) => {
    setPrice(value);
  };
  const onChangeSoNguoi = (value: any) => {
    setSoNguoi(value);
  };

  return (
    <Wrapper>
      <div className="filter-label">Tên phòng:</div>

      <Input size="large" allowClear placeholder="Tên phòng trọ" />
      <div className="filter-label">Số người:</div>
      <Slider defaultValue={0} step={1} max={10} onChange={onChangeSoNguoi} />
      {soNguoi > 0 && <div>{soNguoi} người/phòng</div>}

      <div className="filter-label">Giá:</div>
      <Slider defaultValue={0} step={100000} max={5000000} onChange={onChangePrice} />
      {price > 0 && <div>0 VNĐ ~ {price} VNĐ</div>}

      <div className="filter-container-button">
        <Button danger type="primary">
          Thiết lập lại
        </Button>
        <Button type="primary">Tìm kiếm</Button>
      </div>
    </Wrapper>
  );
}

export default FilterPhongTro;

const Wrapper = styled.div`
  .filter {
    &-label {
      margin-top: 15px;
      font-weight: 500;
    }

    &-container-button {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
