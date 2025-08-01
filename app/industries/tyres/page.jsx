'use client';

import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

// Overview cards data
const overviewCards = [
  {
    title: "Performance Materials",
    description: "Advanced compounds engineered for specific tire performance characteristics. Beyond basic—materials that define premium tire behavior."
  },
  {
    title: "Consistent Quality",
    description: "Ultra-consistent raw materials with batch-to-batch uniformity. Eliminating variables from your tire manufacturing for predictable results."
  },
  {
    title: "Technical Partnership",
    description: "Rubber specialists who understand compound dynamics at molecular level. We solve performance issues, not just supply ingredients."
  },
  {
    title: "Supply Reliability",
    description: "Multi-source network ensuring uninterrupted material availability. Your production schedule remains intact regardless of market disruptions."
  }
];

// Industry challenges data
const challengeCards = [
  {
    title: "Performance Balance",
    description: "Advanced materials that optimize competing tire properties. Better grip without sacrificing wear, lower rolling resistance without compromising safety."
  },
  {
    title: "Sustainable Production",
    description: "Eco-conscious materials aligned with carbon reduction targets. Meeting tomorrow's environmental standards while enhancing today's performance."
  },
  {
    title: "Cost Optimization",
    description: "Premium materials that improve manufacturing efficiency. Better mixing, faster curing, fewer defects—economics that drive profitability."
  },
  {
    title: "Material Innovation",
    description: "Next-generation compounds for evolving tire requirements. Staying ahead of electric vehicle demands and autonomous driving specifications."
  }
];

// Product data for tyres industry materials
const tyresMaterials = [
  {
    title: "Natural Rubber",
    description: "Premium-grade natural polymers with controlled impurity levels and consistent molecular weight, the foundation of high-performance tire treads.",
    image: "https://images.unsplash.com/photo-1599709856828-7e3499eeef11?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Synthetic Rubber",
    description: "Advanced polymer formulations including SBR, BR, and EPDM with precise specifications for optimal tire performance characteristics.",
    image: "https://images.unsplash.com/photo-1589982334414-c79c022d66e1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Carbon Black",
    description: "High-performance reinforcing fillers with controlled particle size, structure, and surface chemistry for optimal tire strength and wear resistance.",
    image: "https://images.unsplash.com/photo-1598970434795-0c5fe7c91c89?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Silica",
    description: "Engineered precipitated silica designed specifically for low rolling resistance tire compounds while maintaining excellent wet grip performance.",
    image: "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Processing Oils",
    description: "Specialized plasticizers and extender oils that improve processing characteristics while meeting strict environmental and performance requirements.",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Specialty Chemicals",
    description: "Advanced vulcanization agents, accelerators, and antidegradants that optimize curing profiles and provide long-term tire durability.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Steel Cord",
    description: "High-tensile steel reinforcement with precise diameter control and advanced brass coating for optimal rubber adhesion in tire belts.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Textile Reinforcement",
    description: "Engineered polyester, nylon, and aramid fabrics with controlled tensile properties and optimized adhesion characteristics for tire carcass construction.",
    image: "https://images.unsplash.com/photo-1620208923217-62e0f24f0277?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function TyresIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Tyres Industry"
      subtitle="Supplying premium raw materials for tire manufacturing with exceptional consistency and technical expertise."
      backgroundImage="https://assets.lummi.ai/assets/QmeNHGPHEyi8Sjx25eaEwUE9JU3Ko2fZ3EWCpDfz6qd54E?auto=format&w=1500"
      sideText="TYRES INDUSTRY"
      overviewData={{
        subtitle: "Empowering tire innovation with precision-engineered materials and compound expertise",
        cards: overviewCards
      }}
      challengesData={{
        subtitle: "Solving the critical challenges in modern tire manufacturing",
        cards: challengeCards
      }}
      materialsData={{
        title: "Key Materials for Tire Manufacturing",
        subtitle: "Premium quality raw materials essential for superior tire performance",
        products: tyresMaterials
      }}
      successStoriesData={{
        subtitle: "Real results from our partnerships with leading tire manufacturers worldwide"
      }}
      showSuccessStories={true}
    />
  );
} 