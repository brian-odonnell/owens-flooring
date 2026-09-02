<template>
	<section id="contact" class="contact">
		<div class="contact-inner">
			<!-- Left info panel -->
			<div class="contact-info">
				<p class="section-label">Get in Touch</p>
				<h2 class="section-title contact-title">Request an<br>Estimate</h2>
				<p class="contact-sub">
					We'd love to hear from you! Send us a message or give us a call to discuss your project.
				</p>

				<div class="contact-details">
					<a href="tel:+14402691112" class="contact-detail-item">
						<div class="detail-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path
									d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
						</div>
						<div>
							<p class="detail-label">Phone</p>
							<p class="detail-value">(440) 269-1112</p>
						</div>
					</a>

					<a href="mailto:contact@owensflooring.net" class="contact-detail-item">
						<div class="detail-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<rect width="20" height="16" x="2" y="4" rx="2" />
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
							</svg>
						</div>
						<div>
							<p class="detail-label">Email</p>
							<p class="detail-value">contact@owensflooring.net</p>
						</div>
					</a>

					<div class="contact-detail-item">
						<div class="detail-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
						</div>
						<div>
							<p class="detail-label">Service Area</p>
							<p class="detail-value">Northeast Ohio</p>
						</div>
					</div>

					<div class="contact-detail-item">
						<div class="detail-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10" />
								<polyline points="12 6 12 12 16 14" />
							</svg>
						</div>
						<div>
							<p class="detail-label">Office Hours</p>
							<p class="detail-value">Mon&ndash;Fri: 9:00AM&ndash;5:00PM</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right form panel -->
			<div class="contact-form-wrap">
				<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
					@submit.prevent="handleSubmit">
					<div class="form-row">
						<div class="form-field">
							<label for="name">Your Name *</label>
							<input id="name" v-model="form.name" name="name" type="text" placeholder="Jane Smith"
								required />
						</div>
						<div class="form-field">
							<label for="company">Company</label>
							<input id="company" v-model="form.company" name="company" type="text"
								placeholder="Acme Corp" />
						</div>
					</div>

					<div class="form-row">
						<div class="form-field">
							<label for="email">Email *</label>
							<input id="email" v-model="form.email" name="email" type="email" placeholder="jane@acme.com"
								required />
						</div>
						<div class="form-field">
							<label for="phone">Phone</label>
							<input id="phone" v-model="form.phone" name="phone" type="tel"
								placeholder="(555) 000-0000" />
						</div>
					</div>

					<div class="form-field">
						<label for="service">Service Needed</label>
						<select id="service" v-model="form.service" name="service">
							<option value="">Select a service…</option>
							<option>Hardwood / Engineered Wood</option>
							<option>Luxury Vinyl Plank (LVP)</option>
							<option>Ceramic / Porcelain Tile</option>
							<option>Epoxy / Resin Coating</option>
							<option>Commercial Carpet</option>
							<option>Surface Prep / Repair</option>
							<option>Not sure yet</option>
						</select>
					</div>

					<div class="form-field">
						<label for="sqft">Approximate Square Footage</label>
						<input id="sqft" v-model="form.sqft" name="sqft" type="text" placeholder="e.g. 3,000 sq ft" />
					</div>

					<div class="form-field">
						<label for="message">Project Details *</label>
						<textarea id="message" v-model="form.message" name="message" rows="4"
							placeholder="Describe your space, timeline, and any other details…" required></textarea>
					</div>

					<button type="submit" class="btn-primary form-submit" :disabled="submitted">
						<span v-if="!submitted">Send My Request</span>
						<span v-else>✓ Message Sent!</span>
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>
const form = reactive({
	name: '',
	company: '',
	email: '',
	phone: '',
	service: '',
	sqft: '',
	message: ''
})

const submitted = ref(false)

// Wire up to Formspree or your preferred form backend.
// Update the form action attribute with your Formspree endpoint.
async function handleSubmit() {
	// For real Formspree usage, remove @submit.prevent and let the form POST naturally,
	// OR use fetch() for AJAX submission. Example:
	//
	// const res = await fetch('https://formspree.io/f/YOUR_ID', {
	//   method: 'POST',
	//   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
	//   body: JSON.stringify(form)
	// })
	// if (res.ok) submitted.value = true

	submitted.value = true
}
</script>

<style scoped>
.contact {
	padding: 100px 32px;
	background: var(--ice);
	color: var(--coal);
}

.contact-inner {
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 420px 1fr;
	gap: 80px;
	align-items: start;
}

/* Info panel */
.contact-title {
	font-size: clamp(1.8rem, 3vw, 2.8rem);
	color: var(--coal);
	margin: 12px 0 20px;
}

.contact-sub {
	color: var(--slate);
	font-size: 0.95rem;
	margin-bottom: 40px;
}

.contact-details {
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.contact-detail-item {
	display: flex;
	gap: 16px;
	align-items: flex-start;
	color: inherit;
	transition: color 0.2s;
}

a.contact-detail-item:hover .detail-value {
	color: var(--cerulean);
}

.detail-icon {
	flex-shrink: 0;
	width: 42px;
	height: 42px;
	background: var(--cerulean);
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}

.detail-label {
	font-family: var(--font-display);
	font-size: 0.65rem;
	font-weight: 700;
	letter-spacing: 0.15em;
	text-transform: uppercase;
	color: var(--slate);
	margin-bottom: 2px;
}

.detail-value {
	font-family: var(--font-display);
	font-size: 1rem;
	font-weight: 600;
	color: var(--coal);
	transition: color 0.2s;
}

/* Form */
.contact-form-wrap {
	background: var(--bark);
	border: 1px solid rgba(255, 255, 255, 0.06);
	padding: 48px;
}

.contact-form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.form-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
}

.form-field {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.form-field label {
	font-family: var(--font-display);
	font-size: 0.72rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.75);
}

.form-field input,
.form-field select,
.form-field textarea {
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.35);
	color: #fff;
	font-family: var(--font-body);
	font-size: 0.9rem;
	padding: 12px 16px;
	outline: none;
	transition: border-color 0.2s, background 0.2s;
	appearance: none;
}

.form-field select {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff99' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right 14px center;
	background-size: 16px;
	cursor: pointer;
}

.form-field select option {
	background: var(--bark);
	color: #fff;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
	border-color: var(--cerulean);
	background: rgba(255, 255, 255, 0.09);
}

.form-field textarea {
	resize: vertical;
	min-height: 100px;
}

.form-submit {
	width: 100%;
	justify-content: center;
	font-size: 1rem;
	padding: 16px;
	margin-top: 4px;
}

.form-submit:disabled {
	background: #4a7c4e;
	cursor: default;
	transform: none;
}

@media (max-width: 1100px) {
	.contact-inner {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 600px) {
	.contact {
		padding: 72px 24px;
	}

	.contact-form-wrap {
		padding: 28px 20px;
	}

	.form-row {
		grid-template-columns: 1fr;
	}
}
</style>
