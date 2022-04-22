import { Button, Form, Input, Modal, Space } from "antd";
import { NotificationError } from "components/Notification";
import React, { useState } from "react";
import { ChiTietPhongTroService } from "service/ChiTietPhongTroService";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface Props {
  visible: boolean;
  onClose: () => void;
  idPhong: any;
}

function ModalLienHe(props: Props) {
  const { visible, onClose, idPhong } = props;
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const handleCancel = () => {
    onClose();
    form.resetFields();
  };

  const onFinish = (values: any) => {
    const params = {
      ...values,
      phong: idPhong,
    };

    setLoading(true);

    ChiTietPhongTroService.guiLienHe(params)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Gửi liên hệ thất bại.", "");
          return;
        }

        Modal.success({
          content:
            "Chúng tôi đã nhận được yêu cầu liên hệ của bạn, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất. Chúc bạn có một ngày tốt lành!",
          okText: "Đóng",
          onOk: () => {
            handleCancel();
          },
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal
      title="Liên hệ xem trọ"
      footer={false}
      visible={visible}
      onCancel={handleCancel}
      afterClose={() => {
        form.resetFields();
      }}
    >
      <Form {...layout} onFinish={onFinish} form={form}>
        <Form.Item
          labelAlign="left"
          name="hoTen"
          label="Họ tên:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          name="soDienThoai"
          label="Số điện thoại:"
          rules={[
            { required: true, message: "Trường này bắt buộc nhập" },
            {
              pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
              message: "Số điện thoại không hợp lệ",
            },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          labelAlign="left"
          name="noiDung"
          label="Nội dung:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input.TextArea rows={4} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
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
