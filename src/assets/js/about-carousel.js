/* =============================================================================
   VESTIGIUM ABOUT CAROUSEL
   Carrusel de imágenes para la sección "About Vestigium"
   ============================================================================= */

class VestigiumCarousel {
    constructor() {
        // Configuration - Add more images here easily
        this.images = [
            {
                src: 'src/assets/images/activities/about-us1.jpg',
                alt: 'Group lying head to head on colourful blankets in the grass'
            },
            {
                src: 'src/assets/images/activities/about-us2.jpg',
                alt: 'Group in long skirts, arms around each other, looking over a green valley'
            },
            {
                src: 'src/assets/images/activities/about-us3.jpg',
                alt: 'Smiling person holding an embroidery hoop in the community space'
            },
            {
                src: 'src/assets/images/activities/about-us4.jpg',
                alt: 'Two people standing among crops in a polytunnel'
            },
            {
                src: 'src/assets/images/activities/about-us5.jpg',
                alt: 'Circle of joined hands seen from below against the sky'
            },
            {
                src: 'src/assets/images/activities/about-us6.jpg',
                alt: 'Person smiling and holding up a single blueberry'
            },
            {
                src: 'src/assets/images/activities/about-us7.jpg',
                alt: 'Person sitting cross-legged in a sunlit meadow'
            },
            {
                src: 'src/assets/images/activities/about-us8.jpg',
                alt: 'Person holding a round green sign at an outdoor market'
            },
            {
                src: 'src/assets/images/activities/about-us9.jpg',
                alt: 'Hand picking seed packets from a wooden box'
            },
        ];
        
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
                        alt="${image.alt}"
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
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
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
        this.restartAutoSlide();
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
    
    /**
     * Restart auto-slide functionality
     */
    restartAutoSlide() {
        this.startAutoSlide();
    }
    
    /**
     * Add a new image to the carousel
     * @param {Object} imageData - Image data object with src and alt properties
     */
    addImage(imageData) {
        this.images.push(imageData);
        this.createImages();
        this.createDots();
        this.showSlide(this.currentIndex);
    }
    
    /**
     * Remove an image from the carousel
     * @param {number} index - The index of the image to remove
     */
    removeImage(index) {
        if (index >= 0 && index < this.images.length) {
            this.images.splice(index, 1);
            this.createImages();
            this.createDots();
            if (this.currentIndex >= this.images.length) {
                this.currentIndex = 0;
            }
            this.showSlide(this.currentIndex);
        }
    }
    
    /**
     * Update carousel settings
     * @param {Object} settings - Settings object
     */
    updateSettings(settings) {
        if (settings.autoSlideDelay) {
            this.autoSlideDelay = settings.autoSlideDelay;
            this.restartAutoSlide();
        }
    }
    
    /**
     * Destroy the carousel and clean up event listeners
     */
    destroy() {
        this.pauseAutoSlide();
        
        // Remove event listeners
        if (this.prevBtn) {
            this.prevBtn.removeEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.removeEventListener('click', () => this.nextSlide());
        }
        
        const carousel = document.querySelector('.about__carousel');
        if (carousel) {
            carousel.removeEventListener('mouseenter', () => this.pauseAutoSlide());
            carousel.removeEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        // Clear DOM
        if (this.track) {
            this.track.innerHTML = '';
        }
        if (this.dotsContainer) {
            this.dotsContainer.innerHTML = '';
        }
    }
}

/**
 * Initialize the carousel when DOM is ready
 */
function initVestigiumCarousel() {
    if (window.vestigiumCarousel) {
        window.vestigiumCarousel.destroy();
    }
    window.vestigiumCarousel = new VestigiumCarousel();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVestigiumCarousel);
} else {
    initVestigiumCarousel();
}

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VestigiumCarousel;
}

/* =============================================================================
   USAGE EXAMPLES
   ============================================================================= */

/*
// Example: Add a new image dynamically
window.vestigiumCarousel.addImage({
    src: 'src/assets/images/activities/new-activity.jpg',
    alt: 'Description of new activity'
});

// Example: Remove an image
window.vestigiumCarousel.removeImage(2); // Remove the third image (index 2)

// Example: Change auto-slide delay to 6 seconds
window.vestigiumCarousel.updateSettings({
    autoSlideDelay: 6000
});

// Example: Manually control the carousel
window.vestigiumCarousel.nextSlide();
window.vestigiumCarousel.prevSlide();
window.vestigiumCarousel.goToSlide(3); // Go to the fourth slide
*/
