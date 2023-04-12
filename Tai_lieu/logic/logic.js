// If else

var bienTest = 3 ;
if(bienTest == 3){
    console.log("sô 3 đấy pro")
}else console.log('không phải số ba')

// switch case
switch (bienTest) {
    case 3:
        console.log("sô 3 đấy pro")
        break;
    default:
        console.log('không phải số ba')
        break;
}

//Ternary operator ( Toán tử 3 ngôi ) 
var course = {
    name: 'Javascript',
    coin: 250
}
if (course.coin > 0){
    console.log(`${course.coin} Conis`)
}else console.log('Khóa học miễn phí')

// sử dụng toán tử 3 ngôi
// cú pháp: <Điều kiện ? đúng : sai>
var result = course.coin > 0 ? `${course.coin} Conis`: 'Khóa học miễn phí'
console.log(result)

// ví dụ nắm chắc kiến thức
var a = 10;
var b = 5;
var c = a>0 ? a : b;// nếu a lớn hơn 0 thì lấy a ngược lại thì lấy b
console.log(c)