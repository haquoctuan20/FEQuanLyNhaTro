import { Button, Popconfirm, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import { NotificationError, NotificationSuccess } from "components/Notification";
import TitlePage from "components/TitlePage";
import React, { useEffect, useState } from "react";
import { LienHeService } from "service/LienHeService";
import styled from "styled-components";
import ModalChiTiet from "./components/ModalChiTiet";

function QuanLyLienHe() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [xemLienHe, setXemLienHe] = useState(null);
  const [openXemChiTiet, setOpenXemChiTiet] = useState(false);

  const handleGetAll = () => {
    setLoading(true);

    LienHeService.getListLienHe()
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi", res.data.message);
          return;
        }

        setData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleXemChiTiet = (params: any) => {
    if (!params) return;

    setXemLienHe(params);
    setOpenXemChiTiet(true);
  };

  const handleCloseXemChiTiet = () => {
    setOpenXemChiTiet(false);
    setXemLienHe(null);
  };

  const handleDeleteLienHe = (id: string) => {
    LienHeService.deleteLienHe(id)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Xóa liên hệ không thành công.", "");
          return;
        }

        NotificationSuccess("Xóa liên hệ thành công.", "");
        handleGetAll();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleXacNhanLienHe = (id: string) => {
    LienHeService.xacNhanLienHe(id)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Xác nhận liên hệ không thành công.", "");
          return;
        }

        NotificationSuccess("Xác nhận liên hệ thành công.", "");
        handleGetAll();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleGetAll();
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
      key: "hoTen",
      title: "Tên",
      dataIndex: "hoTen",
    },
    {
      key: "soDienThoai",
      title: "Số điện thoại",
      dataIndex: "soDienThoai",
    },

    {
      key: "soPhong",
      title: "Phòng - Tòa nhà",
      dataIndex: "phong",
      render: (text: any) => (
        <>
          Phòng {text.soPhong} - {text.toaNha.tenToaNha}
        </>
      ),
    },
    {
      key: "trangThai",
      title: "Trạng thái",
      dataIndex: "trangThai",
      render: (text: any) => <>{text ? "Đã xác nhận" : "Đang chờ"}</>,
    },
    {
      key: "action",
      title: "Hành động",
      width: 300,
      render: (text: any, record: any) => (
        <Space>
          <Button type="default" onClick={() => handleXemChiTiet(record)}>
            Chi tiết
          </Button>

          {!record?.trangThai && (
            <Popconfirm
              title="Bạn chắc chắn muốn xác nhận liên hệ này?"
              okText="Đồng ý"
              cancelText="Hủy"
              onConfirm={() => handleXacNhanLienHe(record._id)}
            >
              <Button type="primary">Xác nhận</Button>
            </Popconfirm>
          )}

          <Popconfirm
            title="Bạn chắc chắn muốn xóa liên hệ này?"
            okText="Đồng ý"
            cancelText="Hủy"
            onConfirm={() => handleDeleteLienHe(record._id)}
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
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
          <Table
            rowKey="_id"
            size="small"
            columns={columns}
            dataSource={data}
            loading={loading}
          />
        </div>
      </Wrapper>

      <ModalChiTiet
        visible={openXemChiTiet}
        onClose={handleCloseXemChiTiet}
        data={xemLienHe}
      />
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
