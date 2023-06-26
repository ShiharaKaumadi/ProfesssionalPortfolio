function openDropDownMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const closeIcon = document.getElementsByClassName('close');
    dropdownMenu.style.display = 'block';
    // Clear any existing content
    dropdownMenu.innerHTML = '';

    // Create and append menu items
    const menuItems = document.querySelectorAll('.link');
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('a');
        menuItem.textContent = item.textContent;
        menuItem.href = item.href;
        dropdownMenu.appendChild(menuItem);

        // Add separator except for the last item
        if (index < menuItems.length - 1) {
            const separator = document.createElement('div');
            separator.classList.add('separator');
            dropdownMenu.appendChild(separator);
        }
    });

    dropdownMenu.style.display = 'block';

    closeIcon.style.display = 'block';
}

function closeDropDownMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const closeIcon = document.getElementsByClassName('close');
    const menuIcon = document.getElementsByClassName('menu');

    dropdownMenu.style.display = 'none';
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
}


/*//getBoundingClientReact()
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

const linkelement = document.querySelectorAll(".link");*/




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