function toogleMenu(){
    const menu = document.querySelector('.menu');
    if(!menu) return;
    if ([...menu.classList].includes('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}