console.log("******************Truy xuất bằng DOM HTML")
// truy xuất bằng ID
var getID = document.getElementById("nameID");
console.log(getID);
// truy xuất bằng class
var getClass = document.getElementsByClassName("name");
console.log(getClass);
// truy xuất bằng thẻ
var div = document.getElementsByTagName("div");
console.log(div);

// nếu muốn sử dụng đc các method và function riêng cho Array thì phải ép kiểu
var getClassArray = Array.from(getClass) 
console.log(getClassArray) // đã trở thành array


console.log("*******************Truy xuất bằng DOM CSS")
// truy xuất bằng selector của css
var getCSS = document.querySelector(".name"); // lấy ra 1 phần tử đầu tiên tìm thấy
console.log(getCSS);
var getCSSFull =document.querySelectorAll(".name"); // lấy ra nhiều phần tử
console.log(getCSSFull);

// Thao tác với thuộc tính của thẻ
var img = "https://i1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g"
var getTTImg = document.querySelector(".img"); // truy xuất vào class
console.log(getTTImg);
// thiết lập dữ liệu mới: truyền vào 2 giá trị ("<Thuộc tính muốn thay đổi>","<Giá trị muốn set vào>"
// cách 1
getTTImg.setAttribute("src",img) 
getTTImg.setAttribute("alt", "Đây là tấm ảnh")
getTTImg.setAttribute("width",300) // truyền thêm thuộc tính width = 300px
// cách 2
console.log("Cách 2",getTTImg.src)
// Get giá trị
var getDataTitle = Array.from(document.querySelectorAll("[data-title]")); // nên chuyển vầ array
console.log(getDataTitle);
// sử dụng lệnh: debugger khi cần kiểm tra code chạy
for (let i = 0; i < getDataTitle.length; i++) {
    console.log(getDataTitle[i]); // lấy ra từng phẩn tử  
    console.log(getDataTitle[i].getAttribute("data-title")); // lấy ra từng thuộc tính của phần tử
}
