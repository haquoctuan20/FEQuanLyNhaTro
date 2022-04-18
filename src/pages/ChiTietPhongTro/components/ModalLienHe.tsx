import { Button, Form, Input, Modal, Space } from "antd";
import React from "react";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface Props {
  visible: boolean;
  onClose: () => void;
}

function ModalLienHe(props: Props) {
  const { visible, onClose } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title="Liên hệ xem trọ"
      footer={false}
      visible={visible}
      onCancel={handleCancel}
    >
      <Form {...layout}>
        <Form.Item
          labelAlign="left"
          name="soPhong"
          label="Họ tên:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          name="soPhong"
          label="Số điện thoại:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          name="soPhong"
          label="Nội dung:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input.TextArea rows={4} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Gửi yêu cầu
            </Button>
            <Button htmlType="button" onClick={handleCancel}>
              Hủy
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalLienHe;
