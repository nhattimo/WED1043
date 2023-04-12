let person = {
    name: 'Nhat',
    SĐT: 0857075999,
    getName: function(){
        return this.name
    }
};
console.log(person.getName());

class ClassName{
    // Create constructor có 5 attribute
    constructor(maSV, ho, ten, namSinh, email){
        this.maSV = maSV,
        this.ho = ho,
        this.ten = ten,
        this.namSinh = namSinh,
        this.email = email
    }
    // Create method to calculate age of a ClassName
    getAge(){
        const date = new Date();
        let currentYear =date.getFullYear();
        let age = currentYear - this.namSinh;
        return age;
    }
    // Create method to get full name
    getFullName(){
        return this.ho + " " +this.ten;
    }
}
let SV1 = new ClassName(1,'NGUYEN','NHAT',2003,'NHAT@GMAIL.COM');
console.log(SV1.getAge() + " " + SV1.getFullName());


window.open("https://www.facebook.com/", "Kien Thuc", "menubar = yes, width = 800, height = 600")

let w = window.innerWidth;
let h = window.innerHeight;
console.log()
