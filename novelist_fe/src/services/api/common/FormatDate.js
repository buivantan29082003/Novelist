export function formatDate(dateString) {
  if (!dateString) return "";

  // Tạo đối tượng Date từ chuỗi
  const date = new Date(dateString);

  // Lấy ngày, tháng, năm
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // tháng từ 0-11
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}