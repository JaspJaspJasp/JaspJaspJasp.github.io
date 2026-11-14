<template>
  <div class="view-container">
    <div class="content-overlay">
      <div class="uniform-text-block">
        <h1 class="goals-heading">What I'm Striving For</h1>
        
        <h3 class="subtitle">
          Software Engineering, Cloud Infrastructure & Distributed Data Systems.
        </h3>
        
        <div class="bio-block">
          <p>
            My core focus is centered on software development and cloud data systems, with an emphasis on building resilient backend pipelines, serverless architectures, and reliable data persistence layers.
          </p>
          <p>
            I actively expand my cloud architecture capabilities across Google Cloud Platform, Microsoft Azure, and Amazon Web Services—pairing modern cloud infrastructure with rigorous algorithmic foundations in data structures, time complexity optimization, and systems design.
          </p>
          <p>
            My immediate objective is securing high-impact software engineering and data engineering internship roles, where I can architect production-grade infrastructure, solve complex scalability challenges, and engineer reliable end-to-end systems.
          </p>
        </div>

        <!-- Structured Focus Areas -->
        <div class="focus-grid">
          <div class="focus-card">
            <span class="focus-icon">☁️</span>
            <div class="focus-body">
              <span class="focus-title">Cloud Architecture</span>
              <span class="focus-desc">Serverless computing, decoupled storage, container orchestration, and IAM security.</span>
            </div>
          </div>
          <div class="focus-card">
            <span class="focus-icon">🗄️</span>
            <div class="focus-body">
              <span class="focus-title">Data Engineering</span>
              <span class="focus-desc">Production ETL pipelines, warehouse optimization in BigQuery, and Supabase integration.</span>
            </div>
          </div>
          <div class="focus-card">
            <span class="focus-icon">⚡</span>
            <div class="focus-body">
              <span class="focus-title">Backend & Systems</span>
              <span class="focus-desc">High-efficiency REST APIs, microservices, and algorithmic execution optimization.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  padding-right: 4rem; 
  box-sizing: border-box;
}

.content-overlay {
  max-width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
}

.uniform-text-block {
  width: 100%;
}

.goals-heading {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow; 
  font-weight: 500; 
  font-size: 3.2rem; 
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.6rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); 
  text-align: right;
}

.subtitle {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow;
  text-align: justify; 
  text-justify: inter-word; 
  font-size: 1.15rem;
  font-weight: 500; 
  line-height: 1.8;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.bio-block {
  width: 100%; 
}

.bio-block p {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow;
  text-align: justify; 
  text-justify: inter-word; 
  font-size: 1.1rem;
  font-weight: 500; 
  line-height: 1.8;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  margin-top: 0;
  margin-bottom: 1.3rem;
}

/* Structured Focus Grid */
.focus-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.8rem;
  width: 100%;
}

.focus-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(30, 34, 42, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.focus-card:hover {
  transform: translateX(-4px);
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(40, 45, 55, 0.75);
}

.focus-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.focus-body {
  display: flex;
  flex-direction: column;
}

.focus-title {
  font-family: "Charter", Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.15rem;
}

.focus-desc {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.82rem;
  color: #cbd5e1;
  line-height: 1.4;
}

/* Mobile & iPhone Breakpoints */
@media (max-width: 820px) {
  .view-container {
    justify-content: center;
    align-items: center;
    padding-right: 0;
    min-height: auto;
    padding: 1rem 0.5rem;
  }

  .content-overlay {
    max-width: 100%;
    align-items: flex-start;
  }

  .goals-heading {
    text-align: left;
    font-size: 2.3rem;
    line-height: 1.18;
    white-space: normal;
    word-break: break-word;
  }

  .subtitle {
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  .bio-block p {
    font-size: 0.96rem;
    text-align: left;
    line-height: 1.65;
    margin-bottom: 1.2rem;
  }

  .focus-grid {
    gap: 0.7rem;
    margin-top: 1.4rem;
  }

  .focus-card {
    padding: 0.85rem 1rem;
  }
}

@media (max-width: 480px) {
  .goals-heading {
    font-size: 1.95rem;
  }

  .focus-card {
    align-items: flex-start;
    gap: 0.75rem;
  }

  .focus-icon {
    font-size: 1.2rem;
    margin-top: 0.1rem;
  }

  .focus-title {
    font-size: 0.94rem;
  }

  .focus-desc {
    font-size: 0.78rem;
  }
}
</style>
