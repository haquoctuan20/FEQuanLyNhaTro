import BangDieuKhien from 'pages/BangDieuKhien';
import TrangChu from 'pages/TrangChu';

export const ROUTES = [
  {
    path: '/admin/bang-dieu-khien',
    component: <BangDieuKhien />,
  },
];

export const ROUTES_PUBLIC = [
  {
    path: '/',
    component: <TrangChu />,
  },
];
