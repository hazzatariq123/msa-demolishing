export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  category: string;
  location: string;
  clientType: string;
  authority: string;
  description: string;
  fullDetails: string;
  specs: {
    heightOrArea: string;
    vibrationLevel: string;
    recyclingRate: string;
    duration: string;
  };
  image: string;
}

export interface PortfolioCategoryData {
  eyebrow: string;
  title: string;
  description: string;
  badgeCountText: string;
  projects: PortfolioProject[];
}

// 1. Master Demolition Portfolio (for Home Page)
export const HOME_PORTFOLIO: PortfolioCategoryData = {
  eyebrow: 'LANDMARK UAE CONTRACTS // 8 EXECUTIONS',
  title: 'Major Demolition Portfolio',
  description:
    'A curated photographic record of high-reach mechanical felling, marine wharf removals, and structural deconstruction across Dubai.',
  badgeCountText: '8 Verified Projects',
  projects: [
    {
      id: 'hp1',
      index: '01',
      title: 'Al Wasl Commercial High-Rise',
      category: 'High-Reach Mechanical',
      location: 'Sheikh Zayed Road, Dubai',
      clientType: 'Commercial Tower',
      authority: 'Dubai Municipality Class A',
      description:
        'Surgical mechanical teardown of a 26-story concrete tower standing 4.2m from the active Dubai Metro viaduct with zero track subsidence.',
      fullDetails:
        'Engineered top-down felling using remote-controlled demolition robots and 50-meter ultra-high-reach hydraulic excavators. Real-time seismic geophones confirmed 0.0mm vibration impact on the Red Line Metro viaduct throughout 45 consecutive work cycles.',
      specs: {
        heightOrArea: '26 Stories (92m)',
        vibrationLevel: '< 0.3 mm/s (DIN 4150)',
        recyclingRate: '98.2% Diverted',
        duration: '45 Days'
      },
      image: '/images/building_demolition_dubai_1791759699360.webp'
    },
    {
      id: 'hp2',
      index: '02',
      title: 'Palm Jumeirah Luxury Resort',
      category: 'Coastal Hospitality',
      location: 'The Crescent, Palm Jumeirah',
      clientType: '5-Star Resort Complex',
      authority: 'Trakhees & DM Marine NOC',
      description:
        'Selective deconstruction of a luxury beachfront hospitality resort, executed with zero marine siltation and 98% concrete recycling.',
      fullDetails:
        'Complete environmental strip-out and structural deconstruction of three 7-story beachfront wings. Floating double-layer geotextile silt curtains preserved Arabian Gulf coastal waters with zero marine impact and full environmental compliance.',
      specs: {
        heightOrArea: '3 Wings / 42,000 m²',
        vibrationLevel: '< 0.1 mm/s',
        recyclingRate: '98.5% Diverted',
        duration: '38 Days'
      },
      image: '/images/dubai_palm_resort_demolition_1791762297191.webp'
    },
    {
      id: 'hp3',
      index: '03',
      title: 'RTA Highway Viaduct Box Girder',
      category: 'Infrastructure Severance',
      location: 'Al Garhoud Corridor, Dubai',
      clientType: 'RTA Civil Infrastructure',
      authority: 'RTA Highway Clearance',
      description:
        'Nighttime structural severance and modular lowering of 80-tonne post-tensioned flyover spans directly above live 6-lane arterial traffic.',
      fullDetails:
        'High-speed diamond wire saw sectioning of post-tensioned concrete box girders during scheduled 4-hour midnight traffic closures. Tandem 500-tonne mobile cranes lifted 80-tonne blocks onto modular multi-axle transporters with zero disruption to morning traffic.',
      specs: {
        heightOrArea: '6 Viaduct Spans (240m)',
        vibrationLevel: '0.0 mm/s (Zero-Impact)',
        recyclingRate: '100% Recycled',
        duration: '14 Nights'
      },
      image: '/images/dubai_flyover_viaduct_demolition_1791762226685.webp'
    },
    {
      id: 'hp4',
      index: '04',
      title: 'Port Rashid Marine Quay & Wharf',
      category: 'Heavy Marine Extraction',
      location: 'Port Rashid, Bur Dubai',
      clientType: 'DP World Maritime Port',
      authority: 'Dubai Ports & Customs NOC',
      description:
        'Heavy marine demolition of a 450-meter industrial concrete wharf with compressed air bubble curtains to dampen shockwaves for coastal ecology.',
      fullDetails:
        'Barge-mounted heavy hydraulic shears and underwater wire cutting dismantled heavily reinforced marine quay walls and underwater mooring bollards. High-flow air compressors generated perimeter micro-bubble curtains to absorb hydroacoustic soundwaves.',
      specs: {
        heightOrArea: '450m Concrete Berth',
        vibrationLevel: 'Acoustic Dampened',
        recyclingRate: '96.8% Aggregate Reused',
        duration: '60 Days'
      },
      image: '/images/dubai_marine_wharf_demolition_1791762216315.webp'
    },
    {
      id: 'hp5',
      index: '05',
      title: 'Jebel Ali Industrial Silos Complex',
      category: 'Industrial Plant Drop',
      location: 'Jebel Ali Free Zone (JAFZA)',
      clientType: 'Cement Manufacturing Plant',
      authority: 'Civil Defense & JAFZA NOC',
      description:
        'Engineered directional drop of four 65-meter industrial cement silos with oscillating atomized mist cannons suppressing 98% of airborne particulate plume.',
      fullDetails:
        'Pre-weakening of high-tensile cylindrical concrete walls followed by pull-wire collapse inside a 15-meter containment safety perimeter. Dual turbine mist generators and perimeter earthen berms contained all dust without affecting adjacent logistics facilities.',
      specs: {
        heightOrArea: '4 Silos (65m Height)',
        vibrationLevel: '< 1.2 mm/s (Safe Range)',
        recyclingRate: '99.1% Crushed',
        duration: '21 Days'
      },
      image: '/images/dubai_silo_plant_demolition_1791762286680.webp'
    },
    {
      id: 'hp6',
      index: '06',
      title: 'Bridge Pier Heavy Core Sectioning',
      category: 'Diamond Wire Sawing',
      location: 'Dubai Creek Crossings',
      clientType: 'Municipal Waterway',
      authority: 'Dubai Municipality Class A',
      description:
        'Vibrationless surgical slicing of heavily reinforced 3.2-meter diameter concrete bridge piers without micro-cracking adjacent marine retaining abutments.',
      fullDetails:
        'Industrial diamond beaded electro-plated wire saws sliced through 3,200mm diameter reinforced concrete foundations underwater. Continuous closed-loop slurry vacuum extraction prevented water contamination while keeping adjacent active abutments intact.',
      specs: {
        heightOrArea: '12 Heavy Piers (3.2m Ø)',
        vibrationLevel: '0.00 mm/s (True Zero)',
        recyclingRate: '97.4% Recycled',
        duration: '28 Days'
      },
      image: '/images/structural_wire_sawing_1791759713427.webp'
    },
    {
      id: 'hp7',
      index: '07',
      title: 'Downtown Corporate Interior Strip-Out',
      category: 'Commercial Soft-Strip',
      location: 'Downtown Dubai / DIFC',
      clientType: 'AAA Financial Headquarters',
      authority: 'Dubai Civil Defense Clear',
      description:
        'Floor-by-floor concrete slab modification and soft-strip inside an occupied AAA financial headquarters with zero carbon exhaust and < 72 dBA noise.',
      fullDetails:
        'All-electric battery excavators and robotic Brokk crunchers performed slab coring and internal structural alterations directly above operating corporate tenants. Exhaust-free electric equipment ensured strict indoor air quality and compliant acoustic levels.',
      specs: {
        heightOrArea: '14 Occupied Floors',
        vibrationLevel: '< 0.05 mm/s',
        recyclingRate: '94.2% Diverted',
        duration: '35 Days'
      },
      image: '/images/interior_stripout_demolition_1791759731027.webp'
    },
    {
      id: 'hp8',
      index: '08',
      title: 'Business Bay Secant Shoring Pit',
      category: 'Subgrade Raft Extraction',
      location: 'Business Bay Canal Sector',
      clientType: 'Deep Basement Foundation',
      authority: 'DEWA & DM Subgrade NOC',
      description:
        'Excavator demolition of 18-meter-deep interlocking secant pile retention walls and 4-meter-thick mass foundation raft slabs along the Dubai Canal.',
      fullDetails:
        'Extraction of interlocking concrete secant retention piles anchored 18 meters into Dubai bedrock. Continuous dewatering with sediment filtration basins enabled heavy hydraulic breakers to extract 4,000mm mass raft slabs for immediate mobile on-site crushing.',
      specs: {
        heightOrArea: '18m Depth / 3 Basement Levels',
        vibrationLevel: '< 0.4 mm/s',
        recyclingRate: '98.9% Aggregate Base',
        duration: '50 Days'
      },
      image: '/images/deep_shoring_foundation_removal_1791759750345.webp'
    }
  ]
};

// 2. Building Demolition Dedicated Portfolio
export const BUILDING_DEMOLITION_PORTFOLIO: PortfolioCategoryData = {
  eyebrow: 'BUILDING DEMOLITION // CERTIFIED HIGH-REACH & MULTI-STOREY FELLING',
  title: 'Building Demolition Projects',
  description:
    'Verified photographic records of high-reach mechanical felling, residential tower teardowns, beachfront resorts, and municipal deconstructions across Dubai.',
  badgeCountText: '8 Building Demolitions',
  projects: [
    {
      id: 'bd1',
      index: '01',
      title: 'Al Wasl Commercial High-Rise',
      category: 'High-Reach Mechanical',
      location: 'Sheikh Zayed Road, Dubai',
      clientType: 'Commercial Tower (26F)',
      authority: 'Dubai Municipality Class A',
      description:
        'Surgical mechanical teardown of a 26-story concrete tower standing 4.2m from the active Dubai Metro viaduct with zero track subsidence.',
      fullDetails:
        'Engineered top-down felling using remote-controlled demolition robots and 50-meter ultra-high-reach hydraulic excavators. Real-time seismic geophones confirmed 0.0mm vibration impact on the Red Line Metro viaduct throughout 45 consecutive work cycles.',
      specs: {
        heightOrArea: '26 Stories (92m)',
        vibrationLevel: '< 0.3 mm/s (DIN 4150)',
        recyclingRate: '98.2% Diverted',
        duration: '45 Days'
      },
      image: '/images/building_demolition_dubai_1791759699360.webp'
    },
    {
      id: 'bd2',
      index: '02',
      title: 'Palm Jumeirah Beachfront Resort Wings',
      category: 'Coastal Structural Felling',
      location: 'The Crescent, Palm Jumeirah',
      clientType: '5-Star Resort Complex',
      authority: 'Trakhees & DM Marine NOC',
      description:
        'Selective deconstruction of a luxury beachfront hospitality resort, executed with zero marine siltation and 98% concrete recycling.',
      fullDetails:
        'Complete environmental strip-out and structural deconstruction of three 7-story beachfront wings. Floating double-layer geotextile silt curtains preserved Arabian Gulf coastal waters with zero marine impact and full environmental compliance.',
      specs: {
        heightOrArea: '3 Wings / 42,000 m²',
        vibrationLevel: '< 0.1 mm/s',
        recyclingRate: '98.5% Diverted',
        duration: '38 Days'
      },
      image: '/images/dubai_palm_resort_demolition_1791762297191.webp'
    },
    {
      id: 'bd3',
      index: '03',
      title: 'Deira Heritage Mixed-Use Complex',
      category: 'Dense Urban Top-Down',
      location: 'Al Rigga Road, Deira, Dubai',
      clientType: 'Commercial & Retail Plaza',
      authority: 'Dubai Municipality Historic Zone',
      description:
        'Controlled floor-by-floor mechanical deconstruction of an 8-story commercial block directly adjacent to live heritage street frontage.',
      fullDetails:
        'Telescopic crane hoist lifted compact electric mini-excavators to the rooftop for top-down slab and column pulverization. Perimeter acoustic and debris mesh scaffolding prevented any particulate discharge onto congested pedestrian walkways.',
      specs: {
        heightOrArea: '8 Stories (18,500 m²)',
        vibrationLevel: '< 0.2 mm/s',
        recyclingRate: '97.6% Diverted',
        duration: '30 Days'
      },
      image: '/images/real_dubai_plaza_hero_1791768452077.webp'
    },
    {
      id: 'bd4',
      index: '04',
      title: 'Downtown Dubai Mid-Rise Tower Teardown',
      category: 'Ultra-High-Reach Excavation',
      location: 'Financial Centre Road, Dubai',
      clientType: 'Mixed Commercial Development',
      authority: 'Dubai Civil Defense Class A',
      description:
        'Long-boom high-reach shear demolition of a 14-story concrete frame adjacent to active retail malls and corporate parking structures.',
      fullDetails:
        'Equipped with 42-meter heavy boom excavators and continuous dust suppression water mist cannons, our crew dismantled the superstructure bay-by-bay within an ultra-tight 12m perimeter boundary buffer.',
      specs: {
        heightOrArea: '14 Stories (48m)',
        vibrationLevel: '< 0.4 mm/s',
        recyclingRate: '98.8% Diverted',
        duration: '34 Days'
      },
      image: '/images/hero_building_demolition_1791830585768.webp'
    },
    {
      id: 'bd5',
      index: '05',
      title: 'Sheikh Zayed Road Financial Headquarters',
      category: 'Structural Framework Dismantling',
      location: 'Trade Centre 1, Sheikh Zayed Road',
      clientType: 'Banking Headquarters',
      authority: 'Dubai Municipality & RTA NOC',
      description:
        'Engineered deconstruction of an obsolete 12-story commercial banking structure with zero disruption to SZR highway traffic flows.',
      fullDetails:
        'Sequential column de-loading, perimeter catch nets, and night-shift mechanical crunching removed post-tensioned floor plates without generating acoustic peaks during normal business hours.',
      specs: {
        heightOrArea: '12 Floors / 22,000 m²',
        vibrationLevel: '< 0.15 mm/s',
        recyclingRate: '99.0% Recycled',
        duration: '28 Days'
      },
      image: '/images/real_plaza_demolish_mid_1791768516531.webp'
    },
    {
      id: 'bd6',
      index: '06',
      title: 'Al Barsha Multi-Wing Residential Complex',
      category: 'Complete Compound Teardown',
      location: 'Al Barsha South, Dubai',
      clientType: 'Private Residential Compound',
      authority: 'Dubai Municipality Building Dept',
      description:
        'Simultaneous mechanical felling of five 4-story residential blocks with on-site aggregate crushing and foundation raft pulverizing.',
      fullDetails:
        'Rapid four-week turnkey execution utilizing multiple 40-ton excavators with hydraulic breakers and pulverizers. All concrete was crushed on-site into DM-compliant Grade 2 road-base material for immediate site reuse.',
      specs: {
        heightOrArea: '5 Blocks / 35,000 m²',
        vibrationLevel: '< 0.8 mm/s',
        recyclingRate: '99.4% Crushed & Reused',
        duration: '26 Days'
      },
      image: '/images/plaza_4k_hd_white_1791768728482.webp'
    },
    {
      id: 'bd7',
      index: '07',
      title: 'Jumeirah Luxury Beach Villa & Sub-Basement',
      category: 'Precision Residential Demolition',
      location: 'Jumeirah 1, Dubai Coastline',
      clientType: 'Ultra-Luxury Private Estate',
      authority: 'Dubai Municipality Class A',
      description:
        'Surgical residential demolition and subterranean basement extraction without disturbing adjacent high-value private beachfront villas.',
      fullDetails:
        'Vibrationless hydraulic rock splitters and rubber-tracked mini excavators excavated two basement levels directly adjoining neighboring boundary walls with 0.0mm lateral ground displacement.',
      specs: {
        heightOrArea: '3,800 m² Estate',
        vibrationLevel: '0.0 mm/s (Zero-Impact)',
        recyclingRate: '96.5% Diverted',
        duration: '16 Days'
      },
      image: '/images/uae_demolition_site_1791830061517.webp'
    },
    {
      id: 'bd8',
      index: '08',
      title: 'Dubai Marina Commercial Podium Slicing',
      category: 'Selective Structural Decoupling',
      location: 'Dubai Marina Promenade',
      clientType: 'Retail & Hospitality Podium',
      authority: 'Trakhees Civil Engineering',
      description:
        'Diamond wire sawing decoupling of a 5-story reinforced concrete podium structure from an adjoining 50-story residential skyscraper.',
      fullDetails:
        'Continuous diamond cable saw loops severed reinforced post-tensioned link beams without transmitting shockwaves or vibrational stress to the occupied residential tower columns.',
      specs: {
        heightOrArea: '5-Level Podium Slicing',
        vibrationLevel: '< 0.05 mm/s',
        recyclingRate: '98.0% Recycled',
        duration: '22 Days'
      },
      image: '/images/dubai_demolition_cleared_1791767868682.webp'
    }
  ]
};

// 3. Industrial Demolition Dedicated Portfolio
export const INDUSTRIAL_DEMOLITION_PORTFOLIO: PortfolioCategoryData = {
  eyebrow: 'INDUSTRIAL DEMOLITION // REFINERIES, PLANTS & SILO TEARDOWNS',
  title: 'Industrial & Plant Demolition Projects',
  description:
    'Documented industrial deconstruction contracts across petrochemical facilities, heavy cement silos, structural steel warehouses, and free zone plants.',
  badgeCountText: '8 Industrial Contracts',
  projects: [
    {
      id: 'id1',
      index: '01',
      title: 'Jebel Ali Industrial Silos Complex',
      category: 'Industrial Plant Drop',
      location: 'Jebel Ali Free Zone (JAFZA)',
      clientType: 'Cement Manufacturing Plant',
      authority: 'Civil Defense & JAFZA NOC',
      description:
        'Engineered directional drop of four 65-meter industrial cement silos with oscillating atomized mist cannons suppressing 98% of airborne particulate plume.',
      fullDetails:
        'Pre-weakening of high-tensile cylindrical concrete walls followed by pull-wire collapse inside a 15-meter containment safety perimeter. Dual turbine mist generators and perimeter earthen berms contained all dust without affecting adjacent logistics facilities.',
      specs: {
        heightOrArea: '4 Silos (65m Height)',
        vibrationLevel: '< 1.2 mm/s (Safe Range)',
        recyclingRate: '99.1% Crushed',
        duration: '21 Days'
      },
      image: '/images/dubai_silo_plant_demolition_1791762286680.webp'
    },
    {
      id: 'id2',
      index: '02',
      title: 'JAFZA Petrochemical Processing Terminal',
      category: 'Hydrocarbon Unit Dismantling',
      location: 'Jebel Ali Port Chemical Sector',
      clientType: 'Petrochemical Storage Terminal',
      authority: 'Trakhees EHS Hazardous Division',
      description:
        'Cold-cutting deconstruction of hydrocarbon processing units, pipe racks, and chemical transfer lines with zero explosive or ignition hazards.',
      fullDetails:
        'Non-spark hydraulic shears and diamond wire cutting units operated under certified inert atmospheric nitrogen purging. Full LEL gas monitoring arrays confirmed 0% combustible gases throughout 35 dismantling shifts.',
      specs: {
        heightOrArea: '14,000m Pipeline & 6 Vessels',
        vibrationLevel: '< 0.05 mm/s',
        recyclingRate: '99.5% High-Grade Steel',
        duration: '32 Days'
      },
      image: '/images/demolition_heavy_shear_1791756033650.webp'
    },
    {
      id: 'id3',
      index: '03',
      title: 'KIZAD Heavy Structural Steel Gantry & Mill',
      category: 'High-Tonnage Steel Shearing',
      location: 'Khalifa Industrial Zone (KIZAD), Abu Dhabi',
      clientType: 'Steel Fabrication Facility',
      authority: 'AD Ports EHS & Civil Defense',
      description:
        'Rigged crane pick and high-tonnage mobile shear processing of an 8,000-tonne portal frame industrial steel rolling mill and overhead cranes.',
      fullDetails:
        'Tandem 400-tonne crawler cranes stabilized 60-meter roof trusses while excavator-mounted shears severed connection pin nodes. All structural steel was sized, categorized, and loaded directly for export-grade circular smelting.',
      specs: {
        heightOrArea: '8,200 Tonnes Structural Steel',
        vibrationLevel: '0.0 mm/s',
        recyclingRate: '100% Recycled Steel',
        duration: '40 Days'
      },
      image: '/images/controlled_implosion_sequence_1791756049767.webp'
    },
    {
      id: 'id4',
      index: '04',
      title: 'Al Quoz Bulk Storage Tank Farm',
      category: 'Bulk Tank Deconstruction',
      location: 'Al Quoz Industrial Area 4, Dubai',
      clientType: 'Commercial Fuel Distribution',
      authority: 'Dubai Civil Defense HAZMAT',
      description:
        'Surgical dismantling of eight 22-meter diameter vertical fuel storage tanks and reinforced concrete blast bund containment walls.',
      fullDetails:
        'Tank jacking and top-down ring cutting utilizing spark-free cold hydraulic nibblers. Heavy concrete bund walls were crushed on-site with hydraulic pulverizers under water curtain dust mitigation.',
      specs: {
        heightOrArea: '8 Vertical Storage Tanks',
        vibrationLevel: '< 0.2 mm/s',
        recyclingRate: '98.7% Salvaged',
        duration: '24 Days'
      },
      image: '/images/uae_demolition_site_1791830061517.webp'
    },
    {
      id: 'id5',
      index: '05',
      title: 'Dubai Industrial City 132kV Substation',
      category: 'Power Plant Decommissioning',
      location: 'Dubai Industrial City (DIC)',
      clientType: 'Electrical Infrastructure Plant',
      authority: 'DEWA Electromechanical Division',
      description:
        'Turnkey decommissioning of high-voltage step-down transformers, SF6 gas circuit breakers, and blast-resistant concrete dividing walls.',
      fullDetails:
        'Safe handling and recovery of dielectric transformer insulating oils under UAE Ministry of Climate Change guidelines. Heavy concrete dividing blast walls were mechanically sectioned and extracted without ground shock.',
      specs: {
        heightOrArea: '4 Heavy Transformer Bays',
        vibrationLevel: '< 0.1 mm/s',
        recyclingRate: '97.2% Copper & Steel',
        duration: '18 Days'
      },
      image: '/images/dubai_demolition_cleared_1791767868682.webp'
    },
    {
      id: 'id6',
      index: '06',
      title: 'Ras Al Khaimah Cement Rotary Kiln & Mast',
      category: 'Heavy Machinery Deconstruction',
      location: 'Khor Khwair Industrial Zone, RAK',
      clientType: 'Heavy Cement Production Facility',
      authority: 'RAK Municipality Environment Dept',
      description:
        'Heavy deconstruction of a 120-meter rotary kiln shell, refractory brick lining, and 75-meter pre-heater cyclone tower structure.',
      fullDetails:
        'Thermal refractory bricking was removed by robotic Brokk demolition machines inside the kiln barrel. The heavy steel kiln shell was sectioned into 25-tonne cylindrical rings using diamond wire cutting and tandem mobile crane lowering.',
      specs: {
        heightOrArea: '120m Kiln / 75m Tower',
        vibrationLevel: '< 0.3 mm/s',
        recyclingRate: '99.2% Recycled Materials',
        duration: '48 Days'
      },
      image: '/images/structural_wire_sawing_1791759713427.webp'
    },
    {
      id: 'id7',
      index: '07',
      title: 'Jebel Ali Marine Clinker Conveyor Gallery',
      category: 'Elevated Marine Gallery Teardown',
      location: 'Jebel Ali Bulk Terminal, Berth 14',
      clientType: 'Port Logistics Operator',
      authority: 'DP World Maritime & EHS',
      description:
        'Overhead deconstruction of an elevated 380-meter enclosed clinker conveyor bridge spanning active port transit roadways and docks.',
      fullDetails:
        'Modular segment uncoupling and heavy crane rigging carried out during 6-hour night shipping windows, ensuring zero cargo handling disruption across neighboring container berths.',
      specs: {
        heightOrArea: '380m Elevated Gallery (24m H)',
        vibrationLevel: '0.0 mm/s (Air Lift)',
        recyclingRate: '100% Salvage Yield',
        duration: '19 Days'
      },
      image: '/images/building_demolition_dubai_1791759699360.webp'
    },
    {
      id: 'id8',
      index: '08',
      title: 'Sharjah Industrial Area Warehouse Complex',
      category: 'Industrial Park Ground Clearance',
      location: 'Industrial Area 13, Sharjah',
      clientType: 'Manufacturing & Storage Park',
      authority: 'Sharjah Municipality & Civil Defense',
      description:
        'Turnkey clearance of twelve interconnected steel portal frame warehouses, underground sumps, and reinforced slab foundations.',
      fullDetails:
        'Simultaneous deployment of shear excavators and mobile jaw crushers cleared 65,000 square meters of industrial floor area back to certified virgin sub-grade level in record time.',
      specs: {
        heightOrArea: '12 Sheds / 65,000 m²',
        vibrationLevel: '< 0.5 mm/s',
        recyclingRate: '98.6% Diverted',
        duration: '30 Days'
      },
      image: '/images/robotic_concrete_cruncher_1791756065306.webp'
    }
  ]
};

// 4. Interior Strip-Out Dedicated Portfolio
export const INTERIOR_STRIPOUT_PORTFOLIO: PortfolioCategoryData = {
  eyebrow: 'INTERIOR STRIP-OUT // ARCHITECTURAL FIT-OUT & BARE-SHELL HANDOVER',
  title: 'Interior Strip-Out Projects',
  description:
    'Documented fit-out strip-outs across Grade-A commercial office towers, flagship retail malls, luxury hospitality resorts, and sterile healthcare facilities.',
  badgeCountText: '8 Commercial Strip-Outs',
  projects: [
    {
      id: 'is1',
      index: '01',
      title: 'Downtown DIFC Corporate Financial Tower',
      category: 'Commercial Soft-Strip',
      location: 'DIFC Financial District, Dubai',
      clientType: 'AAA Financial Headquarters',
      authority: 'Dubai Civil Defense & DIFC Authority',
      description:
        'Floor-by-floor concrete slab modification and soft-strip inside an occupied AAA financial headquarters with zero carbon exhaust and < 72 dBA noise.',
      fullDetails:
        'All-electric battery excavators and robotic Brokk crunchers performed slab coring and internal structural alterations directly above operating corporate tenants. Exhaust-free electric equipment ensured strict indoor air quality and compliant acoustic levels.',
      specs: {
        heightOrArea: '14 Occupied Floors',
        vibrationLevel: '< 0.05 mm/s',
        recyclingRate: '94.2% Diverted',
        duration: '35 Days'
      },
      image: '/images/interior_stripout_demolition_1791759731027.webp'
    },
    {
      id: 'is2',
      index: '02',
      title: 'The Dubai Mall Flagship Retail Overnight Defit',
      category: 'Mall Retail Night-Shift',
      location: 'Fashion Avenue, The Dubai Mall',
      clientType: 'International Luxury Brand',
      authority: 'Emaar Malls Fit-Out NOC',
      description:
        'Silent overnight deconstruction of a two-story 1,800 m² luxury boutique with negative-pressure HEPA filtration and zero mall atrium dust migration.',
      fullDetails:
        'Operated exclusively between 12:00 AM and 8:00 AM. Double-layer airtight zip-sealed poly barriers and industrial HEPA scrubbers contained all plaster and marble dust. Debris was transferred via rubber-padded quiet trolleys to designated service docks.',
      specs: {
        heightOrArea: '1,800 m² Luxury Retail',
        vibrationLevel: '0.00 mm/s',
        recyclingRate: '91.5% Diverted',
        duration: '10 Nights'
      },
      image: '/images/robotic_concrete_cruncher_1791756065306.webp'
    },
    {
      id: 'is3',
      index: '03',
      title: 'Palm Jumeirah 5-Star Resort Guest Suites',
      category: 'Phased Hospitality Refurbishment',
      location: 'The Palm Crescent, Dubai',
      clientType: '5-Star Hotel & Spa',
      authority: 'Trakhees & Hotel Engineering',
      description:
        'Phased bathroom marble gutting, joinery strip-out, and MEP isolation across 240 luxury guest suites while maintaining full hotel guest occupancy.',
      fullDetails:
        'Acoustic monitoring stations on adjoining guest floors verified compliance below 50 dBA during daytime hours. Non-percussive hydraulic tile lifters and diamond plunge saws eliminated structural impact noise.',
      specs: {
        heightOrArea: '240 Suites (6 Floors)',
        vibrationLevel: '< 0.02 mm/s (Silent)',
        recyclingRate: '93.0% Diverted',
        duration: '28 Days'
      },
      image: '/images/dubai_palm_resort_demolition_1791762297191.webp'
    },
    {
      id: 'is4',
      index: '04',
      title: 'Mall of the Emirates Anchor Department Store',
      category: 'High-Volume Commercial Defit',
      location: 'Mall of the Emirates, Dubai',
      clientType: 'Anchor Retail Operator',
      authority: 'Majid Al Futtaim Properties NOC',
      description:
        'Turnkey bare-shell stripping of a 6,500 m² three-level department store including escalator truss extraction and concrete screed grinding.',
      fullDetails:
        'Diamond stitch-coring and hydraulic gantries lowered two 14-tonne escalators to service level without impacting mall structural slabs. Planetary diamond grinders returned concrete slabs to landlord-certified CSP-3 bonding condition.',
      specs: {
        heightOrArea: '6,500 m² (3 Levels)',
        vibrationLevel: '< 0.1 mm/s',
        recyclingRate: '95.8% Diverted',
        duration: '21 Days'
      },
      image: '/images/deep_shoring_foundation_removal_1791759750345.webp'
    },
    {
      id: 'is5',
      index: '05',
      title: 'Dubai Airport Freezone (DAFZA) Concourse Defit',
      category: 'Aviation Secure Zone Clearance',
      location: 'DAFZA Aviation Hub, Terminal 2',
      clientType: 'Air Logistics Administration',
      authority: 'Dubai Civil Aviation Authority (DCAA)',
      description:
        'High-security architectural defit of airline executive lounges and administrative offices with 100% background-checked security clearance.',
      fullDetails:
        'Night-shift clearing of acoustic ceiling baffles, glazed partitions, raised flooring, and active MEP conduits with certified security protocols inside the customs bonded airport zone.',
      specs: {
        heightOrArea: '3,200 m² Secure Terminal',
        vibrationLevel: '< 0.05 mm/s',
        recyclingRate: '92.4% Diverted',
        duration: '14 Days'
      },
      image: '/images/dubai_engineers_inspection_1791761613623.webp'
    },
    {
      id: 'is6',
      index: '06',
      title: 'Dubai Healthcare City Clinic Strip-Out',
      category: 'Cleanroom Medical Defit',
      location: 'Dubai Healthcare City (DHCC)',
      clientType: 'Specialized Surgical Center',
      authority: 'DHCR Healthcare Authority NOC',
      description:
        'Sterile architectural strip-out of surgical theatres and radiology suites adjacent to live functioning medical treatment wards.',
      fullDetails:
        'Negative-pressure ante-chambers with sticky floor walk-offs and hospital-grade HEPA filtration preventing any airborne fungal spores or particulates from entering functioning HVAC ventilation systems.',
      specs: {
        heightOrArea: '1,400 m² Medical Facility',
        vibrationLevel: '0.00 mm/s',
        recyclingRate: '89.6% Diverted',
        duration: '12 Days'
      },
      image: '/images/faint_demolition_sketch_1791756966285.webp'
    },
    {
      id: 'is7',
      index: '07',
      title: 'Business Bay Executive Penthouse Gutting',
      category: 'Super-Prime Residential Strip',
      location: 'Marasi Marina, Business Bay',
      clientType: 'Ultra-Prime Penthouse Residence',
      authority: 'Dubai Municipality Class A',
      description:
        'Total bare-shell gutting of a 900 m² triplex penthouse atop a 45-story tower with dedicated external hoist and craning logistics.',
      fullDetails:
        'Heavy imported Italian marble, suspended drywall ceilings, custom bronze cladding, and private swimming pool linings stripped back to base concrete columns with zero elevator damage or noise complaints.',
      specs: {
        heightOrArea: '900 m² (Triplex Penthouse)',
        vibrationLevel: '< 0.05 mm/s',
        recyclingRate: '90.2% Diverted',
        duration: '15 Days'
      },
      image: '/images/dubai_plaza_intact_1791767847027.webp'
    },
    {
      id: 'is8',
      index: '08',
      title: 'Sheikh Zayed Road Flagship Showroom Base-Build',
      category: 'Automotive Showroom Defit',
      location: 'Sheikh Zayed Road, Al Quoz 1',
      clientType: 'Automotive Dealership Network',
      authority: 'Dubai Municipality Fit-Out NOC',
      description:
        'Curtain-wall glass removal, heavy terrazzo floor grinding, and complete MEP de-installation for a 4,000 m² automotive showroom handover.',
      fullDetails:
        'Suction-lifter crane extraction of oversized 6-meter laminated shopfront glass panels and pneumatic ride-on tile strippers clearing heavy floor adhesives back to smooth bare-shell condition.',
      specs: {
        heightOrArea: '4,000 m² Showroom Floor',
        vibrationLevel: '< 0.2 mm/s',
        recyclingRate: '96.0% Diverted',
        duration: '16 Days'
      },
      image: '/images/structural_wire_sawing_1791759713427.webp'
    }
  ]
};

// 5. Infrastructure Demolition Dedicated Portfolio
export const INFRASTRUCTURE_DEMOLITION_PORTFOLIO: PortfolioCategoryData = {
  eyebrow: 'INFRASTRUCTURE DEMOLITION // VIADUCTS, BRIDGES & MARITIME',
  title: 'Infrastructure & Bridge Demolition Projects',
  description:
    'Verified civil engineering project records across highway viaducts, coastal wharves, deep basement secant shoring, and metro transit corridors in the UAE.',
  badgeCountText: '8 Civil Infrastructure Projects',
  projects: [
    {
      id: 'in1',
      index: '01',
      title: 'RTA Highway Viaduct Box Girder Demolition',
      category: 'Infrastructure Severance',
      location: 'Al Garhoud Corridor, Dubai',
      clientType: 'RTA Civil Infrastructure',
      authority: 'RTA Highway Clearance NOC',
      description:
        'Nighttime structural severance and modular lowering of 80-tonne post-tensioned flyover spans directly above live 6-lane arterial traffic.',
      fullDetails:
        'High-speed diamond wire saw sectioning of post-tensioned concrete box girders during scheduled 4-hour midnight traffic closures. Tandem 500-tonne mobile cranes lifted 80-tonne blocks onto modular multi-axle transporters with zero disruption to morning traffic.',
      specs: {
        heightOrArea: '6 Viaduct Spans (240m)',
        vibrationLevel: '0.0 mm/s (Zero-Impact)',
        recyclingRate: '100% Recycled',
        duration: '14 Nights'
      },
      image: '/images/dubai_flyover_viaduct_demolition_1791762226685.webp'
    },
    {
      id: 'in2',
      index: '02',
      title: 'Port Rashid Marine Quay & Wharf Deconstruction',
      category: 'Heavy Marine Extraction',
      location: 'Port Rashid, Bur Dubai',
      clientType: 'DP World Maritime Port',
      authority: 'Dubai Ports & Customs NOC',
      description:
        'Heavy marine demolition of a 450-meter industrial concrete wharf with compressed air bubble curtains to dampen shockwaves for coastal ecology.',
      fullDetails:
        'Barge-mounted heavy hydraulic shears and underwater wire cutting dismantled heavily reinforced marine quay walls and underwater mooring bollards. High-flow air compressors generated perimeter micro-bubble curtains to absorb hydroacoustic soundwaves.',
      specs: {
        heightOrArea: '450m Concrete Berth',
        vibrationLevel: 'Acoustic Dampened',
        recyclingRate: '96.8% Aggregate Reused',
        duration: '60 Days'
      },
      image: '/images/dubai_marine_wharf_demolition_1791762216315.webp'
    },
    {
      id: 'in3',
      index: '03',
      title: 'Dubai Creek Bridge Pier Heavy Core Sectioning',
      category: 'Diamond Wire Sawing',
      location: 'Dubai Creek Crossings',
      clientType: 'Municipal Waterway',
      authority: 'Dubai Municipality Class A',
      description:
        'Vibrationless surgical slicing of heavily reinforced 3.2-meter diameter concrete bridge piers without micro-cracking adjacent marine retaining abutments.',
      fullDetails:
        'Industrial diamond beaded electro-plated wire saws sliced through 3,200mm diameter reinforced concrete foundations underwater. Continuous closed-loop slurry vacuum extraction prevented water contamination while keeping adjacent active abutments intact.',
      specs: {
        heightOrArea: '12 Heavy Piers (3.2m Ø)',
        vibrationLevel: '0.00 mm/s (True Zero)',
        recyclingRate: '97.4% Recycled',
        duration: '28 Days'
      },
      image: '/images/structural_wire_sawing_1791759713427.webp'
    },
    {
      id: 'in4',
      index: '04',
      title: 'Business Bay Secant Shoring Pit & Mass Raft',
      category: 'Subgrade Raft Extraction',
      location: 'Business Bay Canal Sector',
      clientType: 'Deep Basement Foundation',
      authority: 'DEWA & DM Subgrade NOC',
      description:
        'Excavator demolition of 18-meter-deep interlocking secant pile retention walls and 4-meter-thick mass foundation raft slabs along the Dubai Canal.',
      fullDetails:
        'Extraction of interlocking concrete secant retention piles anchored 18 meters into Dubai bedrock. Continuous dewatering with sediment filtration basins enabled heavy hydraulic breakers to extract 4,000mm mass raft slabs for immediate mobile on-site crushing.',
      specs: {
        heightOrArea: '18m Depth / 3 Basement Levels',
        vibrationLevel: '< 0.4 mm/s',
        recyclingRate: '98.9% Aggregate Base',
        duration: '50 Days'
      },
      image: '/images/deep_shoring_foundation_removal_1791759750345.webp'
    },
    {
      id: 'in5',
      index: '05',
      title: 'Dubai Metro Red Line Corridor Retaining Wall Severance',
      category: 'Transit Track Demolition',
      location: 'Al Jafiliya - World Trade Centre Corridor',
      clientType: 'Rail Transit Infrastructure',
      authority: 'RTA Rail Agency NOC',
      description:
        'Sub-millimeter vibration-controlled deconstruction of concrete retaining wingwalls 3 meters from live overhead Dubai Metro catenary lines.',
      fullDetails:
        'Precision stitch-drilling and diamond cable slicing eliminated all impact shockwaves. Continuous optical prisms and triaxial seismographs broadcast zero track movement to the central RTA rail control center.',
      specs: {
        heightOrArea: '180m Retaining Wall (8m H)',
        vibrationLevel: '< 0.1 mm/s (Zero Drift)',
        recyclingRate: '98.0% Recycled',
        duration: '18 Days'
      },
      image: '/images/dubai_plaza_intact_1791767847027.webp'
    },
    {
      id: 'in6',
      index: '06',
      title: 'Al Shindagha Underpass Approach Wingwall Slicing',
      category: 'Highway Box Cutting',
      location: 'Al Shindagha Corridor, Deira',
      clientType: 'Urban Highway Expansion',
      authority: 'RTA Highway Division',
      description:
        'Diamond wire cutting and crane hoisting of 30-tonne underpass wall panels alongside active tunnel vehicular traffic.',
      fullDetails:
        'Closed-loop vacuum slurry units contained all cutting water during diamond wire severance. Mobile hydraulic cranes picked severed panels during midnight closure intervals with zero lane contamination.',
      specs: {
        heightOrArea: '14 Heavy Wall Panels (420 Tonnes)',
        vibrationLevel: '0.0 mm/s',
        recyclingRate: '99.0% Reused',
        duration: '12 Nights'
      },
      image: '/images/uae_demolition_site_1791830061517.webp'
    },
    {
      id: 'in7',
      index: '07',
      title: 'Jebel Ali Maritime Container Berth Mooring Bollards',
      category: 'Quayside Hydro-Demolition',
      location: 'Terminal 1, Jebel Ali Commercial Port',
      clientType: 'Maritime Port Authority',
      authority: 'DP World Maritime & EHS',
      description:
        'High-pressure 3,000 bar hydro-demolition scarification and extraction of damaged high-tonnage ship mooring bollard concrete foundations.',
      fullDetails:
        'Selective ultra-high-pressure water jet milling cleared defective micro-cracked concrete while preserving all internal structural reinforcing steel bars for certified re-casting.',
      specs: {
        heightOrArea: '8 Heavy Mooring Bollards',
        vibrationLevel: '0.0 mm/s (Hydro Jet)',
        recyclingRate: '100% Water Recirculated',
        duration: '15 Days'
      },
      image: '/images/demolition_heavy_shear_1791756033650.webp'
    },
    {
      id: 'in8',
      index: '08',
      title: 'Dubai Water Canal Footbridge Abutment Removal',
      category: 'Canal Structural Clearance',
      location: 'Dubai Water Canal, Jumeirah Sector',
      clientType: 'Waterfront Development Authority',
      authority: 'Dubai Municipality Marine Division',
      description:
        'Controlled deconstruction and removal of temporary steel-reinforced concrete footbridge abutments on both banks of the Dubai Canal.',
      fullDetails:
        'Floating marine geotextile curtains prevented debris runoff into the active canal waterway. Excavator breakers with sound-suppression jackets demolished the reinforced abutments down to water level.',
      specs: {
        heightOrArea: '2 Canal Bank Abutments (1,200 m³)',
        vibrationLevel: '< 0.3 mm/s',
        recyclingRate: '98.5% Aggregates Reused',
        duration: '16 Days'
      },
      image: '/images/dubai_demolition_cleared_1791767868682.webp'
    }
  ]
};

// Map of all portfolios keyed by service ID
export const PORTFOLIOS_BY_SERVICE: Record<string, PortfolioCategoryData> = {
  home: HOME_PORTFOLIO,
  'building-demolition': BUILDING_DEMOLITION_PORTFOLIO,
  'industrial-demolition': INDUSTRIAL_DEMOLITION_PORTFOLIO,
  'interior-stripout': INTERIOR_STRIPOUT_PORTFOLIO,
  'infrastructure-demolition': INFRASTRUCTURE_DEMOLITION_PORTFOLIO
};
