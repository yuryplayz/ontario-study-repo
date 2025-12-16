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
        subtitle: "Biodiversity, evolution, genetics, plants, and animals.",
        units: {
          biodiversity: {
            title: "Biodiversity",
            subtitle: "Classifying and protecting life on Earth.",
            lessons: {
              classification: {
                title: "Classification basics",
                subtitle: "Domains, kingdoms, and naming organisms.",
              },
              ecosystems: {
                title: "Ecosystems & interactions",
                subtitle: "Populations, communities, and energy flow.",
              },
              conservation: {
                title: "Conservation & sustainability",
                subtitle: "Human impacts and ecosystem protection.",
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
              },
              evidence: {
                title: "Evidence for evolution",
                subtitle: "Fossils, anatomy, and DNA.",
              },
              speciation: {
                title: "Speciation",
                subtitle: "How new species form.",
              },
            },
          },
        },
      },

      chemistry: {
        title: "Grade 11 Chemistry",
        subtitle: "Bonding, reactions, solutions, and gases.",
        units: {
          bonding: {
            title: "Chemical bonding",
            subtitle: "Ionic vs covalent bonding and structure.",
            lessons: {
              ionic: {
                title: "Ionic bonding",
                subtitle: "Electron transfer and ionic compounds.",
              },
              covalent: {
                title: "Covalent bonding",
                subtitle: "Sharing electrons and molecule structure.",
              },
              lewis: {
                title: "Lewis structures",
                subtitle: "Drawing molecules and ions.",
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
              },
              solubility: {
                title: "Solubility",
                subtitle: "Saturated vs unsaturated solutions.",
              },
              acidsBases: {
                title: "Acids & bases (intro)",
                subtitle: "pH and neutralization.",
              },
            },
          },
        },
      },

      physics: {
        title: "Grade 11 Physics",
        subtitle: "Motion, forces, energy, waves, and electricity.",
        units: {
          kinematics: {
            title: "Kinematics",
            subtitle: "Describing and analyzing motion.",
            lessons: {
              vectors: {
                title: "Scalars and vectors",
                subtitle: "Direction matters.",
              },
              graphs: {
                title: "Motion graphs",
                subtitle: "Interpreting graphs.",
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
              },
              sound: {
                title: "Sound",
                subtitle: "How sound travels.",
              },
            },
          },
        },
      },

      "earth-space": {
        title: "Grade 11 Earth & Space",
        subtitle: "Astronomy and Earth systems (overview).",
        units: {
          astronomy: {
            title: "Astronomy",
            subtitle: "Stars, galaxies, and scale.",
            lessons: {
              scale: {
                title: "Scale of the universe",
                subtitle: "Distances and units.",
              },
              stars: {
                title: "Stars",
                subtitle: "Formation and life cycles.",
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
