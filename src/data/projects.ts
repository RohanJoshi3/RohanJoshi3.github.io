export type ProjectSection = {
  heading: string;
  eyebrow?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectMeta = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  imageAlt: string;
  sourceUrl?: string;
  tags: string[];
  meta: ProjectMeta[];
  highlights: string[];
  sections: ProjectSection[];
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: 'finsight',
    title: 'FINsight: Strain-Sensing Fins for Aerodynamic Data Collection',
    shortTitle: 'FINsight',
    category: 'Rocketry / Embedded Systems',
    date: 'Duke AERO 2023-24',
    summary:
      'A strain-sensing fin system built for Duke AERO rocket flight analysis using custom PCBs, Wheatstone bridges, ADCs, and embedded data collection.',
    image: 'projects/finsight-launch.webp',
    imageAlt: 'Pitchfork rocket launching at Spaceport America Cup',
    sourceUrl: 'https://sites.duke.edu/rohanjoshi/2024/09/06/240/',
    tags: ['Aeroelasticity', 'PCB design', 'Embedded systems', 'Wind tunnel testing'],
    meta: [
      { label: 'Role', value: 'Subsystem lead for FINsight development' },
      { label: 'Vehicle', value: 'Duke AERO Pitchfork rocket' },
      { label: 'Hardware', value: '0.4 mm PCBs, strain gauges, NAU7802 ADCs, Teensy 4.1' },
      { label: 'Validation', value: 'Wind tunnel testing up to 35 m/s plus thermal calibration' },
    ],
    highlights: [
      'Embedded strain gauges directly into composite rocket fins to measure aerodynamic loading in flight.',
      'Moved sensitive electronics into a 3D-printed Strain Measurement Module to reduce thermal and structural risk near the motor casing.',
      'Connected fin strain data to future design decisions around geometry, mounting, vibration, flutter, and control.',
    ],
    sections: [
      {
        heading: 'Problem',
        eyebrow: 'Why it mattered',
        paragraphs: [
          "Traditional rocket flight data often relies on simulations, onboard cameras, or indirect measurements. Those tools are useful, but they do not directly capture how each fin behaves under real aerodynamic loading. FINsight was created to close that gap by measuring strain at the fin level during flight.",
          "As part of Duke AERO's Pitchfork rocket project, I led development of a system that integrates strain gauges into the fins themselves. The goal was to produce high-resolution data that could reveal how aerodynamic loads, vibration, and temperature changes affect fin behavior during launch.",
        ],
      },
      {
        heading: 'System Architecture',
        eyebrow: 'Electronics and sensing',
        paragraphs: [
          'FINsight uses custom-designed printed circuit boards where copper-trace strain gauges are placed according to modal analysis of the first three fin vibration modes. The strain gauges are arranged as part of a Wheatstone bridge circuit, allowing small fin deformations to be converted into measurable voltage changes.',
          'Those voltage fluctuations are captured by NAU7802 24-bit analog-to-digital converters and processed by a Teensy 4.1 microcontroller. The full electronics stack is housed in a 3D-printed Strain Measurement Module inside the rocket body, which keeps sensitive components away from the high-temperature region near the motor casing.',
        ],
        bullets: [
          'Copper-trace gauges were integrated into custom fin PCBs rather than added as external sensors.',
          'Dual lithium-ion batteries were used to support reliable operation through launch.',
          'Thermal measurement was included so temperature effects could be separated from structural strain.',
        ],
      },
      {
        heading: 'Mechanical Integration',
        eyebrow: 'Composite fin design',
        paragraphs: [
          'The fins use a sandwich composite structure: a G-10 fiberglass core, the PCB on one side, and carbon fiber reinforcement on the other. This maintained strength while giving FINsight access to the fin strain field. To keep the fin structurally balanced and reduce electrical interference, the PCB was coated with UV-cured solder mask.',
          "Because the PCBs were only 0.4 mm thick, the sensing layer could be added without heavily disturbing the fin's aerodynamic or structural profile. Wiring passed through small slits that were sealed with a carbon-epoxy mix to preserve airframe integrity.",
        ],
      },
      {
        heading: 'Testing and Results',
        eyebrow: 'Validation loop',
        paragraphs: [
          'The system was tested through wind tunnel runs and thermal calibration. In wind tunnel testing, the rocket was exposed to airspeeds up to 35 m/s at high angles of attack to simulate demanding aerodynamic conditions. The strain gauge readings showed a clear relationship between voltage and airspeed, validating that the system was capturing fin loading.',
          'Thermal calibration helped identify how temperature fluctuations could bias the measurements. With the thermocouple integrated into the fin system, FINsight could separate thermal effects from aerodynamic strain more effectively.',
        ],
      },
      {
        heading: 'Impact',
        eyebrow: 'What the data enables',
        paragraphs: [
          'The value of FINsight is not only the measurement system itself, but the design feedback it creates. The data can inform future fin geometry, mounting procedures, mass distribution, and vibration mitigation strategies. It also creates a path toward actively controlled fins that respond to flutter or aerodynamic loading in real time.',
          "As the system matures, future work includes improving calibration, reducing thermal noise, and refining the electronics for better sensitivity and robustness. The long-term goal is to make FINsight a standard part of Duke AERO's design and validation process for future rockets.",
        ],
      },
    ],
    gallery: [
      {
        src: 'projects/finsight-launch.webp',
        alt: 'Pitchfork rocket launch',
        caption: 'Pitchfork launch imagery used to represent the FINsight flight system.',
      },
      {
        src: 'projects/finsight-poster.webp',
        alt: 'Duke AERO 2024 Spaceport America Cup poster preview',
        caption: 'Technical poster preview from the 2024 Spaceport America Cup project.',
      },
    ],
  },
  {
    slug: 'oect-biosensor',
    title: 'OECT Research: Aerospace Applications',
    shortTitle: 'OECT Biosensor',
    category: 'Nanotechnology Research',
    date: 'Summer 2023',
    summary:
      'Research on Organic Electrochemical Transistors for non-invasive glucose detection in aerospace health-monitoring environments.',
    image: 'projects/oect-hero.png',
    imageAlt: 'OECT research setup and sensor diagrams',
    sourceUrl: 'https://sites.duke.edu/rohanjoshi/oect-research-aerospace-applications/',
    tags: ['Nanobiosensors', 'Electrochemistry', 'Data collection', 'Aerospace medicine'],
    meta: [
      { label: 'Program', value: 'Embry-Riddle REU Exploring Aerospace' },
      { label: 'Research focus', value: 'Organic Electrochemical Transistors for sweat glucose detection' },
      { label: 'Device', value: 'Micrux microfluidic electrochemical sensor with four gold electrodes' },
      { label: 'Comparison', value: 'PEDOT versus PEDOT/Graphene semiconductor layers' },
    ],
    highlights: [
      'Fabricated and tested two OECT variants for non-invasive glucose sensing.',
      'Collected concentration-response data across 0.001 mM to 10 mM glucose solutions.',
      'Found that PEDOT/Graphene produced more than double the sensitivity of the standard PEDOT device.',
    ],
    sections: [
      {
        heading: 'Research Context',
        eyebrow: 'Aerospace health monitoring',
        paragraphs: [
          'During the summer, I interned at Embry-Riddle Aeronautical University as part of the REU Exploring Aerospace program. My research focused on Organic Electrochemical Transistors for glucose detection from human sweat, combining electrical engineering, biomedical engineering, chemistry, and aerospace applications.',
          'Pilots and astronauts operate in environments where conventional health-monitoring hardware can be too complex, maintenance-heavy, or slow to recalibrate. The project explored whether OECTs could support simpler real-time monitoring through a non-invasive sweat-based glucose sensor.',
        ],
      },
      {
        heading: 'Device Fabrication',
        eyebrow: 'Sensor construction',
        paragraphs: [
          'The device used a Micrux Microfluidic and Electrochemical Sensor integrated on a single chip with four gold electrodes and a glass substrate. The compact 10 x 6 x 0.75 mm sensor array included a 40 um channel height and 250 um/1 mm channel width for controlled electrochemical measurements.',
          'To fabricate the transistor, the electrodes were masked with Teflon tape so only the interdigitated electrodes remained exposed. A PEDOT:PSS semiconductor solution was deposited between the source and drain electrodes and electrospun to create a thin, uniform layer. A second device used PEDOT mixed with graphene to improve sensitivity and selectivity.',
          'Both device versions were annealed at 130 C to improve adhesion and electronic performance. A glucose oxidase enzyme solution was then drop-cast onto the gate electrode with chitosan to adhere the enzyme to the gold surface.',
        ],
      },
      {
        heading: 'Experimental Method',
        eyebrow: 'Measurement workflow',
        paragraphs: [
          'The electrodes were connected to a Keithley 2612B source measure unit using micropositioners, allowing controlled electrical measurements across the device. The first step was measuring current response over a range of gate voltages with phosphate-buffered saline as the electrolyte. This provided the transconductance data needed to choose operating conditions.',
          'Using those conditions, I measured current response at glucose concentrations from 0.001 mM to 10 mM. The sensor output was then compared across the two semiconductor variants to evaluate sensitivity, selectivity, and current-voltage behavior.',
        ],
      },
      {
        heading: 'Results',
        eyebrow: 'What changed with graphene',
        bullets: [
          'PEDOT/Graphene demonstrated sensitivity more than twice that of the standard PEDOT device.',
          'Both devices showed sigmoid transfer curves, but the graphene-enhanced device produced a stronger current response.',
          'The sensitivity increase was tied to graphene higher surface area and improved electron mobility.',
        ],
      },
      {
        heading: 'Takeaway',
        eyebrow: 'Research significance',
        paragraphs: [
          'The work showed that OECTs are a promising platform for non-invasive glucose monitoring in challenging aerospace environments. It also demonstrated how material changes at the semiconductor layer can meaningfully affect sensor performance.',
          'Future work could explore additional semiconductor materials, n-type variants, and device-level modifications that make the sensor more stable and practical for biomedical and aerospace use.',
        ],
      },
    ],
    gallery: [
      {
        src: 'projects/oect-hero.png',
        alt: 'OECT research overview image',
        caption: 'Research overview visual from the OECT project page.',
      },
      {
        src: 'projects/oect-lab.jpg',
        alt: 'OECT experiment hardware and lab setup',
        caption: 'Experimental setup used for OECT glucose sensing measurements.',
      },
      {
        src: 'projects/oect-results.png',
        alt: 'OECT current response results',
        caption: 'Data output used to compare PEDOT and PEDOT/Graphene OECT performance.',
      },
    ],
  },
  {
    slug: 'trash-trap',
    title: 'Beaver Marsh Trash Trap',
    shortTitle: 'Trash Trap System',
    category: 'Design / Environmental Engineering',
    date: 'Engineering Design',
    summary:
      'A storm-drain trash trap designed to stop debris from entering Beaver Marsh Preserve while allowing turtles to pass safely.',
    image: 'projects/trash-prototype.jpg',
    imageAlt: 'Beaver Marsh trash trap prototype',
    sourceUrl: 'https://sites.duke.edu/rohanjoshi/beaver-marsh-trash-trap/',
    tags: ['Human-centered design', 'Prototyping', 'Environmental protection', 'Client constraints'],
    meta: [
      { label: 'Client need', value: 'Block trash entering Beaver Marsh Preserve' },
      { label: 'Constraint', value: 'Allow turtles to escape safely through the storm-drain path' },
      { label: 'Team', value: 'Four-person engineering design group' },
      { label: 'Outcome', value: 'Trap remained in service through heavy storms with no trapped turtles reported' },
    ],
    highlights: [
      'Balanced debris collection with wildlife safety, rather than treating the trap as a simple grate.',
      'Used an inclined mesh floor to preserve water flow while catching trash before it entered the preserve.',
      'Added weighted transparent flaps to stop debris while giving turtles an escape route back into the marsh.',
    ],
    sections: [
      {
        heading: 'Design Challenge',
        eyebrow: 'Two goals in one system',
        paragraphs: [
          'For my Engineering and Design course at Duke, I worked with three other engineers to create a trash trap for Beaver Marsh Preserve in Durham, NC. The site needed protection from trash flowing out of a nearby storm drain, but the solution also had to account for turtles that could enter the drain while trying to return to the marsh.',
          'A conventional trap could block debris, but it could also trap wildlife. The project therefore required a design that protected the preserve without creating a new hazard for the animals living around it.',
        ],
      },
      {
        heading: 'Concept Development',
        eyebrow: 'From constraints to mechanism',
        paragraphs: [
          'The team evaluated multiple design directions around water flow, debris capture, turtle movement, cost, and manufacturability. We converged on an inclined mesh system that allows water to pass through the bottom while preventing larger trash from moving into the preserve.',
          'At the end of the trap, we added two weighted transparent flaps. These flaps act as an added debris barrier while still giving turtles a way to push through and return to the marsh. Transparency mattered because the animals needed a visible path rather than a fully opaque obstruction.',
        ],
      },
      {
        heading: 'Prototype Logic',
        eyebrow: 'Why the geometry works',
        bullets: [
          'Inclined mesh reduces the chance that flow pressure pins debris flat against the trap.',
          'The open mesh surface preserves drainage capacity during rain events.',
          'Weighted flaps create asymmetric behavior: hard for trash to pass downstream, easier for turtles to push through from the outside path.',
          'The design keeps maintenance realistic for a preserve setting where access and inspection time are limited.',
        ],
      },
      {
        heading: 'Outcome',
        eyebrow: 'Field performance',
        paragraphs: [
          'The final design was considered successful by the client. It collected trash while maintaining a safe passage route for turtles, and one of the most important outcomes was that no turtles were reported trapped in the device.',
          'The trap also withstood heavy storms and remained installed after almost a year, showing that the structure was durable enough for the water and debris loads at the site. The project reinforced the importance of designing for both technical performance and ecological context.',
        ],
      },
    ],
    gallery: [
      {
        src: 'projects/trash-prototype.jpg',
        alt: 'Trash trap prototype',
        caption: 'Physical prototype image from the Beaver Marsh project page.',
      },
      {
        src: 'projects/trash-cad.png',
        alt: 'Trash trap CAD or layout image',
        caption: 'Design visual from the original Beaver Marsh project page.',
      },
    ],
  },
  {
    slug: 'rocketry-systems',
    title: 'Rocketry Systems',
    shortTitle: 'Rocketry Systems',
    category: 'Aerospace Systems',
    date: 'Duke AERO',
    summary:
      'Avionics, air-brake, payload, guided recovery, and simulation work across student aerospace systems and launch operations.',
    image: 'projects/rocketry-pad.webp',
    imageAlt: 'Duke AERO rocket on the launch pad',
    sourceUrl: 'https://dukerocketry.com/past-projects/',
    tags: ['Avionics', 'Air brakes', 'Simulation', 'Launch operations'],
    meta: [
      { label: 'Organization', value: 'Duke AERO' },
      { label: 'System scope', value: 'Avionics, air brakes, simulation, payload and recovery interfaces' },
      { label: 'Environment', value: 'High-powered student launch vehicles' },
      { label: 'Engineering focus', value: 'Requirements, integration, testing, and field reliability' },
    ],
    highlights: [
      'Worked across subsystems where mechanical, electrical, and software constraints had to line up before launch.',
      'Built engineering judgment around integration: packaging, accessibility, test procedures, wiring, and launch-day serviceability.',
      'Connected analysis and simulation work to physical hardware decisions on student aerospace vehicles.',
    ],
    sections: [
      {
        heading: 'System Context',
        eyebrow: 'Student aerospace hardware',
        paragraphs: [
          'My rocketry work has centered on student-built aerospace systems that combine avionics, structures, simulation, integration, and flight operations. Across Duke AERO projects, I worked on avionics, air brakes, and simulation systems for high-powered rockets.',
          'This kind of work requires system-level thinking because a rocket is not a collection of isolated parts. A decision in the airframe can affect wiring paths, sensor placement, recovery volume, structural margins, and launch operations.',
        ],
      },
      {
        heading: 'Subsystem Work',
        eyebrow: 'Where the engineering converges',
        bullets: [
          'Avionics and embedded electronics for sensing, telemetry, and data collection.',
          'Variable-drag air-brake concepts used for apogee targeting and flight control studies.',
          'Simulation workflows for estimating performance before committing to hardware.',
          'Integration work that connects structures, payloads, electronics, recovery hardware, and operational procedures.',
        ],
      },
      {
        heading: 'Design Process',
        eyebrow: 'From model to launch rail',
        paragraphs: [
          'The practical challenge is moving from a clean model to a flight article that can survive handling, transport, arming, launch loads, and recovery. That means each subsystem has to be designed for access, assembly, testing, and inspection.',
          'A useful aerospace design is one that can be checked. I treated requirements, test plans, and integration constraints as design inputs, not documentation after the fact. That approach helped connect simulation results and hardware decisions to real launch-day conditions.',
        ],
      },
      {
        heading: 'Lessons',
        eyebrow: 'Why rocketry is a strong testbed',
        paragraphs: [
          'Rocketry is unforgiving in a way that makes it valuable: CAD, analysis, manufacturing, wiring, software, and operations all converge into one flight article. The work taught me to think through interfaces early and to validate assumptions with tests wherever possible.',
          'The most important lesson was that aerospace engineering quality depends on disciplined integration. A clever subsystem only matters if it works with the rest of the vehicle, can be verified, and can be operated reliably by the team under time pressure.',
        ],
      },
    ],
    gallery: [
      {
        src: 'projects/rocketry-pad.webp',
        alt: 'Rocket on launch pad',
        caption: 'Launch-pad image representing Duke AERO flight operations.',
      },
      {
        src: 'projects/rocketry-work.webp',
        alt: 'Students working on rocket systems',
        caption: 'Integration work on student aerospace hardware.',
      },
      {
        src: 'projects/rocketry-team.webp',
        alt: 'Duke AERO team with award',
        caption: 'Team project context from Duke AERO public project media.',
      },
    ],
  },
  {
    slug: 'active-suspension-capstone',
    title: 'Active Suspension Robot for Drop Impact Mitigation',
    shortTitle: 'Active Suspension Robot',
    category: 'Senior Design Capstone',
    date: 'Senior Design Capstone',
    summary:
      'A reusable active suspension platform designed to reduce peak impact loads during parachute-assisted payload delivery.',
    image: 'projects/capstone-active-suspension.jpg',
    imageAlt: 'Active suspension scissor-lift prototype on a workbench',
    tags: ['Dynamic systems', 'Active control', 'Impact testing', 'CAD and fabrication'],
    meta: [
      { label: 'Application', value: 'Parachute-assisted payload delivery and low-velocity airdrop protection' },
      { label: 'Impact condition', value: 'Payloads can reach impact speeds near 28.5 ft/s even in controlled drops' },
      { label: 'Core mechanism', value: 'Scissor-lift suspension with belt-brake energy dissipation' },
      { label: 'Goal', value: 'Reduce peak deceleration through reusable, adaptive impact mitigation' },
    ],
    highlights: [
      'Designed a reusable active suspension system as an alternative to single-use passive absorbers such as honeycomb structures and airbags.',
      'Converted vertical impact energy into controlled mechanical motion through a scissor mechanism and belt-brake routing path.',
      'Integrated mechanical design, dynamic modeling, structural analysis, prototyping, and test planning into one working capstone platform.',
    ],
    sections: [
      {
        heading: 'Problem Context',
        eyebrow: 'Why active impact mitigation',
        paragraphs: [
          'The project focused on designing and building an active suspension system capable of mitigating impact forces during drop events. The target application was parachute-assisted payload delivery, where even controlled low-velocity drops can create damaging deceleration loads when the payload reaches the ground.',
          'Existing impact protection systems often use crushable honeycomb structures, foam, or airbags. These solutions can be effective, but they are generally passive, single-use, and tuned for a narrow set of conditions. That limits reusability and makes it difficult to adapt to different payload masses, drop heights, or landing conditions.',
          'Our goal was to develop a reusable, actively controlled system that could respond to impact conditions and reduce the peak force transmitted to the payload.',
        ],
      },
      {
        heading: 'System Design',
        eyebrow: 'Mechanical architecture',
        paragraphs: [
          'The final prototype uses a scissor-lift style suspension structure to convert vertical impact motion into controlled mechanical travel. The top payload platform moves relative to the lower frame, giving the system stroke distance over which impact energy can be absorbed and dissipated.',
          'A belt-brake path routes the suspension motion through pulleys and a central braking element. This creates a way to tune resistance during compression, allowing the system to manage impact energy rather than relying only on fixed stiffness. The structure was designed around aluminum extrusion framing, machined brackets, scissor links, bearings, and guided sliding interfaces.',
        ],
        bullets: [
          'Suspension geometry provides controlled deformation during impact.',
          'Frame and linkage layout balance stroke length, stiffness, compactness, and manufacturability.',
          'Belt routing converts suspension motion into a controllable braking interaction.',
          'Mechanical stops and structural members protect the platform from overtravel and repeated impact loads.',
        ],
      },
      {
        heading: 'Engineering Requirements',
        eyebrow: 'Modeling before hardware',
        paragraphs: [
          'We first characterized the expected drop velocities and impact loads, using the 28.5 ft/s impact speed as a key design case. That analysis helped define the required stroke, energy capacity, structural robustness, and target deceleration reduction.',
          'The system had to reduce peak forces while remaining reusable. That meant designing for repeated impacts rather than one-time crushing. Requirements were framed around controlled energy dissipation, structural survival, repeatable response, and adaptability to different impact scenarios.',
        ],
        bullets: [
          'Reduce peak payload deceleration relative to passive impact mitigation.',
          'Dissipate energy in a controlled and repeatable way.',
          'Maintain structural integrity under repeated drop events.',
          'Support tuning through geometry, belt path, damping, and actuation response.',
        ],
      },
      {
        heading: 'Active Control Strategy',
        eyebrow: 'Adaptive response',
        paragraphs: [
          'The active portion of the design was intended to let the system adapt its damping behavior instead of behaving like a fixed passive absorber. During impact, sensing and control components can detect the state of the suspension and adjust the actuation or braking response.',
          'This creates a more flexible design space: the system can be tuned for softer initial engagement, stronger braking as stroke is consumed, or different response profiles depending on payload mass and drop severity. The control strategy connects the mechanical suspension to real-time system behavior.',
        ],
      },
      {
        heading: 'Prototype and Testing',
        eyebrow: 'From CAD to bench hardware',
        paragraphs: [
          'We built a physical prototype to evaluate the suspension architecture under drop-like conditions. The prototype allowed us to check whether the scissor geometry moved cleanly, whether the belt path remained aligned, and whether the frame was stiff enough to support repeated testing.',
          'Testing focused on measuring deceleration forces, validating the system response, and comparing performance against passive baselines. The most important engineering loop was iterative: model the dynamic behavior, build the mechanism, test the response, and refine the geometry and damping assumptions.',
        ],
      },
      {
        heading: 'Results and Takeaways',
        eyebrow: 'What the capstone validated',
        paragraphs: [
          'The final system demonstrated the feasibility of using an active suspension architecture to reduce peak impact forces while remaining reusable. Unlike passive absorbers that are consumed during a drop, this approach can recover after impact and be retuned for new conditions.',
          'The project reinforced that adaptive impact mitigation is a coupled mechanical and controls problem. Mechanical design determines the available stroke, load paths, and energy flow, while sensing and control determine how effectively the system can use that motion during a fast transient event.',
        ],
        bullets: [
          'Active systems can outperform passive approaches when the impact condition varies.',
          'Scissor geometry and belt-brake routing provide a practical way to convert impact motion into controlled energy dissipation.',
          'Iterative prototyping and testing are essential because real dynamic systems expose friction, compliance, alignment, and timing effects that models alone miss.',
        ],
      },
    ],
    gallery: [
      {
        src: 'projects/capstone-active-suspension.jpg',
        alt: 'Built active suspension prototype',
        caption: 'Built scissor-lift suspension prototype with aluminum frame, guided platform, and belt routing hardware.',
      },
      {
        src: 'projects/capstone-belt-path.png',
        alt: 'Belt brake routing diagram',
        caption: 'Belt-brake routing concept used to convert suspension travel into controllable braking resistance.',
      },
      {
        src: 'projects/capstone-scissor-geometry.png',
        alt: 'Scissor geometry model',
        caption: 'Scissor mechanism geometry used to relate platform stroke, linkage motion, and suspension response.',
      },
      {
        src: 'projects/capstone-deceleration.png',
        alt: 'Modeled deceleration forces plot',
        caption: 'Modeled deceleration behavior used to evaluate impact force reduction and tune the response.',
      },
    ],
  },
  {
    slug: 'spacex-dragon-structures',
    title: 'SpaceX - Dragon Structures Engineering Intern',
    shortTitle: 'SpaceX Dragon Structures',
    category: 'Aerospace Structures Internship',
    date: 'SpaceX Internship',
    summary:
      'Structural analysis, qualification, and test-correlation work for Dragon flight hardware and Ground Support Equipment supporting launch operations at Cape Canaveral.',
    image: 'projects/spacex-dragon-structures.svg',
    imageAlt: 'Technical schematic representing Dragon structures analysis and qualification work',
    tags: ['Structural analysis', 'Qualification testing', 'Fatigue and fracture', 'Engineering tools'],
    meta: [
      { label: 'Team', value: 'Dragon Structures' },
      { label: 'Site context', value: 'Launch operations and integration support at Cape Canaveral' },
      { label: 'Scope', value: 'Flight hardware, Ground Support Equipment, structural tests, and reusable analysis tools' },
      { label: 'Confidentiality', value: 'Specific component-level details omitted' },
    ],
    highlights: [
      'Combined FEA, hand calculations, fatigue analysis, fracture mechanics, and test correlation to support structural qualification decisions.',
      'Developed reusable procedures and analysis tools that reduced turnaround time for recurring damage assessments.',
      'Improved confidence in structural load testing by identifying test-to-flight differences and redesigning supporting GSE.',
    ],
    sections: [
      {
        heading: 'Overview',
        eyebrow: 'Dragon structures engineering',
        paragraphs: [
          'During my internship on the Dragon Structures team at SpaceX, I worked on structural analysis, qualification, and testing of flight hardware and Ground Support Equipment supporting launch operations at Cape Canaveral.',
          'My work focused on validating structural integrity, improving testing methodologies, and developing reusable engineering tools and procedures. The goal was to streamline analysis, expand allowable limits for critical components, and support safe reuse of hardware across flight and launch operations.',
          'The role combined finite element analysis, hand calculations, fatigue and fracture mechanics, test design, data correlation, and cross-functional collaboration with launch and test engineering teams. Due to confidentiality, specific component-level details are omitted.',
        ],
      },
      {
        heading: 'Contributions',
        eyebrow: 'Analysis, procedures, and qualification',
        paragraphs: [
          'My contributions spanned four connected areas: GSE structural validation, repeatable procedure development, fatigue and damage tolerance analysis, and structural load test design.',
        ],
        bullets: [
          'Structural validation of GSE: performed ANSYS analysis to evaluate load cases, stress distributions, yield margins, and ultimate margins under operational conditions.',
          'Launch integration support: collaborated with launch engineering teams to support GSE integration and deployment at the Cape Canaveral launch site.',
          'Standard Repeatable Procedure development: authored an SRP for Dragon ballast components to streamline assessment of recurring damage scenarios.',
          'Allowable-limit expansion: developed validated criteria to pre-approve common damage cases and expand allowable limits by up to 20x.',
          'Master hand-calculation tool: built a reusable calculation workflow incorporating thermal knockdown factors, flight stress conditions, and multiple structural failure modes.',
          'Fatigue qualification support: conducted damage equivalency and fatigue analysis for Dragon lifting lugs as part of a 15-flight qualification campaign.',
          'Fracture mechanics: used NASGRO to assess crack growth behavior, confirm no fracture risk under expected conditions, and evaluate robustness against pitting and surface damage.',
          'Test design and correlation: developed linear and non-linear FEMAP models, correlated simulation results with flight data post-processed in ABAQUS via META, and redesigned test GSE to better replicate real flight loading.',
        ],
      },
      {
        heading: 'Impact',
        eyebrow: 'Operational engineering value',
        paragraphs: [
          'The internship work produced direct value by making structural assessments faster, more repeatable, and easier to scale. Reusable procedures and calculation tools reduced the time required to evaluate recurring cases while preserving the rigor needed for flight hardware decisions.',
          'The test design work improved test-to-flight correlation, increasing confidence that qualification testing represented real loading conditions. The analysis also supported safe and reliable operation of flight hardware and GSE tied to launch infrastructure at Cape Canaveral.',
        ],
        bullets: [
          'Enabled faster structural assessments through reusable tools and standardized procedures.',
          'Improved confidence in qualification methods by aligning structural tests more closely with flight conditions.',
          'Supported safe reuse of flight hardware by combining fatigue, fracture, and margin-based structural analysis.',
          'Contributed to real launch operations through engineering support for GSE and Dragon-related infrastructure.',
        ],
      },
      {
        heading: 'Tools',
        eyebrow: 'Engineering stack',
        paragraphs: [
          'The project required using simulation, analysis, and data-processing tools together rather than relying on any single method. Structural validation depended on connecting finite element results, hand calculations, test data, and fracture mechanics checks into a defensible engineering argument.',
        ],
        bullets: [
          'ANSYS for structural validation, load case analysis, and margin checks.',
          'FEMAP / Nastran for linear and non-linear finite element modeling.',
          'ABAQUS with META for flight data post-processing and correlation workflows.',
          'NASGRO for crack growth and fracture mechanics assessment.',
          'Excel for engineering models, damage equivalency calculations, and reusable analysis automation.',
        ],
      },
    ],
    gallery: [
      {
        src: 'projects/spacex-dragon-structures.svg',
        alt: 'Dragon Structures engineering schematic',
        caption:
          'Custom schematic representing the confidential structural analysis, qualification, and test-correlation work from the internship.',
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
