let iamge=document.getElementById("imge");
let imagebox=document.getElementById("box");
let placehod=document.getElementById("place"); 
function generate(){
    imagebox.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+iamge.value;
    iamge.classList.add("showimg");
}