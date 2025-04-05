let h1=document.querySelector("h1");

h1.addEventListener("mouseover",function(){
    h1.style.color="darkgreen";
    h1.style.fontSize="50px";
    h1.style.transition="all 0.5s ease-in-out";
    h1.style.transform="rotate(360deg)";
})

h1.addEventListener("mouseout",function(){
    h1.style.color="yellow";
    h1.style.fontSize="50px";
    h1.style.transition="all 0.5s ease-in-out";
    h1.style.transform="rotate(360deg)";
})