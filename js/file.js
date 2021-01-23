document.querySelector(".plus-icon").addEventListener("click", function () {
    if (this.dataset.list === "open") {
        document.querySelector(".mylist-menu").style.display = "none";
        this.dataset.list = "close";
        this.classList.remove("fa-times");
        this.classList.add("fa-plus");
    } else if (this.dataset.list === "close") {
        document.querySelector(".mylist-menu").style.display = "block";
        this.dataset.list = "open";
        this.classList.remove("fa-plus");
        this.classList.add("fa-times");
    }
});
document.querySelector(".close-icon").addEventListener("click", function () {
    document.querySelector(".menu-links").style.top = "-100%";
});
document.querySelector(".icon").addEventListener("click", function () {
    document.querySelector(".menu-links").style.top = "0";
});

window.onscroll = function () {
    if (window.scrollY >= 60 ) {
    document.querySelector(".nav1").style.display = "none";
    document.querySelector(".line").style.display = "none";
    document.querySelector(".nav2").style.position = "fixed";
    document.querySelector(".nav2").style.width = "100%";
    }
    if(window.scrollY < 60 ) {
        document.querySelector(".nav1").style.display = "block";
        document.querySelector(".line").style.display = "block";
        document.querySelector(".nav2").style.position = "relative";
        document.querySelector(".nav2").style.width = "100%";
    }
    if (window.scrollY > 500) {
        document.querySelector(".to-top").style.display = "block";
    } else {
        document.querySelector(".to-top").style.display = "none";
    }
}
let toTopButton = document.querySelector(".to-top");
toTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".top-page").scrollIntoView({
        behavior: "smooth"
    });
});
