/* =============================================================================
   VESTIGIUM ABOUT CAROUSEL
   Carrusel de imágenes para la sección "About Vestigium"
   ============================================================================= */

class VestigiumCarousel {
    constructor() {
        // Configuration - Add more images here easily
        // about-us1.jpg to about-us9.jpg; alt texts are carousel.photo1-9 in TRANSLATIONS
        this.images = Array.from({ length: 9 }, (_, i) => ({
            src: `src/assets/images/activities/about-us${i + 1}.jpg`,
            altKey: `carousel.photo${i + 1}`
        }));

        this.currentIndex = 0;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 4000; // 4 seconds

        this.init();
    }
    
    /**
     * Initialize the carousel
     */
    init() {
        this.track = document.getElementById('carousel-track');
        this.dotsContainer = document.getElementById('carousel-dots');
        this.prevBtn = document.querySelector('.carousel__btn--prev');
        this.nextBtn = document.querySelector('.carousel__btn--next');
        
        if (!this.track || !this.dotsContainer) {
            console.warn('Carousel elements not found');
            return;
        }
        
        this.createImages();
        this.createDots();
        this.translateLabels();
        document.addEventListener('languageChanged', () => this.translateLabels());
        this.bindEvents();
        this.startAutoSlide();
        this.showSlide(0);
    }
    
    /**
     * Create image elements from the images array
     */
    createImages() {
        this.track.innerHTML = '';
        this.images.forEach((image, index) => {
            const imageElement = document.createElement('div');
            imageElement.className = 'carousel__slide';
            imageElement.innerHTML = `
                <div class="carousel__image-container">
                    <img 
                        src="${image.src}" 
                        class="carousel__image"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='src/assets/images/logo/logo-png.png'; this.alt='Vestigium placeholder image';"
                    />
                </div>
            `;
            this.track.appendChild(imageElement);
        });
    }
    
    /**
     * Create navigation dots
     */
    createDots() {
        this.dotsContainer.innerHTML = '';
        this.images.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel__dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    /**
     * Put the image and dot labels in the current language
     */
    translateLabels() {
        const t = (key) => window.vestigiumLanguageSwitcher?.t(key) ?? '';
        this.track.querySelectorAll('.carousel__image').forEach((image, index) => {
            image.alt = t(this.images[index].altKey);
        });
        this.dotsContainer.querySelectorAll('.carousel__dot').forEach((dot, index) => {
            dot.setAttribute('aria-label', t('carousel.goto').replace('{n}', index + 1));
        });
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Pause auto-slide on hover
        const carousel = document.querySelector('.about__carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoSlide());
            carousel.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.querySelector('.about__carousel:hover')) {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            }
        });
        
        // Touch/Swipe navigation for mobile devices
        this.bindTouchEvents();
    }
    
    /**
     * Bind touch events for swipe navigation
     */
    bindTouchEvents() {
        const carousel = document.querySelector('.about__carousel');
        if (!carousel) return;
        
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        let isSwiping = false;
        
        // Touch start
        carousel.addEventListener('touchstart', (e) => {
            startX = endX = e.touches[0].clientX;
            startY = endY = e.touches[0].clientY;
            isSwiping = true;
            this.pauseAutoSlide();
        }, { passive: true });
        
        // Touch move
        carousel.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            
            endX = e.touches[0].clientX;
            endY = e.touches[0].clientY;
            
            // Prevent default scrolling if horizontal swipe is detected
            const deltaX = Math.abs(endX - startX);
            const deltaY = Math.abs(endY - startY);
            
            if (deltaX > deltaY && deltaX > 10) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Touch end
        carousel.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            isSwiping = false;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Minimum swipe distance (50px) and ensure it's more horizontal than vertical
            if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    // Swipe right - go to previous slide
                    this.prevSlide();
                } else {
                    // Swipe left - go to next slide
                    this.nextSlide();
                }
            }
            
            this.startAutoSlide();
        }, { passive: true });
        
        // Touch cancel
        carousel.addEventListener('touchcancel', () => {
            isSwiping = false;
            this.startAutoSlide();
        }, { passive: true });
    }
    
    /**
     * Show a specific slide
     * @param {number} index - The index of the slide to show
     */
    showSlide(index) {
        const slides = this.track.querySelectorAll('.carousel__slide');
        const dots = this.dotsContainer.querySelectorAll('.carousel__dot');
        
        // Remove active classes
        slides.forEach(slide => slide.classList.remove('carousel__slide--active'));
        dots.forEach(dot => dot.classList.remove('carousel__dot--active'));
        
        // Add active class to current slide and dot
        if (slides[index]) {
            slides[index].classList.add('carousel__slide--active');
        }
        if (dots[index]) {
            dots[index].classList.add('carousel__dot--active');
        }
        
        this.currentIndex = index;
    }
    
    /**
     * Go to the next slide
     */
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        this.goToSlide(nextIndex);
    }
    
    /**
     * Go to the previous slide
     */
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.goToSlide(prevIndex);
    }
    
    /**
     * Go to a specific slide
     * @param {number} index - The index of the slide to show
     */
    goToSlide(index) {
        this.showSlide(index);
        this.startAutoSlide();
    }
    
    /**
     * Start auto-slide functionality
     */
    startAutoSlide() {
        this.pauseAutoSlide();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }
    
    /**
     * Pause auto-slide functionality
     */
    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new VestigiumCarousel());
} else {
    new VestigiumCarousel();
}
