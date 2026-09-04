<template>
	<footer class="footer">
		<div class="footer-inner">
			<div class="footer-top">
				<!-- Brand -->
				<div class="footer-brand">
					<a href="#hero" class="footer-logo">
						<LogoSvg aria-label="Owens Flooring Logo" />
					</a>
					<p class="footer-tagline">
						Professional commercial flooring installation for offices, retail, industrial, and hospitality spaces.
					</p>
					<a href="tel:+14402691112" class="footer-phone">(440) 269-1112</a>
				</div>

				<!-- Contact -->
				<div class="footer-nav-group">
					<h4 class="footer-heading">Contact</h4>
					<ul class="footer-links contact-list">
						<li>
							<a href="tel:+14402691112">(440) 269-1112</a>
						</li>
						<li>
							<a href="mailto:contact@owensflooring.net">contact@owensflooring.net</a>
						</li>
						<li>38270 Airport Pkwy<br>Willoughby, OH 44094</li>
						<li>Mon&ndash;Fri: 9:00AM&ndash;5:00PM</li>
					</ul>
				</div>
			</div>

			<div class="footer-bottom">
				<p class="footer-copy">&copy; {{ year }} Owens Flooring Co. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
import LogoSvg from './LogoSvg.vue'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
	background: var(--navy-900);
	color: var(--sky-50);
	padding: 72px 32px 32px;
	border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-inner {
	max-width: 1280px;
	margin: 0 auto;
}

.footer-top {
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 48px;
	padding-bottom: 56px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

/* Brand column */
.footer-logo {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 20px;

	div {
		width: 200px;
		height: 42px;
	}

	&:hover div {
		--logo-fill: var(--sky);
	}
}

.logo-mark {
	width: 36px;
	height: 36px;
	background: var(--sky);
	color: var(--sky-50);
	font-family: var(--font-display);
	font-weight: 800;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px));
	flex-shrink: 0;
}

.logo-text {
	display: flex;
	flex-direction: column;
	line-height: 1.1;
}

.logo-name {
	font-family: var(--font-display);
	font-weight: 800;
	font-size: 1.1rem;
	letter-spacing: 0.05em;
	color: var(--sky-50);
	text-transform: uppercase;
}

.logo-sub {
	font-family: var(--font-display);
	font-size: 1rem;
	letter-spacing: 0.15em;
	color: rgba(255, 255, 255, 0.4);
	text-transform: uppercase;
}

.footer-tagline {
	font-size: 1rem;
	line-height: 1.6;
	max-width: 280px;
	margin-bottom: 20px;
}

.footer-phone {
	font-family: var(--font-display);
	font-size: 1.1rem;
	font-weight: 700;
	color: var(--marigold);
	letter-spacing: 0.05em;
	transition: color 0.2s;
}

.footer-phone:hover {
	color: var(--sky-50);
}

/* Nav groups */
.footer-heading {
	font-family: var(--font-display);
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: var(--sky-50);
	margin-bottom: 20px;
}

.footer-links {
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.footer-links li {
	font-size: 1rem;
	line-height: 1.4;
}

.footer-links a {
	color: var(--sky-50);
	transition: color 0.2s;
	text-decoration: underline;
}

.footer-links a:hover {
	color: var(--sky);
	text-decoration: none;
	transition: .2s ease all;
}

/* Bottom bar */
.footer-bottom {
	padding-top: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
}

.footer-copy {
	font-family: var(--font-display);
	font-size: 1rem;
	letter-spacing: 0.08em;
	color: var(--slate);
}

@media (max-width: 1024px) {
	.footer-top {
		grid-template-columns: 1fr 1fr;
	}

	.footer-brand {
		grid-column: span 2;
	}
}

@media (max-width: 600px) {
	.footer-top {
		grid-template-columns: 1fr;
	}

	.footer-brand {
		grid-column: span 1;
	}

	.footer {
		padding: 48px 24px 28px;
	}
}
</style>
