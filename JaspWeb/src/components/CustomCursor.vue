<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const x = ref(-100);
const y = ref(-100);
const visible = ref(false);

const updateCursor = (e) => {
  x.value = e.clientX;
  y.value = e.clientY;
  if (!visible.value) visible.value = true;
};

const handleMouseLeave = () => {
  visible.value = false;
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursor);
  document.addEventListener('mouseleave', handleMouseLeave);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor);
  document.removeEventListener('mouseleave', handleMouseLeave);
});
</script>

<template>
  <div
    v-show="visible"
    class="custom-cursor"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
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
  transition: transform 0.1s ease-out, opacity 0.2s ease;
}

@media (pointer: coarse) {
  .custom-cursor {
    display: none !important;
  }
}
</style>
