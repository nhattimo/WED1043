 function send(){
    var getInput = document.getElementsByTagName('input')
    var getTextarea = document.getElementsByTagName('textarea')
    var task = getInput[0].value;
    var moTa = getTextarea[0].value;
    console.log(getInput[0].value)
    console.log(getInput)
    console.log(getTextarea[0].value)
    console.log(getTextarea)
    // điều kiện không được bỏ tróng
    if(task == "" || moTa == ""){
        alert('bạn không được để tróng');
        return;
    }
    if(task.length < 5){
        alert("Yêu cầu nhập task lớn hơn 5 ký tự")
        return;
    }
    if(moTa.length < 20){
        alert("Yêu cầu nhập mô tả lớn hơn 20 ký tự")
    }
 }
 function reset(){
    var resetInput1 = document.getElementsByTagName('input')[0].value ="";
    var resetTextarea1 = document.getElementsByTagName('textarea')[0].value ="";
    // resetInput1[0].value ="";
    // resetTextarea1[0].value ="";
 }
 function edit(){
    alert("bạn đang edit")
 }

 function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
