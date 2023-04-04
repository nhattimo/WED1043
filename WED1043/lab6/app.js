let id = 1;   // khởi tạo biến id = 1, mặc định vào trang web sẽ đứng ở ảnh 1
img(id);      // mặc định vào trang web thì sẽ nằm ảnh 1

function nutTraiPhai(value) { // click vào sẽ lấy value
  img(id += value);           // gán id = cộng value, mỗi lần nhấn sẽ chuyển đến ảnh tiếp theo
}  

function chamTron(value) {  // click vào sẽ lấy value
  img(id = value);          // nhấn vào chấm tròn bao nhiêu sẽ chạy tới ảnh tượng tự số của ảnh
}

function img(value) {
  let i;
  let imgs = document.getElementsByClassName("slide");          // truy xuất các thẻ có class là slide
  let chamTron = document.getElementsByClassName("cham_tron");  // truy xuất các thẻ có class là cham_tron
  if (value > imgs.length) {    // nếu số truyền vào lớn hơn lenght
    id = 1;                     // thì gán id lại bằng 1 (img sẽ hiển thị ảnh 1)
  }
  if (value < 1) {              // nếu số truyền vào nhỏ hơn 1 
    id = imgs.length;           // thì slide ảnh sẽ trở về ảnh cuối (ảnh 3)
  }
  for (i = 0; i < imgs.length; i++) { 
    imgs[i].style.display = "none";   // thêm style cho thẻ div có class tên là slide, với thuộc tính none
  }
  for (i = 0; i < chamTron.length; i++) {
    chamTron[i].className = chamTron[i].className.replace(" active", "");   // thêm class active vào thẻ span
  } 
  imgs[id - 1].style.display = "block";     // imgs [index] có thêm thuộc tính style display = "block"
  chamTron[id - 1].className += " active";  // chamTron[index] thay đổi tên class = " active"
}

let idAutu = 0;
showSlides();
function showSlides() {
  let i;
  let imgs = 	document.getElementsByClassName("slide");
  let chamTron = document.getElementsByClassName("cham_tron");
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";  
  }
  idAutu++;
  if (idAutu > imgs.length){
    idAutu = 1
  }    
  for (i = 0; i < chamTron.length; i++) {
    chamTron[i].className = chamTron[i].className.replace(" active", "");
  }
  imgs[idAutu-1].style.display = "block";  
  chamTron[idAutu-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}