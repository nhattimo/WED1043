var getInput = document.getElementById('ten_task');
var getTextarea = document.getElementById('mo_ta');
var getItemList = document.getElementById('item_list'); // lất tất cả các element có class item_list
var getH6=document.getElementsByTagName('h6');

function add(){
    var valueTask = getInput.value;             // lấy value do người dùng nhập ở phần TASK add
    var ValueMoTa = getTextarea.value;          // lấy value do người dùng nhập ở phần mô tả add
    if(valueTask == "" ){     // điều kiện ô nhập task và ô nhập mô tả không được bỏ trống
        getH6[5].setAttribute('class','baoloi');
        getH6[4].removeAttribute('class');
    }else if(valueTask.length < 6){        
        getH6[5].removeAttribute('class');
        getH6[4].setAttribute('class','baoloi');
    }else{
        getH6[4].removeAttribute('class');
        getH6[5].removeAttribute('class');
    }
    if(ValueMoTa == ""){     // điều kiện ô nhập task và ô nhập mô tả không được bỏ trống
        getH6[7].setAttribute('class','baoloi');
        getH6[6].removeAttribute('class');
    }else if(ValueMoTa.length < 20){
        getH6[7].removeAttribute('class');
        getH6[6].setAttribute('class','baoloi');
    }else{  
        getH6[7].removeAttribute('class');
        getH6[6].removeAttribute('class');
        // tạo thẻ div có class ="danh_sach"
        let danh_sach = document.createElement('div');
        danh_sach.setAttribute('class','danh_sach');  
        
        // tạo thẻ div có class ="item_trai"
        let classItem_trai = document.createElement('div');
        classItem_trai.setAttribute('class','item_trai');   

        // tạo thẻ p có 
        //class ="STT"
        class_STT = document.createElement('p');
        class_STT.className = 'STT';  
        class_STT.innerText =`#0${document.getElementsByClassName('danh_sach').length+1}`;               
        //class ="task"
        var class_Task = document.createElement('p');       
        class_Task.className = 'task';                      
        class_Task.innerText = valueTask;             
        //class ="mo_ta"
        var class_Mo_ta = document.createElement('p');      
        class_Mo_ta.className = 'mo_ta';
        class_Mo_ta.innerText = ValueMoTa;

        // tạo thẻ div có  class="item_phai"
        let classItem_phai = document.createElement('div');
        classItem_phai.setAttribute('class','item_phai' );

        // tạo thẻ button 
        // DELETE
        let btnDelete = document.createElement('button');
        btnDelete.innerText='DELETE';
        // EDIT
        let btnEdit = document.createElement('button');
        btnEdit.setAttribute('onclick','myFunction()');
        btnEdit.innerText='EDIT';

        // add các thể đã tạo vào thẻ div có class item ở cuối cùng 
        getItemList.appendChild(danh_sach);
        danh_sach.append(classItem_trai);
        classItem_trai.append(class_STT);
        classItem_trai.append(class_Task);
        classItem_trai.append(class_Mo_ta);
        danh_sach.append(classItem_phai);
        classItem_phai.append(btnDelete);
        classItem_phai.append(btnEdit); 
        
        btnDelete.addEventListener("click", () => {
            getItemList.removeChild(danh_sach);
            // for (let i = 0; i < document.getElementsByClassName('danh_sach').length; i++) {
            //     let a = document.getElementsByClassName('STT')
            //     a[i].setAttribute('innerText','#'+[i])
            // }

        });

        reset();

        popupTask = document.getElementById('popup_ten_task');
        popupMoTa = document.getElementById('popup_mo_ta');
        popudUpdeta = document.getElementById('popud_Updeta');
        popudUpdeta.addEventListener('click',() =>{
            if(popupTask.value == "" ){     // điều kiện ô nhập task và ô nhập mô tả không được bỏ trống
                getH6[0].removeAttribute('class')
                getH6[1].setAttribute('class','baoloi');
            }else if(popupTask.value.length < 6){ 
                getH6[1].removeAttribute('class')     
                getH6[0].setAttribute('class','baoloi');
                
            }else{
                getH6[1].removeAttribute('class');
                getH6[0].removeAttribute('class');
            }
            if(popupMoTa.value == ""){     // điều kiện ô nhập task và ô nhập mô tả không được bỏ trống
                getH6[3].setAttribute('class','baoloi');
                getH6[2].removeAttribute('class');
            }else if(popupMoTa.value.length < 20){
                getH6[3].removeAttribute('class');
                getH6[2].setAttribute('class','baoloi');
            }else{
                getH6[2].removeAttribute('class');
                getH6[3].removeAttribute('class');
                class_Task.innerText = popupTask.value;
                class_Mo_ta.innerText = popupMoTa.value;
                resetPopup();
            }
        });
    }
}
function reset(){
    getH6[4].removeAttribute('class');
    getH6[5].removeAttribute('class');
    getH6[6].removeAttribute('class');
    getH6[7].removeAttribute('class');
    getInput.value ="";
    getTextarea.value ="";
}
function resetPopup(){
    getH6[0].removeAttribute('class');
    getH6[1].removeAttribute('class');
    getH6[2].removeAttribute('class');
    getH6[3].removeAttribute('class');
    popupTask.value ="";
    popupMoTa.value ="";
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    var getboxpopud=document.getElementsByTagName('div');
    getboxpopud[0].classList.add("box");
}
function myFunction1() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    var getboxpopud=document.getElementsByTagName('div');
    getboxpopud[0].setAttribute('class','box_popud');
}








