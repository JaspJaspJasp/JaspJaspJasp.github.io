<template>
  <div class="view-container">
    <img src="../assets/images/profile.jpg" alt="Background" class="full-bg" />

    <div class="content-overlay">
      <h1>Sng Meng U Jasper</h1>
      <p class="subtitle">
        BSc Software Engineering (Class of 2029) at Singapore Management University.
      </p>
      
      <p class="bio">
        My work spans full-stack software development, automated data architectures, and quantitative finance. 
        I am proficient in English, Chinese, and Hokkien, and outside of code, you can usually find me at the gym lifting or modifying Minecraft with Iris shaders.
      </p>
    </div>
  </div>
</template>

<style scoped>
.full-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0.6; 
  pointer-events: none;
}

.view-container {
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: flex-end; /* Pushes the text overlay into the right-side space */
  align-items: center; 
  padding-right: 4rem; /* Keeps it from touching the very edge of your screen */
}

.content-overlay {
  max-width: 500px; /* Keeps the paragraph neatly contained on the right */
  text-align: right; /* Aligns the text cleanly against the right margin */
}

h1 {
  font-weight: 700; /* Much bolder */
  text-shadow: 0 2px 5px rgba(255, 255, 255, 0.7); /* Adds contrast against the image */
}

.subtitle {
  font-size: 1.15rem;
  font-weight: 600; /* Thicker text */
  color: var(--text-color);
  opacity: 1; /* Removed transparency for better readability */
  margin-bottom: 2rem;
  margin-top: 0;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.7);
}

.bio {
  font-size: 1.1rem;
  font-weight: 500; /* Thicker text */
  line-height: 1.8;
  color: var(--text-color);
  opacity: 1; /* Removed transparency */
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.7);
}
</style>