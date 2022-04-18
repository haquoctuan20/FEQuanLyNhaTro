import { Button, InputNumber, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import TitlePage from "components/TitlePage";
import React from "react";
import styled from "styled-components";

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
    dangThue: 1538,
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
    dangThue: 1234,
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
    dangThue: 2003,
    khachHang: {
      _id: "625bda07fa3d0f8d6660a726",
      tenKhachHang: "Hà Quốc Tuấn",
    },
    __v: 0,
  },
];

function ChiSoDien() {
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
      title: "Số điện cũ",
      dataIndex: "dangThue",
    },
    {
      key: "soMoi",
      title: "Số điện mới",
      dataIndex: "soMoi",
      render: () => (
        <>
          <InputNumber></InputNumber>
        </>
      ),
    },
    {
      key: "action",
      title: "Hành động",
      width: 300,
      render: () => (
        <Space>
          <Button type="primary">Lưu</Button>
        </Space>
      ),
    },
  ];
  return (
    <LayoutDashboard>
      <HelmetComponent title="Nhập chỉ số điện" />
      <TitlePage title="Nhập chỉ số điện" />

      <Wrapper>
        <div className="lienhe-table background__white">
          <Table size="small" columns={columns} dataSource={data} />
        </div>
      </Wrapper>
    </LayoutDashboard>
  );
}

export default ChiSoDien;

const Wrapper = styled.div`
  .lienhe {
    &-table {
      padding: 10px;
    }
  }
`;
