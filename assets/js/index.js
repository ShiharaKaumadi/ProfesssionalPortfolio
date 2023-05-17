//Responsive NavBar
const toggleIcon =document.querySelector(".nav-toggle");
const menu =document.querySelector(".menu");
const close =document.querySelector(".close");

const menuBar =document.querySelector(".menu-bar");
const menuItems =document.querySelector(".menu-items");

//getBoundingClientReact()
function navLinks(){
    const navBarHeight = menuBar.getBoundingClientRect().height;
    const navLinksHeight = menuItems.getBoundingClientRect().height;

    if(navBarHeight===0){
        menuBar.style.height=`${navLinksHeight}px`;
        close.style.display="block";
        menu.style.display="none";
    }
}