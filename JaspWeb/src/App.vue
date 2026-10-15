<script setup>
import { RouterView } from 'vue-router'
import SidebarNav from './components/SidebarNav.vue'
import CustomCursor from './components/CustomCursor.vue'
import TopRightNav from './components/TopRightNav.vue'
import './assets/css/main.css'
</script>

<template>
  <!-- 1. Place the background image here so it persists globally -->
  <img src="./assets/images/profile.jpg" alt="Background" class="full-bg" />
  
  <CustomCursor />
  <TopRightNav />
  <div class="layout-wrapper">
    <SidebarNav />
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
/* 2. Global background styling */
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.layout-wrapper {
  position: relative;
  z-index: 1; 
}
</style>