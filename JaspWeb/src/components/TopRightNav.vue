<script setup>
import { ref } from 'vue';
import ThemeToggle from './ThemeToggle.vue';

const copied = ref(false);

const handleEmailClick = async () => {
  try {
    await navigator.clipboard.writeText('jaspersngwork@gmail.com');
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 3000);
  } catch (err) {
    console.error('Failed to copy email:', err);
  }
  // Also attempt system mailto
  window.location.href = 'mailto:jaspersngwork@gmail.com';
};
</script>

<template>
  <div class="top-nav">
    <ThemeToggle />

    <a
      href="https://github.com/JaspJaspJasp"
      target="_blank"
      rel="noopener noreferrer"
      class="social-btn"
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
      class="social-btn"
      title="LinkedIn Profile"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>

    <!-- Email Action Button -->
    <button
      class="social-btn email-btn"
      @click="handleEmailClick"
      title="Send email or copy jaspersngwork@gmail.com"
      aria-label="Email"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    </button>

    <!-- Floating Feedback Toast -->
    <transition name="toast-fade">
      <div v-if="copied" class="toast-popup">
        Email copied to clipboard! (jaspersngwork@gmail.com)
      </div>
    </transition>
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

.toast-popup {
  position: absolute;
  top: 50px;
  right: 0;
  white-space: nowrap;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #86efac;
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
