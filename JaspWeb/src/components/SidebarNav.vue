<script setup>
</script>

<template>
  <nav class="sidebar">
    <div class="brand-container">
      <router-link to="/" class="brand">
        <span class="brand-name">Jasper Sng</span>
        <span class="brand-role">SWE & GCP Architect</span>
      </router-link>
    </div>

    <ul class="nav-links">
      <li>
        <router-link to="/">
          <span class="nav-text">General</span>
        </router-link>
      </li>
      <li>
        <router-link to="/experiences">
          <span class="nav-text">Experiences</span>
        </router-link>
      </li>
      <li>
        <router-link to="/goals">
          <span class="nav-text">Goals</span>
        </router-link>
      </li>
      <li>
        <router-link to="/certifications">
          <span class="nav-text">Certifications</span>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <span class="nav-text">Contact</span>
        </router-link>
      </li>
    </ul>

    <div class="sidebar-footer">
      <span class="status-pill">
        <span class="pulse-dot"></span> Available for Roles
      </span>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  padding: 3.5rem 2rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  color: snow;
  z-index: 50;
  box-sizing: border-box;
}

.brand-container {
  margin-bottom: 3.5rem;
}

.brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: snow;
}

.brand-name {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  font-size: 1.65rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  transition: opacity 0.2s ease;
}

.brand-role {
  display: inline-block;
  align-self: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #e0f2fe;
  background: rgba(30, 41, 59, 0.78);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(147, 197, 253, 0.45);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  margin-top: 0.45rem;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}

.brand:hover .brand-name {
  opacity: 0.85;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.nav-links li {
  margin-bottom: 1.35rem; 
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: snow;
  opacity: 0.8;
  font-weight: 500;
  transition: all 0.25s ease;
  font-size: 0.98rem; 
  letter-spacing: 0.02em;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  padding: 0.2rem 0;
}

.nav-links a:hover {
  opacity: 1;
  color: #93c5fd;
  transform: translateX(4px);
}

.nav-links a.router-link-active {
  opacity: 1;
  font-weight: 700;
  color: #ffffff;
}

.nav-links a.router-link-active::before {
  content: '';
  position: absolute;
  left: -1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background-color: #60a5fa;
  border-radius: 50%;
  box-shadow: 0 0 8px #60a5fa;
}

.sidebar-footer {
  margin-top: auto;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.7rem;
  color: #e2e8f0;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.16);
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  letter-spacing: 0.03em;
  backdrop-filter: blur(8px);
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 6px #22c55e;
}

@media (max-width: 900px) {
  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
    padding: 2rem 1.5rem;
  }
}
</style>
