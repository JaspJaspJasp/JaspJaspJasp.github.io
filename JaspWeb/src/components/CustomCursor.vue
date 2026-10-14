<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(0);
const y = ref(0);

const updateCursor = (e) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

onMounted(() => window.addEventListener('mousemove', updateCursor));
onUnmounted(() => window.removeEventListener('mousemove', updateCursor));
</script>

<template>
  <div class="custom-cursor" :style="{ left: x + 'px', top: y + 'px' }"></div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: var(--text-color);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  opacity: 0.5;
  transition: transform 0.1s ease-out;
}
</style>