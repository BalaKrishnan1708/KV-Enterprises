/* ==========================================================================
   APPLICATION CONTROLLER - KV ENTERPRISES (TIVOR.US ESTHETIC SPA)
   ========================================================================== */

// --- 1. LOCAL STORAGE STATE DATABASE ---
const SEED_JOBS = [
  {
    id: "job-01",
    title: "Production / Despatch Operators",
    company: "DONRACKS PVT. LTD (DONRACKS TMTE Metal Tech)",
    industry: "Metal Manufacturing",
    location: "Pennalur, Sriperumbudur",
    gender: "Both",
    age: "18 - 30",
    shift: "No Night Shift",
    salary: "₹15,600 (8 HRS)",
    qualification: "Any Qualification",
    urgent: true,
    tags: ["Urgent", "No Night Shift", "Direct Join"],
    description: "Urgent requirements for operators in sheet metal cutting, product packaging, and dispatch operations. Sit-and-work and standing operations available. Joining at plant gate."
  },
  {
    id: "job-02",
    title: "Quality Department - Female Candidates",
    company: "Chennai CNC Servotonics",
    industry: "Precision Manufacturing",
    location: "Sriperumbudur",
    gender: "Female",
    age: "18 - 35",
    shift: "Single Shift (7 AM - 7 PM)",
    salary: "Up to ₹20,000",
    qualification: "10th Pass to Any Degree",
    urgent: true,
    tags: ["Urgent", "Female Only", "Freshers Welcome"],
    description: "Visual quality inspection and line sorting of PCB assemblies. Air-conditioned factory shopfloor. Safe environment for female workers. Single shift setup."
  },
  {
    id: "job-03",
    title: "CNC Operator / Foaming / Bending / Quality",
    company: "Gilan Automotive",
    industry: "Automotive",
    location: "Vallam, Near Royal Enfield Company, Vallakottai",
    gender: "Both",
    age: "18 - 40",
    shift: "Rotational Shift",
    salary: "₹16,000 (8 HRS)",
    qualification: "8th Pass to Any Degree",
    urgent: true,
    tags: ["Urgent", "Korean MNC", "Automotive"],
    description: "Operating CNC machines, components foaming, and mechanical bending of car steering parts. Leading Korean MNC. Onboard safety training provided on joining."
  }
];

const SEED_B2B = [
  {
    id: "b2b-01",
    companyName: "Hyundai Transys Vendor",
    industry: "Automotive",
    contactPerson: "Mr. Ramesh HR",
    designation: "Manager HR",
    phone: "7200172460",
    email: "hr@hyundaitransys-vendor.co.in",
    location: "Vallam Vadagal Industrial Park",
    workersRequired: "30",
    rolesNeeded: "CNC Operators and Loading associates",
    shift: "Rotational",
    gender: "Both",
    startDate: "2026-07-10",
    notes: "Requires quick mobilization before July 10th."
  }
];

const SEED_APPLY_CLICKS = [
  {
    jobTitle: "Production / Despatch Operators",
    company: "DONRACKS PVT. LTD",
    action: "WhatsApp Apply",
    date: "2026-06-30 11:20 AM"
  },
  {
    jobTitle: "Quality Department - Female Candidates",
    company: "Chennai CNC Servotonics",
    action: "Call HR Desk",
    date: "2026-07-01 09:15 AM"
  }
];

function initDatabase() {
  if (!localStorage.getItem("kv_db_jobs")) {
    localStorage.setItem("kv_db_jobs", JSON.stringify(SEED_JOBS));
    localStorage.setItem("kv_db_b2b", JSON.stringify(SEED_B2B));
    localStorage.setItem("kv_db_clicks", JSON.stringify(SEED_APPLY_CLICKS));
  }
  return {
    jobs: JSON.parse(localStorage.getItem("kv_db_jobs")),
    b2b: JSON.parse(localStorage.getItem("kv_db_b2b")),
    clicks: JSON.parse(localStorage.getItem("kv_db_clicks"))
  };
}

let STATE = initDatabase();

function saveDatabase() {
  localStorage.setItem("kv_db_jobs", JSON.stringify(STATE.jobs));
  localStorage.setItem("kv_db_b2b", JSON.stringify(STATE.b2b));
  localStorage.setItem("kv_db_clicks", JSON.stringify(STATE.clicks));
}

// Log candidate actions
function logApplyAction(jobTitle, company, type) {
  const now = new Date();
  const dateStr = now.getFullYear() + '-' + 
                  String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                  String(now.getDate()).padStart(2, '0') + ' ' + 
                  String(now.getHours()).padStart(2, '0') + ':' + 
                  String(now.getMinutes()).padStart(2, '0') + ' ' + 
                  (now.getHours() >= 12 ? 'PM' : 'AM');
  
  STATE.clicks.unshift({
    jobTitle: jobTitle,
    company: company,
    action: type,
    date: dateStr
  });
  saveDatabase();
}

// --- 2. VIEW RENDERERS ---

const ViewRenderers = {

  // A. HOME PAGE
  home: function(container) {
    container.innerHTML = `
      <!-- Hero Banner - Typographic Center -->
      <section class="hero-section" id="hero-area">
        <div class="ambient-blob"></div>
        
        <div class="container hero-content-center">
          <div class="hero-tag anim-hero-tag">
            <span class="pulse-dot"></span>
            <span>01 / PLACEMENT LOGISTICS</span>
          </div>
          
          <h1 class="hero-heading anim-hero-title">
            INDUSTRIAL MANPOWER.<br>
            <span class="accent-text">DELIVERED. ON TIME.</span>
          </h1>
          
          <p class="hero-subtitle anim-hero-sub">
            Factory Onboarding & Supply Chain Staffing Solutions
          </p>
          
          <p class="hero-desc anim-hero-desc">
            KV Enterprises places pre-verified operators and quality inspectors into leading manufacturing plants across the Sriperumbudur corridor. Direct gate joining. No middlemen.
          </p>
          
          <div class="hero-ctas anim-hero-ctas">
            <a href="#jobs" class="btn btn-primary">Browse Jobs</a>
            <a href="#employer" class="btn btn-secondary">Hire Workers</a>
          </div>
        </div>
      </section>

      <!-- Infinite auto-scrolling marquee -->
      <section class="scroll-reveal">
        <div class="marquee-container">
          <div class="marquee-inner">
            <span>CNC Machining</span>
            <span>Quality Control</span>
            <span>Production Staffing</span>
            <span>Manpower Outsourcing</span>
            <span>Automotive</span>
            <span>Metal Tech</span>
            <span>CNC Machining</span>
            <span>Quality Control</span>
            <span>Production Staffing</span>
            <span>Manpower Outsourcing</span>
            <span>Automotive</span>
            <span>Metal Tech</span>
          </div>
        </div>
      </section>

      <!-- Manifesto Row (Tivor Manifesto) -->
      <section class="manifesto-section scroll-reveal">
        <div class="container">
          <h2 class="manifesto-heading">Strategic Manpower Placements, Not Generic HR Agencies</h2>
          <p class="manifesto-sub">
            We don't stop at sending resumes. We understand your production lines, verify every operator first-hand, and dispatch workforce solutions that keep your factory floor running.
          </p>
        </div>
      </section>

      <!-- Stats Metric Panel -->
      <section class="stats-section scroll-reveal">
        <div class="container stats-grid">
          <div class="stat-card">
            <div class="stat-number" data-count-target="500">0</div>
            <div class="stat-label">Workers Placed</div>
            <div class="stat-desc">Direct factory jobs</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-count-target="25">0</div>
            <div class="stat-label">Client Factories</div>
            <div class="stat-desc">Sriperumbudur corridor</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-count-target="72">0</div>
            <div class="stat-label">Avg. Placement Hours</div>
            <div class="stat-desc">Quick Gate Joining</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-count-target="100">0</div>
            <div class="stat-label">Direct Joining %</div>
            <div class="stat-desc">Zero Middlemen</div>
          </div>
        </div>
      </section>

      <!-- Stacked Openings Deck Section -->
      <section class="jobs-section">
        <div class="container">
          <div class="section-header scroll-reveal">
            <p class="font-mono text-[11px] tracking-widest uppercase text-muted mb-4" style="font-family:var(--font-mono)">Active Placements</p>
            <h2>Featured Openings</h2>
            <p>Immediate gate joining openings. Select below to call or apply on WhatsApp.</p>
          </div>
          
          <!-- Stacked deck wrapper -->
          <div class="sticky-deck-container" id="home-jobs-container">
            <!-- Rendered Dynamically -->
          </div>
          
          <div style="text-align:center; margin-top:5rem;" class="scroll-reveal">
            <a href="#jobs" class="btn btn-secondary">View All Open Positions</a>
          </div>
        </div>
      </section>

      <!-- B2B Employer register banner -->
      <section class="employer-banner-section">
        <div class="container">
          <div class="banner-grid scroll-reveal">
            <div class="banner-content">
              <h3>Need workers this week?</h3>
              <p>
                Whether you need 10 CNC operators or 200 production associates, we mobilise pre-verified workers across Sriperumbudur. Fill the requirement form — our team calls back the same day.
              </p>
              <div class="banner-features">
                <div class="banner-feature-item">
                  <span class="feature-bullet-num">01 /</span>
                  <span>Same-day callback</span>
                </div>
                <div class="banner-feature-item">
                  <span class="feature-bullet-num">02 /</span>
                  <span>Verified workers</span>
                </div>
                <div class="banner-feature-item">
                  <span class="feature-bullet-num">03 /</span>
                  <span>Bulk hiring ready</span>
                </div>
                <div class="banner-feature-item">
                  <span class="feature-bullet-num">04 /</span>
                  <span>Compliance handled</span>
                </div>
              </div>
              <div>
                <a href="#employer" class="btn btn-primary">Register Requirement</a>
              </div>
            </div>
            
            <div class="banner-img-area">
              <div class="banner-hud-card">
                <h4>Hiring Logistics</h4>
                <div class="hud-row">
                  <span>CNC Operators:</span>
                  <span class="val">Immediate</span>
                </div>
                <div class="hud-row">
                  <span>QC Inspectors:</span>
                  <span class="val">Ready to join</span>
                </div>
                <div class="hud-row">
                  <span>B2B Callback:</span>
                  <span class="val">&lt; 12 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why KV Section (Numbered Tivor style list rows) -->
      <section class="why-section">
        <div class="container">
          <div class="section-header scroll-reveal">
            <h2>Built for Sriperumbudur's factory belt</h2>
          </div>
          <div class="why-features-grid">
            <div class="why-card scroll-reveal scroll-stagger-1">
              <span class="why-num">01 / CAPABILITY</span>
              <h3 class="why-title">Factory-first</h3>
              <p class="why-desc">We know the shop floor. From CNC to despatch, we place workers who can start Monday.</p>
              <span class="why-arrow">&rarr;</span>
            </div>
            <div class="why-card scroll-reveal scroll-stagger-2">
              <span class="why-num">02 / DISPATCH</span>
              <h3 class="why-title">Fast turnaround</h3>
              <p class="why-desc">Most placements happen within 72 hours of requirement submission.</p>
              <span class="why-arrow">&rarr;</span>
            </div>
            <div class="why-card scroll-reveal scroll-stagger-3">
              <span class="why-num">03 / CONTROL</span>
              <h3 class="why-title">Verified profiles</h3>
              <p class="why-desc">Aadhar, education & experience proofs verified before gate onboarding.</p>
              <span class="why-arrow">&rarr;</span>
            </div>
            <div class="why-card scroll-reveal scroll-stagger-4">
              <span class="why-num">04 / SUPPORT</span>
              <h3 class="why-title">End-to-end</h3>
              <p class="why-desc">Documentation, onboarding, replacement — one contact, zero hassle.</p>
              <span class="why-arrow">&rarr;</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Closing CTA Section (Tivor.us closing-cta Style) -->
      <section id="closing-cta" class="scroll-reveal">
        <div class="container text-center">
          <div>
            <p class="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mb-6" style="font-family:var(--font-mono)">Ready to start</p>
          </div>
          <div>
            <h2 class="closing-title">Let's start<br>recruiting together</h2>
          </div>
          <div>
            <a class="cta-btn" href="#contact">
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
        
        <!-- Logo Scroll Track below closing CTA -->
        <div class="mt-24">
          <div class="logo-track-mask">
            <div class="logo-track">
              <span class="logo-item">CNC Machining</span>
              <span class="sep">◆</span>
              <span class="logo-item">Quality Assurance</span>
              <span class="sep">◆</span>
              <span class="logo-item">Gilan Automotive</span>
              <span class="sep">◆</span>
              <span class="logo-item">Donracks TMTE</span>
              <span class="sep">◆</span>
              <span class="logo-item">CNC Machining</span>
              <span class="sep">◆</span>
              <span class="logo-item">Quality Assurance</span>
              <span class="sep">◆</span>
              <span class="logo-item">Gilan Automotive</span>
              <span class="sep">◆</span>
              <span class="logo-item">Donracks TMTE</span>
            </div>
          </div>
        </div>
      </section>
    `;

    renderHomeJobs();
  },

  // B. JOB SEARCH & BOARD
  jobs: function(container) {
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>Open Positions</h1>
          <p>All active jobs in Sriperumbudur industrial belt. Direct hiring, zero middlemen.</p>
        </div>
      </div>
      
      <div class="container jobs-board-wrap">
        <div class="jobs-filter-bar scroll-reveal">
          <div class="board-search-input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="jobs-search-input" placeholder="Search by company, title, location...">
          </div>
          
          <div class="gender-filters-group">
            <span style="font-size:0.75rem; font-family:var(--font-mono); font-weight:700; text-transform:uppercase; color:var(--text-muted);">Gender:</span>
            <button class="gender-filter-btn active" data-gender="all">all</button>
            <button class="gender-filter-btn" data-gender="male">male</button>
            <button class="gender-filter-btn" data-gender="female">female</button>
          </div>
        </div>

        <div class="job-feed-list" id="board-jobs-container" style="display:flex; flex-direction:column; gap:2.5rem; margin-top:2rem;">
          <!-- Rendered Dynamically -->
        </div>
      </div>
    `;

    const searchInput = document.getElementById("jobs-search-input");
    const genderBtns = container.querySelectorAll(".gender-filter-btn");
    
    let activeGenderFilter = "all";

    const filterTrigger = () => {
      const query = searchInput.value.toLowerCase().trim();
      renderBoardJobsList(query, activeGenderFilter);
    };

    searchInput.addEventListener("input", filterTrigger);
    genderBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        genderBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeGenderFilter = btn.dataset.gender;
        filterTrigger();
      });
    });

    renderBoardJobsList("", "all");
  },

  // C. EMPLOYERS FORM (Tivor numbered list style for side text)
  employer: function(container) {
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>For Employers</h1>
          <p>Register your factory manpower requirements. Mobilize verified workers fast.</p>
        </div>
      </div>
      
      <div class="container employer-container-layout">
        <!-- Info Column - Numbered list -->
        <aside class="employer-info-card scroll-reveal scroll-stagger-1">
          <h3>Why Hire Through Us</h3>
          <ul class="employer-bullet-list">
            <li>
              <strong>01 / Same-day callback</strong>
              Our recruiter will call within business hours.
            </li>
            <li>
              <strong>02 / Bulk placements</strong>
              From 5 to 500 workers, we mobilise fast.
            </li>
            <li>
              <strong>03 / Verified candidates</strong>
              Aadhar, education & background checked.
            </li>
            <li>
              <strong>04 / Compliance managed</strong>
              PF, ESI documentation handled end-to-end.
            </li>
          </ul>
          
          <div style="margin-top:2rem; border-top:1px solid var(--border-color); padding-top:1.5rem;">
            <p style="font-size:0.75rem; font-family:var(--font-mono); color:var(--text-muted); margin-bottom:0.25rem;">PREFER TO TALK?</p>
            <p style="font-weight:700; color:var(--text-main); font-size:1.1rem; margin-bottom:0.25rem;">Call our HR Desk</p>
            <p style="font-family:var(--font-mono); font-weight:700; font-size:0.95rem; color:var(--accent);">6385422938 / 7200172460</p>
          </div>
        </aside>

        <!-- Form Column (Browser card wrapper style) -->
        <div class="product-card scroll-reveal scroll-stagger-2">
          <div class="product-card-inner">
            <div class="product-card-header">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-[5px]">
                  <span class="rounded-full" style="width:10px;height:10px;background:#FF5F57;display:block"></span>
                  <span class="rounded-full" style="width:10px;height:10px;background:#FEBC2E;display:block"></span>
                  <span class="rounded-full" style="width:10px;height:10px;background:#28C840;display:block"></span>
                </div>
                <span style="width:1px;height:16px;background:var(--border-color)"></span>
                <span class="font-mono text-[10px] uppercase text-muted" style="font-family:var(--font-mono)">Register Requirement</span>
              </div>
            </div>
            
            <div class="p-8">
              <form id="employer-requirement-form">
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="comp-name">Company Name *</label>
                    <input type="text" id="comp-name" class="form-input" required placeholder="e.g. Gilan Automotive">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="comp-industry">Industry *</label>
                    <input type="text" id="comp-industry" class="form-input" required placeholder="Automotive / CNC / Packaging...">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="comp-contact">Contact Person *</label>
                    <input type="text" id="comp-contact" class="form-input" required placeholder="e.g. Anand Kumar">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="comp-desig">Designation</label>
                    <input type="text" id="comp-desig" class="form-input" placeholder="e.g. Plant HR Manager">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="comp-phone">Phone Number *</label>
                    <input type="tel" id="comp-phone" class="form-input" required>
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="comp-email">Email Address *</label>
                    <input type="email" id="comp-email" class="form-input" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="comp-location">Plant Location *</label>
                    <input type="text" id="comp-location" class="form-input" required placeholder="e.g. Pennalur, Sriperumbudur">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="comp-count">Workers Required *</label>
                    <input type="number" id="comp-count" class="form-input" required placeholder="e.g. 20">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="comp-roles">Roles Needed *</label>
                  <input type="text" id="comp-roles" class="form-input" required placeholder="e.g. 20 CNC Operators, 5 QC Inspectors">
                </div>

                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label">Shift Preference</label>
                    <select id="comp-shift" class="form-select">
                      <option value="Rotational">Rotational</option>
                      <option value="No Night Shift">No Night Shift</option>
                      <option value="Single Shift (Day)">Single Shift (Day)</option>
                    </select>
                  </div>
                  <div class="form-group half">
                    <label class="form-label">Gender Preference</label>
                    <select id="comp-gender" class="form-select">
                      <option value="Both">Both</option>
                      <option value="Male Only">Male Only</option>
                      <option value="Female Only">Female Only</option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="comp-startdate">Expected Start Date</label>
                    <input type="date" id="comp-startdate" class="form-input">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="comp-notes">Additional Notes</label>
                    <textarea id="comp-notes" class="form-textarea" placeholder="Any specific skills, salary range, benefits offered..."></textarea>
                  </div>
                </div>

                <div style="display:flex; justify-content:flex-end; margin-top:1.5rem;">
                  <button type="submit" class="btn btn-primary">Register Requirement</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("employer-requirement-form").addEventListener("submit", function(e) {
      e.preventDefault();
      
      const newB2b = {
        id: "b2b-" + Date.now(),
        companyName: document.getElementById("comp-name").value.trim(),
        industry: document.getElementById("comp-industry").value.trim(),
        contactPerson: document.getElementById("comp-contact").value.trim(),
        designation: document.getElementById("comp-desig").value.trim(),
        phone: document.getElementById("comp-phone").value.trim(),
        email: document.getElementById("comp-email").value.trim(),
        location: document.getElementById("comp-location").value.trim(),
        workersRequired: document.getElementById("comp-count").value,
        rolesNeeded: document.getElementById("comp-roles").value.trim(),
        shift: document.getElementById("comp-shift").value,
        gender: document.getElementById("comp-gender").value,
        startDate: document.getElementById("comp-startdate").value || "Immediate",
        notes: document.getElementById("comp-notes").value.trim()
      };

      STATE.b2b.push(newB2b);
      saveDatabase();

      showToast("Requirement registered successfully! Our team will call you back today.", "success");
      this.reset();
    });
  },

  // D. ABOUT US
  about: function(container) {
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>About Us</h1>
          <p>Sriperumbudur's industrial workforce, wired.</p>
        </div>
      </div>
      
      <div class="container" style="margin-top:3.5rem;">
        <div class="about-narrative scroll-reveal">
          <strong>KV ENTERPRISES</strong> is a specialised industrial manpower firm supplying skilled and semi-skilled workers to leading manufacturing plants in and around Sriperumbudur. We operate lean, move fast, and deliver workers who show up ready.
        </div>

        <div class="card scroll-reveal" style="margin-bottom:3.5rem;">
          <h3 style="margin-bottom:1rem; color:var(--accent); font-family:var(--font-mono); text-transform:uppercase; font-size:1rem;">Our Mission</h3>
          <h2 style="font-size:1.85rem; margin-bottom:1rem; color:var(--text-main);">Right worker. Right role. Right on time.</h2>
          <p style="line-height:1.65; color:var(--text-body); max-width:850px;">
            Manufacturing plants lose lakhs every day a line runs short-staffed. Job seekers lose weeks chasing consultants. We remove both problems by matching pre-verified workers to open shifts within 72 hours.
          </p>
          <p style="line-height:1.65; color:var(--text-body); max-width:850px; margin-top:1rem;">
            From Korean automotive OEMs to home-grown metal fabricators, we've built a reliable pipeline of CNC operators, quality inspectors, production associates, and despatch labour ready to join immediately.
          </p>
        </div>

        <!-- Metrics display -->
        <div class="stats-grid scroll-reveal" style="margin-bottom:4rem;">
          <div class="stat-card">
            <div class="stat-number" data-count-target="500">0</div>
            <div class="stat-label">Workers placed</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-count-target="25">0</div>
            <div class="stat-label">Client factories</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-count-target="72">0</div>
            <div class="stat-label">Avg. placement</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-count-target="100">0</div>
            <div class="stat-label">Direct joining</div>
          </div>
        </div>

        <!-- Industries serve grid -->
        <div class="section-header scroll-reveal">
          <h2>Where our workers show up</h2>
          <p>Supplying skilled technicians to key manufacturing lines.</p>
        </div>
        <div class="about-serve-grid">
          <div class="serve-card scroll-reveal scroll-stagger-1">
            <h4>01 / Automotive</h4>
            <p>Korean & Indian OEMs, Tier-1 & Tier-2 suppliers.</p>
          </div>
          <div class="serve-card scroll-reveal scroll-stagger-2">
            <h4>02 / Metal Tech</h4>
            <p>Sheet metal, fabrication, racking systems.</p>
          </div>
          <div class="serve-card scroll-reveal scroll-stagger-3">
            <h4>03 / Precision CNC</h4>
            <p>CNC operators, quality inspectors, machinists.</p>
          </div>
          <div class="serve-card scroll-reveal scroll-stagger-4">
            <h4>04 / Logistics</h4>
            <p>Despatch, warehousing, packing lines.</p>
          </div>
        </div>

        <!-- Two paths CTA -->
        <div class="scroll-reveal" style="background-color:var(--text-main); color:var(--bg-canvas); border-radius:var(--radius-sm); padding:4rem 2rem; text-align:center; box-shadow: 0 10px 30px rgba(var(--accent-rgb),0.06);">
          <h3 style="color:var(--bg-canvas); font-size:1.85rem; margin-bottom:0.75rem;">Ready to hire or get hired?</h3>
          <p style="color:var(--text-muted); margin-bottom:2.5rem; font-size:0.95rem;">Two paths. One trusted industrial manpower partner.</p>
          <div style="display:flex; justify-content:center; gap:1.25rem; flex-wrap:wrap;">
            <a href="#jobs" class="btn btn-primary">I'm looking for a job</a>
            <a href="#employer" class="btn btn-teal">I need workers</a>
          </div>
        </div>
      </div>
    `;
  },

  // E. CONTACT
  contact: function(container) {
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>Contact</h1>
          <p>Get in touch. Call, WhatsApp, or drop by. We reply within business hours.</p>
        </div>
      </div>
      
      <div class="container contact-layout-box">
        <!-- Address Details -->
        <div class="contact-details-grid">
          <div class="contact-detail-item scroll-reveal scroll-stagger-1">
            <div class="contact-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div class="contact-text-wrap">
              <h4>Call Recruiter Desk</h4>
              <p style="font-weight:700; color:var(--text-main); margin-top:0.25rem;">Call Primary: 6385422938</p>
              <p style="font-weight:700; color:var(--text-main);">Call Alternate: 7200172460</p>
            </div>
          </div>

          <div class="contact-detail-item scroll-reveal scroll-stagger-2">
            <div class="contact-icon-wrap" style="background-color:rgba(37,211,102,0.06); color:#25D366; border-color: rgba(37,211,102,0.15)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            </div>
            <div class="contact-text-wrap">
              <h4>WhatsApp Placements</h4>
              <a href="https://wa.me/916385422938" target="_blank" style="font-weight:700; color:#25D366; display:inline-block; margin-top:0.25rem;">Chat Now &rarr;</a>
            </div>
          </div>

          <div class="contact-detail-item scroll-reveal scroll-stagger-3">
            <div class="contact-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
            </div>
            <div class="contact-text-wrap">
              <h4>Corridor Location</h4>
              <p>Sriperumbudur, Chennai</p>
              <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Serving factories across Sriperumbudur, Vallam, Pennalur, Vallakottai and Oragadam corridors.</p>
            </div>
          </div>
        </div>

        <!-- Office Hours Panel -->
        <div class="office-hours-block scroll-reveal scroll-stagger-2">
          <h3>Working Hours</h3>
          <div class="hours-row">
            <span>Monday – Saturday:</span>
            <span class="val">9:00 AM — 8:00 PM</span>
          </div>
          <div class="hours-row">
            <span>Sunday:</span>
            <span class="val" style="color:#EF4444; font-weight:700;">Closed</span>
          </div>
        </div>
      </div>
    `;
  }
};

// --- 3. SUB-RENDERING HELPERS ---

function renderHomeJobs() {
  const container = document.getElementById("home-jobs-container");
  if (!container) return;

  // Render jobs as browser window cards with z-indexes & sticky positions
  container.innerHTML = STATE.jobs.map((job, idx) => getBrowserJobCardHTML(job, idx, true)).join("");
  bindJobCardEvents();
}

function renderBoardJobsList(searchQuery, genderFilter) {
  const container = document.getElementById("board-jobs-container");
  if (!container) return;

  let results = STATE.jobs.filter(job => {
    const matchesSearch = !searchQuery || 
                          job.title.toLowerCase().includes(searchQuery) ||
                          job.company.toLowerCase().includes(searchQuery) ||
                          job.location.toLowerCase().includes(searchQuery) ||
                          job.description.toLowerCase().includes(searchQuery);

    const matchesGender = genderFilter === "all" || 
                          job.gender === "Both" || 
                          job.gender.toLowerCase() === genderFilter.toLowerCase();

    return matchesSearch && matchesGender;
  });

  if (results.length === 0) {
    container.innerHTML = `<div class="card scroll-reveal" style="text-align:center; padding:3rem; grid-column:span 3;">No matching open positions found.</div>`;
    return;
  }

  // Render on job board page - no sticky stack calculations
  container.innerHTML = results.map((job, idx) => getBrowserJobCardHTML(job, idx, false)).join("");
  bindJobCardEvents();
  initScrollAnimations();
}

// Generates the browser card component HTML (Tivor Stack style)
function getBrowserJobCardHTML(job, index, isSticky = false) {
  const idxStr = String(index + 1).padStart(2, '0');
  
  const urgentBadge = job.urgent ? `<span class="badge badge-urgent">Urgent</span>` : '';
  const genderBadge = job.gender === "Both" 
    ? `<span class="badge badge-neutral">Male / Female</span>`
    : `<span class="badge badge-green">${job.gender} Only</span>`;
  
  const staggerClass = `scroll-stagger-${(index % 4) + 1}`;
  
  // Stacking deck calculations
  const styleString = isSticky 
    ? `style="position: sticky; top: ${12 + index * 6}vh; z-index: ${10 + index}; margin-bottom: 5rem;"` 
    : '';

  return `
    <article class="product-card scroll-reveal ${staggerClass}" ${styleString} data-jobid="${job.id}">
      <div class="product-card-inner">
        <!-- Browser Header bar -->
        <div class="product-card-header">
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-[5px]">
              <span class="rounded-full" style="width:10px;height:10px;background:#FF5F57;display:block"></span>
              <span class="rounded-full" style="width:10px;height:10px;background:#FEBC2E;display:block"></span>
              <span class="rounded-full" style="width:10px;height:10px;background:#28C840;display:block"></span>
            </div>
            <span style="width:1px;height:16px;background:var(--border-color)"></span>
            <span class="font-mono text-[10px] uppercase text-muted" style="font-family:var(--font-mono)">${idxStr}</span>
            <div class="min-w-0">
              <p class="font-semibold text-main text-sm leading-none truncate">${job.company}</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <p class="font-mono text-[11px] text-muted hidden sm:block" style="font-family:var(--font-mono)">${job.industry}</p>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-muted"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
        
        <!-- Card Body content -->
        <div class="p-8">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1.5rem;">
            <div>
              <div class="job-card-tags" style="margin-bottom:0.75rem; display:flex; gap:0.45rem;">
                ${urgentBadge}
                ${genderBadge}
                <span class="badge badge-neutral">${job.shift}</span>
              </div>
              <h3 style="font-size:1.6rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem; line-height:1.2;">${job.title}</h3>
              <div style="display:flex; gap:1.5rem; font-family:var(--font-mono); font-size:0.85rem; color:var(--text-body); margin-top:0.5rem;">
                <div style="display:flex; align-items:center; gap:0.35rem;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                  <span>${job.location}</span>
                </div>
                <div style="display:flex; align-items:center; gap:0.35rem;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16M9 21h6"/></svg>
                  <span style="font-weight:700; color:var(--accent);">${job.salary}</span>
                </div>
              </div>
            </div>
            
            <div style="display:flex; align-items:center;">
              <button class="btn btn-primary btn-detail-trigger" data-jobid="${job.id}">View Details & Apply</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function bindJobCardEvents() {
  document.querySelectorAll(".btn-detail-trigger").forEach(btn => {
    btn.addEventListener("click", () => showDetailModal(btn.dataset.jobid));
  });
}

// --- 4. DETAILS & APPLY MODAL WINDOW ---

function showDetailModal(jobId) {
  const job = STATE.jobs.find(j => j.id === jobId);
  if (!job) return;

  const overlay = document.getElementById("modal-container");
  
  overlay.innerHTML = `
    <div class="modal-content">
      <button class="modal-close-btn" id="btn-close-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <div class="modal-header-block">
        <span class="badge badge-green" style="margin-bottom:0.5rem;">${job.industry}</span>
        <h2>${job.title}</h2>
        <p style="color:var(--accent); font-weight:700; font-size:1.05rem; margin-top:0.25rem;">${job.company}</p>
      </div>
      
      <div class="modal-body-block">
        <table class="details-summary-table">
          <tr>
            <td class="label">Location</td>
            <td class="value">${job.location}</td>
          </tr>
          <tr>
            <td class="label">Salary Package</td>
            <td class="value" style="font-weight:700; color:var(--accent);">${job.salary}</td>
          </tr>
          <tr>
            <td class="label">Shift Timing</td>
            <td class="value">${job.shift}</td>
          </tr>
          <tr>
            <td class="label">Gender Allowed</td>
            <td class="value">${job.gender} Candidates</td>
          </tr>
          <tr>
            <td class="label">Age Limit</td>
            <td class="value">${job.age} Years</td>
          </tr>
          <tr>
            <td class="label">Qualification</td>
            <td class="value">${job.qualification}</td>
          </tr>
        </table>
        
        <h4 style="margin-top:1.5rem; margin-bottom:0.5rem; font-family:var(--font-mono); font-size:0.8rem; text-transform:uppercase; color:var(--text-main);">Details Description</h4>
        <p style="font-size:0.9rem; line-height:1.5; color:var(--text-body); white-space:pre-line;">
          ${job.description}
        </p>
      </div>
      
      <div class="modal-footer-block">
        <button class="btn btn-secondary btn-apply-call" data-jobid="${job.id}">Call HR Desk</button>
        <button class="btn btn-primary btn-apply-wa" data-jobid="${job.id}">Apply on WhatsApp</button>
      </div>
    </div>
  `;
  
  overlay.classList.remove("hidden");

  // Bind close modal
  document.getElementById("btn-close-modal").addEventListener("click", closeModal);

  // Bind WhatsApp and Call
  overlay.querySelector(".btn-apply-call").addEventListener("click", () => {
    logApplyAction(job.title, job.company, "Call HR Desk");
    showToast("Opening dialer...", "success");
    window.location.href = "tel:6385422938";
  });

  overlay.querySelector(".btn-apply-wa").addEventListener("click", () => {
    logApplyAction(job.title, job.company, "WhatsApp Apply");
    showToast("Redirecting to WhatsApp...", "success");
    
    const textMsg = `Hi KV Enterprises, I want to apply for the position of "${job.title}" at "${job.company}". Please call me.`;
    const waUrl = `https://wa.me/916385422938?text=${encodeURIComponent(textMsg)}`;
    
    window.open(waUrl, "_blank");
  });
}

function closeModal() {
  document.getElementById("modal-container").classList.add("hidden");
}

// --- 5. ADMIN UTILITY MODAL & DATABASE LOGS ---

function showAdminLoginModal() {
  const overlay = document.getElementById("modal-container");
  
  overlay.innerHTML = `
    <div class="modal-content" style="max-width: 420px;">
      <button class="modal-close-btn" id="btn-close-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <div class="modal-header-block">
        <h2>Admin Portal Gate</h2>
        <p style="font-size:0.75rem; color:var(--text-muted);">Enter credentials to view B2B logs. (Use admin / admin)</p>
      </div>
      
      <form id="admin-login-form">
        <div class="modal-body-block">
          <div class="form-group">
            <label class="form-label" for="adm-user">Username</label>
            <input type="text" id="adm-user" class="form-input" required value="admin">
          </div>
          <div class="form-group">
            <label class="form-label" for="adm-pass">Password</label>
            <input type="password" id="adm-pass" class="form-input" required value="admin">
          </div>
        </div>
        
        <div class="modal-footer-block">
          <button type="submit" class="btn btn-primary">Login & view logs</button>
        </div>
      </form>
    </div>
  `;

  overlay.classList.remove("hidden");

  document.getElementById("btn-close-modal").addEventListener("click", closeModal);
  
  document.getElementById("admin-login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const u = document.getElementById("adm-user").value;
    const p = document.getElementById("adm-pass").value;

    if (u === "admin" && p === "admin") {
      showToast("Access Granted", "success");
      showAdminDashboardLogs();
    } else {
      showToast("Invalid credentials", "error");
    }
  });
}

function showAdminDashboardLogs() {
  const overlay = document.getElementById("modal-container");
  
  const b2bRows = STATE.b2b.length === 0 
    ? `<tr><td colspan="5" style="text-align:center;">No requirements logged yet.</td></tr>`
    : STATE.b2b.map(b => `
        <tr>
          <td><strong>${b.companyName}</strong></td>
          <td>${b.rolesNeeded}</td>
          <td>${b.workersRequired} Workers</td>
          <td>${b.phone} / ${b.email}</td>
          <td>${b.location}</td>
        </tr>
      `).join("");

  const clickRows = STATE.clicks.length === 0
    ? `<tr><td colspan="4" style="text-align:center;">No candidate interactions logged.</td></tr>`
    : STATE.clicks.map(c => `
        <tr>
          <td>${c.date}</td>
          <td><strong>${c.action}</strong></td>
          <td>${c.jobTitle}</td>
          <td>${c.company}</td>
        </tr>
      `).join("");

  overlay.innerHTML = `
    <div class="modal-content" style="max-width: 900px; width:95vw;">
      <button class="modal-close-btn" id="btn-close-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <div class="modal-header-block">
        <h2>Admin Placement Database logs</h2>
        <p style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">SYNC STATUS: LOCALSTORAGE DATABASE ACTIVE</p>
      </div>
      
      <div class="modal-body-block" style="display:flex; flex-direction:column; gap:2rem; max-height:60vh; overflow-y:auto;">
        
        <div>
          <h3 style="font-size:1rem; font-family:var(--font-mono); margin-bottom:0.75rem; color:var(--accent); text-transform:uppercase;">Registered B2B Client Requirements</h3>
          <div style="overflow-x:auto;">
            <table class="admin-log-table">
              <thead>
                <tr>
                  <th>Client Plant</th>
                  <th>Roles Requested</th>
                  <th>Count</th>
                  <th>Contact info</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                ${b2bRows}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 style="font-size:1rem; font-family:var(--font-mono); margin-bottom:0.75rem; color:var(--accent); text-transform:uppercase;">Candidate Application clicks logs</h3>
          <div style="overflow-x:auto;">
            <table class="admin-log-table">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Action Selected</th>
                  <th>Target Opportunity</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                ${clickRows}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      
      <div class="modal-footer-block">
        <button class="btn btn-secondary" id="btn-clear-database" style="color:#EF4444; border-color:#EF4444;">Clear logs</button>
        <button class="btn btn-primary" id="btn-close-admin-view">Close logs</button>
      </div>
    </div>
  `;

  document.getElementById("btn-close-modal").addEventListener("click", closeModal);
  document.getElementById("btn-close-admin-view").addEventListener("click", closeModal);
  
  document.getElementById("btn-clear-database").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear B2B submissions and click logs?")) {
      STATE.b2b = [];
      STATE.clicks = [];
      saveDatabase();
      showToast("Database logs cleared", "success");
      showAdminDashboardLogs();
    }
  });
}

// --- 6. TOAST MESSAGES ---

function showToast(message, type = "success") {
  const container = document.getElementById("toast-wrapper");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;
  
  const icon = type === "success" 
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` 
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3500);
}

// --- 7. ROUTING ENGINE & MOTION STAGGER TRIGGERS ---

function handleRouting() {
  const hash = window.location.hash || "#home";

  // Update nav active states
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
  document.getElementById("nav-menu").classList.remove("open");

  const viewIdMap = {
    "#home": "view-home",
    "#jobs": "view-jobs",
    "#employer": "view-employer",
    "#about": "view-about",
    "#contact": "view-contact"
  };

  const activeId = viewIdMap[hash] || "view-home";

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

  // Dynamic document title update
  const titles = {
    "#home": "KV Enterprises — Premium Industrial Manpower Placements in Sriperumbudur",
    "#jobs": "Open Positions — All Jobs in Sriperumbudur | KV Enterprises",
    "#employer": "Hire Manpower — Register Factory Manpower Requirements | KV Enterprises",
    "#about": "About Us — Sriperumbudur's Industrial Workforce Placements | KV Enterprises",
    "#contact": "Contact — Call or WhatsApp Recruiter Desk | KV Enterprises"
  };

  document.title = titles[hash] || "KV Enterprises — Industrial Manpower";

  // Trigger motion reveals and statistics counts
  initScrollAnimations();
  initStatsCounters();
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  
  document.querySelectorAll(".scroll-reveal").forEach(sec => {
    observer.observe(sec);
  });
}

function initStatsCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute("data-count-target"), 10);
        if (isNaN(countTo)) return;

        let start = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / countTo));
        
        const counter = setInterval(() => {
          start += 1;
          target.innerText = start + (target.innerText.includes("%") || countTo === 100 ? "%" : "+");
          if (start >= countTo) {
            target.innerText = countTo + (countTo === 100 || countTo === 72 ? "" : "+");
            if (countTo === 100) target.innerText += "%";
            if (countTo === 72) target.innerText += "H";
            clearInterval(counter);
          }
        }, Math.max(stepTime, 10));

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".stat-number").forEach(num => {
    observer.observe(num);
  });
}

// --- 8. ACCENT THEME SWITCHER CONTROLLER ---

function initializeThemeSwitcher() {
  const container = document.getElementById("theme-switcher-container");
  const toggleBtn = document.getElementById("theme-switcher-toggle-btn");
  const panel = document.getElementById("theme-presets-panel");
  const dots = document.querySelectorAll(".preset-color-dot");
  
  const savedAccent = localStorage.getItem("kv_accent_theme") || "blue";
  document.body.setAttribute("data-accent", savedAccent);
  
  dots.forEach(dot => {
    if (dot.getAttribute("data-accent-val") === savedAccent) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    panel.classList.add("hidden");
  });
  panel.addEventListener("click", (e) => e.stopPropagation());

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const selected = dot.getAttribute("data-accent-val");
      
      document.body.setAttribute("data-accent", selected);
      localStorage.setItem("kv_accent_theme", selected);
      
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      
      showToast(`Accent theme shifted to ${selected.toUpperCase()}`, "success");
    });
  });
}

// --- 9. INITIALIZERS ---

window.addEventListener("hashchange", handleRouting);

window.addEventListener("scroll", () => {
  const header = document.querySelector(".main-header");
  if (!header) return;
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  mobileToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("open");
  });
  
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && e.target !== mobileToggle) {
      navMenu.classList.remove("open");
    }
  });

  document.getElementById("logo-link").addEventListener("click", () => {
    window.location.hash = "#home";
  });

  document.getElementById("footer-admin-link").addEventListener("click", (e) => {
    e.preventDefault();
    showAdminLoginModal();
  });

  initializeThemeSwitcher();
  handleRouting();
});
