<template>
  <section id="about" class="about">
    <div class="about-inner">
      <!-- Image column -->
      <div class="about-media">
        <div class="about-img">
          <img src="/assets/img/office-2.png" alt="Owens Flooring Company office at 38270 Airport Pkwy, Willoughby OH">
          <!-- <div class="img-placeholder"></div> -->
        </div>
        <div class="about-badge">
          <span class="badge-num">Est.</span>
          <span class="badge-text">1967</span>
        </div>
      </div>

      <!-- Text column -->
      <div class="about-text">
        <p class="section-label">About Us</p>
        <h2 class="section-title about-title">Family Owned.<br>Union Installed.<br>Since 1967.</h2>
        <p class="about-body">
          Owens Flooring Company has been a trusted name in Northeast Ohio for over five decades. We're family owned and operated — and that hasn't changed since the day we opened our doors in Eastlake.
        </p>
        <p class="about-body">
          We staff our crews directly through the union, so every installer on your job is a trained, dues-paying professional. We also work around your business hours — nights, weekends, whatever it takes — so your operations never skip a beat.
        </p>

        <div class="about-values">
          <div v-for="val in values" :key="val.title" class="value-item">
            <div class="value-dot"></div>
            <div>
              <h4 class="value-title">{{ val.title }}</h4>
              <p class="value-desc">{{ val.desc }}</p>
            </div>
          </div>
        </div>

        <a href="#contact" class="btn-primary about-cta">Work With Us</a>
      </div>
    </div>

    <!-- Team sub-section -->
    <div class="team">
      <p class="section-label team-label">The Team</p>
      <div class="team-grid">
        <div v-for="member in team" :key="member.name" class="team-card">
          <h3 class="team-name">{{ member.name }}</h3>
          <p class="team-role">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { title: 'Union Labor', desc: 'Every installer is sourced directly through the union — skilled, accountable, and professional.' },
  { title: 'Around-the-Clock Scheduling', desc: 'We work nights and weekends to keep your business running without interruption.' },
  { title: 'Family Owned Since 1967', desc: 'Three generations of the same family, still doing business the same way — with integrity.' },
]

const team = [
  { name: 'Matthew O\'Donnell', role: 'Owner & CEO' },
  { name: 'Andrew O\'Donnell', role: 'Project Manager' },
  { name: 'Kelly O\'Donnell', role: 'Project Manager' },
]
</script>

<style scoped>
.about {
  padding: 100px 32px;
  background: var(--coal);
  color: #fff;
  overflow: hidden;
}

.about-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Media column */
.about-media {
  position: relative;
}

.about-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.about-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2e2720 0%, #3d3228 100%);
  background-image:
    repeating-linear-gradient(45deg, rgba(200,146,42,0.06) 0px, rgba(200,146,42,0.06) 1px, transparent 1px, transparent 50px);
}

.about-badge {
  position: absolute;
  bottom: -20px;
  right: 24px;
  width: 100px;
  height: 100px;
  background: var(--cerulean);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 2;
}

.badge-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

.badge-text {
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.3;
}

/* Text column */
.about-title {
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  color: #fff;
  margin: 12px 0 24px;
}

.about-body {
  color: rgba(255,255,255,0.6);
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.about-values {
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.value-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.value-dot {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  background: var(--cerulean);
  margin-top: 9px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.value-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #fff;
  margin-bottom: 2px;
}

.value-desc {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.6);
}

/* Team sub-section */
.team {
  max-width: 1280px;
  margin: 80px auto 0;
  padding-top: 64px;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.team-label {
  margin-bottom: 40px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.team-card {
  padding: 32px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.team-name {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 8px;
}

.team-role {
  font-family: var(--font-display);
  font-size: 0.90rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cerulean);
}

@media (max-width: 960px) {
  .about-inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 72px 24px;
  }
}
</style>
