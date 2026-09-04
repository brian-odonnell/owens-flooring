<template>
	<header class="nav-wrap" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
		<div class="nav-inner">
			<!-- Logo -->
			<a href="#hero" class="nav-logo" @click="menuOpen = false">
				<LogoSvg class="nav-logo-svg" aria-label="Owens Flooring Logo" />
			</a>

			<!-- Desktop nav links -->
			<nav class="nav-links">
				<a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">
					{{ link.label }}
				</a>
			</nav>

			<!-- Phone + CTA -->
			<div class="nav-right">
				<a href="tel:+14402691112" class="nav-phone">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
						stroke-linecap="round" stroke-linejoin="round">
						<path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
					</svg>
					(440) 269-1112
				</a>
				<a href="#contact" class="btn-primary">Contact Us</a>
			</div>

			<!-- Hamburger -->
			<button class="nav-hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen"
				aria-label="Toggle menu">
				<span></span><span></span><span></span>
			</button>
		</div>

		<!-- Mobile menu -->
		<div class="mobile-menu" :class="{ open: menuOpen }">
			<a v-for="link in navLinks" :key="link.href" :href="link.href" class="mobile-link"
				@click="menuOpen = false">
				{{ link.label }}
			</a>
			<a href="tel:+14402691112" class="mobile-phone">(440) 269-1112</a>
			<a href="#contact" class="btn-primary mobile-cta" @click="menuOpen = false">Contact Us</a>
		</div>
	</header>
</template>

<script setup>
import LogoSvg from './LogoSvg.vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
	{ label: 'Services', href: '#services' },
	{ label: 'About', href: '#about' },
	{ label: 'Installers', href: '#installers' },
]

onMounted(() => {
	window.addEventListener('scroll', () => {
		isScrolled.value = window.scrollY > 40
	})
})

watch(menuOpen, (open) => {
	document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<style scoped>
.nav-wrap {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	transition: background 0.3s, box-shadow 0.3s;
}

.nav-wrap.scrolled {
	background: var(--navy-900);
	box-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
}

.nav-inner {
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 32px;
	height: var(--nav-height);
	display: flex;
	align-items: center;
	gap: 48px;
}

/* Logo */
.nav-logo {
	display: flex;
	align-items: center;
	gap: 12px;
	flex-shrink: 0;

	&:hover {
		.nav-logo-svg {
			--logo-fill: var(--sky);
		}
	}
}

.nav-logo-svg {
	/* width: 160px; */
	height: 40px;
}

.logo-mark {
	width: 40px;
	height: 40px;
	background: var(--sky);
	color: var(--sky-50);
	font-family: var(--font-display);
	font-weight: 800;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
}

.logo-text {
	display: flex;
	flex-direction: column;
	line-height: 1.1;
}

.logo-name {
	font-family: var(--font-display);
	font-weight: 800;
	font-size: 1.2rem;
	letter-spacing: 0.05em;
	color: var(--sky-50);
	text-transform: uppercase;
}

.logo-sub {
	font-family: var(--font-display);
	font-size: 1rem;
	letter-spacing: 0.15em;
	color: var(--sky);
	text-transform: uppercase;
}

/* Nav links */
.nav-links {
	display: flex;
	gap: 32px;
	margin-left: auto;
}

.nav-link {
	font-family: var(--font-display);
	font-weight: 600;
	font-size: 1rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--sky-50);
	transition: color 0.2s;
	position: relative;
}

.nav-link::after {
	content: '';
	position: absolute;
	bottom: -4px;
	left: 0;
	width: 0;
	height: 2px;
	background: var(--sky);
	transition: width 0.2s;
}

.nav-link:hover::after {
	width: 100%;
}

/* Right side */
.nav-right {
	display: flex;
	align-items: center;
	gap: 20px;
	flex-shrink: 0;
}

.nav-phone {
	display: flex;
	align-items: center;
	gap: 7px;
	font-family: var(--font-display);
	font-weight: 600;
	font-size: 1rem;
	letter-spacing: 0.05em;
	color: var(--marigold);
	transition: color 0.2s;
}

.nav-phone:hover {
	color: var(--sky-50);
}

/* Hamburger */
.nav-hamburger {
	display: none;
	flex-direction: column;
	gap: 5px;
	background: none;
	border: none;
	cursor: pointer;
	padding: 4px;
	margin-left: auto;
}

.nav-hamburger span {
	display: block;
	width: 26px;
	height: 2px;
	background: var(--sky-50);
	transition: transform 0.25s, opacity 0.25s;
}

.nav-hamburger.active span:nth-child(1) {
	transform: translateY(7px) rotate(45deg);
}

.nav-hamburger.active span:nth-child(2) {
	opacity: 0;
}

.nav-hamburger.active span:nth-child(3) {
	transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
	display: none;
	flex-direction: column;
	gap: 4px;
	position: fixed;
	top: var(--nav-height);
	left: 0;
	right: 0;
	bottom: 0;
	background: var(--navy-900);
	padding: 16px 24px 24px;
	overflow-y: auto;
	opacity: 0;
	visibility: hidden;
	transform: translateY(-8px);
	transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
}

.mobile-menu.open {
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}

.mobile-link {
	font-family: var(--font-display);
	font-weight: 600;
	font-size: 1.1rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.8);
	padding: 10px 0;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-phone {
	font-family: var(--font-display);
	font-size: 1.1rem;
	font-weight: 600;
	color: var(--sky);
	padding: 10px 0;
}

.mobile-cta {
	margin-top: 12px;
	text-align: center;
}

@media (max-width: 900px) {

	.nav-links,
	.nav-right {
		display: none;
	}

	.nav-hamburger {
		display: flex;
	}

	.mobile-menu {
		display: flex;
	}

	.nav-wrap.menu-open {
		background: var(--navy-900);
	}
}
</style>
