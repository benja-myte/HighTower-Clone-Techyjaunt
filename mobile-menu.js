/**
 * Mobile Menu Handler
 * Manages the mobile navigation menu functionality including:
 * - Toggle menu open/close
 * - Handle menu button state
 * - Handle click events
 * - Manage accessibility
 */

class MobileMenuHandler {
    constructor() {
        // DOM Elements
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.nav = document.querySelector('.navbar nav');
        this.navLinks = document.querySelectorAll('#nav-menu a');
        
        // State
        this.isMenuOpen = false;
        
        // Bind methods
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        
        // Initialize
        this.init();
    }
    
    init() {
        // Set up event listeners
        this.menuBtn.addEventListener('click', this.handleMenuClick);
        document.addEventListener('click', this.handleDocumentClick);
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.handleLinkClick);
        });
        this.nav.addEventListener('click', e => e.stopPropagation());
        
        // Set initial ARIA attributes
        this.menuBtn.setAttribute('aria-label', 'Open menu');
        this.menuBtn.setAttribute('aria-expanded', 'false');
    }
    
    openMenu() {
        this.nav.classList.add('nav-active');
        this.menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        this.menuBtn.setAttribute('aria-label', 'Close menu');
        this.menuBtn.setAttribute('aria-expanded', 'true');
        this.isMenuOpen = true;
    }
    
    closeMenu() {
        this.nav.classList.remove('nav-active');
        this.menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        this.menuBtn.setAttribute('aria-label', 'Open menu');
        this.menuBtn.setAttribute('aria-expanded', 'false');
        this.isMenuOpen = false;
    }
    
    handleMenuClick(e) {
        e.stopPropagation();
        this.isMenuOpen ? this.closeMenu() : this.openMenu();
    }
    
    handleDocumentClick(e) {
        if (this.isMenuOpen && !e.target.closest('.navbar nav') && !e.target.closest('.mobile-menu-btn')) {
            this.closeMenu();
        }
    }
    
    handleLinkClick() {
        if (this.isMenuOpen) {
            this.closeMenu();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenuHandler();
});
