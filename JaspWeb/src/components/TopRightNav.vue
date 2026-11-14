<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <div class="top-nav">
    <ThemeToggle />

    <a
      href="https://github.com/JaspJaspJasp"
      target="_blank"
      rel="noopener noreferrer"
      class="social-btn desktop-only"
      title="GitHub Profile (JaspJaspJasp)"
      aria-label="GitHub"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/in/jasper-sng-36b079390"
      target="_blank"
      rel="noopener noreferrer"
      class="social-btn desktop-only"
      title="LinkedIn Profile"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
  </div>
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 2rem;
  right: 3rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  z-index: 960;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: rgba(30, 34, 42, 0.88);
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  padding: 0;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.65);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
}

/* Mobile & iPhone Breakpoints */
@media (max-width: 820px) {
  .top-nav {
    top: 11px;
    right: 4.4rem;
    gap: 0.45rem;
  }

  .desktop-only {
    display: none !important;
  }

  .social-btn {
    width: 36px;
    height: 36px;
  }
}
</style>
