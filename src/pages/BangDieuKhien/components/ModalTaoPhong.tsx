import { Button, Form, InputNumber, Modal, Select, Space } from "antd";
import { NotificationError, NotificationSuccess } from "components/Notification";
import React, { useEffect, useState } from "react";
import { PhongTroServices } from "service/PhongTroServices";
import { ToaNhaServices } from "service/ToaNhaServices";
import styled from "styled-components";

interface ModalTaoPhongTypes {
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const { Option } = Select;

function ModalTaoPhong(props: ModalTaoPhongTypes) {
  const [form] = Form.useForm();
  const { visible, onClose, onRefresh } = props;

  const [toaNha, setToaNha] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {};

  const handleCancel = () => {
    onClose();
    form.resetFields();
  };

  const onFinish = (values: any) => {
    const params = { ...values };

    setLoading(true);
    PhongTroServices.postRoom(params)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Lỗi thêm mới", res.data.message);
          return;
        }

        NotificationSuccess("Tạo phòng trọ thành công", "");
        handleCancel();
        onRefresh();
      })
      .catch((err) => {
        NotificationError("Lỗi thêm mới", "");
      })
      .finally(() => {
        setLoading(false);
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
    if (!visible) {
      return;
    }

    getAllToaNha();
  }, [visible]);

  return (
    <Modal
      title="Thêm phòng trọ mới"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
      okText="Thêm"
      cancelText="Hủy"
      footer={false}
    >
      <Wrapper>
        <Form {...layout} form={form} onFinish={onFinish}>
          <Form.Item
            labelAlign="left"
            name="soPhong"
            label="Số phòng:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="toaNha"
            label="Toà:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
          >
            <Select>
              {toaNha.map((toa: any, index) => (
                <Option key={index} value={toa._id}>
                  {toa.tenToaNha}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="dienTich"
            label="Diện tích:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="gia"
            label="Giá phòng:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="soLuongToiDa"
            label="Số lượng tối đa:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
          >
            <InputNumber style={{ width: "100%" }} />
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

export default ModalTaoPhong;

const Wrapper = styled.div`
  .themPhong {
    &-label {
      font-weight: 500;
    }
  }
`;
