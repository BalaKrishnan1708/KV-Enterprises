/* ==========================================================================
   APPLICATION CONTROLLER — KV ENTERPRISES (APPLE.COM STYLE)
   Manufacturer of Precision Sheet Metal Stamping Components & Assemblies
   ========================================================================== */

// --- 1. LOCAL STORAGE RFQ DATABASE ---
const SEED_RFQS = [
  {
    id: "rfq-01",
    companyName: "Automotive OEM Vendor",
    contactPerson: "Mr. R. Sundaram",
    phone: "9840123456",
    email: "sundaram@automotive-vendor.co.in",
    partDescription: "Sheet metal bracket assembly for automotive chassis",
    requiredQuantity: "15,000 pcs / month",
    requiredPress: "200 Ton / 250 Ton Power Press",
    targetDate: "2026-07-25",
    notes: "Requires auto coil feeder setup. Material thickness 2.5mm."
  }
];

function initDatabase() {
  if (!localStorage.getItem("kv_rfq_db")) {
    localStorage.setItem("kv_rfq_db", JSON.stringify(SEED_RFQS));
  }
  return JSON.parse(localStorage.getItem("kv_rfq_db"));
}

let RFQ_DB = initDatabase();

function saveDatabase() {
  localStorage.setItem("kv_rfq_db", JSON.stringify(RFQ_DB));
}

// --- 2. DATASETS FROM UPDATED PROFILE PDF ---

const POWER_PRESSES = [
  {
    id: "press-200-bansal",
    type: "200 TON POWER PRESS - BANSAL",
    brand: "BANSAL",
    tonnage: "200 TON",
    clutch: "Pneumatic",
    shutHeight: "500 - 400 mm",
    quantity: 1,
    spm: "40 strokes/min",
    slideArea: "720 × 580 mm",
    bolsterArea: "1250 × 740 mm",
    feedType: "Auto Feeder",
    description: "High-speed 200T heavy-duty pneumatic press with auto feeder integration for high-volume precision stamping."
  },
  {
    id: "press-250-sbppl",
    type: "250 TON POWER PRESS - SBPPL",
    brand: "SBPPL",
    tonnage: "250 TON",
    clutch: "Pneumatic",
    shutHeight: "600 - 480 mm",
    quantity: 1,
    spm: "25 - 45 strokes/min",
    slideArea: "1100 × 900 mm",
    bolsterArea: "1500 × 1000 mm",
    feedType: "Single Feed",
    description: "250T maximum capacity pneumatic power press designed for heavy gauge sheet metal components & deep draw tooling."
  },
  {
    id: "press-250-isgec",
    type: "250 TON POWER PRESS - ISGEC",
    brand: "ISGEC",
    tonnage: "250 TON",
    clutch: "Pneumatic",
    shutHeight: "550 - 425 mm",
    quantity: 1,
    spm: "25 - 45 strokes/min",
    slideArea: "1100 × 700 mm",
    bolsterArea: "1500 × 850 mm",
    feedType: "Single Feed",
    description: "Precision ISGEC 250T pneumatic press offering extreme rigidity, consistent bolster alignment, and tight tolerances."
  },
  {
    id: "press-110-komatsu",
    type: "110 TON POWER PRESS - KOMATSU",
    brand: "KOMATSU",
    tonnage: "110 TON",
    clutch: "Pneumatic",
    shutHeight: "380 - 250 mm",
    quantity: 1,
    spm: "40 strokes/min",
    slideArea: "600 × 450 mm",
    bolsterArea: "1100 × 700 mm",
    feedType: "Single Feed",
    description: "Komatsu Japanese engineering 110T pneumatic press suited for progressive stamping dies and complex bracket geometries."
  },
  {
    id: "press-80-aida",
    type: "80 TON POWER PRESS - AIDA",
    brand: "AIDA",
    tonnage: "80 TON",
    clutch: "Pneumatic",
    shutHeight: "350 - 240 mm",
    quantity: 1,
    spm: "45 strokes/min",
    slideArea: "540 × 460 mm",
    bolsterArea: "950 × 600 mm",
    feedType: "Single Feed",
    description: "Aida high-precision 80T press optimized for rapid cycle speeds, fine piercing, and high repeatability."
  }
];

const AUXILIARY_EQUIPMENT = [
  {
    name: "DATEX COIL FEEDER",
    category: "Automated Feeding",
    specs: "Coil Size: 150 - 600 mm | Capacity: 3 Ton | Thickness: 0.6 - 3.2 mm",
    description: "Automatic de-coiler and feeder system delivering uniform raw material coil feed to power press lines."
  },
  {
    name: "HEAVY DUTY FORKLIFT",
    category: "Material Handling",
    specs: "Capacity: 3 Ton",
    description: "Dedicated 3T forklift for rapid tool/die movement and heavy raw material sheet handling."
  },
  {
    name: "HIGH PRESSURE COMPRESSOR",
    category: "Pneumatic Systems",
    specs: "Power Rating: 20 HP",
    description: "20 HP central air compressor providing constant pneumatic pressure to all power press clutches and die cushions."
  }
];

const QUALITY_INSTRUMENTS = [
  {
    name: "SURFACE TABLE",
    role: "Flatness & Reference Base",
    desc: "Calibrated precision granite surface table for measuring flat tolerances, parallelism, and assembly squareness."
  },
  {
    name: "DIGITAL HEIGHT GAUGE (DHG)",
    role: "Sub-Micron Dimensional Inspection",
    desc: "High precision electronic height gauge for verifying step heights, hole positions, and feature depths."
  },
  {
    name: "VERNIER CALIPERS",
    role: "Dimensional Verification",
    desc: "Digital and dial vernier calipers for internal, external, and depth measurements on stamped parts."
  },
  {
    name: "MICROMETERS",
    role: "Sheet Thickness & Tolerance",
    desc: "Precision micrometers used for verifying raw material strip thickness and critical die clearance dimensions."
  }
];

const PLANT_ZONES = [
  { num: "01", title: "Tool Room / Storage", desc: "Dedicated maintenance area for press tools, dies, jigs, fixtures, and spare parts storage." },
  { num: "02", title: "Raw Material Storage", desc: "Organized storage bay for sheet metal coils, steel plates, and incoming raw material stacks." },
  { num: "03", title: "Production Area", desc: "Main manufacturing floor housing 80T to 250T power presses and automatic feed lines." },
  { num: "04", title: "Quality Inspection Lab", desc: "Temperature-controlled metrology station equipped with calibrated surface table and height gauges." },
  { num: "05", title: "Finished Goods Area", desc: "Secure staging warehouse for 100% inspected stamped components ready for dispatch." },
  { num: "06", title: "Dispatch Area", desc: "Logistics loading dock with 3T forklift access for prompt customer delivery shipment." }
];

// --- 3. VIEW RENDERERS ---

const ViewRenderers = {

  // OVERVIEW PAGE
  overview: function(container) {
    container.innerHTML = `
      <!-- Hero Showcase -->
      <section class="hero-section">
        <div class="ambient-glow"></div>
        <div class="container">
          <div class="hero-tag">
            <span class="pulse-dot"></span>
            <span>PRECISION SHEET METAL STAMPING PLANT</span>
          </div>
          
          <h1 class="hero-heading">
            ENGINEERED WITH PRECISION.<br>
            <span class="accent-text">BUILT FOR RELIABILITY.</span>
          </h1>
          
          <p class="hero-subtitle">
            KV Enterprises is a specialist manufacturer of precision sheet metal stamping components, assemblies, press tools, and jigs & fixtures in Sriperumbudur.
          </p>
          
          <div class="hero-ctas">
            <a href="#contact" class="btn btn-primary">Request Technical RFQ</a>
            <a href="#machinery" class="btn btn-secondary">Explore Machinery Specs</a>
          </div>

          <div class="hero-image-wrap">
            <img src="kv_stamping_hero.png" alt="KV Enterprises Stamping Components">
          </div>
        </div>
      </section>

      <!-- Highlights Bar -->
      <section class="spec-highlights-strip">
        <div class="container spec-strip-grid">
          <div class="spec-strip-item">
            <div class="spec-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <div class="spec-info">
              <h4>80T to 250T Capacities</h4>
              <p>Power press lineup for all sheet gauges</p>
            </div>
          </div>
          <div class="spec-strip-item">
            <div class="spec-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="spec-info">
              <h4>100% Quality Inspection</h4>
              <p>DHG & calibrated surface table metrology</p>
            </div>
          </div>
          <div class="spec-strip-item">
            <div class="spec-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="spec-info">
              <h4>On-Time Project Delivery</h4>
              <p>Lean production & agile scheduling</p>
            </div>
          </div>
          <div class="spec-strip-item">
            <div class="spec-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
            </div>
            <div class="spec-info">
              <h4>Sriperumbudur Hub</h4>
              <p>Mannur Village manufacturing facility</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Capabilities Grid -->
      <section class="section-padding">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Manufacturing Excellence</span>
            <h2 class="section-title">What We Manufacture</h2>
            <p class="section-desc">Delivering high-precision engineering solutions for automotive, industrial, and electrical equipment requirements.</p>
          </div>

          <div class="apple-card-grid">
            <div class="apple-card">
              <div class="apple-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h3 class="apple-card-title">Sheet Metal Stamping</h3>
              <p class="apple-card-body">High repeatability blanking, piercing, forming, and bending of sheet metal components with tight tolerances using pneumatic power presses.</p>
            </div>

            <div class="apple-card">
              <div class="apple-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-4 6a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1zm8 0a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"/></svg>
              </div>
              <h3 class="apple-card-title">Precision Assemblies</h3>
              <p class="apple-card-body">Sub-assembly and riveted/welded metal assemblies engineered to exact customer drawings and stringent quality standards.</p>
            </div>

            <div class="apple-card">
              <div class="apple-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 class="apple-card-title">Press Tools & Dies</h3>
              <p class="apple-card-body">In-house tooling expertise for press die maintenance, single station dies, progressive tool setup, and modification.</p>
            </div>

            <div class="apple-card">
              <div class="apple-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 class="apple-card-title">Jigs & Fixtures</h3>
              <p class="apple-card-body">Custom designed welding jigs, drilling fixtures, and inspection gauges to streamline shopfloor production consistency.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick RFQ CTA Strip -->
      <section class="section-padding" style="background: var(--bg-card); border-y: 1px solid var(--border-color);">
        <div class="container text-center">
          <h2 class="section-title">Ready to Start Your Manufacturing Project?</h2>
          <p class="section-desc" style="max-width: 650px; margin: 0 auto 2rem auto;">
            Send us your component drawings or technical specifications for an immediate quotation and feasibility study.
          </p>
          <a href="#contact" class="btn btn-primary" style="padding: 0.8rem 2rem; font-size: 1rem;">Get a Quote Today &rarr;</a>
        </div>
      </section>
    `;
  },

  // ABOUT & VISION PAGE
  about: function(container) {
    container.innerHTML = `
      <section class="section-padding">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Company Profile</span>
            <h2 class="section-title">About KV Enterprises</h2>
            <p class="section-desc">Shaping the future of manufacturing through precision engineering and uncompromising quality in Sriperumbudur.</p>
          </div>

          <div class="apple-card" style="margin-bottom: 3rem; padding: 3rem;">
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main); margin-bottom: 1.5rem;">
              <strong>KV Enterprises</strong> is committed to shaping the future of manufacturing through precision engineering and uncompromising quality. Based in Sriperumbudur, we specialize in sheet metal components, assemblies, press tools, and jigs & fixtures, delivering reliable solutions that enhance customer productivity and success.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-body);">
              We strive to be a trusted partner by consistently exceeding expectations through innovation, quality, and service excellence. Located in Mannur Village near the Sriperumbudur industrial belt, our plant combines skilled technical manpower with high-tonnage power presses to deliver complex metal pressings on time.
            </p>
          </div>

          <div class="apple-card-grid" style="grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div class="apple-card" style="padding: 2.5rem; border-color: rgba(41, 151, 255, 0.3);">
              <div class="apple-card-icon" style="background: rgba(41, 151, 255, 0.15);">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 class="apple-card-title" style="font-size: 1.6rem; color: var(--accent);">MISSION</h3>
              <p class="apple-card-body" style="font-size: 1rem; line-height: 1.7; color: var(--text-main); margin-top: 1rem;">
                Our mission is to deliver high-quality sheet metal stamping components and engineering solutions that meet customer requirements with precision, reliability, and efficiency. We focus on continuous improvement and customer satisfaction in every aspect of our work.
              </p>
            </div>

            <div class="apple-card" style="padding: 2.5rem; border-color: rgba(48, 209, 88, 0.3);">
              <div class="apple-card-icon" style="background: rgba(48, 209, 88, 0.15); color: var(--green-accent);">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h3 class="apple-card-title" style="font-size: 1.6rem; color: var(--green-accent);">VISION</h3>
              <p class="apple-card-body" style="font-size: 1rem; line-height: 1.7; color: var(--text-main); margin-top: 1rem;">
                Our vision is to become a trusted and recognized manufacturing company in the sheet metal industry by delivering consistent quality, innovation, and long-term value to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // MACHINERY SPECS PAGE
  machinery: function(container) {
    container.innerHTML = `
      <section class="section-padding">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Plant Machinery Lineup</span>
            <h2 class="section-title">High-Precision Power Presses</h2>
            <p class="section-desc">Equipped with 80T to 250T pneumatic power presses and automated coil feeding lines.</p>
          </div>

          <!-- Machinery Image Showcase -->
          <div class="hero-image-wrap" style="margin-bottom: 3.5rem;">
            <img src="kv_machinery.png" alt="KV Enterprises Power Press Machinery Lineup">
          </div>

          <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.5rem;">List of Machineries (Power Presses)</h3>

          <div class="machinery-grid">
            ${POWER_PRESSES.map(m => `
              <div class="machine-card">
                <div class="machine-card-header">
                  <div>
                    <span class="machine-tonnage">${m.tonnage}</span>
                    <span class="machine-brand"> | ${m.brand}</span>
                  </div>
                  <span class="machine-badge">${m.clutch}</span>
                </div>
                <div class="machine-card-body">
                  <table class="machine-spec-table">
                    <tr>
                      <td class="label">Machine Type</td>
                      <td class="val">${m.type}</td>
                    </tr>
                    <tr>
                      <td class="label">Shut Height</td>
                      <td class="val">${m.shutHeight}</td>
                    </tr>
                    <tr>
                      <td class="label">Strokes / Min</td>
                      <td class="val">${m.spm}</td>
                    </tr>
                    <tr>
                      <td class="label">Slide Area</td>
                      <td class="val">${m.slideArea}</td>
                    </tr>
                    <tr>
                      <td class="label">Bolster Area</td>
                      <td class="val">${m.bolsterArea}</td>
                    </tr>
                    <tr>
                      <td class="label">Feed Type</td>
                      <td class="val" style="color:var(--accent);">${m.feedType}</td>
                    </tr>
                  </table>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 1rem; line-height: 1.5;">
                    ${m.description}
                  </p>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Additional Machinery Section -->
          <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-top: 4rem; margin-bottom: 1.5rem;">List of Additional Machineries & Auxiliary Equipment</h3>

          <div class="apple-card-grid">
            ${AUXILIARY_EQUIPMENT.map(aux => `
              <div class="apple-card">
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent); font-weight:700; text-transform:uppercase;">${aux.category}</span>
                <h4 style="font-size: 1.2rem; font-weight:700; color:var(--text-main); margin: 0.4rem 0;">${aux.name}</h4>
                <p style="font-family:var(--font-mono); font-size: 0.85rem; color:var(--green-accent); margin-bottom: 0.75rem;">${aux.specs}</p>
                <p class="apple-card-body">${aux.description}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  },

  // QUALITY METROLOGY PAGE
  quality: function(container) {
    container.innerHTML = `
      <section class="section-padding">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Metrology & Inspection</span>
            <h2 class="section-title">Our Quality Instruments</h2>
            <p class="section-desc">100% quality inspection using calibrated gauges to guarantee absolute precision and customer satisfaction.</p>
          </div>

          <div class="hero-image-wrap" style="margin-bottom: 3.5rem;">
            <img src="kv_quality.png" alt="KV Enterprises Quality Inspection Metrology">
          </div>

          <div class="metrology-grid">
            ${QUALITY_INSTRUMENTS.map(inst => `
              <div class="instrument-card">
                <div class="instrument-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="instrument-title">${inst.name}</h3>
                <p style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent); margin-bottom:0.5rem;">${inst.role}</p>
                <p class="instrument-desc">${inst.desc}</p>
              </div>
            `).join("")}
          </div>

          <!-- Quality Policy Summary -->
          <div class="apple-card" style="margin-top: 3.5rem; padding: 2.5rem;">
            <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-main); margin-bottom: 1rem;">Quality Control Standards</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem;">
              <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-body); font-size: 0.95rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="color:var(--green-accent);"><path d="M5 13l4 4L19 7"/></svg>
                <span><strong>Raw Material Inspection:</strong> Coil thickness and sheet grain orientation verified before mounting.</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-body); font-size: 0.95rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="color:var(--green-accent);"><path d="M5 13l4 4L19 7"/></svg>
                <span><strong>First Piece Sign-off:</strong> Initial production sample verified on calibrated surface table & DHG before mass press run.</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-body); font-size: 0.95rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="color:var(--green-accent);"><path d="M5 13l4 4L19 7"/></svg>
                <span><strong>In-Process Quality Checks:</strong> Periodic line sampling by Quality Inspectors to ensure burr-free edges and flat tolerances.</span>
              </li>
              <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-body); font-size: 0.95rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="color:var(--green-accent);"><path d="M5 13l4 4L19 7"/></svg>
                <span><strong>Pre-Dispatch Inspection (PDI):</strong> Final batch testing and protective packaging prior to customer dispatch.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    `;
  },

  // PLANT LAYOUT & ORG HIERARCHY PAGE
  plant: function(container) {
    container.innerHTML = `
      <section class="section-padding">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Facility & Management</span>
            <h2 class="section-title">Plant Layout & Organisation</h2>
            <p class="section-desc">Streamlined 6-zone manufacturing layout and clear management structure for seamless project execution.</p>
          </div>

          <!-- Plant Layout Section -->
          <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.5rem;">Plant Layout (6 Core Facility Zones)</h3>

          <div class="plant-layout-grid" style="margin-bottom: 4rem;">
            ${PLANT_ZONES.map(z => `
              <div class="plant-zone-card">
                <span class="zone-num">${z.num}</span>
                <div>
                  <h4 class="zone-title">${z.title}</h4>
                  <p class="zone-desc">${z.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Organisation Structure Hierarchy -->
          <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.5rem;">Organisation Structure</h3>

          <div class="org-chart-wrapper">
            <!-- Top Level -->
            <div class="org-node-top">
              <h3>MANAGING DIRECTOR & ADMIN</h3>
              <p>KV ENTERPRISES MANAGEMENT</p>
              <div style="width:2px; height:20px; background:var(--accent); margin:0.5rem auto;"></div>
              <div style="font-weight:700; color:var(--text-main); font-size:0.95rem;">PLANT HEAD</div>
            </div>

            <!-- Departmental Grid -->
            <div class="org-dept-grid">
              <div class="org-dept-card">
                <h4>PRODUCTION</h4>
                <ul>
                  <li>Production Manager</li>
                  <li>Line Supervisor</li>
                  <li>Operators & Helpers</li>
                </ul>
              </div>

              <div class="org-dept-card">
                <h4>QUALITY CONTROL</h4>
                <ul>
                  <li>Quality Manager</li>
                  <li>Quality Control Eng.</li>
                  <li>Line Inspector</li>
                  <li>Pre Dispatch Inspector</li>
                </ul>
              </div>

              <div class="org-dept-card">
                <h4>TOOL ROOM</h4>
                <ul>
                  <li>Tool Room Engineer</li>
                  <li>Die Maintenance</li>
                </ul>
              </div>

              <div class="org-dept-card">
                <h4>MAINTENANCE</h4>
                <ul>
                  <li>Maintenance Engineer</li>
                  <li>Plant Uptime Tech</li>
                </ul>
              </div>

              <div class="org-dept-card">
                <h4>PURCHASE</h4>
                <ul>
                  <li>Purchase Manager</li>
                  <li>Raw Material Procurement</li>
                </ul>
              </div>

              <div class="org-dept-card">
                <h4>STORE & DISPATCH</h4>
                <ul>
                  <li>Store & Dispatch Eng.</li>
                  <li>Logistics Team</li>
                </ul>
              </div>

              <div class="org-dept-card">
                <h4>SALES & MARKETING</h4>
                <ul>
                  <li>Sales & Mktg Manager</li>
                  <li>Customer Desk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // MANUFACTURING PROCESS FLOW PAGE
  process: function(container) {
    container.innerHTML = `
      <section class="section-padding">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Quality Execution</span>
            <h2 class="section-title">Manufacturing Process Flow</h2>
            <p class="section-desc">From initial requirement analysis to final on-time delivery, our structured process ensures zero-defect manufacturing.</p>
          </div>

          <div class="process-flow-timeline">
            <div class="process-step-card">
              <div class="process-step-num">01 /</div>
              <h3 class="process-step-title">Design & Planning</h3>
              <ul class="process-step-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Customer Requirement Analysis</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Material Selection & Feasibility</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Die Setup & Tool Design Planning</span>
                </li>
              </ul>
            </div>

            <div class="process-step-card">
              <div class="process-step-num">02 /</div>
              <h3 class="process-step-title">Manufacturing Process</h3>
              <ul class="process-step-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Power Press Operating (80T - 250T)</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Tool & Die Usage with Precision Feeder</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Blanking, Forming & Piercing Lines</span>
                </li>
              </ul>
            </div>

            <div class="process-step-card">
              <div class="process-step-num">03 /</div>
              <h3 class="process-step-title">Quality & Delivery</h3>
              <ul class="process-step-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Quality Testing (Surface Table & DHG)</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Deburring, Finishing & Anti-Rust Packing</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>On-Time Customer Dispatch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // CONTACT & RFQ FORM PAGE
  contact: function(container) {
    container.innerHTML = `
      <section class="section-padding">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Get In Touch</span>
            <h2 class="section-title">Request a Technical Quotation</h2>
            <p class="section-desc">Submit your component details or get in touch directly with our manufacturing engineering team.</p>
          </div>

          <div class="rfq-container">
            <!-- Contact Info Panel -->
            <div class="rfq-info-panel">
              <h3>KV ENTERPRISES</h3>
              <p style="color:var(--text-body); font-size:0.95rem; line-height:1.6;">
                Manufacturer of Precision Sheet Metal Stamping Components & Assemblies.
              </p>

              <div class="contact-info-list">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                  </div>
                  <div class="contact-info-text">
                    <h5>PLANT ADDRESS</h5>
                    <p style="font-weight:400; font-size:0.9rem; line-height:1.5;">
                      No.45, Beauty Farms, Paaparambakkam Road, Mannur Village, Sriperumbudur – 602105
                    </p>
                  </div>
                </div>

                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div class="contact-info-text">
                    <h5>DIRECT PHONE LINES</h5>
                    <p><a href="tel:6385422938">Primary: 6385422938</a></p>
                    <p><a href="tel:7200172460">Alternate: 7200172460</a></p>
                  </div>
                </div>

                <div class="contact-info-item">
                  <div class="contact-info-icon" style="background:rgba(37,211,102,0.1); color:#25D366;">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.638 2.005 14.16 1.002 11.53 1.002c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.466 3.424 1.353 4.928l-.995 3.636 3.738-.97c1.513.882 3.018 1.326 4.606 1.326z"/></svg>
                  </div>
                  <div class="contact-info-text">
                    <h5>WHATSAPP DIRECT</h5>
                    <p><a href="https://wa.me/916385422938" target="_blank" style="color:#25D366; font-weight:700;">Chat on WhatsApp &rarr;</a></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form Card -->
            <div class="rfq-form-card">
              <h3 style="font-size:1.3rem; font-weight:700; color:var(--text-main); margin-bottom:1.25rem;">Submit Component RFQ</h3>
              <form id="rfq-form">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="rfq-name">Company Name *</label>
                    <input type="text" id="rfq-name" class="form-input" required placeholder="e.g. Precision Auto Components">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="rfq-person">Contact Person *</label>
                    <input type="text" id="rfq-person" class="form-input" required placeholder="e.g. Mr. Rajesh Kumar">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="rfq-phone">Phone Number *</label>
                    <input type="tel" id="rfq-phone" class="form-input" required placeholder="e.g. 9840123456">
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="rfq-email">Email Address *</label>
                    <input type="email" id="rfq-email" class="form-input" required placeholder="e.g. rajesh@company.com">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="rfq-press">Required Press Capacity</label>
                    <select id="rfq-press" class="form-select">
                      <option value="250 Ton Power Press">250 Ton Power Press</option>
                      <option value="200 Ton Power Press">200 Ton Power Press</option>
                      <option value="110 Ton Power Press">110 Ton Power Press</option>
                      <option value="80 Ton Power Press">80 Ton Power Press</option>
                      <option value="Assembly / Tooling">Assembly / Tooling Setup</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="rfq-qty">Monthly Batch Quantity</label>
                    <input type="text" id="rfq-qty" class="form-input" placeholder="e.g. 10,000 pcs">
                  </div>
                </div>

                <div class="form-group" style="margin-bottom:1.25rem;">
                  <label class="form-label" for="rfq-desc">Component Specifications / Part Details *</label>
                  <textarea id="rfq-desc" class="form-textarea" required placeholder="Describe material sheet thickness, dimensions, drawing notes..."></textarea>
                </div>

                <div style="display:flex; justify-content:flex-end; gap:1rem;">
                  <button type="submit" class="btn btn-primary" style="width:100%;">Submit Quotation Request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;

    document.getElementById("rfq-form").addEventListener("submit", function(e) {
      e.preventDefault();
      
      const newRfq = {
        id: "rfq-" + Date.now(),
        companyName: document.getElementById("rfq-name").value.trim(),
        contactPerson: document.getElementById("rfq-person").value.trim(),
        phone: document.getElementById("rfq-phone").value.trim(),
        email: document.getElementById("rfq-email").value.trim(),
        requiredPress: document.getElementById("rfq-press").value,
        requiredQuantity: document.getElementById("rfq-qty").value.trim(),
        partDescription: document.getElementById("rfq-desc").value.trim(),
        date: new Date().toLocaleDateString()
      };

      RFQ_DB.unshift(newRfq);
      saveDatabase();

      showToast("Quotation request submitted successfully! Our engineering team will contact you.", "success");
      
      // WhatsApp message option
      const waMsg = `Hi KV Enterprises, I have submitted an RFQ for "${newRfq.companyName}". Contact: ${newRfq.phone}. Details: ${newRfq.partDescription}`;
      const waUrl = `https://wa.me/916385422938?text=${encodeURIComponent(waMsg)}`;
      
      setTimeout(() => {
        if (confirm("Would you like to send this RFQ directly via WhatsApp as well?")) {
          window.open(waUrl, "_blank");
        }
      }, 500);

      this.reset();
    });
  }
};

// --- 4. ADMIN PORTAL LOGS MODAL ---

function showAdminLoginModal() {
  const overlay = document.getElementById("modal-container");
  
  overlay.innerHTML = `
    <div class="modal-content" style="max-width: 420px;">
      <button class="modal-close-btn" id="btn-close-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <h2 style="font-size:1.4rem; font-weight:700; color:var(--text-main); margin-bottom:0.5rem;">Admin Portal</h2>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1.5rem;">Enter credentials to access logged RFQs. (Default: admin / admin)</p>
      
      <form id="admin-login-form">
        <div class="form-group" style="margin-bottom:1rem;">
          <label class="form-label" for="adm-user">Username</label>
          <input type="text" id="adm-user" class="form-input" required value="admin">
        </div>
        <div class="form-group" style="margin-bottom:1.5rem;">
          <label class="form-label" for="adm-pass">Password</label>
          <input type="password" id="adm-pass" class="form-input" required value="admin">
        </div>
        
        <button type="submit" class="btn btn-primary" style="width:100%;">Login & Access RFQs</button>
      </form>
    </div>
  `;

  overlay.classList.remove("hidden");
  document.getElementById("btn-close-modal").addEventListener("click", closeModal);
  
  document.getElementById("admin-login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    if (document.getElementById("adm-user").value === "admin" && document.getElementById("adm-pass").value === "admin") {
      showToast("Access Granted", "success");
      showAdminDashboardLogs();
    } else {
      showToast("Invalid Credentials", "error");
    }
  });
}

function showAdminDashboardLogs() {
  const overlay = document.getElementById("modal-container");
  
  const rfqRows = RFQ_DB.length === 0 
    ? `<tr><td colspan="5" style="text-align:center; padding:1.5rem;">No RFQs logged yet.</td></tr>`
    : RFQ_DB.map(r => `
        <tr style="border-bottom:1px solid var(--border-color);">
          <td style="padding:0.75rem 0.5rem;"><strong>${r.companyName}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">${r.contactPerson}</span></td>
          <td style="padding:0.75rem 0.5rem; font-family:var(--font-mono); color:var(--accent);">${r.phone}<br>${r.email}</td>
          <td style="padding:0.75rem 0.5rem; font-size:0.85rem;">${r.requiredPress}</td>
          <td style="padding:0.75rem 0.5rem; font-size:0.85rem;">${r.partDescription}</td>
          <td style="padding:0.75rem 0.5rem; font-size:0.85rem;">${r.requiredQuantity || 'N/A'}</td>
        </tr>
      `).join("");

  overlay.innerHTML = `
    <div class="modal-content" style="max-width: 900px; width:95vw;">
      <button class="modal-close-btn" id="btn-close-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <h2 style="font-size:1.4rem; font-weight:700; color:var(--text-main); margin-bottom:0.5rem;">Submitted Quotation Requests (RFQs)</h2>
      <p style="font-size:0.8rem; color:var(--accent); font-family:var(--font-mono); margin-bottom:1.5rem;">DATABASE STATUS: ${RFQ_DB.length} TOTAL LEADS LOGGED</p>
      
      <div style="max-height:60vh; overflow-y:auto; margin-bottom:1.5rem;">
        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.85rem;">
          <thead>
            <tr style="border-bottom:1px solid var(--accent); color:var(--accent); font-family:var(--font-mono);">
              <th style="padding:0.5rem;">Company & Contact</th>
              <th style="padding:0.5rem;">Phone / Email</th>
              <th style="padding:0.5rem;">Press Line</th>
              <th style="padding:0.5rem;">Part Description</th>
              <th style="padding:0.5rem;">Quantity</th>
            </tr>
          </thead>
          <tbody>
            ${rfqRows}
          </tbody>
        </table>
      </div>

      <div style="display:flex; justify-content:space-between;">
        <button class="btn btn-secondary" id="btn-clear-rfqs" style="color:#EF4444; border-color:#EF4444;">Clear All RFQs</button>
        <button class="btn btn-primary" id="btn-close-admin">Close Portal</button>
      </div>
    </div>
  `;

  document.getElementById("btn-close-modal").addEventListener("click", closeModal);
  document.getElementById("btn-close-admin").addEventListener("click", closeModal);
  
  document.getElementById("btn-clear-rfqs").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all logged RFQs?")) {
      RFQ_DB = [];
      saveDatabase();
      showToast("RFQs cleared", "success");
      showAdminDashboardLogs();
    }
  });
}

function closeModal() {
  document.getElementById("modal-container").classList.add("hidden");
}

// --- 5. TOAST NOTIFICATIONS ---

function showToast(message, type = "success") {
  const container = document.getElementById("toast-wrapper");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;
  
  const icon = type === "success" 
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` 
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;

  toast.innerHTML = `<div class="toast-icon">${icon}</div><span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3500);
}

// --- 6. ROUTING ENGINE ---

function handleRouting() {
  const hash = window.location.hash || "#overview";

  const links = document.querySelectorAll(".nav-link");
  links.forEach(l => {
    const view = l.getAttribute("data-view");
    if (hash === `#${view}`) {
      l.classList.add("active");
    } else {
      l.classList.remove("active");
    }
  });

  window.scrollTo(0, 0);
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) navMenu.classList.remove("open");

  const viewIdMap = {
    "#overview": "view-overview",
    "#about": "view-about",
    "#machinery": "view-machinery",
    "#quality": "view-quality",
    "#plant": "view-plant",
    "#process": "view-process",
    "#contact": "view-contact"
  };

  const activeId = viewIdMap[hash] || "view-overview";

  Object.entries(viewIdMap).forEach(([h, id]) => {
    const section = document.getElementById(id);
    if (section) {
      if (id === activeId) {
        section.classList.remove("hidden");
        const rendererName = id.replace("view-", "");
        if (ViewRenderers[rendererName]) {
          ViewRenderers[rendererName](section);
        }
      } else {
        section.classList.add("hidden");
      }
    }
  });

  const titles = {
    "#overview": "KV Enterprises — Manufacturer of Precision Sheet Metal Stamping Components",
    "#about": "About Us & Vision — KV Enterprises",
    "#machinery": "Power Press Machinery Specs — KV Enterprises",
    "#quality": "Quality Assurance & Metrology — KV Enterprises",
    "#plant": "Plant Layout & Organisation Structure — KV Enterprises",
    "#process": "Manufacturing Process Flow — KV Enterprises",
    "#contact": "Request RFQ & Contact — KV Enterprises"
  };

  document.title = titles[hash] || "KV Enterprises — Precision Manufacturing";
}

// --- 7. INITIALIZERS ---

window.addEventListener("hashchange", handleRouting);

window.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("open");
    });
    
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && e.target !== mobileToggle) {
        navMenu.classList.remove("open");
      }
    });
  }

  const logoLink = document.getElementById("logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", () => {
      window.location.hash = "#overview";
    });
  }

  const adminLink = document.getElementById("footer-admin-link");
  if (adminLink) {
    adminLink.addEventListener("click", (e) => {
      e.preventDefault();
      showAdminLoginModal();
    });
  }

  handleRouting();
});
