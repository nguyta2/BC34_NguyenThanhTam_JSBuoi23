// Bai tap 1: Tinh tien luong nhan vien
/**
 * Input: luong 1 ngay: 100.000
 *        so ngay lam: user input
 *
 * Process: luong = luong 1 ngay * so ngay lam
 *
 * Output: luong nhan vien
 */

document.getElementById("btnTinhLuong").onclick = function () {
  const wage = 100000;
  var workingDays = document.getElementById("soNgayLam").value;
  var total = wage * workingDays;

  // format vnd
  var output = "";
  var format = new Intl.NumberFormat("vn-VN");
  var vnd = format.format(total);
  output += "<p>Tiền lương nhân viên tháng ngày:</p>";
  output += "<p>Lương nhân viên: " + vnd + "</p>";
  document.getElementById("thongBaoTinhLuong").innerHTML = output;
};

// Case study: thảo luận nhóm
/**
 * Input: user input
 *
 * Process:
 *
 * Output:
 */

document.getElementById("btnSubmit").onclick = function () {
  // input
  var movieName = document.getElementById("movieName").value;
  var elderPrice = document.getElementById("elderPrice").value;
  var numElderSell = document.getElementById("numElderSell").value;
  var childrenPrice = document.getElementById("childrenPrice").value;
  var numChildrenSell = document.getElementById("numChildrenSell").value;
  var charityPercent = document.getElementById("charityPercent").value;

  // process
  var totalTicketSell = +numElderSell + +numChildrenSell;
  var revenue = +numElderSell * +elderPrice + +numChildrenSell * +childrenPrice;
  var charityMoney = revenue * +charityPercent;
  var remainingMoney = revenue - charityMoney;

  // format VND
  var format = new Intl.NumberFormat("vn-VN");
  var remainingMoney_vnd = format.format(remainingMoney);
  // output
  var output = "";
  output += "<p>Tên phim: ..................." + movieName + "</p>";
  output += "<p>Số vé đã bán: ..................." + totalTicketSell + "</p>";
  output +=
    "<p>Doanh thu: ..................." + format.format(revenue) + "</p>";
  output += "<p>Trích % từ thiện: ..........." + charityPercent + "</p>";
  output +=
    "<p>Tổng tiền trích từ thiện: ..........." +
    format.format(charityMoney) +
    " vnd" +
    "</p>";
  output +=
    "<p>Tổng thu được sau khi trừ: ......" +
    remainingMoney_vnd +
    " vnd" +
    "</p>";

  document.getElementById("thongBao").innerHTML = output;
  document.getElementById("thongBao").classList.add("bg-success");
  document.getElementById("thongBao").classList.add("text-white");
  document.getElementById("thongBao").classList.add("rounded");
  document.getElementById("thongBao").classList.add("ps-4");
  document.getElementById("thongBao").classList.add("text-start");
};

// Bài tập 2: Tính giá trị trung bình
document.getElementById("btnAverage").onclick = function () {
  // input:
  var float1 = document.getElementById("float1").value * 1;
  var float2 = document.getElementById("float2").value * 1;
  var float3 = document.getElementById("float3").value * 1;
  var float4 = document.getElementById("float4").value * 1;
  var float5 = document.getElementById("float5").value * 1;

  // process
  var average = (float1 + float2 + float3 + float4 + float5) / 5;

  // output
  var output = "";
  output += "<p>Giá trị trung bình: " + average + "</p>";
  document.getElementById("averageDisplay").innerHTML = output;
  document.getElementById("averageDisplay").classList.add("bg-success");
  document.getElementById("averageDisplay").classList.add("text-white");
  document.getElementById("averageDisplay").classList.add("rounded");
  document.getElementById("averageDisplay").classList.add("ps-4");
};

document.getElementById("btnExchange").onclick = function () {
  // input
  var numUSD = document.getElementById("numUSD").value;

  // process
  var VND = numUSD * 23500;
  var VNDFormat = new Intl.NumberFormat("vn-VN");
  VND = VNDFormat.format(VND);
  // output
  var output = "";
  output += "<p>VND: " + VND + "d" + "</p>";
  document.getElementById("exchangeDisplay").innerHTML = output;
  document.getElementById("exchangeDisplay").classList.add("bg-success");
  document.getElementById("exchangeDisplay").classList.add("text-white");
  document.getElementById("exchangeDisplay").classList.add("rounded");
  document.getElementById("exchangeDisplay").classList.add("ps-4");
};

// Bài 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById("btnCalculator").onclick = function () {
  // input
  var length = document.getElementById("length").value * 1;
  var width = document.getElementById("width").value * 1;

  // process
  var perimeter = (length + width) * 2;
  var area = length * width;

  // output
  var output = "";
  output += "<p>Perimeter: " + perimeter + "</p>";
  output += "<p>Area: " + area + "</p>";

  document.getElementById("calculatorDisplay").innerHTML = output;
  document.getElementById("calculatorDisplay").classList.add("bg-success");
  document.getElementById("calculatorDisplay").classList.add("text-white");
  document.getElementById("calculatorDisplay").classList.add("rounded");
  document.getElementById("calculatorDisplay").classList.add("ps-4");
};

// Bài 5: Tính tổng 2 ký số
document.getElementById("btnCalculatorNumber").onclick = function () {
  // input:
  var num = document.getElementById("num").value * 1;

  // process
  var num1 = Math.floor(num / 10);
  var num2 = num % 10;
  var total = num1 + num2;

  // output
  var output = "";
  output += "<p>Tổng 2 ký số: " + total + "</p>";
  document.getElementById("calculatorNumberDisplay").innerHTML = output;
  document
    .getElementById("calculatorNumberDisplay")
    .classList.add("bg-success");
  document
    .getElementById("calculatorNumberDisplay")
    .classList.add("text-white");
  document.getElementById("calculatorNumberDisplay").classList.add("rounded");
  document.getElementById("calculatorNumberDisplay").classList.add("ps-4");
};
