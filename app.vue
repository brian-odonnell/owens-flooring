<template>
  <div>
    <a href="#main-content" class="skip-link" @click="focusMainContent">Skip to main content</a>
    <AppNav />
    <main id="main-content" tabindex="-1">
      <HeroSection />
      <ServicesSection />
<AboutSection />
      <ContactSection />
      <InstallersSection />
    </main>
    <AppFooter />
    <InstallerModal />
  </div>
</template>

<script setup>
function focusMainContent() {
  document.getElementById('main-content')?.focus()
}
</script>

<style>
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  padding: 12px 24px;
  background: var(--sky);
  color: var(--slate-950);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.05em;
  z-index: 9999;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}
</style>
