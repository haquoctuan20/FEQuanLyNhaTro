import { Button, Form, Input } from "antd";
import React from "react";
import { generateId } from "utils/common";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

interface Props {
  data: [];
  callback: (data: any) => void;
  delete: (id: string) => void;
}

function ThemThanhVien(props: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    props.callback({ id: generateId(), ...values });
    form.resetFields();
  };

  return (
    <div>
      <Form
        name="thanhVien"
        form={form}
        {...layout}
        onFinish={onFinish}
        className="p-1 background__white"
      >
        <Form.Item
          labelAlign="left"
          name="tenThanhVien"
          label="Tên thành viên:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name="soDienThoaiThanhVien"
          label="Số điện thoại:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name="diaChiThanhVien"
          label="Địa chỉ:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          name="ngheNghiepThanhVien"
          label="Nghề nghiệp:"
          rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>

      {props.data.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="my-2 p-1 background__white"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div>Tên: {item.tenThanhVien}</div>
              <div>Số điện thoại: {item.soDienThoaiThanhVien}</div>
              <div>Địa chỉ: {item.diaChiThanhVien}</div>
              <div>Nghề nghiệp: {item.ngheNghiepThanhVien}</div>
            </div>
            <Button
              type="default"
              danger
              onClick={() => {
                props.delete(item.id);
              }}
            >
              Xóa
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default ThemThanhVien;
