var colerSkin = document.getElementById("setColer");
function setColor(filecss){
    console.log(filecss);
    colerSkin.setAttribute("href",filecss)
}

var containerskin = document.querySelector(".container")
function setcontainer(type){
    var newtype = "container"+ " " + type;
    containerskin.setAttribute("class", newtype);
    console.log(containerskin.setAttribute("class", newtype));
}

var body = document.getElementsByTagName("body")[0];
console.log(body)

function setbackgr(img){
    console.log(img)
    if(img){
        console.log(body,img)
        var imgbody = "background-image: url('"+img+"');";
        console.log(imgbody)
        body.setAttribute("style",imgbody)
    }else{
        body.setAttribute("style",'')
    }
    
}