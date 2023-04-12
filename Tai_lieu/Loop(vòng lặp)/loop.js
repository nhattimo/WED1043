/*
    Vòng lặp

1. for - Lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng
3. for/of - lặp qua value cảu đối tượng
4. while - lặp khi điều kiện đúng
5. do/while - lặp ít nhát 1 lần, sau đó lặp khi điều kiện đúng
 */


// 1. for - Lặp với điều kiện đúng
// cú pháp: for(<Khởi tạo>;<biểu thức điều kiện>;<công việt của mỗi lần lặp> ){code}
    for (var i = 0; i<=100; i++) {
        //console.log(i)  
    }

// 2. for/in - lặp qua key của đối tượng
    var myAray = [
        111,
        222,
        333
    ]
    for (var key in myAray){
        console.log(myAray[key])
    }
    var myInfo = {
        name: 'nhật',
        age: 20,
        address: 'Quảng Bình'
    }
    for (var key in myInfo) {
        console.log(myInfo[key])
    }
    var myString = 'Nhật timo'
    for (var key in myString){
        console.log(myString[key])
    }

// 3. for/of - lặp qua value cảu đối tượng
    var languages = [
        'java',
        'C#',
        'python'
    ]
    // dùng vòng for để lấy value of Array
    for (var value of languages){
        console.log(value)
    }
    // dùng vòng for để lấy từng index của 1 String(chuỗi)
    var languages1 = 'nguyen van nhat'
    for (var value of languages1){
        console.log(value)
    }
    // lấy value và key or object
    var myObject = {
        name: 'Nhật',
        age: 20
    }
    console.log(Object.keys(myObject)) // trả về 1 mảng các key
    console.log(Object.values(myObject)) // trả về 1 mảng các value of object
    // chạy vòng for lấy value thông qua key of object
    for( var value of Object.keys(myObject)){
        console.log(myObject[value]) // vòng for trả về value of object 
        console.log(value) // vòng for trả về key of object
    }
    for(var value of Object.values(myObject)){
        console.log(value) // vòng for trả về value of object
    }

// 4. while - lặp khi điều kiện đúng

var i = 0;
while (i<=10) {
    console.log(i);
    i++    
}

//5. do/while - lặp ít nhát 1 lần, sau đó lặp khi điều kiện đúng
do {
    console.log(i)
    i++
} while (i<20);


// break and contineu in loop

    // break: gặp break thì lập tức thoát khỏi vòng lặp
    // comtinue: gặp continue thì lập tức bỏ qua các câu lệnh bên dưới và làm tiếp vòng lặp 

// Nested loop (Vòng lặp lòng nhau)

var myArrayNC = [
    [1,2],
    [3,4],
    [5,6]
]
// dùng for lấy index i của array lớn
for (let i = 0; i < myArrayNC.length; i++) {
    console.log(myArrayNC[i])
    // dùng for lấy index i của array nhỏ tại index i
    for (let j = 0; j < myArrayNC[i].length; j++) {
        console.log(myArrayNC[i][j]) // in ra phần tử của mảng con
    } 
}
