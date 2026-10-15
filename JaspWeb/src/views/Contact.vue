<template>
  <div class="view-container">
    <div class="content-overlay">
      <div class="uniform-text-block">
        <!-- Changed to center alignment -->
        <h1 class="centered-heading">Get in Touch</h1>
        
        <div class="bio-block">
          <p>
            I am currently exploring internship opportunities in software development, data architectures and data engineering.
          </p>
          <p>
            Whether you have a question, a potential role, or just want to discuss tech and lifting, feel free to reach out. I will try my best to get back to you!
          </p>
          
          <!-- New aesthetic contact fields -->
          <div class="contact-details">
            <div class="contact-item">
              <span class="label">Email</span>
              <span class="value">jaspersngwork@gmail.com</span>
            </div>
            <div class="contact-item">
              <span class="label">Instagram</span>
              <!-- Replace with your actual IG handle and link -->
              <a href="https://instagram.com/jasjaspjaspe" target="_blank" class="value link">@jasjaspjaspe</a>
            </div>
            <div class="contact-item">
              <span class="label">Phone</span>
              <!-- Replace with your actual number -->
              <span class="value">+65 8388 7596</span>
            </div>
          </div>
          
          <!-- Action Button - Fixed with 'mailto:' -->
          <div class="action-btn-container">
            <a href="mailto:jaspersngwork@gmail.com" class="email-link">
              Send an Email ↗
            </a>
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
  text-align: center; /* Centered as requested */
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

/* Styling for the new contact fields */
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
  opacity: 0.6;
}

.contact-item .value {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  color: snow;
  font-size: 1.15rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); 
}

.contact-item .link {
  text-decoration: none;
  transition: opacity 0.2s ease;
  cursor: none !important; /* Prevents the native pointer from showing */
}

.contact-item .link:hover {
  opacity: 0.7;
}

/* Action button alignment */
.action-btn-container {
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Keeps the big link aligned to the right */
}

.email-link {
  font-family: "Charter", "Bitstream Charter", "Playfair Display", Georgia, serif;
  display: inline-block;
  color: snow;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  margin-top: 1rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-bottom: 1px solid rgba(255, 250, 250, 0.3);
  padding-bottom: 4px;
}

.email-link:hover {
  opacity: 0.8;
  transform: translateX(-5px); 
}
</style>