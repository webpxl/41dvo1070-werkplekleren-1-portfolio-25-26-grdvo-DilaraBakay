const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(function(reveal) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();