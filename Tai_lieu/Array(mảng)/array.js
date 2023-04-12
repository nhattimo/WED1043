
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
