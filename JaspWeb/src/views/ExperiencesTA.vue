<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeTab = ref('work')
const selectedFilter = ref('all')

const tabs = [
  { id: 'work', label: 'Work Experience', count: 4, icon: '💼' },
  { id: 'projects', label: 'Project-Based Experience', count: 4, icon: '🚀' },
  { id: 'skills', label: 'Skills & Strengths', count: null, icon: '⚡' },
  { id: 'education', label: 'Education & Honors', count: null, icon: '🎓' }
]

// Sync tab with query parameter if present
onMounted(() => {
  if (route.query.tab && tabs.some(t => t.id === route.query.tab)) {
    activeTab.value = route.query.tab
  }
})

watch(() => route.query.tab, (newTab) => {
  if (newTab && tabs.some(t => t.id === newTab)) {
    activeTab.value = newTab
  }
})

const workFilters = [
  { id: 'all', label: 'All Roles' },
  { id: 'cloud', label: 'Cloud & Architecture' },
  { id: 'teaching', label: 'Academic & Mentorship' },
  { id: 'emergency', label: 'Frontline Operations' }
]

const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'cloud-etl', label: 'Cloud & ETL Pipelines' },
  { id: 'financial', label: 'Financial Systems & Analytics' },
  { id: 'analytics', label: 'Statistical Modeling' }
]

const workExperiences = [
  {
    id: 'redcross',
    role: 'Software Engineer - GCP Architect',
    company: 'RedCross Singapore',
    period: 'September 2026 – Present',
    current: true,
    location: 'Singapore',
    category: 'cloud',
    type: 'Cloud Architecture & Data Engineering',
    summary: 'Architected enterprise-grade serverless cloud infrastructure on GCP to support high-throughput marketing data ingestion and real-time business intelligence.',
    metricBadges: ['GCP Serverless', 'Cloud Run & Storage', 'BigQuery → Looker', 'IAM Least Privilege'],
    highlights: [
      {
        title: 'GCP Architecture',
        desc: 'Architected a serverless, cost-optimized cloud infrastructure on GCP to support enterprise-scale marketing and analytics pipelines.'
      },
      {
        title: 'Infrastructure Design',
        desc: 'Designed a decoupled storage and compute environment using Google Cloud Storage, Firestore, Cloud Run and Secret Manager.'
      },
      {
        title: 'Cloud Security',
        desc: 'Implemented IAM protocols using Service Accounts and Role-Based Access Control (RBAC) ensuring strict least-privilege security.'
      },
      {
        title: 'Analytics Integration',
        desc: 'Implemented native export streams into BigQuery to Looker for automated executive presentation and reporting.'
      }
    ],
    skills: ['Google Cloud Platform', 'Cloud Run', 'BigQuery', 'Looker', 'Cloud Storage', 'Firestore', 'Secret Manager', 'IAM & RBAC', 'Python']
  },
  {
    id: 'smu-ta-algo',
    role: 'Teaching Assistant - Algorithm & Programming',
    company: 'Singapore Management University',
    period: 'Aug 2026 – Present',
    current: true,
    location: 'Singapore',
    category: 'teaching',
    type: 'Academic Instruction & Mentorship',
    summary: 'Mentoring undergraduate computing students in algorithmic efficiency, computational complexity, and data structure implementations.',
    metricBadges: ['Data Structures', 'Big-O Complexity', 'Student Consultations', 'Technical Ops'],
    highlights: [
      {
        title: 'Qualitative Mentorship',
        desc: 'Facilitated individual and group consultations for students in Data Structures, Algorithms, recursion, dynamic programming, and Big-O time/space complexities.'
      },
      {
        title: 'Course Administration',
        desc: "Managed technical course operations and resource distribution along with the lead professor while systematically tracking student performance metrics and lab submissions."
      }
    ],
    skills: ['Data Structures & Algorithms', 'Big-O Complexity', 'Python', 'Java', 'Technical Mentorship', 'Student Evaluation']
  },
  {
    id: 'smu-ta-stats',
    role: 'Teaching Assistant - Introductory Statistics (SMU-X)',
    company: 'Singapore Management University',
    period: 'Jan 2026 – May 2026',
    current: false,
    location: 'Singapore',
    category: 'teaching',
    type: 'Client-Facing Analytics & Instruction',
    summary: 'Taught statistical modeling methodologies and co-engineered client-facing BI dashboards for external healthcare partners.',
    metricBadges: ['218-Field Excel Dataset', 'Dementia Singapore Partner', 'Tableau Dashboards', 'Hypothesis Testing'],
    highlights: [
      {
        title: 'Data Analysis & Modeling',
        desc: 'Performed rigorous data cleaning and statistical analysis on large datasets; utilized PHStat and advanced Excel to execute Linear Regression, Correlation, and Hypothesis Testing.'
      },
      {
        title: 'Client-Facing Data Visualization',
        desc: 'Engineered interactive Tableau dashboards from a complex 218-field Excel dataset, actively cleaning and structuring data to deliver actionable insights to external industry partner Dementia Singapore.'
      }
    ],
    skills: ['Tableau', 'Statistical Modeling', 'Linear Regression', 'Hypothesis Testing', 'PHStat', 'Excel', 'Dementia Singapore']
  },
  {
    id: 'scdf-emt',
    role: 'Emergency Medical Technician (EMT)',
    company: 'Singapore Civil Defence Force (National Service)',
    period: 'Nov 2022 – Nov 2024',
    current: false,
    location: 'Singapore',
    category: 'emergency',
    type: 'Emergency Medical Response & Crisis Ops',
    summary: 'Delivered pre-hospital emergency medical treatment in high-acuity crisis scenarios, executing rapid clinical decision-making and meticulous log verification.',
    metricBadges: ['Frontline Pre-Hospital Care', 'Patient Stabilisation', 'High-Stakes Decision Making', 'Data Documentation'],
    highlights: [
      {
        title: 'Crisis Management & Decision Making',
        desc: 'Delivered rapid pre-hospital emergency care for critical-condition patients in a high-pressure, frontline emergency service environment.'
      },
      {
        title: 'Dynamic Problem Solving',
        desc: 'Adapted medical response strategies in real-time to evolving, high-stakes environments, ensuring patient stabilisation and operational efficiency.'
      },
      {
        title: 'Data Integrity & Reporting',
        desc: 'Maintained strict documentation of patient vitals, incident logs, and ambulance logistics, ensuring zero-error handoffs to hospital emergency departments.'
      }
    ],
    skills: ['Crisis Management', 'Frontline Triage', 'Patient Stabilisation', 'Data Integrity', 'High-Stakes Decision Making', 'First Aid & CPR']
  }
]

const projects = [
  {
    id: 'etl-pipeline',
    title: 'Enterprise Marketing Analytics ETL Pipeline',
    period: 'Sep 2026 – Present',
    current: true,
    category: 'cloud-etl',
    type: 'Cloud Data Engineering & Analytics',
    stack: ['Google Cloud Platform', 'Python', 'BigQuery', 'Looker', 'Cloud Run', 'Firestore', 'Secret Manager'],
    summary: 'High-availability automated ingestion engine aggregating multi-channel marketing data into BigQuery with automated Looker dashboard orchestration.',
    metricBadges: ['GA4, Meta, YT, LinkedIn APIs', 'Containerized Cloud Run', 'Zero-Downtime Secret Rotation', 'Live Looker BI'],
    highlights: [
      {
        title: 'Multi-Platform API Ingestion',
        desc: 'Engineered automated Python ingestion pipelines consuming REST APIs across Google Analytics 4 (GA4), Meta Graph API, YouTube Analytics, and LinkedIn Marketing for unified cross-channel analytics.'
      },
      {
        title: 'Fault Tolerance & State Tracking',
        desc: 'Implemented robust pagination handling, rate-limit controls, and credential isolation utilizing Firestore for run-state tracking and Secret Manager for secure token rotation.'
      },
      {
        title: 'Decoupled Cloud Architecture',
        desc: 'Containerized ingestion jobs on Cloud Run, streaming raw payloads into Google Cloud Storage before orchestrating automated batch loading into BigQuery for high-performance transformations.'
      },
      {
        title: 'End-to-End BI Orchestration',
        desc: 'Delivered a unified data pipeline feeding directly into live Looker dashboards, enabling automated reporting and actionable performance insights for marketing stakeholders.'
      }
    ]
  },
  {
    id: 'bi-quant-pipeline',
    title: 'Automated Cloud BI Pipeline & Financial Analytics Dashboard',
    period: 'Jun 2026',
    current: false,
    category: 'financial',
    type: 'Serverless Financial ETL & Visualization',
    stack: ['GitHub Actions', 'Python', 'Tableau Public', 'Binance REST API', 'gspread', 'oauth2client'],
    summary: 'Serverless CI/CD financial data extraction engine processing 30 asset symbols daily, calculating rolling risk metrics with continuous Tableau Public synchronization.',
    metricBadges: ['GitHub Actions CI/CD', '30 Daily Asset Symbols', 'Rolling Sharpe & Sortino', 'Tableau Public Sync'],
    highlights: [
      {
        title: 'CI/CD Data Orchestration',
        desc: 'Engineered a serverless ETL pipeline utilizing Python and GitHub Actions to autonomously extract and transform daily financial time-series data for 30 symbols via Binance REST APIs.'
      },
      {
        title: 'Quantitative Risk Modeling',
        desc: 'Formulated rolling risk metrics (Sharpe ratio, Sortino ratio) and integrated gspread and oauth2client libraries to execute automated batch updates to cloud database structures, establishing a fully cloud-native load phase.'
      },
      {
        title: 'Enterprise BI Architecture',
        desc: 'Deployed a continuously syncing Tableau Public dashboard to visualize dynamic portfolio volatility, creating a production-grade Business Intelligence architecture with zero manual intervention.'
      }
    ]
  },
  {
    id: 'quant-bot',
    title: 'Financial Trading Algorithm Bot',
    period: 'Mar 2026',
    current: false,
    category: 'financial',
    type: 'Algorithmic Optimization & Execution',
    stack: ['Python', 'Binance API', 'Financial Time-Series', 'Algorithmic Optimization'],
    summary: 'Algorithmic trading engine built for the Roostoo SGvHK Competition featuring low-latency execution and dynamic correlation checks.',
    metricBadges: ['Roostoo SGvHK Competition', 'O(n²) → O(n) Runtime Optimization', 'Dynamic Correlation Engine', 'Alpha Generation'],
    highlights: [
      {
        title: 'Algorithmic Design',
        desc: 'Designed and engineered a trading algorithm focused on alpha generation for the Roostoo SGvHK Competition.'
      },
      {
        title: 'Time-Series Market Analysis',
        desc: 'Implemented dynamic correlation checks and applied quantitative methods to analyze complex financial time-series data and detect market patterns.'
      },
      {
        title: 'Performance & Complexity Optimization',
        desc: 'Evaluated and optimized algorithmic execution time complexity from O(n²) to O(n) to achieve low-latency execution, effectively mitigating data-fetching bottlenecks from external financial APIs.'
      }
    ]
  },
  {
    id: 'survey-analysis',
    title: 'Large-Scale Survey & Social Perception Analysis',
    period: 'Nov 2025',
    current: false,
    category: 'analytics',
    type: 'Econometric & Statistical Modeling',
    stack: ['Statistical Modeling', 'ANOVA', 'Multiple Regression', 'PHStat', 'Excel'],
    summary: 'Nationwide econometric study on 7,265 respondents analyzing social perception indices using ANOVA and multiple regression modeling.',
    metricBadges: ['7,265 National Respondents', '103 Variables Evaluated', 'ANOVA & Regression Models', 'R² = 0.112 (p < 0.001)'],
    highlights: [
      {
        title: 'Statistical Testing & Gap Identification',
        desc: 'Analyzed a national dataset comprising 7,265 respondents and 103 variables to evaluate public sentiment, applying hypothesis testing to identify significant perception gaps.'
      },
      {
        title: 'Predictive Econometric Modeling',
        desc: 'Utilized ANOVA and built multiple regression models to quantify the relationship (R² = 0.112, p < 0.001) between the Disability Attitude Index (DAI) and Disability Employability Index (DEI).'
      }
    ]
  }
]

// Skills segregated cleanly by language and platform, with frameworks paired to languages
const languageGroups = [
  {
    language: 'JavaScript / Node.js Ecosystem',
    frameworks: ['Vue.js (Vue 3)', 'Node.js', 'Express.js', 'Modern ES6+']
  },
  {
    language: 'Python',
    frameworks: ['Automated Ingestion Pipelines', 'REST APIs & Webhooks', 'Algorithmic Scripting', 'Time-Series Analysis']
  },
  {
    language: 'Java',
    frameworks: ['Object-Oriented Design', 'Data Structures & Algorithms Implementation']
  },
  {
    language: 'SQL',
    frameworks: ['Analytical Querying', 'Data Modeling & Aggregations']
  },
  {
    language: 'HTML5 & CSS3',
    frameworks: ['Responsive Web Development', 'Glassmorphism & Component Styling']
  }
]

const cloudPlatformGroups = [
  {
    platform: 'Google Cloud Platform (GCP)',
    services: [
      'Cloud Run (Container Ingestion)',
      'Google Cloud Storage (GCS)',
      'Google BigQuery',
      'Google Firestore',
      'Secret Manager',
      'Cloud IAM & RBAC Protocols',
      'Serverless Architectures'
    ]
  },
  {
    platform: 'Microsoft Azure',
    services: [
      'Azure Data Services (DP-750 Associate)',
      'Azure AI Infrastructure (AI-103 Associate)'
    ]
  },
  {
    platform: 'Amazon Web Services (AWS)',
    services: [
      'AWS AI Practitioner Services',
      'Cloud Core Infrastructure'
    ]
  },
  {
    platform: 'DevOps & Tooling',
    services: [
      'GitHub Actions (CI/CD Pipelines)',
      'Docker Containerization',
      'Git Version Control'
    ]
  }
]

const databaseSkills = [
  'Supabase',
  'Google BigQuery',
  'Google Firestore',
  'MongoDB (Atlas / Compass)'
]

const analyticsTools = [
  'Tableau & Tableau Public',
  'Looker Studio',
  'Databricks',
  'Foundry',
  'ANOVA & Multiple Regression Modeling',
  'PHStat & Advanced Excel',
  'Financial Time-Series Analysis'
]

const spokenLanguages = [
  { name: 'English', fluency: 'Native Proficiency' },
  { name: 'Chinese (Mandarin)', fluency: 'Native Proficiency' },
  { name: 'Hokkien', fluency: 'Fluent' }
]

const education = {
  institution: 'Singapore Management University (SMU)',
  degree: 'Bachelor of Science in Software Engineering',
  period: 'Class of 2029 (Expected)',
  gpa: '3.70 / 4.00',
  honors: 'AY 2025/2026 Dean’s List',
  pillars: [
    {
      title: 'Data & Quantitative Analysis',
      icon: '📈',
      courses: [
        'Introductory Statistics X (SMU-X)',
        'Algorithms & Programming (Big-O, Complexity Analysis)',
        'Computational Thinking'
      ]
    },
    {
      title: 'Systems & Infrastructure',
      icon: '⚙️',
      courses: [
        'Operating Systems and Networking',
        'Data Management on SQL & Relational Databases'
      ]
    },
    {
      title: 'Software Development',
      icon: '🖥️',
      courses: [
        'Web Application Development (JavaScript / HTML5)',
        'Python Programming & Object-Oriented Design'
      ]
    }
  ]
}

const filteredWorkExperiences = computed(() => {
  if (selectedFilter.value === 'all') return workExperiences
  return workExperiences.filter(exp => exp.category === selectedFilter.value)
})

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') return projects
  return projects.filter(p => p.category === selectedFilter.value)
})

function switchTab(tabId) {
  activeTab.value = tabId
  selectedFilter.value = 'all'
  router.replace({ query: { ...route.query, tab: tabId } }).catch(() => {})
}
</script>

<template>
  <div class="view-container">
    <div class="experience-panel">
      <!-- Section Header -->
      <div class="panel-header">
        <div class="title-area">
          <span class="eyebrow">Professional Portfolio & Experience</span>
          <h1 class="page-title">Experience & Strengths</h1>
          <p class="lead-text">
            Enterprise serverless cloud architectures, automated ETL data pipelines, distributed systems, and academic mentorship.
          </p>
        </div>

        <!-- Clean, subtle honor badge -->
        <div class="header-badge-wrap">
          <div class="stat-badge">
            <span class="stat-num">3.70</span>
            <span class="stat-label">SMU GPA (Dean's List)</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="tab-bar">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="switchTab(tab.id)"
        >
          <span class="tab-icon">{{ tab.icon }}</span>
          <span class="tab-text">{{ tab.label }}</span>
          <span v-if="tab.count !== null" class="tab-count">{{ tab.count }}</span>
        </button>
      </div>

      <!-- Filters Row (Active for Work & Projects) -->
      <div v-if="activeTab === 'work'" class="filter-bar">
        <span class="filter-label">Filter:</span>
        <button
          v-for="f in workFilters"
          :key="f.id"
          class="filter-pill"
          :class="{ active: selectedFilter === f.id }"
          @click="selectedFilter = f.id"
        >
          {{ f.label }}
        </button>
      </div>

      <div v-if="activeTab === 'projects'" class="filter-bar">
        <span class="filter-label">Filter:</span>
        <button
          v-for="f in projectFilters"
          :key="f.id"
          class="filter-pill"
          :class="{ active: selectedFilter === f.id }"
          @click="selectedFilter = f.id"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Content Views -->
      <div class="tab-content">
        <!-- 1. Work Experience Tab -->
        <transition name="tab-fade" mode="out-in">
          <div v-if="activeTab === 'work'" key="work" class="card-stack">
            <div
              v-for="exp in filteredWorkExperiences"
              :key="exp.id"
              class="exp-card"
            >
              <div class="card-top">
                <div class="role-org">
                  <div class="role-heading">
                    <h2 class="role-title">{{ exp.role }}</h2>
                    <span v-if="exp.current" class="live-tag">
                      <span class="pulse-dot"></span> Current Role
                    </span>
                  </div>
                  <div class="org-sub">
                    <span class="company-name">{{ exp.company }}</span>
                    <span class="divider-dot">•</span>
                    <span class="period-text">{{ exp.period }}</span>
                    <span class="divider-dot">•</span>
                    <span class="loc-text">{{ exp.location }}</span>
                  </div>
                </div>
                <div class="type-pill">{{ exp.type }}</div>
              </div>

              <!-- Metric Callouts -->
              <div class="metric-ribbon">
                <span
                  v-for="m in exp.metricBadges"
                  :key="m"
                  class="metric-chip"
                >
                  <span class="metric-check">✓</span> {{ m }}
                </span>
              </div>

              <p class="summary-paragraph">{{ exp.summary }}</p>

              <!-- Detailed CV Achievements -->
              <div class="bullets-container">
                <div
                  v-for="(item, idx) in exp.highlights"
                  :key="idx"
                  class="bullet-row"
                >
                  <span class="bullet-marker">▸</span>
                  <div class="bullet-body">
                    <strong class="bullet-title">{{ item.title }}</strong> —
                    <span class="bullet-desc">{{ item.desc }}</span>
                  </div>
                </div>
              </div>

              <!-- Tech Stack Pills -->
              <div class="skills-footer">
                <span class="tags-label">Technologies & Core Competencies:</span>
                <div class="tags-cluster">
                  <span
                    v-for="tag in exp.skills"
                    :key="tag"
                    class="tech-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Projects Tab (No GitHub buttons / links) -->
          <div v-else-if="activeTab === 'projects'" key="projects" class="card-stack">
            <div
              v-for="proj in filteredProjects"
              :key="proj.id"
              class="exp-card project-card"
            >
              <div class="card-top">
                <div class="role-org">
                  <div class="role-heading">
                    <h2 class="role-title">{{ proj.title }}</h2>
                    <span v-if="proj.current" class="live-tag">
                      <span class="pulse-dot"></span> Active Architecture
                    </span>
                  </div>
                  <div class="org-sub">
                    <span class="period-text">{{ proj.period }}</span>
                    <span class="divider-dot">•</span>
                    <span class="type-text">{{ proj.type }}</span>
                  </div>
                </div>
              </div>

              <!-- Metric Callouts -->
              <div class="metric-ribbon">
                <span
                  v-for="m in proj.metricBadges"
                  :key="m"
                  class="metric-chip"
                >
                  <span class="metric-check">✓</span> {{ m }}
                </span>
              </div>

              <p class="summary-paragraph">{{ proj.summary }}</p>

              <!-- Detailed Project Achievements -->
              <div class="bullets-container">
                <div
                  v-for="(item, idx) in proj.highlights"
                  :key="idx"
                  class="bullet-row"
                >
                  <span class="bullet-marker">▸</span>
                  <div class="bullet-body">
                    <strong class="bullet-title">{{ item.title }}</strong> —
                    <span class="bullet-desc">{{ item.desc }}</span>
                  </div>
                </div>
              </div>

              <!-- Project Stack Tags -->
              <div class="skills-footer">
                <span class="tags-label">Architecture & Stack:</span>
                <div class="tags-cluster">
                  <span
                    v-for="tag in proj.stack"
                    :key="tag"
                    class="tech-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. Skills & Strengths Tab (Standardized Box Sizes, Language & Platform Segregated) -->
          <div v-else-if="activeTab === 'skills'" key="skills" class="skills-layout">
            <!-- Row 1: Languages & Frameworks (Associated Together) -->
            <div class="skill-category-box">
              <div class="cat-header">
                <span class="cat-icon">💻</span>
                <div>
                  <h3 class="cat-title">Programming Languages & Associated Frameworks</h3>
                  <p class="cat-desc">Core languages paired with their relevant runtime frameworks and development tooling.</p>
                </div>
              </div>

              <div class="language-subgroups">
                <div
                  v-for="grp in languageGroups"
                  :key="grp.language"
                  class="lang-subcard"
                >
                  <span class="lang-title">{{ grp.language }}</span>
                  <div class="sub-chips">
                    <span
                      v-for="fw in grp.frameworks"
                      :key="fw"
                      class="standard-chip"
                    >
                      {{ fw }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2: Cloud Architecture & Infrastructure (Segregated by Platform) -->
            <div class="skill-category-box">
              <div class="cat-header">
                <span class="cat-icon">☁️</span>
                <div>
                  <h3 class="cat-title">Cloud Architecture & Infrastructure (By Platform)</h3>
                  <p class="cat-desc">Specialized cloud environments, serverless compute, decoupled storage, and CI/CD pipelines.</p>
                </div>
              </div>

              <div class="platform-subgroups">
                <div
                  v-for="p in cloudPlatformGroups"
                  :key="p.platform"
                  class="lang-subcard"
                >
                  <span class="lang-title">{{ p.platform }}</span>
                  <div class="sub-chips">
                    <span
                      v-for="s in p.services"
                      :key="s"
                      class="standard-chip"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 3: Databases & Analytics (Standardized 2-Column Boxes) -->
            <div class="skills-grid-row">
              <!-- Databases Box -->
              <div class="skill-category-box half-box">
                <div class="cat-header">
                  <span class="cat-icon">🗄️</span>
                  <div>
                    <h3 class="cat-title">Databases & Data Management</h3>
                    <p class="cat-desc">Modern database systems and analytical warehouses.</p>
                  </div>
                </div>
                <div class="sub-chips">
                  <span
                    v-for="db in databaseSkills"
                    :key="db"
                    class="standard-chip"
                  >
                    {{ db }}
                  </span>
                </div>
              </div>

              <!-- Quantitative & Analytics Box -->
              <div class="skill-category-box half-box">
                <div class="cat-header">
                  <span class="cat-icon">📊</span>
                  <div>
                    <h3 class="cat-title">Data Analytics & Business Intelligence</h3>
                    <p class="cat-desc">Visualization platforms, econometric modeling, and time-series analysis.</p>
                  </div>
                </div>
                <div class="sub-chips">
                  <span
                    v-for="tool in analyticsTools"
                    :key="tool"
                    class="standard-chip"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Row 4: Spoken Languages (Standardized Uniform Box) -->
            <div class="skill-category-box">
              <div class="cat-header">
                <span class="cat-icon">🌐</span>
                <div>
                  <h3 class="cat-title">Spoken Languages</h3>
                  <p class="cat-desc">Proficiencies for global and regional technical collaboration.</p>
                </div>
              </div>
              <div class="spoken-lang-grid">
                <div
                  v-for="lang in spokenLanguages"
                  :key="lang.name"
                  class="spoken-lang-card"
                >
                  <span class="lang-name">{{ lang.name }}</span>
                  <span class="lang-fluency">{{ lang.fluency }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. Education & Honors Tab -->
          <div v-else-if="activeTab === 'education'" key="education" class="education-view">
            <!-- University Card -->
            <div class="exp-card edu-hero-card">
              <div class="edu-top">
                <div class="edu-main">
                  <div class="inst-row">
                    <span class="inst-icon">🏛️</span>
                    <h2 class="institution-name">{{ education.institution }}</h2>
                  </div>
                  <h3 class="degree-title">{{ education.degree }}</h3>
                  <div class="org-sub">
                    <span class="period-text">{{ education.period }}</span>
                    <span class="divider-dot">•</span>
                    <span class="loc-text">Singapore</span>
                  </div>
                </div>

                <div class="edu-badges-col">
                  <div class="gpa-card">
                    <span class="gpa-label">Cumulative GPA</span>
                    <span class="gpa-value">{{ education.gpa }}</span>
                  </div>
                  <div class="deans-badge">
                    <span class="star-icon">🏆</span>
                    <span>{{ education.honors }}</span>
                  </div>
                </div>
              </div>

              <div class="edu-separator"></div>

              <div class="coursework-section">
                <h4 class="coursework-title">Curriculum Focus & Core Coursework</h4>
                <div class="pillars-grid">
                  <div
                    v-for="pillar in education.pillars"
                    :key="pillar.title"
                    class="pillar-card"
                  >
                    <div class="pillar-header">
                      <span class="pillar-icon">{{ pillar.icon }}</span>
                      <h5 class="pillar-name">{{ pillar.title }}</h5>
                    </div>
                    <ul class="course-list">
                      <li v-for="c in pillar.courses" :key="c">
                        {{ c }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  width: 100%;
  max-width: 1140px;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Grey-ish Muted Glassmorphism Main Panel */
.experience-panel {
  width: 100%;
  background: rgba(48, 52, 60, 0.86);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 20px;
  padding: 3.2rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.06);
  color: #f3f4f6;
  box-sizing: border-box;
}

/* Header Area */
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 2rem;
}

.title-area {
  flex: 1;
}

.eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
  color: #bfdbfe;
  margin-bottom: 0.5rem;
}

.page-title {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1.15;
  color: #ffffff;
  margin: 0 0 0.8rem 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.lead-text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #d1d5db;
  margin: 0;
  max-width: 650px;
}

.header-badge-wrap {
  flex-shrink: 0;
}

.stat-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.2rem;
  background: rgba(30, 33, 40, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  text-align: center;
}

.stat-num {
  font-size: 1.45rem;
  font-weight: 700;
  color: #93c5fd;
  font-family: "Charter", Georgia, serif;
}

.stat-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #cbd5e1;
  margin-top: 0.2rem;
}

/* Navigation Tab Bar */
.tab-bar {
  display: flex;
  gap: 0.5rem;
  background: rgba(26, 29, 35, 0.6);
  padding: 0.45rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.6rem;
  overflow-x: auto;
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: #cbd5e1;
  font-size: 0.92rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.tab-btn.active {
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.22);
}

.tab-count {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Filter Bar */
.filter-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.8rem;
  flex-wrap: wrap;
}

.filter-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #cbd5e1;
  margin-right: 0.3rem;
}

.filter-pill {
  background: rgba(30, 33, 40, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #d1d5db;
  font-size: 0.8rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.filter-pill:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.filter-pill.active {
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.35);
  color: #ffffff;
  font-weight: 600;
}

/* Card Stack */
.card-stack {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.exp-card {
  background: rgba(38, 42, 49, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 2.2rem;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.exp-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.24);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  background: rgba(43, 48, 56, 0.72);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.role-heading {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.role-title {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  font-size: 1.45rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.live-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.35);
  color: #4ade80;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; box-shadow: 0 0 8px #22c55e; }
  100% { transform: scale(0.95); opacity: 0.7; }
}

.org-sub {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: #d1d5db;
  margin-top: 0.35rem;
  flex-wrap: wrap;
}

.company-name {
  color: #93c5fd;
  font-weight: 500;
}

.divider-dot {
  opacity: 0.5;
}

.type-pill {
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  color: #e5e7eb;
  white-space: nowrap;
}

/* Metric Ribbon */
.metric-ribbon {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.7rem 0 1rem 0;
}

.metric-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f3f4f6;
  letter-spacing: 0.02em;
}

.metric-check {
  font-size: 0.75rem;
  color: #93c5fd;
}

.summary-paragraph {
  font-size: 0.98rem;
  color: #e5e7eb;
  line-height: 1.65;
  margin: 0.5rem 0 1.2rem 0;
}

/* Bullets */
.bullets-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  background: rgba(26, 29, 35, 0.45);
  padding: 1.2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.bullet-row {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #d1d5db;
}

.bullet-marker {
  color: #93c5fd;
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

.bullet-title {
  color: #ffffff;
  font-weight: 600;
}

.bullet-desc {
  color: #d1d5db;
}

/* Skills Cluster */
.skills-footer {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1rem;
}

.tags-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #cbd5e1;
  font-weight: 500;
}

.tags-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f3f4f6;
  font-size: 0.78rem;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  letter-spacing: 0.02em;
}

/* Skills Layout & Standardized Boxes */
.skills-layout {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.skill-category-box {
  background: rgba(38, 42, 49, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 2rem;
  box-sizing: border-box;
}

.skills-grid-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.half-box {
  display: flex;
  flex-direction: column;
}

.cat-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.cat-icon {
  font-size: 1.8rem;
  line-height: 1;
}

.cat-title {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.3rem 0;
}

.cat-desc {
  font-size: 0.84rem;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.45;
}

.language-subgroups,
.platform-subgroups {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.lang-subcard {
  background: rgba(26, 29, 35, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
}

.lang-title {
  display: block;
  font-size: 0.86rem;
  font-weight: 700;
  color: #93c5fd;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.7rem;
}

.sub-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.standard-chip {
  display: inline-block;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #f3f4f6;
  transition: all 0.2s ease;
}

.standard-chip:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.25);
}

/* Spoken Languages Standardized Box */
.spoken-lang-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.spoken-lang-card {
  background: rgba(26, 29, 35, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.lang-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.3rem;
}

.lang-fluency {
  font-size: 0.8rem;
  color: #93c5fd;
}

/* Education Tab */
.education-view {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.edu-hero-card {
  padding: 2.5rem;
}

.edu-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.inst-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.inst-icon {
  font-size: 1.4rem;
}

.institution-name {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  font-size: 1.7rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.degree-title {
  font-size: 1.15rem;
  color: #93c5fd;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
}

.edu-badges-col {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-end;
}

.gpa-card {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: rgba(26, 29, 35, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.6rem 1rem;
  border-radius: 10px;
}

.gpa-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #cbd5e1;
}

.gpa-value {
  font-family: "Charter", Georgia, serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #4ade80;
}

.deans-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(234, 179, 8, 0.15);
  border: 1px solid rgba(234, 179, 8, 0.35);
  color: #fde047;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
}

.edu-separator {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
}

.coursework-title {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1.2rem 0;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
}

.pillar-card {
  background: rgba(26, 29, 35, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.4rem;
}

.pillar-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.9rem;
}

.pillar-icon {
  font-size: 1.3rem;
}

.pillar-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #f1f5f9;
  margin: 0;
}

.course-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.course-list li {
  font-size: 0.86rem;
  color: #d1d5db;
  position: relative;
  padding-left: 1.1rem;
  line-height: 1.45;
}

.course-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #93c5fd;
}

/* Transitions */
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Responsive Styles */
@media (max-width: 900px) {
  .experience-panel {
    padding: 2rem 1.5rem;
  }

  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .skills-grid-row {
    grid-template-columns: 1fr;
  }

  .spoken-lang-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .edu-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .edu-badges-col {
    align-items: flex-start;
  }
}
</style>
