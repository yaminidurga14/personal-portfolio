//SHOW MENU
const showMenu=(toggleId, navId)=>{
    const toggle =document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle','nav_menu')

// ACTIVATE & REMOVE ACTIVATE
const navlink =document.querySelectorAll('.nav_link')
navlink.forEach(n =>n.classList.remove('active'))
function linkAction(){
    navlink.forEach(n =>n.classList.remove('active'))
    this.classList.add('active')
    const navmenu= document.getElementById('nav_menu')
    navmenu.classList.remove('show')
}



nav_link.forEach(n =>n.addEventListener('click',linkAction))