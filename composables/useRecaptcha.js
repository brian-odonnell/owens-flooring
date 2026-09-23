let scriptPromise = null

function loadRecaptchaScript() {
	if (scriptPromise) return scriptPromise
	scriptPromise = new Promise((resolve) => {
		if (window.grecaptcha?.execute) {
			resolve(window.grecaptcha)
			return
		}
		window.__onRecaptchaLoad = () => resolve(window.grecaptcha)
		const script = document.createElement('script')
		script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=__onRecaptchaLoad`
		script.async = true
		script.defer = true
		document.head.appendChild(script)
	})
	return scriptPromise
}

export function useRecaptcha() {
	async function getToken(action = 'submit') {
		const grecaptcha = await loadRecaptchaScript()
		return new Promise((resolve, reject) => {
			grecaptcha.ready(() => {
				grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve).catch(reject)
			})
		})
	}

	return { getToken }
}
