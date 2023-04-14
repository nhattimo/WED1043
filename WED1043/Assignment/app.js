goto(-1);
window.onscroll = function(){
  console.log(document.documentElement.scrollTop);
  var phuboxslide = document.getElementById("phuboxslide")
  var navtimo = document.getElementById('navtimo');
  navtimo.style.zIndex = 1;
  navtimo.style.height= '60px';
  if(document.documentElement.scrollTop > 205 || document.body.scrollTop > 205 ){
    navtimo.style.position ='fixed' ;
    navtimo.style.transitionDuration = '500ms';
    navtimo.style.backgroundColor = 'rgba(4, 4, 3, 0.694)';
    navtimo.style.animation = "navshow 0.3s linear";
    phuboxslide.style.display = 'flex';
  }else{
    navtimo.style.position ='relative' ;
    navtimo.style.backgroundColor = 'var(--colorBackgroundNav)';
    navtimo.style.top = 0;
    navtimo.style.transitionDuration = '300ms';
    navtimo.style.animation = "none";
    phuboxslide.style.display = 'none';
  
  }
  // Hiệu ứng trsnfom logo timo
  var inglogomiutimo = document.getElementById('inglogomiutimoGT');
  if(document.documentElement.scrollTop > 500 || document.body.scrollTop > 500 ){
  // inglogomiutimo.style.
  }else{
    inglogomiutimo.style.position ='absolute' ;
  }
};
var phuboxslide = document.getElementById('phuboxslide');
phuboxslide.addEventListener("mouseover",function(){
  phuboxslide.style.height = '260px';
  phuboxslide.style.color = 'rgb(225, 215, 215)';
  phuboxslide.style.transitionDuration = '300ms';
  phuboxslide.style.backgroundColor = 'rgba(4, 4, 3, 0.694)';
});
phuboxslide.addEventListener("mouseout",function(){
  phuboxslide.style.height = '180px';
  phuboxslide.style.animation = 'idphuboxslide 0.7s linear forwards';
  phuboxslide.style.color = 'var(--colorBackgroundNav)';
  phuboxslide.style.backgroundColor = 'transparent';
});

var h3phuboxslide = document.getElementById('h3phuboxslide');
var h1phuboxslide = document.getElementById('h1phuboxslide');
h1phuboxslide.addEventListener('mouseover',function(){
  h1phuboxslide.style.animation = 'hovertextphuboxslide 0.2s linear forwards';
  h1phuboxslide.style.transitionDuration = '500s'; 
  h1phuboxslide.style.backgroundColor = 'var(--colorBackgroundNav)';
  h1phuboxslide.style.color = 'rgb(236, 231, 231)';
  h3phuboxslide.style.display = 'flex'
});
h1phuboxslide.addEventListener('mouseout',function(){
  h1phuboxslide.style.animation='textphuboxslide 0.2s linear forwards';
  h1phuboxslide.style.backgroundColor = '#c14b24';
  h1phuboxslide.style.color = 'var(--colorBackgroundNav)';
  h3phuboxslide.style.display = 'none'

});


// ____________________________________________________________________
// CODE JS cho  "hello you! Have a nice day"
const text = document.querySelector('.text');
const charArr = text.textContent.split('');

let dataText = '';
const arrClass = [];
const arrNumberRandom = [];
charArr.forEach((element, index) => {
    if (hasWhiteSpace(element)) {
        dataText += `<span class="letter letter-${index}">&nbsp;</span>`;
    } else {
        dataText += `<span class='letter letter-${index}'>${element}</span>`;
    }
});

text.innerHTML = dataText;

for (let i = 0; i < charArr.length; i++) {
    arrNumberRandom.push(i);
    arrClass.push(`letter-${i}`);
}
let delay = 0;
setTimeout(function () {
    const letters = document.querySelectorAll('.letter');
    for (let i = 0; i < charArr.length; i++) {
        let indexRandom = randomNumber(arrNumberRandom.length);

        const posOfletter = arrNumberRandom[indexRandom];
        const letter = letters[posOfletter];

        letter.style.transitionDelay = `${(delay += 0.01)}s`;
        letter.style.animationDelay = `${(delay += 0.1)}s`;
        letter.classList.add('appear', 'go-down');

        arrNumberRandom.splice(indexRandom, 1);
    }
}, 500);

function randomNumber(length) {
    return Math.floor(Math.random() * length);
}
function hasWhiteSpace(str) {
    return str.indexOf(' ') >= 0;
}
var getDiv =document.getElementsByTagName("div")
console.log(getDiv);
function off(){
  getDiv[0].setAttribute("class",'huytrinhchieutext');
};




// ______________________________________________________________________
// CODE JS SHOW box item mua hàng
// web đã được nạp xong mới đc làm
function Afterloadingtheweb() {
  var imgSPBoxCuaHang = document.getElementsByClassName("imgSPBoxCuaHang");
  for (let i = 0; i < imgSPBoxCuaHang.length; i++) {
   imgSPBoxCuaHang[i].addEventListener("click",function(){
     showIMG(this);
   });
  }
 };



//CODE JS cho thẻ nav ( Thanh menu )



// hàm hiện box mua hàng
var myModolIMG = document.getElementById("myModolIMG");
function showIMG(IMG){
var imgIDModol = document.getElementById("IMGIDModol");
imgIDModol.src = IMG.src;
// myModolIMG.classList.toggle("showboxdangnhap");
myModolIMG.style.display = 'flex';
} ;
function exitshowIMG(){
myModolIMG.style.display = 'none';
} ;


// Làm việc với thẻ nav hover active
var hoverbtnnav = document.getElementsByClassName("btn");
var hoverbtnnav1 = document.getElementsByClassName("btn1");
for (let i = 0; i < hoverbtnnav.length; i++) {

  // khi di chuột vào btn thì làm
  hoverbtnnav[i].addEventListener('mousemove',function(){
    hoverbtnnav[i].classList.add("hoverbtnnav");
    hoverbtnnav[i].cursor='pointer';
  });
  
  // khi di chuột ra btn thì làm
  hoverbtnnav[i].addEventListener('mouseout',function(){
    hoverbtnnav[i].classList.remove("hoverbtnnav");
  }); 

  // khi click chuột lên btn thì làm
  hoverbtnnav[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activebtnnav");
    current[0].className = current[0].className.replace(" activebtnnav", "");
    this.className += " activebtnnav";
    this.color ='var(--colorBackgroundNav)';
  });
}




// ____________________________________________________________________
// CODE JS cho lúc trượt web
function goto(px){
  window.scrollTo(0,px);
  // var runtimeweb = setInterval(function(){
  //   document.documentElement.scrollTop -= 25;
  //   if(document.documentElement.scrollTop <= 0){
  //     clearInterval(runtimeweb);
  //   }
  // },1);
};



//__________________________________________________________________
//CODE JS HOVER btn
var btnhover = document.getElementsByClassName("btnhover");
console.log(btnhover);
for (let i = 0; i < btnhover.length; i++) {
  btnhover[i].addEventListener("mousemove",function(){
    btnhover[i].classList.add('hoverbtnopacity');
    btnhover[i].style.cursor = 'pointer';
   });
   btnhover[i].addEventListener("mouseout",function(){
    btnhover[i].classList.remove('hoverbtnopacity');
   });
}



// ____________________________________________________________________
// CODE JS cho box slide
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


// ____________________________________________________________________
// CODE JS cho box slide tự động chuyển tiếp img
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
    idAutu = 1;
  }    
  for (i = 0; i < chamTron.length; i++) {
    chamTron[i].className = chamTron[i].className.replace(" active", "");
  }
  imgs[idAutu-1].style.display = "block";  
  chamTron[idAutu-1].className += " active";
  setTimeout(autuImg, 4000); // Change image every 2 seconds
}

// ____________________________________________________________________
// CODE JS cho item đăng nhập và đăng ký
// Tài khoản, Mật khẩu mặc định
const tk = "nguyenvannhat";
const mk = "nhat12345";

// kiểm tra đăng nhập
// var getinput = document.getElementById("inputdangnhap")
// function ktnhaptk(){
//   var value = getinput.value
//   if(value.length <= 6){
//     console.log("chưa đủ số lượng");
//   }else{
//     console.log("ok fren")
//     getinput.className = 'sai'
//   }
// }
// function ktnhapmk(){
//   var value = getinput.value
//   if(value.length <= 6){
//     console.log("chưa đủ số lượng");
//   }else{
//     console.log("ok fren")
//     getinput.className = 'sai'
//   }
// }



//___________box đăng nhập
// Show box đăng nhâp
var user = document.getElementById('user');
var userdangnhap = document.getElementById("userdangnhap");
user.addEventListener('mouseup',function(){
  userdangnhap.classList.toggle("showboxdangnhap");
  userdangky.className="dangky";
})


// btn đăng nhập , đăng ký
var btnDangKy = document.getElementById('btndangky');
var btnDangNhap = document.getElementById('btndangnhap');
var userdangky = document.getElementById("userdangky");
btnDangKy.addEventListener("mouseup",function(){
  userdangky.className="showboxdangky";
  userdangnhap.classList.toggle("showboxdangnhap");
})

// Kiểm tra đăng nhập tk và mật khẩu
var getinputTK = document.getElementById("inputdangnhapTK");
var getinputMK = document.getElementById("inputdangnhapMK");
var geterror = document.getElementsByClassName("error");
btnDangNhap.addEventListener("mouseup",function(){
  var valuegetinputTK = getinputTK.value;
  var valuegetinputMK = getinputMK.value;
  // var valuegetinputMK = getinputMK.value
  if(valuegetinputTK == tk || valuegetinputMK == mk ){
    getinputTK.value = "";
    getinputMK.value = "";
    geterror[0].className='error';
    userdangnhap.classList.toggle("showboxdangnhap");
  }else if(valuegetinputTK == '' && valuegetinputMK == '' ){
    document.getElementById("errortextDN").innerText = 'Bạn không được để trống khi đăng nhập';
    geterror[0].className='error h5_0';
  }else if(valuegetinputTK == ''){
    document.getElementById("errortextDN").innerText = 'Bạn đang để trống ô tài khoản';
    geterror[0].className='error h5_0';
  }else if(valuegetinputMK == ''){
    document.getElementById("errortextDN").innerText = 'Bạn đang để trống ô mật khẩu';
    geterror[0].className='error h5_0';
  }else{
    document.getElementById("errortextDN").innerText = 'Bạn đã nhập sai. Mời nhập lại';
    geterror[0].className='error h5_0';
  }
})

// btn thoát box đăng nhập
var thoat = document.getElementById('thoat');
thoat.addEventListener('mouseup',function(){
  getinputTK.value = "";
  getinputMK.value = "";
  geterror[0].className='error';
  userdangnhap.classList.toggle("showboxdangnhap");
})


//___________box đăng ký

var btndn1 = document.getElementById("btndangnhap1");
var btndk1 = document.getElementById("btndangky1");
var getinputTK1 = document.getElementById("inputdangkyTK1") ;
var getinputMK1 = document.getElementById("inputdangkyMK1") ;
var geterror1 = document.getElementsByClassName("error1");
var getinputsdt = document.getElementById("inputdangkysdt");
var getinputemail = document.getElementById("inputdangkyemail");


// nhấn nút đăng ký sẽ làm những việc này: kiểm tra nhập đăng ký TK và MK
btndk1.addEventListener("mouseup",function(){
  var valuegetinputTK1 = getinputTK1.value;
  var valuegetinputMK1 = getinputMK1.value;

  var valuegetinputsdt = getinputsdt.value;
  var valuegetinputemail = getinputemail.value;

  let kt = 0;
  // Kiểm tra nhập tạo TK
  if (valuegetinputTK1 == ''){
    document.getElementById("error1textDKtk1").innerText='bạn không được để trống';
    geterror1[0].className='error1 h5_0';
    kt = 1;
  }else if (valuegetinputTK1 == [0-9]){
    document.getElementById("error1textDKtk1").innerText='Tên đăng nhập không được bằng số';
    geterror1[0].className='error1 h5_0';
    kt = 1;
  }else if (valuegetinputTK1.length <= 6){
    document.getElementById("error1textDKtk1").innerText='Bạn hãy nhập ít nhất 6 ký tự';
    geterror1[0].className='error1 h5_0';
    kt = 1;
  }else{
    kt=0;
    geterror1[0].className='error1 no_eror_h5_0' ;
  }
  // Kiểm tra nhập tạo MK
  if (valuegetinputMK1 == ''){
    document.getElementById("error1textDKmk1").innerText='bạn không được để trống';
    geterror1[1].className='error1 h5_0';
    kt = 1;
  }
  if (valuegetinputMK1.length<=8){
    document.getElementById("error1textDKmk1").innerText='Bạn hãy nhập ít nhất 8 ký tự';
    geterror1[1].className='error1 h5_0';
    kt = 1;
  }else{
    kt=0;
    geterror1[1].className='error1 no_eror_h5_0';
  }
  

  // Kiểm tra nhập tạo SDT
  var sdtchuyan = /^\d{10}$/;
  var sdtchuyankhchu = /^[a-zA-Z0-9]?/;
  var ktsdt = sdtchuyan.test(valuegetinputsdt);
  var ktsdtchu=sdtchuyankhchu.test(valuegetinputsdt)
  if(ktsdt){
    geterror1[2].className='error1 no_eror_h5_0';
  }else if(ktsdtchu){
    geterror1[2].className='error1 h5_0';
    document.getElementById("error1textDKsdt1").innerText='Số điện thoại không được là chữ';
  }
  else{
    geterror1[2].className='error1 h5_0';
    document.getElementById("error1textDKsdt1").innerText='Bạn hãy kiểm tra lại số điện thoại';
  }

  // Kiểm tra nhập tạo email
  var emailchuan = /^\w+@[a-zA-Z]{3,}\.com$/i;
  var ktemail = emailchuan.test(valuegetinputemail)
  if(ktemail){
    geterror1[3].className='error1 no_eror_h5_0';
  }else{
    geterror1[3].className='error1 h5_0';
  }

  if(kt==0){
    getinputTK1.value = '';
    getinputMK1.value = '';
    getinputsdt.value = '';
    getinputemail.value = '';
    geterror1[0].className='error1';
    geterror1[1].className='error1';
    geterror1[2].className='error1';
    geterror1[3].className='error1';
  }

},10);

// nhấn nút đăng nhập sẽ quay lại box đăng nhập và reset lại box đăng ký
btndn1.addEventListener("mouseup",function(){
  userdangky.className="dangky";
  userdangnhap.classList.toggle("showboxdangnhap");
    getinputTK1.value = '';
    getinputMK1.value = '';
    getinputsdt.value = '';
    getinputemail.value = '';
    geterror1[0].className='error1';
    geterror1[1].className='error1';
    geterror1[2].className='error1';
    geterror1[3].className='error1';
})


// ____________________________________________________________________
// CODE JS cho time sales
var h = 3; // Giờ
var m = 20; // Phút
var s = 20; // Giây
    
var timeout = null; // Timeout
start();
function start()
{
    /*CHUYỂN ĐỔI DỮ LIỆU*/
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
 
    /*HIỂN THỊ ĐỒNG HỒ*/
    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();
 
    /* GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
    timeout = setTimeout(function(){
      s--;
      start();
    }, 1000);
}


// ____________________________________________________________________
// CODE JS cho location"
var x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } 
  { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}









