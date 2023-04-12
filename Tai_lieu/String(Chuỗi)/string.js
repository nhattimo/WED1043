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
