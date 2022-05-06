import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Space,
} from "antd";
import locale from "antd/lib/date-picker/locale/vi_VN";
import { NotificationError, NotificationSuccess } from "components/Notification";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { PhongTroServices } from "service/PhongTroServices";
import styled from "styled-components";
import ThemThanhVien from "./ThemThanhVien";

interface ModalTaoPhongTypes {
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
  data: any;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

function ModalSuaKhach(props: ModalTaoPhongTypes) {
  const [form] = Form.useForm();
  const { visible, onClose, onRefresh, data } = props;

  const [loading, setLoading] = useState(false);

  const [thanhVien, setThanhVien] = useState<any>([]);

  const themThanhVien = (params) => {
    setThanhVien([...thanhVien, params]);
  };

  const xoaThanhVien = (id: string) => {
    const rs = thanhVien.filter((item) => item.id !== id);
    setThanhVien(rs);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    onClose();
    form.resetFields();
  };

  const onFinish = (values: any) => {
    const params = {
      ...values,
      thanhVien,
      ngayCap: moment(values.ngayCap).valueOf(),
    };

    setLoading(true);
    PhongTroServices.updateCustomer(data._id, params)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi sửa thông tin khách hàng.", res.data.message);
          return;
        }

        NotificationSuccess("Sửa thông tin khách hàng thành công.", "");
        handleCancel();
        onRefresh();
      })
      .catch((err) => {
        NotificationError("Lỗi sửa thông tin khách hàng.", "");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!visible) {
      return;
    }
    setThanhVien(data?.thanhVien);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useEffect(() => {
    form.resetFields();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Modal
      title="Sửa thông tin khách hàng"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
      okText="Lưu"
      cancelText="Hủy"
      footer={false}
      width={1200}
      style={{ top: 20 }}
    >
      <Wrapper>
        <Row gutter={[8, 8]}>
          <Col lg={12}>
            <Form name="SuakhachHang" {...layout} onFinish={onFinish} form={form}>
              <Form.Item
                labelAlign="left"
                name="tenKhachHang"
                label="Tên khách hàng:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.tenKhachHang}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="tuoi"
                label="Tuổi:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.tuoi}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="gioiTinh"
                label="Giới tính:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.gioiTinh}
              >
                <Radio.Group>
                  <Radio value="0">Nam</Radio>
                  <Radio value="1">Nữ</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="diaChiThuongTru"
                label="Địa chỉ thường trú:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.diaChiThuongTru}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="soDienThoai"
                label="Số điện thoại:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.soDienThoai}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="cccd"
                label="CCCD:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.cccd}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="ngayCap"
                label="Ngày cấp:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={moment(data?.ngayCap)}
              >
                <DatePicker
                  locale={locale}
                  style={{ width: "100%" }}
                  format="DD/MM/YYYY"
                  placeholder=""
                />
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="noiCap"
                label="Nơi cấp:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.noiCap}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelAlign="left"
                name="ngheNghiep"
                label="Nghề nghiệp:"
                rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
                initialValue={data?.ngheNghiep}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                <Space>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Lưu
                  </Button>
                  <Button htmlType="button" onClick={handleCancel}>
                    Hủy
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Col>
          <Col lg={12}>
            <ThemThanhVien
              data={thanhVien}
              callback={themThanhVien}
              delete={xoaThanhVien}
            />
          </Col>
        </Row>
      </Wrapper>
    </Modal>
  );
}

export default ModalSuaKhach;

const Wrapper = styled.div``;
