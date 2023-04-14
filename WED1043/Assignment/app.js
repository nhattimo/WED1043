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
    btnhover[i].classList.add('btn_hover_opacity');
    btnhover[i].style.cursor = 'pointer';
   });
   btnhover[i].addEventListener("mouseout",function(){
    btnhover[i].classList.remove('btn_hover_opacity');
    btnhover[i].classList.remove('btn_active_opacity');
   });
   btnhover[i].addEventListener("mousedown",function(){
    btnhover[i].classList.add('btn_active_opacity');
   });
  btnhover[i].addEventListener("mouseup",function(){
    btnhover[i].classList.remove('btn_active_opacity');
  });
}

var btnhover_opacity_text_sang = document.getElementsByClassName("btnhover_opacity_text_sang");
console.log(btnhover_opacity_text_sang);
for (let i = 0; i < btnhover_opacity_text_sang.length; i++) {
  btnhover_opacity_text_sang[i].addEventListener("mousemove",function(){
    btnhover_opacity_text_sang[i].classList.add('btnhover_opacity_text_sang_css');
    btnhover_opacity_text_sang[i].style.cursor = 'pointer';
   });
   btnhover_opacity_text_sang[i].addEventListener("mouseout",function(){
    btnhover_opacity_text_sang[i].classList.remove('btnhover_opacity_text_sang_css');
    btnhover_opacity_text_sang[i].classList.remove('btnactive_opacity_text_sang_css');
   });
  btnhover_opacity_text_sang[i].addEventListener("mousedown",function(){
    btnhover_opacity_text_sang[i].classList.add('btnactive_opacity_text_sang_css');
   });
  btnhover_opacity_text_sang[i].addEventListener("mouseup",function(){
    btnhover_opacity_text_sang[i].classList.remove('btnactive_opacity_text_sang_css');
  });
}

var hoverzoom = document.getElementsByClassName('hoverzoom');
for (let i = 0; i < hoverzoom.length; i++){
  hoverzoom[i].addEventListener('mouseover',function(){
    hoverzoom[i].classList.add('hover_zoom');
  });
  hoverzoom[i].addEventListener('mouseout',function(){
    hoverzoom[i].classList.remove('hover_zoom');;
  });
  
}

var hovershadow = document.getElementsByClassName('hoverfiltershadow');
for (let i = 0; i < hovershadow.length; i++){
  hovershadow[i].addEventListener('mouseover',function(){
    hovershadow[i].classList.add('hover_filter_shadow')
    
  });
  hovershadow[i].addEventListener('mouseout',function(){
    
    hovershadow[i].classList.remove('hover_filter_shadow')
  });
}

var hoveruptop = document.getElementsByClassName('hoveruptop');
for (let i = 0; i < hoveruptop.length; i++){
  hoveruptop[i].addEventListener('mouseover',function(){
    hoveruptop[i].classList.add('hover_tranfrom_up_top');
  });
  hoveruptop[i].addEventListener('mouseout',function(){
    hoveruptop[i].classList.remove('hover_tranfrom_up_top');
  }); 
}

var hoverfilter = document.getElementsByClassName('hoverfilter');
for (let i = 0; i < hoverfilter.length; i++){
  hoverfilter[i].addEventListener('mouseover',function(){
    hoverfilter[i].style.backgroundColor = 'transparent';
    hoverfilter[i].style.transitionDuration = '100ms';
    hoverfilter[i].style.width = '317px';
    hoverfilter[i].style.color = 'var(--colorBackgroundboxlogo)';
    hoverfilter[i].classList.add('hover_filter_gia_tien');
  });
  hoverfilter[i].addEventListener('mouseout',function(){
    hoverfilter[i].style.backgroundColor = 'var(--colortextTieuDe)';
    hoverfilter[i].style.transitionDuration = '100ms';
    hoverfilter[i].classList.remove('hover_filter_gia_tien');
    hoverfilter[i].style.width = '40%';
  }); 
}
var btnhovertexttrang = document.getElementsByClassName("btnhovertexttrang");
for (let i = 0; i < btnhovertexttrang.length; i++){
  btnhovertexttrang[i].addEventListener('mouseover',function(){
    btnhovertexttrang[i].classList.add('hover_text_trang');
  });
  btnhovertexttrang[i].addEventListener('mouseout',function(){
    btnhovertexttrang[i].classList.remove('hover_text_trang');
  }); 
}

var hovernuttrai = document.getElementsByClassName("hovernuttrai");
for (let i = 0; i < hovernuttrai.length; i++){
  hovernuttrai[i].addEventListener('mouseover',function(){
    hovernuttrai[i].classList.add('hover_nut_trai_slide');
  });
  hovernuttrai[i].addEventListener('mouseout',function(){
    hovernuttrai[i].classList.remove('hover_nut_trai_slide');
  }); 
}

var hovernutphai = document.getElementsByClassName("hovernutphai");
for (let i = 0; i < hovernutphai.length; i++){
  hovernutphai[i].addEventListener('mouseover',function(){
    hovernutphai[i].classList.add('hover_nut_phai_slide');
  });
  hovernutphai[i].addEventListener('mouseout',function(){
    hovernutphai[i].classList.remove('hover_nut_phai_slide');
  }); 
}
var hoverchamtron = document.getElementsByClassName("hoverchamtron");
for (let i = 0; i < hoverchamtron.length; i++){
  hoverchamtron[i].addEventListener('mouseover',function(){
    hoverchamtron[i].classList.add('hover_cham_tron_slide');
    hoverchamtron[i].style.color = 'var(--colorBackgroundboxlogo)';
  });
  hoverchamtron[i].addEventListener('mouseout',function(){
    hoverchamtron[i].classList.remove('hover_cham_tron_slide');
    hoverchamtron[i].style.color = 'var(--colornavjs)';
  }); 
}
// hover ghé vào shop
var ghevaoshopbefore = document.getElementById('ghevaoshopbefore');
var getghevaoshop = document.getElementById('ghevaoshop');

getghevaoshop.addEventListener('mouseover',function(){
  // getghevaoshop.classList.add('boxbiashop_btn_hover');
  getghevaoshop.style.width = '240px';
  getghevaoshop.style.color = 'var(--colorBackgroundNav)';
  
  ghevaoshopbefore.style.width = '100%';

});
getghevaoshop.addEventListener('mouseout',function(){
  getghevaoshop.classList.remove('boxbiashop_btn_hover');
  getghevaoshop.style.width = '200px';
  getghevaoshop.style.color = 'var(--colornavjs)'

  ghevaoshopbefore.style.width = '0';
});


// hover xem thêm
var xemthembefore = document.getElementById('xemthembefore');
var getxemthem = document.getElementById('xemthem');

getxemthem.addEventListener('mouseover',function(){
  getxemthem.style.width = '240px';
  getxemthem.style.color = 'var(--colorBackgroundNav)';
  
  xemthembefore.style.width = '100%';

});
getxemthem.addEventListener('mouseout',function(){
  getxemthem.classList.remove('boxbiashop_btn_hover');
  getxemthem.style.width = '200px';
  getxemthem.style.color = 'var(--colornavjs)'

  xemthembefore.style.width = '0';
});

// btn mua ở box sản phẩm







// ____________________________________________________________________
// CODE JS cho item đăng nhập và đăng ký
// Tài khoản, Mật khẩu mặc định
const tk = "nguyenvannhat";
const mk = "nhat12345";

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
    document.getElementById("errortextDN").innerText = 'You must not leave blank when logging in';
    geterror[0].className='error h5_0';
  }else if(valuegetinputTK == ''){
    document.getElementById("errortextDN").innerText = 'Please fill out your account';
    geterror[0].className='error h5_0';
  }else if(valuegetinputMK == ''){
    document.getElementById("errortextDN").innerText = 'Please enter the password';
    geterror[0].className='error h5_0';
  }else{
    document.getElementById("errortextDN").innerText = 'You have entered the wrong. Invite to re -enter';
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

  var sdtchuyan = /^\d{10}$/;
  var ktsdt = sdtchuyan.test(valuegetinputsdt);

  var emailchuan = /^\w+@[a-zA-Z]{3,}\.com$/i;
  var ktemail = emailchuan.test(valuegetinputemail);

  var kttk1 = 0;
  // Kiểm tra nhập tạo TK
  if (valuegetinputTK1 == ''){
    document.getElementById("error1textDKtk1").innerText='You must not leave blank';
    geterror1[0].className='error1 h5_0';
    kttk1 = 1;
  }
  if (valuegetinputTK1.length <= 6){
    kttk1 = 1;
    document.getElementById("error1textDKtk1").innerText='Please enter at least 6 characters';
    geterror1[0].className='error1 h5_0';
  }else{
    kttk1=0;
    geterror1[0].className='error1 no_eror_h5_0' ;
  }

  // Kiểm tra nhập tạo MK
  var ktmk1 = 0;
  if (valuegetinputMK1 == ''){
    document.getElementById("error1textDKmk1").innerText='You must not leave blank';
    geterror1[1].className='error1 h5_0';
    ktmk1 = 1;
  }
  if (valuegetinputMK1.length<=8){
    document.getElementById("error1textDKmk1").innerText='Please enter at least 8 characters';
    geterror1[1].className='error1 h5_0';
    ktmk1 = 1;
  }else{
    ktmk1=0;
    geterror1[1].className='error1 no_eror_h5_0';
  }
  
  // Kiểm tra nhập tạo SDT
  var ktsdt1 = 0;
  if(ktsdt){
    ktsdt1 =0;
    geterror1[2].className='error1 no_eror_h5_0';
  }else{
    ktsdt1 =1;
    geterror1[2].className='error1 h5_0';
    document.getElementById("error1textDKsdt1").innerText='Please check the phone number';
  }
 var ktemail1 = 0;
   // Kiểm tra nhập tạo email
  if(ktemail){
    ktemail1=0;
    geterror1[3].className='error1 no_eror_h5_0';
  }else{
    ktemail1=1;
    geterror1[3].className='error1 h5_0';
  }

  if(ktmk1 ==0 && ktemail1 == 0 && ktsdt1 == 0 && kttk1 == 0){
    getinputTK1.value = '';
    getinputMK1.value = '';
    getinputsdt.value = '';
    getinputemail.value = '';
    geterror1[0].className='error1';
    geterror1[1].className='error1';
    geterror1[2].className='error1';
    geterror1[3].className='error1';
  }

});

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









