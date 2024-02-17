let list = document.getElementById('list');
let menu =document.getElementById('baricon');
let cut =document.getElementById('cross');

function showmenu(){
    list.style.right='0';
    menu.style.display='none';
}

function closemenu(){
    list.style.right='-150px';
    menu.style.display='block';
}