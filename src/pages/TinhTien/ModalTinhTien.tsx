import { Modal, Skeleton } from "antd";
import { NotificationError, NotificationSuccess } from "components/Notification";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { LoginService } from "service/LoginService";
import { TienPhongService } from "service/TienPhongService";
import { formatPrice, generateId } from "utils/common";

interface Props {
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
  data: any;
}

function ModalTinhTien(props: Props) {
  const [loading, setLoading] = useState(false);
  const [dataTinhTien, setDataTinhTien] = useState<any>({
    id: "",
    idKhachHang: "",
    ngayTinhTien: "",
    thang: "",
    tenKhachHang: "",
    phong: "",
    tenToaNha: "",
    gia: "",
    SoDienSau: "",
    SoDienTruoc: "",
    SoLuongDien: "",
    giaDien: "",
    dienThanhTien: "",
    soThanhTien: "",
    giaNuoc: "",
    nuocThanhTien: "",
    phiDichVu: "",
    dichVuThanhTien: "",
    tongThanhTien: "",
  });

  const handleOk = () => {
    TienPhongService.tinhTienPhong(dataTinhTien)
      .then((res: any) => {
        if (res.data.code !== 0) {
          NotificationError("Tính tiền không thành công", "");
          return;
        }

        NotificationSuccess("Tinh tiền thành công", "");
        props.onClose();
        props.onRefresh();
      })
      .catch((err) => {
        console.error(err);
        NotificationError("Tính tiền không thành công", "");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCancel = () => {
    props.onClose();
  };

  useEffect(() => {
    if (!props.visible || !props.data) {
      return;
    }
    const dataAccount = LoginService.getDataLocalStorage();

    const param: any = {
      id: generateId() + props.data.thang,
      idKhachHang: props.data._id,
      ngayTinhTien: moment(new Date()).valueOf(),
      nguoiTinhTien: dataAccount?.fullname,

      thang: props.data.thang,
      tenKhachHang: props.data.tenKhachHang,
      phong: props.data.phong.soPhong,
      tenToaNha: props.data.phong.toaNha.tenToaNha,
      gia: props.data.phong.gia,
      SoDienSau: props.data.phong.SoDienSau,
      SoDienTruoc: props.data.phong.SoDienTruoc,
      SoLuongDien: props.data.phong.SoDienSau - props.data.phong.SoDienTruoc,
      giaDien: props.data.phong.giaDien,
      dienThanhTien:
        (props.data.phong.SoDienSau - props.data.phong.SoDienTruoc) *
        props.data.phong.giaDien,

      soThanhTien: props.data.thanhVien.length + 1,
      giaNuoc: props.data.phong.giaNuoc,
      nuocThanhTien: (props.data.thanhVien.length + 1) * props.data.phong.giaNuoc,

      phiDichVu: props.data.phong.phiDichVu,
      dichVuThanhTien: (props.data.thanhVien.length + 1) * props.data.phong.phiDichVu,
      tongThanhTien:
        parseInt(props.data.phong.gia) +
        (props.data.phong.SoDienSau - props.data.phong.SoDienTruoc) *
          props.data.phong.giaDien +
        (props.data.thanhVien.length + 1) * props.data.phong.giaNuoc +
        (props.data.thanhVien.length + 1) * props.data.phong.phiDichVu,
    };

    setDataTinhTien(param);
  }, [props.data, props.visible]);

  if (!props.data) return null;

  return (
    <Modal
      title={"Tính tiền phòng - " + dataTinhTien.thang}
      visible={props.visible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
      okText="Tính tiền"
      cancelText="Hủy"
      width={1000}
    >
      {loading && <Skeleton />}
      <div>
        <b>Khách hàng:</b> {dataTinhTien.tenKhachHang}
      </div>
      <div>
        <b>Phòng:</b> {props.data.phong.soPhong} - {props.data.phong.toaNha.tenToaNha}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Số mới</th>
            <th>Số cũ</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiền phòng</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{formatPrice(dataTinhTien.gia)}</td>
            <td>{formatPrice(dataTinhTien.gia)}</td>
          </tr>
          <tr>
            <td>Điện</td>
            <td>{dataTinhTien.SoDienSau}</td>
            <td>{dataTinhTien.SoDienTruoc}</td>
            <td>{dataTinhTien.SoDienSau - dataTinhTien.SoDienTruoc}</td>
            <td>{formatPrice(dataTinhTien.giaDien)}</td>
            <td>{formatPrice(dataTinhTien.dienThanhTien)}</td>
          </tr>
          <tr>
            <td>Nước</td>
            <td></td>
            <td></td>
            <td>{dataTinhTien.soThanhTien} - người</td>
            <td>{formatPrice(dataTinhTien.giaNuoc)}</td>
            <td>{formatPrice(dataTinhTien.nuocThanhTien)}</td>
          </tr>
          <tr>
            <td>Phí dịch vụ</td>
            <td></td>
            <td></td>
            <td>{dataTinhTien.soThanhTien} - người</td>
            <td>{formatPrice(dataTinhTien.phiDichVu)}</td>
            <td>{formatPrice(dataTinhTien.dichVuThanhTien)}</td>
          </tr>
          <tr>
            <td colSpan={5}>Tổng khách hàng phải đóng</td>

            <td>{formatPrice(dataTinhTien.tongThanhTien)}</td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
}

export default ModalTinhTien;
