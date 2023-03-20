let a = prompt("Mời bạn a");a = parseInt(a);
let b = prompt("Mời bạn b");b = parseInt(b);
let c = prompt("Mời bạn c");c = parseInt(c);
console.log(a+" "+ b+" "+ c);

if (a==0){                              // nếu a = 0 Thì làm lệnh if ==> Giải PT bậc nhất
    console.log("Giải pt bậc nhất");
    if(b==0){                           // nếu b = 0 Thì làm lệnh if 
        if(c==0){                       // nếu c = 0 ==> PT vô số nghiệm
            console.log("Phương trình có vô số nghiệm");
        }else{ console.log("phương trình vô nghiệm")}       // ngược lại c != 0 thì làm lệnh elae ==> PT vô nghiệm
    }else{console.log("Phương trình có nghiệm x= ",(-b/c))} // ngược lại a != 0 thì làm lệnh else ==> PT có nghiệm
}else{                                                      // ngược lại a != 0 thì làm lệnh else ==> Giải PT bậc hai
    console.log("Giải PT bậc 2");
    let delta = b*b - 4 *a*c;                                // Tính delta
    console.log("Deltal = ",delta);
    document.write(delta);
    if(delta < 0){                                          // nếu delta < 0 thì làm lệnh if ==> PT vô nghiệm
        console.log("Phương trình vô nghiệm");
    }else if(delta == 0){                                   // nếu delta = 0 thì làm lệnh if ==> PT có nghiệm kép
        console.log("Phương trình có nghiệm kép : x = ",(-b/(2*a)));
    }else{                                                 // ngược lại 2 điều kiện trên thì làm lệnh else ==> PT có 2 nghiệm
        console.log("Phương trình có 2 nghiệm phân biệt : ")
        console.log("x1 = ",(-b + Math.sqrt(delta))/(2*a));
        console.log("x2 = ",(-b - Math.sqrt(delta))/(2*a));
    }    
}
