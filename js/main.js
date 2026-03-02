<script>
        document.getElementById('current-year').textContent = new Date().getFullYear();
    </script>


    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.animate-on-scroll');

            if (!items.length) return;

            const observer = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target); // csak egyszer
                        }
                    });
                },
                {
                    threshold: 0.2
                }
            );

            items.forEach(item => observer.observe(item));
        });
    </script>



    <script>
        const navbarButton = document.getElementsByClassName('navbar__hamburger')[0]
        const navbarLinks = document.getElementsByClassName('navbar__menu')[0]

        navbarButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')

        })

        const menuBtn = document.querySelector('.navbar__hamburger');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                menuOpen = true;
            }
            else {
                menuBtn.classList.remove('open');
                menuOpen = false
            }
        })

    </script>

    <script>

        document.querySelectorAll('.portfolio__container').forEach(container => {
            const slides = container.querySelectorAll('.slide');
            const prevBtn = container.querySelector('.btn-prev');
            const nextBtn = container.querySelector('.btn-next');
            let current = 0;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove('is-active');
                    if (i === index) {
                        slide.classList.add('is-active');
                    }
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

    </script>