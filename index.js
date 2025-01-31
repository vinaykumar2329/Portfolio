const ontop=document.querySelector('.footbtn');
ontop.addEventListener('click',()=>{
    console.log('clicked');  
    window.scrollTo({top:0,behavior:'smooth'});
});