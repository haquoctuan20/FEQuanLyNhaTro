import BangDieuKhien from "pages/BangDieuKhien";
import ChiSoDien from "pages/ChiSoDien/ChiSoDien";
import ChiTietPhongTro from "pages/ChiTietPhongTro/ChiTietPhongTro";
import DanhSachPhongTro from "pages/DanhSachPhongTro/DanhSachPhongTro";
import DanhSachXemSau from "pages/DanhSachXemSau/DanhSachXemSau";
import GioiThieu from "pages/GioiThieu/GioiThieu";
import QuanLyBaiViet from "pages/QuanLyBaiViet/QuanLyBaiViet";
import QuanLyLienHe from "pages/QuanLyLienHe/QuanLyLienHe";
import TinhTien from "pages/TinhTien/TinhTien";
import TrangChu from "pages/TrangChu";

export const ROUTES = [
  {
    path: "/admin/phong-tro",
    component: <BangDieuKhien />,
  },
  {
    path: "/admin/chi-so-dien",
    component: <ChiSoDien />,
  },
  {
    path: "/admin/tinh-tien",
    component: <TinhTien />,
  },
  {
    path: "/admin/quan-ly-lien-he",
    component: <QuanLyLienHe />,
  },
  {
    path: "/admin/quan-ly-bai-viet",
    component: <QuanLyBaiViet />,
  },
];

export const ROUTES_PUBLIC = [
  {
    path: "/",
    component: <TrangChu />,
  },
  {
    path: "/phong-tro/:id",
    component: <ChiTietPhongTro />,
  },
  {
    path: "/danh-sach-phong-tro",
    component: <DanhSachPhongTro />,
  },
  {
    path: "/gioi-thieu",
    component: <GioiThieu />,
  },
  {
    path: "/xem-sau",
    component: <DanhSachXemSau />,
  },
];
