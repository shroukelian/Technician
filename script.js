/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        mobileMenuBtn.classList.toggle("active");

    });


    // إغلاق القائمة عند الضغط على أي رابط
    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            mobileMenuBtn.classList.remove("active");

        });

    });

}


/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

const header = document.querySelector(".site-header");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".tech-service-card, .tech-gallery-item, .contact-box"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   PHONE / WHATSAPP CLICK TRACKING
========================================= */

const contactLinks = document.querySelectorAll(
    'a[href^="tel:"], a[href*="wa.me"]'
);

contactLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Contact clicked:", this.href);

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} فني سباكة وكهرباء في جدة — جميع الحقوق محفوظة`;

}