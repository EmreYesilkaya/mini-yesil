// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });

    document.querySelectorAll('.animate-fade-in').forEach((el) => {
        observer.observe(el);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add float animation to product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('float-animation');
    });

    // Form validation for contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Simple validation
            ['name', 'email', 'message'].forEach(field => {
                const input = document.getElementById(field);
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Form submitted successfully!');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Image gallery for products page
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const delayedModal = document.getElementById('delayed-modal');
    const closeDelayedModalButton = document.getElementById('close-delayed-modal');

    // Modalı 10 saniye sonra göster
    setTimeout(() => {
        delayedModal.classList.remove('hidden');
        delayedModal.classList.add('show');
        setTimeout(() => {
            const modalContent = delayedModal.querySelector('.transform');
            modalContent.classList.remove('scale-out');
            modalContent.classList.add('scale-in');
        }, 100);
    }, 10000);

    // Kapatma düğmesi tıklaması
    closeDelayedModalButton.addEventListener('click', closeModal);

    // Modal dışına tıklandığında kapatma
    delayedModal.addEventListener('click', (e) => {
        if (e.target === delayedModal) {
            closeModal();
        }
    });

    function closeModal() {
        const modalContent = delayedModal.querySelector('.transform');
        modalContent.classList.remove('scale-in');
        modalContent.classList.add('scale-out');
        setTimeout(() => {
            delayedModal.classList.remove('show');
            delayedModal.classList.add('hidden');
        }, 500);
    }
});

