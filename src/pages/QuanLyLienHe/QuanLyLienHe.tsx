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
    name: "Jack",
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
      dataIndex: "hoTen",
    },
    {
      key: "thoiGianHen",
      title: "Thời gian hẹn",
      dataIndex: "thoiGianHen",
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
      key: "trangThai",
      title: "Trạng thái",
      dataIndex: "trangThai",
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
