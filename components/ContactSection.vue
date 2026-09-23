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

					<a :href="`mailto:${CONTACT_EMAIL}`" class="contact-detail-item">
						<div class="detail-icon">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<rect width="20" height="16" x="2" y="4" rx="2" />
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
							</svg>
						</div>
						<div>
							<p class="detail-label">Email</p>
							<p class="detail-value">{{ CONTACT_EMAIL }}</p>
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
				<form class="contact-form" action="https://formspree.io/f/meaoeeqa" method="POST" novalidate
					@submit.prevent="handleSubmit">
					<!-- Honeypot: hidden from people, bots that fill it get dropped by Formspree -->
					<input v-model="form._gotcha" type="text" name="_gotcha" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />
					<fieldset class="contact-form-fields" :disabled="submitted">
						<div class="form-row">
							<div class="form-field">
								<label for="name">Your Name *</label>
								<input id="name" v-model="form.name" name="name" type="text" placeholder="Jane Smith"
									required :class="{ invalid: errors.name }" />
								<p v-if="errors.name" class="field-error">{{ errors.name }}</p>
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
								<input id="email" v-model="form.email" name="email" type="email" placeholder="name@company.com"
									required :class="{ invalid: errors.email }" />
								<p v-if="errors.email" class="field-error">{{ errors.email }}</p>
							</div>
							<div class="form-field">
								<label for="phone">Phone *</label>
								<input id="phone" :value="form.phone" @input="onPhoneInput" name="phone" type="tel"
									placeholder="(440) 000-0000" maxlength="14" required :class="{ invalid: errors.phone }" />
								<p v-if="errors.phone" class="field-error">{{ errors.phone }}</p>
							</div>
						</div>

						<div class="form-field">
							<label for="service">Service Needed *</label>
							<select id="service" v-model="form.service" name="service" required
								:class="{ invalid: errors.service }">
								<option value="">Select a service…</option>
								<option>Carpet</option>
								<option>Resilient</option>
								<option>Ceramic</option>
								<option>Wood</option>
								<option>Specialty Flooring</option>
								<option>Substrate Preparations</option>
								<option>Not sure yet</option>
							</select>
							<p v-if="errors.service" class="field-error">{{ errors.service }}</p>
						</div>

						<div class="form-field">
							<label for="sqft">Approximate Square Footage *</label>
							<input id="sqft" v-model="form.sqft" name="sqft" type="text" placeholder="e.g. 3,000 sq ft" required
								:class="{ invalid: errors.sqft }" />
							<p v-if="errors.sqft" class="field-error">{{ errors.sqft }}</p>
						</div>

						<div class="form-field">
							<label for="message">Project Details *</label>
							<textarea id="message" v-model="form.message" name="message" rows="4"
								placeholder="Describe your space, timeline, and any other details…" required
								:class="{ invalid: errors.message }"></textarea>
							<p v-if="errors.message" class="field-error">{{ errors.message }}</p>
						</div>
					</fieldset>

					<p v-if="errors.recaptcha" class="form-error">{{ errors.recaptcha }}</p>

					<p v-if="submitError" class="form-error">
						Well, this is embarrassing — our form just tripped over its own shoelaces. Shoot us a message at
						<a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a> instead.
					</p>

					<button type="submit" class="btn-primary form-submit" :disabled="submitted">
						<span v-if="!submitted">Send Your Project Details</span>
						<span v-else>✓ Project Details Sent!</span>
					</button>

					<p class="recaptcha-note">
						This site is protected by reCAPTCHA and the Google
						<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a> and
						<a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a> apply.
					</p>
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
	message: '',
	_gotcha: ''
})

const submitted = ref(false)
const submitError = ref(false)

const errors = reactive({
	name: '',
	email: '',
	phone: '',
	service: '',
	sqft: '',
	message: '',
	recaptcha: ''
})

const recaptcha = useRecaptcha()

function onPhoneInput(event) {
	form.phone = formatPhoneNumber(event.target.value)
}

function validate() {
	errors.name = form.name.trim() ? '' : 'Please enter your name.'
	errors.email = !form.email.trim()
		? 'Please enter your email.'
		: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Please enter a valid email address.'
	const phoneDigits = form.phone.replace(/\D/g, '')
	errors.phone = !phoneDigits
		? 'Please enter your phone number.'
		: phoneDigits.length === 10 ? '' : 'Please enter a complete phone number.'
	errors.service = form.service ? '' : 'Please select a service.'
	errors.sqft = form.sqft.trim() ? '' : 'Please enter your square footage.'
	errors.message = form.message.trim() ? '' : 'Please describe your project.'

	return !Object.values(errors).some(Boolean)
}

async function handleSubmit(event) {
	submitError.value = false
	errors.recaptcha = ''
	if (!validate()) return

	let token = ''
	try {
		token = await recaptcha.getToken()
	} catch {
		errors.recaptcha = 'Spam check failed to load. Please refresh the page and try again.'
		return
	}

	try {
		const res = await fetch(event.target.action, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
			body: JSON.stringify({ ...form, 'g-recaptcha-response': token })
		})
		submitted.value = res.ok
		submitError.value = !res.ok
		if (res.ok) window.umami?.track('Estimate Request Submitted', { service: form.service })
	} catch {
		submitError.value = true
	}
}
</script>

<style scoped>
.hp-field {
	position: absolute;
	left: -9999px;
	width: 1px;
	height: 1px;
	opacity: 0;
	pointer-events: none;
}

.contact {
	padding: 100px 32px;
	background: var(--sky-50);
	color: var(--navy-900);
}

.contact-inner {
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 420px 1fr;
	gap: 80px;
	align-items: start;
}

.section-label {
	color: var(--sky-800);
}

/* Info panel */
.contact-title {
	font-size: clamp(1.8rem, 3vw, 2.8rem);
	color: var(--navy-900);
	margin: 12px 0 20px;
}

.contact-sub {
	color: var(--slate-950);
	font-size: 1rem;
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
	align-items: center;
	color: inherit;
	transition: all 0.2s;
}

a.contact-detail-item:hover .detail-value {
	color: var(--sky-800);
	text-decoration: underline;
}

.contact-detail-item:focus-visible {
	outline-color: var(--slate-950);
}

.detail-icon {
	flex-shrink: 0;
	width: 42px;
	height: 42px;
	background: var(--sky-800);
	color: var(--sky-50);
	display: flex;
	align-items: center;
	justify-content: center;
}

.detail-label {
	font-family: var(--font-display);
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.15em;
	text-transform: uppercase;
	color: var(--slate-950);
	margin-bottom: 2px;
}

.detail-value {
	font-family: var(--font-display);
	font-size: 1rem;
	font-weight: 600;
	color: var(--navy-900);
	transition: color 0.2s;
}

/* Form */
.contact-form-wrap {
	background: var(--slate-950);
	border: 1px solid rgba(255, 255, 255, 0.06);
	padding: 48px;
	clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px));
}

.contact-form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.contact-form-fields {
	display: flex;
	flex-direction: column;
	gap: 20px;
	border: none;
	margin: 0;
	padding: 0;
	min-width: 0;
}

.contact-form-fields:disabled {
	opacity: 0.6;
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
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--sky-50);
}

.form-field input,
.form-field select,
.form-field textarea {
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.35);
	color: var(--sky-50);
	font-family: var(--font-body);
	font-size: 1rem;
	padding: 12px 16px;
	transition: border-color 0.2s, background 0.2s;
	appearance: none;
}

.form-field input:focus:not(:focus-visible),
.form-field select:focus:not(:focus-visible),
.form-field textarea:focus:not(:focus-visible) {
	outline: none;
}

.form-field select {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff99' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-position: right 14px center;
	background-size: 16px;
	cursor: pointer;
}

.form-field select:-moz-focusring {
	color: transparent;
	text-shadow: 0 0 0 var(--sky-50);
}

.form-field select option {
	background: var(--navy);
	color: var(--sky-50);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
	border-color: var(--sky-50);
	background-color: rgba(255, 255, 255, 0.09);
}

.form-field textarea {
	resize: vertical;
	min-height: 100px;
}

.form-field input.invalid,
.form-field select.invalid,
.form-field textarea.invalid {
	border-color: var(--error);
}

.field-error {
	font-family: var(--font-display);
	font-size: 0.85rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--error);
}

.form-error {
	font-family: var(--font-display);
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	color: var(--error);
}

.form-error a {
	text-decoration: underline;
}

.form-submit {
	width: 100%;
	justify-content: center;
	font-size: 1rem;
	padding: 16px;
	margin-top: 4px;
}

.recaptcha-note {
	text-align: right;
	font-size: 0.7rem;
	line-height: 1.5;
	color: rgba(255, 255, 255, 0.35);
}

.recaptcha-note a {
	color: inherit;
	text-decoration: underline;
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
