import { Button, Input, Slider } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  timKiem: (value: any) => void;
  reset: () => void;
}

function FilterPhongTro(props: Props) {
  const [soPhong, setSoPhong] = useState("");
  const [price, setPrice] = useState(0);
  const [soNguoi, setSoNguoi] = useState(0);
  const [dienTich, setDienTich] = useState(0);

  const onChangeSoPhong = (e) => {
    setSoPhong(e.target.value);
  };

  const onChangePrice = (value: any) => {
    setPrice(value);
  };

  const onChangeSoNguoi = (value: any) => {
    setSoNguoi(value);
  };

  const onChangeDienTich = (value: any) => {
    setDienTich(value);
  };

  const handleTimKiem = () => {
    const params = { soPhong, soNguoi, dienTich, gia: price };
    props.timKiem(params);
  };

  const handleThietLapLai = () => {
    props.reset();

    setSoPhong("");
    setPrice(0);
    setSoNguoi(0);
    setDienTich(0);
  };

  return (
    <Wrapper>
      <div className="filterContainer background__white">
        <div className="filter-label">Số phòng:</div>
        <Input
          type="number"
          size="large"
          allowClear
          placeholder="Số phòng trọ"
          value={soPhong}
          onChange={onChangeSoPhong}
        />
      </div>

      <div className="filterContainer background__white">
        <div className="filter-label">Số người:</div>
        <Slider defaultValue={0} step={1} max={10} onChange={onChangeSoNguoi} />
        {soNguoi > 0 && <div>1 - {soNguoi} người/phòng</div>}
      </div>

      <div className="filterContainer background__white">
        <div className="filter-label">Diện tích:</div>
        <Slider defaultValue={0} step={1} max={30} onChange={onChangeDienTich} />
        {dienTich > 0 && <div>0 m2 ~ {dienTich} m2</div>}
      </div>

      <div className="filterContainer background__white">
        <div className="filter-label">Giá:</div>
        <Slider defaultValue={0} step={100000} max={5000000} onChange={onChangePrice} />
        {price > 0 && <div>0 VNĐ ~ {price} VNĐ</div>}
      </div>

      <div className="filter-container-button ">
        <Button danger type="primary" onClick={handleThietLapLai}>
          Thiết lập lại
        </Button>
        <Button type="primary" onClick={handleTimKiem}>
          Tìm kiếm
        </Button>
      </div>
    </Wrapper>
  );
}

export default FilterPhongTro;

const Wrapper = styled.div`
  margin-top: 30px;
  .filter {
    &Container {
      padding: 8px;
      margin-bottom: 4px;
      margin-top: 15px;
    }

    &-label {
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
