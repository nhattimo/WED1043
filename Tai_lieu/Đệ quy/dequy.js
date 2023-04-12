var myArray = ['a', 'b', 'c', 'a', 'b', 'c']
console.log(new Set(myArray)); 
console.log([...(new Set(myArray))]); // giải nén thành kiểu array

// Đệ quy là gì: 