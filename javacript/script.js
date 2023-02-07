let menuIcon = document.querySelector('#icon-menu')
let navList = document.querySelector('#menu-list')


menuIcon.addEventListener('click',()=>{
        if(navList.style.display == 'flex'){
            navList.style.display = 'none'
        }else{
            navList.style.display = 'flex'
        }
        
        
})