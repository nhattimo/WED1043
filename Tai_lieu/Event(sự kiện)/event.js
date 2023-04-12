var a = document.querySelector('h1');
a.onclick = function(){ // khi a click thì sẽ thực hiện function
    console.log(Math.random());
    console.log("hello men")
} 

// DOM events
// 1. Input / select
// 2. Key up / down
var bienLuuTru;
var b = document.querySelector('input[type="text"]');

// b.onchange = function(e){ 
b.oninput = function(e){ // gõ đến đâu ăn đến dấy
   bienLuuTru = e.target.value
}

var c = document.querySelector('input[type="checkbox"]');
b.onchange = function(e){ // gõ đến đâu ăn đến dấy
    console.log(e.target.checked)
}
