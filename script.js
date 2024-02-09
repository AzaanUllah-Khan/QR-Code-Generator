var bgC = "255,255,255"
var colorS = "0,0,0"
var formatS = "png"
var qrdata
function genQR(format){
    const buttons = document.querySelectorAll('button.s');
    qrdata = document.getElementById("input").value
    formatS = format
    const icons = document.querySelectorAll('i');
    icons.forEach(icons => {
      icons.addEventListener('click', function() {
        const currentActive = document.querySelector('i.active');
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        this.classList.add('active');
      });
    });    
    buttons.forEach(buttons => {
      buttons.addEventListener('click', function() {
        const currentActive = document.querySelector('button.active');
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        this.classList.add('active');
      });
    });

    if(qrdata){
        document.getElementById("img").src = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&color=${colorS}&format=${formatS}&bgcolor=${bgC}&data=${qrdata}`
    }
}
function changeColor(color){
    if(qrdata){
        colorS = color
        document.getElementById("img").src = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&color=${colorS}&format=${formatS}&bgcolor=${bgC}&data=${qrdata}`
    }
    else{
        document.getElementById("input").style.backgroundColor = "#ff5f5f2b"
        setTimeout(()=>{
            document.getElementById("input").style.backgroundColor = "transparent"
        },1000)
    }
}
function changeBG(bg){
    if(qrdata){
        bgC = bg
        document.getElementById("img").src = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&color=${colorS}&format=${formatS}&bgcolor=${bgC}&data=${qrdata}`
    }
    else{
        document.getElementById("input").style.backgroundColor = "#ff5f5f2b"
        setTimeout(()=>{
            document.getElementById("input").style.backgroundColor = "transparent"
        },1000)
    }
}
function changeD(what){
    document.getElementById("destinition").innerText = what
}