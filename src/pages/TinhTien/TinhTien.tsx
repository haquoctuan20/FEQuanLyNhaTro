import { Button, DatePicker, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import TitlePage from "components/TitlePage";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "utils/common";

import locale from "antd/lib/date-picker/locale/vi_VN";

import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";

import { font } from "assets/fonts/Roboto-Regular-normal.js";

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

  const handlePDF = (type: "view" | "down") => {
    const doc: any = new jsPDF("landscape", "mm", "a5");

    doc.addFileToVFS("./Roboto-Regular.ttf", font);
    doc.addFont("./Roboto-Regular.ttf", "Roboto", "normal");
    doc.setFont("Roboto", "normal");

    var finalY = doc.lastAutoTable?.finalY || 10;

    doc.text("Hóa đơn phòng 101 - Tòa P1", 14, finalY + 5);
    doc.autoTable({
      startY: finalY + 10,
      styles: { fontSize: 12, font: "Roboto" },
      head: [["ID", "Name", "Email", "Country", "IP-address"]],
      body: [
        ["1", "ế", "dmoore0@furl.net", "China", "211.56.242.221"],
        ["2", "Janice", "jhenry1@theatlantic.com", "Ukraine", "38.36.7.199"],
        [
          "3",
          "ở",
          "rwells2@constantcontact.com",
          "Trinidad and Tobago",
          "19.162.133.184",
        ],
        ["4", "ư", "jray3@psu.edu", "Brazil", "10.68.11.42"],
        ["5", "ê", "jstephens4@go.com", "United States", "47.32.129.71"],
        ["6", "ơ", "anichols5@com.com", "Canada", "18.186.38.37"],
      ],
    });

    finalY = doc.lastAutoTable.finalY;
    doc.text(
      "Đây là footer: ghi thông tin nhà trọ, thời gian xuất hóa đơn: " +
        moment(new Date()).format("DD/MM/YYYY HH:mm:ss"),
      14,
      finalY + 15
    );
    doc.text(
      "thời gian xuất hóa đơn: " + moment(new Date()).format("DD/MM/YYYY HH:mm:ss"),
      12,
      finalY + 22
    );

    if (type === "down") {
      doc.save("table.pdf");
    } else {
      doc.output("pdfobjectnewwindow");
    }
  };

  const handleChangeDate = (value: any, dateString: any) => {
    console.log("❗TuanHQ🐞 💻 handleChangeDate 💻 dateString", dateString);
  };
  return (
    <LayoutDashboard>
      <HelmetComponent title="Tính tiền phòng" />
      <TitlePage title="Tính tiền phòng" />

      <Wrapper>
        <DatePicker
          locale={locale}
          picker="month"
          format="MM/YYYY"
          onChange={handleChangeDate}
        />

        <Button onClick={() => handlePDF("down")}>Tải hóa đơn</Button>
        <Button onClick={() => handlePDF("view")}>In hóa đơn</Button>
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
