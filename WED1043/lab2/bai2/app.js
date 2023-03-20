/** 
- Cho người dùng nhập vào 3 giá trị a, b, c.
- Kiểm tra nếu a, b, c là 3 cạnh của 1 tam giác.
- In ra kết quả nếu đó làm tam giác thường, cân, vuông.
*/
let a = prompt("mời bạn nhập a"); a = parseInt(a,10);
let b = prompt("mời bạn nhập b"); b = parseInt(b,10);
let c = prompt("mời bạn nhập c"); c = parseInt(c,10);
if(a+b>c && a+c>b && c+b>a){
    if(a==b && a==c){                                   // Tam giác đều là tam giác có 3 cạnh bằng nhau
        console.log("Đây là tam giác đều");
    }else if(a==b || b==c || c==a){                     // Tam giác cân là tam giác có 2 cạnh bằng nhau
        console.log("Đây là tam giác cân");            // Tam giác vuông là Tam giác có bình phương của một cạnh bằng tổng các bình phương của hai cạnh kia là 
    }else if(a*a + b*b== c*c || a*a + c*c == b*b || b*b + c*c == a*a ){
        console.log("Đây là tam giác vuông");
    }else console.log("Đây là tam giác thường");
}else console.log("3 cạnh không phải là tam giác");