const key="c47ecafe6cd248f645849bf55bcde6a5"; 
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const searchbtn=document.querySelector(".search input");
const btn=document.querySelector(".search button");

async function checkweather(city){
    const response=await fetch(url+city+`&appid=${key}`);
    var data=await response.json();
    document.querySelector(".name").innerHTML=data.name; 
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"; 


}
btn.addEventListener("click",()=>{
    checkweather(searchbtn.value);
})


