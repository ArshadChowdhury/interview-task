const nav = document.getElementById("hamburger-menu");
const navBar = nav.addEventListener("click", hamburgerMenuOpen);
const hamburgerView = document.getElementById("hamburger-view");


function hamburgerMenuOpen () {
    if(hamburgerView.style.display === "" || hamburgerView.style.display === "none"){
        hamburgerView.style.display = "flex";
    } else {
        hamburgerView.style.display = "none";
    }
    
}