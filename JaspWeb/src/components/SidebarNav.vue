<script setup>
</script>

<template>
  <nav class="sidebar">
    <div class="brand">Jasp's Web</div>
    <ul class="nav-links">
      <li><router-link to="/">General</router-link></li>
      <li><router-link to="/experiences">Experiences</router-link></li>
      <li><router-link to="/goals">Goals</router-link></li>
      <li><router-link to="/certifications">Certifications</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>

  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  /* border-right: 1px solid var(--border-color);  <-- Delete this line */
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
}


.brand {
  font-size: 1.8rem;
  margin-bottom: 4rem;
}
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}
.nav-links li {
  margin-bottom: 1.5rem; 
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  opacity: 0.9; /* Increased from 0.5 to be easily seen */
  font-weight: 600; /* Made the font much thicker */
  transition: all 0.3s ease;
  font-size: 0.95rem; 
  letter-spacing: 0.02em;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.5); /* Helps it pop against the image */
}

.nav-links a:hover, .nav-links a.router-link-active {
  opacity: 1;
  font-weight: 700; /* Even bolder when active */
}
.theme-wrapper {
  margin-top: auto;
}
</style>



