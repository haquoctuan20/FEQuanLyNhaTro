import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import TitlePage from "components/TitlePage";
import React from "react";
import styled from "styled-components";

const data: any[] = [
  {
    _id: "625bd177fa3d0f8d6660a69f",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    soPhong: 101,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "2000000",
    dangThue: false,
    khachHang: null,
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
    soPhong: 102,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "1900000",
    dangThue: true,
    khachHang: {
      _id: "625bda07fa3d0f8d6660a726",
      tenKhachHang: "Hà Quốc Tuấn",
    },
    __v: 0,
  },
  {
    _id: "625bd1a5fa3d0f8d6660a6ab",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    soPhong: 201,
    dienTich: "22",
    soLuongToiDa: "3",
    gia: "2200000",
    dangThue: false,
    khachHang: null,
    __v: 0,
  },
  {
    _id: "625bd4f9fa3d0f8d6660a6ff",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    soPhong: 301,
    dienTich: "16",
    soLuongToiDa: "2",
    gia: "1600000",
    dangThue: false,
    khachHang: null,
    __v: 0,
  },
  {
    _id: "625bd519fa3d0f8d6660a707",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    soPhong: 302,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "2000000",
    dangThue: false,
    khachHang: null,
    __v: 0,
  },
  {
    _id: "625bd52afa3d0f8d6660a70d",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    soPhong: 401,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "2000000",
    dangThue: false,
    khachHang: null,
    __v: 0,
  },
  {
    _id: "625bd546fa3d0f8d6660a713",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    soPhong: 501,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "2000000",
    dangThue: false,
    khachHang: null,
    __v: 0,
  },
  {
    _id: "625bd559fa3d0f8d6660a719",
    toaNha: {
      _id: "62495e2f6cd8293e7aa63e94",
      tenToaNha: "Tòa P1",
      diaChi: "Địa chỉ tòa P1",
      __v: 0,
    },
    soPhong: 502,
    dienTich: "20",
    soLuongToiDa: "3",
    gia: "2000000",
    dangThue: false,
    khachHang: null,
    __v: 0,
  },
];

function QuanLyBaiViet() {
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
      render: (text: any, record: any) => record.toaNha.tenToaNha,
    },

    {
      key: "action",
      title: "Hành động",
      width: 300,
      render: (text, record, index) => (
        <Space>
          {index % 3 === 0 ? (
            <Button type="primary" danger>
              Ẩn
            </Button>
          ) : (
            <Button type="primary">Hiện</Button>
          )}

          <Button type="primary">Sửa</Button>
        </Space>
      ),
    },
  ];
  return (
    <LayoutDashboard>
      <HelmetComponent title="Quản lý bài viết" />
      <TitlePage title="Quản lý bài viết" />

      <Wrapper>
        <div className="lienhe-table background__white">
          <Table size="small" columns={columns} dataSource={data} />
        </div>
      </Wrapper>
    </LayoutDashboard>
  );
}

export default QuanLyBaiViet;

const Wrapper = styled.div`
  .lienhe {
    &-table {
      padding: 10px;
    }
  }
`;
