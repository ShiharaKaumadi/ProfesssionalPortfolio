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
    }else if (navBarHeight===navLinksHeight){
        menuBar.style.height=0;
        close.style.display="none";
        menu.style.display="block";
    }
}

toggleIcon.addEventListener("click",navLinks  );

const linkelement = document.querySelectorAll(".link");

linkelement.forEach(function (linkItem){
    linkItem.addEventListener("click",function (item){
        toggleIcon.style.height=0;
        menu.style.display ="block";
        close.style.display="none";
    });
})

/*========================================================*/
/*
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.specs_data`,{origin: 'left', interval: 100})
sr.reveal(`.specs_img`,{origin: 'right'})
*/
/*===================================Skills========================*/
//Skills Section
let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');

for(let i=0; i<imgBx.length; i++){
    imgBx[i].addEventListener('mouseover',function(){
        for(let i=0; i<contentBx.length;i++){
            contentBx[i].className='contentBx';
        }
        document.getElementById(this.dataset.id).className=
            'contentBx active';
        for(let i=0; i<imgBx.length; i++){
            imgBx[i].className='imgBx';
        }
        this.className='imgBx active';
    })
}
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});