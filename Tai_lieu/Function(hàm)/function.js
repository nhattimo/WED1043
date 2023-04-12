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

    // chạy function  
    Demo();
    demo();

    // Aroow function (ít được sử dụng nên sẽ học ở khóa học nâng cao )

