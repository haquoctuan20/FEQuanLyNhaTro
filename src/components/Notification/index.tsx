import { notification } from "antd";

export const NotificationSuccess = (title: string, message: string) => {
  notification.open({
    message: title,
    description: message,
    placement: "bottomRight",
    style: {
      borderLeft: "5px solid green",
    },
  });
};

export const NotificationError = (title: string, message: string) => {
  notification.open({
    message: title,
    description: message,
    placement: "bottomRight",
    style: {
      borderLeft: "5px solid red",
    },
  });
};
