import { Button, DatePicker, Space, Table } from "antd";
import locale from "antd/lib/date-picker/locale/vi_VN";
import { ColumnsType } from "antd/lib/table";
import { font } from "assets/fonts/Roboto-Regular-normal.js";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import TitlePage from "components/TitlePage";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { TienPhongService } from "service/TienPhongService";
import styled from "styled-components";
import ModalTinhTien from "./ModalTinhTien";

function TinhTien() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>([]);
  const [thang, setThang] = useState("05/2022");

  const [openTinhTien, setOpenTinhTien] = useState(false);
  const [dataTinhTien, setDataTinhTien] = useState<any>(null);

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

  const handleOpenTinhTien = (data: any) => {
    if (!data) {
      return;
    }
    setDataTinhTien({ ...data, thang });
    setOpenTinhTien(true);
  };

  const handleCloseTinhTien = () => {
    setDataTinhTien(null);
    setOpenTinhTien(false);
  };

  const handleChangeDate = (value: any, dateString: any) => {
    setThang(dateString);
  };

  const handleGetTienPhong = () => {
    setLoading(true);
    TienPhongService.getTienPhong()
      .then((res) => {
        const data = res.data.data;
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetTienPhong();
  }, []);

  const columns: ColumnsType<any> = [
    {
      key: "stt",
      title: "STT",
      width: 60,
      align: "center",
      render: (text: any, record: any, index: number) => index + 1,
    },
    {
      key: "tenKhachHang",
      title: "Tên khách hàng",
      dataIndex: "tenKhachHang",
    },
    {
      key: "phongToa",
      title: "Phòng - Tòa",
      dataIndex: "phong",
      render: (text: any, record: any) => {
        return `Phòng ${record.phong?.soPhong} - ${record.phong?.toaNha?.tenToaNha}`;
      },
    },
    {
      key: "ngayTinhTien",
      title: "Ngày tính tiền",
      dataIndex: "hoadon",
      render: (text: any) => {
        const rs = text.filter((item: any) => item.thang === thang);
        if (rs.length > 0) {
          return <>{moment(rs[0].ngayTinhTien).format("DD/MM/YYYY HH:mm:ss")}</>;
        } else {
          return <></>;
        }
      },
    },

    {
      key: "trangThai",
      title: "Trạng thái",
      dataIndex: "hoadon",
      render: (text: any) => {
        const rs = text.filter((item: any) => item.thang === thang);
        if (rs.length > 0) {
          return <>Đã tính tiền</>;
        } else {
          return <>Chưa tính tiền</>;
        }
      },
    },

    {
      key: "action",
      title: "Hành động",
      dataIndex: "hoadon",
      width: 300,
      render: (text: any, record: any) => {
        const rs = text.filter((item: any) => item.thang === thang);
        if (rs.length > 0) {
          return (
            <Space>
              <Button type="primary" danger>
                In
              </Button>
              <Button type="default">Tải hóa đơn</Button>
            </Space>
          );
        } else {
          return (
            <Button type="primary" onClick={() => handleOpenTinhTien(record)}>
              Tính tiền
            </Button>
          );
        }
      },
    },
  ];

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
          value={moment(thang, "MM/YYYY")}
          allowClear={false}
          disabledDate={(current: any) => {
            return current && current > moment().endOf("month");
          }}
        />

        <Button onClick={() => handlePDF("down")}>Tải hóa đơn</Button>
        <Button onClick={() => handlePDF("view")}>In hóa đơn</Button>
        <div className="lienhe-table background__white">
          <Table
            loading={loading}
            rowKey={"_id"}
            size="small"
            columns={columns}
            dataSource={data}
          />
        </div>

        <ModalTinhTien
          visible={openTinhTien}
          onClose={handleCloseTinhTien}
          onRefresh={handleGetTienPhong}
          data={dataTinhTien}
        />
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
