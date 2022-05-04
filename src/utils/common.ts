export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });
  return formatter.format(price);
};

export const generateId = () => {
  return (
    Math.random().toString(36).substr(2, 9) +
    "-" +
    Math.random().toString(36).substr(2, 9)
  );
};
