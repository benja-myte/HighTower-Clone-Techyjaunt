// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Exclude navbar from animations
    document.querySelector('.navbar').style.transform = 'none';
    
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // If element has children to animate
                if (entry.target.hasAttribute('data-animate-children')) {
                    entry.target.querySelectorAll('*').forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                        }, index * 100);
                    });
                }
            }
        });
    }, options);

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });

    // Observe elements with children to animate
    document.querySelectorAll('[data-animate-children]').forEach(element => {
        observer.observe(element);
    });
});
