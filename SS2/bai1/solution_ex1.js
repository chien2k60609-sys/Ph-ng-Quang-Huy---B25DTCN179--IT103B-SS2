const bookingId = "GRB-84920";
const customerName = "Trần Thị Mai";
const distanceInKm = 4;
const isHeavyRain = true;

const baseFare = 12000;
const extraFarePerKm = 4500;
let totalFare = 0;
let isValidBooking = true;

if (distanceInKm <= 0) {
  isValidBooking = false;
  console.log("Lỗi nghiệp vụ: Quãng đường di chuyển phải lớn hơn 0 km!");
} else if (distanceInKm <= 2) {
  totalFare = baseFare;
} else {
  const extraDistance = distanceInKm - 2;
  totalFare = baseFare + extraDistance * extraFarePerKm;
}

if (isValidBooking) {
  if (isHeavyRain) {
    totalFare = totalFare * 1.2;
  }

  console.log("--- HÓA ĐƠN CHUYẾN ĐI GRABRIDE ---");
  console.log("Mã chuyến đi:", bookingId);
  console.log("Khách hàng:", customerName);
  console.log("Quãng đường:", distanceInKm, "km");
  console.log("Tổng cước chuyến đi:", totalFare, "VNĐ");
} else {
  console.log("Hệ thống từ chối tính cước do dữ liệu không hợp lệ.");
}
