(function () {
  "use strict";

  var CART_KEY = "amazon_clone_cart_v1";
  var WISHLIST_KEY = "amazon_clone_wishlist_v1";
  var TAX_RATE = 0.0825;

  var categories = [
    {
      name: "Electronics",
      colorA: "#164e63",
      colorB: "#67e8f9",
      accent: "#ff9900",
      label: "Audio + smart gear"
    },
    {
      name: "Fashion",
      colorA: "#7c2d12",
      colorB: "#fed7aa",
      accent: "#111827",
      label: "Everyday style"
    },
    {
      name: "Home Decor",
      colorA: "#14532d",
      colorB: "#bbf7d0",
      accent: "#f59e0b",
      label: "Room refresh"
    },
    {
      name: "Beauty",
      colorA: "#9d174d",
      colorB: "#fbcfe8",
      accent: "#7f1d1d",
      label: "Self-care picks"
    },
    {
      name: "Gaming",
      colorA: "#312e81",
      colorB: "#c4b5fd",
      accent: "#ff9900",
      label: "Play-ready setups"
    },
    {
      name: "Books",
      colorA: "#78350f",
      colorB: "#fde68a",
      accent: "#1f2937",
      label: "Stories + learning"
    },
    {
      name: "Kitchen",
      colorA: "#0f766e",
      colorB: "#ccfbf1",
      accent: "#dc2626",
      label: "Cookware essentials"
    },
    {
      name: "Toys",
      colorA: "#be123c",
      colorB: "#fecdd3",
      accent: "#2563eb",
      label: "Fun for all ages"
    }
  ];

  var products = [
    {
      id: "p-001",
      title: "Aurora Wireless Noise-Canceling Headphones",
      brand: "SoundPeak",
      category: "Electronics",
      price: 89.99,
      originalPrice: 149.99,
      rating: 4.7,
      reviews: 8421,
      prime: true,
      description: "Soft memory-foam earcups, punchy bass, clear calls, and up to 38 hours of battery life for focused listening anywhere.",
      colors: ["#0f172a", "#60a5fa", "#ff9900"],
      label: "Wireless audio"
    },
    {
      id: "p-002",
      title: "Nova 10-Inch Tablet with HD Display",
      brand: "Tablio",
      category: "Electronics",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.5,
      reviews: 5312,
      prime: true,
      description: "A lightweight tablet for streaming, reading, browsing, and video calls, with expandable storage and a vivid display.",
      colors: ["#1e3a8a", "#93c5fd", "#facc15"],
      label: "HD tablet"
    },
    {
      id: "p-003",
      title: "Pulse Smart Fitness Watch",
      brand: "WellTrack",
      category: "Electronics",
      price: 49.99,
      originalPrice: 89.99,
      rating: 4.4,
      reviews: 7280,
      prime: true,
      description: "Track workouts, heart rate, sleep, and notifications with a slim water-resistant fitness watch.",
      colors: ["#111827", "#22c55e", "#e5e7eb"],
      label: "Smart watch"
    },
    {
      id: "p-004",
      title: "Compact USB-C Fast Charging Hub",
      brand: "VoltEdge",
      category: "Electronics",
      price: 24.99,
      originalPrice: 39.99,
      rating: 4.6,
      reviews: 1992,
      prime: false,
      description: "A travel-ready charging hub with USB-C power delivery, USB-A ports, and heat protection for daily devices.",
      colors: ["#374151", "#e5e7eb", "#ff9900"],
      label: "Power hub"
    },
    {
      id: "p-005",
      title: "Everyday Stretch Denim Jacket",
      brand: "Northline",
      category: "Fashion",
      price: 54.5,
      originalPrice: 79.99,
      rating: 4.3,
      reviews: 2441,
      prime: true,
      description: "A polished denim layer with just-right stretch, clean seams, and a relaxed fit for all-season outfits.",
      colors: ["#1d4ed8", "#bfdbfe", "#f97316"],
      label: "Denim jacket"
    },
    {
      id: "p-006",
      title: "CloudStep Lightweight Running Sneakers",
      brand: "StrideLab",
      category: "Fashion",
      price: 62.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 9811,
      prime: true,
      description: "Breathable running sneakers with a cushioned sole, grippy tread, and lightweight knit upper.",
      colors: ["#0f172a", "#f8fafc", "#fb923c"],
      label: "Running shoes"
    },
    {
      id: "p-007",
      title: "Classic Canvas Travel Backpack",
      brand: "Wayfarer",
      category: "Fashion",
      price: 38.99,
      originalPrice: 58.99,
      rating: 4.5,
      reviews: 3210,
      prime: false,
      description: "A sturdy daily backpack with padded laptop storage, bottle pockets, and clean commuter styling.",
      colors: ["#44403c", "#d6d3d1", "#0f766e"],
      label: "Travel bag"
    },
    {
      id: "p-008",
      title: "SoftTouch Ribbed Lounge Set",
      brand: "Harbor & Stitch",
      category: "Fashion",
      price: 44.99,
      originalPrice: 69.99,
      rating: 4.2,
      reviews: 1184,
      prime: true,
      description: "A matching lounge set with a smooth ribbed handfeel, relaxed drape, and easy machine-wash care.",
      colors: ["#9f1239", "#fecdd3", "#1f2937"],
      label: "Lounge set"
    },
    {
      id: "p-009",
      title: "Linen Textured Throw Pillow Pair",
      brand: "CasaVale",
      category: "Home Decor",
      price: 26.99,
      originalPrice: 44.99,
      rating: 4.6,
      reviews: 3067,
      prime: true,
      description: "Two linen-look throw pillows with hidden zippers and plush inserts for sofas, beds, and reading chairs.",
      colors: ["#365314", "#ecfccb", "#ca8a04"],
      label: "Pillow pair"
    },
    {
      id: "p-010",
      title: "WarmGlow Ceramic Table Lamp",
      brand: "CasaVale",
      category: "Home Decor",
      price: 69.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 4129,
      prime: true,
      description: "A sculptural ceramic lamp with a woven shade, warm diffused light, and compact nightstand footprint.",
      colors: ["#78350f", "#fde68a", "#f97316"],
      label: "Table lamp"
    },
    {
      id: "p-011",
      title: "Modern Wall Shelf Set of Three",
      brand: "Shelf & Co.",
      category: "Home Decor",
      price: 31.49,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 1970,
      prime: false,
      description: "Three floating shelves with hidden brackets for plants, frames, books, and compact storage moments.",
      colors: ["#422006", "#fef3c7", "#0284c7"],
      label: "Wall shelves"
    },
    {
      id: "p-012",
      title: "Ultra Soft Microfiber Area Rug",
      brand: "NestForm",
      category: "Home Decor",
      price: 84.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 6412,
      prime: true,
      description: "A low-pile area rug with a velvety surface, non-slip backing, and easy vacuum-friendly construction.",
      colors: ["#334155", "#cbd5e1", "#f59e0b"],
      label: "Area rug"
    },
    {
      id: "p-013",
      title: "HydraGlow Vitamin C Serum",
      brand: "LumaSkin",
      category: "Beauty",
      price: 18.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 8834,
      prime: true,
      description: "A lightweight serum formulated with vitamin C, hyaluronic acid, and botanical extracts for a brighter look.",
      colors: ["#9d174d", "#fbcfe8", "#f59e0b"],
      label: "Face serum"
    },
    {
      id: "p-014",
      title: "Botanical Spa Bath Gift Set",
      brand: "PureBloom",
      category: "Beauty",
      price: 34.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 2750,
      prime: true,
      description: "A giftable bath set with body wash, lotion, salts, and a candle in calming botanical scents.",
      colors: ["#831843", "#fce7f3", "#14b8a6"],
      label: "Spa set"
    },
    {
      id: "p-015",
      title: "SalonPro Ceramic Hair Dryer",
      brand: "GlossWorks",
      category: "Beauty",
      price: 57.99,
      originalPrice: 89.99,
      rating: 4.4,
      reviews: 1599,
      prime: false,
      description: "A ceramic hair dryer with multiple heat settings, diffuser attachment, and a smooth matte finish.",
      colors: ["#3f3f46", "#f5f5f5", "#ec4899"],
      label: "Hair dryer"
    },
    {
      id: "p-016",
      title: "Daily Mineral Sunscreen SPF 45",
      brand: "SunKind",
      category: "Beauty",
      price: 16.5,
      originalPrice: 24.99,
      rating: 4.5,
      reviews: 6242,
      prime: true,
      description: "A sheer mineral sunscreen with a soft-touch finish for daily face and neck protection.",
      colors: ["#0e7490", "#cffafe", "#fbbf24"],
      label: "SPF care"
    },
    {
      id: "p-017",
      title: "ArcadeMax Wireless Gaming Controller",
      brand: "GameForge",
      category: "Gaming",
      price: 39.99,
      originalPrice: 64.99,
      rating: 4.7,
      reviews: 7905,
      prime: true,
      description: "A responsive wireless controller with textured grips, programmable buttons, and long battery life.",
      colors: ["#1e1b4b", "#a78bfa", "#ff9900"],
      label: "Controller"
    },
    {
      id: "p-018",
      title: "RGB Mechanical Keyboard",
      brand: "KeyStorm",
      category: "Gaming",
      price: 74.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviews: 4167,
      prime: true,
      description: "A tactile mechanical keyboard with per-key lighting, media controls, and a compact desk-friendly layout.",
      colors: ["#111827", "#818cf8", "#22d3ee"],
      label: "Keyboard"
    },
    {
      id: "p-019",
      title: "UltraWide Gaming Mouse Pad",
      brand: "GameForge",
      category: "Gaming",
      price: 19.99,
      originalPrice: 32.99,
      rating: 4.3,
      reviews: 1944,
      prime: false,
      description: "A smooth extended mouse pad with stitched edges, anti-slip backing, and spill-resistant surface.",
      colors: ["#020617", "#475569", "#8b5cf6"],
      label: "Desk mat"
    },
    {
      id: "p-020",
      title: "Immersive 7.1 Gaming Headset",
      brand: "EchoQuest",
      category: "Gaming",
      price: 68.99,
      originalPrice: 99.99,
      rating: 4.4,
      reviews: 3855,
      prime: true,
      description: "A padded gaming headset with spatial audio, flip-to-mute microphone, and platform-ready connection.",
      colors: ["#0f172a", "#38bdf8", "#f97316"],
      label: "Gaming audio"
    },
    {
      id: "p-021",
      title: "The Practical Guide to Modern Cooking",
      brand: "PagePress",
      category: "Books",
      price: 22.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 1204,
      prime: true,
      description: "A beautifully organized cookbook with weeknight staples, pantry guidance, and clear technique primers.",
      colors: ["#92400e", "#fde68a", "#dc2626"],
      label: "Cookbook"
    },
    {
      id: "p-022",
      title: "Deep Workflows for Creative Teams",
      brand: "Northstar Books",
      category: "Books",
      price: 17.99,
      originalPrice: 27.99,
      rating: 4.5,
      reviews: 988,
      prime: false,
      description: "A practical book about planning, focus, creative collaboration, and sustainable project momentum.",
      colors: ["#1f2937", "#d1d5db", "#f59e0b"],
      label: "Productivity"
    },
    {
      id: "p-023",
      title: "Midnight Harbor Mystery Novel",
      brand: "Fiction House",
      category: "Books",
      price: 12.99,
      originalPrice: 19.99,
      rating: 4.4,
      reviews: 2098,
      prime: true,
      description: "A page-turning coastal mystery with atmospheric settings, clever clues, and a satisfying reveal.",
      colors: ["#0f172a", "#94a3b8", "#38bdf8"],
      label: "Mystery novel"
    },
    {
      id: "p-024",
      title: "Illustrated Science Facts for Curious Kids",
      brand: "BrightLeaf",
      category: "Books",
      price: 14.99,
      originalPrice: 21.99,
      rating: 4.7,
      reviews: 3561,
      prime: true,
      description: "A lively illustrated science book with bite-size explanations, diagrams, experiments, and fun quizzes.",
      colors: ["#166534", "#bbf7d0", "#2563eb"],
      label: "Kids science"
    },
    {
      id: "p-025",
      title: "ChefMate Nonstick Cookware Set",
      brand: "ChefMate",
      category: "Kitchen",
      price: 96.99,
      originalPrice: 149.99,
      rating: 4.6,
      reviews: 6714,
      prime: true,
      description: "A versatile nonstick cookware set with stay-cool handles, glass lids, and even-heating bases.",
      colors: ["#0f766e", "#ccfbf1", "#ef4444"],
      label: "Cookware"
    },
    {
      id: "p-026",
      title: "Countertop Espresso Maker",
      brand: "BrewNest",
      category: "Kitchen",
      price: 118.99,
      originalPrice: 189.99,
      rating: 4.5,
      reviews: 2480,
      prime: true,
      description: "A compact espresso maker with milk frother, pressure gauge, and easy-clean drip tray.",
      colors: ["#422006", "#fef3c7", "#0f172a"],
      label: "Espresso"
    },
    {
      id: "p-027",
      title: "Airtight Pantry Storage Containers",
      brand: "NeatStack",
      category: "Kitchen",
      price: 29.99,
      originalPrice: 46.99,
      rating: 4.7,
      reviews: 5022,
      prime: false,
      description: "Stackable airtight containers with labels, locking lids, and clear walls for tidy pantry storage.",
      colors: ["#155e75", "#cffafe", "#f97316"],
      label: "Storage set"
    },
    {
      id: "p-028",
      title: "Rainbow Building Blocks 120-Piece Set",
      brand: "PlayPatch",
      category: "Toys",
      price: 28.99,
      originalPrice: 44.99,
      rating: 4.8,
      reviews: 7133,
      prime: true,
      description: "A colorful block set designed for open-ended building, sorting, counting, and creative play.",
      colors: ["#be123c", "#fecdd3", "#2563eb"],
      label: "Blocks"
    },
    {
      id: "p-029",
      title: "STEM Solar Robot Kit",
      brand: "CurioLab",
      category: "Toys",
      price: 35.99,
      originalPrice: 55.99,
      rating: 4.5,
      reviews: 2120,
      prime: true,
      description: "A hands-on solar robot kit with multiple build modes, clear instructions, and screen-free learning.",
      colors: ["#1e40af", "#dbeafe", "#f59e0b"],
      label: "Robot kit"
    },
    {
      id: "p-030",
      title: "Plush Storytime Animal Collection",
      brand: "SnuggleTown",
      category: "Toys",
      price: 21.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 4451,
      prime: false,
      description: "A soft plush character set for bedtime stories, imaginative play, and cozy gifting.",
      colors: ["#7e22ce", "#e9d5ff", "#ef4444"],
      label: "Plush set"
    }
  ];

  var categoryPhotos = {
    "Electronics": "photo-1519389950473-47ba0277781c",
    "Fashion": "photo-1483985988355-763728e1935b",
    "Home Decor": "photo-1513694203232-719a280e022f",
    "Beauty": "photo-1522335789203-aabd1fc54bc9",
    "Gaming": "photo-1542751371-adc38448a05e",
    "Books": "photo-1495446815901-a7297e633e8d",
    "Kitchen": "photo-1556911220-bff31c812dba",
    "Toys": "photo-1566576912321-d58ddd7a6088"
  };

  var productPhotos = {
    "p-001": "photo-1505740420928-5e560c06d30e",
    "p-002": "photo-1544244015-0df4b3ffc6b0",
    "p-003": "photo-1523275335684-37898b6baf30",
    "p-004": "photo-1588872657578-7efd1f1555ed",
    "p-005": "photo-1543076447-215ad9ba6923",
    "p-006": "photo-1542291026-7eec264c27ff",
    "p-007": "photo-1553062407-98eeb64c6a62",
    "p-008": "photo-1529139574466-a303027c1d8b",
    "p-009": "photo-1555041469-a586c61ea9bc",
    "p-010": "photo-1507473885765-e6ed057f782c",
    "p-011": "photo-1524758631624-e2822e304c36",
    "p-012": "photo-1519710164239-da123dc03ef4",
    "p-013": "photo-1608248597279-f99d160bfcbc",
    "p-014": "photo-1571781926291-c477ebfd024b",
    "p-015": "photo-1522337360788-8b13dee7a37e",
    "p-016": "photo-1620916566398-39f1143ab7be",
    "p-017": "photo-1605901309584-818e25960a8f",
    "p-018": "photo-1587829741301-dc798b83add3",
    "p-019": "photo-1527814050087-3793815479db",
    "p-020": "photo-1599669454699-248893623440",
    "p-021": "photo-1543352634-a1c51d9f1fa7",
    "p-022": "photo-1481627834876-b7833e8f5570",
    "p-023": "photo-1519682337058-a94d519337bc",
    "p-024": "photo-1512820790803-83ca734da794",
    "p-025": "photo-1556911220-e15b29be8c8f",
    "p-026": "photo-1514432324607-a09d9b4aefdd",
    "p-027": "photo-1595526114035-0d45ed16cfbf",
    "p-028": "photo-1566576912321-d58ddd7a6088",
    "p-029": "photo-1485827404703-89b55fcc595e",
    "p-030": "photo-1558060370-d644479cb6f7"
  };

  var state = {
    cart: readStorage(CART_KEY, {}),
    wishlist: readStorage(WISHLIST_KEY, []),
    search: "",
    category: "all",
    sort: "featured",
    activeSlide: 0,
    carouselTimer: null
  };

  var dom = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheDom();
    attachEvents();
    prepareImages();
    renderCategories();
    renderFilters();
    renderProducts();
    renderDeals();
    renderRecommendations();
    renderCart();
    setupCarousel();
    updateCountdown();
    window.setInterval(updateCountdown, 1000);

    window.setTimeout(function () {
      dom.appLoader.classList.add("is-hidden");
    }, 350);
  }

  function cacheDom() {
    dom.appLoader = document.getElementById("appLoader");
    dom.siteHeader = document.getElementById("siteHeader");
    dom.searchForm = document.getElementById("searchForm");
    dom.searchInput = document.getElementById("productSearch");
    dom.searchCategory = document.getElementById("searchCategory");
    dom.sortSelect = document.getElementById("sortSelect");
    dom.categoryGrid = document.getElementById("categoryGrid");
    dom.filterRow = document.getElementById("filterRow");
    dom.productGrid = document.getElementById("productGrid");
    dom.resultCount = document.getElementById("resultCount");
    dom.emptyState = document.getElementById("emptyState");
    dom.clearFiltersBtn = document.getElementById("clearFiltersBtn");
    dom.dealsGrid = document.getElementById("dealsGrid");
    dom.dealCountdown = document.getElementById("dealCountdown");
    dom.bundlePanel = document.getElementById("bundlePanel");
    dom.recommendedGrid = document.getElementById("recommendedGrid");
    dom.cartOpenBtn = document.getElementById("cartOpenBtn");
    dom.cartCloseBtn = document.getElementById("cartCloseBtn");
    dom.cartDrawer = document.getElementById("cartDrawer");
    dom.cartOverlay = document.getElementById("cartOverlay");
    dom.cartItems = document.getElementById("cartItems");
    dom.cartCount = document.getElementById("cartCount");
    dom.cartSubtotal = document.getElementById("cartSubtotal");
    dom.cartTax = document.getElementById("cartTax");
    dom.cartTotal = document.getElementById("cartTotal");
    dom.emptyCartBtn = document.getElementById("emptyCartBtn");
    dom.quickViewOverlay = document.getElementById("quickViewOverlay");
    dom.quickViewModal = document.getElementById("quickViewModal");
    dom.quickViewContent = document.getElementById("quickViewContent");
    dom.quickViewClose = document.getElementById("quickViewClose");
    dom.heroCarousel = document.getElementById("heroCarousel");
    dom.heroPrev = document.getElementById("heroPrev");
    dom.heroNext = document.getElementById("heroNext");
    dom.heroDots = document.getElementById("heroDots");
    dom.backToTop = document.getElementById("backToTop");
    dom.toastRegion = document.getElementById("toastRegion");
  }

  function attachEvents() {
    window.addEventListener("scroll", function () {
      dom.siteHeader.classList.toggle("is-scrolled", window.scrollY > 4);
    });

    dom.searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    dom.searchInput.addEventListener("input", function (event) {
      state.search = event.target.value.trim().toLowerCase();
      renderProducts();
    });

    dom.searchCategory.addEventListener("change", function (event) {
      state.category = event.target.value;
      syncActiveFilter();
      renderProducts();
    });

    dom.sortSelect.addEventListener("change", function (event) {
      state.sort = event.target.value;
      renderProducts();
    });

    dom.filterRow.addEventListener("click", function (event) {
      var button = event.target.closest("[data-filter]");
      if (!button) return;
      state.category = button.dataset.filter;
      dom.searchCategory.value = state.category;
      syncActiveFilter();
      renderProducts();
    });

    dom.clearFiltersBtn.addEventListener("click", function () {
      state.search = "";
      state.category = "all";
      dom.searchInput.value = "";
      dom.searchCategory.value = "all";
      syncActiveFilter();
      renderProducts();
    });

    dom.productGrid.addEventListener("click", handleProductGridClick);
    dom.dealsGrid.addEventListener("click", handleProductGridClick);
    dom.recommendedGrid.addEventListener("click", handleProductGridClick);
    dom.bundlePanel.addEventListener("click", handleBundleClick);

    dom.cartOpenBtn.addEventListener("click", openCart);
    dom.cartCloseBtn.addEventListener("click", closeCart);
    dom.cartOverlay.addEventListener("click", closeCart);
    dom.cartItems.addEventListener("click", handleCartClick);
    dom.emptyCartBtn.addEventListener("click", emptyCart);

    dom.quickViewOverlay.addEventListener("click", closeQuickView);
    dom.quickViewClose.addEventListener("click", closeQuickView);

    dom.backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeCart();
        closeQuickView();
      }
    });
  }

  function prepareImages() {
    categories.forEach(function (category) {
      category.image = unsplash(categoryPhotos[category.name] || "photo-1519389950473-47ba0277781c", 900, 640);
    });

    products.forEach(function (product) {
      product.image = unsplash(productPhotos[product.id] || categoryPhotos[product.category] || "photo-1519389950473-47ba0277781c", 900, 640);
      product.discount = getDiscount(product);
    });
  }

  function renderCategories() {
    dom.categoryGrid.innerHTML = categories
      .map(function (category) {
        return [
          '<article class="category-card" id="' + slug(category.name) + '">',
          '  <div class="category-media">',
          '    <img loading="lazy" src="' + category.image + '" alt="' + escapeHtml(category.name) + ' category">',
          "  </div>",
          "  <div>",
          "    <h3>" + escapeHtml(category.name) + "</h3>",
          '    <a href="#products" data-filter-link="' + escapeHtml(category.name) + '">Shop Now</a>',
          "  </div>",
          "</article>"
        ].join("");
      })
      .join("");

    dom.categoryGrid.addEventListener("click", function (event) {
      var link = event.target.closest("[data-filter-link]");
      if (!link) return;
      state.category = link.dataset.filterLink;
      dom.searchCategory.value = state.category;
      syncActiveFilter();
      renderProducts();
    });
  }

  function renderFilters() {
    var filters = [{ name: "All", value: "all" }].concat(
      categories.map(function (category) {
        return { name: category.name, value: category.name };
      })
    );

    dom.filterRow.innerHTML = filters
      .map(function (filter) {
        return (
          '<button class="filter-chip" type="button" data-filter="' +
          escapeHtml(filter.value) +
          '">' +
          escapeHtml(filter.name) +
          "</button>"
        );
      })
      .join("");
    syncActiveFilter();
  }

  function renderProducts() {
    var visibleProducts = getVisibleProducts();
    dom.resultCount.textContent = visibleProducts.length + (visibleProducts.length === 1 ? " product" : " products");
    dom.emptyState.hidden = visibleProducts.length !== 0;
    dom.productGrid.innerHTML = visibleProducts.map(productCardTemplate).join("");
  }

  function getVisibleProducts() {
    var filtered = products.filter(function (product) {
      var matchesCategory = state.category === "all" || product.category === state.category;
      var haystack = [product.title, product.brand, product.category, product.description].join(" ").toLowerCase();
      var matchesSearch = !state.search || haystack.indexOf(state.search) !== -1;
      return matchesCategory && matchesSearch;
    });

    var sorted = filtered.slice();
    sorted.sort(function (a, b) {
      if (state.sort === "priceLow") return a.price - b.price;
      if (state.sort === "priceHigh") return b.price - a.price;
      if (state.sort === "rating") return b.rating - a.rating;
      if (state.sort === "discount") return b.discount - a.discount;
      return products.indexOf(a) - products.indexOf(b);
    });

    return sorted;
  }

  function renderDeals() {
    var dealProducts = products
      .slice()
      .sort(function (a, b) {
        return b.discount - a.discount;
      })
      .slice(0, 4);

    dom.dealsGrid.innerHTML = dealProducts
      .map(function (product, index) {
        var claimed = [72, 58, 81, 64][index] || 50;
        return [
          '<article class="deal-card" data-product-id="' + product.id + '">',
          '  <span class="deal-badge">' + product.discount + '% off</span>',
          '  <img loading="lazy" src="' + product.image + '" alt="' + escapeHtml(product.title) + '">',
          '  <div class="deal-content">',
          "    <h3>" + escapeHtml(product.title) + "</h3>",
          '    <div class="deal-price"><strong>' + money(product.price) + '</strong><span>' + money(product.originalPrice) + "</span></div>",
          '    <div class="deal-progress" aria-label="' + claimed + '% claimed"><span style="width:' + claimed + '%"></span></div>',
          '    <div class="deal-stock">' + claimed + "% claimed | Limited-time offer</div>",
          '    <button class="primary-btn" type="button" data-action="add-cart" data-id="' + product.id + '">Add to Cart</button>',
          "  </div>",
          "</article>"
        ].join("");
      })
      .join("");
  }

  function renderRecommendations() {
    var bundleIds = ["p-001", "p-004", "p-018"];
    var bundleProducts = bundleIds.map(findProduct).filter(Boolean);
    var bundleTotal = bundleProducts.reduce(function (sum, product) {
      return sum + product.price;
    }, 0);

    dom.bundlePanel.innerHTML = [
      '<div class="bundle-items">',
      bundleProducts
        .map(function (product) {
          return [
            '<article class="bundle-item" data-product-id="' + product.id + '">',
            '  <img loading="lazy" src="' + product.image + '" alt="' + escapeHtml(product.title) + '">',
            "  <div>",
            "    <h3>" + escapeHtml(product.title) + "</h3>",
            "    <strong>" + money(product.price) + "</strong>",
            "  </div>",
            "</article>"
          ].join("");
        })
        .join(""),
      "</div>",
      '<div class="bundle-summary">',
      "  <span>Bundle price</span>",
      "  <strong>" + money(bundleTotal) + "</strong>",
      '  <button class="secondary-btn" type="button" data-action="add-bundle">Add all three</button>',
      "</div>"
    ].join("");

    var recommended = ["p-006", "p-010", "p-014", "p-025"];
    dom.recommendedGrid.innerHTML = recommended
      .map(findProduct)
      .filter(Boolean)
      .map(function (product) {
        return [
          '<article class="mini-card" data-product-id="' + product.id + '">',
          '  <img loading="lazy" src="' + product.image + '" alt="' + escapeHtml(product.title) + '">',
          "  <div>",
          "    <h3>" + escapeHtml(product.title) + "</h3>",
          "    <p>" + escapeHtml(product.brand) + "</p>",
          "    <strong>" + money(product.price) + "</strong>",
          '    <button class="ghost-btn" type="button" data-action="quick-view" data-id="' + product.id + '">Quick View</button>',
          "  </div>",
          "</article>"
        ].join("");
      })
      .join("");
  }

  function productCardTemplate(product) {
    var wishlistActive = state.wishlist.indexOf(product.id) !== -1;
    return [
      '<article class="product-card" data-product-id="' + product.id + '">',
      '  <div class="product-media">',
      '    <button class="wishlist-btn' + (wishlistActive ? " is-active" : "") + '" type="button" data-action="wishlist" data-id="' + product.id + '" aria-label="Toggle wishlist for ' + escapeHtml(product.title) + '">&hearts;</button>',
      '    <img loading="lazy" src="' + product.image + '" alt="' + escapeHtml(product.title) + '">',
      "  </div>",
      '  <div class="product-content">',
      '    <div class="product-brand">' + escapeHtml(product.brand) + "</div>",
      '    <h3 class="product-title"><button type="button" data-action="quick-view" data-id="' + product.id + '">' + escapeHtml(product.title) + "</button></h3>",
      '    <div class="rating-row">' + ratingTemplate(product.rating) + '<span class="review-count">' + product.reviews.toLocaleString() + "</span></div>",
      '    <div class="price-row"><span class="current-price">' + money(product.price) + '</span><span class="original-price">' + money(product.originalPrice) + '</span><span class="discount">' + product.discount + "% off</span></div>",
      product.prime ? '    <span class="prime-badge">Prime delivery</span>' : '    <span class="prime-badge">Free returns</span>',
      '    <div class="product-actions">',
      '      <button class="primary-btn" type="button" data-action="add-cart" data-id="' + product.id + '">Add to Cart</button>',
      '      <button class="secondary-btn" type="button" data-action="buy-now" data-id="' + product.id + '">Buy Now</button>',
      "    </div>",
      "  </div>",
      "</article>"
    ].join("");
  }

  function ratingTemplate(rating) {
    var fullStars = Math.round(rating);
    var html = '<span class="stars" aria-label="' + rating + ' out of 5 stars">';
    for (var i = 1; i <= 5; i += 1) {
      html += '<span class="' + (i <= fullStars ? "" : "muted-star") + '">&#9733;</span>';
    }
    html += "</span>";
    return html;
  }

  function handleProductGridClick(event) {
    var actionElement = event.target.closest("[data-action]");
    var card = event.target.closest("[data-product-id]");
    if (!actionElement && card && !event.target.closest("button")) {
      openQuickView(card.dataset.productId);
      return;
    }

    if (!actionElement) return;
    var action = actionElement.dataset.action;
    var id = actionElement.dataset.id || (card && card.dataset.productId);
    if (!id) return;

    if (action === "add-cart") {
      addToCart(id, 1);
    }

    if (action === "buy-now") {
      addToCart(id, 1);
      openCart();
    }

    if (action === "wishlist") {
      toggleWishlist(id);
    }

    if (action === "quick-view") {
      openQuickView(id);
    }
  }

  function handleBundleClick(event) {
    var actionElement = event.target.closest("[data-action]");
    var card = event.target.closest("[data-product-id]");

    if (actionElement && actionElement.dataset.action === "add-bundle") {
      ["p-001", "p-004", "p-018"].forEach(function (id) {
        addToCart(id, 1, true);
      });
      renderCart();
      showToast("Bundle added to cart.");
      return;
    }

    if (card) {
      openQuickView(card.dataset.productId);
    }
  }

  function addToCart(id, quantity, silent) {
    var product = findProduct(id);
    if (!product) return;
    state.cart[id] = (state.cart[id] || 0) + quantity;
    saveCart();
    renderCart();
    if (!silent) {
      showToast(product.title + " added to cart.");
    }
  }

  function removeFromCart(id) {
    var product = findProduct(id);
    delete state.cart[id];
    saveCart();
    renderCart();
    if (product) {
      showToast(product.title + " removed from cart.");
    }
  }

  function updateQuantity(id, delta) {
    if (!state.cart[id]) return;
    state.cart[id] += delta;
    if (state.cart[id] <= 0) {
      removeFromCart(id);
      return;
    }
    saveCart();
    renderCart();
  }

  function emptyCart() {
    if (!Object.keys(state.cart).length) return;
    state.cart = {};
    saveCart();
    renderCart();
    showToast("Your cart is empty.");
  }

  function renderCart() {
    var entries = Object.keys(state.cart)
      .map(function (id) {
        return { product: findProduct(id), quantity: state.cart[id] };
      })
      .filter(function (entry) {
        return entry.product && entry.quantity > 0;
      });

    var itemCount = entries.reduce(function (sum, entry) {
      return sum + entry.quantity;
    }, 0);

    var subtotal = entries.reduce(function (sum, entry) {
      return sum + entry.product.price * entry.quantity;
    }, 0);

    var tax = subtotal * TAX_RATE;
    var total = subtotal + tax;

    dom.cartCount.textContent = itemCount;
    dom.cartSubtotal.textContent = money(subtotal);
    dom.cartTax.textContent = money(tax);
    dom.cartTotal.textContent = money(total);

    if (!entries.length) {
      dom.cartItems.innerHTML = '<div class="empty-cart"><div><h3>Your cart is empty</h3><p>Products you add will appear here.</p></div></div>';
      return;
    }

    dom.cartItems.innerHTML = entries
      .map(function (entry) {
        var product = entry.product;
        return [
          '<article class="cart-item">',
          '  <img src="' + product.image + '" alt="' + escapeHtml(product.title) + '">',
          "  <div>",
          "    <h3>" + escapeHtml(product.title) + "</h3>",
          "    <p>" + money(product.price) + "</p>",
          '    <div class="quantity-row">',
          '      <div class="qty-control" aria-label="Quantity for ' + escapeHtml(product.title) + '">',
          '        <button type="button" data-cart-action="decrease" data-id="' + product.id + '" aria-label="Decrease quantity">-</button>',
          "        <span>" + entry.quantity + "</span>",
          '        <button type="button" data-cart-action="increase" data-id="' + product.id + '" aria-label="Increase quantity">+</button>',
          "      </div>",
          '      <button class="remove-btn" type="button" data-cart-action="remove" data-id="' + product.id + '">Remove</button>',
          "    </div>",
          "  </div>",
          "</article>"
        ].join("");
      })
      .join("");
  }

  function handleCartClick(event) {
    var button = event.target.closest("[data-cart-action]");
    if (!button) return;
    var action = button.dataset.cartAction;
    var id = button.dataset.id;

    if (action === "increase") updateQuantity(id, 1);
    if (action === "decrease") updateQuantity(id, -1);
    if (action === "remove") removeFromCart(id);
  }

  function saveCart() {
    writeStorage(CART_KEY, state.cart);
  }

  function toggleWishlist(id) {
    var product = findProduct(id);
    var index = state.wishlist.indexOf(id);
    if (index === -1) {
      state.wishlist.push(id);
      showToast(product.title + " added to wishlist.");
    } else {
      state.wishlist.splice(index, 1);
      showToast(product.title + " removed from wishlist.");
    }
    writeStorage(WISHLIST_KEY, state.wishlist);
    renderProducts();
  }

  function openCart() {
    dom.cartOverlay.hidden = false;
    window.requestAnimationFrame(function () {
      dom.cartOverlay.classList.add("is-visible");
      dom.cartDrawer.classList.add("is-open");
      dom.cartDrawer.setAttribute("aria-hidden", "false");
      document.body.classList.add("drawer-open");
    });
  }

  function closeCart() {
    dom.cartOverlay.classList.remove("is-visible");
    dom.cartDrawer.classList.remove("is-open");
    dom.cartDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
    window.setTimeout(function () {
      if (!dom.cartDrawer.classList.contains("is-open")) {
        dom.cartOverlay.hidden = true;
      }
    }, 220);
  }

  function openQuickView(id) {
    var product = findProduct(id);
    if (!product) return;

    dom.quickViewContent.innerHTML = [
      '<div class="quick-view-grid">',
      '  <img src="' + product.image + '" alt="' + escapeHtml(product.title) + '">',
      '  <div class="quick-details">',
      '    <div class="product-brand">' + escapeHtml(product.brand) + "</div>",
      '    <h2 id="quickViewTitle">' + escapeHtml(product.title) + "</h2>",
      '    <div class="rating-row">' + ratingTemplate(product.rating) + '<span class="review-count">' + product.reviews.toLocaleString() + " reviews</span></div>",
      '    <div class="price-row"><span class="current-price">' + money(product.price) + '</span><span class="original-price">' + money(product.originalPrice) + '</span><span class="discount">' + product.discount + "% off</span></div>",
      '    <div class="quick-meta"><span class="prime-badge">' + (product.prime ? "Prime delivery" : "Free returns") + '</span><span class="deal-stock">Category: ' + escapeHtml(product.category) + "</span></div>",
      "    <p>" + escapeHtml(product.description) + "</p>",
      '    <div class="quick-actions">',
      '      <button class="primary-btn" type="button" data-modal-action="add-cart" data-id="' + product.id + '">Add to Cart</button>',
      '      <button class="secondary-btn" type="button" data-modal-action="buy-now" data-id="' + product.id + '">Buy Now</button>',
      "    </div>",
      "  </div>",
      "</div>"
    ].join("");

    dom.quickViewOverlay.hidden = false;
    window.requestAnimationFrame(function () {
      dom.quickViewOverlay.classList.add("is-visible");
      dom.quickViewModal.classList.add("is-open");
      dom.quickViewModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    });

    dom.quickViewContent.onclick = function (event) {
      var button = event.target.closest("[data-modal-action]");
      if (!button) return;
      var action = button.dataset.modalAction;
      if (action === "add-cart") addToCart(button.dataset.id, 1);
      if (action === "buy-now") {
        addToCart(button.dataset.id, 1);
        closeQuickView();
        openCart();
      }
    };
  }

  function closeQuickView() {
    dom.quickViewOverlay.classList.remove("is-visible");
    dom.quickViewModal.classList.remove("is-open");
    dom.quickViewModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    window.setTimeout(function () {
      if (!dom.quickViewModal.classList.contains("is-open")) {
        dom.quickViewOverlay.hidden = true;
      }
    }, 220);
  }

  function setupCarousel() {
    var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));

    dom.heroDots.innerHTML = slides
      .map(function (_, index) {
        return '<button type="button" data-slide-dot="' + index + '" aria-label="Go to promotion ' + (index + 1) + '"></button>';
      })
      .join("");

    function goToSlide(index) {
      state.activeSlide = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === state.activeSlide);
      });
      Array.prototype.slice.call(dom.heroDots.children).forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === state.activeSlide);
      });
    }

    function startTimer() {
      window.clearInterval(state.carouselTimer);
      state.carouselTimer = window.setInterval(function () {
        goToSlide(state.activeSlide + 1);
      }, 5000);
    }

    dom.heroPrev.addEventListener("click", function () {
      goToSlide(state.activeSlide - 1);
      startTimer();
    });

    dom.heroNext.addEventListener("click", function () {
      goToSlide(state.activeSlide + 1);
      startTimer();
    });

    dom.heroDots.addEventListener("click", function (event) {
      var dot = event.target.closest("[data-slide-dot]");
      if (!dot) return;
      goToSlide(Number(dot.dataset.slideDot));
      startTimer();
    });

    dom.heroCarousel.addEventListener("mouseenter", function () {
      window.clearInterval(state.carouselTimer);
    });

    dom.heroCarousel.addEventListener("mouseleave", startTimer);

    goToSlide(0);
    startTimer();
  }

  function updateCountdown() {
    var now = new Date();
    var end = new Date(now);
    end.setHours(23, 59, 59, 999);
    var difference = Math.max(0, end.getTime() - now.getTime());
    var hours = Math.floor(difference / 3600000);
    var minutes = Math.floor((difference % 3600000) / 60000);
    var seconds = Math.floor((difference % 60000) / 1000);
    dom.dealCountdown.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  }

  function syncActiveFilter() {
    Array.prototype.slice.call(dom.filterRow.querySelectorAll("[data-filter]")).forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.filter === state.category);
    });
  }

  function showToast(message) {
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    dom.toastRegion.appendChild(toast);
    window.setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
    }, 2600);
    window.setTimeout(function () {
      toast.remove();
    }, 3100);
  }

  function findProduct(id) {
    return products.find(function (product) {
      return product.id === id;
    });
  }

  function getDiscount(product) {
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }

  function money(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  function unsplash(photoId, width, height) {
    return "https://images.unsplash.com/" + photoId + "?auto=format&fit=crop&w=" + width + "&h=" + height + "&q=80";
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function slug(value) {
    return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function readStorage(key, fallback) {
    try {
      var stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      showToast("Local storage is unavailable in this browser.");
    }
  }

})();
