const load=document.querySelector('.load');
const temp=document.querySelector('.temp');
const image=document.querySelector('.meme img');
const updateDetails=(url,title,author)=>{
    image.setAttribute("src",url);
    temp.innerHTML=`meme by:${author}`;

};
const genratememe=()=>{
    fetch("https://meme-api.com/gimme").then((response)=>response.json())
    .then((data)=>{
        updateDetails(data.url,data.title,data.author);

    }); 

}; 
load.addEventListener('click',genratememe);
genratememe(); 



