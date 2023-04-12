/*
 Array methods (Phương pháp mảng)
    forEach(): duyệt qua từng phần tử của mảng
    every(): (Kiểu bool)kiểm tra tất cả các phần tử thuộc 1 mảng phải thỏa mãm 1 điều kiện j đó
    some(): (kiểu bool)kiểm trả chỉ cần 1 ông đúng thì all đều đúng
    find(): tìm kiểm và trả về 1 thõa mản, nếu đúng trả về chính value , lưu ý: chỉ tìm ra 1 đối tượng thôi
    filter(): tìm kiểm và trả về all thõa mản 
    map()
    reduce()
 */
var courses = [
    {
        id: 01,
        name: 'C#',
        coin: 250
    },
    {
        id: 02,
        name: 'C#1',
        coin: 250
    },
    {
        id: 03,
        name: 'C#2',
        coin: 0
    },
    {
        id: 04,
        name: 'C#3',
        coin: 250
    },
    {
        id: 05,
        name: 'C#4',
        coin: 250
    },
    {
        id: 02,
        name: 'C#1',
        coin: 0
    },
    {
        id: 02,
        name: 'C#1',
        coin: 0
    },
    {
        id: 06,
        name: 'C#5',
        coin: 0
    },
    {
        id: 07,
        name: 'C#6',
        coin: 250
    }
]
// 
courses.forEach(function(PTarray, index) {
    console.log(index, PTarray)// xuất ra index và in ra từng phần tử của mảng
});
// kiểm tra theo điều kiện
var free = courses.every(function(courses) {
    return courses.coin === 0 // trong quá trình chạy thấy có coin lớn hơn ko thì lập tức trả về false
});
console.log(free)
// kiểm tra chỉ cần 1 ông đúng all đều đúng
var free = courses.some(function(courses) {
    return courses.coin === 0 // trong quá trình chạy thấy có coin lớn hơn ko thì lập tức trả về false
});
console.log(free)
// kiểm tra và trả về 1 phần tử thõa mãn
var free1 = courses.find(function(courses) {
    return courses.name === "C#1"
});
console.log(free1)
// kiểm tra và trả về all phần tử thõa mãn
var free1 = courses.filter(function(courses) {
    return courses.name === "C#1"
});
console.log(free1)

// return cái j thì nhận cái đó
var newCoureses = courses.map(function(courses,index){
    return{
        id: courses.id,
        name: `Khóa học: ${courses.name}`,
        coin: courses.coin,
        index: index // truyền thêm index
    }
});
console.log(newCoureses)
//
function Tinhcoin(a,b){
    return a+b.coin

}
var free = courses.reduce(Tinhcoin,0);
console.log(free)