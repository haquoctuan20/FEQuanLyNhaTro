import { Modal } from "antd";
import { font } from "assets/fonts/Roboto-Regular-normal.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import { formatPrice } from "utils/common";

interface Props {
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
  data: any;
}

function ModalInHoaDon(props: Props) {
  const { data } = props;

  const handleOk = () => {
    const doc: any = new jsPDF("portrait", "mm", "a4");

    doc.addFileToVFS("./Roboto-Regular.ttf", font);
    doc.addFont("./Roboto-Regular.ttf", "Roboto", "normal");
    doc.setFont("Roboto", "normal");

    var finalY = doc.lastAutoTable?.finalY || 10;
    doc.setFontSize(12);

    doc.text(`Hóa đơn phòng:  ${data.phong} - ${data.tenToaNha}`, 12, finalY);
    doc.text(`Tên khách hàng: ${data.tenKhachHang}`, 12, finalY + 6);
    doc.text(`Tháng: ${data.thang}`, 12, finalY + 12);

    doc.autoTable({
      startX: 12,
      startY: finalY + 18,
      styles: { fontSize: 12, font: "Roboto" },
      head: [["Tên", "Số mới", "Số cũ", "Số lượng", "Đơn giá", "Thành tiền"]],
      body: [
        ["Tiền phòng", "", "", "", formatPrice(data.gia), formatPrice(data.gia)],
        [
          "Điện",
          data.SoDienSau,
          data.SoDienTruoc,
          data.SoDienSau - data.SoDienTruoc,
          formatPrice(data.giaDien),
          formatPrice(data.dienThanhTien),
        ],
        [
          "Nước",
          "",
          "",
          `${data.soThanhTien} - người`,
          formatPrice(data.giaNuoc),
          formatPrice(data.nuocThanhTien),
        ],
        [
          "Phí dịch vụ",
          "",
          "",
          `${data.soThanhTien} - người`,
          formatPrice(data.phiDichVu),
          formatPrice(data.dichVuThanhTien),
        ],

        [
          { content: "Tổng khách hàng phải đóng", colSpan: 5 },
          formatPrice(data.tongThanhTien),
        ],
      ],
    });

    finalY = doc.lastAutoTable.finalY;

    doc.text(`Người nộp tiền ký`, 50, finalY + 10);
    doc.text(`Người thu tiền ký`, 150, finalY + 10);

    doc.text(
      `*Nếu chuyển khoản vui lòng ghi đầy đủ nội dung chuyển tiền: số phòng + tên tòa nhà`,
      12,
      finalY + 50
    );
    doc.text(
      `*Số tài khoản: 6443927 ngân hàng ACB Hà Nội: Chủ tài khoản Lê Tiến Hải`,
      12,
      finalY + 56
    );
    doc.text(`*Mọi thắc mắc vui lòng liên hệ: 0978.692.365(Hải)`, 12, finalY + 62);
    doc.text(
      `*Hạn đóng cuối cùng của quý khách là: ${moment()
        .endOf("month")
        .format("DD/MM/YYYY")}`,
      12,
      finalY + 68
    );

    doc.setFontSize(10);
    doc.text(
      `Ngày tính hóa đơn: ${moment(data.ngayTinhTien).format("DD/MM/YYYY HH:mm:ss")}`,
      12,
      finalY + 80
    );
    doc.text(
      `Ngày in: ${moment(new Date()).format("DD/MM/YYYY HH:mm:ss")}`,
      12,
      finalY + 86
    );

    doc.output("pdfobjectnewwindow");
  };

  const handleCancel = () => {
    props.onClose();
  };

  if (!props.data) return null;

  return (
    <Modal
      title={"In Hóa đơn - " + data.thang}
      visible={props.visible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
      okText="In hóa đơn"
      cancelText="Đóng"
      width={1000}
    >
      <div>
        <b>Khách hàng:</b> {data.tenKhachHang}
      </div>
      <div>
        <b>Phòng:</b> {data.phong} - {data.tenToaNha}
      </div>
      <div>
        <b>Tháng:</b> {data.thang}
      </div>
      <br />

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
            <td>{formatPrice(data.gia)}</td>
            <td>{formatPrice(data.gia)}</td>
          </tr>
          <tr>
            <td>Điện</td>
            <td>{data.SoDienSau}</td>
            <td>{data.SoDienTruoc}</td>
            <td>{data.SoDienSau - data.SoDienTruoc}</td>
            <td>{formatPrice(data.giaDien)}</td>
            <td>{formatPrice(data.dienThanhTien)}</td>
          </tr>
          <tr>
            <td>Nước</td>
            <td></td>
            <td></td>
            <td>{data.soThanhTien} - người</td>
            <td>{formatPrice(data.giaNuoc)}</td>
            <td>{formatPrice(data.nuocThanhTien)}</td>
          </tr>
          <tr>
            <td>Phí dịch vụ</td>
            <td></td>
            <td></td>
            <td>{data.soThanhTien} - người</td>
            <td>{formatPrice(data.phiDichVu)}</td>
            <td>{formatPrice(data.dichVuThanhTien)}</td>
          </tr>
          <tr>
            <td colSpan={5}>Tổng khách hàng phải đóng</td>

            <td>{formatPrice(data.tongThanhTien)}</td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
}

export default ModalInHoaDon;
