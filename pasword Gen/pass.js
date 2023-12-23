const box=document.getElementById("place");
const length=18; 
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const symbl="!@#$%^&*(+>?<=-)"; 
const char=upper+lower+num+symbl;
function create(){
    let password="";
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=symbl[Math.floor(Math.random()*symbl.length)];
    while(length>password.length){
        password+=char[Math.floor(Math.random()*char.length)];

    }
    box.value=password; 

}
function copybox(){
    box.Select();
    document.execCommand("copy");

}