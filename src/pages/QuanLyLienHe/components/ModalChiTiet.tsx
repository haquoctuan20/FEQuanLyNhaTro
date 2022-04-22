import { Button, Col, Modal, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { formatPrice } from "utils/common";

interface Props {
  visible: boolean;
  onClose: () => void;
  data: any;
}

function ModalChiTiet(props: Props) {
  const { visible, onClose, data } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title="Chi tiết liên hệ xem trọ"
      footer={false}
      visible={visible}
      onCancel={handleCancel}
      width={600}
    >
      <Wrapper>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <div>
              <span className="chiTiet-label">Họ tên:</span>
              {data?.hoTen}
            </div>

            <div>
              <span className="chiTiet-label">Số điện thoại:</span>
              {data?.soDienThoai}
            </div>

            <div>
              <span className="chiTiet-label">Nội dung:</span>
              {data?.noiDung} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Qui voluptatibus sint debitis aut cupiditate nobis. Harum voluptatem
              incidunt architecto, et, quia distinctio quae sed corporis rerum alias natus
              nesciunt veritatis.
            </div>
          </Col>

          <Col span={12}>
            <div>
              <span className="chiTiet-label">Phòng: </span>
              {data?.phong?.soPhong} - {data?.phong?.toaNha?.tenToaNha}
            </div>
            <div>
              <span className="chiTiet-label">Giá phòng: </span>
              {formatPrice(data?.phong?.soPhong)}
            </div>
            <div>
              <span className="chiTiet-label">Trạng thái: </span>
              {data?.phong?.trangThai ? "Đang cho thuê" : "Trống"}
            </div>
            <div>
              <span className="chiTiet-label">Số lượng phù hợp: </span>
              {data?.phong?.soLuongToiDa}
            </div>
          </Col>
        </Row>
        <div className="chiTiet-containerBtn">
          <Button type="primary">Xác nhận</Button>
          <Button type="default" style={{ marginLeft: "8px" }} onClick={handleCancel}>
            Hủy
          </Button>
        </div>
      </Wrapper>
    </Modal>
  );
}

export default ModalChiTiet;

const Wrapper = styled.div`
  .chiTiet {
    &-label {
      font-weight: 500;
      margin-right: 10px;
      margin-bottom: 8px;
    }

    &-containerBtn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;
