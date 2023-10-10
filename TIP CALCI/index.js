const btnEl=document.getElementById("Calculate");  
const billip=document.getElementById("bill"); 
const tipip=document.getElementById("tip");  
const totalspan=document.getElementById("total")
function totalva(){ 
    const billval=billip.value; 
    const tipval=tipip.value; 
    const totalvalue=billval*(1+tipval/100); 
    totalspan.innerText=totalvalue;

} 
btnEl.addEventListener("click",totalva); 

