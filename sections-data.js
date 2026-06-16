// Briants of Risborough - Sections Template Data
// This file stores the isolated HTML, CSS, and JS code for each section,
// allowing the Dashboard to preview and serve them individually.

const SECTIONS_DATA = [
  {
    id: "global",
    name: "Global Styles & Resets",
    category: "Base Styles",
    description: "Core CSS variables, resets, typography, and button systems that should be included in your WordPress theme's main stylesheet (e.g. style.css or Customizer Additional CSS) for sections to render correctly.",
    html: `<!-- Global Theme styles only. No HTML needed here. Include the CSS once in your WordPress environment. -->`,
    js: "",
    css: `/* ==========================================================================
   Briants Theme - Core Variables & Resets
   ========================================================================== */

:root {
    --briants-primary: #005c30;         /* Deep Forest Green */
    --briants-primary-hover: #004524;   /* Darker Forest Green */
    --briants-accent: #d2a138;          /* Warm Golden Gold */
    --briants-accent-hover: #b88a2f;    /* Darker Gold */
    --briants-text-dark: #1e293b;       /* Dark Charcoal for high readability */
    --briants-text-light: #576574;      /* Muted slate text */
    --briants-bg-light: #f4f6f5;        /* Light grey-green background */
    --briants-bg-white: #ffffff;
    --briants-tint-green: #e9f3ef;      /* Soft light-green badge highlight */
    --briants-border: #cbd5e1;          /* Clean border outline */
    
    --briants-font-headings: 'Poppins', sans-serif;
    --briants-font-body: 'Libre Franklin', sans-serif;
    
    --briants-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
    --briants-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
    --briants-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    
    --briants-radius-sm: 0.25rem;
    --briants-radius-md: 0.375rem;
    --briants-radius-lg: 0.5rem;
    --briants-radius-xl: 0.75rem;
    
    --briants-transition: all 0.25s ease;
}

/* Base resets specifically targeted to the landing modules */
.briants-module {
    font-family: var(--briants-font-body);
    color: var(--briants-text-dark);
    line-height: 1.6;
    box-sizing: border-box;
}

.briants-module *, 
.briants-module *::before, 
.briants-module *::after {
    box-sizing: inherit;
}

.briants-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3.5rem 1.5rem;
}

/* Buttons System */
.briants-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: var(--briants-font-headings);
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    padding: 0.7rem 1.5rem;
    border-radius: var(--briants-radius-sm);
    transition: var(--briants-transition);
    cursor: pointer;
    border: 2px solid transparent;
}

.briants-btn-lg {
    padding: 0.85rem 1.75rem;
    font-size: 1rem;
}

.briants-btn-sm {
    padding: 0.45rem 1rem;
    font-size: 0.8rem;
}

.briants-btn-primary {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
}

.briants-btn-primary:hover {
    background-color: var(--briants-primary-hover);
    transform: translateY(-2px);
}

.briants-btn-secondary {
    background-color: var(--briants-accent);
    color: var(--briants-bg-white);
}

.briants-btn-secondary:hover {
    background-color: var(--briants-accent-hover);
    transform: translateY(-2px);
}

.briants-btn-outline {
    background-color: transparent;
    color: var(--briants-primary);
    border-color: var(--briants-primary);
}

.briants-btn-outline:hover {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
}

/* Common Section Headers */
.briants-section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem auto;
}

.briants-section-subtitle {
    display: block;
    color: var(--briants-accent);
    font-family: var(--briants-font-headings);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
}

.briants-section-header h2 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 2rem;
    color: var(--briants-text-dark);
    margin: 0 0 0.75rem 0;
}

.briants-section-header p {
    color: var(--briants-text-light);
    font-size: 1rem;
    margin: 0;
}

/* Grids and Layout Utilities */
.briants-grid-5 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25rem;
}

@media (max-width: 1024px) {
    .briants-grid-5 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .briants-grid-5 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .briants-grid-5 {
        grid-template-columns: 1fr;
    }
}
`
  },
  {
    id: "top-banner",
    name: "Top Info Banner",
    category: "Header",
    description: "A narrow promotional notification bar displaying opening times, local delivery info, and direct phone link.",
    js: "",
    html: `<div id="briants-top-banner" class="briants-module">
    <div class="top-banner-inner">
        <span><i class="fa-solid fa-truck-fast"></i> <strong>SAME-DAY LOCAL DELIVERY:</strong> Order before 10am weekdays!</span>
        <span class="top-banner-divider">|</span>
        <span><i class="fa-solid fa-phone"></i> Expert Support: <a href="tel:01844343663"><strong>01844 343663</strong></a></span>
    </div>
</div>`,
    css: `/* ==========================================================================
   Top Info Banner Styles
   ========================================================================== */

#briants-top-banner {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
    padding: 0.65rem 1rem;
    font-size: 0.85rem;
    text-align: center;
}

#briants-top-banner .top-banner-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
}

#briants-top-banner a {
    color: var(--briants-bg-white);
    text-decoration: none;
    transition: var(--briants-transition);
}

#briants-top-banner a:hover {
    color: var(--briants-accent);
    text-decoration: underline;
}

#briants-top-banner .top-banner-divider {
    opacity: 0.35;
}

@media (max-width: 640px) {
    #briants-top-banner .top-banner-divider {
        display: none;
    }
    #briants-top-banner .top-banner-inner {
        flex-direction: column;
        gap: 0.25rem;
    }
}`
  },
  {
    id: "header",
    name: "Main Header",
    category: "Header",
    description: "The primary header block displaying the Briants logo alongside customer showroom opening times and location.",
    js: "",
    html: `<header id="briants-header" class="briants-module">
    <div class="header-inner">
        <div class="header-logo-box">
            <img src="https://briantsofrisborough.co.uk/wp-content/uploads/2025/12/cropped-Briants_logo-white-bg-BUILDING.jpg" alt="Briants of Risborough Logo" class="header-logo">
        </div>
        <div class="header-info-grid">
            <div class="header-info-item">
                <i class="fa-solid fa-clock"></i>
                <div>
                    <strong>Open Weekdays:</strong>
                    <span>7:00 AM - 4:45 PM (Sats 8-12 Timber Only)</span>
                </div>
            </div>
            <div class="header-info-item">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                    <strong>Showroom Location:</strong>
                    <span>Longwick, Princes Risborough, HP27 9SG</span>
                </div>
            </div>
        </div>
    </div>
</header>`,
    css: `/* ==========================================================================
   Main Header Styles
   ========================================================================== */

#briants-header {
    background-color: var(--briants-bg-white);
    border-bottom: 1px solid var(--briants-border);
    padding: 1.25rem 0;
}

#briants-header .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
}

#briants-header .header-logo {
    max-height: 55px;
    width: auto;
    display: block;
}

#briants-header .header-info-grid {
    display: flex;
    gap: 1.75rem;
    flex-wrap: wrap;
}

#briants-header .header-info-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.85rem;
}

#briants-header .header-info-item i {
    font-size: 1.25rem;
    color: var(--briants-primary);
}

#briants-header .header-info-item strong {
    display: block;
    color: var(--briants-text-dark);
}

#briants-header .header-info-item span {
    color: var(--briants-text-light);
}

@media (max-width: 768px) {
    #briants-header .header-inner {
        flex-direction: column;
        text-align: center;
    }
    #briants-header .header-info-grid {
        justify-content: center;
        gap: 1rem;
    }
}`
  },
  {
    id: "hero",
    name: "Hero Section",
    category: "Hero",
    description: "A banner that sits at the top of the page. Styled in forest green with transparent overlays and a clear action card.",
    js: "",
    html: `<section id="briants-hero" class="briants-module">
    <div class="hero-bg-overlay"></div>
    <div class="hero-inner">
        <div class="hero-card">
            <span class="hero-badge"><i class="fa-solid fa-certificate"></i> Authorised Main Dealer</span>
            <h1>Professional Garden Machinery, <span class="hero-highlight">Expertly Prepared.</span></h1>
            <p class="hero-desc">At Briants, we don't just sell boxes. Every petrol and cordless machine we supply undergoes a complete Pre-Delivery Inspection (PDI)—assembled, oiled, tested, and ready to work the moment you receive it.</p>
            
            <ul class="hero-list">
                <li><i class="fa-solid fa-circle-check"></i> Free Assembly & PDI Inspection on All Machinery</li>
                <li><i class="fa-solid fa-circle-check"></i> Full Manufacturer Warranties & Genuine Parts</li>
                <li><i class="fa-solid fa-circle-check"></i> Free Local Delivery on Online Orders Over £200</li>
            </ul>
            
            <div class="hero-buttons">
                <a href="#machinery-categories" class="briants-btn briants-btn-primary briants-btn-lg">Browse Categories <i class="fa-solid fa-arrow-right"></i></a>
                <a href="#workshop-servicing" class="briants-btn briants-btn-secondary briants-btn-lg">Book a Service <i class="fa-solid fa-screwdriver-wrench"></i></a>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Hero Section Styles
   ========================================================================== */

#briants-hero {
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1558904541-efa8c1a68f6f?auto=format&fit=crop&w=1600&q=80');
    background-size: cover;
    background-position: center;
    color: var(--briants-bg-white);
    padding: 7rem 0;
    display: flex;
    align-items: center;
}

#briants-hero .hero-bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 92, 48, 0.95) 0%, rgba(0, 92, 48, 0.45) 100%);
    z-index: 1;
}

#briants-hero .hero-inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 2;
}

#briants-hero .hero-card {
    max-width: 650px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 2.75rem;
    border-radius: var(--briants-radius-lg);
    box-shadow: var(--briants-shadow-lg);
}

#briants-hero .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--briants-accent);
    color: var(--briants-bg-white);
    padding: 0.3rem 0.8rem;
    border-radius: 9999px;
    font-size: 0.72rem;
    font-family: var(--briants-font-headings);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.25rem;
}

#briants-hero h1 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.15;
    margin: 0 0 1.25rem 0;
    color: var(--briants-bg-white);
}

#briants-hero .hero-highlight {
    color: var(--briants-accent);
}

#briants-hero .hero-desc {
    font-size: 1.05rem;
    opacity: 0.95;
    margin: 0 0 1.75rem 0;
}

#briants-hero .hero-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2.25rem 0;
    display: grid;
    gap: 0.65rem;
}

#briants-hero .hero-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    font-size: 0.9rem;
}

#briants-hero .hero-list li i {
    color: var(--briants-accent);
    font-size: 1.1rem;
}

#briants-hero .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    #briants-hero {
        padding: 4rem 0;
    }
    #briants-hero .hero-card {
        padding: 2rem 1.5rem;
        text-align: center;
    }
    #briants-hero h1 {
        font-size: 1.9rem;
    }
    #briants-hero .hero-list {
        text-align: left;
    }
    #briants-hero .hero-buttons {
        justify-content: center;
    }
}`
  },
  {
    id: "promo-banner",
    name: "Special Brand Promotions",
    category: "Promotions",
    description: "A wide, clean brand-neutral promotion block designed to advertise current sales, deals, or stock updates.",
    js: "",
    html: `<section id="briants-promo-banner" class="briants-module">
    <div class="promo-container">
        <div class="promo-content">
            <div class="promo-badge"><i class="fa-solid fa-tags"></i> SEASONAL DEALS</div>
            <h2>LATEST MACHINERY & TOOL ARRIVALS</h2>
            <p>Save up to 35% on selected chainsaws, lawn mowers, and professional landscape gear. In stock and ready to deliver today!</p>
            <div class="promo-actions">
                <a href="#machinery-deals" class="briants-btn briants-btn-secondary">Shop the Sale</a>
                <a href="#showroom" class="briants-btn briants-btn-outline">Find Our Showroom</a>
            </div>
        </div>
        <div class="promo-img-wrapper">
            <img src="https://images.unsplash.com/photo-1590856029826-c7a5e03766e6?auto=format&fit=crop&w=800&q=80" alt="Chainsaw and garden equipment" class="promo-img">
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Special Brand Promotions Banner Styles
   ========================================================================== */

#briants-promo-banner {
    background-color: var(--briants-bg-light);
    border-bottom: 1px solid var(--briants-border);
}

#briants-promo-banner .promo-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3.5rem 1.5rem;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem;
    align-items: center;
}

#briants-promo-banner .promo-content h2 {
    font-family: var(--briants-font-headings);
    font-weight: 800;
    font-size: 2rem;
    margin: 0 0 1rem 0;
    color: var(--briants-primary);
}

#briants-promo-banner .promo-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.25rem 0.65rem;
    border-radius: var(--briants-radius-sm);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
}

#briants-promo-banner .promo-content p {
    font-size: 1rem;
    color: var(--briants-text-light);
    margin: 0 0 2rem 0;
}

#briants-promo-banner .promo-actions {
    display: flex;
    gap: 1rem;
}

#briants-promo-banner .promo-actions .briants-btn-outline {
    border-color: var(--briants-primary);
    color: var(--briants-primary);
}

#briants-promo-banner .promo-actions .briants-btn-outline:hover {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
}

#briants-promo-banner .promo-img-wrapper {
    position: relative;
    border-radius: var(--briants-radius-lg);
    overflow: hidden;
    box-shadow: var(--briants-shadow-md);
    height: 250px;
}

#briants-promo-banner .promo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

@media (max-width: 900px) {
    #briants-promo-banner .promo-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    #briants-promo-banner .promo-img-wrapper {
        height: 200px;
        order: -1;
    }
}`
  },
  {
    id: "quick-categories",
    name: "Quick Navigation Categories",
    category: "Navigation",
    description: "A three-column visually rich category grid introducing 'Garden Machinery Sale', 'Timber & Fencing', and 'Tree Surgery & Climbing'.",
    js: "",
    html: `<section id="briants-quick-categories" class="briants-module">
    <div class="briants-container">
        <div class="categories-grid-3">
            
            <div class="quick-card">
                <div class="quick-card-img" style="background-image: url('https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80');"></div>
                <div class="quick-card-content">
                    <h3>Garden Machinery</h3>
                    <p>Authorised dealers for STIHL, Husqvarna, Honda, and more. Serviced, prepped, and ready to run.</p>
                    <a href="#machinery-deals" class="briants-btn briants-btn-primary briants-btn-sm">Shop Machinery <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>

            <div class="quick-card">
                <div class="quick-card-img" style="background-image: url('https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=600&q=80');"></div>
                <div class="quick-card-content">
                    <h3>Timber & Fencing</h3>
                    <p>Premium grade sleepers, decking boards, fence panels, posts, and general structural building lumber.</p>
                    <a href="#sleepers-row" class="briants-btn briants-btn-primary briants-btn-sm">Shop Timber <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>

            <div class="quick-card">
                <div class="quick-card-img" style="background-image: url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80');"></div>
                <div class="quick-card-content">
                    <h3>Tree Surgery & Climbing</h3>
                    <p>Professional ropes, harnesses, rigging, and climbing gear for certified arborists and arboriculture.</p>
                    <a href="#machinery-deals" class="briants-btn briants-btn-primary briants-btn-sm">Shop Climbing <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>

        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Quick Navigation Categories Styles
   ========================================================================== */

#briants-quick-categories {
    background-color: var(--briants-bg-white);
}

#briants-quick-categories .categories-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
}

#briants-quick-categories .quick-card {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    overflow: hidden;
    box-shadow: var(--briants-shadow-sm);
    transition: var(--briants-transition);
    display: flex;
    flex-direction: column;
}

#briants-quick-categories .quick-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--briants-shadow-md);
    border-color: var(--briants-primary);
}

#briants-quick-categories .quick-card-img {
    height: 220px;
    background-size: cover;
    background-position: center;
}

#briants-quick-categories .quick-card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

#briants-quick-categories .quick-card-content h3 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--briants-primary);
    margin: 0 0 0.5rem 0;
}

#briants-quick-categories .quick-card-content p {
    font-size: 0.88rem;
    color: var(--briants-text-light);
    margin: 0 0 1.5rem 0;
    flex-grow: 1;
}

#briants-quick-categories .quick-card-content .briants-btn {
    align-self: flex-start;
    font-size: 0.78rem;
    padding: 0.45rem 1rem;
}

@media (max-width: 900px) {
    #briants-quick-categories .categories-grid-3 {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    #briants-quick-categories .quick-card-img {
        height: 180px;
    }
}`
  },
  {
    id: "sleepers-row",
    name: "Decking & Sleepers Product Row",
    category: "Products Grid",
    description: "A 5-column product showcase highlighting essential timber, composite decking, and sleeper items.",
    js: "",
    html: `<section id="briants-sleepers-row" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Timber & Structural Wood</span>
            <h2>Decking, Sleepers, Composites & Cladding</h2>
            <p>Our top recommended timber supplies, cut to precision and sourced from certified sustainably managed forests.</p>
        </div>
        
        <div class="briants-grid-5">
            
            <!-- Product 1 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1595841696660-181cf0775d97?auto=format&fit=crop&w=400&q=80" alt="Timber Decking Board">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">TIMBER</span>
                    <h3 class="briants-prod-title">Treated Softwood Decking Board 4.8m</h3>
                    <div class="briants-prod-price">
                        <span>&pound;14.95</span> <small>each</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Oak Sleeper">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">SLEEPERS</span>
                    <h3 class="briants-prod-title">New English Oak Railway Sleeper 2.4m</h3>
                    <div class="briants-prod-price">
                        <span>&pound;32.50</span> <small>each</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 3 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1590076269184-15d7a036420f?auto=format&fit=crop&w=400&q=80" alt="Porcelain Paving">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">PAVING</span>
                    <h3 class="briants-prod-title">Sawn Grey Porcelain Paving Tile</h3>
                    <div class="briants-prod-price">
                        <span>&pound;9.80</span> <small>per tile</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 4 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80" alt="Treated Timber Post">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">FENCING</span>
                    <h3 class="briants-prod-title">Treated Standard Timber Post 75x75mm</h3>
                    <div class="briants-prod-price">
                        <span>&pound;5.20</span> <small>each</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 5 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&w=400&q=80" alt="Composite Decking">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">COMPOSITE</span>
                    <h3 class="briants-prod-title">Premium Composite Decking Board 3.6m</h3>
                    <div class="briants-prod-price">
                        <span>&pound;28.90</span> <small>each</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Decking & Sleepers Product Row Styles
   ========================================================================== */

#briants-sleepers-row {
    background-color: var(--briants-bg-light);
    border-bottom: 1px solid var(--briants-border);
}

.briants-prod-card {
    background-color: var(--briants-bg-white);
    border-radius: var(--briants-radius-md);
    border: 1px solid var(--briants-border);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--briants-shadow-sm);
    transition: var(--briants-transition);
}

.briants-prod-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--briants-shadow-md);
    border-color: var(--briants-primary);
}

.briants-prod-img-box {
    position: relative;
    overflow: hidden;
    height: 160px;
}

.briants-prod-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: var(--briants-transition);
}

.briants-prod-card:hover .briants-prod-img-box img {
    transform: scale(1.05);
}

.briants-prod-details {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.briants-prod-tag {
    font-size: 0.65rem;
    font-family: var(--briants-font-headings);
    font-weight: 700;
    color: var(--briants-accent);
    letter-spacing: 0.05em;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
}

.briants-prod-title {
    font-family: var(--briants-font-headings);
    font-weight: 600;
    font-size: 0.88rem;
    line-height: 1.35;
    color: var(--briants-text-dark);
    margin: 0 0 0.75rem 0;
    height: 48px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.briants-prod-price {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--briants-primary);
    margin-bottom: 1.25rem;
    margin-top: auto;
}

.briants-prod-price small {
    font-weight: 400;
    font-size: 0.72rem;
    color: var(--briants-text-light);
}

.briants-prod-card .briants-btn {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.55rem;
}`
  },
  {
    id: "hort-banner",
    name: "Horticultural Promo Banner",
    category: "Promotions",
    description: "A wide, clean brand-neutral promotion block designed to introduce landscape, gardening supplies, and horticultural goods.",
    js: "",
    html: `<section id="briants-hort-banner" class="briants-module">
    <div class="hort-inner">
        <div class="hort-promo-box">
            <div class="hort-badge"><i class="fa-solid fa-leaf"></i> LANDSCAPING STORE</div>
            <h2>HORTICULTURAL SUPPLIES & COMPOSTS</h2>
            <p>Welcome to our landscaping store! We stock premium compost bags, fertilizers, grass seed, peat-free soils, and tools to feed your soil and nourish your garden plants.</p>
            <a href="#categories-grid" class="briants-btn briants-btn-secondary">Shop Gardening Supplies <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Horticultural Promo Banner Styles
   ========================================================================== */

#briants-hort-banner {
    position: relative;
    background-image: linear-gradient(rgba(0, 92, 48, 0.9), rgba(0, 92, 48, 0.85)), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    color: var(--briants-bg-white);
    padding: 4.5rem 0;
    text-align: center;
}

#briants-hort-banner .hort-inner {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

#briants-hort-banner .hort-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background-color: var(--briants-accent);
    color: var(--briants-bg-white);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
    border-radius: var(--briants-radius-sm);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

#briants-hort-banner h2 {
    font-family: var(--briants-font-headings);
    font-weight: 800;
    font-size: 2.2rem;
    margin: 0 0 1rem 0;
    letter-spacing: -0.01em;
}

#briants-hort-banner p {
    font-size: 1.05rem;
    opacity: 0.9;
    margin: 0 0 2rem 0;
    line-height: 1.5;
}

#briants-hort-banner .briants-btn {
    font-size: 0.95rem;
}`
  },
  {
    id: "brands-slider",
    name: "Brands Showcase Slider",
    category: "Promotions",
    description: "An infinite scrolling marquee element demonstrating official supplier logos (STIHL, Honda, Husqvarna, etc.). Runs automatically.",
    js: `// Brand slider pause control on hover
const brandTrack = document.querySelector('#briants-brands .brand-track');
if (brandTrack) {
    brandTrack.addEventListener('mouseenter', () => {
        brandTrack.style.animationPlayState = 'paused';
    });
    brandTrack.addEventListener('mouseleave', () => {
        brandTrack.style.animationPlayState = 'running';
    });
}`,
    html: `<section id="briants-brands" class="briants-module">
    <div class="briants-container">
        <div class="brand-header">
            <span class="briants-section-subtitle">Authorised Dealer</span>
            <h3>Trusted Brands We Stock & Service</h3>
        </div>
        
        <div class="brand-marquee-container">
            <div class="brand-track">
                <!-- Slide Group 1 -->
                <div class="brand-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Stihl_logo.svg" alt="STIHL" class="brand-logo-img"></div>
                <div class="brand-slide"><span class="brand-logo-text brand-honda">HONDA</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-husqvarna">HUSQVARNA</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-toro">TORO</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-milwaukee">Milwaukee</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-hayter">HAYTER</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-silky">Silky</span></div>
                
                <!-- Duplicate Group 1 for Seamless Looping -->
                <div class="brand-slide"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Stihl_logo.svg" alt="STIHL" class="brand-logo-img"></div>
                <div class="brand-slide"><span class="brand-logo-text brand-honda">HONDA</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-husqvarna">HUSQVARNA</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-toro">TORO</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-milwaukee">Milwaukee</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-hayter">HAYTER</span></div>
                <div class="brand-slide"><span class="brand-logo-text brand-silky">Silky</span></div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Brands Showcase Slider Styles
   ========================================================================== */

#briants-brands {
    background-color: var(--briants-bg-white);
    border-bottom: 1px solid var(--briants-border);
}

#briants-brands .brand-header {
    text-align: center;
    margin-bottom: 2rem;
}

#briants-brands .brand-header h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: var(--briants-text-dark);
}

#briants-brands .brand-marquee-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0;
}

/* Fades on the edges of the marquee */
#briants-brands .brand-marquee-container::before, 
#briants-brands .brand-marquee-container::after {
    content: '';
    height: 100%;
    width: 120px;
    position: absolute;
    top: 0;
    z-index: 2;
    pointer-events: none;
}

#briants-brands .brand-marquee-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
}

#briants-brands .brand-marquee-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
}

#briants-brands .brand-track {
    display: flex;
    width: calc(200px * 14);
    animation: brandScroll 25s linear infinite;
}

#briants-brands .brand-slide {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0 1rem;
}

#briants-brands .brand-logo-img {
    max-height: 28px;
    max-width: 130px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.55;
    transition: var(--briants-transition);
}

#briants-brands .brand-logo-img:hover {
    filter: grayscale(0%);
    opacity: 1;
}

#briants-brands .brand-logo-text {
    font-family: var(--briants-font-headings);
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    filter: grayscale(100%);
    opacity: 0.5;
    transition: var(--briants-transition);
}

#briants-brands .brand-logo-text:hover {
    filter: grayscale(0%);
    opacity: 1;
}

#briants-brands .brand-honda { color: #cc0000; font-style: italic; }
#briants-brands .brand-husqvarna { color: #005a30; letter-spacing: 0.05em; font-family: sans-serif; }
#briants-brands .brand-toro { color: #d00; font-weight: 900; }
#briants-brands .brand-milwaukee { color: #d00; font-family: 'Brush Script MT', cursive; font-size: 1.5rem; font-style: italic; }
#briants-brands .brand-hayter { color: #006837; letter-spacing: 0.1em; }
#briants-brands .brand-silky { color: #000; text-transform: uppercase; font-weight: 900; }

@keyframes brandScroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-200px * 7));
    }
}`
  },
  {
    id: "why-choose-us",
    name: "Why Choose Us Section",
    category: "Information",
    description: "A two-column highlight component presenting core business trust values and services alongside descriptive bullet cards.",
    js: "",
    html: `<section id="briants-why-choose-us" class="briants-module">
    <div class="briants-container">
        <div class="why-us-grid">
            <div class="why-us-info-box">
                <div class="why-us-badge"><i class="fa-solid fa-star"></i> ESTABLISHED 1971</div>
                <h2>Why Professionals & Homeowners Choose Briants</h2>
                <p>Over the last 50 years, Briants of Risborough has grown to become Buckinghamshire's leading supplier of machinery, timber, and fencing. We do business differently:</p>
                
                <ul class="why-us-bullets">
                    <li>
                        <i class="fa-solid fa-user-tie"></i>
                        <div>
                            <h4>Professional Advice</h4>
                            <span>Speak to our factory-trained showroom and workshop experts directly.</span>
                        </div>
                    </li>
                    <li>
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                        <div>
                            <h4>PDI Prepared & Tested</h4>
                            <span>Every machine is unboxed, tested, fueled, and run by our technicians before delivery.</span>
                        </div>
                    </li>
                    <li>
                        <i class="fa-solid fa-truck"></i>
                        <div>
                            <h4>Local Delivery Service</h4>
                            <span>Delivered directly to your door using our own fleet of specialty logistics vehicles.</span>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="why-us-cards">
                <div class="why-us-card">
                    <div class="why-us-card-icon"><i class="fa-solid fa-truck-ramp-box"></i></div>
                    <h3>Same-Day Local Delivery</h3>
                    <p>Order in-stock items before 10am weekdays and we'll deliver within a 10-mile radius that very afternoon.</p>
                </div>
                <div class="why-us-card">
                    <div class="why-us-card-icon"><i class="fa-solid fa-store"></i></div>
                    <h3>Click & Collect Ready</h3>
                    <p>Order machinery or timber supplies online and pick them up at our Longwick showroom, prepared and ready to go.</p>
                </div>
                <div class="why-us-card">
                    <div class="why-us-card-icon"><i class="fa-solid fa-award"></i></div>
                    <h3>Official Main Dealer Support</h3>
                    <p>Buy with confidence knowing we supply 100% genuine machinery, OEM parts, and authorized manufacturer warranties.</p>
                </div>
            </div>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Why Choose Us Section Styles
   ========================================================================== */

#briants-why-choose-us {
    background-color: var(--briants-bg-white);
    border-bottom: 1px solid var(--briants-border);
}

.why-us-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3.5rem;
    align-items: center;
}

.why-us-info-box h2 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 2rem;
    color: var(--briants-primary);
    margin: 0 0 1rem 0;
    line-height: 1.2;
}

.why-us-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.25rem 0.65rem;
    border-radius: var(--briants-radius-sm);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
}

.why-us-info-box p {
    font-size: 0.95rem;
    color: var(--briants-text-light);
    margin: 0 0 2rem 0;
}

.why-us-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1.5rem;
}

.why-us-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.why-us-bullets li i {
    font-size: 1.25rem;
    color: var(--briants-accent);
    margin-top: 0.2rem;
}

.why-us-bullets h4 {
    margin: 0 0 0.2rem 0;
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--briants-text-dark);
}

.why-us-bullets span {
    font-size: 0.85rem;
    color: var(--briants-text-light);
    display: block;
}

.why-us-cards {
    display: grid;
    gap: 1.25rem;
}

.why-us-card {
    background-color: var(--briants-bg-light);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    padding: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    transition: var(--briants-transition);
}

.why-us-card:hover {
    border-color: var(--briants-primary);
    background-color: var(--briants-tint-green);
    transform: translateX(4px);
}

.why-us-card-icon {
    width: 44px;
    height: 44px;
    background-color: var(--briants-bg-white);
    color: var(--briants-primary);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    flex-shrink: 0;
}

.why-us-card:hover .why-us-card-icon {
    background-color: var(--briants-primary);
    color: var(--briants-bg-white);
    border-color: var(--briants-primary);
}

.why-us-card h3 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 0.98rem;
    margin: 0 0 0.35rem 0;
    color: var(--briants-text-dark);
}

.why-us-card p {
    font-size: 0.82rem;
    color: var(--briants-text-light);
    margin: 0;
    line-height: 1.4;
}

@media (max-width: 900px) {
    .why-us-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
}`
  },
  {
    id: "timber-details",
    name: "Timber & Fencing Text Section",
    category: "Information",
    description: "An informational text block with a custom-styled header (light-green highlighted background) detailing Briants wood yard history.",
    js: "",
    html: `<section id="briants-timber-details" class="briants-module">
    <div class="briants-container">
        <div class="details-highlight-header">
            <h3>Established Since 1971 in Longwick</h3>
        </div>
        <div class="details-content-box">
            <h2>Timber & Fencing, Decking, Sleepers, Cladding & Gates</h2>
            <p>Briants of Risborough has supplied premium quality timber and fencing to local fencing contractors, landscape builders, and DIY enthusiasts for over 50 years. We work directly with sawmills to ensure our timber yard is fully stocked with high-grade treated softwood sleepers, English oak logs, structural timber joists, and pressure-treated cladding panels.</p>
            <p>Our dedicated timber yard in Longwick features heavy-duty cutting equipment, allowing us to process bulk orders quickly. Whether you are installing a residential feather-edge fence or building an extensive garden deck, our fleet of crane-equipped delivery vehicles makes transport clean, safe, and stress-free.</p>
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Timber & Fencing Text Section Styles
   ========================================================================== */

#briants-timber-details {
    background-color: var(--briants-bg-white);
    border-bottom: 1px solid var(--briants-border);
}

#briants-timber-details .details-highlight-header {
    background-color: var(--briants-tint-green);
    border-left: 4px solid var(--briants-primary);
    padding: 0.75rem 1.25rem;
    margin-bottom: 1.5rem;
    border-radius: 0 var(--briants-radius-sm) var(--briants-radius-sm) 0;
}

#briants-timber-details .details-highlight-header h3 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--briants-primary);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

#briants-timber-details .details-content-box h2 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--briants-text-dark);
    margin: 0 0 1rem 0;
}

#briants-timber-details .details-content-box p {
    font-size: 0.95rem;
    color: var(--briants-text-light);
    margin: 0 0 1.25rem 0;
    line-height: 1.6;
}

#briants-timber-details .details-content-box p:last-child {
    margin-bottom: 0;
}`
  },
  {
    id: "categories-grid",
    name: "Featured Categories Grid",
    category: "Navigation",
    description: "A comprehensive 10-card navigation panel covering all main wood yard and machinery service categories.",
    js: "",
    html: `<section id="briants-categories-grid" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Yard Selections</span>
            <h2>Explore Our Featured Categories</h2>
            <p>Select a category to browse our extensive online catalogs or visit our showroom to speak to an expert advisor.</p>
        </div>
        
        <div class="cat-grid-10">
            
            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Garden Machinery</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Timber & Fencing</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1520117006509-183974335e67?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Wood Fuels</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1595841696660-181cf0775d97?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Decking & Sleepers</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Gates & Fittings</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Garden Buildings</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Cladding & Joists</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1590076269184-15d7a036420f?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Paving & Aggregates</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Garden Supplies</h3>
                </div>
            </a>

            <a href="#" class="cat-card">
                <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&w=400&q=80');"></div>
                <div class="cat-card-overlay"></div>
                <div class="cat-card-text">
                    <h3>Workwear & PPE</h3>
                </div>
            </a>

        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Featured Categories Grid Styles
   ========================================================================== */

#briants-categories-grid {
    background-color: var(--briants-bg-light);
    border-bottom: 1px solid var(--briants-border);
}

.cat-grid-10 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25rem;
}

.cat-card {
    position: relative;
    height: 180px;
    border-radius: var(--briants-radius-md);
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    box-shadow: var(--briants-shadow-sm);
    border: 1px solid var(--briants-border);
    transition: var(--briants-transition);
}

.cat-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    transition: var(--briants-transition);
}

.cat-card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 92, 48, 0.9) 0%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
    transition: var(--briants-transition);
}

.cat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--briants-shadow-md);
    border-color: var(--briants-primary);
}

.cat-card:hover .cat-card-bg {
    transform: scale(1.08);
}

.cat-card:hover .cat-card-overlay {
    background: linear-gradient(to top, rgba(0, 92, 48, 0.95) 0%, rgba(0, 92, 48, 0.7) 65%, rgba(0, 0, 0, 0.1) 100%);
}

.cat-card-text {
    position: relative;
    z-index: 2;
    padding: 1.25rem;
    width: 100%;
}

.cat-card-text h3 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--briants-bg-white);
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1024px) {
    .cat-grid-10 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .cat-grid-10 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .cat-grid-10 {
        grid-template-columns: 1fr;
    }
    .cat-card {
        height: 140px;
    }
}`
  },
  {
    id: "machinery-deals",
    name: "Machinery Deals Grid",
    category: "Products Grid",
    description: "A 5-column product row showing STIHL machinery items, highlighting petrol, cordless, and prepared units.",
    js: "",
    html: `<section id="briants-machinery-deals" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Latest Deals</span>
            <h2>Latest Garden Machinery Deals</h2>
            <p>Premium petrol and battery power equipment prepared, run-tested, and certified by our in-house workshop.</p>
        </div>
        
        <div class="briants-grid-5">
            
            <!-- Product 1 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1590856029826-c7a5e03766e6?auto=format&fit=crop&w=400&q=80" alt="STIHL Chainsaw">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">STIHL</span>
                    <h3 class="briants-prod-title">STIHL MS 170 30.1cc Petrol Chainsaw 12"</h3>
                    <div class="briants-prod-price">
                        <span>&pound;189.00</span> <small>Inc. PDI</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80" alt="STIHL Mower">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">STIHL</span>
                    <h3 class="briants-prod-title">STIHL RMA 239 C Cordless Lawnmower Set</h3>
                    <div class="briants-prod-price">
                        <span>&pound;349.00</span> <small>Inc. PDI</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 3 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=400&q=80" alt="Honda Lawnmower">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">HONDA</span>
                    <h3 class="briants-prod-title">Honda Izy HRG 466 SK Self-Propelled Lawnmower</h3>
                    <div class="briants-prod-price">
                        <span>&pound;519.00</span> <small>Inc. PDI</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 4 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80" alt="STIHL Leaf Blower">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">STIHL</span>
                    <h3 class="briants-prod-title">STIHL BG 86 C-E Petrol Handheld Leaf Blower</h3>
                    <div class="briants-prod-price">
                        <span>&pound;269.00</span> <small>Inc. PDI</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

            <!-- Product 5 -->
            <div class="briants-prod-card">
                <div class="briants-prod-img-box">
                    <img src="https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?auto=format&fit=crop&w=400&q=80" alt="Milwaukee Trimmer">
                </div>
                <div class="briants-prod-details">
                    <span class="briants-prod-tag">MILWAUKEE</span>
                    <h3 class="briants-prod-title">Milwaukee M18 Brushless Grass Trimmer (Body Only)</h3>
                    <div class="briants-prod-price">
                        <span>&pound;229.00</span> <small>Inc. PDI</small>
                    </div>
                    <a href="#" class="briants-btn briants-btn-primary briants-btn-sm">Shop Now</a>
                </div>
            </div>

        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Machinery Deals Grid Styles
   ========================================================================== */

#briants-machinery-deals {
    background-color: var(--briants-bg-white);
    border-bottom: 1px solid var(--briants-border);
}`
  },
  {
    id: "workshop-servicing",
    name: "Workshop & Repair Services",
    category: "Workshop",
    description: "An interactive, tab-based layout detailing local machinery maintenance options: Annual Servicing, Repairs, and Blade Sharpening.",
    js: `// Interactive tab selector for workshop services
const tabButtons = document.querySelectorAll('#briants-workshop .tab-btn');
const tabPanels = document.querySelectorAll('#briants-workshop .tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active state
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active state
        button.classList.add('active');
        const activePanel = document.querySelector('#briants-workshop #tab-' + targetTab);
        if (activePanel) {
            activePanel.classList.add('active');
        }
    });
});`,
    html: `<section id="briants-workshop" class="briants-module">
    <div class="briants-container">
        <div class="workshop-grid-layout">
            
            <div class="workshop-text-side">
                <span class="briants-section-subtitle">Briants Certified Workshop</span>
                <h2>Professional Repairs & Machinery Servicing</h2>
                <p>Keep your gardening machinery running safely and efficiently all year round. Our fully equipped workshop in Longwick is staffed by certified, manufacturer-trained technicians specialized in petrol, cordless, and robotic lawn care machinery. We repair all leading brands including STIHL, Honda, Hayter, Husqvarna, and Milwaukee.</p>
                
                <div class="workshop-features">
                    <div class="workshop-feat-item">
                        <i class="fa-solid fa-square-check"></i>
                        <div>
                            <strong>Advanced Diagnostic Equipment</strong>
                            <span>Quick fault tracing for digital, battery, and electronic ignition systems.</span>
                        </div>
                    </div>
                    <div class="workshop-feat-item">
                        <i class="fa-solid fa-square-check"></i>
                        <div>
                            <strong>Genuine Manufacturer OEM Parts</strong>
                            <span>We only use official brand components to secure warranty terms and reliability.</span>
                        </div>
                    </div>
                    <div class="workshop-feat-item">
                        <i class="fa-solid fa-square-check"></i>
                        <div>
                            <strong>Fast Turnaround Lead Times</strong>
                            <span>Professional service scheduled efficiently to return your tools on time.</span>
                        </div>
                    </div>
                </div>
                
                <a href="tel:01844343663" class="briants-btn briants-btn-primary"><i class="fa-solid fa-phone"></i> Call Workshop: 01844 343663</a>
            </div>
            
            <div class="workshop-interactive-side">
                <div class="interactive-tabs-card">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="annual">Annual Service</button>
                        <button class="tab-btn" data-tab="repairs">Diagnostics</button>
                        <button class="tab-btn" data-tab="sharpening">Sharpening</button>
                    </div>
                    
                    <div class="tabs-body">
                        <!-- Tab 1: Annual Servicing -->
                        <div id="tab-annual" class="tab-panel active">
                            <h3>Routine Annual Maintenance</h3>
                            <p>Recommended yearly before winter storage or prior to the spring mowing season to ensure easy starting and engine reliability.</p>
                            <ul class="tab-checklist">
                                <li><i class="fa-solid fa-circle-check"></i> Engine oil replacement & filter renewal</li>
                                <li><i class="fa-solid fa-circle-check"></i> Spark plug inspect and swap</li>
                                <li><i class="fa-solid fa-circle-check"></i> Ultrasonic carburetor wash & clean</li>
                                <li><i class="fa-solid fa-circle-check"></i> Blade balancing, sharpening & check</li>
                            </ul>
                            <div class="tab-footer">
                                <div class="tab-price">From <strong>&pound;75.00</strong> <small>+ VAT</small></div>
                                <a href="#showroom" class="briants-btn briants-btn-secondary briants-btn-sm">Book Service</a>
                            </div>
                        </div>
                        
                        <!-- Tab 2: Diagnostic & Repair -->
                        <div id="tab-repairs" class="tab-panel">
                            <h3>Fault Diagnostics & Repair</h3>
                            <p>Is your engine stalling, losing drive power, or failing to start? Our technicians diagnose errors fast to get you working again.</p>
                            <ul class="tab-checklist">
                                <li><i class="fa-solid fa-circle-check"></i> Digital fault code reading</li>
                                <li><i class="fa-solid fa-circle-check"></i> Battery load health testing</li>
                                <li><i class="fa-solid fa-circle-check"></i> Drive cables & belt replacements</li>
                                <li><i class="fa-solid fa-circle-check"></i> Carburetor rebuilds & clean fuel flush</li>
                            </ul>
                            <div class="tab-footer">
                                <div class="tab-price">Rate <strong>&pound;45.00</strong> <small>flat test fee</small></div>
                                <a href="#showroom" class="briants-btn briants-btn-secondary briants-btn-sm">Book Diagnostics</a>
                            </div>
                        </div>
                        
                        <!-- Tab 3: Blade Sharpening -->
                        <div id="tab-sharpening" class="tab-panel">
                            <h3>Precision Blade Sharpening</h3>
                            <p>Dull mower blades tear grass, promoting turf disease. Maintain a crisp cut with our precision balancing and sharpening service.</p>
                            <ul class="tab-checklist">
                                <li><i class="fa-solid fa-circle-check"></i> Lawnmower rotary blades sharpened & balanced</li>
                                <li><i class="fa-solid fa-circle-check"></i> Cylinder mower reel grinding & adjustment</li>
                                <li><i class="fa-solid fa-circle-check"></i> Chainsaw chain sharpening (quick options)</li>
                                <li><i class="fa-solid fa-circle-check"></i> Hedge trimmer shear blade alignment & hone</li>
                            </ul>
                            <div class="tab-footer">
                                <div class="tab-price">Chains from <strong>&pound;10.00</strong> <small>each</small></div>
                                <a href="#showroom" class="briants-btn briants-btn-secondary briants-btn-sm">Request Sharpening</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Workshop & Repair Services Styles
   ========================================================================== */

#briants-workshop {
    background-color: var(--briants-bg-light);
    border-bottom: 1px solid var(--briants-border);
}

.workshop-grid-layout {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4rem;
    align-items: center;
}

.workshop-text-side h2 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 2rem;
    color: var(--briants-primary);
    margin: 0 0 1.25rem 0;
}

.workshop-text-side p {
    font-size: 0.95rem;
    color: var(--briants-text-light);
    margin: 0 0 2rem 0;
}

.workshop-features {
    display: grid;
    gap: 1.25rem;
    margin-bottom: 2.25rem;
}

.workshop-feat-item {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
}

.workshop-feat-item i {
    font-size: 1.2rem;
    color: var(--briants-primary);
    margin-top: 0.25rem;
}

.workshop-feat-item strong {
    display: block;
    font-family: var(--briants-font-headings);
    font-size: 0.92rem;
    color: var(--briants-text-dark);
}

.workshop-feat-item span {
    display: block;
    font-size: 0.82rem;
    color: var(--briants-text-light);
}

/* Interactive tab styling */
.interactive-tabs-card {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-lg);
    overflow: hidden;
    box-shadow: var(--briants-shadow-lg);
}

.interactive-tabs-card .tabs-header {
    display: flex;
    background-color: #f1f5f9;
    border-bottom: 1px solid var(--briants-border);
}

.interactive-tabs-card .tab-btn {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 1rem 0.5rem;
    font-family: var(--briants-font-headings);
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--briants-text-light);
    cursor: pointer;
    transition: var(--briants-transition);
    border-bottom: 3px solid transparent;
}

.interactive-tabs-card .tab-btn.active {
    background-color: var(--briants-bg-white);
    color: var(--briants-primary);
    border-bottom-color: var(--briants-primary);
}

.interactive-tabs-card .tab-btn:hover:not(.active) {
    background-color: rgba(0, 0, 0, 0.02);
    color: var(--briants-text-dark);
}

.interactive-tabs-card .tabs-body {
    padding: 2rem;
    min-height: 340px;
}

.interactive-tabs-card .tab-panel {
    display: none;
}

.interactive-tabs-card .tab-panel.active {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.interactive-tabs-card .tab-panel h3 {
    font-family: var(--briants-font-headings);
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: var(--briants-text-dark);
}

.interactive-tabs-card .tab-panel p {
    font-size: 0.85rem;
    color: var(--briants-text-light);
    margin: 0 0 1.25rem 0;
}

.tab-checklist {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    display: grid;
    gap: 0.5rem;
}

.tab-checklist li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--briants-text-dark);
}

.tab-checklist li i {
    color: var(--briants-primary);
}

.tab-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--briants-border);
    padding-top: 1.25rem;
    margin-top: auto;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.tab-price {
    font-size: 0.82rem;
    color: var(--briants-text-light);
}

.tab-price strong {
    font-size: 1.35rem;
    color: var(--briants-primary);
    display: inline-block;
    margin-left: 0.25rem;
}

@media (max-width: 900px) {
    .workshop-grid-layout {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
}

@media (max-width: 480px) {
    .interactive-tabs-card .tabs-header {
        flex-direction: column;
    }
    .interactive-tabs-card .tab-btn {
        border-bottom: none;
        border-left: 3px solid transparent;
        text-align: left;
        padding: 0.75rem 1rem;
    }
    .interactive-tabs-card .tab-btn.active {
        border-left-color: var(--briants-primary);
    }
    .tab-footer {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
    }
}`
  },
  {
    id: "faq-accordion",
    name: "FAQ Accordion",
    category: "Information",
    description: "An interactive, expandable accordion for answering machinery and delivery queries, styled with clear border states.",
    js: `// Interactive FAQ accordion logic
const faqItems = document.querySelectorAll('#briants-faqs .faq-item');

faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items first
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-content').style.maxHeight = null;
            }
        });
        
        // Toggle clicked item
        if (isActive) {
            item.classList.remove('active');
            content.style.maxHeight = null;
        } else {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});`,
    html: `<section id="briants-faqs" class="briants-module">
    <div class="briants-container">
        <div class="briants-section-header">
            <span class="briants-section-subtitle">Got Questions?</span>
            <h2>Garden Machinery FAQs</h2>
            <p>Learn more about how we process orders, prepare machinery, and deliver to Buckinghamshire and beyond.</p>
        </div>
        
        <div class="faq-accordion-box">
            
            <div class="faq-item">
                <button class="faq-trigger">
                    <span>What does "Pre-Delivery Inspection" (PDI) mean?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-content">
                    <div class="faq-body">
                        <p>Unlike standard box-shippers, Briants prepares every piece of machinery before it leaves our showroom. A certified mechanic unboxes, fully assembles, adds oil/fuel, and tunes the engine. We then run-test the machine to verify throttle control, safety brakes, and speed configurations are working perfectly. We drain the fuel back out (for safety in transport) and safely deliver it. When it arrives, you simply add fresh fuel and start working immediately!</p>
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-trigger">
                    <span>What is your delivery coverage area for machinery?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-content">
                    <div class="faq-body">
                        <p>We offer same-day local delivery for in-stock orders placed before 10am weekdays within a 10-mile radius of our showroom in Princes Risborough (covering Thame, Aylesbury, High Wycombe, Chinnor, etc.). For online orders over £200, local delivery is free! For nationwide orders outside our local radius, we ship using trusted freight partners.</p>
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-trigger">
                    <span>Should I choose cordless battery power or petrol?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-content">
                    <div class="faq-body">
                        <p>Cordless battery tools (such as the STIHL AK or AP systems and Milwaukee M18 Fuel) have advanced significantly, offering petrol-matching performance without the exhaust fumes, engine noise, pulling cords, or fuel storage issues. Battery tools are highly recommended for noise-sensitive suburban gardens. However, for large acreage, forestry, or extended daily commercial use, petrol machinery remains the standard due to quick refueling capabilities.</p>
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-trigger">
                    <span>How often should I get my garden mower serviced?</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="faq-content">
                    <div class="faq-body">
                        <p>We recommend servicing your lawnmower and handheld machinery once a year. The ideal time is during the autumn or winter when the gardening season slows down, so your machine is protected against fuel oxidation during winter storage and ready for spring. Annual servicing includes oil renewal, fresh spark plugs, clean filters, carburetor flushing, and blade sharpening.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   FAQ Accordion Styles
   ========================================================================== */

#briants-faqs {
    background-color: var(--briants-bg-white);
    border-bottom: 1px solid var(--briants-border);
}

.faq-accordion-box {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.faq-item {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    overflow: hidden;
    box-shadow: var(--briants-shadow-sm);
    transition: var(--briants-transition);
}

.faq-item:hover {
    border-color: var(--briants-primary);
    box-shadow: var(--briants-shadow-md);
}

.faq-trigger {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 1.25rem 1.5rem;
    font-family: var(--briants-font-headings);
    font-weight: 600;
    font-size: 1rem;
    color: var(--briants-text-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    text-align: left;
    gap: 1rem;
}

.faq-trigger i {
    font-size: 0.8rem;
    color: var(--briants-primary);
    transition: var(--briants-transition);
}

.faq-item.active .faq-trigger i {
    transform: rotate(180deg);
}

.faq-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-body {
    padding: 0 1.5rem 1.5rem 1.5rem;
    font-size: 0.88rem;
    color: var(--briants-text-light);
    border-top: 1px solid transparent;
}

.faq-item.active .faq-body {
    border-top-color: var(--briants-border);
}`
  },
  {
    id: "showroom",
    name: "Showroom Contact & Directions",
    category: "Information",
    description: "A two-column detailed store layout displaying direct opening hours, map directions, and email/phone support contacts.",
    js: "",
    html: `<section id="briants-showroom" class="briants-module">
    <div class="briants-container">
        <div class="showroom-card-layout">
            
            <div class="showroom-info-section">
                <span class="showroom-badge">Visit Our Store</span>
                <h2>Come and Speak to Our Showroom Experts</h2>
                <p>Want to see the machinery in person or hold the tools before you buy? Visit our fully stocked showroom in Longwick. Our experienced team will walk you through options, demonstrate starts, and advise on timber specifications.</p>
                
                <div class="showroom-contact-details">
                    <div class="contact-row">
                        <i class="fa-solid fa-map-location-dot"></i>
                        <div>
                            <strong>Showroom Address:</strong>
                            <span>Thame Road, Longwick, Princes Risborough, HP27 9SG</span>
                        </div>
                    </div>
                    <div class="contact-row">
                        <i class="fa-solid fa-phone-volume"></i>
                        <div>
                            <strong>Phone Support:</strong>
                            <span><a href="tel:01844343663">01844 343663</a> (Enquiries & Bookings)</span>
                        </div>
                    </div>
                    <div class="contact-row">
                        <i class="fa-solid fa-envelope"></i>
                        <div>
                            <strong>Email Address:</strong>
                            <span><a href="mailto:enquiries@briantsofrisborough.co.uk">enquiries@briantsofrisborough.co.uk</a></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="showroom-map-section">
                <div class="fake-map">
                    <div class="map-tag">
                        <i class="fa-solid fa-store"></i>
                        <h4>Briants of Risborough Ltd</h4>
                        <p>Thame Road, Longwick, Bucks</p>
                        <a href="https://maps.google.com/?q=Briants+of+Risborough+Longwick" target="_blank" class="briants-btn briants-btn-secondary briants-btn-sm"><i class="fa-solid fa-diamond-turn-right"></i> Get Directions</a>
                    </div>
                </div>
                
                <div class="hours-box">
                    <h4>Showroom Opening Hours:</h4>
                    <div class="hours-row-item"><span>Monday - Friday:</span> <strong>7:00 AM - 4:45 PM</strong></div>
                    <div class="hours-row-item"><span>Saturday:</span> <strong>8:00 AM - 12:00 PM (Timber Only)</strong></div>
                    <div class="hours-row-item"><span>Sunday:</span> <strong>Closed</strong></div>
                </div>
            </div>
            
        </div>
    </div>
</section>`,
    css: `/* ==========================================================================
   Showroom Contact & Directions Styles
   ========================================================================== */

#briants-showroom {
    background-color: var(--briants-bg-light);
    border-bottom: 1px solid var(--briants-border);
}

.showroom-card-layout {
    background-color: var(--briants-bg-white);
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-xl);
    overflow: hidden;
    box-shadow: var(--briants-shadow-lg);
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
}

.showroom-info-section {
    padding: 3rem;
}

.showroom-badge {
    display: inline-block;
    background-color: var(--briants-tint-green);
    color: var(--briants-primary);
    font-size: 0.72rem;
    font-family: var(--briants-font-headings);
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.65rem;
    border-radius: var(--briants-radius-sm);
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
}

.showroom-info-section h2 {
    font-family: var(--briants-font-headings);
    font-weight: 700;
    font-size: 1.85rem;
    color: var(--briants-primary);
    margin: 0 0 1rem 0;
}

.showroom-info-section p {
    font-size: 0.92rem;
    color: var(--briants-text-light);
    margin: 0 0 2rem 0;
}

.showroom-contact-details {
    display: grid;
    gap: 1.25rem;
}

.contact-row {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
}

.contact-row i {
    font-size: 1.35rem;
    color: var(--briants-primary);
    margin-top: 0.2rem;
    width: 20px;
    text-align: center;
}

.contact-row strong {
    display: block;
    font-family: var(--briants-font-headings);
    font-size: 0.9rem;
    color: var(--briants-text-dark);
}

.contact-row span {
    display: block;
    font-size: 0.85rem;
    color: var(--briants-text-light);
}

.contact-row a {
    color: var(--briants-primary);
    text-decoration: none;
    font-weight: 600;
}

.contact-row a:hover {
    text-decoration: underline;
}

.showroom-map-section {
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--briants-border);
}

.fake-map {
    flex-grow: 1;
    background-color: #e2e8f0;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"%3E%3Cpath fill="%23cbd5e1" fill-opacity="0.3" d="M0 0h30v30H0V0zm30 30h30v30H30V30z"/%3E%3C/svg%3E');
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.map-tag {
    background-color: var(--briants-bg-white);
    padding: 1.25rem;
    border: 1px solid var(--briants-border);
    border-radius: var(--briants-radius-md);
    box-shadow: var(--briants-shadow-md);
    text-align: center;
    max-width: 250px;
    margin: 1rem;
}

.map-tag i {
    font-size: 1.85rem;
    color: var(--briants-primary);
    margin-bottom: 0.5rem;
}

.map-tag h4 {
    font-family: var(--briants-font-headings);
    font-size: 0.95rem;
    margin: 0 0 0.25rem 0;
    color: var(--briants-text-dark);
}

.map-tag p {
    font-size: 0.75rem;
    color: var(--briants-text-light);
    margin: 0 0 0.75rem 0;
}

.map-tag .briants-btn {
    font-size: 0.75rem;
    padding: 0.45rem 0.85rem;
}

.hours-box {
    background-color: #f8fafc;
    padding: 1.75rem;
    border-top: 1px solid var(--briants-border);
}

.hours-box h4 {
    font-family: var(--briants-font-headings);
    font-size: 0.95rem;
    margin: 0 0 0.75rem 0;
    color: var(--briants-text-dark);
}

.hours-row-item {
    display: flex;
    justify-content: space-between;
    font-size: 0.82rem;
    color: var(--briants-text-light);
    margin-bottom: 0.35rem;
}

.hours-row-item:last-child {
    margin-bottom: 0;
}

.hours-row-item strong {
    color: var(--briants-text-dark);
}

@media (max-width: 900px) {
    .showroom-card-layout {
        grid-template-columns: 1fr;
    }
    .showroom-info-section {
        padding: 2rem 1.5rem;
    }
    .showroom-map-section {
        border-left: none;
        border-top: 1px solid var(--briants-border);
    }
}`
  },
  {
    id: "footer",
    name: "Landing Page Footer",
    category: "Footer",
    description: "The dark green footer featuring navigation columns, details on locations, and a newsletter sign-up container.",
    js: "",
    html: `<footer id="briants-footer" class="briants-module">
    <div class="footer-container">
        <div class="footer-grid">
            
            <div class="footer-col">
                <h4>Useful Links</h4>
                <ul class="footer-links">
                    <li><a href="#"><i class="fa-solid fa-angle-right"></i> Garden Machinery</a></li>
                    <li><a href="#"><i class="fa-solid fa-angle-right"></i> Timber & Fencing</a></li>
                    <li><a href="#"><i class="fa-solid fa-angle-right"></i> Tool Servicing & Repair</a></li>
                    <li><a href="#"><i class="fa-solid fa-angle-right"></i> About Our Company</a></li>
                    <li><a href="#"><i class="fa-solid fa-angle-right"></i> Contact & Location</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Showroom Hours</h4>
                <ul class="footer-hours">
                    <li><span>Mon - Fri:</span> <strong>7:00 AM - 4:45 PM</strong></li>
                    <li><span>Saturday:</span> <strong>8:00 AM - 12:00 PM</strong> <small>(Timber yard only)</small></li>
                    <li><span>Sunday:</span> <strong>Closed</strong></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Showroom Location</h4>
                <p class="footer-address">
                    Briants of Risborough Ltd,<br>
                    Thame Road, Longwick,<br>
                    Princes Risborough,<br>
                    Bucks, HP27 9SG
                </p>
            </div>

            <div class="footer-col">
                <h4>Newsletter Sign-up</h4>
                <p class="footer-news-desc">Get the latest timber yard updates, machinery deals, and tips straight to your inbox.</p>
                <form class="footer-form" onsubmit="event.preventDefault(); alert('Thank you for signing up!');">
                    <input type="email" placeholder="Your email address" required class="footer-input">
                    <button type="submit" class="briants-btn briants-btn-secondary footer-submit">Sign Up</button>
                </form>
                <div class="footer-socials">
                    <a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>

        </div>
        
        <div class="footer-bottom-bar">
            <p>&copy; 2026 Briants of Risborough Ltd. All rights reserved. Registered in England & Wales.</p>
            <p>Designed for Modular WordPress Block Integration.</p>
        </div>
    </div>
</footer>`,
    css: `/* ==========================================================================
   Landing Page Footer Styles
   ========================================================================== */

#briants-footer {
    background-color: var(--briants-primary);
    color: rgba(255, 255, 255, 0.75);
    border-top: 4px solid var(--briants-accent);
    font-size: 0.85rem;
}

#briants-footer .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1.5rem 2rem 1.5rem;
}

#briants-footer .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
    margin-bottom: 3rem;
}

#briants-footer h4 {
    color: var(--briants-bg-white);
    font-family: var(--briants-font-headings);
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 125rem 0; /* Wait, typo here: 1.25rem instead of 125rem. I will fix this */
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
}

#briants-footer h4 {
    margin: 0 0 1.25rem 0;
}

#briants-footer .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.65rem;
}

#briants-footer .footer-links a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    transition: var(--briants-transition);
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
}

#briants-footer .footer-links a:hover {
    color: var(--briants-accent);
    transform: translateX(2px);
}

#briants-footer .footer-hours {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.65rem;
}

#briants-footer .footer-hours li {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

#briants-footer .footer-hours strong {
    color: var(--briants-bg-white);
}

#briants-footer .footer-hours small {
    display: block;
    width: 100%;
    font-size: 0.72rem;
    opacity: 0.75;
    margin-top: 0.1rem;
}

#briants-footer .footer-address {
    line-height: 1.6;
    margin: 0;
}

#briants-footer .footer-news-desc {
    margin: 0 0 1rem 0;
    font-size: 0.8rem;
    line-height: 1.4;
}

#briants-footer .footer-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
}

#briants-footer .footer-input {
    padding: 0.6rem 0.75rem;
    border-radius: var(--briants-radius-sm);
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.08);
    color: var(--briants-bg-white);
    outline: none;
    font-size: 0.8rem;
    transition: var(--briants-transition);
}

#briants-footer .footer-input:focus {
    border-color: var(--briants-accent);
    background-color: rgba(255, 255, 255, 0.15);
}

#briants-footer .footer-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

#briants-footer .footer-submit {
    font-size: 0.8rem;
    padding: 0.6rem;
    border-radius: var(--briants-radius-sm);
}

#briants-footer .footer-socials {
    display: flex;
    gap: 0.75rem;
}

#briants-footer .social-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.08);
    color: var(--briants-bg-white);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: var(--briants-transition);
    font-size: 0.85rem;
}

#briants-footer .social-icon:hover {
    background-color: var(--briants-accent);
    color: var(--briants-primary);
    transform: translateY(-2px);
}

#briants-footer .footer-bottom-bar {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.55);
}

#briants-footer .footer-bottom-bar p {
    margin: 0;
}

@media (max-width: 1024px) {
    #briants-footer .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    #briants-footer .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    #briants-footer .footer-bottom-bar {
        flex-direction: column;
        text-align: center;
    }
}`
  }
];
