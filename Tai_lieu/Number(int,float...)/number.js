// Làm việc với Number
// chuyển đổi: string sang number 
parseFloat();
parseInt();

var nNumber = 10;
var nan= 10 / "abc" ;
console.log(isNaN(nan)) // kiểm tra kiểu NAN

// 1. To string (chuyển kiểu int thành string)
console.log(nNumber.toString());

// 2. To Fixed (làm tròn số thập phân)
var Pi = 3.14;
console.log(Pi.toFixed())
console.log(Pi.toFixed(1)) // xuất hiện bao nhiêu số sau thập phân
