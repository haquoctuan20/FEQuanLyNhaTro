import { NotificationSuccess } from "components/Notification";

export const ChiTietPhongTroService = {
  addToXemSau(data: any) {
    const list = localStorage.getItem("danhsachxemsau");
    if (list) {
      const listObj = JSON.parse(list);
      listObj.push(data);
      localStorage.setItem("danhsachxemsau", JSON.stringify(listObj));
    } else {
      const listObj: any = [];
      listObj.push(data);
      localStorage.setItem("danhsachxemsau", JSON.stringify(listObj));
    }

    NotificationSuccess("Thêm phòng thành công", "Đã thêm phòng vào danh sách xem sau");
  },

  getListXemSau() {
    const param = localStorage.getItem("danhsachxemsau");
    if (param) {
      return JSON.parse(param);
    }
    return param;
  },

  removeXemSau(id: string) {
    const list = localStorage.getItem("danhsachxemsau");
    if (list) {
      const listObj = JSON.parse(list);
      const newList = listObj.filter((item) => item.id !== id);
      localStorage.setItem("danhsachxemsau", JSON.stringify(newList));
      NotificationSuccess("Xóa phòng thành công", "Đã xóa phòng khỏi danh sách xem sau");
    }
  },
};
