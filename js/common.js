const cusNav = document.querySelector(".custom-navbar");
const cancelBtn = document.querySelector(".cancel-btn");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = () => {
    cusNav.classList.add("show");
}

cancelBtn.onclick = () => {
    cusNav.classList.remove("show");
}


window.onscroll = () => {
    this.scrollY > 20 
    ? cusNav.classList.add("sticky") 
    : cusNav.classList.remove("sticky");
}