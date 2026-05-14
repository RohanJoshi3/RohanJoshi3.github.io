export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
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
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          "As part of Duke AERO's rocket project, Pitchfork, I spearheaded the development of FINsight, a cutting-edge system designed to measure in-flight aerodynamic loads on the fins. This system integrates strain gauges directly into the rocket's fins, providing high-resolution data on the forces experienced during flight. By leveraging this data, we aimed to gain deeper insights into the structural behavior of the fins, surpassing traditional methods like onboard cameras or simulations in accuracy and relevance.",
          'FINsight utilizes custom-designed printed circuit boards (PCBs) where strain gauges, made from copper traces, are strategically placed based on modal analysis of the first three fin vibration modes. These strain gauges form part of a Wheatstone bridge circuit, which detects deformation in the fins. As aerodynamic loads deform the fins, the gauges measure the resulting voltage changes. These fluctuations are captured by high-precision NAU7802 24-bit analog-to-digital converters (ADCs) and processed by a Teensy 4.1 microcontroller. The entire system is housed within a 3D-printed Strain Measurement Module (SMM) mounted inside the rocket.',
          "To minimize interference with the structural integrity of the fins, the PCBs are only 0.4 mm thick. Additionally, the electronic components were relocated to the SMM in the rocket's body, avoiding thermal damage near the motor casing. The system is powered by dual lithium-ion batteries, ensuring reliable performance throughout the flight.",
        ],
      },
      {
        heading: 'Fin Integration',
        paragraphs: [
          'The fins themselves are made using a sandwich composite structure. A G-10 fiberglass core was layered with the PCB on one side and carbon fiber reinforcement on the other to ensure strength and minimize torsional stress. To maintain structural symmetry and prevent signal interference from the carbon fiber, the PCBs were coated with a UV-cured solder mask. The system was connected to the SMM via small wire slits that were sealed with a carbon-epoxy mix, preserving the airframe integrity.',
        ],
      },
      {
        heading: 'Testing and Impact',
        paragraphs: [
          'A series of wind tunnel tests and thermal calibrations were performed to validate the performance of FINsight. The wind tunnel tests exposed the rocket to speeds up to 35 m/s at high angles of attack, simulating transonic flight conditions. Strain gauge readings showed a clear correlation between voltage and airspeed, verifying that the system accurately captured aerodynamic loads. Additionally, thermal tests helped mitigate the effects of temperature fluctuations, using a thermocouple integrated into the fins to calibrate the system in real-time.',
          'The data collected by FINsight provides unparalleled insights into the aerodynamic forces acting on each fin. This information will directly influence future fin designs by informing decisions about fin geometry, weight, and mounting procedures to mitigate vibrations and improve flight stability. More importantly, this technology opens the door to advanced applications such as actively-controlled fins that can adjust to suppress flutter, enhancing rocket guidance, navigation, and control in real-time.',
          "As FINsight progresses, we aim to improve calibration techniques for even more accurate data, reduce thermal noise through better insulation, and refine the electronics to optimize the system's sensitivity and robustness. Ultimately, FINsight represents a significant advancement in our understanding of aeroelastic behavior, and our goal is to make it a standard part of Duke AERO's design process for future rockets.",
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
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'During the summer, I interned at Embry Riddle Aeronautical University as part of their REU Exploring Aerospace program. My research focused on developing and testing a cutting-edge nanobiosensor called the Organic Electrochemical Transistor (OECT) for glucose detection from human sweat. This work merged elements of electrical engineering, biomedical engineering, and chemistry, aiming to create a reliable method for non-invasive health monitoring, particularly for pilots and astronauts in aerospace environments.',
          'Glucose monitoring in these environments presents unique challenges due to the complexity, maintenance, and frequent recalibration requirements of conventional devices. My research tackled these limitations by exploring a simpler, more effective approach for real-time health monitoring. Despite the time constraints of a 10-week research program, I collected substantial data and authored a research paper that compared the sensitivity and selectivity of two OECT variations: PEDOT and PEDOT with graphene.',
          'The project not only provided hands-on experience with innovative nanobiosensor technology but also highlighted its potential applications in aerospace and healthcare, paving the way for more accessible and reliable health monitoring systems. The research process involved many iterations, data-driven exploration, and adaptation, with each challenge informing subsequent refinements to the sensor design.',
        ],
      },
      {
        heading: 'Fabrication',
        paragraphs: [
          'The OECT device used in this study was a Micrux Microfluidic and Electrochemical Sensor integrated on a single chip with four gold electrodes and a glass substrate. This compact design featured a 10 x 6 x 0.75 mm sensor array with a 40 um channel height and 250 um/1 mm channel width, allowing for precise electrochemical measurements.',
          'To fabricate the OECT, the electrodes were first masked with Teflon tape, leaving only the interdigitated electrodes exposed. The semiconductor solution, composed of poly(3,4-ethylenedioxythiophene) polystyrene sulfonate (PEDOT), was deposited into the gap between the source and drain electrodes and electrospun to form a thin, uniform layer. This layer was essential for ensuring consistent and reliable electrical performance. For the second variation of the OECT, PEDOT was mixed with graphene to improve the sensor sensitivity and selectivity. Both versions of the device were annealed at 130 C to ensure strong adhesion to the substrate and optimal electronic properties.',
          'A glucose oxidase enzyme solution was then drop-cast onto the gate electrode, with chitosan used to adhere the glucose oxidase to the gold surface. The glucose oxidase facilitated the detection of glucose by catalyzing the conversion of glucose to gluconolactone and hydrogen peroxide, triggering an electrochemical response that could be measured by the OECT.',
        ],
      },
      {
        heading: 'Experiment',
        paragraphs: [
          'The electrodes were connected to a Keithley 2612B source measure unit using micropositioners, which allowed precise control over the electrical measurements. Initially, the change in current was measured over a range of gate voltages using phosphate-buffered saline as the electrolyte. This enabled the calculation of transconductance, a key parameter in determining the optimal operating conditions for the OECT. Using these conditions, I conducted measurements of current response at different glucose concentrations, ranging from 0.001 mM to 10 mM. The results revealed that the PEDOT with graphene exhibited more than double the sensitivity of the standard PEDOT, showcasing its potential for enhanced glucose detection. This increase in sensitivity was attributed to graphene higher surface area, which facilitated greater electron mobility and improved the overall performance of the OECT.',
        ],
      },
      {
        heading: 'Key Results',
        bullets: [
          'The PEDOT/Graphene OECT demonstrated a sensitivity over twice that of the standard PEDOT device, making it significantly more effective for glucose detection.',
          'Both devices exhibited sigmoid transfer curves, with the PEDOT/Graphene OECT showing a stronger current response due to its enhanced electron transport properties.',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'This research showcased the potential of OECTs as an effective tool for non-invasive glucose monitoring, particularly in challenging aerospace environments. The addition of graphene to the PEDOT semiconductor significantly improved the sensor sensitivity, making it a promising candidate for future health monitoring technologies. Future work may explore other semiconductor materials, such as n-type semiconductors, and additional modifications to further optimize the performance of OECTs for biomedical applications.',
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
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'For my Engineering and Design course at Duke, I was grouped with three engineers, tasked with the job of providing a trash trap for the Beaver Marsh Preserve in Durham, NC. However, the caveat of our task was that it not only had to prevent the flow of trash into the nature preserve but also had to prevent turtles from getting stuck inside. Many turtles find themselves lost outside the marsh and when they finally find their way back to the marsh, they end up walking into the storm drain where they are met with trash traps. These trash traps were purposely placed at the drain to block off the flow of garbage from an adjacent strip mall.',
          'Our project demanded a delicate balance of preserving the pristine beauty of the marsh while ensuring the safety of its inhabitants, particularly the vulnerable turtle population. It challenged us to think innovatively, combining engineering principles with a deep understanding of local wildlife behavior. Thus, our design not only aimed to block trash from entering the preserve but also incorporated ingenious features to provide a safe passage for turtles. By addressing this dual objective, we aimed to create a harmonious coexistence between conservation and urban infrastructure.',
        ],
      },
      {
        heading: 'Design',
        paragraphs: [
          'Our client needed a quick solution to protect the already endangered wildlife in the preserve and came to Duke Engineering for a solution. After going through multiple design evaluation steps, my group and I decided on an innovative trash trap that makes use of an inclined mesh on the bottom to allow for water flow but prevent trash from going through the trap. At the end of the trap, we placed two strategic, weighted transparent flaps which provide an additional barrier to the flow of trash into the preserve and gives turtles an easy escape from the outside world back into their home.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'In the end, our trap was deemed very successful by our client. Notably, the trap not only effectively collected trash but also ensured the safe passage of turtles, a critical accomplishment for the Beaver Marsh Preserve. One of the most noteworthy achievements of our project was the absence of any trapped turtles within the device. This outcome underscored the precision and foresight with which we engineered the solution, ensuring that it seamlessly integrated into the marsh ecosystem without causing harm to its inhabitants. The trap has withstood heavy storms and is still up and running today, after almost a year. This enduring performance stands as a testament to the durability and quality of our engineering solution, which remains steadfast against the formidable forces of the natural world.',
          'Throughout this project, we demonstrated our commitment to sustainable engineering practices and our dedication to creating solutions that benefit both the environment and the community. This experience not only honed our technical skills but also instilled in us a profound appreciation for the importance of balancing human needs with ecological preservation.',
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
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'My rocketry work has centered on student-built aerospace systems that combine avionics, structures, simulation, integration, and flight operations. Across Duke AERO projects, I worked on avionics, air brakes, and simulation systems for high-powered rockets.',
          'The work demanded system-level thinking: each subsystem had to satisfy structural, electrical, packaging, and operational constraints while still being serviceable during launch preparation. That meant designing around interfaces, test procedures, manufacturability, and the realities of field integration.',
        ],
      },
      {
        heading: 'Systems',
        bullets: [
          'Avionics and embedded electronics for launch vehicle sensing and data collection.',
          'Variable-drag air-brake concepts for precise apogee targeting.',
          'Simulation workflows for validating performance before flight.',
          'Integration practices that connect structures, electronics, payloads, and recovery hardware.',
        ],
      },
      {
        heading: 'Why It Matters',
        paragraphs: [
          'Rocketry is a useful testbed because the design loop is unforgiving. CAD, analysis, manufacturing, software, wiring, and operations all converge into one flight article. The value of the work is not just in building a rocket, but in learning how to make each decision traceable to a requirement, a test, or a flight condition.',
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
