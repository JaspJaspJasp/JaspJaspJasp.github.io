<script setup>
import { ref } from 'vue';

const copied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('jaspersngwork@gmail.com');
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch (err) {
    console.error('Failed to copy email:', err);
  }
};

const handleSendEmail = () => {
  copyEmail();
  window.location.href = 'mailto:jaspersngwork@gmail.com';
};
</script>

<template>
  <div class="view-container">
    <div class="content-overlay">
      <div class="uniform-text-block">
        <h1 class="centered-heading">Get in Touch</h1>
        
        <div class="bio-block">
          <p>
            I am actively exploring internship opportunities in software development, cloud infrastructure, and data engineering.
          </p>
          <p>
            Whether you have an engineering role, technical inquiry, or want to discuss cloud pipelines and systems, feel free to reach out. I will get back to you promptly!
          </p>
          
          <!-- Aesthetic contact fields -->
          <div class="contact-details">
            <div class="contact-item" @click="copyEmail" title="Click to copy email">
              <span class="label">Email (Click to Copy)</span>
              <span class="value link">
                jaspersngwork@gmail.com
                <span v-if="copied" class="copied-badge">Copied! ✓</span>
              </span>
            </div>
            <div class="contact-item">
              <span class="label">Instagram</span>
              <a href="https://instagram.com/jasjaspjaspe" target="_blank" rel="noopener noreferrer" class="value link">@jasjaspjaspe</a>
            </div>
            <div class="contact-item">
              <span class="label">Phone</span>
              <span class="value">+65 8388 7596</span>
            </div>
          </div>
          
          <!-- Action Buttons (Guaranteed to work across all devices) -->
          <div class="action-btn-container">
            <button class="email-btn-primary" @click="handleSendEmail">
              Send an Email ↗
            </button>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jaspersngwork@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="email-link-secondary"
            >
              Open in Gmail ↗
            </a>
          </div>
          <div v-if="copied" class="toast-feedback">
            Email copied to clipboard (jaspersngwork@gmail.com)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  padding-right: 4rem; 
}

.content-overlay {
  max-width: 550px; 
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
}

.uniform-text-block {
  width: 100%;
}

.centered-heading {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow; 
  font-weight: 500; 
  font-size: 3.2rem; 
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); 
  text-align: center;
}

.bio-block {
  width: 100%; 
  display: flex;
  flex-direction: column;
}

.bio-block p {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow; 
  text-align: justify; 
  text-justify: inter-word; 
  font-size: 1.1rem;
  font-weight: 500; 
  line-height: 1.8;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); 
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.contact-details {
  width: 100%;
  margin: 1rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(255, 250, 250, 0.2);
  padding-bottom: 0.5rem;
  cursor: pointer;
}

.contact-item .label {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: snow;
  opacity: 0.7;
}

.contact-item .value {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow;
  font-size: 1.15rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); 
  position: relative;
}

.contact-item .link {
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-item:hover .link {
  opacity: 0.85;
  color: #93c5fd;
}

.copied-badge {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.7rem;
  background: rgba(34, 197, 94, 0.25);
  border: 1px solid rgba(34, 197, 94, 0.5);
  color: #4ade80;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  margin-left: 0.5rem;
}

/* Action button alignment */
.action-btn-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1rem;
}

.email-btn-primary {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  display: inline-block;
  color: snow;
  font-size: 1.45rem;
  font-weight: 500;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 250, 250, 0.4);
  padding: 0 0 4px 0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.2s ease;
  cursor: pointer;
}

.email-btn-primary:hover {
  opacity: 0.9;
  color: #93c5fd;
  transform: translateX(-4px); 
}

.email-link-secondary {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.85rem;
  color: #cbd5e1;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.email-link-secondary:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
}

.toast-feedback {
  margin-top: 0.8rem;
  font-size: 0.78rem;
  color: #86efac;
  text-align: right;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
</style>
