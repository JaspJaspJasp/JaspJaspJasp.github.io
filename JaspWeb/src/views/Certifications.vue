<script setup>
import { ref, computed } from 'vue'

// Import main certificate images
import certAzureAi103 from '@/assets/certificates/cert-azure-ai103.png'
import certAzureDp750 from '@/assets/certificates/cert-azure-dp750.png'
import certAwsAi from '@/assets/certificates/cert-aws-ai.png'
import certAlibabaCloud from '@/assets/certificates/cert-alibaba-cloud.png'
import certGoogleDataAnalytics from '@/assets/certificates/cert-google-data-analytics.png'
import certGoogleBi from '@/assets/certificates/cert-google-bi.png'
import certGoogleAiEssentials from '@/assets/certificates/cert-google-ai-essentials.png'
import certGoogleAiProfessional from '@/assets/certificates/cert-google-ai-professional.png'
import certSfaCpr from '@/assets/certificates/cert-sfa-cpr.png'

// Import sub-course images
import subCourseraP19U53C3C9CQ from '@/assets/certificates/sub-Coursera-P19U53C3C9CQ.png'
import subCourseraXDXFHES5HOYE from '@/assets/certificates/sub-Coursera-XDXFHES5HOYE.png'
import subCoursera7W0FT7M995IQ from '@/assets/certificates/sub-Coursera-7W0FT7M995IQ.png'
import subCourseraXRGUJJDQJ9W6 from '@/assets/certificates/sub-Coursera-XRGUJJDQJ9W6.png'
import subCoursera1TVZNY1C8NYK from '@/assets/certificates/sub-Coursera-1TVZNY1C8NYK.png'
import subCourseraXQ5FSSSBMZSM from '@/assets/certificates/sub-Coursera-XQ5FSSSBMZSM.png'
import subCoursera5V7HBW0XASA6 from '@/assets/certificates/sub-Coursera-5V7HBW0XASA6.png'
import subCourseraERRPT6KBXGYQ from '@/assets/certificates/sub-Coursera-ERRPT6KBXGYQ.png'

import subCourseraBS7RA8BKELNV from '@/assets/certificates/sub-Coursera-BS7RA8BKELNV.png'
import subCourseraM7SURXWV1459 from '@/assets/certificates/sub-Coursera-M7SURXWV1459.png'
import subCoursera4J5OQR62BGQS from '@/assets/certificates/sub-Coursera-4J5OQR62BGQS.png'
import subCoursera3EPNXY5KZVTN from '@/assets/certificates/sub-Coursera-3EPNXY5KZVTN.png'

import subCourseraRVM7UV5J6SYN from '@/assets/certificates/sub-Coursera-RVM7UV5J6SYN.png'
import subCoursera1VUDC5AKOL82 from '@/assets/certificates/sub-Coursera-1VUDC5AKOL82.png'
import subCourseraHBL105D9W0R1 from '@/assets/certificates/sub-Coursera-HBL105D9W0R1.png'
import subCoursera5T28IQMEATI3 from '@/assets/certificates/sub-Coursera-5T28IQMEATI3.png'

import subCourseraV0UKUZQ2AF88 from '@/assets/certificates/sub-Coursera-V0UKUZQ2AF88.png'
import subCoursera0EXEQFXC7Q4X from '@/assets/certificates/sub-Coursera-0EXEQFXC7Q4X.png'
import subCoursera2Y5OR669A7IO from '@/assets/certificates/sub-Coursera-2Y5OR669A7IO.png'
import subCoursera6PLYFPHNDSNG from '@/assets/certificates/sub-Coursera-6PLYFPHNDSNG.png'
import subCourseraQKHJ5JTSMFOA from '@/assets/certificates/sub-Coursera-QKHJ5JTSMFOA.png'

const activeProvider = ref('all')
const expandedCards = ref({})
const modalCert = ref(null)

const providers = [
  { id: 'all', label: 'All Providers', icon: '📜' },
  { id: 'azure', label: 'Microsoft Azure', icon: '🔷' },
  { id: 'aws', label: 'AWS', icon: '🟧' },
  { id: 'google', label: 'Google & Coursera', icon: '🌐' },
  { id: 'alibaba', label: 'Alibaba Cloud', icon: '🟠' },
  { id: 'safety', label: 'First Aid & Safety', icon: '🩺' }
]

const certifications = [
  // Prominent Top Tier 1: Microsoft Azure
  {
    id: 'dp750',
    title: 'Microsoft Certified: Azure Databricks Data Engineer Associate',
    code: 'DP-750',
    issuer: 'Microsoft',
    provider: 'azure',
    providerBadge: 'Microsoft Azure',
    date: 'July 10, 2026',
    credentialId: 'BC810CF0C15E90DB',
    certNumber: '5DEE01-7EA43D',
    image: certAzureDp750,
    prominent: true,
    summary: 'Demonstrates deep competence in designing, implementing, and optimizing enterprise cloud data architectures on Azure Databricks with scalable ETL and lakehouse pipelines.',
    skills: ['Azure Databricks', 'Apache Spark', 'Delta Lake', 'PySpark', 'ETL Pipelines', 'Data Lakehouse']
  },
  {
    id: 'ai103',
    title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate',
    code: 'AI-103',
    issuer: 'Microsoft',
    provider: 'azure',
    providerBadge: 'Microsoft Azure',
    date: 'August 14, 2026',
    credentialId: 'B8085A3AE59D681',
    certNumber: '5FB3F0-O75D9B',
    image: certAzureAi103,
    prominent: true,
    summary: 'Validates technical expertise in architecting, developing, and monitoring AI agents, LLM integrations, and generative AI solutions on Microsoft Azure.',
    skills: ['Azure AI Services', 'AI Agent Architecture', 'Copilot Solutions', 'Semantic Kernel', 'Prompt Flow', 'Responsible AI']
  },

  // Prominent Top Tier 2: AWS & Alibaba Cloud
  {
    id: 'aws-ai',
    title: 'AWS Certified AI Practitioner',
    code: 'AIF-C01',
    issuer: 'Amazon Web Services (AWS)',
    provider: 'aws',
    providerBadge: 'AWS',
    date: 'May 9, 2026',
    credentialId: 'AWS Certified AI Practitioner',
    image: certAwsAi,
    prominent: true,
    summary: 'Demonstrates comprehensive understanding of artificial intelligence, machine learning services, foundation model selection, and secure GenAI implementations on AWS.',
    skills: ['Amazon Bedrock', 'SageMaker', 'Foundation Models', 'GenAI Security', 'ML Workflows', 'AWS Cloud']
  },
  {
    id: 'alibaba-cloud',
    title: 'Alibaba Cloud Certification',
    code: 'Cloud Infrastructure Training',
    issuer: 'Alibaba Cloud',
    provider: 'alibaba',
    providerBadge: 'Alibaba Cloud',
    date: 'October 17, 2025',
    credentialId: 'ACT-2025-JS',
    image: certAlibabaCloud,
    prominent: true,
    summary: 'Validates foundational knowledge of cloud infrastructure, virtualization, elastic compute services (ECS), and distributed cloud architecture.',
    skills: ['Elastic Compute Service', 'Server Virtualization', 'Cloud Networking', 'Cloud Architecture']
  },

  // Prominent Top Tier 3: Google Specializations
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    code: 'Specialization (9 Courses)',
    issuer: 'Google (Coursera)',
    provider: 'google',
    providerBadge: 'Google',
    date: 'June 1, 2026',
    credentialId: 'Coursera Google Data Analytics',
    image: certGoogleDataAnalytics,
    prominent: true,
    summary: 'Comprehensive 9-course specialization covering end-to-end data lifecycle: data cleaning, analytical SQL, Tableau visualizations, Python data manipulation, and capstone case studies.',
    skills: ['SQL Data Manipulation', 'Data Cleaning', 'Tableau Dashboards', 'Python Data Analysis', 'Statistical Inference', 'Case Studies'],
    subCourses: [
      { name: 'Foundations: Data, Data, Everywhere', date: 'Feb 6, 2026', image: subCourseraP19U53C3C9CQ },
      { name: 'Ask Questions to Make Data-Driven Decisions', date: 'Feb 6, 2026', image: subCourseraXDXFHES5HOYE },
      { name: 'Prepare Data for Exploration', date: 'Feb 9, 2026', image: subCoursera7W0FT7M995IQ },
      { name: 'Process Data from Dirty to Clean', date: 'Feb 17, 2026', image: subCourseraXRGUJJDQJ9W6 },
      { name: 'Analyze Data to Answer Questions', date: 'Mar 5, 2026', image: subCoursera1TVZNY1C8NYK },
      { name: 'Share Data Through the Art of Visualization', date: 'Mar 10, 2026', image: subCourseraXQ5FSSSBMZSM },
      { name: 'Introduction to Data Analysis Using Python', date: 'May 18, 2026', image: subCoursera5V7HBW0XASA6 },
      { name: 'Google Data Analytics Capstone: Complete a Case Study', date: 'May 25, 2026', image: subCourseraERRPT6KBXGYQ }
    ]
  },
  {
    id: 'google-bi',
    title: 'Google Business Intelligence Professional Certificate',
    code: 'Specialization (4 Courses)',
    issuer: 'Google (Coursera)',
    provider: 'google',
    providerBadge: 'Google',
    date: 'June 20, 2026',
    credentialId: 'Coursera Google BI',
    image: certGoogleBi,
    prominent: true,
    summary: 'Advanced professional specialization focused on dimensional data modeling, automated BigQuery ETL pipelines, and executive Tableau dashboard architectures.',
    skills: ['Google BigQuery', 'Dimensional Modeling (Star/Snowflake)', 'Tableau Public', 'Automated ETL', 'Executive Reporting'],
    subCourses: [
      { name: 'Foundations of Business Intelligence', date: 'June 13, 2026', image: subCourseraBS7RA8BKELNV },
      { name: 'The Path to Insights: Data Models and Pipelines', date: 'June 19, 2026', image: subCourseraM7SURXWV1459 },
      { name: 'Decisions, Decisions: Dashboards and Reports', date: 'June 19, 2026', image: subCoursera4J5OQR62BGQS },
      { name: 'Accelerate Your Job Search with AI', date: 'June 19, 2026', image: subCoursera3EPNXY5KZVTN }
    ]
  },
  {
    id: 'google-ai-professional',
    title: 'Google AI Professional Certificate',
    code: 'Specialization (7 Courses)',
    issuer: 'Google (Coursera)',
    provider: 'google',
    providerBadge: 'Google',
    date: 'July 11, 2026',
    credentialId: 'Coursera Google AI Specialization',
    image: certGoogleAiProfessional,
    prominent: true,
    summary: 'Professional curriculum across AI foundational models, generative AI workflows, analytical tooling with AI, and rapid research synthesis.',
    skills: ['Generative AI', 'AI for Data Analysis', 'Prompt Engineering', 'AI for Research & Insights', 'Productivity Systems'],
    subCourses: [
      { name: 'AI Fundamentals', date: 'July 11, 2026', image: subCourseraV0UKUZQ2AF88 },
      { name: 'AI for Content Creation', date: 'July 11, 2026', image: subCoursera0EXEQFXC7Q4X },
      { name: 'AI for Writing and Communicating', date: 'July 11, 2026', image: subCoursera2Y5OR669A7IO },
      { name: 'AI for Research and Insights', date: 'July 11, 2026', image: subCoursera6PLYFPHNDSNG },
      { name: 'AI for Data Analysis', date: 'July 11, 2026', image: subCourseraQKHJ5JTSMFOA }
    ]
  },
  {
    id: 'google-ai-essentials',
    title: 'Google AI Essentials Certificate',
    code: 'Specialization (5 Courses)',
    issuer: 'Google (Coursera)',
    provider: 'google',
    providerBadge: 'Google',
    date: 'July 11, 2026',
    credentialId: 'Coursera Google AI Essentials',
    image: certGoogleAiEssentials,
    prominent: true,
    summary: 'Credential focusing on prompt engineering methodologies, generative AI integration for organizational productivity, and ethical AI practices.',
    skills: ['Prompt Engineering', 'AI Productivity', 'Responsible AI Practices', 'Workflow Automation'],
    subCourses: [
      { name: 'Introduction to AI', date: 'July 11, 2026', image: subCourseraRVM7UV5J6SYN },
      { name: 'Maximize Productivity With AI Tools', date: 'July 11, 2026', image: subCoursera1VUDC5AKOL82 },
      { name: 'Discover the Art of Prompting', date: 'July 11, 2026', image: subCourseraHBL105D9W0R1 },
      { name: 'Stay Ahead of the AI Curve', date: 'July 11, 2026', image: subCoursera5T28IQMEATI3 }
    ]
  },

  // Life Safety & Emergency Operations
  {
    id: 'sfa-cpr',
    title: 'Standard First Aid & Hands-Only CPR+AED Provider',
    code: 'SFA + CPR/AED',
    issuer: 'Singapore Civil Defence Force / Accredited Training',
    provider: 'safety',
    providerBadge: 'First Aid & Safety',
    date: 'March 2, 2026',
    credentialId: 'SFA-AED-SCDF-2026',
    image: certSfaCpr,
    prominent: false,
    summary: 'Official certification in Standard First Aid and Hands-Only CPR + Automated External Defibrillator (AED) operations, trained for frontline emergency stabilization.',
    skills: ['Standard First Aid', 'CPR & AED Resuscitation', 'Triage Assessment', 'Emergency Protocol', 'Patient Care']
  }
]

const filteredCertifications = computed(() => {
  if (activeProvider.value === 'all') return certifications
  return certifications.filter(c => c.provider === activeProvider.value)
})

const prominentCertifications = computed(() => {
  return filteredCertifications.value.filter(c => c.prominent)
})

const otherCertifications = computed(() => {
  return filteredCertifications.value.filter(c => !c.prominent)
})

function toggleSubCourses(id) {
  expandedCards.value[id] = !expandedCards.value[id]
}

function openModal(cert) {
  modalCert.value = cert
}

function closeModal() {
  modalCert.value = null
}
</script>

<template>
  <div class="view-container">
    <div class="cert-panel">
      <!-- Header -->
      <div class="panel-header">
        <div class="title-area">
          <span class="eyebrow">Verified Credentials & Qualifications</span>
          <h1 class="page-title">Professional Certifications</h1>
          <p class="lead-text">
            Enterprise cloud architecture, data analytics, artificial intelligence engineering, and emergency response certifications.
          </p>
        </div>

        <div class="header-badge-wrap">
          <div class="stat-badge">
            <span class="stat-num">9</span>
            <span class="stat-label">Verified Certifications</span>
          </div>
        </div>
      </div>

      <!-- Provider Toggle Filter Bar -->
      <div class="provider-bar">
        <button
          v-for="p in providers"
          :key="p.id"
          class="provider-pill"
          :class="{ active: activeProvider === p.id }"
          @click="activeProvider = p.id"
        >
          <span class="p-icon">{{ p.icon }}</span>
          <span>{{ p.label }}</span>
        </button>
      </div>

      <!-- 1. Prominent Flagship Certifications Up Top -->
      <div v-if="prominentCertifications.length > 0" class="section-block">
        <div class="section-title-row">
          <span class="section-title">Prominent & Flagship Credentials</span>
          <span class="section-line"></span>
        </div>

        <div class="cert-grid">
          <div
            v-for="cert in prominentCertifications"
            :key="cert.id"
            class="cert-card"
          >
            <!-- Certificate Image Preview -->
            <div class="cert-preview-box" @click="openModal(cert)">
              <img :src="cert.image" :alt="cert.title" class="cert-img" loading="lazy" />
              <div class="preview-overlay">
                <span class="overlay-btn">Inspect Certificate 🔍</span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="cert-details">
              <div class="card-meta">
                <span class="provider-tag">{{ cert.providerBadge }}</span>
                <span class="cert-date">{{ cert.date }}</span>
              </div>

              <h3 class="cert-heading">{{ cert.title }}</h3>
              <p class="cert-summary">{{ cert.summary }}</p>

              <!-- Verification Details -->
              <div class="cert-creds">
                <div v-if="cert.credentialId" class="cred-row">
                  <span class="cred-label">Credential ID:</span>
                  <span class="cred-value">{{ cert.credentialId }}</span>
                </div>
                <div v-if="cert.certNumber" class="cred-row">
                  <span class="cred-label">Cert Number:</span>
                  <span class="cred-value">{{ cert.certNumber }}</span>
                </div>
              </div>

              <!-- Skills Tags -->
              <div class="cert-tags">
                <span v-for="tag in cert.skills" :key="tag" class="tag-pill">
                  {{ tag }}
                </span>
              </div>

              <!-- Sub-Courses Accordion Toggle for Specializations -->
              <div v-if="cert.subCourses && cert.subCourses.length > 0" class="subcourse-wrapper">
                <button class="subcourse-toggle-btn" @click="toggleSubCourses(cert.id)">
                  <span>{{ expandedCards[cert.id] ? 'Hide' : 'View' }} {{ cert.subCourses.length }} Individual Sub-Course Certificates</span>
                  <span class="toggle-arrow">{{ expandedCards[cert.id] ? '▴' : '▾' }}</span>
                </button>

                <transition name="accordion">
                  <div v-if="expandedCards[cert.id]" class="subcourse-list">
                    <div
                      v-for="(sub, sidx) in cert.subCourses"
                      :key="sidx"
                      class="subcourse-item"
                      @click="openModal({ title: sub.name, date: sub.date, image: sub.image, issuer: cert.issuer })"
                    >
                      <img :src="sub.image" :alt="sub.name" class="sub-img" loading="lazy" />
                      <div class="sub-info">
                        <span class="sub-name">{{ sub.name }}</span>
                        <span class="sub-date">{{ sub.date }}</span>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Additional Certifications (Emergency / Safety) -->
      <div v-if="otherCertifications.length > 0" class="section-block">
        <div class="section-title-row">
          <span class="section-title">Emergency Response & Life Safety</span>
          <span class="section-line"></span>
        </div>

        <div class="cert-grid">
          <div
            v-for="cert in otherCertifications"
            :key="cert.id"
            class="cert-card"
          >
            <!-- Certificate Image Preview -->
            <div class="cert-preview-box" @click="openModal(cert)">
              <img :src="cert.image" :alt="cert.title" class="cert-img" loading="lazy" />
              <div class="preview-overlay">
                <span class="overlay-btn">Inspect Certificate 🔍</span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="cert-details">
              <div class="card-meta">
                <span class="provider-tag">{{ cert.providerBadge }}</span>
                <span class="cert-date">{{ cert.date }}</span>
              </div>

              <h3 class="cert-heading">{{ cert.title }}</h3>
              <p class="cert-summary">{{ cert.summary }}</p>

              <!-- Verification Details -->
              <div class="cert-creds">
                <div v-if="cert.credentialId" class="cred-row">
                  <span class="cred-label">Certification:</span>
                  <span class="cred-value">{{ cert.credentialId }}</span>
                </div>
              </div>

              <!-- Skills Tags -->
              <div class="cert-tags">
                <span v-for="tag in cert.skills" :key="tag" class="tag-pill">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal for Certificate Full View -->
    <transition name="modal-fade">
      <div v-if="modalCert" class="modal-backdrop" @click="closeModal">
        <div class="modal-card" @click.stop>
          <button class="modal-close-btn" @click="closeModal" title="Close preview">✕</button>
          <div class="modal-header">
            <h3 class="modal-title">{{ modalCert.title }}</h3>
            <span class="modal-subtitle">{{ modalCert.issuer }} · {{ modalCert.date }}</span>
          </div>
          <div class="modal-img-container">
            <img :src="modalCert.image" :alt="modalCert.title" class="modal-img" />
          </div>
          <div v-if="modalCert.credentialId" class="modal-footer">
            <span>Credential Verification: <strong>{{ modalCert.credentialId }}</strong></span>
          </div>
        </div>
      </div>
    </transition>
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

/* Grey-ish Frosted Main Panel */
.cert-panel {
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

/* Header */
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

/* Provider Filter Pills */
.provider-bar {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 2.2rem;
  overflow-x: auto;
  padding-bottom: 0.4rem;
  flex-wrap: wrap;
}

.provider-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(30, 33, 40, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #d1d5db;
  font-size: 0.84rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  transition: all 0.2s ease;
  white-space: nowrap;
  cursor: pointer;
}

.provider-pill:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.25);
}

.provider-pill.active {
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.35);
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.p-icon {
  font-size: 0.9rem;
}

/* Section Blocks */
.section-block {
  margin-bottom: 3rem;
}

.section-title-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.6rem;
}

.section-title {
  font-family: "Charter", Georgia, serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
}

.section-line {
  flex-grow: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
}

/* Certificate Cards Grid */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1.8rem;
}

.cert-card {
  background: rgba(38, 42, 49, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.cert-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.26);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
  background: rgba(43, 48, 56, 0.72);
}

/* Preview Thumbnail Box */
.cert-preview-box {
  position: relative;
  width: 100%;
  height: 210px;
  background: rgba(20, 22, 28, 0.85);
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.cert-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.35s ease;
  padding: 0.5rem;
  box-sizing: border-box;
}

.cert-preview-box:hover .cert-img {
  transform: scale(1.04);
}

.preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.cert-preview-box:hover .preview-overlay {
  opacity: 1;
}

.overlay-btn {
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(30, 41, 59, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  backdrop-filter: blur(8px);
}

/* Card Details */
.cert-details {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}

.provider-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #93c5fd;
  background: rgba(30, 41, 59, 0.75);
  border: 1px solid rgba(147, 197, 253, 0.35);
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
}

.cert-date {
  font-size: 0.78rem;
  color: #94a3b8;
}

.cert-heading {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.6rem 0;
  line-height: 1.35;
}

.cert-summary {
  font-size: 0.88rem;
  color: #d1d5db;
  line-height: 1.55;
  margin: 0 0 1rem 0;
  flex-grow: 1;
}

/* Verification Credentials Box */
.cert-creds {
  background: rgba(26, 29, 35, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cred-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.74rem;
}

.cred-label {
  color: #94a3b8;
}

.cred-value {
  color: #e2e8f0;
  font-family: monospace;
  font-weight: 600;
}

/* Tags */
.cert-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.tag-pill {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f1f5f9;
  font-size: 0.74rem;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
}

/* Sub-Courses Accordion */
.subcourse-wrapper {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 0.8rem;
}

.subcourse-toggle-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  color: #93c5fd;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.subcourse-toggle-btn:hover {
  opacity: 0.85;
  text-decoration: underline;
}

.toggle-arrow {
  font-size: 0.9rem;
}

.subcourse-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.8rem;
}

.subcourse-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(26, 29, 35, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.subcourse-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.sub-img {
  width: 48px;
  height: 34px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.sub-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.sub-name {
  font-size: 0.78rem;
  font-weight: 500;
  color: #f1f5f9;
  line-height: 1.3;
}

.sub-date {
  font-size: 0.7rem;
  color: #94a3b8;
}

/* Lightbox Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
}

.modal-card {
  position: relative;
  background: rgba(30, 34, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
}

.modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.modal-header {
  margin-bottom: 1.2rem;
  padding-right: 2.5rem;
}

.modal-title {
  font-family: "Charter", Georgia, serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.3rem 0;
}

.modal-subtitle {
  font-size: 0.85rem;
  color: #93c5fd;
}

.modal-img-container {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 18, 24, 0.9);
  border-radius: 10px;
  padding: 1rem;
}

.modal-img {
  max-width: 100%;
  max-height: 65vh;
  object-fit: contain;
  border-radius: 6px;
}

.modal-footer {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #cbd5e1;
  text-align: right;
  font-family: monospace;
}

/* Animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.2s ease;
}

@media (max-width: 900px) {
  .cert-panel {
    padding: 2rem 1.5rem;
  }
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
