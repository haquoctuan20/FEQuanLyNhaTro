import { Button, Form, InputNumber, Modal, Select, Space } from "antd";
import { NotificationError, NotificationSuccess } from "components/Notification";
import React, { useEffect, useState } from "react";
import { PhongTroServices } from "service/PhongTroServices";
import { ToaNhaServices } from "service/ToaNhaServices";
import styled from "styled-components";

interface Props {
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
  data: any;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const { Option } = Select;

function ModalSuaPhong(props: Props) {
  const { visible, onClose, onRefresh, data } = props;
  const [form] = Form.useForm();

  const [toaNha, setToaNha] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    onClose();
    form.resetFields();
  };

  const onFinish = (values: any) => {
    setLoading(true);
    PhongTroServices.updateRoom(values, data._id)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Thất bại", res.data.message);
          return;
        }

        NotificationSuccess("Thành công", res.data.message);
        onClose();
        form.resetFields();
        onRefresh();
      })
      .catch((err) => {
        console.log(err);
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

  useEffect(() => {
    form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Modal
      title="Sửa thông tin phòng trọ"
      visible={visible}
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
            initialValue={data.soPhong}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="toaNha"
            label="Toà:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
            initialValue={data?.toaNha?._id}
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
            initialValue={data.dienTich}
          >
            <InputNumber style={{ width: "100%" }} addonAfter="m2" />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="gia"
            label="Giá phòng:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
            initialValue={data.gia}
          >
            <InputNumber
              style={{ width: "100%" }}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              addonAfter="VNĐ"
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="soLuongToiDa"
            label="Số lượng tối đa:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
            initialValue={data.soLuongToiDa}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="giaDien"
            label="Giá điện:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
            initialValue={data.giaDien}
          >
            <InputNumber
              style={{ width: "100%" }}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              addonAfter="VNĐ"
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="giaNuoc"
            label="Giá nước:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
            initialValue={data.giaNuoc}
          >
            <InputNumber
              style={{ width: "100%" }}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              addonAfter="VNĐ"
            />
          </Form.Item>

          <Form.Item
            labelAlign="left"
            name="phiDichVu"
            label="Phí dịch vụ:"
            rules={[{ required: true, message: "Trường này bắt buộc nhập" }]}
            initialValue={data.phiDichVu}
          >
            <InputNumber
              style={{ width: "100%" }}
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              addonAfter="VNĐ"
            />
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
      </Wrapper>
    </Modal>
  );
}

export default ModalSuaPhong;
const Wrapper = styled.div``;
