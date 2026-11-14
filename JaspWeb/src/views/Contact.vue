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
          
          <!-- Contact Details Table -->
          <div class="contact-details">
            <div class="contact-item">
              <span class="label">Email</span>
              <span class="value">jaspersngwork@gmail.com</span>
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
          
          <!-- Direct Compose & Single Copy Action -->
          <div class="compose-section">
            <span class="compose-label">Open in:</span>
            <div class="compose-links">
              <a
                href="https://outlook.live.com/mail/0/deeplink/compose?to=jaspersngwork@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="compose-link"
                title="Compose new email in Outlook Web"
              >Outlook ↗</a>
              <span class="pipe-sep">|</span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jaspersngwork@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="compose-link"
                title="Compose new email in Gmail"
              >Gmail ↗</a>
              <span class="pipe-sep">|</span>
              <button
                class="compose-link copy-action-btn"
                @click="copyEmail"
                :title="copied ? 'Copied!' : 'Copy email address to clipboard'"
              >
                <span :class="{ 'copied-text': copied }">{{ copied ? 'Copied! ✓' : 'Copy Address' }}</span>
              </button>
            </div>
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
  box-sizing: border-box;
}

.content-overlay {
  max-width: 580px; 
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
}

.contact-item .link {
  text-decoration: none;
  color: snow;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.contact-item .link:hover {
  opacity: 0.9;
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Compose Options Styling (Clean Inline Text Links) */
.compose-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
}

.compose-label {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #cbd5e1;
  opacity: 0.8;
}

.compose-links {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
}

.compose-link {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: snow;
  text-decoration: none;
  background: transparent;
  border: none;
  padding: 0.15rem 0.25rem;
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}

.compose-link:visited,
.compose-link:active {
  color: snow;
}

.compose-link:hover {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.pipe-sep {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.85rem;
  user-select: none;
}

.copy-action-btn {
  color: snow;
  font-weight: 500;
}

.copy-action-btn:hover {
  color: #ffffff;
}

.copied-text {
  color: #86efac !important;
  font-weight: 600;
}

/* Mobile & iPhone Breakpoints */
@media (max-width: 820px) {
  .view-container {
    justify-content: center;
    align-items: center;
    padding-right: 0;
    min-height: auto;
    padding: 1rem 0.5rem;
  }

  .content-overlay {
    max-width: 100%;
    align-items: flex-start;
  }

  .centered-heading {
    font-size: 2.3rem;
    white-space: normal;
    text-align: left;
    line-height: 1.18;
    margin-bottom: 1rem;
    word-break: break-word;
  }

  .bio-block p {
    font-size: 0.96rem;
    text-align: left;
    line-height: 1.65;
    margin-bottom: 1.2rem;
  }

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }

  .contact-item .value {
    font-size: 1rem;
    word-break: break-all;
  }

  .compose-section {
    justify-content: flex-start;
    margin-top: 0.8rem;
  }

  .compose-links {
    gap: 0.45rem;
  }

  .compose-link {
    font-size: 0.85rem;
    padding: 0.15rem 0.2rem;
  }
}

@media (max-width: 480px) {
  .centered-heading {
    font-size: 1.95rem;
  }

  .compose-links {
    gap: 0.4rem;
  }
}
</style>
