window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
