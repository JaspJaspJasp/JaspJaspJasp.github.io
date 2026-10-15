<template>
  <div class="view-container">

    <h1>Experiences & Teaching</h1>
    
    <div class="experience-block">
      <h3>Teaching Assistant</h3>
      <p class="meta">Singapore Management University</p>
      <p>Supporting faculty for Introductory Statistics (SMU-X) and Algorithm & Programming (IS115).</p>
    </div>

    <div class="experience-block">
      <h3>Emergency Medical Technician</h3>
      <p class="meta">Singapore Civil Defence Force | Nov 2022 – Nov 2024</p>
      <p>Served as an EMT during National Service.</p>
    </div>

    <div class="experience-block">
      <h3>Manpower ExCo</h3>
      <p class="meta">SMU Civil Defence Lionhearters</p>
      <p>Executive committee member managing operations and automated data pipelines for personnel.</p>
    </div>
  </div>
</template>

<style scoped>
/* Background Image Styling */
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

/* Existing Styles */
.experience-block {
  margin-bottom: 2.5rem;
}

.meta {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: -10px;
}
</style>