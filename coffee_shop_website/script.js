let navbar = document.queryselector('.navbar');

document.queryselector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let searchForm = document.queryselector('.search-form');

document.queryselector('#search-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}

let cartItem = document.queryselector('.cart-items-container');

document.queryselector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}
