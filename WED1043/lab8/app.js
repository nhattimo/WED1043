var vid = document.getElementById('video')
var btn = document.getElementsByTagName('button')
console.log(btn[5])
function playVideo(){
    vid.play();
}
function pausedVideo(){
    vid.pause();
}
function stopVideo(){
    vid.pause();
    if(vid.currentTime){vid.currentTime = 0}
}
function volumeup(){
    if(vid.volume < 1){
        vid.volume = parseFloat(vid.volume + 0.1).toFixed(1)
    }
}
function volumedown(){
    if(vid.volume > 0){
        vid.volume = parseFloat(vid.volume - 0.1).toFixed(1)
    }
}
function loopvideo(){
    if(vid.loop){
        vid.loop = false;
        btn[5].innerText = 'On loop play'
    }else{
        vid.loop = true;
        btn[5].innerText = 'Off loop play'
    }
}