// hiển thị và mời chọn chứ năng
do {
var a=prompt("1. Tính điểm trung bình (switch case)\n2. Tính điểm trung bình (if else)\n0. Thoát\nMời bạn chọn");
a=parseInt(a,10);
var kt;
    kt = false
    switch (a) {
        case 0:
            break;
        case 1:
            TDTBSwich_case();
            break;
        case 2:
            TDTBIf_else();
            break;
        default:
            alert("Bạn đã nhập ngoài vùng cho phép");
            kt = true;
            break;
    }
} while (kt != false);

//Nhập vào điểm Toán, Lý, Hóa, Sinh và tính tổng 4 môn
function MoiNhap_va_TinhTongTB(){
    var diemNhap = [ 
        KTTinhHopLe(parseFloat(prompt("Nhập điểm toán"))),
        KTTinhHopLe(parseFloat(prompt("Nhập điểm lý"))),
        KTTinhHopLe(parseFloat(prompt("Nhập điểm hóa"))),
        KTTinhHopLe(parseFloat(prompt("Nhập điểm sinh")))
    ];
    // chạy vòng for, lấy value, gán tổng
    var tong=0,dem=0;
    for (let i = 0; i < diemNhap.length; i++) {
        tong += diemNhap[i];
        dem ++; 
    }   
    tong /= dem ; 
    console.log("Điểm trung bình: ",tong);
    return tong;
};
// kiểm tra người nhập vào điểm không vượt quá 10đ
function KTTinhHopLe(b){
    do{
        if( b <= 10 ){
            return b;
        }else{
                b = parseFloat(prompt("Mời nhập lại điểm,\nđiểm không được vượt quá 10"));
            } 
    }while (b>10);
    return b;
};
// hàm kiểm tra học lực bằng Swich case
function TDTBSwich_case(){
    let hi = MoiNhap_va_TinhTongTB()
    switch (hi) {
        case 1:
        case 2:
        case 3:    
        case 4:
            console.log("Học lực: Yếu");
            break;
        case 5:
        case 6:
            console.log("Học lực: Trung Bình");
            break;
        case 7:
        case 8:
            console.log("Học lực: Khá");
            break;
        default:
            console.log("Học lực: Giỏi");
            break;
    }
};
// hàm kiểm tra học lực bằng if else
function TDTBIf_else(){
    let hi = MoiNhap_va_TinhTongTB() // Gọi hàm vào sử dụng và gán = 1 biến
    if(hi < 5 ){
        console.log("Học lực: Yếu");
    }else if (hi < 7){
        console.log("Học lực: Khá");
    }else if (hi < 9){
            console.log("Học lực: Khá");
    }else console.log("Học lực: Giỏi");
};
