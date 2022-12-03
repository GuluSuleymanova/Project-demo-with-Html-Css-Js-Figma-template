 const watch_button= document.querySelector(".watch-btn");
 const watch_modal =document.querySelector('.watchlist-box');
 const watch_clsbtn =document.querySelector('.close_watch');

 const sign_button= document.querySelector(".sign-btn");
 const sign_modal =document.querySelector('#modal-content');
 const sign_clsbtn =document.querySelector('#close');


    watch_button.addEventListener("click",
    ()=>{
    watch_button.classList.add('active');
    watch_modal.style.display='flex';
    });

    watch_clsbtn.addEventListener("click",
    ()=>{
        watch_button.classList.remove('active');
        watch_modal.style.display='none';
    });



    sign_button.addEventListener("click",
    ()=>{
    sign_modal.style.display ='block';
    sign_button.classList.add('active');  
    });

    sign_clsbtn.addEventListener('click',
    ()=>{
    sign_modal.style.display="none";
    sign_button.classList.remove('active');
    });

    window.addEventListener("click",
    (event)=> {
    if (event.target==sign_modal) {
        sign_modal.style.display='none';
    }
    });



const hamburger_icon=document.querySelector(".hamburger-icon");
const navbar =document.querySelector(".nav-bar");
hamburger_icon.addEventListener("click",()=>{
    navbar.classList.toggle('nav-bar-mobile')

})





