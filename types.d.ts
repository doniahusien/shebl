
export {}

declare global {
  interface BannerFeature {
    id: number
    title: string
    icon?: string
  }

  interface BannerData {
    title: string
    description: string
    image: string
    features?: BannerFeature[]
  }

  interface SectionBase {
    id: number
    type: string
    title?: string
    content?: string
    image?: string
  }

  interface AboutSection extends SectionBase {
    type: 'about'
  }

  interface WhyUsSection extends SectionBase {
    type: 'why_us'
  }

  interface ServicesSection extends SectionBase {
    type: 'our_services'
    features?: string[]
  }

  interface FAQSection extends SectionBase {
    type: 'faq'
    questions?: { q: string; a: string }[]
  }

  interface ContactInfoSection extends SectionBase {
    type: 'contact_info'
    address?: string
    phone?: string
    email?: string
  }

  interface HomeResponse {
    banner: BannerData
    sections: (
      | AboutSection
      | WhyUsSection
      | ServicesSection
      | FAQSection
      | ContactInfoSection
    )[]
    faq?: FAQSection[]
  }
  interface FAQResponse {
    banner: BannerData
    faq: {
      id: number
      question: string
      answer: string
    }[]
  }
  interface ContactResponse {
  banner: BannerData
  info: {
    address?: string
    phone?: string
    email?: string
    map_url?: string
  }
}
interface ServicesResponse {
  banner: BannerData
  our_services: {
    id: number
    title: string
    description?: string
    icon?: string
    image?: string
    features?: string[]
  }[]
}

  interface ApiResponse<T> {
    data: T
    success: boolean
    message?: string
  }
}
