<script setup>
import { RouterView } from 'vue-router'
import SidebarNav from './components/SidebarNav.vue'
import CustomCursor from './components/CustomCursor.vue'
import TopRightNav from './components/TopRightNav.vue'
import './assets/css/main.css'
</script>

<template>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>