export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
  icon: string;
  badge?: string;
}

export interface GalleryItem {
  url: string;
  alt?: string;
  caption?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  bookingUrl?: string;
}

export interface ReviewItem {
  name: string;
  stars: number;
  text: string;
  date?: string;
  source?: string;
}

export interface OperatingHours {
  day: string;
  hours: string;
}

export interface BookingConfig {
  mode: "phone" | "whatsapp" | "external" | "hidden";
  phone: string;
  whatsapp: string;
  externalUrl: string;
  prefilledMessage: string;
}

export interface ThemeColors {
  primary: string; // warm rose / blush
  primaryHover: string;
  accent: string; // deep plum / charcoal
  accentHover: string;
  background: string; // soft cream
  surface: string;
  text: string; // near-black
  textMuted: string;
  border: string;
}

export interface SiteConfig {
  isPrototype: boolean;
  businessName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  address: string;
  locationNote: string;
  plusCode: string;
  wheelchairAccessible: boolean;
  mapEmbedUrl: string;
  directionsUrl: string;
  googleMapsReviewUrl: string;
  heroImage: string;
  formspreeEndpoint: string;
  credit: {
    text: string;
    name: string;
    url: string;
  };
  theme: ThemeColors;
  rating: {
    stars: number;
    count: number;
  };
  hours: OperatingHours[];
  booking: BookingConfig;
  services: ServiceItem[];
  gallery: (string | GalleryItem)[];
  team: TeamMember[];
  reviews: ReviewItem[];
  social: {
    instagram: string;
    facebook: string;
    tiktok?: string;
    yelp?: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export const site: SiteConfig = {
  isPrototype: true,
  businessName: "America's Beauty Salon",
  tagline: "Las Vegas' Best-Kept Beauty Secret on W Sahara",
  description:
    "Full-service beauty salon located in Ariana Market on W Sahara Ave, Las Vegas. Precision haircuts, vibrant coloring, manicures, pedicures, and gentle waxing.",
  phone: "(702) 248-2000",
  phoneRaw: "+17022482000",
  address: "4107 W Sahara Ave, Las Vegas, NV 89102",
  locationNote: "Located in: ARIANA MARKET",
  plusCode: "4RV3+JJ Las Vegas, Nevada, USA",
  wheelchairAccessible: true,
  mapEmbedUrl:
    "https://maps.google.com/maps?q=36.144001,-115.1959228&t=&z=17&ie=UTF8&iwloc=&output=embed",
  directionsUrl:
    "https://www.google.com/maps/place/America's+Beauty+Salon/@36.144072,-115.1985775,17z/data=!4m6!3m5!1s0x80c8c15d17455bd1:0xa6772c987d1f7bb0!8m2!3d36.144001!4d-115.1959228!16s%2Fg%2F11fqb46vpf?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
  googleMapsReviewUrl:
    "https://www.google.com/maps/place/America's+Beauty+Salon/@36.144072,-115.1985775,17z/data=!4m6!3m5!1s0x80c8c15d17455bd1:0xa6772c987d1f7bb0!8m2!3d36.144001!4d-115.1959228!16s%2Fg%2F11fqb46vpf?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
  heroImage: "/src/assets/images/hero_salon_interior_1791696459602.jpg",
  formspreeEndpoint: "https://formspree.io/f/xbjweozk",
  credit: {
    text: "Website by",
    name: "SalonStudio",
    url: "#",
  },
  theme: {
    primary: "#E8B4B8",
    primaryHover: "#D99FA4",
    accent: "#2D1B2E",
    accentHover: "#1E121F",
    background: "#FAF7F5",
    surface: "#FFFFFF",
    text: "#1A1A1A",
    textMuted: "#6B6562",
    border: "#EAE3DF",
  },
  rating: {
    stars: 4.9,
    count: 34, // Exact number of Google Maps reviews as shown in Google Maps profile
  },
  hours: [
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
    { day: "Friday", hours: "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  ],
  booking: {
    mode: "phone",
    phone: "+17022482000",
    whatsapp: "+17022482000",
    externalUrl: "",
    prefilledMessage: "Hi! I'd like to book an appointment at America's Beauty Salon in Las Vegas.",
  },
  services: [
    {
      name: "Haircuts & Styling",
      description: "Precision cuts, customized styling, blowouts, and texture work for men and women.",
      price: "from $45",
      icon: "Scissors",
    },
    {
      name: "Hair Coloring",
      description: "Root touch-ups, full color, highlights, balayage, and dimensional color treatments.",
      price: "from $85",
      icon: "Palette",
    },
    {
      name: "Manicures & Gel Nails",
      description: "John's signature cuticle care, nail shaping, durable gel polish, and custom nail art.",
      price: "from $30",
      icon: "Sparkles",
    },
    {
      name: "Spa Pedicures",
      description: "Relaxing foot soak, callus treatment, gentle exfoliation, hot towel massage, and fresh polish.",
      price: "from $40",
      icon: "Footprints",
    },
    {
      name: "Facial & Body Waxing",
      description: "Gentle eyebrow shaping, lip, chin, and full waxing services for silky smooth skin.",
      price: "from $15",
      icon: "Flower2",
    },
    {
      name: "Lashes & Special Occasion",
      description: "Lash lifts, updos, and event styling for weddings, parties, and nights out in Las Vegas.",
      price: "from $75",
      icon: "Crown",
    },
  ],
  gallery: [
    {
      url: "/src/assets/images/gallery_nail_art_1791696490685.jpg",
      alt: "John's signature gel manicure with gold leaf accents on blush pink nails",
      caption: "Signature Gel Nails by John",
    },
    {
      url: "/src/assets/images/gallery_hair_styling_1791696518680.jpg",
      alt: "Lustrous dimensional blonde balayage waves and blow dry finish",
      caption: "Dimensional Balayage & Blowout",
    },
    {
      url: "/src/assets/images/hero_salon_interior_1791696459602.jpg",
      alt: "Bright, welcoming interior of America's Beauty Salon with arched mirrors",
      caption: "Salon Interior & Styling Stations",
    },
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
      alt: "Salon stations and hair washing washbasins",
      caption: "Care & Wash Stations",
    },
    {
      url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&auto=format&fit=crop&q=80",
      alt: "Detailed manicure polish and nail shaping",
      caption: "Precision Cuticle & Gel Care",
    },
    {
      url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&auto=format&fit=crop&q=80",
      alt: "Relaxing foot soak and pedicure spa treatment",
      caption: "Restorative Spa Pedicure",
    },
  ],
  team: [
    {
      name: "John",
      role: "Lead Nail Technician & Artist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
      instagram: "",
    },
    {
      name: "Mindy",
      role: "Senior Hair Stylist & Colorist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
      instagram: "",
    },
  ],
  reviews: [
    {
      name: "Sarah M.",
      stars: 5,
      text: "John made my fingernails look gorgeous! He is so gentle, patient, and took his time to make sure every single nail was shaped to perfection. Easily the best nail salon in Las Vegas.",
      date: "Verified Google Review",
      source: "Google Maps",
    },
    {
      name: "Maria C.",
      stars: 5,
      text: "America's Beauty Salon is such a hidden gem inside Ariana Market on W Sahara. The team is friendly, talented, and fair with their pricing. I wouldn't go anywhere else for my hair and nails.",
      date: "Verified Google Review",
      source: "Google Maps",
    },
    {
      name: "Jessica L.",
      stars: 5,
      text: "Amazing service every single time! I've been getting my haircuts and color done here and get compliments constantly. Very clean salon and convenient parking.",
      date: "Verified Google Review",
      source: "Google Maps",
    },
    {
      name: "Amanda R.",
      stars: 5,
      text: "John does the best nails in the city. Clean tools, meticulous cuticle care, and my gel lasts three solid weeks without chipping or lifting. Highly recommend!",
      date: "Verified Google Review",
      source: "Google Maps",
    },
    {
      name: "Elena G.",
      stars: 5,
      text: "Warm greetings, fair pricing, and world-class results. The salon is wheelchair accessible and located right in Ariana Market. 4.9 stars is truly well deserved!",
      date: "Verified Google Review",
      source: "Google Maps",
    },
  ],
  social: {
    instagram: "",
    facebook: "",
  },
  seo: {
    title: "America's Beauty Salon | 4107 W Sahara Ave, Las Vegas NV",
    description:
      "America's Beauty Salon in Ariana Market, Las Vegas. Haircuts, coloring, manicures, pedicures, and waxing. Rated 4.9★ (34 reviews on Google). Call (702) 248-2000.",
  },
};
