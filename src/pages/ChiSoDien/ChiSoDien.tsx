import { Button, Form, InputNumber, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import HelmetComponent from "components/HelmetComponent";
import LayoutDashboard from "components/Layouts/LayoutDashboard";
import { NotificationError, NotificationSuccess } from "components/Notification";
import TitlePage from "components/TitlePage";
import React, { useEffect, useState } from "react";
import { ChiSoDienService } from "service/ChiSoDienService";
import styled from "styled-components";

function ChiSoDien() {
  const [page, setPage] = useState<number>(1);
  const [size] = useState<number>(10);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dangThue, setDangThue] = useState<"all" | true | false>("all");

  const onFinish = (values: any, record: any) => {
    const param = {
      id: record._id,
      chiSoMoi: values.chiSoMoi,
    };

    ChiSoDienService.saveSoDien(param)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi cập nhật chỉ số điện", res.data.message);
          return;
        }

        NotificationSuccess("Thành công", "Chỉ số điện đã được cập nhật");
        handleGetAll();
      })
      .catch((err) => {
        NotificationError("Lỗi cập nhật chỉ số điện", "");
      });
  };

  const handleGetAll = () => {
    setLoading(true);

    ChiSoDienService.getListPhongTro(dangThue)
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

  useEffect(() => {
    handleGetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dangThue]);

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
      dataIndex: "toaNha",
      render: (text: any) => <>{text.tenToaNha}</>,
    },
    {
      key: "dangThue",
      title: "Trạng thái",
      dataIndex: "dangThue",
      render: (text: any) => (
        <>
          {text ? (
            <div className="trangThai_true">Đang thuê</div>
          ) : (
            <div className="trangThai_false">Đang trống</div>
          )}
        </>
      ),
    },
    {
      key: "SoDienSau",
      title: "Số điện",
      dataIndex: "SoDienSau",
      render: (text: any) => <>{text}</>,
    },
    {
      key: "soMoi",
      title: "Số điện mới",
      dataIndex: "soMoi",
      render: (text: any, record: any) => (
        <>
          <Form
            layout="inline"
            name={record._id}
            onFinish={(values) => onFinish(values, record)}
          >
            <Form.Item
              name="chiSoMoi"
              rules={[{ required: true, message: "Nhập số điện" }]}
            >
              <InputNumber />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form>
        </>
      ),
    },
  ];
  return (
    <LayoutDashboard>
      <HelmetComponent title="Nhập chỉ số điện" />
      <TitlePage title="Nhập chỉ số điện" />

      <Space className="mb-2">
        <Button
          type={dangThue === true ? "primary" : "default"}
          onClick={() => {
            setDangThue(true);
          }}
        >
          Đang cho thuê
        </Button>
        <Button
          type={dangThue === "all" ? "primary" : "default"}
          onClick={() => {
            setDangThue("all");
          }}
        >
          Tất cả
        </Button>
      </Space>

      <Wrapper>
        <div className="lienhe-table background__white">
          <Table
            rowKey={"_id"}
            size="small"
            columns={columns}
            dataSource={data}
            loading={loading}
            locale={{ emptyText: <p className="mt-3">Không có phòng</p> }}
            pagination={{
              current: page,
              pageSize: size,
              total: data.length,
              onChange: (page) => setPage(page),
              showTotal: (total, range) =>
                `Đang xem ${range[0]} đến ${range[1]} trong tổng số ${total} mục`,
            }}
          />
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

  .trangThai_true {
    width: 100px;
    color: #007200;
    background-color: #00ff0014;
    text-align: center;
    border-radius: 4px;
  }

  .trangThai_false {
    width: 100px;
    color: #000000;
    background-color: #00000014;
    text-align: center;
    border-radius: 4px;
  }
`;
