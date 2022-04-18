import {
  DollarOutlined,
  ExpandAltOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Popconfirm, Row, Space } from "antd";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import { NotificationError, NotificationSuccess } from "components/Notification";
import SpinLoading from "components/SpinLoading/SpinLoading";
import TitlePage from "components/TitlePage";
import React, { useEffect, useState } from "react";
import { PhongTroServices } from "service/PhongTroServices";
import { ToaNhaServices } from "service/ToaNhaServices";
import styled from "styled-components";
import { formatPrice } from "utils/common";
import ModalTaoPhong from "./components/ModalTaoPhong";
import ModalThemKhach from "./components/ModalThemKhach";

function BangDieuKhien() {
  const [openTaoPhong, setOpenTaoPhong] = useState(false);

  const [dataPhong, setDataPhong] = useState([]);
  const [loading, setLoading] = useState(false);

  const [toaNha, setToaNha] = useState([]);
  const [toaNhaSelected, settoaNhaSelected] = useState("all");

  const [openThemKhach, setOpenThemKhach] = useState(false);
  const [idPhong, setIdPhong] = useState("");

  // TẠO PHÒNG
  const handleOpenTaoPhong = () => {
    setOpenTaoPhong(true);
  };

  const handleCloseTaoPhong = () => {
    setOpenTaoPhong(false);
  };
  // END TẠO PHÒNG

  // THÊM KHÁCH
  const handleOpenThemKhach = (id: string) => {
    setIdPhong(id);
    setOpenThemKhach(true);
  };

  const handleCloseThemKhach = () => {
    setOpenThemKhach(false);
  };
  // END THÊM KHÁCH

  const handleFilterToaNha = (id: string) => {
    settoaNhaSelected(id);
  };

  const handleGetAllPhongTro = () => {
    setLoading(true);
    PhongTroServices.getAll()
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi khi lấy danh sách phòng trọ", "");
          return;
        }

        setDataPhong(res.data.data);
      })
      .catch((err) => {
        NotificationError("Lỗi khi lấy danh sách phòng trọ", "");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRefresh = () => {
    handleGetAllPhongTro();
  };

  const handleDeleteRoom = (id: string) => {
    setLoading(true);
    PhongTroServices.deleteRoom(id)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi khi xóa phòng trọ", "");
          return;
        }

        NotificationSuccess("Xóa phòng trọ thành công", "");
        handleRefresh();
      })
      .catch((err) => {
        NotificationError("Lỗi khi xóa phòng trọ", "");
      });
  };

  const handleCheckoutRoom = (idKhachHang: string, idPhong: string) => {
    const params = { idKhachHang, idPhong };
    PhongTroServices.checkoutRoom(params)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi khi trả phòng trọ", "");
          return;
        }

        NotificationSuccess("Trả phòng trọ thành công", "");
        handleRefresh();
      })
      .catch((err) => {
        NotificationError("Lỗi khi trả phòng trọ", "");
      });
  };

  const getAllToaNha = () => {
    ToaNhaServices.getAll()
      .then((res) => {
        if (res.data.code !== 0) {
          console.log(res);
          return;
        }

        setToaNha(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleGetAllPhongTro();
    getAllToaNha();
  }, []);

  return (
    <LayoutDashboard>
      <HelmetComponent title="Quản lý phòng trọ" />
      <TitlePage title="Quản lý phòng trọ" />

      <Wrapper>
        <div className="containerAction">
          <Space>
            <Button
              key={"#"}
              type={toaNhaSelected === "all" ? "primary" : "default"}
              onClick={() => handleFilterToaNha("all")}
            >
              Tất cả
            </Button>

            {toaNha.map((item: any, index) => (
              <Button
                type={toaNhaSelected === item._id ? "primary" : "default"}
                key={index}
                onClick={() => handleFilterToaNha(item._id)}
              >
                {item.tenToaNha}
              </Button>
            ))}
          </Space>

          <Space>
            <Button type="primary" onClick={handleOpenTaoPhong}>
              Thêm phòng
            </Button>
            <Button type="default" onClick={handleRefresh}>
              Làm mới
            </Button>
          </Space>
        </div>

        <Divider orientation="left">Địa chỉ</Divider>

        {loading ? (
          <SpinLoading />
        ) : (
          <Row gutter={[8, 8]} className="containerRoom">
            {dataPhong.map((p: any, index) => (
              <Col md={12} lg={8} xl={6} key={index}>
                <div
                  className={`containerRoom-room ${
                    p.dangThue && "containerRoom-room-active"
                  }`}
                >
                  <div className="containerRoom-numberRoom ">
                    <HomeOutlined className="me-2" /> {p.soPhong} - {p.toaNha.tenToaNha}
                  </div>

                  <div>
                    {p.dangThue ? (
                      <>
                        <div className="containerRoom-user ">
                          <UserOutlined className="me-2" /> {p.khachHang.tenKhachHang}
                        </div>
                        <Space>
                          <Popconfirm
                            title="Bạn chắc chắn khách hàng muốn trả phòng này?"
                            okText="Đồng ý"
                            cancelText="Hủy"
                            onConfirm={() => handleCheckoutRoom(p.khachHang._id, p._id)}
                          >
                            <Button type="primary">Trả phòng</Button>
                          </Popconfirm>

                          <Button type="primary" danger>
                            Sửa
                          </Button>
                        </Space>
                      </>
                    ) : (
                      <>
                        <Button type="primary" onClick={() => handleOpenThemKhach(p._id)}>
                          Thêm khách
                        </Button>
                      </>
                    )}
                  </div>

                  <div>
                    <div className="containerRoom-price ">
                      <DollarOutlined className="me-2" />
                      Giá: {formatPrice(p.gia)}
                    </div>

                    <div className="containerRoom-dienTich ">
                      <ExpandAltOutlined className="me-2" />
                      Diện tích: {p.dienTich} m2
                    </div>

                    <Space>
                      <Button type="primary">Sửa phòng</Button>

                      {!p.dangThue && (
                        <Popconfirm
                          title="Bạn chắc chắn muốn xóa phòng này?"
                          okText="Xóa"
                          cancelText="Hủy"
                          onConfirm={() => handleDeleteRoom(p._id)}
                        >
                          <Button type="primary" danger>
                            Xóa phòng
                          </Button>
                        </Popconfirm>
                      )}
                    </Space>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}

        <ModalTaoPhong
          visible={openTaoPhong}
          onClose={handleCloseTaoPhong}
          onRefresh={handleGetAllPhongTro}
        />

        <ModalThemKhach
          visible={openThemKhach}
          onClose={handleCloseThemKhach}
          onRefresh={handleGetAllPhongTro}
          idPhong={idPhong}
        />
      </Wrapper>
    </LayoutDashboard>
  );
}

export default BangDieuKhien;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 12px;
  background: #fff;

  .containerAction {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .containerRoom {
    &-room {
      border: 1px solid #c3c3c3;
      padding: 6px;
      min-height: 210px;
      /* max-width: 240px; */

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      cursor: pointer;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-color: #1890ff;
      }

      &-active {
        background-color: #1890ff26;
      }
    }

    &-numberRoom {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      justify-content: center;

      font-size: 18px;
      font-weight: 500;
    }

    &-user {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }

    &-price {
      display: flex;
      align-items: center;

      border-top: 1px solid #c3c3c3;
    }
    &-dienTich {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
  }
`;
