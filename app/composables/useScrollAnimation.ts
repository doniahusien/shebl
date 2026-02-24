export const useScrollAnimation = () => {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('animate-on-scroll')
          // Optional: stop observing to avoid retriggering
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Observe all elements with data-scroll attribute
    const elements = document.querySelectorAll('[data-scroll]')
    elements.forEach((el) => observer.observe(el))

    onUnmounted(() => {
      elements.forEach((el) => observer.unobserve(el))
    })
  })
}
