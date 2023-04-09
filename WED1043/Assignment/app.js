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
  let imgs = document.getElementsByClassName("itemslide");          // truy xuất các thẻ có class là slide
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
autuImg();
function autuImg() {
  let i;
  let imgs = 	document.getElementsByClassName("itemslide");
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
  setTimeout(autuImg, 4000); // Change image every 2 seconds
}


// Tài khoản, Mật khẩu mặc định
const tk = "nguyenvannhat"
const mk = "nhat12345"

// kiểm tra đăng nhập
var getinput = document.getElementById("inputdangnhap")
function ktnhaptk(){
  var value = getinput.value
  if(value.length <= 6){
    console.log("chưa đủ số lượng");
  }else{
    console.log("ok fren")
    getinput.className = 'sai'
  }
}
function ktnhapmk(){
  var value = getinput.value
  if(value.length <= 6){
    console.log("chưa đủ số lượng");
  }else{
    console.log("ok fren")
    getinput.className = 'sai'
  }
}


//___________box đăng nhập
// Show box đăng nhâp
var user = document.getElementById('user');
var userdangnhap = document.getElementById("userdangnhap");
user.addEventListener('mouseup',function(){
  userdangnhap.classList.toggle("showboxdangnhap");
  userdangky.className="dangky";
})

// nhấn thoát sẽ tắt box đăng nhập
var thoat = document.getElementById('thoat');
thoat.addEventListener('mouseup',function(){
  userdangnhap.classList.toggle("showboxdangnhap");
})

// btn đăng nhập , đăng ký
var btnDangKy = document.getElementById('btndangky');
var btnDangNhap = document.getElementById('btndangnhap');
var userdangky = document.getElementById("userdangky");
btnDangKy.addEventListener("mouseup",function(){
  userdangky.className="showboxdangky";
  userdangnhap.classList.toggle("showboxdangnhap");
})

// ok đăng nhập
var getinputTK = document.getElementById("inputdangnhapTK");
var getinputMK = document.getElementById("inputdangnhapMK");
var geterror = document.getElementsByClassName("error")
btnDangNhap.addEventListener("mouseup",function(){
  var valuegetinputTK = getinputTK.value;
  var valuegetinputMK = getinputMK.value
  // var valuegetinputMK = getinputMK.value
  if(valuegetinputTK == tk || valuegetinputMK == mk ){
    userdangnhap.classList.toggle("showboxdangnhap");
    getinputTK.value = ""
    getinputMK.value = ""
    geterror[0].className='error'
  }else{
    geterror[0].className='error h5_0'
  }
})

//___________box đăng ký

var btndn1 = document.getElementById("btndangnhap1")
var btndk1 = document.getElementById("btndangky1")
var getinputTK1 = document.getElementById("inputdangkyTK1") 
var getinputMK1 = document.getElementById("inputdangkyMK1") 
var geterror1 = document.getElementsByClassName("error1")

// nhấn nút đăng ký sẽ làm những việc này: kiểm tra nhập đăng ký mật khẩu
btndk1.addEventListener("mouseup",function(){
  var valuegetinputTK1 = getinputTK1.value
  var valuegetinputMK1 = getinputMK1.value
  let kt=0;
  if (valuegetinputTK1.length<=6){
    geterror1[0].className='error1 h5_0'
    kt=1
  }else{
    kt=0;
    geterror1[0].className='error1'
  }
  if (valuegetinputMK1.length<=8){
    geterror1[1].className='error1 h5_0'
    kt=1
  }else{
    geterror1[1].className='error1'
    kt=0;
  }
  if(kt == 0){
    getinputTK1.value = ""
    getinputMK1.value = ""
  }
});

// nhấn nút đăng nhập sẽ quay lại box đăng nhập và reset lại box đăng ký
btndn1.addEventListener("mouseup",function(){
  userdangky.className="dangky"
  userdangnhap.classList.toggle("showboxdangnhap");
  geterror1[1].className='error1'
  geterror1[0].className='error1'
  getinputTK1.value = ""
  getinputMK1.value = ""
})



// time sales
var h = 3; // Giờ
var m = 20; // Phút
var s = 20; // Giây
    
var timeout = null; // Timeout
start();
function start()
{
    /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
    // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
    //  - giảm số phút xuống 1 đơn vị
    //  - thiết lập số giây lại 59
    if (s === -1){
        m -= 1;
        s = 59;
    }
 
    // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
    //  - giảm số giờ xuống 1 đơn vị
    //  - thiết lập số phút lại 59
    if (m === -1){
        h -= 1;
        m = 59;
    }
 
    // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
    //  - Dừng chương trình
    if (h == -1){
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }
 
    /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/
    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();
 
    /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
    timeout = setTimeout(function(){
      s--;
      start();
    }, 1000);
}

function stop(){
    clearTimeout(timeout);
}





