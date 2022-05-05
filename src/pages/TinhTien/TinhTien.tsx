import { Button, DatePicker, Space, Table } from "antd";
import locale from "antd/lib/date-picker/locale/vi_VN";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import TitlePage from "components/TitlePage";
import "jspdf-autotable";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { TienPhongService } from "service/TienPhongService";
import styled from "styled-components";
import ModalInHoaDon from "./ModalInHoaDon";
import ModalTaiHoaDon from "./ModalTaiHoaDon";
import ModalTinhTien from "./ModalTinhTien";

function TinhTien() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>([]);
  const [thang, setThang] = useState("05/2022");

  const [openTinhTien, setOpenTinhTien] = useState(false);
  const [dataTinhTien, setDataTinhTien] = useState<any>(null);

  const [openInHoaDon, setOpenInHoaDon] = useState(false);
  const [dataInHoaDon, setDataInHoaDon] = useState(null);

  const [openTaiHoaDon, setOpenTaiHoaDon] = useState(false);
  const [dataTaiHoaDon, setDataTaiHoaDon] = useState(null);

  const handleOpenInHoaDon = (data: any) => {
    if (!data) {
      return;
    }

    setDataInHoaDon({ ...data, thang });
    setOpenInHoaDon(true);
  };

  const handleCloseInHoaDon = () => {
    setDataInHoaDon(null);
    setOpenInHoaDon(false);
  };

  const handleOpenTaiHoaDon = (data: any) => {
    if (!data) {
      return;
    }

    setDataTaiHoaDon({ ...data, thang });
    setOpenTaiHoaDon(true);
  };

  const handleCloseTaiHoaDon = () => {
    setDataTaiHoaDon(null);
    setOpenTaiHoaDon(false);
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
              <Button type="primary" danger onClick={() => handleOpenInHoaDon(rs[0])}>
                In
              </Button>
              <Button type="default" onClick={() => handleOpenTaiHoaDon(rs[0])}>
                Tải hóa đơn
              </Button>
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

        <ModalInHoaDon
          visible={openInHoaDon}
          onClose={handleCloseInHoaDon}
          onRefresh={handleGetTienPhong}
          data={dataInHoaDon}
        />

        <ModalTaiHoaDon
          visible={openTaiHoaDon}
          onClose={handleCloseTaiHoaDon}
          onRefresh={handleGetTienPhong}
          data={dataTaiHoaDon}
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
