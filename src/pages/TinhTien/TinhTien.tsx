import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import TitlePage from "components/TitlePage";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "utils/common";
const data: any[] = [
  {
    _id: "625bd193fa3d0f8d6660a6a5",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    toa: "Tòa P1",
    soPhong: 102,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "1900000",
    dangThue: 2430000,
    khachHang: {
      _id: "625bda07fa3d0f8d6660a726",
      tenKhachHang: "Hà Quốc Tuấn",
    },
    __v: 0,
  },
  {
    _id: "625bd193fa3d0f8d6660a6a5",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    toa: "Tòa P1",
    soPhong: 103,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "1900000",
    dangThue: 2530000,
    khachHang: {
      _id: "625bda07fa3d0f8d6660a726",
      tenKhachHang: "Hà Quốc Tuấn",
    },
    __v: 0,
  },
  {
    _id: "625bd193fa3d0f8d6660a6a5",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    toa: "Tòa P1",
    soPhong: 104,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "1900000",
    dangThue: 2534000,
    khachHang: {
      _id: "625bda07fa3d0f8d6660a726",
      tenKhachHang: "Hà Quốc Tuấn",
    },
    __v: 0,
  },
];
function TinhTien() {
  const columns: ColumnsType<any> = [
    {
      key: "stt",
      title: "STT",
      width: 60,
      align: "center",
      render: (text: any, record: any, index: number) => index + 1,
    },

    {
      key: "soPhong",
      title: "Số phòng",
      dataIndex: "soPhong",
    },
    {
      key: "toa",
      title: "Tòa",
      dataIndex: "toa",
    },
    {
      key: "dangThue",
      title: "Số tiền",
      dataIndex: "dangThue",
      render: (text: any, record: any) => formatPrice(text),
    },
    {
      key: "action",
      title: "Hành động",
      width: 300,
      render: () => (
        <Space>
          <Button type="primary">Tính tiền</Button>
          <Button type="primary" danger>
            In
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <LayoutDashboard>
      <HelmetComponent title="Tính tiền phòng" />
      <TitlePage title="Tính tiền phòng" />

      <Wrapper>
        <div className="lienhe-table background__white">
          <Table size="small" columns={columns} dataSource={data} />
        </div>
      </Wrapper>
    </LayoutDashboard>
  );
}

export default TinhTien;

const Wrapper = styled.div`
  .lienhe {
    &-table {
      padding: 10px;
    }
  }
`;
