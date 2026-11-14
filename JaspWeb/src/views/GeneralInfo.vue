<template>
  <div class="view-container">
    <div class="content-overlay">
      <!-- Wrapping everything in one block ensures they share the exact same width -->
      <div class="uniform-text-block">
        <h1 class="main-heading">Sng Meng U Jasper</h1>
        
        <h3 class="subtitle">
          BSc Software Engineering (Class of 2029) at Singapore Management University.
        </h3>
        
        <div class="bio-block">
          <p>
            Hello! I'm Jasper, and welcome to my portfolio page (That's me in the background)!
          </p>
          <p>
            This page is a personal project made using Vue.js!
          </p>
          <p>
            My engineering focus centers on software development and data engineering, with a strong interest in building reliable data systems and backend workflows. I actively work on projects utilizing Google Cloud Platform, while continuously expanding my cloud skillset through learning Microsoft Azure and getting started with AWS.
          </p>
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
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
}

.uniform-text-block {
  width: 100%;
}

.main-heading {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow; 
  font-weight: 500; 
  font-size: 3.2rem; 
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); 
  text-align: right;
}

.subtitle {
  color: snow;
  text-align: justify; 
  text-justify: inter-word; 
  font-size: 1.1rem;
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
  margin-bottom: 1.5rem;
}

.bio-block p:last-child {
  margin-bottom: 0;
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

  .main-heading {
    font-size: 2.3rem;
    white-space: normal;
    text-align: left;
    line-height: 1.18;
    word-break: break-word;
    margin-bottom: 0.8rem;
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
}

@media (max-width: 480px) {
  .main-heading {
    font-size: 1.95rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .bio-block p {
    font-size: 0.92rem;
  }
}
</style>
