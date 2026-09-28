const distanceKm = 4;
const isRaining = false;

const baseFare = 12000;
const pricePerAdditionalKm = 4500;
const weatherMultiplier = 1.2;

let totalFare = 0;
let isValidBooking = true;

if (distanceKm <= 0) {
  isValidBooking = false;
  console.log('Quãng đường di chuyển phải lớn hơn 0 km');
} else if (distanceKm <= 2) {
  totalFare = baseFare;
} else {
  const extraDistance = distanceKm - 2;
  totalFare = baseFare + extraDistance * pricePerAdditionalKm;
}

if (isValidBooking) {
  if (isRaining) {
    totalFare = totalFare * weatherMultiplier;
  }

  console.log('Khoảng cách di chuyển:', distanceKm, 'km');
  console.log('Tổng cước phí chuyến đi:', totalFare, 'VNĐ');
} else {
  console.log('Hệ thống từ chối tính cước do dữ liệu không hợp lệ');
}