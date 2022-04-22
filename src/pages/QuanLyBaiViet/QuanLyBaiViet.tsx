import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import { NotificationError, NotificationSuccess } from "components/Notification";
import TitlePage from "components/TitlePage";
import React, { useEffect, useState } from "react";
import { BaiVietService } from "service/baiVietService";
import styled from "styled-components";
import ModalSuaBaiViet from "./components/ModalSuaBaiViet";

function QuanLyBaiViet() {
  const [baiViet, setBaiViet] = useState([]);

  const [loading, setloading] = useState(false);

  const [openSuaBaiViet, setOpenSuaBaiViet] = useState(false);
  const [baiVietEdit, setBaiVietEdit] = useState({});

  const handleOpenSuaBaiViet = (data: any) => {
    if (!data) {
      return;
    }

    setOpenSuaBaiViet(true);
    setBaiVietEdit(data);
  };

  const handleCloseSuaBaiViet = () => {
    setOpenSuaBaiViet(false);
    setBaiVietEdit({});
  };

  const handleGetBaiViet = () => {
    setloading(true);
    BaiVietService.getBaiViet()
      .then((res: any) => {
        if (res.data.code !== 0) {
          NotificationError("Lấy danh sách bài viết thất bại", "");
          return;
        }

        setBaiViet(res.data.data);
      })
      .catch((err: any) => {
        NotificationError("Lấy danh sách bài viết thất bại", "");
        console.error(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  const handleHienBaiViet = (id: string) => {
    BaiVietService.hienBaiViet(id)
      .then((res: any) => {
        if (res.data.code !== 0) {
          NotificationError("Hiển thị bài viết thất bại", "");
          return;
        }

        NotificationSuccess("Hiển thị bài viết thành công", "");
        handleGetBaiViet();
      })
      .catch((err: any) => {
        NotificationError("Hiển thị bài viết thất bại", "");
        console.error(err);
      });
  };

  const handleAnBaiViet = (id: string) => {
    BaiVietService.anBaiViet(id)
      .then((res: any) => {
        if (res.data.code !== 0) {
          NotificationError("Ẩn bài viết thất bại", "");
          return;
        }

        NotificationSuccess("Ẩn bài viết thành công", "");
        handleGetBaiViet();
      })
      .catch((err: any) => {
        NotificationError("Ẩn bài viết thất bại", "");
        console.error(err);
      });
  };

  useEffect(() => {
    handleGetBaiViet();
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
      key: "phong",
      title: "Phòng - Tòa",
      dataIndex: "phong",
      render: (text: any, record: any) => (
        <>
          Phòng {text.soPhong} - {text.toaNha.tenToaNha}
        </>
      ),
    },
    {
      key: "noiDung",
      title: "Nội dung",
      dataIndex: "noiDung",
      ellipsis: true,
    },
    {
      key: "trangThai",
      title: "Trạng thái",
      dataIndex: "trangThai",
      render: (text: any, record: any) => (
        <>
          {text ? (
            <div className="trangThai_hien">Đăng hiển thị</div>
          ) : (
            <div className="trangThai_an">Đang ẩn</div>
          )}
        </>
      ),
    },

    {
      key: "action",
      title: "Hành động",
      width: 300,
      dataIndex: "trangThai",
      render: (text, record, index) => (
        <Space>
          {text ? (
            <Button
              type="primary"
              style={{ minWidth: "70px" }}
              onClick={() => handleAnBaiViet(record._id)}
              danger
            >
              Ẩn
            </Button>
          ) : (
            <Button
              type="primary"
              style={{ minWidth: "70px" }}
              onClick={() => handleHienBaiViet(record._id)}
            >
              Hiện
            </Button>
          )}

          <Button
            style={{ minWidth: "70px" }}
            onClick={() => handleOpenSuaBaiViet(record)}
          >
            Sửa
          </Button>
        </Space>
      ),
    },
  ];

  // ++++++++++++++++++++++++++++++

  return (
    <LayoutDashboard>
      <HelmetComponent title="Quản lý bài viết" />
      <TitlePage title="Quản lý bài viết" />

      <Wrapper>
        <div className="lienhe-table background__white">
          <Table
            rowKey={"_id"}
            loading={loading}
            size="small"
            columns={columns}
            dataSource={baiViet}
          />
        </div>
      </Wrapper>

      {/* <label htmlFor="243523452345">Tải ảnh nhà trọ</label>
      <input
        name="243523452345"
        type="file"
        accept="image/*"
        onChange={handleChangeFile}
      /> */}

      <ModalSuaBaiViet
        data={baiVietEdit}
        onClose={handleCloseSuaBaiViet}
        visible={openSuaBaiViet}
        onRefresh={handleGetBaiViet}
      ></ModalSuaBaiViet>
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

  .trangThai_hien {
    width: 100px;
    color: #007200;
    background-color: #00ff0014;
    text-align: center;
    border-radius: 4px;
  }

  .trangThai_an {
    width: 100px;
    color: #ff0000;
    background-color: #ff000014;
    text-align: center;
    border-radius: 4px;
  }
`;
