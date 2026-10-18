export interface SubServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  scopeDescription: string;
}

export interface ServicePageData {
  id: string;
  slug: string;
  navTitle: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  subServices: SubServiceItem[];
  preDeliverables: {
    number: string;
    title: string;
    desc: string;
    badge: string;
  }[];
  overviewText: {
    heading: string;
    paragraphs: string[];
    statNumber: string;
    statLabel: string;
  };
}

export const ALL_SERVICES_DATA: Record<string, ServicePageData> = {
  'building-demolition': {
    id: 'building-demolition',
    slug: 'building-demolition',
    navTitle: 'Building Demolition',
    heroEyebrow: 'MSA DEMOLISHING · UAE',
    heroTitle: 'Building Demolition & Controlled Deconstruction',
    heroDescription:
      'Class A licensed contractor executing high-reach felling, precision wire sawing, and controlled structural teardowns across Dubai. Governed by zero-vibration telemetry, rapid municipal permits, and 98% recycled material recovery.',
    heroImage: '/images/hero_building_demolition_1791830585768.webp',
    sectionSubtitle: 'Core Capabilities // UAE Operations',
    sectionTitle: 'Demolition Services',
    sectionDescription:
      'From complete high-reach structural felling to surgical interior strip-outs, industrial dismantling, and foundation extraction across Dubai and the UAE.',
    subServices: [
      {
        id: 'building-demolition',
        title: 'Building Demolition',
        subtitle: 'High-reach mechanical felling & multi-story tower teardown',
        image: '/images/building_demolition_dubai_1791759699360.webp',
        scopeDescription:
          'Engineered top-down felling and high-reach mechanical demolition for multi-story towers, commercial complexes, and residential developments across the UAE.'
      },
      {
        id: 'structural-deconstruction',
        title: 'Structural Deconstruction',
        subtitle: 'Precision diamond wire sawing & selective load-bearing slicing',
        image: '/images/structural_wire_sawing_1791759713427.webp',
        scopeDescription:
          'Vibration-free diamond wire cutting and selective concrete slicing for load-bearing modifications, structural alterations, and architectural retrofits.'
      },
      {
        id: 'interior-stripout',
        title: 'Interior Strip-Out',
        subtitle: 'Turnkey architectural soft-strip for commercial & retail fit-outs',
        image: '/images/interior_stripout_demolition_1791759731027.webp',
        scopeDescription:
          'Complete internal soft-strip removal of non-load-bearing walls, MEP conduits, ceilings, and fixtures for retail centers, corporate offices, and hospitality projects.'
      },
      {
        id: 'foundation-removal',
        title: 'Foundation & Shoring Removal',
        subtitle: 'Secant pile extraction, deep pile caps & coastal dewatering',
        image: '/images/deep_shoring_foundation_removal_1791759750345.webp',
        scopeDescription:
          'Heavy hydraulic breaker extraction of underground concrete rafts, secant piles, contiguous walls, and deep basement foundations.'
      },
      {
        id: 'industrial-demolition',
        title: 'Industrial & Plant Demolition',
        subtitle: 'Heavy steel structure felling, silos, refineries & plant dismantling',
        image: '/images/dubai_silo_plant_demolition_1791762286680.webp',
        scopeDescription:
          'Engineered dismantling of industrial manufacturing plants, processing facilities, silos, heavy structural steel frames, and refinery infrastructure.'
      },
      {
        id: 'controlled-implosion',
        title: 'Controlled Implosion & Blasting',
        subtitle: 'Engineered collapse sequences with micro-seismic & dust suppression',
        image: '/images/controlled_implosion_sequence_1791756049767.webp',
        scopeDescription:
          'Precision explosive felling and controlled collapse engineering for tall silos, cooling towers, and isolated complexes requiring rapid vertical clearance.'
      },
      {
        id: 'infrastructure-demolition',
        title: 'Infrastructure & Bridge Demolition',
        subtitle: 'Civil viaducts, elevated flyovers & marine structure deconstruction',
        image: '/images/dubai_flyover_viaduct_demolition_1791762226685.webp',
        scopeDescription:
          'Segmental hydro-demolition, wire sawing, and heavy crane tandem lifting for highway viaducts, civil bridges, and marine quayside structures.'
      },
      {
        id: 'robotic-demolition',
        title: 'Robotic & Confined Demolition',
        subtitle: 'Zero-emission electric Brokk remote machines for constrained spaces',
        image: '/images/robotic_concrete_cruncher_1791756065306.webp',
        scopeDescription:
          'Compact remote-controlled electric robotics engineered for fume-free, low-vibration demolition within live hospitals, airports, and confined interior zones.'
      }
    ],
    preDeliverables: [
      {
        number: '01',
        title: 'Class A Municipal NOC & Permit Dossier',
        desc: 'Direct liaison with Dubai Municipality, Civil Defense, DEWA, and RTA for accelerated zero-friction statutory permits.',
        badge: 'Guaranteed Statutory Clearance'
      },
      {
        number: '02',
        title: '3D Laser Scan & Structural Finite Element Model',
        desc: 'Sub-millimeter terrestrial LiDAR scan and load-path collapse simulation preventing perimeter structural stress.',
        badge: '0.00 mm Deviation Calibrated'
      },
      {
        number: '03',
        title: 'Continuous Micro-Seismic Geophone Telemetry',
        desc: 'Live 24/7 triaxial vibration feeds broadcast to adjacent Metro viaducts, basements, and utility corridors.',
        badge: 'DIN 4150 Vibration Limit'
      },
      {
        number: '04',
        title: 'Al Sa‘fat 98% Circular Materials Manifest',
        desc: 'Certified on-site crushing, magnetic steel separation, and Dubai Municipality green waste dumping compliance.',
        badge: '98.4% Diverted From Landfill'
      }
    ],
    overviewText: {
      heading: 'Engineered for Consequence. Trusted Across the UAE.',
      paragraphs: [
        'MSA Demolishing delivers precision building demolition across Dubai and the UAE. In high-density urban corridors, demolition is not a blunt exercise of force—it is an exacting branch of structural engineering where every column cut, wire saw slice, and floor uncoupling is calculated against strict municipal tolerances.',
        'Holding unlimited-height Class A classification, our certified teams operate specialized ultra-high-reach excavators, robotic crunchers, and diamond wire slicing units under continuous seismic telemetry. We manage the entire lifecycle from early municipal NOC acquisition and DEWA disconnection through to crushed aggregate recycling and certified ground handover.'
      ],
      statNumber: '100%',
      statLabel: 'Zero Municipal Incidents Across 3.2M m² Deconstructed'
    }
  },

  'industrial-demolition': {
    id: 'industrial-demolition',
    slug: 'industrial-demolition',
    navTitle: 'Industrial Demolition',
    heroEyebrow: 'MSA DEMOLISHING · HEAVY INDUSTRY',
    heroTitle: 'Industrial & Plant Demolition',
    heroDescription:
      'Turnkey deconstruction of petrochemical plants, storage silos, power generation stations, and heavy steel structures across UAE industrial hubs. Cold-cutting safety protocols, scrap metal salvage, and Trakhees-certified environmental stewardship.',
    heroImage: '/images/demolition_heavy_shear_1791756033650.webp',
    sectionSubtitle: 'Heavy Industrial Scope // Plant & Asset Clearance',
    sectionTitle: 'Industrial Demolition Services',
    sectionDescription:
      'Engineered dismantling of petrochemical refineries, cement silos, steel manufacturing plants, and heavy machinery across JAFZA, KIZAD, and UAE free zones.',
    subServices: [
      {
        id: 'petrochemical-refinery',
        title: 'Petrochemical & Refinery Dismantling',
        subtitle: 'Process unit decommissioning, pipe rack dismantling & cold-cutting',
        image: '/images/dubai_silo_plant_demolition_1791762286680.webp',
        scopeDescription:
          'Specialized non-spark hydraulic shearing, cold-cutting, and certified purging for hydrocarbon processing facilities, storage terminals, and chemical transfer lines.'
      },
      {
        id: 'silo-terminal',
        title: 'Silo & Bulk Storage Demolition',
        subtitle: 'Reinforced concrete grain, cement, and clinker storage dismantling',
        image: '/images/controlled_implosion_sequence_1791756049767.webp',
        scopeDescription:
          'Controlled mechanical deconstruction and high-reach pneumatic crunching of tall industrial silos, aggregate bins, and automated port bulk terminal infrastructure.'
      },
      {
        id: 'heavy-structural-steel',
        title: 'Heavy Structural Steel Felling',
        subtitle: 'High-tonnage hydraulic shear dismantling & crane pick operations',
        image: '/images/demolition_heavy_shear_1791756033650.webp',
        scopeDescription:
          'Segmented engineered unbolting and heavy hydraulic shear processing of portal frame warehouses, gantry structures, and crane runway girders.'
      },
      {
        id: 'power-plant-decommissioning',
        title: 'Power & Substation Decommissioning',
        subtitle: 'Turbine, transformer, boiler & generator de-installation',
        image: '/images/building_demolition_dubai_1791759699360.webp',
        scopeDescription:
          'Complete civil and electromechanical dismantling of thermal boilers, gas turbine halls, cooling towers, and isolated transformer sub-stations with oil recovery.'
      },
      {
        id: 'scrap-salvage',
        title: 'Ferrous & Non-Ferrous Asset Salvage',
        subtitle: 'On-site scrap shearing, sorting, weighing & circular trading',
        image: '/images/dubai_demolition_cleared_1791767868682.webp',
        scopeDescription:
          'High-volume magnetic sorting and mobile hydraulic scrap shearing converting decommissioned industrial plants into export-grade circular steel and copper.'
      },
      {
        id: 'stack-tower-felling',
        title: 'Chimney & Flare Stack Demolition',
        subtitle: 'Controlled rigging, wire sawing & top-down mast dismantling',
        image: '/images/structural_wire_sawing_1791759713427.webp',
        scopeDescription:
          'Surgical crane-assisted sectioning and diamond cable sawing of tall industrial chimneys, flare stacks, and communication towers in close proximity to active assets.'
      },
      {
        id: 'hazardous-abatement',
        title: 'Industrial Decontamination & Abatement',
        subtitle: 'Asbestos, refractory ceramic fiber & chemical residue management',
        image: '/images/interior_stripout_demolition_1791759731027.webp',
        scopeDescription:
          'Licensed toxic material containment, air-tight negative pressure enclosures, and certified hazardous waste disposal under UAE Ministry of Climate Change compliance.'
      },
      {
        id: 'active-facility-dismantling',
        title: 'Live Facility Selective Dismantling',
        subtitle: 'Zero-downtime structural removal inside operational factories',
        image: '/images/robotic_concrete_cruncher_1791756065306.webp',
        scopeDescription:
          'Low-noise acoustic partitioning and spark-free electric robotic dismantling allowing ongoing plant operations next to active demolition bays.'
      }
    ],
    preDeliverables: [
      {
        number: '01',
        title: 'Trakhees & EHS Hazardous Clearance Permit',
        desc: 'Comprehensive de-energization, line purging, and certified chemical decontamination sign-offs prior to physical teardown.',
        badge: 'Zero Hot-Work Incidents'
      },
      {
        number: '02',
        title: 'Heavy Lift Rigging & Structural Feasibility Study',
        desc: 'Computerized crane radii load charts and center-of-gravity calculations for multi-ton industrial vessels and towers.',
        badge: 'Engineered Rigging Certified'
      },
      {
        number: '03',
        title: 'Continuous Blast & Spark-Proof Telemetry',
        desc: 'LEL gas monitoring and atmospheric combustible sensors deployed across active industrial zones and pipeline corridors.',
        badge: 'Ex-Proof Safety Standards'
      },
      {
        number: '04',
        title: 'Scrap Valuation & Circular Reclamation Manifest',
        desc: 'Transparent on-site weighing, mill certificate compliance, and high-purity recycling credits directly offsetting project expenditure.',
        badge: 'Direct Scrap Offsets'
      }
    ],
    overviewText: {
      heading: 'Heavy Industry Precision. Zero-Downtime Execution.',
      paragraphs: [
        'MSA Demolishing is the trusted partner for complex plant decommissioning, refinery deconstruction, and heavy manufacturing dismantling across the United Arab Emirates. Industrial environments present unique technical constraints, including hazardous chemical residues, active utility corridors, and adjacent live production lines.',
        'Our engineering team employs non-spark hydraulic shears, heavy crane-assisted tandem lifts, and cold diamond-wire sectioning to decommission industrial assets without disrupting neighboring operations. We guarantee full environmental compliance under Trakhees, Dubai Municipality, and AD Ports EHS authorities.'
      ],
      statNumber: '250,000+',
      statLabel: 'Tons of Industrial Steel & Equipment Salvaged & Recycled'
    }
  },

  'interior-stripout': {
    id: 'interior-stripout',
    slug: 'interior-stripout',
    navTitle: 'Interior Strip-Out',
    heroEyebrow: 'MSA DEMOLISHING · FIT-OUT CLEARANCE',
    heroTitle: 'Interior Strip-Out & Architectural Demolition',
    heroDescription:
      'High-speed non-structural strip-out for prime retail malls, luxury hospitality, and Grade-A corporate towers across Dubai. Night-shift scheduling, acoustic shielding, zero dust migration, and turnkey bare-shell handover.',
    heroImage: '/images/interior_stripout_demolition_1791759731027.webp',
    sectionSubtitle: 'Commercial Architectural Scope // Clean Handover',
    sectionTitle: 'Interior Strip-Out Services',
    sectionDescription:
      'Turnkey architectural defit, MEP de-installation, screed removal, and bare-shell restoration for commercial, hospitality, and residential properties in Dubai.',
    subServices: [
      {
        id: 'commercial-fitout',
        title: 'Commercial Office Fit-Out Strip-Out',
        subtitle: 'Turnkey tenancy defit to landlord base-build condition',
        image: '/images/interior_stripout_demolition_1791759731027.webp',
        scopeDescription:
          'Rapid clearing of drywalls, glazed meeting pods, raised access flooring, acoustic baffles, and joinery with full MEP isolation for fast tenancy re-leasing.'
      },
      {
        id: 'retail-mall-nightshift',
        title: 'Retail Mall Night-Shift Clearance',
        subtitle: 'Low-noise overnight strip-out in Dubai Mall & Mall of the Emirates',
        image: '/images/building_demolition_dubai_1791759699360.webp',
        scopeDescription:
          'Silent dismantling, dust-sealed corridors, and freight elevator logistics completed during mall closing hours with zero disruption to adjacent flagship stores.'
      },
      {
        id: 'mep-deinstallation',
        title: 'MEP, HVAC & Ceiling De-Installation',
        subtitle: 'Ductwork, chilled water fan coils, sprinklers & cable tray clearing',
        image: '/images/structural_wire_sawing_1791759713427.webp',
        scopeDescription:
          'Certified electrical lockout, chilled water drainage, fire sprinkler capping, and suspended ceiling grid removal by approved technicians.'
      },
      {
        id: 'floor-finish-screed',
        title: 'Floor Screed & Epoxy Removal',
        subtitle: 'Ceramic tile lifting, terrazzo grinding & slab surface profiling',
        image: '/images/deep_shoring_foundation_removal_1791759750345.webp',
        scopeDescription:
          'Pneumatic ride-on tile strippers, captive shot-blasting, and diamond planetary grinders returning concrete slabs to pristine CSP-3 adhesive-ready profiles.'
      },
      {
        id: 'hospitality-hotel-refurb',
        title: 'Luxury Hotel Room & Lobby Defit',
        subtitle: 'Multi-floor room strip-outs for 5-star hotel refurbishments',
        image: '/images/dubai_palm_resort_demolition_1791762297191.webp',
        scopeDescription:
          'Phased guest-room gutting, bathroom marble removal, and public area facade deconstruction maintained within strict acoustic working hours.'
      },
      {
        id: 'escalator-lift-core',
        title: 'Escalator & Elevator Core Demolition',
        subtitle: 'Rigging and sectioning of mechanical transit cores',
        image: '/images/robotic_concrete_cruncher_1791756065306.webp',
        scopeDescription:
          'Precision diamond stitch-drilling and gantry crane extraction of internal escalator trusses and hydraulic lift mechanisms.'
      },
      {
        id: 'cleanroom-hospital',
        title: 'Healthcare & Clean-Room Strip-Out',
        subtitle: 'HEPA filtered containment for active medical facilities',
        image: '/images/dubai_engineers_inspection_1791761613623.webp',
        scopeDescription:
          'Negative pressure containment tents, sticky floor mats, and zero-fume electric tooling ensuring zero microbial dust escape into functioning hospital wards.'
      },
      {
        id: 'facade-glazing-removal',
        title: 'Architectural Glazing & Facade Removal',
        subtitle: 'Curtain wall dismantle and shopfront glass extraction',
        image: '/images/faint_demolition_sketch_1791756966285.webp',
        scopeDescription:
          'Suction-lifter crane extraction of oversized laminated shopfront glass, curtain wall spandrels, and architectural aluminum canopies.'
      }
    ],
    preDeliverables: [
      {
        number: '01',
        title: 'Mall Management & Landlord Fit-Out NOC',
        desc: 'Direct liaison with Emaar, Majid Al Futtaim, TECOM, and DIFC facilities teams for rapid loading bay and security clearances.',
        badge: 'Approved by Tier-1 Landlords'
      },
      {
        number: '02',
        title: 'Negative-Pressure Dust Containment Protocol',
        desc: 'Industrial HEPA air scrubbers and airtight poly-shielding stopping fine drywall and silica dust from migrating into public atriums.',
        badge: '0% Airborne Dust Migration'
      },
      {
        number: '03',
        title: 'Acoustic Compliance & Night Logistics Plan',
        desc: 'Rigid adherence to decibel restrictions, padded rubber wheelbarrows, and dedicated night freight elevator bookings.',
        badge: '< 55 dB(A) Night Limit'
      },
      {
        number: '04',
        title: 'Certified Bare-Shell Handover Sign-Off',
        desc: 'Comprehensive post-strip snag check ensuring structural concrete, base MEP interfaces, and perimeter fire stops are fully validated.',
        badge: '100% Landlord Sign-Off'
      }
    ],
    overviewText: {
      heading: 'Clean Architectural Handover. Zero Noise & Dust Impact.',
      paragraphs: [
        'MSA Demolishing is the preferred interior strip-out contractor for prime developers, retail mall operators, and commercial interior contractors throughout Dubai. Commercial defits demand surgical care: the building envelope, core services, and neighboring tenancies must remain completely untouched.',
        'Operating 24/7 with specialized night-shift teams, we deploy negative-pressure air filtration, sound-damped pneumatic tools, and battery-powered Brokk crunchers to strip tenancies back to pristine bare-shell conditions without triggering smoke alarms or causing acoustic complaints.'
      ],
      statNumber: '48h',
      statLabel: 'Rapid Turnkey Mobilization for Flagship Commercial Tenancies'
    }
  },

  'infrastructure-demolition': {
    id: 'infrastructure-demolition',
    slug: 'infrastructure-demolition',
    navTitle: 'Infrastructure Demolition',
    heroEyebrow: 'MSA DEMOLISHING · CIVIL & MARITIME',
    heroTitle: 'Infrastructure & Bridge Demolition',
    heroDescription:
      'Engineered deconstruction of highway viaducts, civil bridges, coastal marine wharves, and deep underground foundation shoring across Dubai and Abu Dhabi. Hydro-demolition, diamond wire sawing, and heavy tandem crane rigging.',
    heroImage: '/images/dubai_flyover_viaduct_demolition_1791762226685.webp',
    sectionSubtitle: 'Civil Engineering Scope // Public Infrastructure',
    sectionTitle: 'Infrastructure Demolition Services',
    sectionDescription:
      'Civil engineering deconstruction for roads, bridges, transit corridors, marine assets, and deep underground foundations throughout the UAE.',
    subServices: [
      {
        id: 'bridge-viaduct',
        title: 'Bridge & Highway Viaduct Demolition',
        subtitle: 'Overnight flyover removal with zero RTA traffic disruption',
        image: '/images/dubai_flyover_viaduct_demolition_1791762226685.webp',
        scopeDescription:
          'Rapid weekend highway closures utilizing synchronized multi-crane tandem lifts and diamond wire saws to dismantle precast and post-tensioned bridge spans.'
      },
      {
        id: 'marine-wharf',
        title: 'Marine Wharf & Quay Wall Demolition',
        subtitle: 'Coastal deconstruction, concrete jetty removal & underwater cutting',
        image: '/images/dubai_marine_wharf_demolition_1791762216315.webp',
        scopeDescription:
          'Barge-mounted heavy excavators and diamond wire saws cutting underwater reinforced concrete piers and steel tubular piles under strict marine environmental safeguards.'
      },
      {
        id: 'deep-shoring-secant',
        title: 'Deep Shoring & Secant Wall Removal',
        subtitle: 'Basement shoring extraction and continuous diaphragm wall removal',
        image: '/images/deep_shoring_foundation_removal_1791759750345.webp',
        scopeDescription:
          'Heavy hydraulic breaker and core-drilling extraction of temporary secant pile walls, soldier beams, and ground anchors for new civil developments.'
      },
      {
        id: 'hydro-demolition',
        title: 'Hydro-Demolition & Selective Milling',
        subtitle: 'Ultra-high pressure (UHP) 3,000 bar water jet concrete removal',
        image: '/images/structural_wire_sawing_1791759713427.webp',
        scopeDescription:
          'Vibration-free concrete scarification preserving structural rebar for bridge deck refurbishments, tunnel repairs, and marine quay renovations.'
      },
      {
        id: 'heavy-foundation-raft',
        title: 'Heavy Foundation & Raft Extraction',
        subtitle: 'Mass concrete footing removal and deep ground pile cap breaking',
        image: '/images/building_demolition_dubai_1791759699360.webp',
        scopeDescription:
          'Sledge-type hydraulic breaker attachments and chemical expanding rock splitters demolishing mass concrete foundations exceeding 4 meters in depth.'
      },
      {
        id: 'metro-rail-corridor',
        title: 'Metro Corridor & Transit Demolition',
        subtitle: 'Sub-millimeter vibration controlled civil dismantling near tracks',
        image: '/images/dubai_plaza_intact_1791767847027.webp',
        scopeDescription:
          'Engineered deconstruction adjacent to live Dubai Metro viaducts, governed by real-time automated geophone arrays and optical survey prisms.'
      },
      {
        id: 'tunnel-culvert',
        title: 'Tunnel & Box Culvert Removal',
        subtitle: 'Underground stormwater, utility tunnel & culvert breaking',
        image: '/images/robotic_concrete_cruncher_1791756065306.webp',
        scopeDescription:
          'Confined-space robotic excavators demolishing reinforced subterranean utility passages, culverts, and pedestrian tunnels without ground subsidence.'
      },
      {
        id: 'onsite-crushing-screening',
        title: 'On-Site Aggregate Crushing & Recycling',
        subtitle: 'Mobile jaw & impact crushers producing road-base aggregate',
        image: '/images/dubai_demolition_cleared_1791767868682.webp',
        scopeDescription:
          'High-throughput mobile crushing plant converting demolished civil concrete into certified sub-base gravel conforming to Dubai Municipality road specifications.'
      }
    ],
    preDeliverables: [
      {
        number: '01',
        title: 'RTA & Police Traffic Diversion NOC',
        desc: 'Direct approvals from Roads and Transport Authority (RTA) and Dubai Police for night closures, lane diversions, and gantry operations.',
        badge: 'RTA Approved Contractor'
      },
      {
        number: '02',
        title: 'Dynamic Crane Lift & Ground Stability Plan',
        desc: 'Certified outrigger ground bearing calculations, matting certifications, and crane lift safety plans signed by chartered civil engineers.',
        badge: 'Zero Crane Tip Risk'
      },
      {
        number: '03',
        title: 'Adjacent Asset Real-Time Seismic Telemetry',
        desc: 'Live 24/7 wireless geophone monitoring ensuring zero vibration transfer to operational metro viaducts and critical buried utilities.',
        badge: '0.0 mm Track Drift'
      },
      {
        number: '04',
        title: 'Marine & Environmental Protection Protocols',
        desc: 'Silt curtains, floating booms, and marine turbidity monitoring satisfying Trakhees and Ministry of Environment requirements.',
        badge: 'Zero Marine Siltation'
      }
    ],
    overviewText: {
      heading: 'Civil Engineering Rigor. Critical Infrastructure Expertise.',
      paragraphs: [
        'MSA Demolishing executes complex civil and infrastructure deconstruction across highways, transit lines, and coastal developments in the UAE. Infrastructure projects operate under uncompromising conditions: strict weekend road-closure deadlines, high live-traffic exposure, and adjacent critical utilities.',
        'Our civil engineers coordinate directly with the RTA, Dubai Police, DEWA, and marine port authorities to execute seamless removals. Utilizing heavy-duty diamond wire saws, robotic UHP hydro-demolition, and multi-crane tandem lifts, we ensure rapid, safe execution with zero structural subsidence.'
      ],
      statNumber: '100%',
      statLabel: 'Zero Public Traffic Incidents Across All UAE Highway Operations'
    }
  }
};
