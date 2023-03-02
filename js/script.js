//Togle class active
const navbarNav = document.querySelector('.navbar-nav');

//id menu on click
document.querySelector('#burger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//click di luar navbar untuk menghilangkan class active
const randomClick = document.querySelector('#burger-menu');

document.addEventListener('click', function(e) {
    if(!randomClick.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});