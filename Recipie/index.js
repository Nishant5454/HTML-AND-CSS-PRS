const API_KEY="2ea2026538584c41bcf32e604846d3ec"; 
const food=document.getElementById("recipie-list");
  function displayitem(recipes){ 
    food.innerHTML = ""; 
    recipes.forEach(recipes=> { 
        const fooditem=document.createElement("li"); 
        food.classList.add("reci item"); 
        reciImage1=document.createElement("img"); 
        reciImage1.src=reci.Image;
        reciImage.alt="recipie Image" 


        food.appendChild(fooditem); 

        
    });
  }
 
 
 async function getrecipies(){ 
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`) 
    const data=await response.json(); 
    return data; 

} 
async function init(){ 
    const recipes=await getrecipies(); 
    console.log(recipes);
} 
init();