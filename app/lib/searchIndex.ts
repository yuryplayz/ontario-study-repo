export type SearchItem = {
  title: string;
  href: string;
  tags?: string[];
};

export const SEARCH_INDEX: SearchItem[] = [
  // Core
  { title: "Grade 10 Math", href: "/math/grade10", tags: ["grade 10", "math"] },
  { title: "Grade 11 Math", href: "/math/grade11", tags: ["grade 11", "math"] },
  { title: "Grade 12 Math", href: "/math/grade12", tags: ["grade 12", "math"] },

  // Grade 10 units
  { title: "Grade 10 Quadratics", href: "/math/grade10/quadratics", tags: ["quadratics", "grade 10"] },
  { title: "Factoring Quadratics", href: "/math/grade10/quadratics/factoring", tags: ["factoring", "quadratics"] },
  { title: "Grade 10 Trigonometry", href: "/math/grade10/trigonometry", tags: ["trig", "sohcahtoa"] },
  { title: "Grade 10 Linear Systems", href: "/math/grade10/linear-systems", tags: ["systems", "graphing"] },
  { title: "Grade 10 Measurement & Geometry", href: "/math/grade10/measurement-geometry", tags: ["geometry", "area", "volume"] },

  // Grade 11 Functions
  { title: "Grade 11 Functions", href: "/math/grade11/functions", tags: ["functions", "mcr3u"] },
  { title: "Transformations (Gr 11)", href: "/math/grade11/functions/transformations", tags: ["transformations"] },
  { title: "Domain & Range (Gr 11)", href: "/math/grade11/functions/domain-range", tags: ["domain", "range"] },
  { title: "Function Notation (Gr 11)", href: "/math/grade11/functions/function-notation", tags: ["notation"] },
  { title: "Operations on Functions (Gr 11)", href: "/math/grade11/functions/operations", tags: ["composition"] },

  // Grade 11 Trig
  { title: "Grade 11 Trigonometry", href: "/math/grade11/trigonometry", tags: ["trig"] },
  { title: "Exact Values (Gr 11)", href: "/math/grade11/trigonometry/exact-values", tags: ["exact values"] },
  { title: "Unit Circle (Gr 11)", href: "/math/grade11/trigonometry/unit-circle", tags: ["unit circle"] },
  { title: "Identities Intro (Gr 11)", href: "/math/grade11/trigonometry/identities-intro", tags: ["identities"] },
  { title: "Solving Trig Equations (Gr 11)", href: "/math/grade11/trigonometry/solving-equations", tags: ["equations"] },

  // Grade 11 Sequences
  { title: "Sequences & Series (Gr 11)", href: "/math/grade11/sequences-series", tags: ["sequences", "series"] },
  { title: "Arithmetic Sequences", href: "/math/grade11/sequences-series/arithmetic", tags: ["arithmetic"] },
  { title: "Geometric Sequences", href: "/math/grade11/sequences-series/geometric", tags: ["geometric"] },
  { title: "Series & Sums", href: "/math/grade11/sequences-series/series-sums", tags: ["sums"] },
  { title: "Sequence Applications", href: "/math/grade11/sequences-series/applications", tags: ["word problems"] },

  // Grade 11 Financial Math
  { title: "Financial Math (Gr 11)", href: "/math/grade11/financial-math", tags: ["money", "mcf3m"] },
  { title: "Simple Interest", href: "/math/grade11/financial-math/simple-interest", tags: ["interest"] },
  { title: "Compound Interest", href: "/math/grade11/financial-math/compound-interest", tags: ["interest"] },
  { title: "Loans & Payments", href: "/math/grade11/financial-math/loans-payments", tags: ["loans"] },
  { title: "Budgeting", href: "/math/grade11/financial-math/budgeting", tags: ["budget"] },

  // Grade 12 hubs
  { title: "Advanced Functions (MHF4U)", href: "/math/grade12/advanced-functions", tags: ["mhf4u"] },
  { title: "Calculus & Vectors (MCV4U)", href: "/math/grade12/calculus-vectors", tags: ["mcv4u"] },

  // Grade 12 AF notes
  { title: "AF Transformations Unit", href: "/math/grade12/advanced-functions/transformations", tags: ["transformations"] },
  { title: "AF Transformation Rules", href: "/math/grade12/advanced-functions/transformations/transformations-rules", tags: ["rules"] },
  { title: "AF Domain & Range", href: "/math/grade12/advanced-functions/transformations/domain-range", tags: ["domain", "range"] },
  { title: "Polynomial Unit", href: "/math/grade12/advanced-functions/polynomial", tags: ["polynomial"] },
  { title: "Zeros & Multiplicity", href: "/math/grade12/advanced-functions/polynomial/zeros-multiplicity", tags: ["zeros"] },
  { title: "End Behaviour", href: "/math/grade12/advanced-functions/polynomial/end-behaviour", tags: ["end behaviour"] },
  { title: "Rational Unit", href: "/math/grade12/advanced-functions/rational", tags: ["rational"] },
  { title: "Domain & Asymptotes", href: "/math/grade12/advanced-functions/rational/domain-asymptotes", tags: ["asymptotes"] },
  { title: "Holes & Intercepts", href: "/math/grade12/advanced-functions/rational/holes-intercepts", tags: ["holes"] },
  { title: "Trig Unit (MHF4U)", href: "/math/grade12/advanced-functions/trigonometry", tags: ["trig"] },
  { title: "Trig Graph Features", href: "/math/grade12/advanced-functions/trigonometry/graph-features", tags: ["amplitude", "period"] },
  { title: "Trig Graph Transformations", href: "/math/grade12/advanced-functions/trigonometry/graph-transformations", tags: ["transformations"] },
  { title: "Logs Unit", href: "/math/grade12/advanced-functions/logarithms", tags: ["logs"] },
  { title: "Log Laws", href: "/math/grade12/advanced-functions/logarithms/log-laws", tags: ["laws"] },
  { title: "Solving Log Equations", href: "/math/grade12/advanced-functions/logarithms/solving-log-equations", tags: ["equations"] },

  // Grade 12 Calculus & Vectors notes
  { title: "Limits Unit", href: "/math/grade12/calculus-vectors/limits", tags: ["limits"] },
  { title: "Basic Limits", href: "/math/grade12/calculus-vectors/limits/basic-limits", tags: ["factoring"] },
  { title: "Derivatives Unit", href: "/math/grade12/calculus-vectors/derivatives", tags: ["derivatives"] },
  { title: "Derivative Rules", href: "/math/grade12/calculus-vectors/derivatives/derivative-rules", tags: ["power rule"] },
  { title: "Tangent Line", href: "/math/grade12/calculus-vectors/derivatives/tangent-line", tags: ["tangent"] },
  { title: "Applications Unit", href: "/math/grade12/calculus-vectors/applications", tags: ["optimization"] },
  { title: "Optimization", href: "/math/grade12/calculus-vectors/applications/optimization", tags: ["max", "min"] },
  { title: "Vectors Unit", href: "/math/grade12/calculus-vectors/vectors", tags: ["vectors"] },
  { title: "Vector Basics", href: "/math/grade12/calculus-vectors/vectors/basics", tags: ["components"] },
  { title: "Dot Product Intro", href: "/math/grade12/calculus-vectors/vectors/dot-product-intro", tags: ["dot product"] },
];
