import { Button, Form, Input, Modal, Space } from "antd";
import { NotificationError, NotificationSuccess } from "components/Notification";
import React, { useState } from "react";
import { PhongTroServices } from "service/PhongTroServices";
import styled from "styled-components";

interface ModalTaoPhongTypes {
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
  idPhong: string;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

function ModalThemKhach(props: ModalTaoPhongTypes) {
  const [form] = Form.useForm();
  const { visible, onClose, onRefresh, idPhong } = props;

  const [loading, setLoading] = useState(false);

  const handleOk = () => {};

  const handleCancel = () => {
    onClose();
    form.resetFields();
  };

  const onFinish = (values: any) => {
    const params = { ...values, idPhong };

    setLoading(true);
    PhongTroServices.addCustomer(params)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi thêm khách hàng.", res.data.message);
          return;
        }

        NotificationSuccess("Thêm khách hàng thành công.", "");
        handleCancel();
        onRefresh();
      })
      .catch((err) => {
        NotificationError("Lỗi thêm khách hàng.", "");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal
      title="Thêm khách hàng"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
      okText="Thêm"
      cancelText="Hủy"
      footer={false}
    >
      <Wrapper>
        <Form {...layout} onFinish={onFinish} form={form}>
          <Form.Item
            labelAlign="left"
            name="tenKhachHang"
            label="Tên khách hàng:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Space>
              <Button type="primary" htmlType="submit" loading={loading}>
                Thêm
              </Button>
              <Button htmlType="button" onClick={handleCancel}>
                Hủy
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Wrapper>
    </Modal>
  );
}

export default ModalThemKhach;

const Wrapper = styled.div``;
