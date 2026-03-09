document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       Aktuális év
    ========================== */
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================
       Scroll animáció (IntersectionObserver)
    ========================== */
    const animatedItems = document.querySelectorAll('.animate-on-scroll');

    if (animatedItems.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        animatedItems.forEach(item => observer.observe(item));
    }


    /* =========================
       Hamburger menü
    ========================== */
    const menuBtn = document.querySelector('.navbar__hamburger');
    const navbarLinks = document.querySelector('.navbar__menu');

    if (menuBtn && navbarLinks) {
        menuBtn.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');

            // accessibility
            const isOpen = menuBtn.classList.contains('open');
            menuBtn.setAttribute('aria-expanded', isOpen);
        });
    }





    /* =========================
      FAQ opener
   ========================== */
    const questions = document.querySelectorAll(".faq__question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle("active");
        });
    });





    /* =========================
       Portfolio slider
    ========================== */
    document.querySelectorAll('.portfolio__container').forEach(container => {

        const slides = container.querySelectorAll('.slide');
        const prevBtn = container.querySelector('.btn-prev');
        const nextBtn = container.querySelector('.btn-next');

        if (!slides.length || !prevBtn || !nextBtn) return;

        let current = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('is-active', i === index);
            });
        }

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        showSlide(current);
    });

});