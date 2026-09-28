const bookingId = "GB-2026-9812";
const distanceKm = 5.0;
const isPeakHour = true;

const BASE_FARE = 12000;
const EXTRA_FARE_PER_KM = 4500;
const PEAK_HOUR_MULTIPLIER = 1.2;

let baseFareTotal = 0;
let finalFare = 0;
let isValidBooking = true;

if (distanceKm <= 0) {
  isValidBooking = false;
  console.log("Khoảng cách không hợp lệ");
} else if (distanceKm <= 2) {
  baseFareTotal = BASE_FARE;
} else {
  const extraDistance = distanceKm - 2;
  baseFareTotal = BASE_FARE + extraDistance * EXTRA_FARE_PER_KM;
}

if (isValidBooking) {
  if (isPeakHour) {
    finalFare = Math.round(baseFareTotal * PEAK_HOUR_MULTIPLIER);
  } else {
    finalFare = baseFareTotal;
  }

  const peakHourStatus = isPeakHour ? "Có (Hệ số 1.2x)" : "Không";

  console.log(`Mã cuốc xe: ${bookingId}`);
  console.log(`Quãng đường: ${distanceKm} km`);
  console.log(`Giờ cao điểm: ${peakHourStatus}`);
  console.log(`Tổng cước thanh toán: ${finalFare} VNĐ`);
}