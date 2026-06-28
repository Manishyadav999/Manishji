import { Product, GalleryItem, FAQItem, Testimonial, ProcessStep, Highlight } from "../types";

export const PRODUCTS_DATA: Product[] = [
  {
    id: "wire-drawing-dies",
    name: "Wire Drawing Dies",
    shortDescription: "Precision-engineered dies for reduction of metal cross-sections under high tensile loads.",
    description: "Chanda Wire Dies are crafted for the reduction of cross-sections of various metallic wires. Engineered to withstand high tensile loads and severe pressure, these dies maintain perfect roundness and exceptional surface finishes over extended production runs.",
    image: "/images/tungsten_carbide_dies_1782630063165.jpg",
    features: [
      "Optimized internal geometries for reduced drawing force",
      "Excellent heat dissipation properties during high-speed drawing",
      "Sturdy heavy-duty stainless steel or brass casing options",
      "Available in multiple entry angles suited for diverse metals"
    ],
    applications: [
      "Copper wire drawing in electrical cable production",
      "Stainless steel and carbon steel wire processing",
      "Aluminum and aluminum alloy wire manufacturing",
      "Precious metal wire drawing for specialized electronics"
    ],
    advantages: [
      "Extremely low coefficient of friction reducing wire breakage",
      "Exceptional resistance to abrasive wear",
      "Minimizes downtime with superior thermal stability",
      "Ensures highly consistent wire diameters"
    ],
    specifications: {
      "Size Range": "0.100 mm to 35.000 mm",
      "Diameter Tolerance": "±0.001 mm or ±0.05% of wire diameter",
      "Casing Options": "Stainless Steel, Chrome-plated Tool Steel, Brass",
      "Core Material": "Tungsten Carbide / PCD Sintered Insert",
      "Standard Mount Sizes": "25x10mm, 28x12mm, 43x20mm, 53x25mm"
    }
  },
  {
    id: "diamond-wire-dies",
    name: "Diamond Wire Dies",
    shortDescription: "Ultra-hard diamond cores ensuring superior surface gloss and impeccable wire thickness control.",
    description: "Our Diamond Wire Dies represent the pinnacle of wire-drawing technology. Built with a flawless diamond core, they provide unmatched accuracy, maintaining strict dimensional limits and producing a brilliant surface gloss on the drawn wire.",
    image: "/images/diamond_pcd_dies_1782630048704.jpg",
    features: [
      "Flawless crystal structure selected for high wear-resistance",
      "Perfect concentricity and roundness of the die bore",
      "Micro-polished transition zones and exit cones",
      "Durable shock-absorbing metallic mounting casing"
    ],
    applications: [
      "Superfine copper and copper-clad steel wires",
      "Precious metal wire drawing (Gold, Silver, Platinum)",
      "High-purity aluminum wire manufacturing",
      "High-speed multi-wire drawing machine applications"
    ],
    advantages: [
      "Virtually zero wear rate over million-meter drawing lines",
      "Imparts a highly reflective, scratch-free mirror finish on wires",
      "Excellent energy efficiency due to minimal pulling friction",
      "Enables ultra-thin drawing down to microscopic levels"
    ],
    specifications: {
      "Size Range": "0.015 mm to 2.500 mm",
      "Diameter Tolerance": "±0.0002 mm (0.2 microns)",
      "Ovality": "< 0.00015 mm",
      "Core Material": "Mono-crystalline Synthetic or Natural Diamond",
      "Mounting Method": "Sintered metal powder matrix"
    }
  },
  {
    id: "natural-diamond-dies",
    name: "Natural Diamond Dies",
    shortDescription: "Handpicked premium natural diamonds for unmatched superfine wire drawing perfection.",
    description: "Chanda Natural Diamond Dies are crafted using hand-selected, gem-quality natural diamonds. Oriented along the most wear-resistant crystallographic plane, these dies deliver the ultimate precision and mirror-slick surface quality for critical, micro-fine wires.",
    image: "/images/diamond_pcd_dies_1782630048704.jpg",
    features: [
      "Gem-quality natural diamond inserts with no internal structural flaws",
      "Strict crystallographic orientation to minimize structural cleavage",
      "Ultra-fine micron-level borehole sizing capabilities",
      "Superior heat conductance to prevent thermal distortion"
    ],
    applications: [
      "Microscopic bonding wire for semi-conductors",
      "High-precision medical stainless steel wires (sutures, guides)",
      "High-tension acoustic wires and guitar strings",
      "Fine aerospace alloy wire production"
    ],
    advantages: [
      "The lowest friction of any wire drawing die material",
      "Yields unmatched surface perfection with zero microscopic scratches",
      "Extremely long-lasting sizing retention for fine-gauge wires",
      "Excellent resistance to chemical corrosion from drawing lubricants"
    ],
    specifications: {
      "Size Range": "0.010 mm to 1.200 mm",
      "Diameter Tolerance": "±0.0001 mm (0.1 microns)",
      "Crystal Type": "Type Ia Gem-Grade Natural Diamond",
      "Casing Material": "Stainless steel casing with hard-alloy backing",
      "Maximum Pull Speed": "Up to 50 meters per second"
    }
  },
  {
    id: "pcd-wire-dies",
    name: "PCD Wire Dies",
    shortDescription: "Sintered polycrystalline diamond cores combining diamond hardness with robust carbide toughness.",
    description: "Our Polycrystalline Diamond (PCD) Wire Dies offer the ideal balance between the high hardness of diamond and the heavy impact resistance of tungsten carbide. They are the ideal choice for heavy-duty, high-abrasion, and high-speed industrial drawing.",
    image: "/images/diamond_pcd_dies_1782630048704.jpg",
    features: [
      "Randomly oriented synthetic diamond crystals sintered at high heat and pressure",
      "Isotropic hardness that resists multi-directional wear",
      "Excellent thermal stability up to 700°C under load",
      "Extremely robust core that prevents crack propagation"
    ],
    applications: [
      "High-carbon steel wire drawing (tire cord, bead wire)",
      "Stainless steel and nickel alloy wire drawing",
      "Low carbon steel and galvanised iron (GI) wire",
      "Welding wire and heavy-gauge industrial cables"
    ],
    advantages: [
      "Unbelievable cost-to-lifetime ratio compared to other die types",
      "Resilient under heavy shock, vibration, and uneven tension",
      "Maintains roundness and ovality over high-tonnage throughput",
      "Highly stable for 24/7 heavy industrial wire plants"
    ],
    specifications: {
      "Size Range": "0.040 mm to 12.000 mm",
      "Grain Sizes": "1µm (fine surface), 3µm, 5µm, 12µm, 25µm (extreme wear)",
      "Casing Dimensions": "Standard ISO Mounts (25x10mm, 28x12mm, 43x20mm)",
      "Hardness": "~50 GPa",
      "Thermal Conductivity": "500 W/m·K"
    }
  },
  {
    id: "tungsten-carbide-dies",
    name: "Tungsten Carbide Dies",
    shortDescription: "Ultra-tough sintered cobalt-carbide dies designed for heavy-stress large diameter wire drawing.",
    description: "Chanda Tungsten Carbide (TC) Dies are constructed from premium-grade micro-grain sintered tungsten carbide. They provide unmatched structural toughness, making them the standard choice for large diameters, rods, tubes, and high-stress formatting.",
    image: "/images/tungsten_carbide_dies_1782630063165.jpg",
    features: [
      "Virgin raw material micro-grain sintered carbide core",
      "High-pressure shrink-fit casing design to resist bursting stresses",
      "Configurable geometry for drawing, bar extrusion, or tube reducing",
      "Mirror-polished entry angles and bearing lengths"
    ],
    applications: [
      "Large diameter iron and steel wire drawing",
      "Industrial wire rods, bars, and tubing reduction",
      "High-tensile cable wire and structural rope wire",
      "Nail-making and wire-shaping machines"
    ],
    advantages: [
      "Exceptional cost-effectiveness with low initial tooling investment",
      "High mechanical toughness that resists chipping and cracking",
      "Easy to re-polish, re-size, and re-condition in the workshop",
      "Withstands severe drawing conditions and dry lubricants"
    ],
    specifications: {
      "Size Range": "0.500 mm to 50.000 mm",
      "Cobalt Binder Content": "6% to 12% (customized for toughness vs. hardness)",
      "Carbide Hardness": "1450 to 1820 HV30",
      "Compressive Strength": "Over 4500 MPa",
      "Standard Profile shapes": "Round, Square, Hexagonal, Rectangular"
    }
  },
  {
    id: "compacting-dies",
    name: "Compacting Dies",
    shortDescription: "Specialized dies for compacting stranded power cable conductors to optimize material efficiency.",
    description: "Designed for the electrical cable industry, our Compacting Dies press together stranded copper or aluminum conductors. This increases the cable's fill factor, minimizes outer diameter, saves expensive outer insulating materials, and guarantees uniform roundness.",
    image: "/images/tungsten_carbide_dies_1782630063165.jpg",
    features: [
      "Custom parabolic entry tapers to avoid strand pinching",
      "High-density wear-resistant tungsten carbide liners",
      "Designed to prevent mechanical scuffing of individual strands",
      "Heavy steel reinforcement housings to handle compacting forces"
    ],
    applications: [
      "Electrical power cable manufacturing (LV, MV, HV cables)",
      "Stranded overhead conductor compacting (AAAC, ACSR)",
      "Automotive wiring harness bundles",
      "High-voltage electrical transmission systems"
    ],
    advantages: [
      "Reduces the overall diameter of stranded cables by up to 15%",
      "Saves valuable PVC, XLPE, or rubber insulation compounds",
      "Prevents strands from slipping or untwisting under installation tension",
      "Imparts a smooth, consistent outer boundary on stranded wire"
    ],
    specifications: {
      "Conductor Size Range": "1.50 mm² to 1000 mm²",
      "Profile Types": "Concentric Circular, Segmented, Sector, Hexagonal",
      "Polishing Quality": "Mirror finish (Ra < 0.05 µm)",
      "Insert Grade": "High-Cobalt Ultra-Fine TC Grade",
      "Housing Outer Diameter": "60 mm to 180 mm"
    }
  },
  {
    id: "customized-wire-dies",
    name: "Customized Wire Dies",
    shortDescription: "Bespoke custom-profile and special geometry drawing dies designed to your exact engineering prints.",
    description: "We design and manufacture Customized Wire Dies tailored to your exact blueprints. Whether you require non-circular shapes (square, hexagonal, rectangular, flat ribbon) or unique internal angle configurations for exotic alloys, we engineer custom solutions to fit your exact requirements.",
    image: "/images/diamond_pcd_dies_1782630048704.jpg",
    features: [
      "CAD/CAM integrated precision machining and wire-EDM cutting",
      "Available in PCD, natural diamond, or tungsten carbide cores",
      "Custom multi-angle drawing profiles (reduction, sizing, back-relief)",
      "Special engineered coatings (CVD/PVD) for exotic wire drawing"
    ],
    applications: [
      "Specialty shaped wire for medical devices and dental wiring",
      "Automotive terminal contact pins (square and rectangular wire)",
      "Flat ribbon cables and structural profile wires",
      "Defense and aerospace custom alloy forming"
    ],
    advantages: [
      "Direct integration into specialized and proprietary machinery",
      "Optimized wire flow patterns for brittle or work-hardening metals",
      "Full technical support and drawing profile consultations",
      "Precise sharp-corner radii control down to 0.05mm"
    ],
    specifications: {
      "Shape Capabilities": "Square, Rectangle, Hexagon, Octagon, Half-round, Custom profiles",
      "Profile Corner Radius": "Down to 0.03 mm",
      "Engineering Formats": "SolidWorks, AutoCAD (DWG, DXF), IGES, STEP, PDF",
      "Material Choice": "Natural Diamond, PCD, Tungsten Carbide",
      "Custom Casing Sizes": "Fully customizable to fit any machine layout"
    }
  },
  {
    id: "industrial-tools",
    name: "Industrial Tools",
    shortDescription: "High-grade auxiliary tools, die maintenance systems, measuring pins, and extrusion guides.",
    description: "To complement our core die products, we supply premium Industrial Tools and auxiliary equipment. From high-grade sizing pins and die-reconditioning needles to precise wire pullers and extrusion guides, these tools ensure your die shop and wire-drawing floor maintain optimum efficiency.",
    image: "/images/machining_facility_1782630078490.jpg",
    features: [
      "Hardened tool steel and high-carbon alloy compositions",
      "Ground and lapped surfaces for sub-micron accuracy",
      "Ergonomic designs for safe workshop operation",
      "Corrosion-resistant surface treatments"
    ],
    applications: [
      "Die workshop reconditioning, polishing, and resizing",
      "Bore measurement and calibration checks",
      "Wire drawing machine threading and line setup",
      "Extrusion line guide systems"
    ],
    advantages: [
      "Significantly prolongs the lifespan of active drawing dies",
      "Reduces setup times and prevents catastrophic machine crashes",
      "Ensures highly accurate quality checks on the shop floor",
      "Provides complete industrial support in one single window"
    ],
    specifications: {
      "Tool Types": "Measuring Pins, Polishing Needles, Extrusion Guides, Wire Pullers, Die Scrapers",
      "Surface Hardness": "60 to 65 HRC (Rockwell Hardness)",
      "Dimensional Tolerance": "ISO Class h5/h6 (up to ±0.0005mm)",
      "Material Grades": "High-Speed Steel (M2/M35), Carbide, Special Hardened Alloys",
      "Sizing Sets": "Supplied in custom wooden cases for dust-free storage"
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "Premium PCD Die Bore close-up", category: "PCD Dies", image: "/images/diamond_pcd_dies_1782630048704.jpg" },
  { id: "g2", title: "Heavy Duty Sintered Tungsten Carbide Dies", category: "Carbide Dies", image: "/images/tungsten_carbide_dies_1782630063165.jpg" },
  { id: "g3", title: "Natural Diamond Micro Die", category: "Diamond Dies", image: "/images/diamond_pcd_dies_1782630048704.jpg" },
  { id: "g4", title: "CNC Sizing and Grinding Unit", category: "Machinery", image: "/images/machining_facility_1782630078490.jpg" },
  { id: "g5", title: "Wire Drawing Die Outer Casing Sizing", category: "Carbide Dies", image: "/images/tungsten_carbide_dies_1782630063165.jpg" },
  { id: "g6", title: "High Precision Quality Inspection", category: "Quality", image: "/images/machining_facility_1782630078490.jpg" },
  { id: "g7", title: "Custom Hexagonal Sizing Die", category: "Custom Dies", image: "/images/diamond_pcd_dies_1782630048704.jpg" },
  { id: "g8", title: "Industrial Compacting Dies Collection", category: "Custom Dies", image: "/images/tungsten_carbide_dies_1782630063165.jpg" }
];

export const PROCESS_TIMELINE: ProcessStep[] = [
  {
    phase: "01",
    title: "Raw Material Selection",
    description: "We procure only premium virgin micro-grain tungsten carbide, gem-grade natural diamonds, and verified high-temperature sintered PCD blanks from top global manufacturers."
  },
  {
    phase: "02",
    title: "Precision Machining & EDM",
    description: "Using advanced Swiss-made CNC and high-precision Wire-EDM machinery, the core bore is hollowed out and sized under strict temperature-controlled settings to secure initial shapes."
  },
  {
    phase: "03",
    title: "Microscope-Guided Inspection",
    description: "Our metrology team verifies concentricity, circularity, and entry angles using high-magnification optical microscopes and sub-micron coordinate measurement systems (CMM)."
  },
  {
    phase: "04",
    title: "Diamond-Paste Finishing",
    description: "The die's reduction angle, bearing surface, and exit cones are polished incrementally with high-grade diamond compounds to achieve a zero-defect, friction-free mirror finish."
  },
  {
    phase: "05",
    title: "Sturdy Protective Packaging",
    description: "Finished dies are treated with rust-preventive industrial coatings, placed inside high-impact foam-molded protective casing shells, and packed securely for transit."
  },
  {
    phase: "06",
    title: "Timely On-Site Delivery",
    description: "Our logistic partners deliver bulk consignments securely across domestic and international locations. We supply complete test certificates and size verification reports."
  }
];

export const BUSINESS_HIGHLIGHTS: Highlight[] = [
  { id: "bh1", value: "25", suffix: "+", label: "Years of Heritage & Excellence" },
  { id: "bh2", value: "1200", suffix: "+", label: "Happy Industrial Clients Globally" },
  { id: "bh3", value: "8500", suffix: "+", label: "Tons of Wire Drawn Safely with Our Dies" },
  { id: "bh4", value: "100", suffix: "%", label: "Quality Checks & Precision Retention" }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "What is the primary difference between PCD and Natural Diamond Dies?",
    answer: "Natural Diamond Dies use single-crystal natural gem diamonds, offering the absolute lowest friction and the best possible surface finish—making them perfect for extremely fine, thin-gauge wires. Polycrystalline Diamond (PCD) Dies consist of sintered diamond crystals, offering much higher shock resistance and uniform toughness. PCD is ideal for heavy-duty, high-tensile materials (like steel cords) and larger wire gauges where natural diamond might fracture."
  },
  {
    id: "faq2",
    question: "How long is the average lifespan of a Chanda Tungsten Carbide Die?",
    answer: "The lifespan is highly dependent on drawing speeds, wire materials, and drawing lubrication quality. However, thanks to our high-density, micro-grain tungsten carbide formulation and mirror polishing, Chanda TC Dies typically last 20% to 35% longer than standard market alternatives. Additionally, they are designed with thick inserts, allowing them to be re-polished and re-sized multiple times to extend their usage."
  },
  {
    id: "faq3",
    question: "Can you manufacture dies based on custom engineering drawings?",
    answer: "Absolutely. Custom manufacturing is one of our key specialties. We can work with any industry-standard design format (CAD, STEP, IGES, PDF, or DWG). Our engineering team can collaborate with you to optimize entry angles and bearing lengths based on the specific wire alloy and machine pulling limits of your facility."
  },
  {
    id: "faq4",
    question: "What details should I provide when sending an inquiry or requesting a quote?",
    answer: "To provide the most accurate and quick quote, please supply: (1) The type of die material required (PCD, TC, ND), (2) The target inlet and finished wire diameters, (3) The material being drawn (e.g., copper, high-carbon steel, aluminum), (4) The casing size required to fit your machine, and (5) The approximate order quantity. Don't worry if some details are missing; our team will guide you through the requirements."
  },
  {
    id: "faq5",
    question: "Do you supply testing reports and certificates with the dies?",
    answer: "Yes, every batch of Chanda Wire Dies is delivered with a complete inspection report. This includes certified bore sizing measurements, ovality tolerance readings, and casing verification. Each die undergoes rigorous microscope-based checking before being approved for packaging."
  },
  {
    id: "faq6",
    question: "How do you handle bulk orders and shipping to domestic and global plants?",
    answer: "We support bulk purchasing with custom pricing brackets. We ship regularly to metal drawing hubs across India (NCR, Maharashtra, Tamil Nadu, Gujarat) and export to international clients. Consignments are packed securely in wooden shipping crates with custom foam cushions to ensure they arrive in perfect condition."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Singhal",
    designation: "Director of Operations",
    company: "Singhal Metal & Cable Industries",
    rating: 5,
    comment: "We have been sourcing PCD and Tungsten Carbide dies from Chanda Wire Dies for the past 6 years. The precision of their bore sizing is phenomenal, allowing us to maintain a continuous drawing line with zero wire-snapping issues. Their service and support are exceptional."
  },
  {
    id: "t2",
    name: "Arun K. Pillai",
    designation: "Quality Head",
    company: "Apex Conductors & Power Cables Ltd.",
    rating: 5,
    comment: "The compacting dies supplied by Chanda Wire Dies have allowed us to achieve a beautiful compaction fill factor, saving us tons of PVC insulation material over our annual runs. Highly recommend their precision-engineered tools!"
  },
  {
    id: "t3",
    name: "Sanjay Mehra",
    designation: "Plant Manager",
    company: "Vikas Fine Wires Pvt. Ltd.",
    rating: 5,
    comment: "Their Natural Diamond Dies are hands-down the best in class. We draw micro-fine copper down to 0.02 mm, and the surface reflectivity we get with Chanda dies is completely scratch-free and highly consistent. Customer support is always fast and professional."
  }
];
