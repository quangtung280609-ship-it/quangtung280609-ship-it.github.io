// ==========================
// Sticky Navbar
// ==========================

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });
});

// ==========================
// Reveal Elements on Scroll
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".project-card, .skill, .event"
).forEach(el => observer.observe(el));

// ==========================
// Typing Effect
// ==========================

const text =
"Researcher • IoT Developer • Robotics Enthusiast";

const typingTarget =
document.querySelector(".hero h2");

let i = 0;

function typing() {

    if (!typingTarget) return;

    if (i < text.length) {

        typingTarget.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 60);

    }

}

if (typingTarget) {
    typingTarget.innerHTML = "";
    typing();
}

// ==========================
// Counter Animation
// ==========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});

// ==========================
// Back To Top Button
// ==========================

const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.id = "backToTop";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

});

btn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// Contact Form
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        alert(
            "Cảm ơn bạn đã liên hệ! Tin nhắn đã được gửi."
        );

        form.reset();

    });

}

// ==========================
// Current Year Footer
// ==========================

const year = document.querySelector("#year");

if (year) {
    year.textContent =
    new Date().getFullYear();
}
