        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        // Testimonial Carousel
        const testimonials = document.querySelectorAll('.testimonial');
        const buttons = document.querySelectorAll('.testimonial-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                
                // Update active testimonial
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                testimonials[index].classList.add('active');
                
                // Update active button
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // Auto-rotate testimonials
        let testimonialIndex = 0;
        function rotateTestimonials() {
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[testimonialIndex].classList.add('active');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            buttons[testimonialIndex].classList.add('active');
        }
        
        setInterval(rotateTestimonials, 5000);

        // Form Validation
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // In a real application, you would send the form data to a server
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });