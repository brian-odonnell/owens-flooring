<template>
  <div>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <AppNav />
    <main id="main-content">
      <HeroSection />
      <ServicesSection />
<AboutSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  padding: 12px 24px;
  background: var(--amber);
  color: #fff;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  z-index: 9999;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}
</style>
