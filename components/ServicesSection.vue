<template>
  <section id="services" class="services">
    <div class="services-inner">
      <div class="services-header">
        <p class="section-label">What We Do</p>
        <h2 class="section-title services-title">Commercial Flooring<br>for Every Industry</h2>
        <p class="services-intro">
          From high-traffic retail to precision industrial environments,
          we install and restore flooring systems built to last.
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-card"
        >
          <div class="service-icon">
            <span v-html="service.icon"></span>
          </div>
          <h3 class="service-name">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
          <ul class="service-tags">
            <li v-for="tag in service.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Hardwood & Engineered Wood',
    description: 'Timeless aesthetics meet commercial-grade durability. Perfect for offices, showrooms, and hospitality spaces.',
    tags: ['Solid Hardwood', 'Engineered', 'Refinishing'],
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="3" rx="0.5"/><rect x="2" y="13" width="20" height="3" rx="0.5"/><rect x="5" y="4" width="14" height="3" rx="0.5" opacity="0.5"/><rect x="5" y="17" width="14" height="3" rx="0.5" opacity="0.5"/></svg>`
  },
  {
    title: 'Luxury Vinyl Plank (LVP)',
    description: 'The workhorse of commercial flooring. Waterproof, scratch-resistant, and available in hundreds of styles.',
    tags: ['Waterproof', 'High Traffic', 'Budget-Friendly'],
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h7v12H3z"/><path d="M10 6h7v12h-7z"/><path d="M17 6h4v12h-4z" opacity="0.5"/></svg>`
  },
  {
    title: 'Ceramic & Porcelain Tile',
    description: 'Exceptional durability and hygiene for kitchens, restrooms, lobbies, and healthcare environments.',
    tags: ['Large Format', 'Mosaic', 'Anti-Slip'],
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="8" height="8" rx="0.5"/><rect x="13" y="3" width="8" height="8" rx="0.5"/><rect x="3" y="13" width="8" height="8" rx="0.5"/><rect x="13" y="13" width="8" height="8" rx="0.5"/></svg>`
  },
  {
    title: 'Epoxy & Resin Coatings',
    description: 'Seamless, chemical-resistant surfaces engineered for warehouses, auto shops, and food service.',
    tags: ['Industrial', 'Chemical Resistant', 'Seamless'],
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 18c0-4 4-6 8-6s8 2 8 6"/><path d="M12 12V6"/><path d="M8 8l4-4 4 4" opacity="0.5"/></svg>`
  },
  {
    title: 'Commercial Carpet',
    description: 'Acoustic comfort and professional appearance for offices, hotels, and multi-unit residential buildings.',
    tags: ['Modular Tile', 'Broadloom', 'Carpet Plank'],
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5h18v14H3z"/><path d="M7 5v14M12 5v14M17 5v14" opacity="0.4"/><path d="M3 9h18M3 13h18" opacity="0.4"/></svg>`
  },
  {
    title: 'Surface Preparation & Repair',
    description: 'Every great floor starts with a flawless subfloor. We handle grinding, leveling, moisture barriers, and demo.',
    tags: ['Concrete Grinding', 'Leveling', 'Demo'],
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  },
]
</script>

<style scoped>
.services {
  padding: 100px 32px;
  background: var(--warm-white);
}

.services-inner {
  max-width: 1280px;
  margin: 0 auto;
}

.services-header {
  max-width: 600px;
  margin-bottom: 64px;
}

.services-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: var(--coal);
  margin: 12px 0 20px;
}

.services-intro {
  color: var(--slate);
  font-size: 1.05rem;
}

/* Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

.service-card {
  background: var(--cream);
  padding: 40px 36px;
  transition: background 0.25s, transform 0.25s;
  border-left: 3px solid transparent;
  cursor: default;
}

.service-card:hover {
  background: var(--coal);
  border-left-color: var(--amber);
  transform: translateY(-4px);
}

.service-card:hover .service-name,
.service-card:hover .service-desc {
  color: rgba(255,255,255,0.9);
}

.service-card:hover .service-tags li {
  background: rgba(255,255,255,0.08);
  color: var(--gold);
}

.service-icon {
  color: var(--amber);
  margin-bottom: 20px;
}

.service-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--coal);
  margin-bottom: 12px;
  transition: color 0.25s;
}

.service-desc {
  font-size: 0.9rem;
  color: var(--slate);
  line-height: 1.6;
  margin-bottom: 20px;
  transition: color 0.25s;
}

.service-tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.service-tags li {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 12px;
  background: rgba(200,146,42,0.12);
  color: var(--amber);
  transition: background 0.25s, color 0.25s;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .services {
    padding: 72px 24px;
  }
}
</style>
