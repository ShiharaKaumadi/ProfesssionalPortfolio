

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
const cursor = document.querySelector(".cursor-skill");
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});

/*============================================================================================================*/
/* Projects Section*/

$(document).ready(function(){

    $('.buttonsP').click(function(){

        $(this).addClass('act').siblings().removeClass('act');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.imageP').show(400);
        }else{
            $('.imageP').not('.'+filter).hide(200);
            $('.imageP').filter('.'+filter).show(400);
        }

    });

    $('.projects-section').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

});

/*=====================================================================================================================*/