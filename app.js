/**
 * Shree Banaras Heritage - Royal Web Application Logic
 * Smooth text kinetic animations, interactive collection filtering,
 * gold dust canvas ambient effect, WhatsApp concierge integration.
 */

// Saree Masterpieces Database
const SAREE_COLLECTION = [
  {
    id: "sbh-01",
    name: "Shahi Lal Qila Bridal Katan Silk",
    hindiName: "शाही लाल किला दुल्हन कतान सिल्क",
    category: "bridal",
    categoryLabel: "Bridal Katan Silk",
    priceINR: 58500,
    originalPriceINR: 72000,
    image: "assets/hero_saree.jpg",
    ribbon: "Bridal Heirloom",
    zariType: "Pure Tested Antique Gold Zari",
    weaveTechnique: "Kadwa Hand-locked Weave",
    duration: "45 Days Handloom",
    weight: "860 Grams Pure Mulberry Silk",
    description: "An imperial bridal masterpiece handwoven in sacred Varanasi. Features all-over intricate Kadwa floral jaal with an opulent Kalash pallu and royal meenakari border. Backed by Silk Mark India and GI Varanasi certificates."
  },
  {
    id: "sbh-02",
    name: "Panna Emerald Shikargah Masterpiece",
    hindiName: "पन्ना पन्नावती शिकारगाह सिल्क",
    category: "shikargah",
    categoryLabel: "Shikargah & Jangla",
    priceINR: 48900,
    originalPriceINR: 61000,
    image: "assets/emerald_saree.jpg",
    ribbon: "Royal Collector",
    zariType: "Antique Matte Zari",
    weaveTechnique: "Shikargah Animal & Fauna Weave",
    duration: "52 Days Handloom",
    weight: "790 Grams Katan Silk",
    description: "Inspired by ancient Mughal hunting expeditions and holy forest motifs. Woven with magnificent dancing peacocks, elephants, and royal deer intertwined with golden creepers. A majestic statement for receptions and royal soirées."
  },
  {
    id: "sbh-03",
    name: "Neelambari Ganga-Jamuna Jangla",
    hindiName: "नीलाम्बरी गंगा-जमुनी जंगला जरी",
    category: "shikargah",
    categoryLabel: "Shikargah & Jangla",
    priceINR: 64500,
    originalPriceINR: 79000,
    image: "assets/blue_saree.jpg",
    ribbon: "Pure Silver & Gold Zari",
    zariType: "Real Silver & Electroplated Gold",
    weaveTechnique: "Ganga-Jamuna Kadwa Jaal",
    duration: "65 Days Handloom",
    weight: "920 Grams Heavy Silk",
    description: "Regal midnight navy silk embellished with dual-tone silver and gold metallic vines (Ganga-Jamuna weave). The pallu is a grand ode to Kashi’s temple architecture with dense floral rosettes."
  },
  {
    id: "sbh-04",
    name: "Gulabi Meenakari Kora Organza",
    hindiName: "गुलाबी मीनाकारी कोरा आर्गेन्जा",
    category: "kora",
    categoryLabel: "Kora & Organza",
    priceINR: 34800,
    originalPriceINR: 42000,
    image: "assets/hero_saree.jpg", // dynamic fallback styled
    ribbon: "Lightweight Elegance",
    zariType: "Micro-Zari Wire & Silk Resham",
    weaveTechnique: "Kora Sheer Pit Loom",
    duration: "28 Days Handloom",
    weight: "480 Grams Airy Silk",
    description: "A delicate symphony of translucent pure Kora silk paired with subtle blush hues and pastel resham meenakari butas. Perfectly suited for modern cocktail events and daytime wedding celebrations."
  },
  {
    id: "sbh-05",
    name: "Haldi Pitambari Tanchoi Silk",
    hindiName: "हल्दी पीताम्बरी तनछोई सिल्क",
    category: "tanchoi",
    categoryLabel: "Classic Tanchoi",
    priceINR: 31500,
    originalPriceINR: 39000,
    image: "assets/emerald_saree.jpg",
    ribbon: "Satin Finish",
    zariType: "Zero-Float Silk Satin Zari",
    weaveTechnique: "Traditional Gujarati-Banarasi Tanchoi",
    duration: "35 Days Handloom",
    weight: "650 Grams Fluid Silk",
    description: "Celebrated for its fluid satin drape and zero back floats. Woven in auspicious turmeric golden yellow with intricate paisleys, making it the supreme choice for Haldi, Poojas, and family festivities."
  },
  {
    id: "sbh-06",
    name: "Noor-e-Kashi Deep Wine Velvet Katan",
    hindiName: "नूर-ए-काशी डीप वाइन कतान जरी",
    category: "bridal",
    categoryLabel: "Bridal Katan Silk",
    priceINR: 59000,
    originalPriceINR: 74000,
    image: "assets/blue_saree.jpg",
    ribbon: "Limited Edition",
    zariType: "24K Tested Antique Gold",
    weaveTechnique: "Dense Kadwa Rangkat",
    duration: "48 Days Handloom",
    weight: "890 Grams Heavy Bridal",
    description: "Deep regal wine silhouette that exudes old-world royalty. The dense zari border frames your silhouette with royal majesty, and the heavy fall creates breathtaking photographs under candle and chandelier lighting."
  }
];

// Currency conversion rates
const CURRENCY_RATES = {
  INR: { symbol: "₹", rate: 1, locale: "en-IN" },
  USD: { symbol: "$", rate: 0.012, locale: "en-US" },
  GBP: { symbol: "£", rate: 0.0094, locale: "en-GB" },
  EUR: { symbol: "€", rate: 0.011, locale: "de-DE" }
};

let currentCurrency = "INR";
let wishlist = JSON.parse(localStorage.getItem("sbh_wishlist") || "[]");

// ==========================================================================
// 1. EDITORIAL GSAP HERO ANIMATION (MINIMAL LUXURY RESTRAINED MOTION)
// ==========================================================================
function initEditorialHeroAnimation() {
  const lines = document.querySelectorAll(".hero-line");
  const sub = document.querySelector(".hero-editorial-sub");
  const cta = document.querySelector(".hero-editorial-cta");
  const img = document.querySelector(".hero-bg-img");

  if (typeof gsap === "undefined") {
    // Graceful fallback
    lines.forEach(l => (l.style.transform = "translateY(0%)"));
    if (sub) {
      sub.style.opacity = "0.78";
      sub.style.transform = "translateY(0)";
    }
    if (cta) {
      cta.style.opacity = "1";
      cta.style.transform = "translateY(0)";
    }
    if (img) img.style.transform = "scale(1)";
    return;
  }

  // Very subtle image scale: 1.03 -> 1
  gsap.fromTo(
    img,
    { scale: 1.03 },
    {
      scale: 1.0,
      duration: 2.2,
      ease: "power2.out"
    }
  );

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animate heading line-by-line: translateY(105%) -> 0
  tl.to(lines, {
    y: "0%",
    duration: 1.1,
    stagger: 0.16,
    delay: 0.2,
    ease: "power3.out"
  })
    // Softly reveal subtitle
    .fromTo(
      sub,
      { opacity: 0, y: 15 },
      {
        opacity: 0.78,
        y: 0,
        duration: 1.0,
        ease: "power2.out"
      },
      "-=0.5"
    )
    // Softly reveal CTA
    .fromTo(
      cta,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out"
      },
      "-=0.6"
    );
}

// ==========================================================================
// 2. SIGNATURE WEAVES GSAP + SCROLLTRIGGER ANIMATION
// ==========================================================================
function initSignatureWeavesAnimation() {
  const section = document.querySelector(".signature-weaves-section");
  if (!section) return;

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    // Graceful fallback if GSAP or ScrollTrigger is unavailable
    const title = document.querySelector(".sw-title");
    if (title) title.style.transform = "translateY(0%)";
    const sub = document.querySelector(".sw-subtitle");
    if (sub) {
      sub.style.opacity = "1";
      sub.style.transform = "translateY(0)";
    }
    const panels = document.querySelectorAll(".sw-panel");
    panels.forEach(p => {
      p.style.opacity = "1";
      p.style.transform = "translateY(0)";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 1. Masked title reveal on scroll (sliding up from overflow:hidden wrap)
  gsap.fromTo(".sw-title", 
    { y: "105%" },
    {
      y: "0%",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sw-header",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // 2. Subtitle soft reveal
  gsap.fromTo(".sw-subtitle",
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".sw-header",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // 3. Editorial Panels sequential staggered reveal
  gsap.fromTo(".sw-panel",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sw-panels-grid",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // 4. Very subtle parallax on images while scrolling
  const panels = document.querySelectorAll(".sw-panel");
  panels.forEach(panel => {
    const img = panel.querySelector(".sw-panel-img");
    if (img) {
      gsap.to(img, {
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });
    }
  });
}

// ==========================================================================
// 3. CURRENCY FORMATTER
// ==========================================================================
function formatPrice(amountINR) {
  const config = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.INR;
  const converted = Math.round(amountINR * config.rate);
  return `${config.symbol} ${converted.toLocaleString(config.locale)}`;
}

// ==========================================================================
// 4. RENDER SAREE PRODUCTS
// ==========================================================================
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? SAREE_COLLECTION
    : SAREE_COLLECTION.filter(s => s.category === filter);

  grid.innerHTML = filtered.map(saree => {
    const isWishlisted = wishlist.includes(saree.id);
    const waText = encodeURIComponent(
      `Namaste Shree Banaras Heritage! I am interested in viewing the "${saree.name}" (${formatPrice(saree.priceINR)}). Please share loom video and details.`
    );

    return `
      <article class="product-card" data-id="${saree.id}">
        <div class="product-media">
          <span class="product-ribbon">${saree.ribbon}</span>
          <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${saree.id}')" 
                  aria-label="Add ${saree.name} to Wishlist">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <img src="${saree.image}" alt="${saree.name}" class="product-img" loading="lazy">
          <div class="product-overlay-actions">
            <button class="quick-view-btn" onclick="openProductModal('${saree.id}')">
              <span>View Silk & Zari Details</span>
            </button>
          </div>
        </div>

        <div class="product-details">
          <span class="product-category">${saree.categoryLabel}</span>
          <h3 class="product-name">${saree.name}</h3>

          <div class="product-meta-specs">
            <span class="meta-spec-item">🪡 ${saree.weaveTechnique.split(' ')[0]}</span>
            <span>•</span>
            <span class="meta-spec-item">⏳ ${saree.duration.split(' ')[0]} ${saree.duration.split(' ')[1]}</span>
            <span>•</span>
            <span class="meta-spec-item">⚜️ Tested Zari</span>
          </div>

          <div class="product-bottom-row">
            <div class="product-price-box">
              <span class="price-main">${formatPrice(saree.priceINR)}</span>
              <span class="price-strike">${formatPrice(saree.originalPriceINR)}</span>
            </div>

            <a href="https://wa.me/919838001080?text=${waText}" target="_blank" rel="noopener noreferrer" class="wa-inquire-btn" aria-label="Inquire on WhatsApp about ${saree.name}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.04c-.24.68-1.4 1.27-1.92 1.35-.49.07-1.12.1-3.64-.94-3.22-1.33-5.28-4.6-5.44-4.81-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4.84-.4.21 0 .42 0 .61.01.2.01.47-.08.73.55.26.64.9 2.19.98 2.35.08.16.13.35.03.56-.1.21-.16.35-.32.53-.16.19-.34.42-.48.56-.16.16-.33.33-.14.65.19.32.84 1.38 1.8 2.24 1.24 1.1 2.28 1.44 2.6 1.6.32.16.51.13.7-.08.19-.21.82-.95 1.04-1.28.22-.32.43-.27.73-.16.29.11 1.86.88 2.18 1.04.32.16.53.24.61.37.08.14.08.79-.16 1.47z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================================================
// 5. QUICK VIEW MODAL
// ==========================================================================
function openProductModal(id) {
  const saree = SAREE_COLLECTION.find(s => s.id === id);
  if (!saree) return;

  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;

  const waText = encodeURIComponent(
    `Namaste Shree Banaras! I am looking at "${saree.name}" (${formatPrice(saree.priceINR)}). Can you please arrange a video call to inspect the zari and pallu?`
  );

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-image-wrap">
        <img src="${saree.image}" alt="${saree.name}">
      </div>

      <div class="modal-info">
        <span class="modal-badge">${saree.categoryLabel} • ${saree.ribbon}</span>
        <h2 class="modal-title">${saree.name}</h2>
        <div class="modal-price">${formatPrice(saree.priceINR)} <span class="price-strike">${formatPrice(saree.originalPriceINR)}</span></div>

        <p class="modal-desc">${saree.description}</p>

        <div class="modal-specs-list">
          <div class="modal-spec-row">
            <span>Zari Quality:</span>
            <strong>${saree.zariType}</strong>
          </div>
          <div class="modal-spec-row">
            <span>Weaving Craft:</span>
            <strong>${saree.weaveTechnique}</strong>
          </div>
          <div class="modal-spec-row">
            <span>Handloom Time:</span>
            <strong>${saree.duration}</strong>
          </div>
          <div class="modal-spec-row">
            <span>Fabric Weight:</span>
            <strong>${saree.weight}</strong>
          </div>
          <div class="modal-spec-row">
            <span>Certification:</span>
            <strong>Silk Mark India & GI Varanasi</strong>
          </div>
        </div>

        <div class="modal-actions">
          <a href="https://wa.me/919838001080?text=${waText}" target="_blank" rel="noopener noreferrer" class="royal-btn primary-btn" style="flex: 1;">
            <span>Inquire on WhatsApp</span>
          </a>
          <button class="royal-btn secondary-btn" onclick="toggleWishlist('${saree.id}'); updateModalWishlistBtn('${saree.id}');">
            <span id="modalWishlistLabel">${wishlist.includes(saree.id) ? '♥ In Wishlist' : '♡ Add to Wishlist'}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateModalWishlistBtn(id) {
  const label = document.getElementById("modalWishlistLabel");
  if (label) {
    label.textContent = wishlist.includes(id) ? "♥ In Wishlist" : "♡ Add to Wishlist";
  }
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// 6. WISHLIST MANAGEMENT
// ==========================================================================
function toggleWishlist(id) {
  const index = wishlist.indexOf(id);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem("sbh_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts(getCurrentFilter());
}

function updateWishlistUI() {
  const count = wishlist.length;
  const headerCount = document.getElementById("wishlistCount");
  const drawerCount = document.getElementById("drawerWishlistCount");
  if (headerCount) headerCount.textContent = count;
  if (drawerCount) drawerCount.textContent = count;

  renderWishlistDrawer();
}

function renderWishlistDrawer() {
  const content = document.getElementById("drawerContent");
  const footer = document.getElementById("drawerFooter");
  if (!content) return;

  if (wishlist.length === 0) {
    content.innerHTML = `<p class="empty-wishlist">Your royal wishlist is currently empty. Explore our handcrafted sarees and click the heart icon to save your favorites.</p>`;
    if (footer) footer.style.display = "none";
    return;
  }

  const items = SAREE_COLLECTION.filter(s => wishlist.includes(s.id));
  content.innerHTML = items.map(s => `
    <div class="drawer-item">
      <img src="${s.image}" alt="${s.name}" class="drawer-item-img">
      <div class="drawer-item-info">
        <h4 class="drawer-item-name">${s.name}</h4>
        <div class="drawer-item-price">${formatPrice(s.priceINR)}</div>
      </div>
      <button onclick="toggleWishlist('${s.id}')" style="color: #900; font-size: 1.2rem;" title="Remove">✕</button>
    </div>
  `).join("");

  if (footer) {
    footer.style.display = "block";
    const allNames = items.map(i => i.name).join(", ");
    const waText = encodeURIComponent(
      `Namaste Shree Banaras Heritage! I have shortlisted these ${items.length} sarees in my wishlist: ${allNames}. Please share pricing and video consultation options.`
    );
    const inquireBtn = document.getElementById("inquireAllWishlistBtn");
    if (inquireBtn) {
      inquireBtn.onclick = () => {
        window.open(`https://wa.me/919838001080?text=${waText}`, "_blank");
      };
    }
  }
}

function openWishlistDrawer() {
  const drawer = document.getElementById("wishlistDrawer");
  if (!drawer) return;
  drawer.classList.add("active");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeWishlistDrawer() {
  const drawer = document.getElementById("wishlistDrawer");
  if (!drawer) return;
  drawer.classList.remove("active");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function getCurrentFilter() {
  const activeTab = document.querySelector(".filter-tab.active");
  return activeTab ? activeTab.getAttribute("data-filter") : "all";
}

// ==========================================================================
// 7. INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Editorial GSAP Hero Line-by-line Animation
  initEditorialHeroAnimation();

  // 2. Signature Weaves GSAP ScrollTrigger Animation
  initSignatureWeavesAnimation();

  // 3. Render initial products
  renderProducts("all");
  updateWishlistUI();

  // 4. Filter tabs
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderProducts(filter);
    });
  });

  // 5. Currency selector
  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    currencySelect.addEventListener("change", (e) => {
      currentCurrency = e.target.value;
      renderProducts(getCurrentFilter());
      renderWishlistDrawer();
    });
  }

  // 6. Wishlist drawer toggles
  const wishlistBtn = document.getElementById("wishlistHeaderBtn");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  if (wishlistBtn) wishlistBtn.addEventListener("click", openWishlistDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeWishlistDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeWishlistDrawer);

  // 7. Modal toggles
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeProductModal);

  // 8. Inspect Hero Button
  const inspectHeroBtn = document.getElementById("inspectHeroBtn");
  if (inspectHeroBtn) {
    inspectHeroBtn.addEventListener("click", () => {
      openProductModal("sbh-01");
    });
  }

  // 9. Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const royalNav = document.getElementById("royalNav");
  if (mobileMenuBtn && royalNav) {
    mobileMenuBtn.addEventListener("click", () => {
      royalNav.classList.toggle("open");
    });

    // Close mobile nav when clicking nav links
    royalNav.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        royalNav.classList.remove("open");
      });
    });
  }

  // 10. Consultation Form
  const form = document.getElementById("consultationForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("clientName").value.trim();
      const phone = document.getElementById("clientPhone").value.trim();
      const city = document.getElementById("clientCity").value.trim();
      const interest = document.getElementById("sareeInterest").value;

      const waMsg = encodeURIComponent(
        `Namaste Shree Banaras! I would like to book a WhatsApp Video Tour.\n\nName: ${name}\nPhone: ${phone}\nCity: ${city}\nInterested In: ${interest}`
      );

      window.open(`https://wa.me/919838001080?text=${waMsg}`, "_blank");
      alert(`Dhanyavaad ${name} Ji! Opening WhatsApp to confirm your personalized royal appointment.`);
      form.reset();
    });
  }
});
