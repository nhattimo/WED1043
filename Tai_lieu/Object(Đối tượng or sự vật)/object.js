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
