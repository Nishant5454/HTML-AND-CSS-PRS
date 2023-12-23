const input=document.getElementById("input box");
const listbutton=document.getElementById("list");
function addtask(){
    if(input.value===''){
        alert("Enter the task Please");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value; 
        listbutton.appendChild(li);
        let span=document.createElement("span"); 
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input.value="";
    savedata();
}

listbutton.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList="checked";
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.removeparentElement.remove();
        savedata();
    }

},false);
function savedata(){
    localStorage.setItem("data",listbutton.innerHTML);
}
function showtask(){
    localStorage.getItem("data");
}
showtask();