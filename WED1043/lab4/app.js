class Student{
    constructor(id, first_name, lats_name, class_id, email, phone_number, day_Of_Birth, month_Of_Birth, year_Of_Birth /*, dob */){
        this.id = id,
        this.first_name = first_name,
        this.lats_name = lats_name,
        this.class_id = class_id,
        this.email = email,
        this.phone_number = phone_number,
        this.day_Of_Birth = day_Of_Birth,
        this.month_Of_Birth = month_Of_Birth,
        this.year_Of_Birth = year_Of_Birth
        // this.dob = dob
    };
    GetFullName(){
        return this.first_name + " " +this.lats_name;
    }
    getAge(){
        const date = new Date();
        let currentYear = date.getFullYear();               // Tạo biến gán = năm hiện tại
        let currentMonth = date.getMonth()+1;               // Tạo biến gán = tháng hiện tại
        let currentDay = date.getDate();                    // Tạo biến gán = ngày hiện tại
        let ageYear = currentYear - this.year_Of_Birth;     // tạo biến gán = năn hiện tại - năm sinh
        let ageMonth = currentMonth - this.month_Of_Birth;  // tạo biến gán = năn hiện tại - tháng sinh
        let ageDay = currentDay - this.day_Of_Birth;        // tạo biến gán = năn hiện tại - ngày sinh
        if(ageDay < 0 || ageDay < this.day_Of_Birth){
            ageMonth --;
            ageDay +=30;
        }
        if(ageMonth<0){ // tháng khi tính ra nhỏ hơn 0 thì giảm suống 1 năm 
            ageYear --;
            ageMonth +=12;
        }
        // return ageYear*365 + ageMonth * 30 + ageDay;
        return ageYear + " Tuổi " + (ageMonth * 30 + ageDay) + " Ngày" ;
    }
    getFullDate(){
        const date = new Date();
        let currentYear = date.getFullYear();               // Tạo biến gán = năm hiện tại
        let currentMonth = date.getMonth()+1;               // Tạo biến gán = tháng hiện tại
        let currentDay = date.getDate();                    // Tạo biến gán = ngày hiện tại
        let ageYear = currentYear - this.year_Of_Birth;     // tạo biến gán = năn hiện tại - năm sinh
        let ageMonth = currentMonth - this.month_Of_Birth;  // tạo biến gán = năn hiện tại - tháng sinh
        let ageDay = currentDay - this.day_Of_Birth;        // tạo biến gán = năn hiện tại - ngày sinh
        if(ageDay < 0 || ageDay < this.day_Of_Birth){
            ageMonth --;
            ageDay +=30;
        }
        if(ageMonth<0){ // tháng khi tính ra nhỏ hơn 0 thì giảm suống 1 năm 
            ageYear --;
            ageMonth +=12;
        }
        return fulldate = ageYear*365 + ageMonth * 30 + ageDay ;
    }
    
}

let sinhVien = [
    SV = new Student("PD01", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, 10, 04, 2003),
    SV1 = new Student("PD02", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, 29, 01, 2003),
    SV2 = new Student("PD03", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, 10, 09, 2004),
    SV1 = new Student("PD04", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, 29, 11, 2000),
    SV2 = new Student("PD05", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, 20, 09, 2003)
]
for (let index = 0; index < sinhVien.length; index++) {
    console.log(sinhVien[index].id + "\n" + sinhVien[index].GetFullName() + "\n" + sinhVien[index].getAge())
}
sinhVien.sort(a,b);

let width = screen.availWidth;
console.log("Chiều rộng màn hình = " + width)
let height = screen.availHeight;
console.log("Chiều cao màn hình = " + height)




