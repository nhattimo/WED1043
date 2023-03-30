var getInput = document.getElementsByTagName('input')
var getTextarea = document.getElementsByTagName('textarea')
var getitem = document.querySelectorAll('.item')
var myArray = [];
addDanhSach();
var dem = 0;
function add(){
    var getDanhSachSTT = document.querySelectorAll('.STT')
    var getDanhSachtask = document.querySelectorAll('.task')
    var getDanhSachmo_ta = document.querySelectorAll('.mo_ta')
    
    var task = getInput[1].value;       // lấy value do người dùng nhập ở phần TASK add
    var moTa = getTextarea[1].value;    // lấy value do người dùng nhập ở phần mô tả add
    if(task == "" || moTa == ""){
        alert('bạn không được để trống ô nào');
        return;
    }
    // điều kiện nhập phải Task phải lớn hơn 5 ký tự
    if(task.length < 5){
        alert("Yêu cầu nhập task lớn hơn 5 ký tự")
        return;
    }
    // điều kiện nhập mô ta phải lớn hơn 20 ký tự
    if(moTa.length < 20){
        alert("Yêu cầu nhập mô tả lớn hơn 20 ký tự")
        return;
    }else{
        addDanhSach();
        for (let i = dem ; i <=dem; i++) {
            dem ++;
            console.log(i)
            getDanhSachSTT[i].innerText = `# ${i+1}`;
            console.log(getDanhSachSTT[i].innerText)
            getDanhSachtask[i].innerText = getInput[1].value;
            getDanhSachmo_ta[i].innerText = getTextarea[1].value;
            break;
        }
    }   
}
function deleteDanhSach(deletee){
    var con = document.getElementsByClassName('item')[4];
    var chill = con.getElementsByClassName('danh_sach');
    con.removeChild(chill[length])
}


  function editPopud(editp){
    console.log('dd',editp)
    var task_edit = getInput[0].value;       // lấy value do người dùng nhập ở phần TASK edit
    var moTa1_edit = getTextarea[0].value;    // lấy value do người dùng nhập ở phần mô tả edit
    // điều kiện không được bỏ tróng
    if(task_edit == "" || moTa1_edit == ""){
        alert('bạn không được để trống');
        return;
    }
    // điều kiện nhập phải Task phải lớn hơn 5 ký tự
    if(task_edit.length < 5){
        alert("Yêu cầu nhập task lớn hơn 5 ký tự")
        return;
    }
    // điều kiện nhập mô ta phải lớn hơn 20 ký tự
    if(moTa1_edit.length < 20){
        alert("Yêu cầu nhập mô tả lớn hơn 20 ký tự")
    }else{
        for (let i = dem ; i <=dem; i++) {
            dem ++;
            console.log(i)
            getDanhSachSTT[i].innerText = `# ${i+1}`;
            console.log(getDanhSachSTT[i].innerText)
            getDanhSachtask[i].innerText = getInput[0].value;
            getDanhSachmo_ta[i].innerText = getTextarea[0].value;
            break;
        }
    }
}
function reset(){
    document.getElementsByTagName('input')[1].value ="";
    document.getElementsByTagName('textarea')[1].value ="";
}
function resetPopup(){
    document.getElementsByTagName('input')[0].value ="";
    document.getElementsByTagName('textarea')[0].value ="";
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function addDanhSach(){
    console.log('___________________________________________________________');
    const layItem = document.querySelectorAll('.item') ;// truy xuất đến class item và dùng item cuối cùng

    // tạo thẻ div class danh_sach
    const danh_sach = document.createElement('div');
    danh_sach.setAttribute('class','danh_sach');

    // tạo thẻ div class item_trai
    const classItem_trai = document.createElement('div');
    classItem_trai.setAttribute('class','item_trai');

    // tạo thẻ p class STT
    var class_STT = document.createElement('p');
    class_STT.className = 'STT';
    class_STT.innerText='...';
    // tạo thẻ p class task
    var class_Task = document.createElement('p');
    class_Task.className = 'task';
    class_Task.innerText='...............';
    // tạo thẻ p class mo_ta
    var class_Mo_ta = document.createElement('p');
    class_Mo_ta.className = 'mo_ta';
    class_Mo_ta.innerText='...........................................................................................';

    // tạo thẻ div class item_trai
    const classItem_phai = document.createElement('div');
    classItem_phai.setAttribute('class','item_phai' );
    // tạo thẻ buton 
    const btnDelete = document.createElement('button');
    btnDelete.setAttribute('onclick','deleteDanhSach(this)');
    btnDelete.innerText='DELETE';
    // tạo thẻ buton 
    const btnEdit = document.createElement('button');
    btnEdit.setAttribute('onclick','myFunction()');
    btnEdit.innerText='EDIT';



    layItem[4].appendChild(danh_sach); // add danh sách vào boxx class item
    // console.log("lấy item4",layItem[4])
    danh_sach.append(classItem_trai);
    classItem_trai.append(class_STT);
    classItem_trai.append(class_Task);
    classItem_trai.append(class_Mo_ta);
    danh_sach.append(classItem_phai);
    classItem_phai.append(btnDelete);
    classItem_phai.append(btnEdit);
    console.log('Kết quả của 1 danh box danh sách đc tạo\n',danh_sach);
}







