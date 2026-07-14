// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Wishlist Toggle

const wishlist=document.querySelectorAll(".wishlist");

wishlist.forEach(btn=>{

btn.onclick=()=>{

btn.classList.toggle("active");

}

});