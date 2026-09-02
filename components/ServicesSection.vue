<template>
	<section id="services" class="services">
		<div class="services-inner">
			<div class="services-header">
				<div class="services-header-left">
					<p class="section-label">What We Do</p>
					<h2 class="section-title services-title">Commercial Flooring<br>for Every Industry</h2>
					<p class="services-intro">
						From high-traffic retail to precision industrial environments,
						we install and restore flooring systems built to last.
					</p>
				</div>
			</div>

			<div class="services-grid">
				<div v-for="service in services" :key="service.title" class="service-card">
					<div class="service-card-top">
						<div class="service-icon">
							<span v-html="service.icon"></span>
						</div>
					</div>
					<h3 class="service-name">{{ service.title }}</h3>
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
		title: 'Carpet',
		tags: ['Broadloom', 'Carpet Tile', 'Entry Solutions'],
		// carpet roll viewed from the side
		icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="6" cy="12" rx="3" ry="8"/><path d="M6 4h13"/><path d="M6 20h13"/><path d="M19 4a3 8 0 0 1 0 16"/><path d="M10 5.5v13M14 5v14" opacity="0.4"/></svg>`
	},
	{
		title: 'Resilient',
		tags: ['Rubber Tile & Sheet', 'VCT', 'LVT', 'Linoleum', 'Vinyl Plank'],
		// staggered/offset tile pattern (classic VCT install)
		icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="9" height="5" rx="0.5"/><rect x="13" y="3" width="9" height="5" rx="0.5"/><rect x="2" y="10" width="6" height="5" rx="0.5"/><rect x="10" y="10" width="12" height="5" rx="0.5"/><rect x="2" y="17" width="11" height="4" rx="0.5"/><rect x="15" y="17" width="7" height="4" rx="0.5"/></svg>`
	},
	{
		title: 'Ceramic',
		tags: ['Floor & Wall Tile', 'Slip Resistant', 'Porcelain', 'Waterproofing'],
		// diamond/rotated tile pattern (classic ceramic layout)
		icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8L8 3L13 8L8 13Z"/><path d="M11 8L16 3L21 8L16 13Z"/><path d="M3 16L8 11L13 16L8 21Z"/><path d="M11 16L16 11L21 16L16 21Z"/></svg>`
	},
	{
		title: 'Wood',
		tags: ['Solid Hardwood', 'Engineered'],
		// staggered planks (classic hardwood install pattern)
		icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="9" height="4" rx="0.5"/><rect x="13" y="4" width="9" height="4" rx="0.5"/><rect x="2" y="10" width="14" height="4" rx="0.5"/><rect x="18" y="10" width="4" height="4" rx="0.5" opacity="0.5"/><rect x="2" y="16" width="5" height="4" rx="0.5" opacity="0.5"/><rect x="9" y="16" width="13" height="4" rx="0.5"/></svg>`
	},
	{
		title: 'Specialty Flooring',
		tags: ['Sports Flooring', 'Static Dissapating Flooring'],
		// floor layer cross-section: finish + moisture barrier + subfloor
		icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="3" rx="0.5"/><path d="M2 12Q5.5 10 9 12Q12.5 14 16 12Q19.5 10 22 12" opacity="0.7"/><rect x="2" y="15" width="20" height="4" rx="0.5" opacity="0.4"/></svg>`
  	},
	{
		title: 'Substrate Preperations',
		tags: ['Self-Leveling', 'Crack Isolation Membrane'],
		// subfloor prep: base layer with crack lines above
		icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="15" width="20" height="5" rx="0.5"/><path d="M2 11h20" opacity="0.5"/><path d="M5 7l1.5-2M10 7l1.5-2M15 7l1.5-2" opacity="0.6"/></svg>`
	},
]
</script>

<style scoped>
.services {
	padding: 100px 32px;
	background: var(--ice);
}

.services-inner {
	max-width: 1280px;
	margin: 0 auto;
}

/* Header */
.services-header {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 32px;
	margin-bottom: 56px;
}

.services-title {
	font-size: clamp(2rem, 4vw, 3.2rem);
	color: var(--coal);
	margin: 12px 0 20px;
}

.services-intro {
	color: var(--slate);
	font-size: 1.05rem;
	max-width: 480px;
}


/* Grid */
.services-grid {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 2px;
}

.service-card {
	grid-column: span 2;
	background: var(--coal);
	padding: 28px 28px 24px;
	cursor: default;
}

.service-card-top {
	margin-bottom: 20px;
}


.service-icon {
	color: var(--cerulean);
}

.service-name {
	font-family: var(--font-display);
	font-size: 1.25rem;
	font-weight: 700;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.9);
	margin-bottom: 16px;
}

.service-tags {
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
}

.service-tags li {
	font-family: var(--font-display);
	font-size: 0.80rem;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	padding: 3px 10px;
	background: rgba(255, 255, 255, 0.06);
	color: var(--sky);
}

@media (max-width: 1024px) {
	.services-grid {
		grid-template-columns: repeat(2, 1fr);
	}

	.service-card:nth-child(n) {
		grid-column: span 1;
	}
}

@media (max-width: 700px) {
	.services-header {
		flex-direction: column;
		align-items: flex-start;
	}

	.services-stat {
		align-items: baseline;
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
