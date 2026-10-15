<template>
  <div class="view-container">

    <div class="content-overlay">
      <!-- Wrapping everything in one block ensures they share the exact same width -->
      <div class="uniform-text-block">
        <h1>Sng Meng U Jasper</h1>
        
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
}

.content-overlay {
  max-width: 550px; /* This dictates the width of the entire text box */
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
}

/* New wrapper to keep all elements strictly bound to the same edges */
.uniform-text-block {
  width: 100%;
}

h1 {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow; 
  font-weight: 500; 
  font-size: 3.2rem; 
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); 
  text-align: right; /* Removes the giant gaps in your name while keeping it aligned right */
}

.subtitle {
  color: snow; /* Updated color */
  text-align: justify; 
  text-justify: inter-word; 
  font-size: 1.1rem;
  font-weight: 500; 
  line-height: 1.8;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); /* Darkened shadow slightly for snow text contrast */
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.bio-block {
  width: 100%; 
}

.bio-block p {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow; /* Updated color */
  text-align: justify; 
  text-justify: inter-word; 
  font-size: 1.1rem;
  font-weight: 500; 
  line-height: 1.8;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); /* Darkened shadow slightly for snow text contrast */
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.bio-block p:last-child {
  margin-bottom: 0;
}
</style>