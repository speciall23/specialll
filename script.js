// ==============================
// LOADING SCREEN
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.pointerEvents = "none";
    }, 2800);

});


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.padding = "15px 6%";
    } else {
        header.style.padding = "25px 6%";
    }

});


// ==============================
// SMOOTH BUTTON
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ==============================
// REVEAL ANIMATION
// ==============================

const sections = document.querySelectorAll(
    ".section, .stats, .project-card, .contact"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// ==============================
// MOUSE PARALLAX FOTO
// ==============================

const image = document.querySelector(".hero-image img");

if (image) {

    document.addEventListener("mousemove", (e) => {

        const x =
            (window.innerWidth / 2 - e.clientX) / 80;

        const y =
            (window.innerHeight / 2 - e.clientY) / 80;

        image.style.transform =
            scale(1.03) translate(${x}px, ${y}px);

    });

}


// ==============================
// BUTTON EFFECT
// ==============================

document.querySelectorAll(".btn, .contact-button").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});


// ==============================
// CONSOLE
// ==============================

console.log("Website berhasil dijalankan 🚀");