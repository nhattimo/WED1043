let id = 1;       // khởi tạo biến id = 1, mặc định vào trang web sẽ đứng ở ảnh 1
showSlides(id);   // mặc định vào trang web thì sẽ nằm ảnh 1

function plusSlides(value) {    // click vào sẽ lấy value
  showSlides(id += value);      // gán id = cộng value, mỗi lần nhấn sẽ chuyển đến ảnh tiếp theo
}

function currentSlide(value) {  // click vào sẽ lấy value
  showSlides(id = value);       // nhấn vào chấm tròn bao nhiêu sẽ chạy tới ảnh tượng tự số của ảnh
}

function showSlides(value) {
  let i;
  let slides = document.getElementsByClassName("slide");      
  let chamTron = document.getElementsByClassName("cham_tron");
  if (value > slides.length) {  // nếu số truyền vào lớn hơn lenght có nghĩa là vượt quá dộ dài của slide
    id = 1;                     // thì gán id lại bằng 1
  }
  if (value < 1) {              // nếu số truyền vào nhỏ hơn 1 
    id = slides.lengthl;        // thì slide ảnh sẽ trở về slide ảnh cuối
  }
  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";   // thêm style cho thẻ div có class tên là slide, với thuộc tính none
  }
  for (i = 0; i < chamTron.length; i++) {
    chamTron[i].className = chamTron[i].className.replace(" active", ""); // thêm class vào thẻ span, với class tên là: active
  } 
  slides[slideIndex-1].style.display = "block";
  chamTron[slideIndex-1].className += " active";
}