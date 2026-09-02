<template>
	<section id="installers" class="installers">
		<div class="installers-inner">
			<div class="installers-text">
				<p class="section-label">Join Our Team</p>
				<h2 class="section-title installers-title">Looking for Installer Work?</h2>
				<p class="installers-sub">
					We're always looking to connect with skilled union installers for upcoming projects.
					Tell us about yourself and we'll be in touch.
				</p>
			</div>
			<button type="button" class="btn-primary" @click="isOpen = true">Apply as an Installer</button>
		</div>
	</section>
</template>

<script setup>
const isOpen = useState('installerModalOpen', () => false)
</script>

<style scoped>
.installers {
	padding: 64px 32px;
	background: var(--coal);
}

.installers-inner {
	max-width: 1280px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 32px;
}

.installers-title {
	font-size: clamp(1.5rem, 2.5vw, 2.1rem);
	color: #fff;
	margin: 10px 0 12px;
}

.installers-sub {
	color: rgba(255, 255, 255, 0.6);
	font-size: 0.95rem;
	max-width: 520px;
}

.installers-inner .btn-primary {
	flex-shrink: 0;
}

@media (max-width: 800px) {
	.installers-inner {
		flex-direction: column;
		align-items: flex-start;
	}
}

@media (max-width: 600px) {
	.installers {
		padding: 48px 24px;
	}
}
</style>
