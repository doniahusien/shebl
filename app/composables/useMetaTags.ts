export const useMetaTags = () => {
  const { locale, t } = useI18n()
  
  // جعل الـ meta tags تفاعلية (reactive)
  const metaTags = computed(() => {
    const currentLang = locale.value || 'ar'
    
    return {
      // Basic Meta Tags
      title: t('seo.title'),
      titleTemplate: t('seo.titleTemplate'),
      htmlAttrs: {
        lang: currentLang,
        dir: currentLang === 'ar' ? 'rtl' : 'ltr',
        developer: 'Ahmed Niazy'
      },
      meta: [
        // Essential Meta Tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // SEO Meta Tags
        { name: 'description', content: t('seo.description') },
        { name: 'keywords', content: t('seo.keywords') },
        { name: 'author', content: t('seo.author') },
        { name: 'application-name', content: t('seo.applicationName') },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: t('seo.title') },
        { property: 'og:description', content: t('seo.ogDescription') },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: currentLang },
        { property: 'og:site_name', content: t('seo.siteName') },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@kfcris' },
        { name: 'twitter:creator', content: '@kfcris' },
        { name: 'twitter:title', content: t('seo.title') },
        { name: 'twitter:description', content: t('seo.twitterDescription') },
        
        // Performance & Security
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content: '#1e3a8a' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: t('seo.applicationName') },
        
        // Additional Performance
        { name: 'format-detection', content: 'telephone=no, date=no, address=no, email=no' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'mobile-web-app-capable', content: 'yes' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './logo.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    }
  })

  return {
    metaTags
  }
} 