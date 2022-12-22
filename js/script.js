const btn = document.querySelector('.header_inner-burger');
const menu = document.querySelector('.header_inner-items');

// console.log(btn);
// console.log(menu);

btn.addEventListener('click', function() {
    console.log('test')
    if(menu.style.display === 'none') {
        menu.style.display = 'flex'
    }else {
        menu.style.display = 'none'
    }
})