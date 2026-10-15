<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <div class="top-nav">
    <ThemeToggle />
    <a href="https://github.com/JaspJaspJasp" target="_blank" class="social-btn">git</a>
    <a href="https://www.linkedin.com/in/jasper-sng-36b079390" target="_blank" class="social-btn">in</a>
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
  z-index: 100;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 0.85rem;
  font-weight: 500;
  background-color: var(--btn-bg);
  transition: all 0.2s ease;
  cursor: none; /* Let custom cursor handle it */
}

.social-btn:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}
</style>