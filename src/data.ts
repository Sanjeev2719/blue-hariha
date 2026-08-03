import { Service, Project, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'residential',
    title: 'Turnkey Residential Construction',
    description: 'Bespoke residential estates and custom family villas built with extreme block work precision, backed by our 10-Year Promise and 1024 Quality Checks.',
    longDescription: 'We build high-performance custom homes and villas that seamlessly blend contemporary architecture with organic materials. From deep structural planning to initial foundation pours, hydraulic block masonry, and final premium woodwork, our master builders supervise every millimeter. All projects undergo exactly 1024 rigorous quality checks before handover.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '10-Year Structural Promise & Post-Handover Warranty',
      '1024 Quality Checks executed by certified structural engineers',
      'Solid concrete block and hydraulic block masonry options',
      'Custom Burma Teak doors, Mysore Honne frames, and UPVC windows',
      'Complete site sanitary, plumbing, and electrical setups'
    ],
    timeline: '12 Months (G+3 Guarantee)',
    scope: 'Premium Turnkey Villas'
  },
  {
    id: 'interiors',
    title: 'Bespoke Home Interiors',
    description: 'Luxury interior architecture, custom-built modular kitchens, elegant pooja rooms, and premium wardrobes with flawless finishes.',
    longDescription: 'Elevate your built space with custom woodwork, high-end false ceilings, modular luxury kitchens, and sophisticated lighting layouts. We execute your interior design using premium materials like Burma Teak, Ghana Honne, and marine-grade plywood matching your personal aesthetic.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Bespoke TV Cabinets, false ceilings, and ambient lighting layouts',
      'Teak and Glass Pooja Room doors with basic or detailed carvings',
      'High-traffic modular kitchen design with hydraulic hardware',
      'Custom luxury wardrobes and detailed wooden wall panelling'
    ],
    timeline: '2 - 3 Months',
    scope: 'Premium Woodwork & Aesthetics'
  },
  {
    id: 'renovation',
    title: 'Luxury Renovation & Structural Preservation',
    description: 'Bespoke structural upgrades, high-end retrofits, damp-proofing, and premium aesthetic preservation for existing homes.',
    longDescription: 'Hariha Infra offers advanced civil renovation services. We handle structural column reinforcements, comprehensive damp-proofing course treatments, internal space re-planning, and complete tile-to-marble flooring upgrades.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Deep structural retrofitting and crack repair treatments',
      'Advanced waterproofing seals & complete damp-proofing layouts',
      'Flooring upgrades (Vitrified Tiles, Granite, or Italian Marble)',
      'Plumbing, waterline rerouting, and premium sanitary replacement'
    ],
    timeline: '3 - 6 Months',
    scope: 'Restoration & Modernization'
  },
  {
    id: 'architectural',
    title: 'Architectural Design & Plan Advisory',
    description: 'Integrated pre-construction consulting, complete 2D layout drafting, 3D elevations, and spatial planning.',
    longDescription: 'We offer an integrated design-build approach where builders and draftsmen operate under one roof. Our high-fidelity 3D elevation walkthroughs, structural drawings, and plumbing/electrical maps prevent building errors and align budget reality from day one.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Interactive 2D Floor Plans and architectural drafting',
      'High-fidelity 3D Exterior Elevations and walkthroughs',
      'Structural drawing detailing and load calculations',
      'Plumbing, waterline, and electrical diagram layouts'
    ],
    timeline: '1 - 2 Months',
    scope: 'Planning & Layout Advisory'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'villa-1-ongoing',
    title: 'Villa 1 - Contemporary Luxury Estate',
    category: 'onsite',
    status: 'Ongoing Build Phase 3',
    description: 'An architectural villa combining open-concept spatial design, Italian waterfall marble surfaces, floating cantilevered staircases, and full-height folding glass facades.',
    image: '/villa1/V1 Outdoor.jpg',
    images: [
      '/villa1/V1 Outdoor.jpg',
      '/villa1/V1 Master Bedroom.jpg',
      '/villa1/V1 Kitchen.jpg',
      '/villa1/V1 Master Bathroom.jpg',
      '/villa1/V1 Dining.jpg',
      '/villa1/V1 Lounge.jpg',
      '/villa1/V1 Loggia - GF.jpg',
      '/villa1/V1 Bedroom 01 - GF.jpg',
      '/villa1/V1 bedroom 03 - FF.jpg',
      '/villa1/V1 Bathroom 04- FF.jpg',
      '/villa1/V1 Powder room - GF.jpg',
      '/villa1/Walk In Closet.jpg'
    ],
    location: 'Koramangala, Bengaluru',
    year: 'Ongoing (2026)',
    size: '6,200 sq. ft.',
    details: [
      'Open-concept living & dining hall with floating glass-railed cantilever staircase',
      'High-traffic luxury kitchen featuring waterfall Italian marble island & concealed pantry',
      'Master ensuite bath with warm travertine finishes, round feature window & rain shower',
      'Bespoke master suite with integrated warm LED light channels & teak herringbone flooring',
      'Full-height multi-fold glass doors creating seamless indoor-outdoor terrace flow'
    ],
    featured: true
  },
  {
    id: 'villa-2-ongoing',
    title: 'Villa 2 - Bespoke Modern Residence',
    category: 'onsite',
    status: 'Ongoing Build Phase 2',
    description: 'Striking contemporary villa integrating rich timber cladding, subterranean concrete sump, and high-ceiling open living quarters.',
    image: '/villa3/Outdoor.jpg',
    images: [
      '/villa3/Outdoor.jpg',
      '/villa3/Lounge.jpg',
      '/villa3/Kitchen.jpg',
      '/villa3/Kitchen 2.jpg',
      '/villa3/Master Bedroom.jpg',
      '/villa3/Master Bathroom.jpg',
      '/villa3/Walk In Closet.jpg'
    ],
    location: 'Indiranagar, Bengaluru',
    year: 'Ongoing (2026)',
    size: '5,400 sq. ft.',
    details: [
      'Custom timber-accented exterior wall cladding with concealed LED lighting channels',
      'Open-plan living space with seamless transition to private courtyard gardens',
      'Master ensuite with Italian travertine wall slabs & dual rain-head shower',
      'Bespoke walk-in wardrobe with automated interior sensor lighting'
    ],
    featured: true
  },
  {
    id: 'villa-3-ongoing',
    title: 'Villa 3 - Grand Luxury Mansion & Sanctuary',
    category: 'onsite',
    status: 'Ongoing Build Phase 4',
    description: 'A multi-wing architectural mansion featuring double-height entrance foyer, executive home office suite, private prayer room, and dedicated master & guest ensuite suites.',
    image: '/villa4/FINAL_ENTRANCE_AREA_CAM_01.jpg',
    images: [
      '/villa4/FINAL_ENTRANCE_AREA_CAM_01.jpg',
      '/villa4/FINAL_ENTRANCE_AREA_CAM_02.jpg',
      '/villa4/FINAL_ENTRANCE_AREA_CAM_03.jpg',
      '/villa4/FINAL_ENTRANCE_AREA_CAM_04.jpg',
      '/villa4/FINAL_ENTRANCE_AREA_CAM_05.jpg',
      '/villa4/GF LIVING ROOM & FF LIVING AREA CAM 01.jpg',
      '/villa4/GF LIVING ROOM & FF LIVING AREA CAM 02.jpg',
      '/villa4/FINAL_MASTER_BEDROOM_CAM_01.jpg',
      '/villa4/FINAL_MASTER_BEDROOM_CAM_02.jpg',
      '/villa4/FINAL_MASTER_BEDROOM_CAM_03.jpg',
      '/villa4/FINAL_MASTER_DRESSER_CAM_01.jpg',
      '/villa4/FINAL_MASTER_DRESSER_CAM_02.jpg',
      '/villa4/FINAL_OFFICE_ROOM_CAM_01.jpg',
      '/villa4/FINAL_OFFICE_ROOM_CAM_02.jpg',
      '/villa4/FINAL_ANAYAS_BEDROOM_CAM_01.jpg',
      '/villa4/FINAL_ANAYAS_BEDROOM_CAM_02.jpg',
      '/villa4/FINAL_ANAYAS_BEDROOM_CAM_03.jpg',
      '/villa4/FINAL_ANAYA_BATHROOM_CAM_01.jpg',
      '/villa4/FINAL_ANAYA_BATHROOM_CAM_02.jpg',
      '/villa4/FINAL_GUEST_BEDROOM_CAM_01.jpg',
      '/villa4/FINAL_GUEST_BEDROOM_CAM_02.jpg',
      '/villa4/FINAL_GUEST_BATHROOM_CAM_01.jpg',
      '/villa4/FINAL_GUEST_BATHROOM_CAM_02.jpg',
      '/villa4/FINAL_POWDER_WASH_AREA_CAM_01.jpg',
      '/villa4/FINAL_YOHAN_BATHROOM_CAM_01.jpg',
      '/villa4/FINAL_YOHAN_BATHROOM_CAM_02.jpg',
      '/villa4/PREYAR ROOM.jpg',
      '/villa4/YOOHAN BEDROOM CAM 01.jpg',
      '/villa4/YOOHAN BEDROOM CAM 02.jpg'
    ],
    location: 'Sadashivanagar, Bengaluru',
    year: 'Ongoing (2026)',
    size: '8,500 sq. ft.',
    details: [
      'Grand entrance foyer with marble-clad feature wall & double-height foyer ceiling',
      'Executive home office & study suite with integrated acoustical wall panelling',
      'Tranquil dedicated prayer sanctuary with custom brass & teak inlay work',
      'Comprehensive multi-bedroom layout including Anaya Suite, Yohan Suite & Guest Quarters',
      'Multi-car subterranean basement parking with reinforced concrete grade slab'
    ],
    featured: true
  },
  {
    id: 'live-site-1',
    title: 'Live Site 1 – Active Foundation & Rebar Works',
    category: 'onsite',
    status: 'Live Build Progress',
    video: '/live 1/IMG_9441.MOV',
    description: 'Real-time on-site execution logging footing pit excavation, rebar column cage shuttering, size-stone masonry, and concrete pouring.',
    image: '/live 1/IMG_9374.JPG',
    images: [
      '/live 1/IMG_9374.JPG',
      '/live 1/IMG_9582.JPG',
      '/live 1/IMG_9639.JPG',
      '/live 1/IMG_9640.JPG',
      '/live 1/IMG_9646.JPG',
      '/live 1/IMG_9657.JPG',
      '/live 1/IMG_9661.JPG',
      '/live 1/IMG_9708.JPG',
      '/live 1/IMG_9709.JPG',
      '/live 1/IMG_9726.JPG',
      '/live 1/IMG_9727.JPG',
      '/live 1/IMG_9728.JPG',
      '/live 1/IMG_9755.JPG'
    ],
    location: 'Sarjapur Site, Bengaluru',
    year: 'Live Phase 2 (2026)',
    size: '6,500 sq. ft.',
    details: [
      'Column rebar framing aligned against engineering center-line drawings',
      'Vertical timber formwork secured with high-tensile locking clamps',
      'Damp-proof DPC membrane application and subterranean sump plastering',
      'Live site video logs & 13-photo stage progress documentation'
    ],
    featured: true
  },
  {
    id: 'live-site-2',
    title: 'Live Site 2 – Superstructure & Block Masonry',
    category: 'onsite',
    status: 'Live Build Progress',
    description: 'On-site execution capturing solid block masonry wall layout, window sill lintel casting, rooftop slab waterproofing, and structural column alignment.',
    image: '/live 2/PHOTO-2026-07-14-12-48-43(1).jpg',
    images: [
      '/live 2/PHOTO-2026-07-14-12-48-43(1).jpg',
      '/live 2/PHOTO-2026-07-14-12-48-53.jpg',
      '/live 2/PHOTO-2026-07-14-12-48-54(2).jpg',
      '/live 2/PHOTO-2026-07-14-12-48-54.jpg',
      '/live 2/PHOTO-2026-07-14-12-48-55.jpg',
      '/live 2/PHOTO-2026-07-14-12-54-39.jpg',
      '/live 2/PHOTO-2026-07-14-12-54-40.jpg',
      '/live 2/PHOTO-2026-07-14-12-54-42(2).jpg',
      '/live 2/PHOTO-2026-07-14-12-54-42.jpg',
      '/live 2/PHOTO-2026-07-14-12-54-45.jpg',
      '/live 2/PHOTO-2026-07-14-12-54-47(1).jpg',
      '/live 2/PHOTO-2026-07-14-12-54-48(1).jpg',
      '/live 2/PHOTO-2026-07-14-12-54-48(2).jpg',
      '/live 2/PHOTO-2026-07-14-12-55-42(1).jpg',
      '/live 2/PHOTO-2026-07-14-12-55-43(1).jpg',
      '/live 2/PHOTO-2026-07-14-12-55-43(2).jpg',
      '/live 2/PHOTO-2026-07-14-12-55-43(4).jpg',
      '/live 2/PHOTO-2026-07-14-13-02-50(4).jpg'
    ],
    location: 'Whitefield Site, Bengaluru',
    year: 'Live Phase 3 (2026)',
    size: '5,800 sq. ft.',
    details: [
      'Solid concrete block masonry with strictly controlled 1:4 mortar ratio',
      'Grade slab M-25 concrete mix screed leveling and high-frequency compaction',
      'Laser level line alignment checks across all structural perimeter points',
      'Comprehensive 18-photo live on-site progress documentation'
    ],
    featured: true
  },
  {
    id: 'finished-villa-1',
    title: 'Koramangala Luxury Residence (Walkthrough Tour)',
    category: 'residential',
    status: 'Completed Masterpiece',
    video: '/finished1/Suri. mobile.mp4',
    description: 'A completed luxury turnkey villa featuring bespoke structural woodwork, Italian waterfall marble flooring, and double-height living spaces. Watch the full walkthrough tour.',
    image: '/villa1/V1 Outdoor.jpg',
    location: 'Koramangala, Bengaluru',
    year: '2025',
    size: '5,200 sq. ft.',
    details: [
      'Turnkey handover completed within 1-year timeline',
      'Burma Teak wood main door with artisan carvings',
      'Integrated smart lighting channels & floor-to-ceiling glass paneling',
      'Full 4K video walkthrough tour available'
    ],
    featured: true
  },
  {
    id: 'finished-villa-2',
    title: 'Indiranagar Modern Duplex Villa (Walkthrough Tour)',
    category: 'residential',
    status: 'Completed Masterpiece',
    video: '/finished2/VIDEO-2026-07-15-13-28-52(2).mp4',
    description: 'A finished contemporary duplex villa with custom marine-grade kitchen, Burma teak main entrance, and subterranean concrete sump. Experience the completed video tour.',
    image: '/villa3/Outdoor.jpg',
    location: 'Indiranagar, Bengaluru',
    year: '2025',
    size: '4,800 sq. ft.',
    details: [
      'Subterranean 10,000L concrete water storage sump',
      'Gourmet modular kitchen featuring quartz island counter',
      'Complete damp-proof course treatment across all basement walls',
      'Full 4K video walkthrough tour available'
    ],
    featured: true
  },
  {
    id: 'finished-villa-3',
    title: 'Sadashivanagar Architectural Sanctuary (Walkthrough Tour)',
    category: 'interiors',
    status: 'Completed Masterpiece',
    video: '/finished3/VIDEO-2026-07-15-13-24-04.mp4',
    description: 'Elite residential interior execution integrating automated false ceiling lighting channels, travertine master ensuite, and teak wood pooja room.',
    image: '/villa3/Outdoor.jpg',
    location: 'Sadashivanagar, Bengaluru',
    year: '2025',
    size: '6,000 sq. ft.',
    details: [
      'Italian marble flooring with warm LED lighting channels',
      'Custom modular kitchen with hydraulic soft-close cabinetry',
      'Master ensuite with Italian travertine wall slabs & dual rain-head shower',
      'Full 4K video walkthrough tour available'
    ],
    featured: true
  },
  {
    id: 'finished-villa-4',
    title: 'Jayanagar Grand Mansion & Estate (Walkthrough Tour)',
    category: 'residential',
    status: 'Completed Masterpiece',
    video: '/finished4/VIDEO-2026-07-15-13-28-52.mp4',
    description: 'Grand luxury multi-wing mansion with double-height entrance foyer, executive home office, and multi-car basement parking.',
    image: '/villa4/FINAL_ENTRANCE_AREA_CAM_01.jpg',
    location: 'Jayanagar, Bengaluru',
    year: '2025',
    size: '7,500 sq. ft.',
    details: [
      'Monolithic grade slab & column foundation network',
      'Executive home office & study suite with acoustical wall panelling',
      'Tranquil dedicated prayer sanctuary with custom brass & teak inlay work',
      'Full 4K video walkthrough tour available'
    ],
    featured: true
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Hegde',
    role: 'Principal Architect',
    company: 'Hegde & Associates',
    text: 'Working with Hariha Infra is an absolute pleasure. They adhere strictly to structural drawings, use high-quality materials like Sunvik steel and Ramco cement, and their block work is perfectly aligned.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: '2',
    name: 'Suhasini Murthy',
    role: 'Villa Owner',
    company: 'Sarjapur Project',
    text: 'They transformed our vacant plot into an absolute masterpiece. Their Classic package was highly transparent, and we did not pay a single rupee extra. The teak door and granite stairs are stunning!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: '3',
    name: 'Ketan Shah',
    role: 'Homeowner',
    company: 'HSR Layout Villa',
    text: 'Hariha Infra successfully completed our 3,200 sq. ft. villa with absolute professionalism. The concrete column work (M-25 mix), solid masonry, and teak doors are of peerless structural excellence.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export const COMPANY_CONTACTS = {
  phone: '+91 88926 08688',
  phoneAlt: '+91 99002 30585',
  email: 'nswamy.hariha@gmail.com',
  address: 'No. 119, RHCS Layout, Annapoorneshwari Nagar, Bengaluru - 560091',
  whatsappNumber: '917899039808', // Testing phone number 7899039808 with India country code
  whatsappText: 'Hello Hariha Infra! I am viewing your website and would like to schedule a consultation regarding your Construction Packages.'
};

export const PACKAGES_DATA = [
  {
    id: 'standard',
    name: 'Standard',
    rate: 1899,
    tagline: 'Quality Essential Construction',
    description: 'Reliable, structural-focused build tier utilizing solid blocks, ACC/Ramco cement, and standard vitrified tile finishes.',
    architecture: {
      floorPlan: '1 Option',
      elevation: '1 Option',
      interior: 'Extra @ Actuals',
      plumbingElec: 'Included',
      structural: 'Included'
    },
    structural: {
      blockWork: 'Solid Blocks',
      cementBrand: 'ACC / Ramco',
      steelBrand: 'ISI Certified Brand',
      sumpCapacity: 'Extra @ Actuals',
      lintelHeight: '7 Feet (Cut)'
    },
    flooring: {
      livingDining: 'Vitrified (Rs 45 / Sq.ft)',
      roomsKitchen: 'Vitrified (Rs 45 / Sq.ft)',
      staircase: 'Sadarahalli Granite',
      parking: 'Tiles (Rs 25 / Sq.ft)',
      waterproofing: 'Integral'
    },
    doorsWindows: {
      mainDoor: 'Burma Teak (5")',
      poojaDoor: 'Burma Teak Plain',
      intFrames: 'Neem Wood',
      windows: 'Aluminum',
      safety: '12mm Hex Rods'
    },
    sanitaryPlumbing: {
      ceramicTiles: 'Rs 35 (Till 7\')',
      bathAllowance: 'Rs 15,000 / bath',
      brands: 'ISI Certified Brand',
      waterline: 'Astral CPVC',
      overheadTank: '1000L Ganga',
      sanitaryLine: 'Supreme / Prime (PVC)'
    },
    finishing: {
      interiorPainting: 'Birla/JK Putty base coat with Asian Premium Emulsion top coat.',
      exteriorPainting: 'Asian Primer protective coat with ACE/APEX Weather-Proof Exterior Emulsion.',
      electricalWires: 'Finolex Silver/Gold Fire Proof copper wiring.',
      switchesPlates: 'Anchor / Hi-Fi Sockets with White/Colored modular plates.'
    }
  },
  {
    id: 'classic',
    name: 'Classic',
    rate: 2199,
    tagline: 'Most Popular / Design Included',
    description: 'Elevated premium standards incorporating advanced hydraulic blocks, Turbo steel, premium granite, and Mysore Honne wood.',
    architecture: {
      floorPlan: '1 Option',
      elevation: '1 Option',
      interior: 'Extra @ Actuals',
      plumbingElec: 'Included',
      structural: 'Included'
    },
    structural: {
      blockWork: 'Hydraulic Blocks',
      cementBrand: 'Ramco / Birla',
      steelBrand: 'Turbo',
      sumpCapacity: '8,000 Liters',
      lintelHeight: '7 Feet (Through)'
    },
    flooring: {
      livingDining: 'Vitrified (Rs 75 / Sq.ft)',
      roomsKitchen: 'Vitrified (Rs 75 / Sq.ft)',
      staircase: 'Granite (Rs 90 / Sq.ft)',
      parking: 'Tiles (Rs 35 / Sq.ft)',
      waterproofing: 'Integral'
    },
    doorsWindows: {
      mainDoor: 'Burma Teak (6")',
      poojaDoor: 'Teak + Glass',
      intFrames: 'Mysore Honne',
      windows: 'White UPVC',
      safety: '12mm Hex Rods'
    },
    sanitaryPlumbing: {
      ceramicTiles: 'Rs 40 (Till 7\')',
      bathAllowance: 'Rs 20,000 / bath',
      brands: 'Jaguar / ESS',
      waterline: 'Ashirwad / Supreme (CPVC)',
      overheadTank: '2000L Ganga',
      sanitaryLine: 'Supreme / Prime (PVC)'
    },
    finishing: {
      interiorPainting: 'Birla/JK Putty (2 coats) with Asian Royal Luxury Emulsion paint.',
      exteriorPainting: 'Asian Primer protective coat with APEX Ultima Anti-Algal Weather-Proof Emulsion.',
      electricalWires: 'Havells / Finolex FRLSH (Fire Retardant Low Smoke Halogen) copper wiring.',
      switchesPlates: 'Crabtree / Legrand Lyncus stylish Matte/Colored modular plates.'
    }
  },
  {
    id: 'premium',
    name: 'Premium',
    rate: 2399,
    tagline: 'Elite Luxury Specifications',
    description: 'Ultimate class finishes with marble, Mysore/Ghana Honne, 10,000L sumps, damp-proof waterproofing, and bespoke pooja doors.',
    architecture: {
      floorPlan: '2 Options',
      elevation: '2 Options',
      interior: '1 Option',
      plumbingElec: 'Included',
      structural: 'Included'
    },
    structural: {
      blockWork: 'Hydraulic Blocks',
      cementBrand: 'Ramco / Birla',
      steelBrand: 'Indus',
      sumpCapacity: '10,000 Liters',
      lintelHeight: '7 Feet (Through)'
    },
    flooring: {
      livingDining: 'Marble (Rs 150 / Sq.ft)',
      roomsKitchen: 'Vitrified (Rs 90 / Sq.ft)',
      staircase: 'Granite (Rs 120 / Sq.ft)',
      parking: 'Tiles (Rs 50 / Sq.ft)',
      waterproofing: 'Integral + Damp-proof'
    },
    doorsWindows: {
      mainDoor: 'Burma Teak (8")',
      poojaDoor: 'Teak + Basic Carvings',
      intFrames: 'Ghana Honne',
      windows: 'White UPVC',
      safety: '12mm Hex Rods'
    },
    sanitaryPlumbing: {
      ceramicTiles: 'Rs 60 (Till 10\')',
      bathAllowance: 'Rs 25,000 / bath',
      brands: 'Jaguar / ESS',
      waterline: 'Ashirwad / Supreme (CPVC)',
      overheadTank: '2000L Ganga',
      sanitaryLine: 'Supreme / Prime (PVC)'
    },
    finishing: {
      interiorPainting: 'Birla Ultra-fine Putty (3 coats) with Asian Royal Aspira Teflon stretch paint.',
      exteriorPainting: 'APEX Ultima Protek Silicon-Waterproof Dust-Guard paint with 10-year warranty.',
      electricalWires: 'Finolex FRLSH / GM Heavy Duty Fire-Guard copper wiring.',
      switchesPlates: 'Legrand Arteor / GM Zircon Touch & Metallic luxury switches.'
    }
  }
];

export const STRUCTURAL_EXCELLENCE = {
  pillarDepth: "6' below ground level",
  concreteMix: "M-20 Slab / M-25 Column design",
  steelQuality: "Sunvik India Gold 550 quality certified",
  masonry: "Solid Concrete Blocks. 6\" for load-bearing and 4\" for partitioning"
};

export const PROJECT_STANDARDS = {
  duration: "12 Months structural-to-handover construction duration for G+3 buildings.",
  roofHeight: "10' 6\" maintained roof slab-level height.",
  termiteTreatment: "Full anti-termite underground soil treatment included."
};

export const FINISHING_AND_ELECTRICAL = {
  painting: {
    interior: "Birla/JK Putty base coat with Asian Premium Emulsion top coat.",
    exterior: "Asian Primer protective coat with ACE/APEX Weather-Proof Exterior Emulsion."
  },
  electrical: {
    wires: "Finolex Silver/Gold Fire Proof copper wiring.",
    switches: "Anchor / Hi-Fi Sockets with White/Colored modular plates."
  }
};

export const OWNER_RESPONSIBILITIES = [
  "All Government connection deposits (electricity, water, sewage).",
  "Temporary power and water supply charges at the construction site.",
  "All applicable Goods and Services Tax (GST) on project costs.",
  "Any deviation from original layout plans (charged @ actual costs).",
  "Solar system fittings and custom decorative electrical fixtures.",
  "Submersible pump installation and pressure pump machinery."
];

export const PACKAGE_EXCLUSIONS = [
  "Safety Window Grills & Exterior Specialty Painting.",
  "All Interior Carpentry, TV Cabinets, Wardrobes, and False Ceilings.",
  "All Kitchen and Home Electrical Appliances.",
  "Elevation Cladding materials and Lift installation.",
  "Solar Panels, Solar Water Heaters, and Gas Pipeline setup.",
  "CCTV Cameras, smart systems, and specialized landscape decor."
];

export const FAQS_DATA = [
  {
    question: "Do you offer a warranty on the residential structural work?",
    answer: "Yes, we provide an absolute 10-Year Promise & structural warranty on all residential turnkey constructions. If any structural issues arise, our engineering team handles it directly under our strict quality guarantee."
  },
  {
    question: "What are the 1024 Quality Checks performed on each project?",
    answer: "Our 1024 Quality Checks cover every structural milestone: from concrete slump strength tests (M-20/M-25), steel bar alignment, block masonry level consistency, plastering smoothness, electrical routing safety, pipe pressure checks, to post-curing moisture scans before handover."
  },
  {
    question: "What is your 'Timeline is Our Deadline' policy?",
    answer: "We guarantee completion on time. If there is a delay in the structural-to-handover timeline that is within our control, we will refund 2% of the total project amount, no questions asked."
  },
  {
    question: "How does your 'Refer & Earn' program work?",
    answer: "For every successful referral of a turnkey residential construction or large interior project in Bengaluru, you can earn up to ₹1,00,000 (₹1 Lakh) cash reward once the client executes the official project agreement."
  },
  {
    question: "Are architectural 2D plans and 3D elevations included in the package?",
    answer: "Yes, architectural drafting services, 2D floor layout plans, and high-fidelity 3D exterior elevations are fully included at no cost in both our Classic and Premium construction packages."
  },
  {
    question: "Who handles government approvals and connection deposits?",
    answer: "The property owner handles all government connection deposits (for BESCOM electricity, water, sewage, and building plan approvals), while Hariha Infra acts as a key consultant to guide and coordinate the submissions."
  }
];
