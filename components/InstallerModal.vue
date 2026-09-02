<template>
	<Teleport to="body">
		<Transition name="modal-fade">
			<div v-if="isOpen" class="installer-modal-overlay" @click.self="close">
				<div class="installer-modal" role="dialog" aria-modal="true" aria-labelledby="installer-modal-title">
					<button type="button" class="modal-close" aria-label="Close" @click="close">&times;</button>

					<p class="section-label">Join Our Team</p>
					<h3 id="installer-modal-title" class="modal-title">Installer Interest Form</h3>
					<p class="modal-sub">
						Tell us a bit about your experience and we'll reach out when we have work that fits.
					</p>

					<form class="installer-form" action="https://formspree.io/f/YOUR_INSTALLER_FORM_ID" method="POST"
						@submit.prevent="handleSubmit">
						<div class="form-row">
							<div class="form-field">
								<label for="installer-name">Full Name *</label>
								<input id="installer-name" v-model="form.name" name="name" type="text"
									placeholder="Jane Smith" required />
							</div>
							<div class="form-field">
								<label for="installer-phone">Phone *</label>
								<input id="installer-phone" v-model="form.phone" name="phone" type="tel"
									placeholder="(555) 000-0000" required />
							</div>
						</div>

						<div class="form-field">
							<label for="installer-email">Email *</label>
							<input id="installer-email" v-model="form.email" name="email" type="email"
								placeholder="jane@example.com" required />
						</div>

						<div class="form-row">
							<div class="form-field">
								<label for="installer-trade">Trade / Specialty</label>
								<select id="installer-trade" v-model="form.trade" name="trade">
									<option value="">Select a trade…</option>
									<option>Carpet</option>
									<option>Resilient (VCT, LVT, Vinyl)</option>
									<option>Ceramic / Tile</option>
									<option>Wood / Hardwood</option>
									<option>Substrate Prep</option>
									<option>General Labor</option>
									<option>Other</option>
								</select>
							</div>
							<div class="form-field">
								<label for="installer-experience">Years of Experience</label>
								<input id="installer-experience" v-model="form.experience" name="experience"
									type="text" placeholder="e.g. 5 years" />
							</div>
						</div>

						<div class="form-field">
							<label for="installer-union">Union Member?</label>
							<select id="installer-union" v-model="form.union" name="union">
								<option value="">Select an option…</option>
								<option>Yes</option>
								<option>No</option>
								<option>Applying / In Process</option>
							</select>
						</div>

						<div class="form-field">
							<label for="installer-message">Additional Info</label>
							<textarea id="installer-message" v-model="form.message" name="message" rows="4"
								placeholder="Availability, certifications, referrals, etc."></textarea>
						</div>

						<p v-if="submitError" class="form-error">
							Something went wrong submitting your info. Please try again or call us directly.
						</p>

						<button type="submit" class="btn-primary form-submit" :disabled="submitted">
							<span v-if="!submitted">Submit Interest</span>
							<span v-else>✓ Submitted!</span>
						</button>
					</form>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
const isOpen = useState('installerModalOpen', () => false)

const form = reactive({
	name: '',
	phone: '',
	email: '',
	trade: '',
	experience: '',
	union: '',
	message: ''
})

const submitted = ref(false)
const submitError = ref(false)

function close() {
	isOpen.value = false
}

// Update the form's `action` attribute above with your real Formspree endpoint.
async function handleSubmit(event) {
	submitError.value = false
	try {
		const res = await fetch(event.target.action, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
			body: JSON.stringify(form)
		})
		submitted.value = res.ok
		submitError.value = !res.ok
	} catch {
		submitError.value = true
	}
}

function handleKeydown(e) {
	if (e.key === 'Escape') close()
}

watch(isOpen, (open) => {
	document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
	window.removeEventListener('keydown', handleKeydown)
	document.body.style.overflow = ''
})
</script>

<style scoped>
.installer-modal-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
	z-index: 1000;
}

.installer-modal {
	position: relative;
	width: 100%;
	max-width: 560px;
	max-height: calc(100vh - 48px);
	overflow-y: auto;
	background: var(--bark);
	color: #fff;
	border: 1px solid rgba(255, 255, 255, 0.08);
	padding: 48px;
}

.modal-close {
	position: absolute;
	top: 16px;
	right: 16px;
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.7);
	font-size: 1.6rem;
	line-height: 1;
	cursor: pointer;
	transition: color 0.2s;
}

.modal-close:hover {
	color: #fff;
}

.modal-title {
	font-family: var(--font-display);
	font-weight: 800;
	font-size: clamp(1.5rem, 3vw, 2rem);
	color: #fff;
	margin: 10px 0 14px;
}

.modal-sub {
	color: rgba(255, 255, 255, 0.6);
	font-size: 0.92rem;
	margin-bottom: 28px;
}

.installer-form {
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
	min-height: 90px;
}

.form-error {
	color: #ff8a8a;
	font-size: 0.85rem;
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

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
	opacity: 0;
}

@media (max-width: 600px) {
	.installer-modal {
		padding: 32px 24px;
	}

	.form-row {
		grid-template-columns: 1fr;
	}
}
</style>
