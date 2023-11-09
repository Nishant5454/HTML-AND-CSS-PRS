const butttonel=document.getElementById("but"); 
const diceEl=document.getElementById("dice"); 
const rollhis=document.getElementById("history"); 
let history=[]; 
function rolldice(){ 
    const rollre=Math.floor(Math.random()*6)+1; 
    const diceFace=getdiceFace(rollre); 
    diceEl.innerHTML=diceFace; 
    history.push(rollre); 
    updateHistory();
} 
function updateHistory(){ 
    rollhis.innerHTML=""; 
    for(let i=0;i<historyList.length();i++){ 
        const listitem=document.createElement("li"); 
        listitem.innerHTML=`Roll${i+1}:<span>${getDiceFace(history[i])}</span>`; 
        rollhis.appendChild(listitem);

    }
}
function getDiceFace(rollre){ 
    switch (rollResult) {
        case 1:
          return "&#9856;";
        case 2:
          return "&#9857;";
        case 3:
          return "&#9858;";
        case 4:
          return "&#9859;";
        case 5:
          return "&#9860;";
        case 6:
          return "&#9861;";
        default:
          return "";
}
}
butttonel.addEventListener("click",()=>{ 
    diceEl.classList.add("roll-animation"); 
    setTimeout(()=>{ 
        diceEl.classList.remove("roll-animation");
        rolldice();
    },1000);
}); 
