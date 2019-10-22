const menu = document.getElementById('menu');
menu.addEventListener('click',function(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.position = "fixed";
    sidebar.style.right = "0px";
    sidebar.style.top = "0px";
})

const close = document.querySelector('.close');
close.addEventListener('click',function(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.position = "fixed";
    sidebar.style.right = "-200px";
    sidebar.style.top = "0px";
})