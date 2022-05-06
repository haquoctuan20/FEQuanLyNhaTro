import { DeleteOutlined, SelectOutlined } from "@ant-design/icons";
import { Button, Col, Image, Modal, Row, Space } from "antd";
import axios from "axios";
import { NotificationError, NotificationSuccess } from "components/Notification";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { BaiVietService } from "service/baiVietService";
import styled from "styled-components";
import { formatPrice } from "utils/common";

interface Props {
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
  data: any;
}

function ModalSuaBaiViet(props: Props) {
  const { visible, onClose, onRefresh, data } = props;

  const [loading, setLoading] = useState(false);
  const [loadingTaiAnh, setLoadingTaiAnh] = useState(false);

  const [content, setContent] = useState("");
  const [urlAnh, setUrlAnh] = useState<any>([]);

  const hiddenFileInput = useRef<any>();

  const handleCancel = () => {
    onClose();
    setContent("");
    setUrlAnh([]);
  };

  const handleClick = (event) => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChangeFile = (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "tuanhq_preset");
    setLoadingTaiAnh(true);
    axios
      .post("https://api.cloudinary.com/v1_1/tuanhq/image/upload", formData)
      .then((res) => {
        setUrlAnh([...urlAnh, res.data.secure_url]);
      })
      .finally(() => {
        setLoadingTaiAnh(false);
      });
  };

  const onChange = (value: any) => {
    setContent(value);
  };

  const onOK = () => {
    const params = { noiDung: content, urlAnh };
    setLoading(true);
    BaiVietService.updateBaiViet(params, data._id)
      .then((res) => {
        if (res.data.code !== 0) {
          NotificationError("Cập nhật bài viết thất bại", "");
          return;
        }

        NotificationSuccess("Cập nhật bài viết thành công", "");
        handleCancel();
        onRefresh();
      })
      .catch((err) => {
        console.error(err);
        NotificationError("Cập nhật bài viết thất bại", "");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteAnh = (url: string) => {
    const newUrlAnh = urlAnh.filter((item) => item !== url);
    setUrlAnh(newUrlAnh);
  };

  useEffect(() => {
    if (data.urlAnh) {
      setUrlAnh(data.urlAnh);
    }

    if (data.noiDung) {
      setContent(data.noiDung);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Modal
      title="Sửa bài viết"
      visible={visible}
      onCancel={handleCancel}
      maskClosable={false}
      okText="Lưu"
      cancelText="Hủy"
      width={900}
      footer={false}
    >
      <Wrapper>
        <Row gutter={[8, 8]}>
          <Col md={10}>
            <div className="baiViet-title">THÔNG TIN PHÒNG TRỌ </div>

            <div className="baiViet">
              <div className="baiViet-label">Phòng: </div>
              <div className="baiViet-content">
                {data?.phong?.soPhong} - {data?.phong?.toaNha?.tenToaNha}
              </div>
            </div>

            <div className="baiViet">
              <div className="baiViet-label">Giá: </div>
              <div className="baiViet-content">{formatPrice(data?.phong?.gia)}</div>
            </div>

            <div className="baiViet">
              <div className="baiViet-label">Diện tích: </div>
              <div className="baiViet-content">{data?.phong?.dienTich} m2</div>
            </div>

            <div className="baiViet">
              <div className="baiViet-label">Giá điện: </div>
              <div className="baiViet-content">
                {formatPrice(data?.phong?.giaDien)} / số
              </div>
            </div>

            <div className="baiViet">
              <div className="baiViet-label">Giá nước: </div>
              <div className="baiViet-content">
                {formatPrice(data?.phong?.giaNuoc)} / người
              </div>
            </div>

            <div className="baiViet">
              <div className="baiViet-label">Phí dịch vụ: </div>
              <div className="baiViet-content">
                {formatPrice(data?.phong?.phiDichVu)} / người
              </div>
            </div>

            <div className="">
              <div className="baiViet-label">Địa chỉ: </div>
              <div className="">{data?.phong?.toaNha?.diaChi}</div>
            </div>
          </Col>

          <Col md={14}>
            <div className="baiViet-title">NỘI DUNG MÔ TẢ </div>
            <ReactQuill value={content} onChange={onChange} />

            <div className="baiViet-title">Hình ảnh:</div>
            <Button loading={loadingTaiAnh} onClick={handleClick}>
              Tải lên hình ảnh
            </Button>
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChangeFile}
              style={{ display: "none" }}
            />

            <div className="baiViet-listAnh">
              {urlAnh.map((item: any, index: number) => (
                <div className="baiViet-anh" key={index}>
                  <Image
                    preview={{
                      mask: (
                        <>
                          <SelectOutlined /> Xem
                        </>
                      ),
                    }}
                    width={80}
                    height={80}
                    src={item}
                  />
                  <Button
                    onClick={() => handleDeleteAnh(item)}
                    type="link"
                    danger
                    icon={<DeleteOutlined />}
                  ></Button>
                </div>
              ))}
            </div>

            <Space>
              <Button type="primary" onClick={onOK} loading={loading}>
                Lưu
              </Button>
              <Button htmlType="button" onClick={handleCancel}>
                Hủy
              </Button>
            </Space>
          </Col>
        </Row>
      </Wrapper>
    </Modal>
  );
}

export default ModalSuaBaiViet;
const Wrapper = styled.div`
  .baiViet {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &-title {
      font-weight: 500;
      margin-right: 4px;
      margin: 4px 0px;
    }

    &-label {
      font-weight: 500;
      margin-right: 4px;
    }

    &-listAnh {
      margin: 10px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    &-anh {
      margin: 0px 4px;
    }
  }
`;
