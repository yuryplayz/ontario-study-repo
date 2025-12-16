export type ScienceLesson = {
  title: string;
  subtitle: string;
  bigIdeas?: string[];
  keyPoints?: string[];
  vocabulary?: string[];
  quickCheck?: string[];
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

// Starter-note navigation scaffold based on Ontario secondary science strands.
// This is intentionally concise; we can expand each lesson with diagrams and practice.
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
                bigIdeas: [
                  "Living things are organized from cells to systems.",
                  "Structure relates to function in biological systems.",
                ],
                vocabulary: ["cell", "tissue", "organ", "organ system"],
                quickCheck: [
                  "Give an example of a tissue and the organ system it belongs to.",
                  "Explain why specialization is important for multicellular organisms.",
                ],
              },
              "human-body-systems": {
                title: "Human body systems",
                subtitle: "Digestive, respiratory, circulatory, and more.",
                bigIdeas: ["Organ systems interact to maintain life."],
                keyPoints: [
                  "Systems work together (e.g., respiratory + circulatory transport oxygen).",
                  "Feedback mechanisms help maintain stable internal conditions.",
                ],
                vocabulary: ["homeostasis", "feedback", "transport"],
                quickCheck: [
                  "Describe how two organ systems work together during exercise.",
                  "What is homeostasis? Give one example.",
                ],
              },
              "cells-health-disease": {
                title: "Cells, health & disease",
                subtitle: "How disruptions affect overall system function.",
                bigIdeas: ["Disruptions at the cellular level can affect whole systems."],
                keyPoints: [
                  "Infectious diseases can disrupt normal system function.",
                  "Lifestyle factors can support or harm system health.",
                ],
                vocabulary: ["pathogen", "immunity", "risk factor"],
                quickCheck: [
                  "Explain one way a pathogen can affect an organ system.",
                  "List two lifestyle factors that support healthy systems.",
                ],
              },
              "microscopy-observations": {
                title: "Microscopy & observations",
                subtitle: "Observing cells and tissues using scientific tools.",
                keyPoints: [
                  "Use appropriate units (µm, mm) and record observations carefully.",
                  "Drawings should include titles, labels, and scale where possible.",
                ],
                vocabulary: ["magnification", "resolution", "field of view"],
                quickCheck: [
                  "What is the difference between magnification and resolution?",
                  "Why is scale important in scientific diagrams?",
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
            subtitle: "Types of reactions, balancing, and evidence.",
            lessons: {
              "evidence-of-reaction": {
                title: "Evidence of chemical change",
                subtitle: "Signs that a new substance formed.",
                keyPoints: [
                  "Common evidence: gas, precipitate, temperature change, colour change.",
                  "Evidence suggests a chemical change but must be interpreted carefully.",
                ],
                vocabulary: ["precipitate", "product", "reactant"],
                quickCheck: [
                  "Name three pieces of evidence of a chemical reaction.",
                  "Why is a temperature change not always proof of a chemical reaction?",
                ],
              },
              "balancing-equations": {
                title: "Balancing chemical equations",
                subtitle: "Conservation of atoms and mass.",
                bigIdeas: ["Atoms are conserved in chemical reactions."],
                keyPoints: [
                  "Use coefficients (not subscripts) to balance.",
                  "Balanced equations represent particle ratios.",
                ],
                vocabulary: ["coefficient", "subscript", "conservation of mass"],
                quickCheck: [
                  "Balance: H₂ + O₂ → H₂O",
                  "Explain why you cannot change subscripts when balancing.",
                ],
              },
              "reaction-types": {
                title: "Types of reactions",
                subtitle: "Synthesis, decomposition, displacement, combustion.",
                keyPoints: [
                  "Recognize reaction patterns from equations.",
                  "Complete combustion produces CO₂ and H₂O.",
                ],
                vocabulary: ["synthesis", "decomposition", "combustion", "displacement"],
                quickCheck: [
                  "Classify: 2KClO₃ → 2KCl + 3O₂",
                  "Classify: CH₄ + 2O₂ → CO₂ + 2H₂O",
                ],
              },
              "acids-bases-intro": {
                title: "Acids & bases (intro)",
                subtitle: "pH, indicators, and neutralization basics.",
                keyPoints: [
                  "pH < 7 acidic, pH = 7 neutral, pH > 7 basic.",
                  "Indicators change colour in different pH ranges.",
                ],
                vocabulary: ["pH", "indicator", "neutralization"],
                quickCheck: [
                  "What does a pH of 3 indicate?",
                  "Why do we use indicators instead of just looking at a solution?",
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
                keyPoints: [
                  "Speed is scalar; velocity includes direction.",
                  "Acceleration is the rate of change of velocity.",
                ],
                vocabulary: ["displacement", "velocity", "acceleration"],
                quickCheck: [
                  "Explain the difference between speed and velocity.",
                  "What does negative acceleration mean in a chosen direction?",
                ],
              },
              newton: {
                title: "Newton’s laws (intro)",
                subtitle: "Forces cause acceleration.",
                bigIdeas: ["Forces change motion; balanced forces mean no acceleration."],
                keyPoints: ["Net force determines acceleration (Fnet = ma)."],
                vocabulary: ["net force", "inertia", "mass"],
                quickCheck: ["What happens when net force is zero?"],
              },
              energy: {
                title: "Energy in systems",
                subtitle: "Kinetic and potential energy ideas.",
                keyPoints: [
                  "Energy can transfer between forms.",
                  "Efficiency relates useful output to input.",
                ],
                vocabulary: ["kinetic energy", "potential energy", "efficiency"],
                quickCheck: [
                  "Give an example of energy transfer in a car.",
                  "Why is no real system 100% efficient?",
                ],
              },
              graphs: {
                title: "Motion graphs",
                subtitle: "Position-time and velocity-time graphs.",
                keyPoints: [
                  "Slope on a position-time graph represents velocity.",
                  "Area under a velocity-time graph represents displacement.",
                ],
                vocabulary: ["slope", "area", "rate"],
                quickCheck: [
                  "What does a flat line on a position-time graph mean?",
                  "What does the area under a velocity-time graph represent?",
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
                keyPoints: [
                  "Weather changes day-to-day; climate is long-term trends.",
                  "Climate data uses long-term averages.",
                ],
                vocabulary: ["climate", "weather", "trend"],
                quickCheck: [
                  "Why do we use long-term averages to describe climate?",
                  "Give an example of a climate variable.",
                ],
              },
              "greenhouse-effect": {
                title: "Greenhouse effect",
                subtitle: "How greenhouse gases trap heat.",
                bigIdeas: ["Energy balance influences Earth’s climate."],
                keyPoints: ["CO₂, CH₄, and water vapour affect heat retention."],
                vocabulary: ["greenhouse gas", "infrared radiation", "albedo"],
                quickCheck: [
                  "Name two greenhouse gases.",
                  "How can albedo changes affect temperature?",
                ],
              },
              evidence: {
                title: "Evidence of climate change",
                subtitle: "Ice cores, temperature records, sea level.",
                keyPoints: [
                  "Multiple independent datasets support warming trends.",
                  "Use evidence carefully; correlation is not always causation.",
                ],
                vocabulary: ["proxy data", "ice core", "sea level"],
                quickCheck: [
                  "What is proxy data?",
                  "List two types of evidence for climate change.",
                ],
              },
              "mitigation-adaptation": {
                title: "Mitigation & adaptation",
                subtitle: "Reducing emissions and preparing for impacts.",
                keyPoints: [
                  "Mitigation reduces causes; adaptation reduces harm.",
                  "Solutions involve technology, policy, and behaviour.",
                ],
                vocabulary: ["mitigation", "adaptation", "carbon footprint"],
                quickCheck: [
                  "Give one mitigation strategy and one adaptation strategy.",
                  "Why do we need both mitigation and adaptation?",
                ],
              },
            },
          },
        },
      },
    },
  },

  // Grade 11 and 12 starter structure (more can be added iteratively)
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
                vocabulary: ["taxonomy", "binomial nomenclature", "species"],
                quickCheck: ["What is binomial nomenclature? Give an example."],
              },
              ecosystems: {
                title: "Ecosystems & interactions",
                subtitle: "Populations, communities, and energy flow.",
                vocabulary: ["trophic level", "food web", "symbiosis"],
                quickCheck: ["Why are food webs more realistic than food chains?"],
              },
              conservation: {
                title: "Conservation & sustainability",
                subtitle: "Human impacts and ecosystem protection.",
                vocabulary: ["invasive species", "habitat fragmentation", "sustainability"],
                quickCheck: ["Explain one way humans can reduce biodiversity."],
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
                vocabulary: ["adaptation", "selection pressure", "fitness"],
                quickCheck: ["Why is variation necessary for natural selection?"],
              },
              evidence: {
                title: "Evidence for evolution",
                subtitle: "Fossils, anatomy, and DNA.",
                vocabulary: ["fossil record", "homologous structures", "common ancestry"],
                quickCheck: ["What is a homologous structure?"],
              },
              speciation: {
                title: "Speciation",
                subtitle: "How new species form.",
                vocabulary: ["reproductive isolation", "gene pool", "speciation"],
                quickCheck: ["Give an example of reproductive isolation."],
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
                quickCheck: ["Why do ionic compounds form crystals?"],
              },
              covalent: {
                title: "Covalent bonding",
                subtitle: "Sharing electrons and molecule structure.",
                quickCheck: ["What is the difference between polar and nonpolar covalent bonds?"],
              },
              lewis: {
                title: "Lewis structures",
                subtitle: "Drawing molecules and ions.",
                quickCheck: ["Draw a Lewis structure for CO₂."],
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
                quickCheck: ["What happens to concentration when you add solvent?"],
              },
              solubility: {
                title: "Solubility",
                subtitle: "Saturated vs unsaturated solutions.",
                quickCheck: ["What does it mean for a solution to be saturated?"],
              },
              acidsBases: {
                title: "Acids & bases (intro)",
                subtitle: "pH and neutralization.",
                quickCheck: ["What pH range is acidic?"],
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
                quickCheck: ["Is velocity a scalar or vector? Explain."],
              },
              graphs: {
                title: "Motion graphs",
                subtitle: "Interpreting graphs.",
                quickCheck: ["What does the slope of a velocity-time graph represent?"],
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
                quickCheck: ["How are frequency and period related?"],
              },
              sound: {
                title: "Sound",
                subtitle: "How sound travels.",
                quickCheck: ["Why can’t sound travel through a vacuum?"],
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
                quickCheck: ["Why do astronomers use light-years?"],
              },
              stars: {
                title: "Stars",
                subtitle: "Formation and life cycles.",
                quickCheck: ["What is a nebula?"],
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
                quickCheck: ["What is the role of enzymes?"],
              },
              enzymes: {
                title: "Enzymes",
                subtitle: "Factors that affect enzyme activity.",
                quickCheck: ["Name two factors that can affect enzyme activity."],
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
                quickCheck: ["What is the role of mRNA?"],
              },
              biotech: {
                title: "Biotechnology (intro)",
                subtitle: "PCR, gels, and genetic engineering.",
                quickCheck: ["What is PCR used for?"],
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
                quickCheck: ["How do IMFs affect boiling point?"],
              },
              organic: {
                title: "Organic chemistry (intro)",
                subtitle: "Functional groups and naming (starter).",
                quickCheck: ["What is a functional group?"],
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
                quickCheck: ["What does it mean for a system to be at equilibrium?"],
              },
              lechatelier: {
                title: "Le Châtelier’s principle",
                subtitle: "Predicting shifts.",
                quickCheck: ["How does increasing temperature affect an exothermic equilibrium?"],
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
                quickCheck: ["Why do we resolve forces into components?"],
              },
              circular: {
                title: "Circular motion (intro)",
                subtitle: "Centripetal acceleration and force.",
                quickCheck: ["What provides centripetal force in orbit?"],
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
                quickCheck: ["How do electric field lines indicate direction?"],
              },
              magnetic: {
                title: "Magnetic fields",
                subtitle: "Field lines and interactions.",
                quickCheck: ["How can you visualize a magnetic field?"],
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
                quickCheck: ["What is albedo and why does it matter?"],
              },
              oceans: {
                title: "Oceans and climate",
                subtitle: "Heat capacity and circulation.",
                quickCheck: ["How do oceans moderate climate?"],
              },
            },
          },
        },
      },
    },
  },
};
