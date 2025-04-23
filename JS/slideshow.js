document.addEventListener('DOMContentLoaded', function() {
    // Slideshow
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 segundos
    
    // Iniciar slideshow automático
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Parar slideshow automático
    function stopSlideShow() {
        clearInterval(slideInterval);
    }
    
    // Mostrar slide específico
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Próximo slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Slide anterior
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', function() {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            stopSlideShow();
            startSlideShow();
        });
    });
    
    // Pausar slideshow quando o mouse estiver sobre ele
    const slideshow = document.querySelector('.slideshow');
    slideshow.addEventListener('mouseenter', stopSlideShow);
    slideshow.addEventListener('mouseleave', startSlideShow);
    
    // Iniciar slideshow
    startSlideShow();
});