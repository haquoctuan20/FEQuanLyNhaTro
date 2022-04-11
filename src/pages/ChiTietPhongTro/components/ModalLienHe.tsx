import { Modal } from "antd";
import React from "react";

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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default ModalLienHe;
