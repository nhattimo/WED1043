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



// Tạo chuỗi
    var chuoi = "Nhật \\Timo\\";
    console.log(chuoi.length) // kiểm tra độ dài của chuỗi


// Làm việc với chuỗi
    var LVVC = "nguyen van nhat";
    // 1. Length ( đo độ dài của chuỗi )  
    console.log(LVVC.length);   // in ra độ dài của chuỗi

    // 2. Find indexOf ( tìm được vị trí của 1 ký tự nằm trong 1 chuỗi )
    // không tìm thấy trả về -1
    console.log(LVVC.indexOf('a')); // tìm vị trí đầu tiên khi nhìn thấy
    console.log(LVVC.indexOf("a",11)) // tìm ký tự a bắt đầu từ vị trí index 11
    console.log(LVVC.lastIndexOf("a")) // tìm ký tự a ở vị trí cuối cùng

    console.log(LVVC.search("a")) // tìm kiếm theo biểu thức chính quy

    // 3. Cut string (cắt chuỗi)
    console.log(LVVC.slice(4)) // bắt đầu cắt từ vị trí index 4 đến hết chuỗi
    console.log(LVVC.slice(4,6)) // cắt chuỗi từ vị trí index 4 đến index 6
    console.log(LVVC.slice(-4,-1)) // lấy từ sau tới đến index từ phải sang trái, bắt đầu từ 0 đến số âm
   
    // 4. Replace (ghi dè)
    console.log(LVVC.replace("a","o")) // (chữ, chữ cần thay thế) thay được 1 chữa tìm thấy đầu tiên
    console.log(LVVC.replace(/a/g,"o")) // thay thế theo biểu thức chính quy. ở đâu có a thì thay thế

    // 5. Convert to upper case (chuyển đổi chuỗi thành chữ in hoa)
    console.log(LVVC.toUpperCase())

    // 6. Convert to lower case ( chuyển đổi chuỗi thành chữ thường)
    console.log(LVVC.toLowerCase())

    // 7. Trim ( vứt bỏ khoảng space ở hai đầu)
    console.log(LVVC.trim())

    // 8.Split (cắt 1 chuỗi thành 1 aray )
    var langauges = "c++, java, python, C#";
    console.log(langauges.split(", "))
    var langauges1 = "c++javapythonC#";
    console.log(langauges1.split(""))

    // 9. Get a character by index (lấy 1 ký tự bởi index cho trước)
    console.log(LVVC.charAt(0)) // cách 1
    console.log(LVVC[0]) // cách 2

// Làm việc với Number

    var nNumber = 10;
    var nan= 10 / "abc" ;
    console.log(isNaN(nan)) // kiểm tra kiểu NAN

    // 1. To string (chuyển kiểu int thành string)
    console.log(nNumber.toString());

    // 2. To Fixed (làm tròn số thập phân)
    var Pi = 3.14;
    console.log(Pi.toFixed())
    console.log(Pi.toFixed(1)) // xuất hiện bao nhiêu số sau thập phân

// Mảng (Array)
    // 1 tạo mảng (Array)
    var langauges = [
        "java",
        "C#",
        "Python",
    ]
    console.log(langauges)

    console.log(Array.isArray(langauges)) // kiểm tra xem có phải kiểu array hay không
    // 2 truy xuất mảng
        // 1. truy xuất độ dài của mảng
        console.log(langauges.length)
        // 2. lấy phẩn tử theo index
        console.log(langauges[2])

    // Làm việc với array
        //1. To string (chuyển type array sang type string)
        console.log(langauges.toString())
        //2. Join (biến array thành 1 chuỗi nhưng có thể thay đổi dấu ngăn cách)
        console.log(langauges.join(" _ "))
        //3. Pod (xóa element cuối và trả chính element mà nó đã xóa )
        console.log(langauges.pop()) // gọi thêm sẽ gọi thêm nếu mảng trống thì trả về undefined
        //4. Push (thêm 1 hoặc nhiều phần tử vào cuối mảng )
        console.log(langauges.push("Dart", "C++")) // thêm nhưng trả về số element của mảng
        console.log(langauges)
        //5. Shift (xóa element đầu và trả chính element mà nó đã xóa )
        console.log(langauges.shift())
        //6. Unshift (thêm 1 hoặc nhiều phần tử vào đầu mảng )
        console.log(langauges.unshift("Java","Ruby"))
        console.log(langauges)
        //7. Splicing (cắt, xóa, chèn thêm phần tử vào mảng)
        langauges.splice(1,2,"hello")// bắt đầu từ index 1 xóa 2 element và thêm element
        console.log(langauges)
        //8. Concat(nối Array)
        var langauges2 = [
            "hh",
            "jj"
        ];
        console.log(langauges.concat(langauges2))
        //9. Slicing ( cắt 1 vài element của Array)
        console.log(langauges.slice(1)) // cắt từ index 1 đến hết mảng
        console.log(langauges.slice(1,3)) // cắt từ index 1 đến index 3
        console.log(langauges.slice(-2)) // cắt từ phía sau tính từ vị trí index 2
        console.log(langauges.slice(-2,-1)) // cắt từ index 2 đến index 1 từ phải sang trái

// Hàm (function)

    function showDialog() {
        alert("hi xin chào các bạn function")
    }
    // hàm có truyền tham số
    function writeLog(message){
        console.log(message)
    }
    // hàm không cần truyền tham số nhưng cho bao nhiêu vẫn nhận bấy nhiêu
    function writeLogs(){
        console.log(arguments)
    }
    // Return trong hàm
    var isConfint = confirm("Message")
    console.log(isConfint)
    function cong(a,b) {
        return a+b;
    }
    // gọi hàm
    showDialog();
    // gọi hàm đối số 
    writeLog("Thông báo")
    writeLogs(1,2,3,4,5,6,7)

    // gọi hàm return
    console.log(cong(3,5))


// Các loại function
    // Declaration function 
    function Demo(){

    }

    // Expression function 
    var demo = function(){

    }

    // chạy thử function  
    Demo();
    demo();

    // Aroow function (ít được sử dụng nên sẽ học ở khóa học nâng cao )




 // Object trong javascript

 var myInfo = {
    name: 'Nhật', // key: name và value: Nhật
    age: 18,
    address: 'Chợ-Tréo'
 };

 // thêm thuộc tính vào Object
myInfo.email = 'nhattimo@gmail.com'

// lấy value của thuộc tính
console.log(myInfo.name)
console.log(myInfo['name'])
// trường hợp đặc biệt
var myKey = 'address';
console.log(myInfo[myKey])
 // Object trong javascript
 // Chú ý: object này lưa theo tham trị
 
 // tạo 1 object 
 var myObject = {
    name: 'Nhật',  // key: name value: 'Nhật'
    age: 20,
    address: 'Chợ tréo - Lệ Thủy - Quảng Bình'
};

// thêm key mới vào Object
myObject.email = 'nhattimo@gmail.com'

// xóa key trong object
delete myObject.name
console.log(myObject)


var myObject1 = {
    name: 'Nhật',  // key: name value: 'Nhật'
    age: 20,
    address: 'Chợ tréo - Lệ Thủy - Quảng Bình',
    // function trong object
    getName: function(){ 
        return this.name
    }
};
// xuất thuộc tính phương thức trong object
console.log(myObject1.getName())

// Object constructor  ( Xây dựng object )

// tạo ra bản thết kế
function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    // phương thức trong object
    this.getName = function(){
        return `${firstName} ${lastName}`
    }
}
// tạo ra đối tượng từ 1 bản thiết kế
var author = new User('Nhật', 'Nguyễn', 'avatar'); // đối tượng giảng viên, tác giả
var user = new User('Timo', 'Nhật', 'avatar'); // tạo đối tượng người dùng
// Gán thêm thuộc tính riêng biệt cho từng đối tượng nhưng không ảnh hưởng đến bản thiết kế
author.title = 'Hãy chia sẻ cho thầy đi';
user.comment = 'đừng tin ông thầy';
// xuất đối tượng
console.log(author);
console.log(user);
// xuất đối tượng chấm tới thuộc tính
console.log(author.getName());
console.log(user.getName());


// Object prototype - Basic (đối tượng nguyên mẫu, khuôn)
// 1. prototype là gì?
// 2. sử dụng khi nào?

// thêm thuộc tính ngoài hàm tạo 
User.prototype.className = 'f8';
// thêm function ngoài hàm tạo
User.prototype.getClass = function(){
    return this.className;
}
console.log(user.className)
console.log(user)
console.log(user.getClass())

// Dối tượng Date

// tạo ra 1 đối tượng
var date = new Date();

console.log(date)
// lấy ra năm
console.log(date.getFullYear())
// lấy ra tháng
console.log(date.getMonth()+1)
// lấy ra ngày 
console.log(date.getDate())
// lấy giờ 
console.log(date.getHours())
// lấy phút
console.log(date.getMinutes())
// lấy giây
console.log(date.getSeconds())
// in ra ngày tháng năm
console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)

// Nguồn tài liệu tham khảo:
// https://www.w3schools.com/jsref/jsref_obj_date.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date