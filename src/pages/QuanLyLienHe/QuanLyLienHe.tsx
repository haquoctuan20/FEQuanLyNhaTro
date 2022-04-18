import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import TitlePage from "components/TitlePage";
import React from "react";
import styled from "styled-components";

const data: any[] = [
  {
    key: 0,
    ten: "Hà Minh",
    email: "haminh@gmail.com",
    sdt: "0987654321",
    noiDung: "Tôi muốn xem trọ vào ngày 20/4/2022, hãy liên hệ cho tôi sớm nhất",
    soPhong: 101,
    toa: "Tòa P1",
  },
];

function QuanLyLienHe() {
  const columns: ColumnsType<any> = [
    {
      key: "stt",
      title: "STT",
      width: 60,
      align: "center",
      render: (text: any, record: any, index: number) => index + 1,
    },
    {
      key: "hoTen",
      title: "Tên",
      dataIndex: "ten",
    },
    {
      key: "sdt",
      title: "Số điện thoại",
      dataIndex: "sdt",
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
      key: "noiDung",
      title: "Nội dung",
      dataIndex: "noiDung",
      ellipsis: true,
    },
    {
      key: "action",
      title: "Hành động",
      width: 300,
      render: () => (
        <Space>
          <Button type="primary">Chi tiết</Button>
          <Button type="primary">Xác nhận</Button>
          <Button type="primary" danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <LayoutDashboard>
      <HelmetComponent title="Quản lý liên hệ" />
      <TitlePage title="Quản lý liên hệ" />

      <Wrapper>
        <div className="lienhe-table background__white">
          <Table size="small" columns={columns} dataSource={data} />
        </div>
      </Wrapper>
    </LayoutDashboard>
  );
}

export default QuanLyLienHe;

const Wrapper = styled.div`
  .lienhe {
    &-table {
      padding: 10px;
    }
  }
`;
