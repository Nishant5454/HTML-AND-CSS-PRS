var temp=document.querySelector("#centre"); 
temp.addEventListener("mousemove",function(details){ 
    var rec=temp.getBoundingClientRect(); 
    var insiderec=details.clientX-rec.left; 
    if(insiderec<rec.width/2){
        var red=gsap.utils.mapRange(0,rec.width/2,255,0,insiderec);
        
    
        gsap.to(temp,{ backgroundColor:`rgb(${red},0,0)`,ease:Power4,}); 
    }
    else{  
        var blue=gsap.utils.mapRange(rec.width/2,rec.width,0,255,insiderec);   
        gsap.to(temp,{backgroundColor:`rgb(0,0,${blue})`,ease:Power4,}); 

    


    }
});
