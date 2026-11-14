<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Automatically close menu when navigating
watch(() => route.path, () => {
  closeMobileMenu();
});
</script>

<template>
  <!-- Mobile Sticky Top Header (visible on screens <= 820px) -->
  <header class="mobile-top-bar">
    <router-link to="/" class="mobile-brand" @click="closeMobileMenu">
      <span class="m-brand-name">Jasper Sng</span>
      <span class="m-brand-badge">SWE & GCP</span>
    </router-link>

    <div class="mobile-actions">
      <button
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :aria-label="isMobileMenuOpen ? 'Close Menu' : 'Open Menu'"
        :class="{ active: isMobileMenuOpen }"
      >
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
        <span class="bar bar-3"></span>
      </button>
    </div>
  </header>

  <!-- Mobile Dropdown / Slide Menu Overlay -->
  <transition name="drawer-fade">
    <div v-if="isMobileMenuOpen" class="mobile-drawer-backdrop" @click="closeMobileMenu">
      <div class="mobile-drawer-content" @click.stop>
        <div class="drawer-header">
          <div class="drawer-user">
            <span class="drawer-name">Jasper Sng</span>
            <span class="drawer-role">Software Engineer & GCP Architect</span>
          </div>
          <button class="drawer-close-btn" @click="closeMobileMenu">✕</button>
        </div>

        <ul class="mobile-nav-links">
          <li>
            <router-link to="/" @click="closeMobileMenu">
              <span class="m-icon">🏠</span>
              <span>General</span>
            </router-link>
          </li>
          <li>
            <router-link to="/experiences" @click="closeMobileMenu">
              <span class="m-icon">💼</span>
              <span>Experiences</span>
            </router-link>
          </li>
          <li>
            <router-link to="/goals" @click="closeMobileMenu">
              <span class="m-icon">🎯</span>
              <span>Goals</span>
            </router-link>
          </li>
          <li>
            <router-link to="/certifications" @click="closeMobileMenu">
              <span class="m-icon">📜</span>
              <span>Certifications</span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMobileMenu">
              <span class="m-icon">✉️</span>
              <span>Contact</span>
            </router-link>
          </li>
        </ul>

        <div class="drawer-footer">
          <div class="status-pill">
            <span class="pulse-dot"></span> Available for Roles
          </div>

          <!-- Quick Mobile Social Links -->
          <div class="drawer-socials">
            <a href="https://github.com/JaspJaspJasp" target="_blank" rel="noopener noreferrer" class="m-soc-btn">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/jasper-sng-36b079390" target="_blank" rel="noopener noreferrer" class="m-soc-btn">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <!-- Desktop Permanent Sidebar (visible on screens > 820px) -->
  <nav class="sidebar desktop-sidebar">
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
/* Desktop Sidebar Styles */
.desktop-sidebar {
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
  font-size: 0.72rem;
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

/* Mobile Header Bar (Hidden by default on desktop) */
.mobile-top-bar {
  display: none;
}

.mobile-drawer-backdrop {
  display: none;
}

/* Mobile Breakpoints (<= 820px, including all iPhones & iPads) */
@media (max-width: 820px) {
  .desktop-sidebar {
    display: none !important;
  }

  .mobile-top-bar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba(28, 32, 40, 0.94);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    padding: 0 1.2rem;
    align-items: center;
    justify-content: space-between;
    z-index: 950;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  .mobile-brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
  }

  .m-brand-name {
    font-family: "Charter", Georgia, serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.01em;
  }

  .m-brand-badge {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    color: #93c5fd;
    background: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(147, 197, 253, 0.4);
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .mobile-actions {
    display: flex;
    align-items: center;
  }

  .mobile-menu-btn {
    width: 38px;
    height: 38px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s ease;
  }

  .mobile-menu-btn .bar {
    width: 18px;
    height: 2px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: all 0.25s ease;
  }

  .mobile-menu-btn.active .bar-1 {
    transform: translateY(6px) rotate(45deg);
  }

  .mobile-menu-btn.active .bar-2 {
    opacity: 0;
  }

  .mobile-menu-btn.active .bar-3 {
    transform: translateY(-6px) rotate(-45deg);
  }

  /* Mobile Drawer Menu */
  .mobile-drawer-backdrop {
    display: block;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    z-index: 940;
    overflow-y: auto;
  }

  .mobile-drawer-content {
    background: rgba(30, 34, 42, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1.5rem 1.4rem 2rem 1.4rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1.2rem;
  }

  .drawer-user {
    display: flex;
    flex-direction: column;
  }

  .drawer-name {
    font-family: "Charter", Georgia, serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
  }

  .drawer-role {
    font-size: 0.76rem;
    color: #93c5fd;
    margin-top: 0.15rem;
  }

  .drawer-close-btn {
    background: transparent;
    border: none;
    color: #cbd5e1;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.2rem;
  }

  .mobile-nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .mobile-nav-links li a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.85rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    text-decoration: none;
    color: #f1f5f9;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .mobile-nav-links li a:active,
  .mobile-nav-links li a.router-link-active {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(96, 165, 250, 0.4);
    color: #ffffff;
    font-weight: 600;
  }

  .m-icon {
    font-size: 1.15rem;
  }

  .drawer-footer {
    margin-top: 1.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .drawer-socials {
    display: flex;
    gap: 0.8rem;
  }

  .m-soc-btn {
    font-size: 0.82rem;
    color: #93c5fd;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-weight: 500;
  }

  /* Drawer transition */
  .drawer-fade-enter-active,
  .drawer-fade-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .drawer-fade-enter-from,
  .drawer-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
