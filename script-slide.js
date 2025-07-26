/**
 * ScrollAnimationHandler
 * Manages scroll-based animations including:
 * - Section reveal animations
 * - Slide-in animations from different directions
 * - Handles scroll performance optimization
 */

class ScrollAnimationHandler {
    constructor() {
        // Configuration
        this.config = {
            revealPoint: 120,
            throttleDelay: 100  // Milliseconds
        };

        // State
        this.lastScrollTime = 0;
        
        // Bind methods
        this.handleScroll = this.throttle(this.animateElements.bind(this), this.config.throttleDelay);
        
        // Initialize
        this.init();
    }
    
    init() {
        // Set up event listeners
        document.addEventListener('DOMContentLoaded', () => this.animateElements());
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
    }
    
    throttle(func, limit) {
        return () => {
            const now = Date.now();
            if (now - this.lastScrollTime >= limit) {
                func();
                this.lastScrollTime = now;
            }
        };
    }
    
    isElementInView(element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        return elementTop < windowHeight - this.config.revealPoint;
    }
    
    animateElements() {
        // Handle reveal-on-scroll sections
        document.querySelectorAll('.reveal-on-scroll').forEach(section => {
            if (this.isElementInView(section)) {
                section.classList.add('visible');
            }
        });

        // Handle slide-in elements
        document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up').forEach(element => {
            if (this.isElementInView(element)) {
                element.classList.add('visible');
            }
        });
    }
}

// Initialize the animation handler
new ScrollAnimationHandler();
