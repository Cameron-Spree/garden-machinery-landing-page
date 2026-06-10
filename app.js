/**
 * Briants of Risborough - Garden Machinery Landing Page Scripts
 * Manages interactive components like accordions, tabs, and brand slider events
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. FAQ Accordion Logic
       ========================================================================== */
    const faqItems = document.querySelectorAll('#briants-landing-page .faq-item');
    
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        
        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items first
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-content').style.maxHeight = null;
                }
            });
            
            // Toggle active state of clicked item
            if (isActive) {
                item.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                // Set max-height to scrollHeight to animate opening smoothly
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    /* ==========================================================================
       2. Workshop Services Interactive Tabs
       ========================================================================== */
    const tabButtons = document.querySelectorAll('#briants-landing-page .tab-btn');
    const tabPanels = document.querySelectorAll('#briants-landing-page .tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Update active state of buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding panel and hide others
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                
                // Show if it matches target
                if (panel.id === `tab-${targetTab}`) {
                    panel.classList.add('active');
                }
            });
        });
    });

    /* ==========================================================================
       3. Brand Slider Hover Pause Control
       ========================================================================== */
    const brandTrack = document.querySelector('#briants-landing-page .brand-track');
    
    if (brandTrack) {
        brandTrack.addEventListener('mouseenter', () => {
            brandTrack.style.animationPlayState = 'paused';
        });
        
        brandTrack.addEventListener('mouseleave', () => {
            brandTrack.style.animationPlayState = 'running';
        });
    }

    /* ==========================================================================
       4. Smooth Scroll for Anchor Links
       ========================================================================== */
    const anchorLinks = document.querySelectorAll('#briants-landing-page a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Smoothly scroll to the target element
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
