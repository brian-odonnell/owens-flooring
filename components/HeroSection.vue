<template>
  <section id="hero" class="hero">
    <!-- Background texture overlay -->
    <div class="hero-bg">
      <div class="hero-img-placeholder">
        <!-- Replace with: <img src="/images/hero-flooring.jpg" alt="Commercial flooring installation"> -->
        <div class="placeholder-pattern"></div>
      </div>
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <div class="hero-inner">
        <p class="section-label hero-eyebrow">Northeast Ohio's Flooring Specialists Since 1967</p>
        <h1 class="hero-headline">
          Floors Built<br>
          <em>to Last a</em><br>
          Lifetime.
        </h1>
        <p class="hero-sub">
          Owens Flooring Company installs resilient flooring, tile, and more for
          commercial and residential spaces across Northeast Ohio. On time. On budget.
          Done right.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">Get a Free Quote</a>
          <a href="#services" class="btn-outline">Our Services</a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">59+ Years</span>
            <span class="stat-label">Serving Northeast Ohio</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">Est. 1967</span>
            <span class="stat-label">Family owned & operated</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Diagonal cut -->
    <div class="hero-cut"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  color: #fff;
  overflow: hidden;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-img-placeholder {
  position: absolute;
  inset: 0;
  background: var(--bark);
}

/* Placeholder geometric pattern — remove when real image is added */
.placeholder-pattern {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      45deg,
      rgba(200,146,42,0.07) 0px,
      rgba(200,146,42,0.07) 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(200,146,42,0.04) 0px,
      rgba(200,146,42,0.04) 1px,
      transparent 1px,
      transparent 60px
    );
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(26,23,20,0.92) 0%,
    rgba(26,23,20,0.75) 55%,
    rgba(26,23,20,0.4) 100%
  );
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + 48px) 32px 120px;
}

.hero-inner {
  max-width: 680px;
}

.hero-eyebrow {
  margin-bottom: 20px;
  animation: fadeUp 0.6s ease both;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  animation: fadeUp 0.6s 0.1s ease both;
}

.hero-headline em {
  font-style: italic;
  color: var(--sky);
}

.hero-sub {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  max-width: 480px;
  margin-bottom: 36px;
  animation: fadeUp 0.6s 0.2s ease both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 60px;
  animation: fadeUp 0.6s 0.3s ease both;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
  animation: fadeUp 0.6s 0.4s ease both;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--sky);
  line-height: 1;
}

.stat-label {
  font-family: var(--font-display);
  font-size: 0.90rem;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: #fff;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.15);
}

/* Diagonal cut at bottom */
.hero-cut {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 80px;
  background: var(--ice);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
  z-index: 2;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .hero-stats {
    gap: 16px;
  }
  .stat-num {
    font-size: 1.4rem;
  }
}
</style>
