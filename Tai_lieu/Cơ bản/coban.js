// Cách Đặt biến: var <tên biến> = <Giá trị>
    var a="nhat";   // biến kiểu string
    var b=5;        // biến kiểu int
    alert(a+" "+b);

/* Giới thiệu 1 số hàm built-in
    1. Alert 
    2. Console
    3. Confirm
    4. Prompt
    5. SetTimeout
    6. Setinterval
*/
    console.log("Đây là 1 dòng code");  // hiện ở tap console
    console.warn("in cảnh báo");        // hiện cảnh báo ở tap console
    console.error("Lỗi");               // hiện lỗi ở tap console

    confirm("Xác nhận bạn đủ tuổi"); // hiện lên 1 thông báo xác nhận 
    prompt("Mời bạn nhập");
    // chạy 1 đoạn code trong 1 khoảng thời gian nhất định và chỉ chạy 1 lần
    setTimeout(function() {  
        alert('Thông báo')
    }, 1000)
    // chạy vòng lặp code sau 1 khoản thời gian

    // setInterval(function(){
    //     console.log("setinterval" + Math.random())
    // },1000)


// Toán tử 

/* Toán tử số học - Arithmetic

    Cộng:               +
    Trừ:                -
    Nhân:               *
    chia:               /
    Lũy thừa:           **
    Chia lấy dư:        %
    Tăng 1 giá trị:     ++
    Giảm 1 giá trị:     --

    Toán tử ++ --
    prefix : Tiền tố

    Postfix : Hậu tố
    */

/* Toán tử gán - Assignment

    Toán tử     ví dụ       Tương đương
    =           x = y       x = y
    +=          x += y      x = x + y
    -=          x -= y      x = x - y      
    *=          x *= y      x = x * y
    /=          x /= y      x = x / y
    **=         x **= y     x = x ** y

    */


/* Toán tử so sánh - Comparison

    Toán tử
    ==          --> Bằng
    !=          --> Không bằng
    >           --> Lớn hơn
    <           --> Nhỏ hơn
    >=          --> Lớn hơn hoặc bằng 
    <=          --> Nhỏ hơn hoặc bằng 
    so sánh đặc biệt
    ===         --> kiểm tra giá trị và kiểu dữ liệu có bằng nhau không
    !==         --> ngược lại
    */
    var tuoi= 20;
    var tuoi1="20";
    console.log('hiiii',tuoi === tuoi1) // so sánh thế này mới chuyển về value và type

//Toán tử logic - Logical

    // Boolean
        /*
        những giá trị này truyền vào thì điều kiện sẽ là sai và ngược lại
            0
            false
            '' hoặc ""
            undefined
            NaN
            null
            */
    var nhat = true;
    console.log(nhat);

// If - else
    if (nhat) {
        console.log("Đúng");
    }else {
        console.log(Sai);
    }
/*
Toán tử 
    &&      --> và
    ||      --> hoặc
    !       --> không
*/

// Kiểu dữ liệu nguyên thủy

    // Number type
        var bien1 = 1;
        var bien2 = 2;

    // String type
        var bien3 = "Nhat Timo";

    // Boolean type
        var bien4 = true;

    // Undefine type
        var bien5;

    // Null type
        var bien6 = null;

    // Symbol type
        var id = Symbol("mô tả của symbol");
    // Kiểm tra kiểu dữ liệu
        console.log(typeof bien1); // kiểm tra kiểu dữ liệu

// kiểu dữ liệu phức tạp 

    // Function  hay còn gọi là hàm 
        var myFunction = function(){
            alert("Hi! chào tất cả các bạn");
        }
    // gọi function
        myFunction();

    // Object types
        var myObject = {
            name: 'Nhat',
            age: 20 ,
            adress:'Lệ thủy'
        };

        var myArray = [
            "nguyen",
            "văn",
            "nhật"
        ];
