/* ==========================================================================
   APPLICATION CONTROLLER - KV ENTERPRISES (RECRUITMENT PLATFORM SPA)
   ========================================================================== */

// --- 1. LOCAL STORAGE STATE INITIALIZATION ---
const DEFAULT_JOBS = [
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
    salaryVal: 15600,
    qualification: "Any Qualification",
    urgent: true,
    tags: ["Urgent", "No Night Shift", "Direct Join"],
    description: "Seeking energetic operators for shelf metal cutting, packing, and dispatch operations. Must be active and quick to learn. No night shifts involved. Joining within 2 days."
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
    salaryVal: 20000,
    qualification: "10th Pass to Any Degree",
    urgent: true,
    tags: ["Urgent", "Female Only", "Freshers Welcome"],
    description: "Inspection of small electronic components and wiring boards. Clean, air-conditioned workspace. Sit-and-work environment. Single daily shift, no night rotation."
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
    salaryVal: 16000,
    qualification: "8th Pass to Any Degree",
    urgent: true,
    tags: ["Urgent", "Korean MNC", "Automotive"],
    description: "Direct joining for CNC machine operation, sheet metal foaming, component bending, or quality testing. Korean MNC automotive supplier. PF and ESI benefits covered."
  },
  {
    id: "job-04",
    title: "Assembly Line Operator",
    company: "Daesung Electronics Supplier",
    industry: "Precision Electronics",
    location: "Oragadam Industrial Corridor",
    gender: "Both",
    age: "18 - 28",
    shift: "Rotational Shift",
    salary: "₹14,800 (8 HRS)",
    salaryVal: 14800,
    qualification: "12th Pass or Above",
    urgent: false,
    tags: ["MNC Supplier", "Electronics", "Immediate joining"],
    description: "Assembly of smart electronic displays and PCB mounting. Cleanroom working environment. Free transport provided within 15km."
  },
  {
    id: "job-05",
    title: "Heavy Press Operator",
    company: "TMTE Sheet Metal Tech",
    industry: "Metal Manufacturing",
    location: "Vallam Vadagal",
    gender: "Male",
    age: "20 - 35",
    shift: "Rotational Shift",
    salary: "₹17,500 (8 HRS)",
    salaryVal: 17500,
    qualification: "ITI / Diploma Mechanical",
    urgent: false,
    tags: ["Metal tech", "Direct Join", "Experience Preferred"],
    description: "Operation of metal bending and heavy hydraulic stamping presses. Safety boots and gear provided. 1-2 years experience in metal fabrications is a plus."
  }
];

const DEFAULT_PROFILE = {
  name: "Rajesh Kumar",
  email: "rajesh.k98@gmail.com",
  phone: "6385422938",
  gender: "Male",
  age: "24",
  qualification: "ITI Machinist",
  skills: ["CNC Programming", "Quality Inspection", "Vernier Caliper Calibration"],
  resumeName: "rajesh_kumar_resume_iti.pdf",
  seeking: true
};

const DEFAULT_APPLICATIONS = [
  {
    applicationId: "app-default-01",
    jobId: "job-01",
    jobTitle: "Production / Despatch Operators",
    company: "DONRACKS PVT. LTD (DONRACKS TMTE Metal Tech)",
    dateApplied: "2026-06-29",
    status: "Reviewing",
    applicantName: "Rajesh Kumar",
    applicantPhone: "6385422938",
    applicantEmail: "rajesh.k98@gmail.com",
    applicantGender: "Male",
    applicantAge: "24",
    applicantQualification: "ITI Machinist",
    applicantSkills: ["CNC Programming", "Quality Inspection", "Vernier Caliper Calibration"]
  }
];

const DEFAULT_B2B = [
  {
    companyName: "Korean Auto Components Pvt Ltd",
    industry: "Automotive",
    contactPerson: "Mr. Park Seung-woo",
    phone: "7200172460",
    email: "hr@koreanauto.in",
    location: "Vallam Industrial Zone",
    workersRequired: "50",
    rolesNeeded: "CNC Operators and SMT Technicians",
    shift: "Rotational",
    gender: "Both",
    startDate: "2026-07-15",
    notes: "Requires basic knowledge in engineering drawings. Mobilize urgent basis."
  }
];

// Load State Helper
function loadState() {
  if (!localStorage.getItem("kv_jobs")) {
    localStorage.setItem("kv_jobs", JSON.stringify(DEFAULT_JOBS));
    localStorage.setItem("kv_profile", JSON.stringify(DEFAULT_PROFILE));
    localStorage.setItem("kv_applications", JSON.stringify(DEFAULT_APPLICATIONS));
    localStorage.setItem("kv_b2b", JSON.stringify(DEFAULT_B2B));
  }
  return {
    jobs: JSON.parse(localStorage.getItem("kv_jobs")),
    profile: JSON.parse(localStorage.getItem("kv_profile")),
    applications: JSON.parse(localStorage.getItem("kv_applications")),
    b2b: JSON.parse(localStorage.getItem("kv_b2b"))
  };
}

// Global State
let STATE = loadState();

// Save state back to storage
function saveState() {
  localStorage.setItem("kv_jobs", JSON.stringify(STATE.jobs));
  localStorage.setItem("kv_profile", JSON.stringify(STATE.profile));
  localStorage.setItem("kv_applications", JSON.stringify(STATE.applications));
  localStorage.setItem("kv_b2b", JSON.stringify(STATE.b2b));
}

// --- 2. DYNAMIC VIEW TEMPLATES AND RENDERERS ---

const ViewRenderers = {
  
  // A. HOME VIEW RENDERER
  home: function(container) {
    container.innerHTML = `
      <!-- Hero Banner -->
      <section class="hero-section">
        <div class="container hero-grid">
          <div class="hero-content-area">
            <div class="hero-tag">
              <span class="pulse-dot"></span>
              <span>Sriperumbudur Factory Placement Portal</span>
            </div>
            <h1 class="hero-title">
              Industrial Manpower.<br>
              <span class="gradient-text">Delivered. On Time.</span>
            </h1>
            <p class="hero-desc">
              KV Enterprises places skilled operators and production associates into leading Korean, Japanese, and Indian manufacturing plants. Direct joining. No middlemen. Get placed in 72 hours.
            </p>
            <div class="hero-ctas">
              <a href="#jobs" class="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                View Open Jobs
              </a>
              <a href="#employer" class="btn btn-secondary">Hire Manpower</a>
            </div>
          </div>
          <div class="hero-illustration">
            <div class="illustration-card">
              <div class="illus-badge">Direct Joining • No Fees</div>
              <h3 class="illus-title">Active Factory Onboarding</h3>
              <p style="font-size:0.9rem; color:var(--text-body);">We coordinate direct joining documentation, verified background checks, and shift distributions with major factories.</p>
              
              <div class="illus-timeline">
                <div class="illus-step">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Step 1: Quick Profile Upload</span>
                </div>
                <div class="illus-step">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Step 2: Document Verification (Aadhar/Edu)</span>
                </div>
                <div class="illus-step">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Step 3: Direct Joining at Factory Gate</span>
                </div>
              </div>
            </div>
            <div class="illus-decor-circle"></div>
          </div>
        </div>
      </section>

      <!-- Integrated Hero Search -->
      <section class="container search-container-wrap">
        <div class="search-panel">
          <form id="hero-search-form" class="search-form-grid">
            <div class="search-field-input">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input type="text" id="hero-search-query" placeholder="Search CNC, operator, QA...">
            </div>
            <div class="search-field-input">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              <select id="hero-search-location">
                <option value="">All Locations</option>
                <option value="Sriperumbudur">Sriperumbudur</option>
                <option value="Pennalur">Pennalur</option>
                <option value="Vallam">Vallam</option>
                <option value="Oragadam">Oragadam</option>
              </select>
            </div>
            <div class="search-field-input">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              <select id="hero-search-industry">
                <option value="">All Industries</option>
                <option value="Metal Manufacturing">Metal Tech</option>
                <option value="Precision Manufacturing">Precision CNC</option>
                <option value="Automotive">Automotive MNC</option>
                <option value="Precision Electronics">Electronics Assembly</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
        </div>
      </section>

      <!-- Infinity Industrial Marquee -->
      <section style="margin-top: 3.5rem;">
        <div class="marquee-container">
          <div class="marquee-inner">
            <span>CNC Machining</span>
            <span>Quality Control</span>
            <span>Production Staffing</span>
            <span>Manpower Outsourcing</span>
            <span>Automotive Corridors</span>
            <span>Metal Tech Fabrication</span>
            <span>SMT Assembly Lines</span>
            <span>CNC Machining</span>
            <span>Quality Control</span>
            <span>Production Staffing</span>
            <span>Manpower Outsourcing</span>
            <span>Automotive Corridors</span>
          </div>
        </div>
      </section>

      <!-- Metrics Section -->
      <section class="stats-section">
        <div class="container stats-grid">
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Workers Placed</div>
            <div class="stat-desc">Direct factory jobs</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">25+</div>
            <div class="stat-label">Client Factories</div>
            <div class="stat-desc">Korean & Japanese suppliers</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">72H</div>
            <div class="stat-label">Avg. Placement</div>
            <div class="stat-desc">Quick gate joining</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">Direct Joining</div>
            <div class="stat-desc">Zero brokerage fees</div>
          </div>
        </div>
      </section>

      <!-- Featured Industries -->
      <section class="categories-section">
        <div class="container">
          <div class="section-header">
            <h2>Specialized Hiring Corridors</h2>
            <p>Direct workforce placement across automotive, electrical, and precision industries of Sriperumbudur corridor.</p>
          </div>
          <div class="grid grid-4">
            <div class="card category-card">
              <div class="cat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 class="cat-title">Precision CNC</h3>
              <p class="cat-desc">Operation, foaming, bending, lathe settings, program feed technicians.</p>
              <div class="cat-count">Active Openings</div>
            </div>
            
            <div class="card category-card">
              <div class="cat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 class="cat-title">Quality Control</h3>
              <p class="cat-desc">Visual inspectors, QA check associates, female line checkers (AC units).</p>
              <div class="cat-count">Immediate Joining</div>
            </div>
            
            <div class="card category-card">
              <div class="cat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 class="cat-title">Production Lines</h3>
              <p class="cat-desc">Auto components assembly, plastic moulding helpers, wiring harness.</p>
              <div class="cat-count">24-Hour Gate Pass</div>
            </div>

            <div class="card category-card">
              <div class="cat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 class="cat-title">Logistics & Warehousing</h3>
              <p class="cat-desc">Dispatch loaders, stock checkers, barcode operators, packaging helpers.</p>
              <div class="cat-count">Urgent Mobilization</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Latest Openings Feed -->
      <section class="jobs-section">
        <div class="container">
          <div class="section-header">
            <h2>Active Factory Openings</h2>
            <p>Immediate gate joining placements. Browse by categories or select to apply.</p>
          </div>
          
          <div class="tabs-container">
            <button class="tab-btn active" data-filter="all">All Jobs</button>
            <button class="tab-btn" data-filter="no-night">No Night Shift</button>
            <button class="tab-btn" data-filter="urgent">Urgent Openings</button>
          </div>
          
          <div class="job-feed-list" id="home-job-feed">
            <!-- Rendered Dynamically -->
          </div>
          
          <div style="text-align: center;">
            <a href="#jobs" class="btn btn-secondary">Browse All Available Openings</a>
          </div>
        </div>
      </section>

      <!-- B2B Banner -->
      <section class="employer-banner-section">
        <div class="container">
          <div class="banner-grid">
            <div class="banner-content">
              <h3>Need verified workers this week?</h3>
              <p>
                From 10 CNC machinists to 200 assembly operators, we mobilize compliance-handled workers across Sriperumbudur industrial zones. Check our B2B registration.
              </p>
              <div class="banner-features">
                <div class="banner-feature-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Same-day callbacks</span>
                </div>
                <div class="banner-feature-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
                  <span>PF/ESI Compliance handled</span>
                </div>
                <div class="banner-feature-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Background verified profiles</span>
                </div>
                <div class="banner-feature-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Bulk hiring capability</span>
                </div>
              </div>
              <div>
                <a href="#employer" class="btn btn-teal">B2B Manpower Registration</a>
              </div>
            </div>
            
            <div class="banner-img-area">
              <div class="banner-card-float">
                <h4>Sriperumbudur Corridor</h4>
                <div class="float-info-row">
                  <span>CNC Machinists:</span>
                  <span class="val">Mobilized in 48h</span>
                </div>
                <div class="float-info-row">
                  <span>Compliance Check:</span>
                  <span class="val">100% pre-vetted</span>
                </div>
                <div class="float-info-row">
                  <span>Direct Placement:</span>
                  <span class="val">Zero gate hassle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Us Section -->
      <section class="why-section">
        <div class="container">
          <div class="section-header">
            <h2>Built for Sriperumbudur's Factory Belt</h2>
            <p>Why plant managers and job seekers trust KV Enterprises since day one.</p>
          </div>
          <div class="why-features-grid">
            <div class="why-card">
              <span class="why-num">01 / FOCUS</span>
              <h3 class="why-title">Factory-First</h3>
              <p class="why-desc">We know the shop floor. From CNC programming to despatch logistics, we place workers ready to deliver on day one.</p>
            </div>
            <div class="why-card">
              <span class="why-num">02 / SPEED</span>
              <h3 class="why-title">Fast Turnaround</h3>
              <p class="why-desc">Most placements happen within 72 hours of registering manpower requirements. Immediate gate passes processed.</p>
            </div>
            <div class="why-card">
              <span class="why-num">03 / TRUST</span>
              <h3 class="why-title">Verified Profiles</h3>
              <p class="why-desc">Aadhar details, bank credentials, education certificates, and experience proofs are checked before shortlisting.</p>
            </div>
            <div class="why-card">
              <span class="why-num">04 / SUPPORT</span>
              <h3 class="why-title">End-to-End Handling</h3>
              <p class="why-desc">Documentation, compliance onboarding, replacement handling—your hiring managers get a single contact point, zero hassle.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Contact Box -->
      <section class="quick-contact-strip">
        <div class="container">
          <div class="quick-contact-box">
            <div class="quick-text">
              <h3>Talk to our HR Desk Today</h3>
              <p>Call or WhatsApp to get placed in Sriperumbudur this week.</p>
            </div>
            <div class="quick-buttons">
              <a href="tel:6385422938" class="btn btn-primary">Call 6385422938</a>
              <a href="https://wa.me/916385422938" target="_blank" class="btn btn-secondary">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    `;
    
    // Bind Home Page Event Listeners
    document.getElementById("hero-search-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const q = document.getElementById("hero-search-query").value.trim();
      const loc = document.getElementById("hero-search-location").value;
      const ind = document.getElementById("hero-search-industry").value;
      
      // Navigate to jobs view with search parameters
      window.location.hash = `#jobs?q=${encodeURIComponent(q)}&loc=${encodeURIComponent(loc)}&ind=${encodeURIComponent(ind)}`;
    });

    // Tab view inside Home Feed
    const tabButtons = container.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderHomeFeedList(btn.dataset.filter);
      });
    });

    // Initial render of home jobs
    renderHomeFeedList("all");
  },

  // B. JOB SEARCH & BOARD RENDERER
  jobs: function(container, params) {
    const query = params.get("q") || "";
    const loc = params.get("loc") || "";
    const ind = params.get("ind") || "";

    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>Direct Placements Board</h1>
          <p>Browse active listings across CNC, Quality, and Logistics operations.</p>
        </div>
      </div>
      
      <div class="container">
        <div class="job-board-layout">
          <!-- Left Columns Sidebar Filter -->
          <aside class="filters-sidebar">
            <div class="filter-block">
              <div class="filter-title">
                <span>Active Filters</span>
                <button class="btn-clear-filters" id="btn-clear-all-filters">Clear All</button>
              </div>
            </div>
            
            <div class="filter-block">
              <div class="filter-title">Gender Preference</div>
              <div class="filter-options">
                <label class="checkbox-label">
                  <input type="radio" name="filter-gender" value="all" checked>
                  All
                </label>
                <label class="checkbox-label">
                  <input type="radio" name="filter-gender" value="Both">
                  Both (Male & Female)
                </label>
                <label class="checkbox-label">
                  <input type="radio" name="filter-gender" value="Male">
                  Male Candidates
                </label>
                <label class="checkbox-label">
                  <input type="radio" name="filter-gender" value="Female">
                  Female Candidates Only
                </label>
              </div>
            </div>

            <div class="filter-block">
              <div class="filter-title">Shift Setup</div>
              <div class="filter-options">
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-shift" value="No Night Shift">
                  No Night Shift
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-shift" value="Single Shift">
                  Single Shift (Day)
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-shift" value="Rotational Shift">
                  Rotational Shifts
                </label>
              </div>
            </div>

            <div class="filter-block">
              <div class="filter-title">Hiring Corridors</div>
              <div class="filter-options">
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-industry" value="Metal Manufacturing">
                  Metal Tech
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-industry" value="Precision Manufacturing">
                  Precision CNC
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-industry" value="Automotive">
                  Automotive Suppliers
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-industry" value="Precision Electronics">
                  Electronics Assembly
                </label>
              </div>
            </div>

            <div class="filter-block">
              <div class="filter-title">Qualification</div>
              <div class="filter-options">
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-qual" value="Any Qualification">
                  Any Qualification
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-qual" value="10th Pass">
                  10th Pass / High School
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-qual" value="8th Pass">
                  8th Pass
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" class="filter-qual" value="ITI / Diploma">
                  ITI or Diploma Mechanical
                </label>
              </div>
            </div>

            <div class="filter-block">
              <div class="filter-title">Urgent Postings</div>
              <div class="filter-options">
                <label class="checkbox-label">
                  <input type="checkbox" id="filter-urgent-only">
                  Show Urgent Hiring Only
                </label>
              </div>
            </div>
          </aside>

          <!-- Right Column Job Feeds -->
          <div class="board-listings-area">
            <div class="board-search-bar">
              <input type="text" id="board-search-input" placeholder="Search keywords (CNC, Donracks, Operator, Location)..." value="${query}">
              <button class="btn btn-primary" id="btn-board-search">Search</button>
            </div>
            
            <div class="board-feed-header">
              <div>Showing <span class="search-results-count" id="jobs-count">0</span> opportunities in Sriperumbudur</div>
              <div>Direct Joining • Free Onboarding</div>
            </div>
            
            <div class="job-feed-list" id="board-job-feed">
              <!-- Rendered Dynamically -->
            </div>

            <div class="pagination-container" id="board-pagination">
              <!-- Rendered Dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;

    // Handle incoming parameters inside search inputs
    const boardSearchInput = document.getElementById("board-search-input");
    
    // Set matching location in filter query state
    if (loc) {
      boardSearchInput.value = `${boardSearchInput.value} ${loc}`.trim();
    }
    if (ind) {
      // pre-select corresponding industry check
      const indChecks = container.querySelectorAll(".filter-industry");
      indChecks.forEach(ch => {
        if (ch.value.toLowerCase().includes(ind.toLowerCase()) || ind.toLowerCase().includes(ch.value.toLowerCase())) {
          ch.checked = true;
        }
      });
    }

    // Bind board event listeners
    const genderRadios = container.querySelectorAll('input[name="filter-gender"]');
    const shiftChecks = container.querySelectorAll('.filter-shift');
    const indChecks = container.querySelectorAll('.filter-industry');
    const qualChecks = container.querySelectorAll('.filter-qual');
    const urgentCheck = document.getElementById("filter-urgent-only");
    
    // Quick filter trigger on any change
    const triggerSearch = () => {
      renderBoardJobs();
    };

    genderRadios.forEach(r => r.addEventListener("change", triggerSearch));
    shiftChecks.forEach(c => c.addEventListener("change", triggerSearch));
    indChecks.forEach(c => c.addEventListener("change", triggerSearch));
    qualChecks.forEach(c => c.addEventListener("change", triggerSearch));
    urgentCheck.addEventListener("change", triggerSearch);
    
    document.getElementById("btn-board-search").addEventListener("click", triggerSearch);
    boardSearchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") triggerSearch();
    });

    document.getElementById("btn-clear-all-filters").addEventListener("click", () => {
      document.getElementById("filter-gender-all") ? document.getElementById("filter-gender-all").checked = true : genderRadios[0].checked = true;
      shiftChecks.forEach(c => c.checked = false);
      indChecks.forEach(c => c.checked = false);
      qualChecks.forEach(c => c.checked = false);
      urgentCheck.checked = false;
      boardSearchInput.value = "";
      triggerSearch();
      showToast("Filters cleared", "success");
    });

    // Initial render of Board
    renderBoardJobs();
  },

  // C. CANDIDATE CAREER PORTAL RENDERER
  portal: function(container) {
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>Candidate Placements Portal</h1>
          <p>Manage your direct job submissions, edit skill profiles, and track statuses.</p>
        </div>
      </div>
      
      <div class="container">
        <div class="portal-layout">
          <!-- Left Column Profile Builder Card -->
          <aside class="profile-card">
            <div class="profile-avatar-area">
              <div class="avatar-placeholder" id="profile-avatar-letters">RK</div>
              <div class="avatar-status-badge"></div>
            </div>
            
            <h3 id="profile-display-name">Rajesh Kumar</h3>
            <span class="profile-title" id="profile-display-title">Machinist Professional</span>
            
            <div class="status-toggle-wrap">
              <span>Ready for Shift Joining</span>
              <label class="switch">
                <input type="checkbox" id="profile-seeking-toggle" checked>
                <span class="slider"></span>
              </label>
            </div>
            
            <div class="profile-details-list">
              <div class="profile-detail-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span id="profile-display-phone">6385422938</span>
              </div>
              <div class="profile-detail-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span id="profile-display-email">rajesh.k98@gmail.com</span>
              </div>
              <div class="profile-detail-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path d="M12 14v8"/></svg>
                <span id="profile-display-qual">ITI Machinist</span>
              </div>
              <div class="profile-detail-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                <span id="profile-display-age-gender">Male • Age 24</span>
              </div>
              <div class="profile-detail-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span id="profile-display-resume" style="font-weight:600; color:var(--accent-sage);">rajesh_kumar_resume_iti.pdf</span>
              </div>
            </div>

            <!-- Skills Chip builder -->
            <div class="skill-chips-block">
              <div class="skill-chips-header">
                <span>Key Competencies</span>
              </div>
              <div class="chips-wrap" id="portal-skills-container">
                <!-- Rendered Dynamically -->
              </div>
              <form id="add-skill-form" class="skill-adder-form">
                <input type="text" id="new-skill-input" placeholder="Add CNC, Lathe, etc." required>
                <button type="submit" class="btn btn-primary">+</button>
              </form>
            </div>
          </aside>

          <!-- Right Column Tracker Operations -->
          <div class="portal-content-box">
            <!-- Simulated Resume Upload Section -->
            <div class="card" style="padding: 1.5rem;">
              <div class="portal-sub-header">
                <span>Update Resume & Info</span>
                <span style="font-size:0.8rem; color:var(--text-muted);">Simulate Resume Parsing</span>
              </div>
              
              <div class="resume-upload-zone" id="resume-drop-zone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                <div class="upload-main-text">Upload Resume (PDF, DOCX)</div>
                <div class="upload-sub-text">We will automatically parse your age, qualifications, and skills!</div>
                <input type="file" id="resume-file-input" style="display:none;" accept=".pdf,.doc,.docx">
              </div>
              
              <div id="parse-progress-bar-wrap" class="hidden" style="margin-top: 1rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                  <span id="progress-status-text">Parsing file...</span>
                  <span id="progress-percentage">0%</span>
                </div>
                <div style="background-color:var(--border-color); height:6px; border-radius:10px; overflow:hidden;">
                  <div id="parse-progress-bar" style="background-color:var(--accent-sage); width:0%; height:100%; transition:width 0.15s ease;"></div>
                </div>
              </div>
            </div>

            <!-- Applied Jobs Tracker -->
            <div class="card" style="padding: 1.5rem;">
              <div class="portal-sub-header">
                <span>Applied Placements Tracker</span>
                <span style="font-size:0.85rem; font-weight:600; color:var(--accent-teal);" id="app-counter">1 applied</span>
              </div>
              
              <div style="overflow-x: auto; width:100%;">
                <table class="applied-tracker-table">
                  <thead>
                    <tr>
                      <th>Job Opportunity</th>
                      <th>Company</th>
                      <th>Submission Date</th>
                      <th>Verification Status</th>
                      <th style="text-align:right;">Actions</th>
                    </tr>
                  </thead>
                  <tbody id="applied-jobs-table-body">
                    <!-- Rendered Dynamically -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Edit Contact info Form -->
            <div class="card" style="padding: 1.5rem;">
              <div class="portal-sub-header">
                <span>Edit Profile Contacts</span>
              </div>
              <form id="portal-profile-form">
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="profile-edit-name">Full Name *</label>
                    <input type="text" id="profile-edit-name" class="form-input" required>
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="profile-edit-title">Professional Title</label>
                    <input type="text" id="profile-edit-title" class="form-input" placeholder="e.g. ITI CNC Machinist">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="profile-edit-phone">Phone Number *</label>
                    <input type="tel" id="profile-edit-phone" class="form-input" required>
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="profile-edit-email">Email Address *</label>
                    <input type="email" id="profile-edit-email" class="form-input" required>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="profile-edit-qual">Highest Qualification</label>
                    <input type="text" id="profile-edit-qual" class="form-input">
                  </div>
                  <div class="form-group half">
                    <label class="form-label">Age & Gender</label>
                    <div style="display:flex; gap:0.5rem;">
                      <input type="number" id="profile-edit-age" class="form-input" placeholder="Age" style="width:70px;">
                      <select id="profile-edit-gender" class="form-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div style="display:flex; justify-content:flex-end; margin-top:1rem;">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    `;

    // Populate profile inputs
    document.getElementById("profile-edit-name").value = STATE.profile.name;
    document.getElementById("profile-edit-title").value = STATE.profile.title || (STATE.profile.qualification + " Operator");
    document.getElementById("profile-edit-phone").value = STATE.profile.phone;
    document.getElementById("profile-edit-email").value = STATE.profile.email;
    document.getElementById("profile-edit-qual").value = STATE.profile.qualification;
    document.getElementById("profile-edit-age").value = STATE.profile.age;
    document.getElementById("profile-edit-gender").value = STATE.profile.gender;
    document.getElementById("profile-seeking-toggle").checked = STATE.profile.seeking;

    // Bind event handlers
    document.getElementById("profile-seeking-toggle").addEventListener("change", function(e) {
      STATE.profile.seeking = e.target.checked;
      saveState();
      showToast(STATE.profile.seeking ? "Marked as Actively Seeking Placement" : "Marked as Hired / Not Seeking", "success");
    });

    document.getElementById("portal-profile-form").addEventListener("submit", function(e) {
      e.preventDefault();
      STATE.profile.name = document.getElementById("profile-edit-name").value.trim();
      STATE.profile.title = document.getElementById("profile-edit-title").value.trim();
      STATE.profile.phone = document.getElementById("profile-edit-phone").value.trim();
      STATE.profile.email = document.getElementById("profile-edit-email").value.trim();
      STATE.profile.qualification = document.getElementById("profile-edit-qual").value.trim();
      STATE.profile.age = document.getElementById("profile-edit-age").value;
      STATE.profile.gender = document.getElementById("profile-edit-gender").value;
      saveState();
      
      // Update UI displays
      updatePortalProfileCardUI();
      showToast("Profile data saved successfully!", "success");
    });

    // Add Skill Handlers
    document.getElementById("add-skill-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const inVal = document.getElementById("new-skill-input").value.trim();
      if (inVal && !STATE.profile.skills.includes(inVal)) {
        STATE.profile.skills.push(inVal);
        saveState();
        renderPortalSkills();
        document.getElementById("new-skill-input").value = "";
      }
    });

    // File Upload Parser
    const dropZone = document.getElementById("resume-drop-zone");
    const fileInput = document.getElementById("resume-file-input");

    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleResumeSelection);

    // Initial render loaders
    updatePortalProfileCardUI();
    renderPortalSkills();
    renderAppliedJobsList();
  },

  // D. EMPLOYER / RECRUITER HUB RENDERER
  employer: function(container, params) {
    const defaultTab = params.get("tab") || "requirement";
    
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>Employer & Recruiter Hub</h1>
          <p>Register company manpower needs or post a listing to our active factory job feeds.</p>
        </div>
      </div>
      
      <div class="container" style="margin-top:2.5rem;">
        <div class="employer-tabs">
          <button class="employer-tab-btn ${defaultTab === 'requirement' ? 'active' : ''}" data-target="panel-requirement">B2B Manpower Form</button>
          <button class="employer-tab-btn ${defaultTab === 'postjob' ? 'active' : ''}" data-target="panel-postjob">Post a Direct Job</button>
          <button class="employer-tab-btn ${defaultTab === 'dashboard' ? 'active' : ''}" data-target="panel-dashboard">Applicant Manager</button>
        </div>

        <!-- Panel 1: B2B Manpower Requirement Form -->
        <div class="employer-panel ${defaultTab === 'requirement' ? '' : 'hidden'}" id="panel-requirement">
          <div class="grid grid-3" style="grid-template-columns: 1fr 2fr; gap:2.5rem; align-items:start;">
            <div class="card" style="padding:1.5rem; background-color:var(--bg-secondary);">
              <h3 style="margin-bottom:1rem;">Why staff through KV?</h3>
              <ul style="display:flex; flex-direction:column; gap:1rem; list-style:none; font-size:0.9rem; color:var(--text-body);">
                <li>
                  <strong style="color:var(--accent-sage);">Fast Mobilization</strong><br>
                  We source and clear worker gate passes within 72 hours.
                </li>
                <li>
                  <strong style="color:var(--accent-sage);">Compliance Managed</strong><br>
                  Documentation, background checks, bank details, PF, ESI, pre-onboarding sorted.
                </li>
                <li>
                  <strong style="color:var(--accent-sage);">Bulk Placements</strong><br>
                  Capacity to supply up to 500 pre-screened assembly operatives.
                </li>
              </ul>
              <div style="margin-top:2rem; border-top:1px solid var(--border-color); padding-top:1.5rem; text-align:center;">
                <p style="font-size:0.8rem; margin-bottom:0.5rem;">Or call our HR Director</p>
                <a href="tel:6385422938" style="font-weight:700; color:var(--text-main); font-size:1.1rem;">6385422938</a>
              </div>
            </div>

            <div class="card">
              <h3 style="margin-bottom:1.5rem;">Company Requirement Registration Form</h3>
              <form id="b2b-requirement-form">
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="b2b-company">Company Name *</label>
                    <input type="text" id="b2b-company" class="form-input" required placeholder="e.g. Chennai CNC Servotonics">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="b2b-industry">Industry Corridor *</label>
                    <select id="b2b-industry" class="form-select" required>
                      <option value="">Select Industry</option>
                      <option value="Automotive">Automotive MNC</option>
                      <option value="Precision Manufacturing">Precision CNC</option>
                      <option value="Metal Manufacturing">Metal Tech</option>
                      <option value="Packaging & Logistics">Packaging & Logistics</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="b2b-contact">Contact Person *</label>
                    <input type="text" id="b2b-contact" class="form-input" required placeholder="e.g. HR Manager">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="b2b-designation">Designation</label>
                    <input type="text" id="b2b-designation" class="form-input" placeholder="e.g. Plant Head / HR Associate">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="b2b-phone">Phone Number *</label>
                    <input type="tel" id="b2b-phone" class="form-input" required>
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="b2b-email">Corporate Email *</label>
                    <input type="email" id="b2b-email" class="form-input" required>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="b2b-location">Plant Location *</label>
                    <input type="text" id="b2b-location" class="form-input" placeholder="e.g. Pennalur, Sriperumbudur" required>
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="b2b-workers">Required Headcount *</label>
                    <input type="number" id="b2b-workers" class="form-input" placeholder="e.g. 50" required>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="b2b-roles">Roles Needed *</label>
                  <input type="text" id="b2b-roles" class="form-input" placeholder="e.g. 20 CNC Operators, 5 QC Female Inspectors" required>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label">Shift Preference</label>
                    <div style="display:flex; gap:1.5rem; padding-top:0.5rem;">
                      <label class="checkbox-label"><input type="radio" name="b2b-shift" value="Rotational" checked> Rotational</label>
                      <label class="checkbox-label"><input type="radio" name="b2b-shift" value="No Night Shift"> No Night Shift</label>
                    </div>
                  </div>
                  <div class="form-group half">
                    <label class="form-label">Gender Preference</label>
                    <div style="display:flex; gap:1.5rem; padding-top:0.5rem;">
                      <label class="checkbox-label"><input type="radio" name="b2b-gender" value="Both" checked> Both</label>
                      <label class="checkbox-label"><input type="radio" name="b2b-gender" value="Male Only"> Male</label>
                      <label class="checkbox-label"><input type="radio" name="b2b-gender" value="Female Only"> Female</label>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="b2b-start">Expected Joining Date</label>
                    <input type="date" id="b2b-start" class="form-input">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="b2b-notes">Additional Qualifications / Notes</label>
                    <textarea id="b2b-notes" class="form-textarea" placeholder="e.g. basic measuring tools knowledge, ITI certificate required..."></textarea>
                  </div>
                </div>
                <div style="display:flex; justify-content:flex-end; margin-top:1.5rem;">
                  <button type="submit" class="btn btn-primary">Submit Manpower Requirement</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Panel 2: Multi-step Job Poster Form -->
        <div class="employer-panel ${defaultTab === 'postjob' ? '' : 'hidden'}" id="panel-postjob">
          <div class="card" style="max-width: 800px; margin: 0 auto;">
            <!-- Step Indicators -->
            <div class="step-indicator-bar" id="post-step-bar">
              <div class="step-indicator-item active" data-step="1">
                <div class="step-num">1</div>
                <span>Company Details</span>
              </div>
              <div class="step-indicator-item" data-step="2">
                <div class="step-num">2</div>
                <span>Job Metrics</span>
              </div>
              <div class="step-indicator-item" data-step="3">
                <div class="step-num">3</div>
                <span>Description Details</span>
              </div>
            </div>

            <!-- Post Job Form -->
            <form id="recruiter-post-job-form">
              <!-- Step 1 Block -->
              <div class="form-step-block" id="form-step-1">
                <h3 style="margin-bottom:1.5rem;">Step 1: Recruiter & Factory Core</h3>
                <div class="form-group">
                  <label class="form-label" for="jobpost-company">Employer / Company Name *</label>
                  <input type="text" id="jobpost-company" class="form-input" required placeholder="e.g. Gilan Automotive">
                </div>
                <div class="form-group">
                  <label class="form-label" for="jobpost-industry">Sector Corridor *</label>
                  <select id="jobpost-industry" class="form-select" required>
                    <option value="Automotive">Automotive MNC</option>
                    <option value="Precision Manufacturing">Precision CNC</option>
                    <option value="Metal Manufacturing">Metal Tech</option>
                    <option value="Precision Electronics">Electronics Assembly</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="jobpost-location">Plant Address / Location *</label>
                  <input type="text" id="jobpost-location" class="form-input" required placeholder="e.g. Vallam Industrial corridor, Sriperumbudur">
                </div>
                <div style="display:flex; justify-content:flex-end; margin-top:2rem;">
                  <button type="button" class="btn btn-primary" id="btn-next-step-1">Next Step &rarr;</button>
                </div>
              </div>

              <!-- Step 2 Block -->
              <div class="form-step-block hidden" id="form-step-2">
                <h3 style="margin-bottom:1.5rem;">Step 2: Hiring Details</h3>
                <div class="form-group">
                  <label class="form-label" for="jobpost-title">Job Position Title *</label>
                  <input type="text" id="jobpost-title" class="form-input" required placeholder="e.g. CNC Operator / Foaming">
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="jobpost-salary">Salary Range (e.g. ₹16,000 / month) *</label>
                    <input type="text" id="jobpost-salary" class="form-input" required placeholder="₹16,000 (8 HRS)">
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="jobpost-salaryval">Numerical Salary for filter *</label>
                    <input type="number" id="jobpost-salaryval" class="form-input" required placeholder="16000">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="jobpost-gender">Gender Requirement *</label>
                    <select id="jobpost-gender" class="form-select" required>
                      <option value="Both">Both (Male & Female)</option>
                      <option value="Male">Male Candidates Only</option>
                      <option value="Female">Female Candidates Only</option>
                    </select>
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="jobpost-age">Age Limit Range *</label>
                    <input type="text" id="jobpost-age" class="form-input" required placeholder="18 - 35">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group half">
                    <label class="form-label" for="jobpost-shift">Shift Rotation *</label>
                    <select id="jobpost-shift" class="form-select" required>
                      <option value="Rotational Shift">Rotational Shifts</option>
                      <option value="No Night Shift">No Night Shift</option>
                      <option value="Single Shift (Day)">Single Shift (Day)</option>
                    </select>
                  </div>
                  <div class="form-group half">
                    <label class="form-label" for="jobpost-qual">Required Qualification *</label>
                    <input type="text" id="jobpost-qual" class="form-input" required placeholder="e.g. ITI / Diploma Mechanical">
                  </div>
                </div>
                <div class="form-group">
                  <label class="checkbox-label" style="margin-top:0.5rem;">
                    <input type="checkbox" id="jobpost-urgent">
                    Mark this opening as Urgent Placement
                  </label>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:2rem;">
                  <button type="button" class="btn btn-secondary" id="btn-prev-step-2">&larr; Back</button>
                  <button type="button" class="btn btn-primary" id="btn-next-step-2">Next Step &rarr;</button>
                </div>
              </div>

              <!-- Step 3 Block -->
              <div class="form-step-block hidden" id="form-step-3">
                <h3 style="margin-bottom:1.5rem;">Step 3: Placement Description</h3>
                <div class="form-group">
                  <label class="form-label" for="jobpost-desc">Job Scope and Requirements details *</label>
                  <textarea id="jobpost-desc" class="form-textarea" required placeholder="Write requirements, lunch break allowance details, transport details, safety boot policies..."></textarea>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:2rem;">
                  <button type="button" class="btn btn-secondary" id="btn-prev-step-3">&larr; Back</button>
                  <button type="submit" class="btn btn-teal">Publish Active Listing</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Panel 3: Recruiter Admin Dashboard (Connects back to tracking statuses) -->
        <div class="employer-panel ${defaultTab === 'dashboard' ? '' : 'hidden'}" id="panel-dashboard">
          <div class="recruiter-dashboard-grid">
            <div class="posted-jobs-list">
              <h3 style="margin-bottom:1.25rem;">Factory Jobs Listing Manager</h3>
              <div class="grid grid-2" style="grid-template-columns: 1fr 1fr; gap:1.5rem;">
                
                <!-- Left half: Job listings -->
                <div>
                  <h4 style="margin-bottom:0.75rem; color:var(--accent-sage);">Select Job to View Applicants</h4>
                  <div style="display:flex; flex-direction:column; gap:0.75rem;" id="recruiter-job-items-container">
                    <!-- Rendered Dynamically -->
                  </div>
                </div>

                <!-- Right half: Applicants list -->
                <div class="applicants-group-box">
                  <h4 style="margin-bottom:0.75rem; color:var(--accent-teal);" id="recruiter-applicant-list-header">Applicants for CNC Operator</h4>
                  <div style="display:flex; flex-direction:column; gap:1rem;" id="recruiter-applicants-items-container">
                    <!-- Rendered Dynamically -->
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    `;

    // Tab Switching setup
    const tabButtons = container.querySelectorAll(".employer-tab-btn");
    const panels = container.querySelectorAll(".employer-panel");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        panels.forEach(p => p.classList.add("hidden"));
        const target = btn.dataset.target;
        document.getElementById(target).classList.remove("hidden");
        
        // update routing sub hash if needed
        if (target === "panel-dashboard") {
          renderRecruiterDashboardJobs();
        }
      });
    });

    // Form Step Multi-page navigation trigger
    const stepItems = document.querySelectorAll(".step-indicator-item");
    document.getElementById("btn-next-step-1").addEventListener("click", () => {
      if (document.getElementById("jobpost-company").value && document.getElementById("jobpost-location").value) {
        document.getElementById("form-step-1").classList.add("hidden");
        document.getElementById("form-step-2").classList.remove("hidden");
        stepItems[1].classList.add("active");
      } else {
        showToast("Please fill in company name and address", "error");
      }
    });

    document.getElementById("btn-next-step-2").addEventListener("click", () => {
      if (document.getElementById("jobpost-title").value && document.getElementById("jobpost-salary").value) {
        document.getElementById("form-step-2").classList.add("hidden");
        document.getElementById("form-step-3").classList.remove("hidden");
        stepItems[2].classList.add("active");
      } else {
        showToast("Please fill in job title and salary fields", "error");
      }
    });

    document.getElementById("btn-prev-step-2").addEventListener("click", () => {
      document.getElementById("form-step-2").classList.add("hidden");
      document.getElementById("form-step-1").classList.remove("hidden");
      stepItems[1].classList.remove("active");
    });

    document.getElementById("btn-prev-step-3").addEventListener("click", () => {
      document.getElementById("form-step-3").classList.add("hidden");
      document.getElementById("form-step-2").classList.remove("hidden");
      stepItems[2].classList.remove("active");
    });

    // Form Submissions
    document.getElementById("b2b-requirement-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const b2bItem = {
        companyName: document.getElementById("b2b-company").value.trim(),
        industry: document.getElementById("b2b-industry").value,
        contactPerson: document.getElementById("b2b-contact").value.trim(),
        phone: document.getElementById("b2b-phone").value.trim(),
        email: document.getElementById("b2b-email").value.trim(),
        location: document.getElementById("b2b-location").value.trim(),
        workersRequired: document.getElementById("b2b-workers").value,
        rolesNeeded: document.getElementById("b2b-roles").value.trim(),
        shift: document.querySelector('input[name="b2b-shift"]:checked').value,
        gender: document.querySelector('input[name="b2b-gender"]:checked').value,
        startDate: document.getElementById("b2b-start").value || "Immediate",
        notes: document.getElementById("b2b-notes").value.trim()
      };
      
      STATE.b2b.push(b2bItem);
      saveState();
      
      showToast("Requirement registered! HR Desk will contact you within 2 hours.", "success");
      this.reset();
    });

    document.getElementById("recruiter-post-job-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const newJob = {
        id: "job-" + (STATE.jobs.length + 1),
        title: document.getElementById("jobpost-title").value.trim(),
        company: document.getElementById("jobpost-company").value.trim(),
        industry: document.getElementById("jobpost-industry").value,
        location: document.getElementById("jobpost-location").value.trim(),
        gender: document.getElementById("jobpost-gender").value,
        age: document.getElementById("jobpost-age").value.trim(),
        shift: document.getElementById("jobpost-shift").value,
        salary: document.getElementById("jobpost-salary").value.trim(),
        salaryVal: parseInt(document.getElementById("jobpost-salaryval").value) || 12000,
        qualification: document.getElementById("jobpost-qual").value.trim(),
        urgent: document.getElementById("jobpost-urgent").checked,
        tags: [
          document.getElementById("jobpost-urgent").checked ? "Urgent" : null,
          document.getElementById("jobpost-gender").value + " Only",
          document.getElementById("jobpost-shift").value
        ].filter(Boolean),
        description: document.getElementById("jobpost-desc").value.trim()
      };

      STATE.jobs.push(newJob);
      saveState();
      showToast("Hiring Listing Published Successfully!", "success");
      
      // Reset form steps
      document.getElementById("form-step-3").classList.add("hidden");
      document.getElementById("form-step-1").classList.remove("hidden");
      stepItems[1].classList.remove("active");
      stepItems[2].classList.remove("active");
      this.reset();
      
      // Route to jobs board immediately to see active listing
      setTimeout(() => {
        window.location.hash = "#jobs";
      }, 1000);
    });

    // Populate dashboard views on load
    if (defaultTab === "dashboard") {
      renderRecruiterDashboardJobs();
    }
  },

  // E. ABOUT US VIEWER
  about: function(container) {
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>About KV Enterprises</h1>
          <p>Sriperumbudur's premium industrial manpower placements corridor.</p>
        </div>
      </div>
      
      <div class="container" style="margin-top:4rem;">
        <div class="about-narrative">
          <strong>KV ENTERPRISES</strong> is a specialized industrial manpower outsourcing firm, connecting skilled and semi-skilled workers to Korean, Japanese, and Indian manufacturing lines. We bypass middleman models to place candidates directly at factory doors on pre-vetted contracts.
        </div>

        <div class="about-features-container">
          <div>
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%230f766e' opacity='0.05'/><path d='M80 150l60 60 140-140' stroke='%230f766e' stroke-width='10' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>" alt="Compliance Verification" style="border-radius:var(--radius-lg); border:1px solid var(--border-color); box-shadow:var(--shadow-soft);">
          </div>
          <div class="about-features-content">
            <h3>Right Worker. Right Shift. Right On Time.</h3>
            <p>
              Automotive suppliers and precision factories lose revenue every hour lines run short-staffed. Candidates waste days chasing third-party consultants. KV Enterprises bridges this bottleneck by delivering background-screened CNC operators and visual checkers within 72 hours of call-outs.
            </p>
            <p>
              Our process handles identity registration (Aadhar cards), bank verification setups, compliance documents (PF, ESI), and shift allotments completely, letting plant managers focus entirely on manufacturing quality.
            </p>
          </div>
        </div>

        <!-- Metrics display grid -->
        <div class="stats-grid" style="margin-bottom: 5rem;">
          <div class="stat-card" style="background-color: var(--bg-secondary); border-radius: var(--radius-md); padding:2rem;">
            <div class="stat-number">500+</div>
            <div class="stat-label">Placed Operators</div>
          </div>
          <div class="stat-card" style="background-color: var(--bg-secondary); border-radius: var(--radius-md); padding:2rem;">
            <div class="stat-number">25+</div>
            <div class="stat-label">Client Corporates</div>
          </div>
          <div class="stat-card" style="background-color: var(--bg-secondary); border-radius: var(--radius-md); padding:2rem;">
            <div class="stat-number">72H</div>
            <div class="stat-label">Placement Window</div>
          </div>
          <div class="stat-card" style="background-color: var(--bg-secondary); border-radius: var(--radius-md); padding:2rem;">
            <div class="stat-number">100%</div>
            <div class="stat-label">Verified Contracts</div>
          </div>
        </div>

        <div style="background-color:var(--text-main); color:#FFFFFF; border-radius:var(--radius-lg); padding:3rem; text-align:center;">
          <h3 style="color:#FFFFFF; font-size:1.75rem; margin-bottom:1rem;">Ready to join or staff?</h3>
          <p style="color:rgba(255,255,255,0.7); max-width:600px; margin:0 auto 2rem;">Connecting automotive assembly lines, metal fabrications, packaging logistics, and CNC mills with verified candidates.</p>
          <div style="display:flex; justify-content:center; gap:1.25rem;">
            <a href="#jobs" class="btn btn-primary">Find a Placement</a>
            <a href="#employer" class="btn btn-teal">Hire Manpower</a>
          </div>
        </div>
      </div>
    `;
  },

  // F. CONTACT & MAP PLACEHOLDER RENDERER
  contact: function(container) {
    container.innerHTML = `
      <div class="page-header-strip">
        <div class="container">
          <h1>Contact HR Placements Desk</h1>
          <p>Call, message, or visit our recruitment office in Sriperumbudur corridor.</p>
        </div>
      </div>
      
      <div class="container">
        <div class="contact-layout-grid">
          
          <div class="contact-info-panel">
            <div class="card" style="padding:1.5rem; display:flex; flex-direction:column; gap:1.5rem;">
              
              <div class="info-row-item">
                <div class="info-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div class="info-details">
                  <h4>Call Recruiter Desk</h4>
                  <p style="font-weight:600; color:var(--text-main); font-size:1.05rem;">6385422938</p>
                  <p style="font-weight:600; color:var(--text-main); font-size:1.05rem;">7200172460</p>
                </div>
              </div>

              <div class="info-row-item">
                <div class="info-icon-box" style="background-color:rgba(37,211,102,0.08); color:#25D366;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </div>
                <div class="info-details">
                  <h4>WhatsApp Channel</h4>
                  <p>Send 'HI' to start getting active job broadcasts.</p>
                  <a href="https://wa.me/916385422938" target="_blank" style="font-weight:600; color:#25D366;">Chat on WhatsApp &rarr;</a>
                </div>
              </div>

              <div class="info-row-item">
                <div class="info-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div class="info-details">
                  <h4>Office & Gate Placements Hours</h4>
                  <p>Monday - Saturday: 9:00 AM — 8:00 PM</p>
                  <p style="color:var(--text-muted);">Sunday: Closed</p>
                </div>
              </div>

            </div>

            <!-- Integrated styled Map graphic placeholder -->
            <div class="map-placeholder-box">
              <div class="map-graphic"></div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="38" height="38" style="color:var(--accent-sage);"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              <span>Sriperumbudur Placements Belt</span>
              <small>Serving factories across Pennalur, Vallam, Vallakottai and nearby industrial corridors.</small>
            </div>
          </div>

          <!-- Contact Submission form -->
          <div class="contact-form-box">
            <h3>Drop an Inquiry</h3>
            <form id="contact-message-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">Your Full Name *</label>
                <input type="text" id="contact-name" class="form-input" required placeholder="e.g. Anand Kumar">
              </div>
              <div class="form-row">
                <div class="form-group half">
                  <label class="form-label" for="contact-phone">Phone Number *</label>
                  <input type="tel" id="contact-phone" class="form-input" required>
                </div>
                <div class="form-group half">
                  <label class="form-label" for="contact-email">Email Address</label>
                  <input type="email" id="contact-email" class="form-input">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-message">How can we help you? *</label>
                <textarea id="contact-message" class="form-textarea" required placeholder="Tell us if you are looking for job placements, or represent a manufacturing plant needing operators."></textarea>
              </div>
              <div style="display:flex; justify-content:flex-end;">
                <button type="submit" class="btn btn-primary">Send Inquiry Message</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    `;

    document.getElementById("contact-message-form").addEventListener("submit", function(e) {
      e.preventDefault();
      showToast("Message received! Our recruitment desk will call you back shortly.", "success");
      this.reset();
    });
  }

};

// --- 3. DYNAMIC HOME & BOARD LIST RENDERING & FILTERS ---

// Home Feed
function renderHomeFeedList(filterType) {
  const feedDiv = document.getElementById("home-job-feed");
  if (!feedDiv) return;

  let filteredJobs = STATE.jobs;
  if (filterType === "no-night") {
    filteredJobs = STATE.jobs.filter(j => j.shift.toLowerCase().includes("no night") || j.shift.toLowerCase().includes("single shift"));
  } else if (filterType === "urgent") {
    filteredJobs = STATE.jobs.filter(j => j.urgent === true);
  }

  // Pick top 3 for clean view on landing page
  const displayJobs = filteredJobs.slice(0, 3);
  
  if (displayJobs.length === 0) {
    feedDiv.innerHTML = `<div class="card" style="text-align:center; padding:2rem; grid-column:span 3;">No matching openings. View full board.</div>`;
    return;
  }

  feedDiv.innerHTML = displayJobs.map(job => getJobCardHTML(job)).join("");
  bindJobActions();
}

// Full Job Board filter render
let boardCurrentPage = 1;
const boardItemsPerPage = 4;

function renderBoardJobs() {
  const feedDiv = document.getElementById("board-job-feed");
  const countSpan = document.getElementById("jobs-count");
  if (!feedDiv) return;

  const searchQuery = document.getElementById("board-search-input").value.toLowerCase();
  
  // Checked values
  const activeGender = document.querySelector('input[name="filter-gender"]:checked').value;
  
  const shiftChecks = Array.from(document.querySelectorAll('.filter-shift:checked')).map(c => c.value);
  const indChecks = Array.from(document.querySelectorAll('.filter-industry:checked')).map(c => c.value);
  const qualChecks = Array.from(document.querySelectorAll('.filter-qual:checked')).map(c => c.value);
  
  const urgentOnly = document.getElementById("filter-urgent-only").checked;

  let results = STATE.jobs.filter(job => {
    // 1. Text Search query (title, company, description, location)
    const matchesSearch = !searchQuery || 
                          job.title.toLowerCase().includes(searchQuery) ||
                          job.company.toLowerCase().includes(searchQuery) ||
                          job.location.toLowerCase().includes(searchQuery) ||
                          job.description.toLowerCase().includes(searchQuery);

    // 2. Gender check
    const matchesGender = activeGender === "all" || 
                          job.gender === "Both" || 
                          job.gender.toLowerCase() === activeGender.toLowerCase();

    // 3. Shift check
    const matchesShift = shiftChecks.length === 0 || 
                         shiftChecks.some(shiftVal => job.shift.toLowerCase().includes(shiftVal.toLowerCase()) || (shiftVal === "Single Shift" && job.shift.includes("7 AM - 7 PM")));

    // 4. Industry corridor check
    const matchesIndustry = indChecks.length === 0 || 
                            indChecks.some(indVal => job.industry.toLowerCase().includes(indVal.toLowerCase()) || indVal.toLowerCase().includes(job.industry.toLowerCase()));

    // 5. Qualification check
    const matchesQual = qualChecks.length === 0 || 
                        qualChecks.some(qualVal => {
                          if (qualVal === "ITI / Diploma") {
                            return job.qualification.toLowerCase().includes("iti") || job.qualification.toLowerCase().includes("diploma");
                          }
                          return job.qualification.toLowerCase().includes(qualVal.toLowerCase()) || qualVal.toLowerCase().includes(job.qualification.toLowerCase());
                        });

    // 6. Urgent Check
    const matchesUrgent = !urgentOnly || job.urgent === true;

    return matchesSearch && matchesGender && matchesShift && matchesIndustry && matchesQual && matchesUrgent;
  });

  countSpan.textContent = results.length;

  // Pagination bounds
  const totalPages = Math.ceil(results.length / boardItemsPerPage) || 1;
  if (boardCurrentPage > totalPages) boardCurrentPage = totalPages;
  
  const startIndex = (boardCurrentPage - 1) * boardItemsPerPage;
  const paginatedResults = results.slice(startIndex, startIndex + boardItemsPerPage);

  if (paginatedResults.length === 0) {
    feedDiv.innerHTML = `<div class="card" style="text-align:center; padding:3rem; grid-column:span 3;">No jobs matching your filter selections. Reset criteria.</div>`;
    document.getElementById("board-pagination").innerHTML = "";
    return;
  }

  feedDiv.innerHTML = paginatedResults.map(job => getJobCardHTML(job)).join("");
  bindJobActions();
  renderPagination(totalPages);
}

// Generate pagination controls
function renderPagination(totalPages) {
  const container = document.getElementById("board-pagination");
  if (!container) return;

  let pagesHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    pagesHTML += `<button class="page-dot-btn ${i === boardCurrentPage ? 'active' : ''}" onclick="goToBoardPage(${i})">${i}</button>`;
  }
  container.innerHTML = pagesHTML;
}

window.goToBoardPage = function(pageNumber) {
  boardCurrentPage = pageNumber;
  renderBoardJobs();
  window.scrollTo({ top: 150, behavior: "smooth" });
};

// --- 4. JOB DETAIL AND APPLY MODALS ---

function getJobCardHTML(job) {
  const companyLogoLetter = job.company.charAt(0);
  const urgentBadge = job.urgent ? `<span class="badge badge-urgent">Urgent</span>` : '';
  const badgesList = job.tags.map(t => `<span class="badge badge-neutral">${t}</span>`).join("");
  
  return `
    <article class="job-card" data-jobid="${job.id}">
      <div class="job-card-main">
        <div class="job-card-logo">${companyLogoLetter}</div>
        <div class="job-card-info">
          <div class="job-card-tags">
            ${urgentBadge}
            <span class="badge badge-green">${job.industry}</span>
          </div>
          <h3 class="job-card-title">${job.title}</h3>
          <span class="job-card-company">${job.company}</span>
          <div class="job-card-meta">
            <div class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              <span>${job.location}</span>
            </div>
            <div class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16M9 21h6"/></svg>
              <span>${job.salary}</span>
            </div>
            <div class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${job.shift}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="job-card-actions">
        <button class="btn btn-secondary btn-view-job-details" data-jobid="${job.id}">View Details</button>
        <button class="btn btn-primary btn-apply-job" data-jobid="${job.id}">Direct Join</button>
      </div>
    </article>
  `;
}

function bindJobActions() {
  document.querySelectorAll(".btn-view-job-details").forEach(btn => {
    btn.addEventListener("click", () => showJobDetailModal(btn.dataset.jobid));
  });
  document.querySelectorAll(".btn-apply-job").forEach(btn => {
    btn.addEventListener("click", () => showApplyModal(btn.dataset.jobid));
  });
}

function showJobDetailModal(jobId) {
  const job = STATE.jobs.find(j => j.id === jobId);
  if (!job) return;

  const overlay = document.getElementById("modal-container");
  overlay.innerHTML = `
    <div class="modal-content" style="max-width: 650px;">
      <button class="modal-close-btn" id="btn-close-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <div class="modal-header-block">
        <span class="badge badge-green" style="margin-bottom:0.5rem;">${job.industry}</span>
        <h2>${job.title}</h2>
        <p style="color:var(--accent-teal); font-weight:600; font-size:1.1rem; margin-top:0.25rem;">${job.company}</p>
      </div>
      
      <div class="modal-body-block">
        <h4 style="margin-bottom:0.75rem; color:var(--text-main);">Hiring Framework Parameters</h4>
        <table class="details-summary-table">
          <tr>
            <td class="label">Factory Location</td>
            <td class="value">${job.location}</td>
          </tr>
          <tr>
            <td class="label">Salary & Compensation</td>
            <td class="value" style="font-weight:600; color:var(--accent-sage);">${job.salary}</td>
          </tr>
          <tr>
            <td class="label">Shift Timing preference</td>
            <td class="value">${job.shift}</td>
          </tr>
          <tr>
            <td class="label">Gender Criteria</td>
            <td class="value">${job.gender}</td>
          </tr>
          <tr>
            <td class="label">Age Limit Limit</td>
            <td class="value">${job.age} Years</td>
          </tr>
          <tr>
            <td class="label">Qualification</td>
            <td class="value">${job.qualification}</td>
          </tr>
        </table>
        
        <h4 style="margin-top:1.5rem; margin-bottom:0.5rem; color:var(--text-main);">Placement Description</h4>
        <p style="line-height:1.5; font-size:0.925rem; color:var(--text-body); white-space:pre-line;">
          ${job.description}
        </p>
      </div>
      
      <div class="modal-footer-block">
        <button class="btn btn-secondary" id="btn-close-modal-footer">Close Window</button>
        <button class="btn btn-primary" id="btn-apply-modal-trigger" data-jobid="${job.id}">Apply & Direct Join</button>
      </div>
    </div>
  `;
  
  overlay.classList.remove("hidden");
  
  // Bind close
  document.getElementById("btn-close-modal").addEventListener("click", closeModal);
  document.getElementById("btn-close-modal-footer").addEventListener("click", closeModal);
  document.getElementById("btn-apply-modal-trigger").addEventListener("click", (e) => {
    closeModal();
    showApplyModal(e.target.dataset.jobid);
  });
}

function showApplyModal(jobId) {
  const job = STATE.jobs.find(j => j.id === jobId);
  if (!job) return;

  const overlay = document.getElementById("modal-container");
  overlay.innerHTML = `
    <div class="modal-content">
      <button class="modal-close-btn" id="btn-close-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      
      <div class="modal-header-block">
        <h2>Submit Direct Joining Form</h2>
        <p style="color:var(--text-muted); font-size:0.875rem;">Placement Opportunity: <strong>${job.title} at ${job.company}</strong></p>
      </div>
      
      <form id="direct-apply-form">
        <div class="modal-body-block">
          <p style="font-size:0.85rem; background-color:var(--accent-sage-light); color:var(--accent-sage); padding:0.75rem; border-radius:var(--radius-sm); margin-bottom:1.25rem;">
            Pre-filled with your Active Candidate Profile settings. Confirm or edit below:
          </p>
          
          <div class="form-group">
            <label class="form-label" for="apply-name">Candidate Name *</label>
            <input type="text" id="apply-name" class="form-input" required value="${STATE.profile.name}">
          </div>
          
          <div class="form-row">
            <div class="form-group half">
              <label class="form-label" for="apply-phone">Phone Number *</label>
              <input type="tel" id="apply-phone" class="form-input" required value="${STATE.profile.phone}">
            </div>
            <div class="form-group half">
              <label class="form-label" for="apply-email">Email Address *</label>
              <input type="email" id="apply-email" class="form-input" required value="${STATE.profile.email}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group half">
              <label class="form-label" for="apply-qual">Qualification *</label>
              <input type="text" id="apply-qual" class="form-input" required value="${STATE.profile.qualification}">
            </div>
            <div class="form-group half">
              <label class="form-label">Age & Gender *</label>
              <div style="display:flex; gap:0.5rem;">
                <input type="number" id="apply-age" class="form-input" required style="width:70px;" value="${STATE.profile.age}">
                <select id="apply-gender" class="form-select" required>
                  <option value="Male" ${STATE.profile.gender === 'Male' ? 'selected' : ''}>Male</option>
                  <option value="Female" ${STATE.profile.gender === 'Female' ? 'selected' : ''}>Female</option>
                  <option value="Other" ${STATE.profile.gender === 'Other' ? 'selected' : ''}>Other</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">Mock Resume Upload (Pre-filled)</label>
            <div style="font-size:0.9rem; color:var(--accent-sage); font-weight:600; display:flex; align-items:center; gap:0.35rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>${STATE.profile.resumeName || 'Default_Resume.pdf'}</span>
            </div>
          </div>
        </div>
        
        <div class="modal-footer-block">
          <button type="button" class="btn btn-secondary" id="btn-cancel-apply">Cancel</button>
          <button type="submit" class="btn btn-primary">Submit Application</button>
        </div>
      </form>
    </div>
  `;

  overlay.classList.remove("hidden");
  
  // Bind close
  document.getElementById("btn-close-modal").addEventListener("click", closeModal);
  document.getElementById("btn-cancel-apply").addEventListener("click", closeModal);
  
  document.getElementById("direct-apply-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Check if user already applied to this job to prevent duplicates
    const alreadyApplied = STATE.applications.some(app => app.jobId === jobId && app.applicantName === document.getElementById("apply-name").value);
    
    if (alreadyApplied) {
      showToast("You have already submitted an application for this placement!", "error");
      closeModal();
      return;
    }

    const newApp = {
      applicationId: "app-" + Date.now(),
      jobId: jobId,
      jobTitle: job.title,
      company: job.company,
      dateApplied: new Date().toISOString().split('T')[0],
      status: "Applied",
      applicantName: document.getElementById("apply-name").value.trim(),
      applicantPhone: document.getElementById("apply-phone").value.trim(),
      applicantEmail: document.getElementById("apply-email").value.trim(),
      applicantGender: document.getElementById("apply-gender").value,
      applicantAge: document.getElementById("apply-age").value,
      applicantQualification: document.getElementById("apply-qual").value.trim(),
      applicantSkills: STATE.profile.skills
    };

    STATE.applications.push(newApp);
    saveState();
    
    closeModal();
    showToast("Application submitted directly to recruiter! Track in portal.", "success");
    
    // Refresh active view if it's jobs board or portal
    if (window.location.hash.startsWith("#portal")) {
      ViewRenderers.portal(document.getElementById("view-portal"));
    }
  });
}

function closeModal() {
  document.getElementById("modal-container").classList.add("hidden");
}

// --- 5. PORTAL PROFILE UI HELPERS & PARSER ---

function updatePortalProfileCardUI() {
  const dName = document.getElementById("profile-display-name");
  const dTitle = document.getElementById("profile-display-title");
  const dPhone = document.getElementById("profile-display-phone");
  const dEmail = document.getElementById("profile-display-email");
  const dQual = document.getElementById("profile-display-qual");
  const dAgeGender = document.getElementById("profile-display-age-gender");
  const dResume = document.getElementById("profile-display-resume");
  const dAvatar = document.getElementById("profile-avatar-letters");

  if (dName) dName.textContent = STATE.profile.name;
  if (dTitle) dTitle.textContent = STATE.profile.title || (STATE.profile.qualification + " Operator");
  if (dPhone) dPhone.textContent = STATE.profile.phone;
  if (dEmail) dEmail.textContent = STATE.profile.email;
  if (dQual) dQual.textContent = STATE.profile.qualification;
  if (dAgeGender) dAgeGender.textContent = `${STATE.profile.gender} • Age ${STATE.profile.age}`;
  if (dResume) dResume.textContent = STATE.profile.resumeName || "No_Resume_Uploaded.pdf";
  if (dAvatar) {
    const names = STATE.profile.name.split(" ");
    dAvatar.textContent = names.length > 1 ? (names[0][0] + names[1][0]).toUpperCase() : names[0].slice(0, 2).toUpperCase();
  }
}

function renderPortalSkills() {
  const container = document.getElementById("portal-skills-container");
  if (!container) return;

  if (STATE.profile.skills.length === 0) {
    container.innerHTML = `<span style="font-size:0.8rem; color:var(--text-muted);">No skills chips added yet.</span>`;
    return;
  }

  container.innerHTML = STATE.profile.skills.map((skill, index) => `
    <span class="skill-chip">
      ${skill}
      <button onclick="removeSkill(${index})">&times;</button>
    </span>
  `).join("");
}

window.removeSkill = function(index) {
  STATE.profile.skills.splice(index, 1);
  saveState();
  renderPortalSkills();
  showToast("Skill deleted", "success");
};

function renderAppliedJobsList() {
  const tableBody = document.getElementById("applied-jobs-table-body");
  const counter = document.getElementById("app-counter");
  if (!tableBody) return;

  const userApps = STATE.applications;
  counter.textContent = `${userApps.length} Placements Tracked`;

  if (userApps.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; color:var(--text-muted); padding:2rem;">
          You haven't applied to any factory listings yet. Go to the <a href="#jobs" style="color:var(--accent-sage); font-weight:600; text-decoration:underline;">Jobs Board</a> to submit.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = userApps.map(app => `
    <tr>
      <td>
        <strong style="color:var(--text-main); font-size:0.95rem;">${app.jobTitle}</strong>
      </td>
      <td>${app.company}</td>
      <td>${app.dateApplied}</td>
      <td>
        <span class="status-indicator ${app.status.toLowerCase()}">${app.status}</span>
      </td>
      <td style="text-align:right;">
        <button class="btn-text btn-danger-action" onclick="withdrawApplication('${app.applicationId}')" style="color:#EF4444;">Withdraw</button>
      </td>
    </tr>
  `).join("");
}

window.withdrawApplication = function(appId) {
  STATE.applications = STATE.applications.filter(app => app.applicationId !== appId);
  saveState();
  renderAppliedJobsList();
  showToast("Application withdrawn", "success");
  
  // update recruiter applicant dashboard counts
  if (window.location.hash.startsWith("#employer")) {
    renderRecruiterDashboardJobs();
  }
};

// Simulated Resume Parser with progress bar!
function handleResumeSelection(e) {
  const file = e.target.files[0];
  if (!file) return;

  const barWrap = document.getElementById("parse-progress-bar-wrap");
  const bar = document.getElementById("parse-progress-bar");
  const statusText = document.getElementById("progress-status-text");
  const percentage = document.getElementById("progress-percentage");

  barWrap.classList.remove("hidden");
  bar.style.width = "0%";
  statusText.textContent = "Scanning document...";
  percentage.textContent = "0%";

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Execute simulated parsing of information!
      finalizeSimulatedResumeParse(file.name);
    }
    bar.style.width = progress + "%";
    percentage.textContent = progress + "%";
    
    if (progress > 30 && progress < 70) {
      statusText.textContent = "Extracting details...";
    } else if (progress >= 70 && progress < 100) {
      statusText.textContent = "Matching skills parameters...";
    }
  }, 100);
}

function finalizeSimulatedResumeParse(fileName) {
  // Update profiles with premium parsed details based on name
  STATE.profile.name = "Bala Krishnan";
  STATE.profile.title = "CNC Operator & Quality Lead";
  STATE.profile.qualification = "Diploma in Mechanical Engineering";
  STATE.profile.age = "26";
  STATE.profile.gender = "Male";
  STATE.profile.skills = ["CNC Operation", "Quality Auditing", "Precision Vernier Calipers", "Despatch assembly", "ISO Standard Compliance"];
  STATE.profile.resumeName = fileName;
  saveState();

  setTimeout(() => {
    // Hide progress
    document.getElementById("parse-progress-bar-wrap").classList.add("hidden");
    
    // Update active portal views and show toast
    updatePortalProfileCardUI();
    renderPortalSkills();
    
    // Populate form fields too
    document.getElementById("profile-edit-name").value = STATE.profile.name;
    document.getElementById("profile-edit-title").value = STATE.profile.title;
    document.getElementById("profile-edit-qual").value = STATE.profile.qualification;
    document.getElementById("profile-edit-age").value = STATE.profile.age;
    document.getElementById("profile-edit-gender").value = STATE.profile.gender;

    showToast("Resume parsed! Candidate profile settings updated successfully.", "success");
  }, 500);
}

// --- 6. RECRUITER ADMINISTRATOR DASHBOARD VIEW CONTROLS ---

let activeDashboardJobId = "job-01"; // Default job selected

function renderRecruiterDashboardJobs() {
  const jobsContainer = document.getElementById("recruiter-job-items-container");
  if (!jobsContainer) return;

  if (STATE.jobs.length === 0) {
    jobsContainer.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">No jobs posted yet.</p>`;
    return;
  }

  // Generate lists
  jobsContainer.innerHTML = STATE.jobs.map(job => {
    const candidateCount = STATE.applications.filter(app => app.jobId === job.id).length;
    const activeClass = job.id === activeDashboardJobId ? 'active' : '';
    
    return `
      <div class="posted-job-item ${activeClass}" onclick="selectDashboardJob('${job.id}')" style="cursor:pointer; padding:0.75rem 1rem; border-radius:var(--radius-sm); border:1px solid ${job.id === activeDashboardJobId ? 'var(--accent-sage)' : 'var(--border-color)'}; background-color:${job.id === activeDashboardJobId ? 'var(--accent-sage-light)' : '#FFFFFF'};">
        <div class="posted-job-info">
          <h4 style="font-size:0.95rem; margin:0;">${job.title}</h4>
          <span style="font-size:0.75rem; color:var(--text-muted);">${job.company}</span>
        </div>
        <span class="badge ${candidateCount > 0 ? 'badge-teal' : 'badge-neutral'}" style="font-size:0.725rem;">
          ${candidateCount} Applicants
        </span>
      </div>
    `;
  }).join("");

  renderRecruiterApplicants();
}

window.selectDashboardJob = function(jobId) {
  activeDashboardJobId = jobId;
  renderRecruiterDashboardJobs();
};

function renderRecruiterApplicants() {
  const container = document.getElementById("recruiter-applicants-items-container");
  const header = document.getElementById("recruiter-applicant-list-header");
  if (!container) return;

  const selectedJob = STATE.jobs.find(j => j.id === activeDashboardJobId);
  if (!selectedJob) {
    container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">Select a job to view applicants.</p>`;
    return;
  }

  header.textContent = `Applicants for: ${selectedJob.title}`;

  const jobApps = STATE.applications.filter(app => app.jobId === activeDashboardJobId);

  if (jobApps.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.875rem;">
        No candidates have applied to this factory listing yet.
      </div>
    `;
    return;
  }

  container.innerHTML = jobApps.map(app => {
    const skillChips = app.applicantSkills.map(s => `<span class="badge badge-neutral" style="font-size:0.7rem; padding:0.2rem 0.5rem;">${s}</span>`).join(" ");
    
    return `
      <div class="applicant-card-item">
        <div class="applicant-bio">
          <h5 style="margin:0; font-size:1rem; color:var(--text-main);">${app.applicantName}</h5>
          <p style="font-size:0.8rem; color:var(--text-body); margin-top:0.25rem;">
            Contact: <strong>${app.applicantPhone}</strong> | Age & Gender: <strong>${app.applicantAge} (${app.applicantGender})</strong>
          </p>
          <p style="font-size:0.8rem; color:var(--text-body);">
            Education: <strong>${app.applicantQualification}</strong>
          </p>
          <div class="applicant-meta-chips" style="margin-top:0.5rem;">
            ${skillChips}
          </div>
        </div>
        <div class="applicant-actions">
          <select class="applicant-status-select" onchange="updateApplicantStatus('${app.applicationId}', this.value)">
            <option value="Applied" ${app.status === 'Applied' ? 'selected' : ''}>Applied</option>
            <option value="Reviewing" ${app.status === 'Reviewing' ? 'selected' : ''}>Reviewing</option>
            <option value="Interviewing" ${app.status === 'Interviewing' ? 'selected' : ''}>Interviewing</option>
            <option value="Offer Extended" ${app.status === 'Offer Extended' ? 'selected' : ''}>Offer Extended</option>
          </select>
        </div>
      </div>
    `;
  }).join("");
}

window.updateApplicantStatus = function(appId, newStatus) {
  const app = STATE.applications.find(a => a.applicationId === appId);
  if (app) {
    app.status = newStatus;
    saveState();
    showToast(`Status updated to "${newStatus}" for ${app.applicantName}`, "success");
    
    // Refresh recruiter applicant view to maintain sync
    renderRecruiterApplicants();
  }
};

// --- 7. TOAST NOTIFICATION UTILITIES ---

function showToast(message, type = "success") {
  const container = document.getElementById("toast-wrapper");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;
  
  const icon = type === "success" 
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` 
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto-destruct after animation completes
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// --- 8. URL ROUTER CONTROLLER ---

function handleRouting() {
  const rawHash = window.location.hash || "#home";
  
  // Parse sub-parameters (like #jobs?q=CNC)
  const hashParts = rawHash.split("?");
  const hash = hashParts[0];
  const params = new URLSearchParams(hashParts[1] || "");

  // Update navbar active state
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const viewTarget = link.getAttribute("data-view");
    if (hash === `#${viewTarget}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Scroll to top
  window.scrollTo(0, 0);

  // Close mobile navigation menu if open
  document.getElementById("nav-menu").classList.remove("open");

  // Get matching page views
  const viewIdMap = {
    "#home": "view-home",
    "#jobs": "view-jobs",
    "#portal": "view-portal",
    "#employer": "view-employer",
    "#about": "view-about",
    "#contact": "view-contact"
  };

  const activeViewId = viewIdMap[hash] || "view-home";

  // Hide all sections and show active
  Object.values(viewIdMap).forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      if (id === activeViewId) {
        elem.classList.remove("hidden");
        
        // Dynamically invoke render function
        const renderName = id.replace("view-", "");
        if (ViewRenderers[renderName]) {
          ViewRenderers[renderName](elem, params);
        }
      } else {
        elem.classList.add("hidden");
      }
    }
  });

  // SEO Updates
  const seoTitles = {
    "#home": "KV Enterprises — Premium Industrial Manpower Placements in Sriperumbudur",
    "#jobs": "Job Search Board — Direct Placements Sriperumbudur | KV",
    "#portal": "Candidate Portal — Track Application Gate Passes | KV",
    "#employer": "Employer & Recruiter Hub — Register Manpower Requirements | KV",
    "#about": "Our Placement Story — Factory Staffing Since Day One | KV",
    "#contact": "Contact Recruitment Desk — Sriperumbudur Industrial Corridors | KV"
  };
  
  document.title = seoTitles[hash] || "KV Enterprises — Industrial Manpower";
}

// Global Event Listeners
window.addEventListener("hashchange", handleRouting);
window.addEventListener("DOMContentLoaded", () => {
  // Setup mobile menu toggle
  document.getElementById("mobile-menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("open");
  });

  // logo navigation click
  document.getElementById("logo-link").addEventListener("click", (e) => {
    window.location.hash = "#home";
  });

  // Initial Route Check
  handleRouting();
});
