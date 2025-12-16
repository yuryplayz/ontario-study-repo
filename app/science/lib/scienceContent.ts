export type ScienceDiagram = {
  title: string;
  description: string;
};

export type SciencePracticeQuestion = {
  question: string;
  answer: string;
};

export type ScienceLab = {
  title: string;
  purpose: string;
  materials: string[];
  safety: string[];
  procedure: string[];
  analysisQuestions: SciencePracticeQuestion[];
};

export type ScienceLesson = {
  title: string;
  subtitle: string;

  /** Short paragraph-style notes (starter). */
  notes?: string[];

  /** Diagram descriptions (since we don't embed images yet). */
  diagrams?: ScienceDiagram[];

  /** Key vocabulary list */
  vocabulary?: string[];

  /** Practice questions with worked answers */
  practice?: SciencePracticeQuestion[];

  /** Labs/activities with analysis Qs */
  labs?: ScienceLab[];

  /** Optional quick check (shorter questions) */
  quickCheck?: SciencePracticeQuestion[];
};

export type ScienceUnit = {
  title: string;
  subtitle: string;
  lessons: Record<string, ScienceLesson>;
};

export type ScienceStrand = {
  title: string;
  subtitle: string;
  units: Record<string, ScienceUnit>;
};

export type ScienceGrade = {
  strands: Record<string, ScienceStrand>;
};

// Ontario Grade 10–12 science navigation + starter notes.
// This file is the single source of truth for the science section content.
export const SCIENCE_CONTENT: Record<string, ScienceGrade> = {
  grade10: {
    strands: {
      biology: {
        title: "Grade 10 Biology",
        subtitle: "Life systems: cells, tissues, organs, and health.",
        units: {
          "tissues-organs-systems": {
            title: "Tissues, organs & systems",
            subtitle: "How cells form tissues and organs that work together.",
            lessons: {
              "levels-of-organization": {
                title: "Levels of organization",
                subtitle: "Cells → tissues → organs → systems.",
                notes: [
                  "In multicellular organisms, cells specialize to do a specific job (structure relates to function).",
                  "Groups of similar specialized cells form tissues (e.g., muscle tissue, nervous tissue).",
                  "Different tissues combine to form organs (e.g., the heart contains muscle, connective, and nervous tissue).",
                  "Organs work together in organ systems (e.g., digestive system). Multiple organ systems interact to keep the organism alive.",
                  "A good way to study biology is to track: structure → function → interactions → what happens when something changes.",
                ],
                diagrams: [
                  {
                    title: "Levels of organization flowchart",
                    description:
                      "Draw a flowchart: cell → tissue → organ → organ system → organism. Under each arrow, add one example (e.g., muscle cell → muscle tissue → heart → circulatory system → human).",
                  },
                ],
                vocabulary: ["cell", "specialization", "tissue", "organ", "organ system", "structure", "function"],
                practice: [
                  {
                    question:
                      "Give one example for each level: cell, tissue, organ, and organ system (all connected to the same body system).",
                    answer:
                      "Example (circulatory): cardiac muscle cell → cardiac muscle tissue → heart → circulatory system. Many other correct sets exist.",
                  },
                  {
                    question:
                      "Explain what we mean by ‘structure relates to function’ using one biological example.",
                    answer:
                      "A structure’s shape/material supports its job. Example: red blood cells are biconcave to increase surface area for gas exchange and allow flexible movement through capillaries.",
                  },
                  {
                    question:
                      "Why is specialization important for multicellular organisms?",
                    answer:
                      "Specialization lets different cells do tasks efficiently. This supports complex organs/systems and improves survival (division of labour).",
                  },
                  {
                    question:
                      "Is ‘skin’ an organ or a tissue? Justify.",
                    answer:
                      "Skin is an organ (the largest organ). It contains multiple tissue types (epithelial, connective, nervous, etc.) working together.",
                  },
                  {
                    question:
                      "A disease damages the lining of the small intestine. Predict two effects on the body.",
                    answer:
                      "Reduced nutrient absorption → less energy/weight loss; deficiencies (vitamins/minerals) → fatigue, weakened immune system, slower healing, etc.",
                  },
                ],
                labs: [
                  {
                    title: "Microscope skill lab: estimating size and drawing to scale",
                    purpose:
                      "Practice microscope handling, recording observations, and estimating size using field of view.",
                    materials: [
                      "Compound microscope",
                      "Prepared slide (onion skin or cheek cells)",
                      "Ruler (mm)",
                      "Paper/pencil",
                    ],
                    safety: [
                      "Carry microscopes with two hands.",
                      "Handle slides carefully; broken glass is sharp.",
                      "Wash hands after handling biological samples.",
                    ],
                    procedure: [
                      "Start at low power. Focus using coarse adjustment, then fine adjustment.",
                      "Switch to medium/high power and refocus using fine adjustment only.",
                      "Estimate the field of view diameter at each magnification (teacher may provide values or you can measure using a ruler).",
                      "Draw what you see: include a title, labels, and magnification. Add a scale bar using your size estimate.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Why do we start focusing at low power?",
                        answer:
                          "Low power has a larger field of view and more working distance, making it easier to find the specimen and avoid damaging the slide.",
                      },
                      {
                        question: "What happens to field of view when magnification increases?",
                        answer:
                          "Field of view decreases as magnification increases.",
                      },
                      {
                        question: "Why is a scale bar useful?",
                        answer:
                          "It lets the viewer estimate sizes directly and makes the drawing quantitative, not just qualitative.",
                      },
                    ],
                  },
                ],
              },

              "human-body-systems": {
                title: "Human body systems",
                subtitle: "How systems interact to maintain life.",
                notes: [
                  "Body systems work together: no system operates completely on its own.",
                  "Example interaction: respiratory system brings oxygen in; circulatory system transports oxygen to cells for cellular respiration.",
                  "Cells need nutrients (digestive), oxygen (respiratory), and waste removal (excretory).",
                  "Homeostasis means maintaining stable internal conditions (temperature, blood glucose, water balance).",
                  "Feedback mechanisms (often negative feedback) help maintain homeostasis by reversing changes.",
                ],
                diagrams: [
                  {
                    title: "System interaction map",
                    description:
                      "Draw boxes for respiratory, circulatory, and digestive systems. Use arrows to show oxygen and nutrients moving to cells, and carbon dioxide/waste moving away.",
                  },
                ],
                vocabulary: ["homeostasis", "negative feedback", "respiration", "circulation", "absorption"],
                practice: [
                  {
                    question:
                      "Describe how the respiratory and circulatory systems work together during exercise.",
                    answer:
                      "Breathing rate increases to bring in more O₂ and remove CO₂. Heart rate increases to deliver O₂ to muscles faster and transport CO₂ back to lungs for exhalation.",
                  },
                  {
                    question:
                      "Define homeostasis and give one example in the human body.",
                    answer:
                      "Homeostasis is keeping internal conditions stable. Example: sweating to cool down when body temperature rises.",
                  },
                  {
                    question:
                      "Why do cells need a constant supply of oxygen?",
                    answer:
                      "Oxygen is used in cellular respiration to release energy (ATP) from food molecules.",
                  },
                  {
                    question:
                      "Predict what might happen if the diaphragm stops working properly.",
                    answer:
                      "Ventilation would be reduced, causing low oxygen levels and buildup of CO₂, leading to fatigue, dizziness, and potential organ damage.",
                  },
                ],
                labs: [
                  {
                    title: "Model lab: breathing and lung volume",
                    purpose:
                      "Investigate how breathing rate changes with activity and connect it to gas exchange needs.",
                    materials: ["Stopwatch", "Stairs or safe open space", "Notebook"],
                    safety: ["Do not overexert; stop if dizzy.", "Choose a safe area to move."],
                    procedure: [
                      "Measure resting breathing rate (breaths per minute) for 1 minute.",
                      "Do 1 minute of light activity (walking or step-ups). Measure breathing rate again.",
                      "Do 1 minute of moderate activity. Measure breathing rate again.",
                      "Graph activity level vs breathing rate.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Why does breathing rate increase during exercise?",
                        answer:
                          "Working muscles use more oxygen for cellular respiration and produce more CO₂, so ventilation increases to meet demand and remove waste gas.",
                      },
                      {
                        question: "What are two variables that could affect your results?",
                        answer:
                          "Fitness level, stress, temperature, measurement timing, and how intense the activity was.",
                      },
                    ],
                  },
                ],
              },

              "cells-health-disease": {
                title: "Cells, health & disease",
                subtitle: "How disruptions affect overall system function.",
                notes: [
                  "Disease can disrupt function at the cellular level, and that disruption can scale up to tissues, organs, and systems.",
                  "Infectious diseases are caused by pathogens (bacteria, viruses, fungi).",
                  "The immune system responds to pathogens using barriers (skin), inflammatory responses, and specialized cells.",
                  "Lifestyle factors (sleep, nutrition, physical activity) affect system health and disease risk.",
                  "Public health measures (vaccines, clean water, hygiene) reduce spread of disease.",
                ],
                vocabulary: ["pathogen", "infection", "immune response", "vaccine", "risk factor"],
                practice: [
                  {
                    question: "Give two examples of pathogens and one disease each can cause.",
                    answer:
                      "Virus: influenza virus → flu; Bacteria: Streptococcus → strep throat; many correct answers exist.",
                  },
                  {
                    question:
                      "Explain how a fever can help the body fight infection.",
                    answer:
                      "Higher temperature can slow pathogen growth and speed up immune reactions; it’s part of an inflammatory response.",
                  },
                  {
                    question: "Why do vaccines help reduce disease spread?",
                    answer:
                      "Vaccines train the immune system to respond quickly, reducing the chance of infection and lowering transmission (herd immunity effects).",
                  },
                  {
                    question:
                      "List two lifestyle choices that support a healthy immune system and briefly explain why.",
                    answer:
                      "Sleep supports immune regulation; balanced nutrition provides materials for immune cells; regular activity improves circulation and immune function.",
                  },
                ],
                labs: [
                  {
                    title: "Simulation activity: disease transmission",
                    purpose:
                      "Model how infections can spread through a population and how interventions change spread.",
                    materials: ["Small cups", "Water", "One cup with diluted vinegar (" + "\"infected\"" + ")", "pH paper (or indicator)"],
                    safety: ["Do not drink lab liquids.", "Wash hands after handling materials."],
                    procedure: [
                      "Everyone starts with a cup of clear water; one unknown person starts with 'infected' cup.",
                      "Do 3 rounds: each round, exchange a small amount of liquid with a different partner.",
                      "Test cups with pH paper to identify who is infected after each round.",
                      "Repeat with an intervention (e.g., no exchange with 1/3 of students representing 'vaccinated' individuals).",
                    ],
                    analysisQuestions: [
                      {
                        question: "How did the number of infected people change over time?",
                        answer:
                          "It typically increases with each round because more infected people can spread infection.",
                      },
                      {
                        question: "How did the intervention change the spread?",
                        answer:
                          "Reducing contacts or increasing 'immune' individuals lowers transmission and can stop widespread infection.",
                      },
                    ],
                  },
                ],
              },

              "microscopy-observations": {
                title: "Microscopy & observations",
                subtitle: "Observing cells and tissues using scientific tools.",
                notes: [
                  "Good observations are specific and measurable (use proper units and labels).",
                  "A scientific diagram should have: title, clear lines, labels, and magnification/scale.",
                  "Magnification increases image size; resolution is how clearly details can be distinguished.",
                  "Field of view decreases as magnification increases.",
                  "Always record conditions: stain used, magnification, and what sample you observed.",
                ],
                vocabulary: ["magnification", "resolution", "field of view", "scale bar"],
                practice: [
                  {
                    question: "What is the difference between magnification and resolution?",
                    answer:
                      "Magnification makes the image larger; resolution is the ability to distinguish two close points as separate.",
                  },
                  {
                    question:
                      "Why should you use the fine focus knob at high power?",
                    answer:
                      "High power has a small working distance; coarse focus can crash the lens into the slide and blur the image.",
                  },
                  {
                    question:
                      "Your field of view at low power is 4.0 mm. At high power it is 0.5 mm. Explain why it changed.",
                    answer:
                      "As magnification increases, you see a smaller area of the specimen, so the field of view decreases.",
                  },
                ],
              },
            },
          },
        },
      },

      chemistry: {
        title: "Grade 10 Chemistry",
        subtitle: "Chemical reactions and quantitative relationships.",
        units: {
          "chemical-reactions": {
            title: "Chemical reactions",
            subtitle: "Evidence, equations, reaction types, and acids/bases intro.",
            lessons: {
              "evidence-of-reaction": {
                title: "Evidence of chemical change",
                subtitle: "How to tell when a new substance forms.",
                notes: [
                  "A chemical reaction forms new substances (products) from reactants.",
                  "Common evidence includes: gas produced, precipitate formed, colour change, temperature change, light produced.",
                  "Evidence must be interpreted carefully: a temperature change can also happen from physical processes (mixing hot/cold).",
                  "Chemical change usually involves bond breaking/forming and is harder to reverse than physical change.",
                ],
                vocabulary: ["reactant", "product", "precipitate", "chemical change", "physical change"],
                practice: [
                  {
                    question: "Give three observations that suggest a chemical reaction occurred.",
                    answer:
                      "Examples: gas bubbles, precipitate, colour change, temperature change, light. Any three valid pieces of evidence.",
                  },
                  {
                    question:
                      "A student dissolves sugar in water. Is this chemical or physical change? Explain.",
                    answer:
                      "Physical change: sugar molecules are still sugar; they are just dispersed in water and can be recovered by evaporation.",
                  },
                  {
                    question:
                      "When iron rusts, is it chemical change? What is the product?",
                    answer:
                      "Yes. Rusting forms iron oxide (new substance) from iron reacting with oxygen (and water).",
                  },
                  {
                    question:
                      "Why is a temperature change not always proof of a chemical reaction?",
                    answer:
                      "Temperature can change due to mixing substances at different temperatures or dissolving processes; you need multiple observations/evidence.",
                  },
                ],
                labs: [
                  {
                    title: "Lab: identifying chemical vs physical change",
                    purpose:
                      "Observe common processes and classify them using evidence.",
                    materials: [
                      "Vinegar",
                      "Baking soda",
                      "Water",
                      "Salt",
                      "Small cups",
                      "Thermometer (optional)",
                    ],
                    safety: ["Wear goggles.", "Do not taste chemicals.", "Clean spills promptly."],
                    procedure: [
                      "Test 1: Mix vinegar and baking soda. Record observations.",
                      "Test 2: Dissolve salt in water. Record observations.",
                      "Test 3: (Optional) Mix warm and cold water; record temperature.",
                      "Classify each as chemical or physical change with reasons.",
                    ],
                    analysisQuestions: [
                      {
                        question:
                          "Which test clearly showed gas production? What does that suggest?",
                        answer:
                          "Vinegar + baking soda produces gas bubbles (CO₂), suggesting a chemical reaction.",
                      },
                      {
                        question:
                          "How could you recover salt after dissolving it?",
                        answer:
                          "Evaporate the water to leave salt behind.",
                      },
                    ],
                  },
                ],
              },

              "balancing-equations": {
                title: "Balancing chemical equations",
                subtitle: "Conservation of atoms and mass.",
                notes: [
                  "A chemical equation uses chemical formulas to show reactants → products.",
                  "Balanced equations obey conservation of mass: the number of each atom is the same on both sides.",
                  "You can change coefficients (numbers in front) to balance, but never change subscripts (they change the substance).",
                  "Coefficients also represent particle ratios (molecules) and, later, mole ratios.",
                ],
                vocabulary: ["coefficient", "subscript", "conservation of mass", "balanced equation"],
                practice: [
                  {
                    question: "Balance: H₂ + O₂ → H₂O",
                    answer: "2H₂ + O₂ → 2H₂O",
                  },
                  {
                    question: "Balance: Fe + O₂ → Fe₂O₃",
                    answer: "4Fe + 3O₂ → 2Fe₂O₃",
                  },
                  {
                    question:
                      "Why can’t you change subscripts when balancing?",
                    answer:
                      "Changing subscripts changes the chemical formula (a different substance), which would no longer represent the same reactant/product.",
                  },
                  {
                    question:
                      "In the balanced equation 2H₂ + O₂ → 2H₂O, what does the ratio 2:1:2 mean?",
                    answer:
                      "It means 2 molecules (or moles) of H₂ react with 1 molecule (or mole) of O₂ to produce 2 molecules (or moles) of H₂O.",
                  },
                ],
              },

              "reaction-types": {
                title: "Types of reactions",
                subtitle: "Recognize common reaction patterns.",
                notes: [
                  "Synthesis: A + B → AB (two substances combine).",
                  "Decomposition: AB → A + B (one substance breaks apart).",
                  "Single displacement: A + BC → AC + B (an element replaces another).",
                  "Double displacement: AB + CD → AD + CB (ions swap partners; may form precipitate).",
                  "Combustion: hydrocarbon + O₂ → CO₂ + H₂O (complete combustion).",
                ],
                vocabulary: ["synthesis", "decomposition", "displacement", "combustion"],
                practice: [
                  {
                    question: "Classify: 2KClO₃ → 2KCl + 3O₂",
                    answer: "Decomposition",
                  },
                  {
                    question: "Classify: 2Na + Cl₂ → 2NaCl",
                    answer: "Synthesis",
                  },
                  {
                    question: "Classify: Zn + CuSO₄ → ZnSO₄ + Cu",
                    answer: "Single displacement",
                  },
                  {
                    question: "Classify: AgNO₃ + NaCl → AgCl + NaNO₃",
                    answer: "Double displacement (AgCl is a precipitate)",
                  },
                  {
                    question: "Classify: CH₄ + 2O₂ → CO₂ + 2H₂O",
                    answer: "Combustion (complete)",
                  },
                ],
              },

              "acids-bases-intro": {
                title: "Acids & bases (intro)",
                subtitle: "pH, indicators, and neutralization basics.",
                notes: [
                  "Acids and bases are common in everyday life (foods, cleaning products).",
                  "pH scale: <7 acidic, 7 neutral, >7 basic. Each step is a factor of 10 change in acidity/basicity.",
                  "Indicators (like litmus) change colour depending on pH.",
                  "Neutralization reaction (basic idea): acid + base → salt + water.",
                ],
                vocabulary: ["acid", "base", "pH", "indicator", "neutralization"],
                practice: [
                  {
                    question: "Which is more acidic: pH 3 or pH 5? By how much?",
                    answer:
                      "pH 3 is more acidic. It is 10^(5-3)=100 times more acidic than pH 5.",
                  },
                  {
                    question: "What does pH 7 mean?",
                    answer: "Neutral (equal amounts of acidic and basic properties in this simplified model).",
                  },
                  {
                    question:
                      "Write the word equation for a neutralization reaction.",
                    answer: "acid + base → salt + water",
                  },
                ],
                labs: [
                  {
                    title: "Lab: testing pH with indicators",
                    purpose:
                      "Use indicators to compare acidity/basicity of household liquids.",
                    materials: [
                      "pH paper or universal indicator",
                      "Small cups",
                      "Water (control)",
                      "Vinegar or lemon juice",
                      "Baking soda solution",
                      "Soap solution",
                    ],
                    safety: ["Wear goggles.", "Do not taste samples.", "Wash hands after the lab."],
                    procedure: [
                      "Label cups with each sample.",
                      "Dip indicator into each sample and record colour/pH.",
                      "Rank samples from most acidic to most basic.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Why do we test water as a control?",
                        answer:
                          "Water provides a baseline (neutral) to compare other samples against.",
                      },
                      {
                        question: "Which household products tend to be basic? Why?",
                        answer:
                          "Many cleaners/soaps are basic because bases help break down oils/grease.",
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },

      physics: {
        title: "Grade 10 Physics",
        subtitle: "Forces, motion, and energy in systems.",
        units: {
          motion: {
            title: "Forces & motion",
            subtitle: "Describing motion and explaining changes in motion.",
            lessons: {
              kinematics: {
                title: "Describing motion",
                subtitle: "Distance, displacement, speed, velocity, acceleration.",
                notes: [
                  "Distance is total path length (scalar). Displacement is change in position with direction (vector).",
                  "Speed = distance / time. Velocity = displacement / time (includes direction).",
                  "Acceleration is change in velocity per time. It can be positive or negative depending on your chosen direction.",
                  "Always define a positive direction before solving motion problems.",
                ],
                vocabulary: ["distance", "displacement", "speed", "velocity", "acceleration"],
                practice: [
                  {
                    question:
                      "A student walks 30 m east, then 10 m west. What is (a) distance, (b) displacement?",
                    answer:
                      "Distance = 40 m. Displacement = 20 m east (30 − 10).",
                  },
                  {
                    question:
                      "A car travels 120 km in 2.0 h. Find average speed.",
                    answer: "Average speed = 120/2.0 = 60 km/h.",
                  },
                  {
                    question:
                      "A runner’s velocity changes from 2.0 m/s to 6.0 m/s in 4.0 s. Find acceleration.",
                    answer: "a = (6.0 − 2.0)/4.0 = 1.0 m/s².",
                  },
                ],
              },

              newton: {
                title: "Newton’s laws (intro)",
                subtitle: "Forces cause acceleration.",
                notes: [
                  "Force is a push or pull measured in newtons (N).",
                  "Net force is the vector sum of all forces on an object.",
                  "If net force is zero, an object’s motion does not change (it stays at rest or continues at constant velocity).",
                  "If net force is not zero, the object accelerates in the direction of the net force.",
                  "Relationship: Fnet = m a (mass in kg, acceleration in m/s²).",
                ],
                vocabulary: ["force", "net force", "inertia", "mass", "acceleration"],
                practice: [
                  {
                    question:
                      "A 2.0 kg cart accelerates at 3.0 m/s². What net force acts on it?",
                    answer: "Fnet = ma = 2.0 × 3.0 = 6.0 N.",
                  },
                  {
                    question:
                      "If the net force on an object is zero, what can you say about its acceleration?",
                    answer: "Acceleration is zero.",
                  },
                  {
                    question:
                      "An object has a net force of 10 N and mass 5 kg. Find acceleration.",
                    answer: "a = F/m = 10/5 = 2 m/s².",
                  },
                ],
                labs: [
                  {
                    title: "Lab: net force and acceleration (cart investigation)",
                    purpose:
                      "Test the relationship between net force and acceleration.",
                    materials: ["Dynamics cart", "Pulley + string", "Hanging masses", "Stopwatch or motion sensor"],
                    safety: ["Keep feet clear of falling masses.", "Secure pulleys and carts on the track."],
                    procedure: [
                      "Set up cart on a low-friction track with string over a pulley and a hanging mass.",
                      "Measure acceleration for different hanging masses (net force) while keeping total mass similar.",
                      "Graph net force vs acceleration.",
                    ],
                    analysisQuestions: [
                      {
                        question:
                          "What pattern do you expect between net force and acceleration?",
                        answer:
                          "Direct relationship: as net force increases, acceleration increases (approximately linear if mass is constant).",
                      },
                      {
                        question:
                          "What could cause your graph to be imperfectly linear?",
                        answer:
                          "Friction, measurement error, changing total mass, pulley friction, or air resistance.",
                      },
                    ],
                  },
                ],
              },

              energy: {
                title: "Energy in systems",
                subtitle: "Transfers, transformations, efficiency.",
                notes: [
                  "Energy describes the ability to do work or cause change.",
                  "Common forms: kinetic, gravitational potential, thermal, chemical, electrical.",
                  "Energy can transfer between objects and transform between forms.",
                  "Efficiency = useful energy output / total energy input × 100%.",
                  "In real systems, some energy is transferred to the surroundings (often as thermal energy), so efficiency < 100%.",
                ],
                vocabulary: ["energy", "transfer", "transformation", "efficiency"],
                practice: [
                  {
                    question:
                      "A device uses 200 J of electrical energy and outputs 150 J of useful energy. Find efficiency.",
                    answer: "Efficiency = 150/200 × 100% = 75%.",
                  },
                  {
                    question:
                      "Give an example of an energy transformation in a flashlight.",
                    answer:
                      "Chemical energy (battery) → electrical energy → light energy + thermal energy.",
                  },
                ],
              },

              graphs: {
                title: "Motion graphs",
                subtitle: "Interpreting position-time and velocity-time graphs.",
                notes: [
                  "Position-time graph: slope represents velocity.",
                  "A flat position-time line means position is constant (object at rest).",
                  "Velocity-time graph: slope represents acceleration.",
                  "Area under a velocity-time graph gives displacement.",
                ],
                vocabulary: ["slope", "area", "velocity-time graph", "position-time graph"],
                practice: [
                  {
                    question:
                      "What does a straight line with positive slope on a position-time graph represent?",
                    answer: "Constant positive velocity.",
                  },
                  {
                    question:
                      "On a velocity-time graph, what does a horizontal line above zero mean?",
                    answer: "Constant positive velocity (no acceleration).",
                  },
                  {
                    question:
                      "If the area under a velocity-time graph from 0–4 s is 12 m, what is the displacement?",
                    answer: "Displacement is 12 m (area under v-t graph).",
                  },
                ],
                labs: [
                  {
                    title: "Lab: motion graphs with a toy car",
                    purpose:
                      "Create and interpret motion graphs from simple motion.",
                    materials: ["Toy car", "Measuring tape", "Stopwatch", "Graph paper"],
                    safety: ["Work in a clear hallway/space to avoid tripping."],
                    procedure: [
                      "Mark a straight 5 m track.",
                      "Record position of the car every 1 s for 10 s (or until it stops).",
                      "Create a position-time graph.",
                      "Estimate velocity from slopes between points.",
                    ],
                    analysisQuestions: [
                      {
                        question:
                          "Where on the graph is the car moving fastest?",
                        answer:
                          "Where the position-time graph is steepest (largest slope).",
                      },
                      {
                        question:
                          "What could improve the accuracy of your position-time data?",
                        answer:
                          "More frequent measurements, using a motion sensor, repeating trials, and consistent release method.",
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },

      "earth-space": {
        title: "Grade 10 Earth & Space",
        subtitle: "Climate change, weather, and Earth systems.",
        units: {
          "climate-change": {
            title: "Climate change",
            subtitle: "Evidence, causes, impacts, and responses.",
            lessons: {
              "weather-vs-climate": {
                title: "Weather vs climate",
                subtitle: "Short-term patterns vs long-term averages.",
                notes: [
                  "Weather describes day-to-day conditions (temperature, precipitation, wind).",
                  "Climate describes long-term patterns and averages (often over decades).",
                  "Because climate is long-term, one cold day doesn’t disprove climate change—look for trends over many years.",
                  "Scientists use climate variables like average temperature, precipitation patterns, and frequency of extreme events.",
                ],
                vocabulary: ["weather", "climate", "trend", "climate variable"],
                practice: [
                  {
                    question: "Give two examples of weather and two examples of climate.",
                    answer:
                      "Weather: ‘It’s raining today’, ‘Wind is 30 km/h’. Climate: ‘This region is dry’, ‘Average winter temperatures are below 0°C’.",
                  },
                  {
                    question:
                      "Why do scientists use long-term averages to describe climate?",
                    answer:
                      "Averages smooth out short-term variation and reveal long-term patterns/trends.",
                  },
                ],
              },

              "greenhouse-effect": {
                title: "Greenhouse effect",
                subtitle: "How greenhouse gases trap heat.",
                notes: [
                  "The Sun provides energy mostly as visible light. Earth absorbs some and re-emits energy as infrared (heat).",
                  "Greenhouse gases (CO₂, CH₄, water vapour) absorb and re-emit infrared, trapping some heat and warming the lower atmosphere.",
                  "The natural greenhouse effect makes Earth habitable. Extra greenhouse gases increase warming.",
                  "Albedo is reflectivity: ice/snow reflect more sunlight; darker surfaces absorb more.",
                ],
                diagrams: [
                  {
                    title: "Energy flow diagram",
                    description:
                      "Draw: Sun → Earth (incoming). Earth → space (outgoing infrared). Add a layer for greenhouse gases that reflects some infrared back to Earth.",
                  },
                ],
                vocabulary: ["greenhouse gas", "infrared", "albedo", "radiation"],
                practice: [
                  {
                    question: "Name two greenhouse gases and one source for each.",
                    answer:
                      "CO₂: burning fossil fuels; CH₄: livestock digestion/landfills. Many valid answers exist.",
                  },
                  {
                    question:
                      "How can melting ice affect climate through albedo?",
                    answer:
                      "Less ice lowers albedo, so Earth absorbs more sunlight, increasing warming (positive feedback).",
                  },
                ],
                labs: [
                  {
                    title: "Mini-lab: greenhouse effect model",
                    purpose:
                      "Model how trapping heat can change temperature.",
                    materials: ["Two clear jars", "Two thermometers", "Lamp (heat source)", "Plastic wrap"],
                    safety: ["Do not touch hot bulbs.", "Handle glass carefully."],
                    procedure: [
                      "Place a thermometer in each jar.",
                      "Cover one jar with plastic wrap; leave the other uncovered.",
                      "Place both under a lamp at equal distance.",
                      "Record temperature every minute for 10 minutes.",
                    ],
                    analysisQuestions: [
                      {
                        question:
                          "Which jar warmed faster or reached a higher temperature? Why?",
                        answer:
                          "Typically the covered jar. The cover reduces convection and helps trap heat, similar to heat trapping in the atmosphere.",
                      },
                      {
                        question:
                          "Name one limitation of this model compared to Earth’s real greenhouse effect.",
                        answer:
                          "Plastic wrap mainly reduces convection; Earth’s greenhouse effect involves infrared absorption and re-emission by gases.",
                      },
                    ],
                  },
                ],
              },

              evidence: {
                title: "Evidence of climate change",
                subtitle: "Ice cores, temperature records, and sea level.",
                notes: [
                  "Evidence comes from multiple sources: thermometer records, satellites, sea level measurements, glaciers/ice sheets.",
                  "Proxy data (like ice cores and tree rings) can estimate past climates.",
                  "When many independent datasets show the same trend, confidence increases.",
                  "Science focuses on trends and evidence-based explanations.",
                ],
                vocabulary: ["proxy data", "ice core", "sea level", "trend"],
                practice: [
                  {
                    question: "What is proxy data? Give one example.",
                    answer:
                      "Indirect evidence of past climate. Example: ice cores trapping ancient air bubbles, tree rings, sediment layers.",
                  },
                  {
                    question:
                      "List two modern measurements that show climate change.",
                    answer:
                      "Rising global average temperature records; rising sea levels; shrinking glaciers/Arctic ice; changes in ocean heat content.",
                  },
                ],
              },

              "mitigation-adaptation": {
                title: "Mitigation & adaptation",
                subtitle: "Reducing emissions and preparing for impacts.",
                notes: [
                  "Mitigation means reducing greenhouse gas emissions or increasing carbon sinks (preventing future warming).",
                  "Adaptation means adjusting to impacts (reducing harm), such as flood infrastructure or heat-health plans.",
                  "Many solutions involve trade-offs (cost, feasibility, time).",
                  "Individuals, communities, industry, and governments all play roles.",
                ],
                vocabulary: ["mitigation", "adaptation", "carbon footprint", "renewable energy"],
                practice: [
                  {
                    question:
                      "Give one example of mitigation and one example of adaptation.",
                    answer:
                      "Mitigation: switching to renewable electricity; Adaptation: building flood barriers or improving stormwater drainage.",
                  },
                  {
                    question:
                      "Why do we need both mitigation and adaptation?",
                    answer:
                      "Mitigation reduces future changes, but some changes are already occurring, so adaptation is needed to manage impacts now.",
                  },
                ],
                labs: [
                  {
                    title: "Project: carbon footprint audit",
                    purpose:
                      "Estimate a household or school carbon footprint and propose realistic reductions.",
                    materials: ["Internet carbon footprint calculator (optional)", "Notebook", "Utility bills (optional)"],
                    safety: ["No special safety requirements."],
                    procedure: [
                      "Choose a system to audit (home, commuting, school energy use).",
                      "Estimate emissions sources (electricity, heating, transport).",
                      "Propose 3 mitigation actions and rank by impact and feasibility.",
                    ],
                    analysisQuestions: [
                      {
                        question:
                          "Which action likely has the biggest impact and why?",
                        answer:
                          "Answers vary; usually transportation and heating/energy use are largest sources depending on context.",
                      },
                      {
                        question:
                          "What trade-offs might prevent adopting the highest-impact action?",
                        answer:
                          "Cost, availability of alternatives, time, infrastructure, and personal/family constraints.",
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },

  // Grade 11 and 12: keep starter structure (can be expanded later)
  grade11: {
    strands: {
      biology: {
        title: "Grade 11 Biology",
        subtitle: "Biodiversity and evolution (expanded notes, practice, and labs).",
        units: {
          biodiversity: {
            title: "Biodiversity",
            subtitle: "Classifying and protecting life on Earth.",
            lessons: {
              classification: {
                title: "Classification basics",
                subtitle: "Domains, kingdoms, and naming organisms.",
                notes: [
                  "Classification (taxonomy) helps scientists organize biodiversity and communicate clearly.",
                  "Binomial nomenclature uses two names: Genus species (e.g., Homo sapiens).",
                  "A species is typically a group that can interbreed and produce fertile offspring.",
                  "Classifications can change when new evidence appears (especially DNA evidence).",
                ],
                vocabulary: ["taxonomy", "species", "genus", "binomial nomenclature", "classification key"],
                practice: [
                  {
                    question: "What is binomial nomenclature? Give one example.",
                    answer: "A two-part scientific name: Genus species (e.g., Canis lupus).",
                  },
                  {
                    question: "Why is using common names sometimes confusing?",
                    answer:
                      "Common names vary by language/region; one name can refer to different organisms or one organism can have many names.",
                  },
                  {
                    question: "How can DNA evidence change classifications?",
                    answer:
                      "DNA comparisons can reveal evolutionary relationships that are not obvious from appearance, leading to re-grouping.",
                  },
                ],
                labs: [
                  {
                    title: "Lab: dichotomous key challenge",
                    purpose: "Build and use a dichotomous key to classify unknown items.",
                    materials: ["10–15 small objects or organism pictures", "Paper", "Pencil"],
                    safety: ["No special safety requirements."],
                    procedure: [
                      "Choose a set of objects (or pictures).",
                      "List observable traits (shape, colour, number of parts, texture).",
                      "Create paired statements (either/or) that split the group until each item is uniquely identified.",
                      "Swap keys with another group and test if they can identify items correctly.",
                    ],
                    analysisQuestions: [
                      {
                        question: "What makes a good dichotomous key question?",
                        answer:
                          "It uses clear, observable traits and splits the group into two non-overlapping choices.",
                      },
                      {
                        question: "What trait caused the most confusion? How could you improve it?",
                        answer:
                          "Answers vary; improvement usually means making the trait more objective or adding a measurement.",
                      },
                    ],
                  },
                ],
              },

              ecosystems: {
                title: "Ecosystems & interactions",
                subtitle: "Populations, communities, and energy flow.",
                notes: [
                  "An ecosystem includes living (biotic) and non-living (abiotic) factors interacting.",
                  "Energy flows through trophic levels (producers → consumers → decomposers); matter cycles.",
                  "Food webs show multiple feeding relationships and are more realistic than food chains.",
                  "Population size depends on limiting factors (food, space, disease, predators).",
                ],
                vocabulary: ["ecosystem", "biotic", "abiotic", "trophic level", "food web", "limiting factor"],
                practice: [
                  {
                    question: "Why are food webs more realistic than food chains?",
                    answer: "Most organisms have multiple food sources and predators, so relationships form a web.",
                  },
                  {
                    question: "Give one example of a biotic and one abiotic factor.",
                    answer: "Biotic: predators; Abiotic: temperature (many correct answers).",
                  },
                  {
                    question: "What happens to available energy as you move up trophic levels?",
                    answer: "It decreases; much energy is lost as heat and used for life processes.",
                  },
                ],
                labs: [
                  {
                    title: "Field study: quadrat sampling (biodiversity estimate)",
                    purpose: "Estimate plant diversity in two locations using sampling.",
                    materials: ["String/rope to make a 1 m² quadrat", "Measuring tape", "Notebook", "Camera (optional)"],
                    safety: ["Dress for weather.", "Watch for allergens/bugs.", "Stay on school-approved areas."],
                    procedure: [
                      "Choose two locations (e.g., shaded vs sunny area).",
                      "Place the quadrat randomly 5–10 times in each location.",
                      "Record number of different plant species and/or individuals in each quadrat.",
                      "Compare average diversity between locations.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Why do we use random sampling?",
                        answer: "To reduce bias and make the sample more representative of the area.",
                      },
                      {
                        question: "What abiotic factors might explain differences between locations?",
                        answer: "Light, moisture, temperature, soil type, wind exposure, etc.",
                      },
                    ],
                  },
                ],
              },

              conservation: {
                title: "Conservation & sustainability",
                subtitle: "Human impacts and ecosystem protection.",
                notes: [
                  "Biodiversity supports ecosystem stability and provides resources (food, medicine, services like pollination).",
                  "Major threats include habitat loss, invasive species, pollution, overharvesting, and climate change.",
                  "Sustainability means meeting needs now without preventing future generations from meeting their needs.",
                  "Conservation strategies include protected areas, habitat restoration, sustainable harvesting, and reducing pollution.",
                ],
                vocabulary: ["biodiversity", "habitat fragmentation", "invasive species", "sustainability", "conservation"],
                practice: [
                  {
                    question: "Name three major threats to biodiversity.",
                    answer: "Habitat loss, invasive species, pollution (also overharvesting, climate change).",
                  },
                  {
                    question: "What is an invasive species and why can it be harmful?",
                    answer:
                      "A non-native species that spreads quickly and can outcompete native species, disrupting ecosystems.",
                  },
                  {
                    question: "Give one example of an ecosystem service.",
                    answer: "Pollination, water purification, soil formation, carbon storage, etc.",
                  },
                ],
                labs: [
                  {
                    title: "Case study project: local species at risk",
                    purpose: "Research a species at risk in Ontario and propose a conservation plan.",
                    materials: ["Internet/library sources", "Notebook"],
                    safety: ["No special safety requirements."],
                    procedure: [
                      "Choose a species at risk (e.g., monarch butterfly, Blanding’s turtle).",
                      "Identify habitat needs, threats, and current conservation efforts.",
                      "Propose 2–3 realistic actions (policy, habitat restoration, public education).",
                      "Present your plan with evidence.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Which threat is most significant for your chosen species and why?",
                        answer: "Answers vary; should be supported by evidence from sources.",
                      },
                      {
                        question: "How would you measure whether your plan worked?",
                        answer: "Population trends, habitat quality measures, reduced mortality, increased nesting success, etc.",
                      },
                    ],
                  },
                ],
              },
            },
          },

          evolution: {
            title: "Evolution",
            subtitle: "How populations change over time.",
            lessons: {
              naturalSelection: {
                title: "Natural selection",
                subtitle: "Variation, selection pressures, and adaptation.",
                notes: [
                  "Natural selection requires: variation, heritability, and differential survival/reproduction.",
                  "Selection acts on phenotypes, but changes allele frequencies in a population over time.",
                  "Adaptations increase fitness (reproductive success) in a specific environment.",
                  "Selection pressures include predators, disease, competition, and climate.",
                ],
                vocabulary: ["natural selection", "adaptation", "fitness", "selection pressure", "allele frequency"],
                practice: [
                  {
                    question: "Why is variation necessary for natural selection?",
                    answer:
                      "If all individuals are identical, no traits provide an advantage; selection can’t favour one trait over another.",
                  },
                  {
                    question: "What does it mean that selection acts on populations, not individuals?",
                    answer:
                      "Individuals don’t evolve genetically during their lifetime; population trait frequencies change across generations.",
                  },
                  {
                    question: "Give an example of a selection pressure and a possible adaptation.",
                    answer: "Predators → camouflage; drought → deeper roots; many valid answers.",
                  },
                ],
                labs: [
                  {
                    title: "Simulation: ‘beak’ adaptation and food sources",
                    purpose: "Model how different traits can be favoured in different environments.",
                    materials: ["Tweezers, spoon, clothespin (beaks)", "Mixed ‘food’: beans, rice, paper clips", "Timer"],
                    safety: ["Be careful with sharp objects; keep materials off the floor."],
                    procedure: [
                      "Assign each student/group a ‘beak’ tool.",
                      "Scatter ‘food’ items on a table (environment).",
                      "Collect as many items as possible in 30 seconds.",
                      "Repeat with a different food mix (environment change).",
                      "Compare which beak type had the highest ‘fitness’ in each environment.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Which beak was most successful in each environment and why?",
                        answer:
                          "Depends on food type; tools better matched to the food shape/size collect more efficiently.",
                      },
                      {
                        question: "How does this model relate to real evolution?",
                        answer:
                          "Traits that help organisms access resources lead to higher reproductive success, so those traits become more common.",
                      },
                    ],
                  },
                ],
              },

              evidence: {
                title: "Evidence for evolution",
                subtitle: "Fossils, anatomy, and DNA.",
                notes: [
                  "Fossils show changes over time and transitional forms.",
                  "Comparative anatomy: homologous structures suggest common ancestry; analogous structures suggest similar function but not close ancestry.",
                  "Embryology can show early developmental similarities.",
                  "DNA/protein comparisons provide molecular evidence for relatedness.",
                ],
                vocabulary: ["fossil record", "transitional fossil", "homologous", "analogous", "common ancestry"],
                practice: [
                  {
                    question: "What is a homologous structure?",
                    answer:
                      "A structure with similar underlying anatomy due to common ancestry (e.g., human arm and whale flipper).",
                  },
                  {
                    question: "How can DNA evidence support evolution?",
                    answer:
                      "More similar DNA sequences indicate closer evolutionary relationships and common ancestry.",
                  },
                  {
                    question: "Why is the fossil record incomplete?",
                    answer:
                      "Fossilization is rare; many organisms don’t fossilize, and fossils can be destroyed by erosion/geology.",
                  },
                ],
              },

              speciation: {
                title: "Speciation",
                subtitle: "How new species form.",
                notes: [
                  "Speciation occurs when populations become reproductively isolated and diverge genetically.",
                  "Isolation can be geographic (physical separation) or reproductive (timing, behaviour, incompatible mating).",
                  "Over time, mutations and selection can lead to differences that prevent interbreeding.",
                ],
                vocabulary: ["speciation", "reproductive isolation", "gene pool", "geographic isolation"],
                practice: [
                  {
                    question: "Give one example of a reproductive isolating mechanism.",
                    answer:
                      "Temporal isolation (different mating seasons), behavioural isolation (different mating calls), mechanical isolation, etc.",
                  },
                  {
                    question: "How can geographic isolation lead to speciation?",
                    answer:
                      "Separated populations experience different environments and mutations; without gene flow they diverge until they can’t interbreed.",
                  },
                ],
              },
            },
          },
        },
      },

      chemistry: {
        title: "Grade 11 Chemistry",
        subtitle: "Bonding and solutions (expanded notes, practice, and labs).",
        units: {
          bonding: {
            title: "Chemical bonding",
            subtitle: "Ionic vs covalent bonding and structure.",
            lessons: {
              ionic: {
                title: "Ionic bonding",
                subtitle: "Electron transfer and ionic compounds.",
                notes: [
                  "Ionic bonds form when electrons transfer from a metal to a non-metal, creating ions.",
                  "Opposite charges attract; ionic compounds form crystal lattices.",
                  "Ionic compounds often have high melting points and can conduct electricity when dissolved or molten.",
                ],
                vocabulary: ["ion", "cation", "anion", "ionic bond", "lattice"],
                practice: [
                  {
                    question: "Why do ionic compounds form crystals?",
                    answer:
                      "Ions arrange into a repeating lattice to maximize attractions and minimize repulsions.",
                  },
                  {
                    question: "Explain why solid NaCl doesn’t conduct electricity but saltwater does.",
                    answer:
                      "In a solid, ions are fixed in place. In solution, ions move and carry charge.",
                  },
                ],
                labs: [
                  {
                    title: "Lab: conductivity of solutions",
                    purpose: "Test which solutions conduct electricity and relate to ions.",
                    materials: ["Conductivity tester (or circuit)", "Distilled water", "Salt", "Sugar", "Cups"],
                    safety: ["Keep electronics away from spills.", "Do not ingest lab solutions."],
                    procedure: [
                      "Test conductivity of distilled water.",
                      "Dissolve salt in water and test.",
                      "Dissolve sugar in water and test.",
                      "Compare results and explain using particle models.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Which solutions conducted and why?",
                        answer:
                          "Saltwater conducts because it contains ions; sugar water doesn’t because sugar dissolves as neutral molecules.",
                      },
                    ],
                  },
                ],
              },

              covalent: {
                title: "Covalent bonding",
                subtitle: "Sharing electrons and molecule structure.",
                notes: [
                  "Covalent bonds form when non-metals share electrons to fill valence shells.",
                  "Bonds can be polar or nonpolar depending on electronegativity differences.",
                  "Molecular substances often have lower melting points than ionic substances.",
                ],
                vocabulary: ["covalent bond", "molecule", "electronegativity", "polar"],
                practice: [
                  {
                    question: "What makes a covalent bond polar?",
                    answer:
                      "Unequal sharing of electrons due to different electronegativities, creating partial charges.",
                  },
                  {
                    question: "Why do many molecular substances have low melting points?",
                    answer:
                      "Intermolecular forces between molecules are weaker than ionic lattice forces.",
                  },
                ],
              },

              lewis: {
                title: "Lewis structures",
                subtitle: "Drawing molecules and ions.",
                notes: [
                  "Lewis structures show valence electrons and bonding pairs.",
                  "Steps: count valence electrons, arrange atoms, form bonds, complete octets, check remaining electrons.",
                  "Some molecules have multiple valid resonance forms.",
                ],
                vocabulary: ["valence electrons", "Lewis structure", "octet", "resonance"],
                practice: [
                  {
                    question: "Draw a Lewis structure for CO₂.",
                    answer:
                      "O=C=O with two double bonds; each O has two lone pairs; carbon has no lone pairs.",
                  },
                  {
                    question: "How many valence electrons are in H₂O?",
                    answer: "8 total (O has 6, each H has 1).",
                  },
                ],
              },
            },
          },

          solutions: {
            title: "Solutions & solubility",
            subtitle: "Concentration and solubility.",
            lessons: {
              concentration: {
                title: "Concentration",
                subtitle: "g/L, mol/L and dilution.",
                notes: [
                  "Concentration describes how much solute is dissolved in a given amount of solution.",
                  "Common units: g/L (mass concentration) and mol/L (molarity).",
                  "Dilution lowers concentration by adding solvent while keeping solute amount constant.",
                ],
                vocabulary: ["solute", "solvent", "solution", "concentration", "dilution"],
                practice: [
                  {
                    question: "Calculate concentration in g/L: 5.0 g salt in 250 mL solution.",
                    answer: "5.0 g / 0.250 L = 20 g/L.",
                  },
                  {
                    question: "If you double the volume of a solution by adding water, what happens to concentration?",
                    answer: "It halves (assuming solute amount stays the same).",
                  },
                ],
                labs: [
                  {
                    title: "Lab: dilution series",
                    purpose: "Create a set of solutions with different concentrations and compare.",
                    materials: ["Food colouring", "Water", "Graduated cylinder", "Cups"],
                    safety: ["Clean spills to avoid staining.", "Do not ingest lab liquids."],
                    procedure: [
                      "Make a strong coloured solution (stock).",
                      "Prepare 1:2, 1:4, 1:8 dilutions by measuring volumes.",
                      "Compare colour intensity and relate it to concentration.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Why does the colour become lighter with dilution?",
                        answer:
                          "Fewer dye particles per unit volume, so less light is absorbed.",
                      },
                    ],
                  },
                ],
              },

              solubility: {
                title: "Solubility",
                subtitle: "Saturated vs unsaturated solutions.",
                notes: [
                  "Solubility is the maximum amount of solute that dissolves at a given temperature.",
                  "Unsaturated: can dissolve more; saturated: at max; supersaturated: more than max (unstable).",
                  "Temperature often increases solubility of solids but decreases solubility of gases.",
                ],
                vocabulary: ["solubility", "saturated", "unsaturated", "supersaturated"],
                practice: [
                  {
                    question: "What does it mean for a solution to be saturated?",
                    answer:
                      "It contains the maximum dissolved solute possible at that temperature; extra solute won’t dissolve.",
                  },
                  {
                    question: "Why do warm soda drinks go flat faster?",
                    answer:
                      "Gas solubility decreases with temperature, so CO₂ escapes more easily.",
                  },
                ],
              },

              acidsBases: {
                title: "Acids & bases (intro)",
                subtitle: "pH and neutralization.",
                notes: [
                  "pH is a measure related to hydrogen ion concentration (lower pH = more acidic).",
                  "Acids and bases react in neutralization to form water and a salt.",
                  "Indicators help estimate pH; pH scale is logarithmic.",
                ],
                vocabulary: ["pH", "indicator", "neutralization", "salt"],
                practice: [
                  {
                    question: "If one solution is pH 2 and another is pH 4, which is more acidic and by how much?",
                    answer: "pH 2 is 100× more acidic (10^(4−2)).",
                  },
                  {
                    question: "Write the word equation for neutralization.",
                    answer: "acid + base → salt + water",
                  },
                ],
              },
            },
          },
        },
      },

      physics: {
        title: "Grade 11 Physics",
        subtitle: "Motion and waves (expanded notes, practice, and labs).",
        units: {
          kinematics: {
            title: "Kinematics",
            subtitle: "Describing and analyzing motion.",
            lessons: {
              vectors: {
                title: "Scalars and vectors",
                subtitle: "Direction matters.",
                notes: [
                  "Scalars have magnitude only (time, mass, speed).",
                  "Vectors have magnitude and direction (displacement, velocity, acceleration, force).",
                  "Vector addition can be done graphically (head-to-tail) or using components.",
                ],
                vocabulary: ["scalar", "vector", "component", "resultant"],
                practice: [
                  {
                    question: "Is velocity a scalar or vector? Explain.",
                    answer: "Vector, because it includes direction (displacement per time).",
                  },
                  {
                    question: "Add 3 m east and 4 m north. What is the magnitude of the resultant?",
                    answer: "5 m (Pythagorean theorem).",
                  },
                ],
                labs: [
                  {
                    title: "Lab: vector addition (force table or scaled drawings)",
                    purpose: "Determine a resultant vector using graphical methods.",
                    materials: ["Graph paper", "Ruler", "Protractor"],
                    safety: ["No special safety requirements."],
                    procedure: [
                      "Choose two or three vectors with given magnitudes/directions.",
                      "Draw to scale head-to-tail.",
                      "Measure the resultant magnitude and direction.",
                      "Compare to component method if taught.",
                    ],
                    analysisQuestions: [
                      {
                        question: "Why does changing the scale affect your result?",
                        answer:
                          "A poor scale makes measurement error larger; better scaling improves precision.",
                      },
                    ],
                  },
                ],
              },

              graphs: {
                title: "Motion graphs",
                subtitle: "Interpreting graphs.",
                notes: [
                  "Slope of position-time = velocity.",
                  "Slope of velocity-time = acceleration.",
                  "Area under velocity-time = displacement.",
                  "Graphs help connect qualitative motion descriptions to quantitative analysis.",
                ],
                vocabulary: ["slope", "area", "position-time", "velocity-time"],
                practice: [
                  {
                    question: "What does the slope of a velocity-time graph represent?",
                    answer: "Acceleration.",
                  },
                  {
                    question: "What does a flat line on a velocity-time graph mean?",
                    answer: "Constant velocity (zero acceleration).",
                  },
                ],
              },
            },
          },

          waves: {
            title: "Waves",
            subtitle: "Wave properties and sound.",
            lessons: {
              properties: {
                title: "Wave properties",
                subtitle: "Frequency, wavelength, amplitude.",
                notes: [
                  "Wavelength (λ): distance between repeating points.",
                  "Frequency (f): cycles per second (Hz). Period (T) = 1/f.",
                  "Wave speed: v = fλ.",
                  "Amplitude relates to energy/intensity.",
                ],
                vocabulary: ["wavelength", "frequency", "period", "amplitude", "wave speed"],
                practice: [
                  {
                    question: "A wave has f = 5.0 Hz and λ = 2.0 m. Find speed.",
                    answer: "v = fλ = 5.0 × 2.0 = 10 m/s.",
                  },
                  {
                    question: "How are frequency and period related?",
                    answer: "They are inverses: T = 1/f.",
                  },
                ],
              },

              sound: {
                title: "Sound",
                subtitle: "How sound travels.",
                notes: [
                  "Sound is a longitudinal wave that requires a medium (solid, liquid, or gas).",
                  "Pitch relates to frequency; loudness relates to amplitude/intensity.",
                  "Sound travels faster in solids than gases because particles are closer together.",
                ],
                vocabulary: ["longitudinal wave", "medium", "frequency", "amplitude", "pitch"],
                practice: [
                  {
                    question: "Why can’t sound travel through a vacuum?",
                    answer: "There are no particles to vibrate and transfer the wave.",
                  },
                  {
                    question: "What happens to pitch if frequency increases?",
                    answer: "Pitch increases.",
                  },
                ],
                labs: [
                  {
                    title: "Lab: resonance with tuning forks (or straw instruments)",
                    purpose: "Explore how length and frequency relate to pitch.",
                    materials: ["Straws (or tuning forks)", "Scissors", "Ruler"],
                    safety: ["Use scissors carefully.", "Do not put small pieces in mouth."],
                    procedure: [
                      "Make 3 straw instruments with different lengths.",
                      "Blow across the top to produce sound.",
                      "Compare pitch as length changes.",
                    ],
                    analysisQuestions: [
                      {
                        question: "How does tube length affect pitch?",
                        answer: "Shorter length produces higher pitch (higher frequency).",
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },

      "earth-space": {
        title: "Grade 11 Earth & Space",
        subtitle: "Astronomy (expanded notes, practice, and labs).",
        units: {
          astronomy: {
            title: "Astronomy",
            subtitle: "Stars and the scale of the universe.",
            lessons: {
              scale: {
                title: "Scale of the universe",
                subtitle: "Distances and units.",
                notes: [
                  "Astronomical unit (AU) is the average Earth–Sun distance.",
                  "A light-year is the distance light travels in one year.",
                  "Large distances require scientific notation and careful unit conversions.",
                ],
                vocabulary: ["astronomical unit", "light-year", "scientific notation"],
                practice: [
                  {
                    question: "Why do astronomers use light-years?",
                    answer: "Distances are enormous; light-years provide a convenient scale.",
                  },
                  {
                    question: "Is a light-year a unit of time or distance?",
                    answer: "Distance.",
                  },
                ],
              },

              stars: {
                title: "Stars",
                subtitle: "Formation and life cycles.",
                notes: [
                  "Stars form in nebulae when gravity causes gas and dust to collapse.",
                  "Fusion in the core releases energy; hydrostatic equilibrium balances gravity and pressure.",
                  "A star’s mass largely determines its life cycle (low-mass vs high-mass outcomes).",
                ],
                vocabulary: ["nebula", "fusion", "hydrostatic equilibrium", "supernova"],
                practice: [
                  {
                    question: "What is a nebula?",
                    answer: "A large cloud of gas and dust where stars can form.",
                  },
                  {
                    question: "Why does mass matter for a star’s life cycle?",
                    answer:
                      "Higher mass leads to higher core temperature/pressure, faster fusion, shorter lifespan, and different end stages.",
                  },
                ],
                labs: [
                  {
                    title: "Mini-lab: brightness vs distance (inverse square idea)",
                    purpose: "Model how apparent brightness changes with distance.",
                    materials: ["Small flashlight", "Meter stick", "Phone light meter app (optional)"],
                    safety: ["Do not shine lights into eyes."],
                    procedure: [
                      "Measure light intensity (or perceived brightness) at 0.5 m, 1.0 m, and 2.0 m.",
                      "Record results and describe the pattern.",
                    ],
                    analysisQuestions: [
                      {
                        question: "How did brightness change as distance increased?",
                        answer:
                          "It decreased; roughly following an inverse-square trend (doubling distance makes brightness much smaller).",
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },

  grade12: {
    strands: {
      biology: {
        title: "Grade 12 Biology",
        subtitle: "Biochemistry, genetics, homeostasis, and evolution.",
        units: {
          biochemistry: {
            title: "Biochemistry & metabolism",
            subtitle: "Macromolecules and energy pathways.",
            lessons: {
              macromolecules: {
                title: "Biological macromolecules",
                subtitle: "Carbs, lipids, proteins, nucleic acids.",
              },
              enzymes: {
                title: "Enzymes",
                subtitle: "Factors that affect enzyme activity.",
              },
            },
          },
          genetics: {
            title: "Molecular genetics",
            subtitle: "Gene expression and biotechnology.",
            lessons: {
              expression: {
                title: "Gene expression",
                subtitle: "Transcription and translation.",
              },
              biotech: {
                title: "Biotechnology (intro)",
                subtitle: "PCR, gels, and genetic engineering.",
              },
            },
          },
        },
      },

      chemistry: {
        title: "Grade 12 Chemistry",
        subtitle: "Structure, reactions, equilibrium, and organic chemistry.",
        units: {
          structure: {
            title: "Structure & properties",
            subtitle: "Bonding and intermolecular forces.",
            lessons: {
              imf: {
                title: "Intermolecular forces",
                subtitle: "IMFs and physical properties.",
              },
              organic: {
                title: "Organic chemistry (intro)",
                subtitle: "Functional groups and naming (starter).",
              },
            },
          },
          equilibrium: {
            title: "Equilibrium (intro)",
            subtitle: "Dynamic equilibrium and Le Châtelier’s principle.",
            lessons: {
              dynamic: {
                title: "Dynamic equilibrium",
                subtitle: "Forward and reverse reactions at equal rates.",
              },
              lechatelier: {
                title: "Le Châtelier’s principle",
                subtitle: "Predicting shifts.",
              },
            },
          },
        },
      },

      physics: {
        title: "Grade 12 Physics",
        subtitle: "Dynamics, energy, waves, fields, and modern physics.",
        units: {
          dynamics: {
            title: "Dynamics",
            subtitle: "Forces and motion in two dimensions.",
            lessons: {
              fbd: {
                title: "Free-body diagrams",
                subtitle: "Forces and components.",
              },
              circular: {
                title: "Circular motion (intro)",
                subtitle: "Centripetal acceleration and force.",
              },
            },
          },
          fields: {
            title: "Fields (intro)",
            subtitle: "Electric, magnetic, and gravitational fields.",
            lessons: {
              electric: {
                title: "Electric fields",
                subtitle: "Field lines and forces.",
              },
              magnetic: {
                title: "Magnetic fields",
                subtitle: "Field lines and interactions.",
              },
            },
          },
        },
      },

      "earth-space": {
        title: "Grade 12 Earth & Space",
        subtitle: "Earth systems, climate, geology, and astronomy.",
        units: {
          climate: {
            title: "Climate systems",
            subtitle: "Energy balance and global change.",
            lessons: {
              energyBalance: {
                title: "Energy balance",
                subtitle: "Incoming vs outgoing radiation.",
              },
              oceans: {
                title: "Oceans and climate",
                subtitle: "Heat capacity and circulation.",
              },
            },
          },
        },
      },
    },
  },
};
