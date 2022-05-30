
// gototop animation
const goTop = document.querySelector(".topbtn");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            goTop.classList.add("active");
        }else {
            goTop.classList.remove("active");
        }
    })

// navbar animation
    window.addEventListener("scroll", function(){
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
    })