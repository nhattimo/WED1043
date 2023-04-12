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