import { NotificationError, NotificationSuccess } from "components/Notification";
import apiClient from "./apiClient";

export const ChiTietPhongTroService = {
  addToXemSau(data: any) {
    const list = localStorage.getItem("danhsachxemsau");
    if (list) {
      //check id containt in list

      const listObj = JSON.parse(list);
      if (listObj.find((x) => x.id === data.id)) {
        NotificationError("Không thành công", "Phòng này đã có trong danh sách xem sau");
        return;
      }
      listObj.push(data);
      localStorage.setItem("danhsachxemsau", JSON.stringify(listObj));
    } else {
      const listObj: any = [];
      listObj.push(data);
      localStorage.setItem("danhsachxemsau", JSON.stringify(listObj));
    }

    NotificationSuccess("Thành công", "Đã thêm phòng vào danh sách xem sau");
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

  guiLienHe(data: any) {
    return apiClient.request({
      method: "POST",
      url: "api/v1/lienHe",
      data,
    });
  },
};
