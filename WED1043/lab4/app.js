class Student{
    constructor(id, first_name, lats_name, class_id, email, phone_number, dob){
        this.id = id,
        this.first_name = first_name,
        this.lats_name = lats_name,
        this.class_id = class_id,
        this.email = email,
        this.phone_number = phone_number,
        this.dob = dob
    };
    GetFullName(){
        return this.first_name + " " +this.lats_name;
    };
    getAge(){
        const date = new Date();
        var birthday = new Date(this.dob)
        var ageYear = date.getFullYear() - birthday.getFullYear();   // lấy năm hiện tại trừ đi năm sinh  
        var ageMonth = date.getMonth()+1 - birthday.getMonth()+1;  // lấy thấng hiện tại trừ đi tháng sinh
        var ageDay = date.getDate() - birthday.getDate();          // lấy ngày hiện tại trừ đi ngày sinh
        if(ageDay <= 0 ){ // nếu tuổi ngày sau khi tính nhỏ hơn 0 thì
            ageMonth --;                // tháng trừ 1 và
            ageDay = Math.abs(ageDay);  // giữa nguyên ngày
        }
        if(ageMonth<0){     // nếu tháng nhỏ hơn 0 thì 
            ageYear --;     // năm trừ 1 và
            ageMonth +=12;  // lấy tháng bị âm cộng 12 sẽ ra tháng tuổi
        }
        return ageYear + " Tuổi " + (ageMonth*30 + ageDay )+ " Ngày" ;  
    }  
    FullDay(){
        const date = new Date();
        var birthday = new Date(this.dob)
        var ageYear = date.getFullYear() - birthday.getFullYear();   // lấy năm hiện tại trừ đi năm sinh  
        var ageMonth = date.getMonth()+1 - birthday.getMonth()+1;  // lấy thấng hiện tại trừ đi tháng sinh
        var ageDay = date.getDate() - birthday.getDate();          // lấy ngày hiện tại trừ đi ngày sinh
        if(ageDay <= 0 ){ // nếu tuổi ngày sau khi tính nhỏ hơn 0 thì
            ageMonth --;                // tháng trừ 1 và
            ageDay = Math.abs(ageDay);  // giữa nguyên ngày
        }
        if(ageMonth<0){     // nếu tháng nhỏ hơn 0 thì 
            ageYear --;     // năm trừ 1 và
            ageMonth +=12;  // lấy tháng bị âm cộng 12 sẽ ra tháng tuổi
        }
        var ngay = 0;
        for (let index = birthday.getFullYear() ; index < date.getFullYear(); index++) {
            if(((index % 4 == 0) && (index % 100 != 0)) || (index % 400 == 0)){
                ngay += 366;
            }else( ngay+= 365)
        }
        return ngay+ageMonth*30 + ageDay;
    }
}
var sinhVien = [
    SV = new Student("PD01", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, "04/10/2003"),
    SV1 = new Student("PD02", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, "10/12/2004"),
    SV2 = new Student("PD03", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, "04/24/1940"),
    SV1 = new Student("PD04", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, "08/04/2004"),
    SV2 = new Student("PD05", "Nguyen", "Nhật", "IT18320", "nhat@gmail.com", 0857075999, "10/30/1980")
]
var dayAgeSV=[]
for (let index = 0; index < sinhVien.length; index++) {
    console.log(sinhVien[index].id + "\n" + sinhVien[index].GetFullName() + "\n" + sinhVien[index].getAge());
    dayAgeSV[index]=sinhVien[index].FullDay(); //lấy số ngày và để vào Array theo index
}

// for (let index = 0; index < daySV.length; index++) {
//     dayAgeSV.sort(function(a, b){return a - b});
// }

// xắp xếp 
for(var i = 0; i < dayAgeSV.length; i++){
    for(let j = i; j < dayAgeSV.length; j++){
        if(dayAgeSV[i]>dayAgeSV[j]){ // nếu thằng đầu lớn hơn thì hoán vị
            // Hóa vị array dayAgeSV
            let doi;                
	        doi = dayAgeSV[i];
	        dayAgeSV[i]=dayAgeSV[j];
	        dayAgeSV[j]=doi;
            // Hóa vị array sinhVien
            let doi1;
            doi1 = sinhVien[i];
            sinhVien[i]=sinhVien[j];
            sinhVien[j]=doi1;
        }
    }
}
// In ra danh sách sinh viên theo thứ tự sinh viên có số tuổi (tínhtheo ngày) từ thấp đến cao.

for (let index = 0; index < dayAgeSV.length; index++) {
    console.log(dayAgeSV[index]);
    console.log(sinhVien[index]);
}
// kích thước màn hình
console.log(`Chiều rộng màn hình = ${screen.availWidth} \nChiều cao màn hình = ${screen.availHeight}`);


