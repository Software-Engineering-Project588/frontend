const dataSet = [
  {
    id: 1,
    country: "Netherlands",
    collegeName: "Delft University of Technology",
    location: "Delft, South Holland",
    description: "Delft University of Technology is a leading technical university known for its high-quality education and research in engineering, technology, and design. It is renowned for its innovation and close ties with industry, particularly in fields such as civil engineering, architecture, and aerospace engineering.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Engineering", fees: "€12,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€11,800/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,700/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "€14,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€13,500/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,000/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Engineering", fees: "€16,500/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€17,000/year" },
        { name: "Ph.D. Civil Engineering", fees: "€15,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€22,000/total" },
        { name: "MBA in Finance", fees: "€23,000/total" },
        { name: "MBA in Marketing", fees: "€21,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€550/month", areaName: "Delft", typeOfRoom: "Single", hostelName: "Hostel Delft" },
      { id: 2, cost: "€400/month", areaName: "Delft", typeOfRoom: "Shared apartment", hostelName: "The Student Hotel Delft" },
      { id: 3, cost: "€650/month", areaName: "Delft", typeOfRoom: "Studio", hostelName: "Hostel de Molshoop" },
      { id: 4, cost: "€700/month", areaName: "Delft", typeOfRoom: "Single", hostelName: "Stayokay Hostel" },
      { id: 5, cost: "€450/month", areaName: "Delft", typeOfRoom: "Shared apartment", hostelName: "King Kong Hostel" }
    ]
  },
  {
    id: 2,
    country: "Netherlands",
    collegeName: "University of Amsterdam",
    location: "Amsterdam, North Holland",
    description: "The University of Amsterdam is one of the largest and most prestigious research universities in Europe, offering a diverse range of programs in the arts, humanities, social sciences, and sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€11,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€12,000/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "€14,500/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€13,800/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,800/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Engineering", fees: "€17,000/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€16,500/year" },
        { name: "Ph.D. Civil Engineering", fees: "€15,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€24,000/total" },
        { name: "MBA in Finance", fees: "€25,000/total" },
        { name: "MBA in Marketing", fees: "€23,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€600/month", areaName: "Amsterdam", typeOfRoom: "Single", hostelName: "ClinkNOORD Hostel" },
      { id: 2, cost: "€450/month", areaName: "Amsterdam", typeOfRoom: "Shared apartment", hostelName: "The Flying Pig Downtown Hostel" },
      { id: 3, cost: "€700/month", areaName: "Amsterdam", typeOfRoom: "Studio", hostelName: "The Bulldog Hostel" },
      { id: 4, cost: "€500/month", areaName: "Amsterdam", typeOfRoom: "Single", hostelName: "Stayokay Amsterdam Oost" },
      { id: 5, cost: "€480/month", areaName: "Amsterdam", typeOfRoom: "Shared apartment", hostelName: "Generator Hostel Amsterdam" }
    ]
  },
  {
    id: 3,
    country: "Netherlands",
    collegeName: "Eindhoven University of Technology",
    location: "Eindhoven, North Brabant",
    description: "Eindhoven University of Technology is a prominent technical university focusing on engineering and technology, recognized for its strong partnerships with leading technology companies.",
    courses: {
      BTech: [
        { name: "B.Tech Electrical Engineering", fees: "€12,200/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€11,500/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,300/year" }
      ],
      MTech: [
        { name: "M.Tech Electrical Engineering", fees: "€14,700/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€13,900/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,400/year" }
      ],
      PhD: [
        { name: "Ph.D. Electrical Engineering", fees: "€16,800/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€17,200/year" },
        { name: "Ph.D. Civil Engineering", fees: "€14,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€21,500/total" },
        { name: "MBA in Finance", fees: "€23,500/total" },
        { name: "MBA in Marketing", fees: "€21,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€560/month", areaName: "Eindhoven", typeOfRoom: "Single", hostelName: "3BE Backpackers Hostel" },
      { id: 2, cost: "€400/month", areaName: "Eindhoven", typeOfRoom: "Shared apartment", hostelName: "Blue Collar Hostel" },
      { id: 3, cost: "€620/month", areaName: "Eindhoven", typeOfRoom: "Studio", hostelName: "Lightotel Eindhoven" },
      { id: 4, cost: "€590/month", areaName: "Eindhoven", typeOfRoom: "Single", hostelName: "Budgethotel de Zwaan" },
      { id: 5, cost: "€450/month", areaName: "Eindhoven", typeOfRoom: "Shared apartment", hostelName: "Hostel Roots" }
    ]
  },
  {
    id: 4,
    country: "Netherlands",
    collegeName: "Radboud University",
    location: "Nijmegen, Gelderland",
    description: "Radboud University is a research university known for its strong academic programs and vibrant campus life, offering a wide range of undergraduate and postgraduate programs.",
    courses: {
      BTech: [
        { name: "B.Tech Information Technology", fees: "€11,300/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€12,200/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,800/year" }
      ],
      MTech: [
        { name: "M.Tech Information Technology", fees: "€13,800/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€14,100/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,300/year" }
      ],
      PhD: [
        { name: "Ph.D. Information Technology", fees: "€16,000/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€17,300/year" },
        { name: "Ph.D. Civil Engineering", fees: "€15,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€22,500/total" },
        { name: "MBA in Finance", fees: "€24,000/total" },
        { name: "MBA in Marketing", fees: "€22,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€540/month", areaName: "Nijmegen", typeOfRoom: "Single", hostelName: "Hostel Barbarossa" },
      { id: 2, cost: "€390/month", areaName: "Nijmegen", typeOfRoom: "Shared apartment", hostelName: "Het Blauwe Uur Hostel" },
      { id: 3, cost: "€610/month", areaName: "Nijmegen", typeOfRoom: "Studio", hostelName: "Bed & Breakfast Hostel" },
      { id: 4, cost: "€570/month", areaName: "Nijmegen", typeOfRoom: "Single", hostelName: "Stayokay Hostel Nijmegen" },
      { id: 5, cost: "€430/month", areaName: "Nijmegen", typeOfRoom: "Shared apartment", hostelName: "Backpackers Hostel Merlijn" }
    ]
  },
  {
    id: 5,
    country: "Netherlands",
    collegeName: "Leiden University",
    location: "Leiden, South Holland",
    description: "Leiden University is the oldest university in the Netherlands, known for its historical significance and academic excellence.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Engineering", fees: "€12,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€11,200/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,600/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "€14,200/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€13,300/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,500/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Engineering", fees: "€17,500/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€18,000/year" },
        { name: "Ph.D. Civil Engineering", fees: "€15,700/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€23,000/total" },
        { name: "MBA in Finance", fees: "€24,000/total" },
        { name: "MBA in Marketing", fees: "€22,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€600/month", areaName: "Leiden", typeOfRoom: "Single", hostelName: "Hostel Leiden" },
      { id: 2, cost: "€450/month", areaName: "Leiden", typeOfRoom: "Shared apartment", hostelName: "Stayokay Hostel Leiden" },
      { id: 3, cost: "€700/month", areaName: "Leiden", typeOfRoom: "Studio", hostelName: "Familie Quellhorst Hostel" },
      { id: 4, cost: "€530/month", areaName: "Leiden", typeOfRoom: "Single", hostelName: "Bed and Breakfast Hostel Leiden" },
      { id: 5, cost: "€480/month", areaName: "Leiden", typeOfRoom: "Shared apartment", hostelName: "Hostel Huys van Leyden" }
    ]
  },
  {
    id: 6,
    country: "Netherlands",
    collegeName: "University of Groningen",
    location: "Groningen, Groningen Province",
    description: "A highly ranked international university with strong research in natural sciences and social sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€12,300/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€11,900/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,700/year" },
        { name: "B.Tech Chemical Engineering", fees: "€11,800/year" },
        { name: "B.Tech Biomedical Engineering", fees: "€12,200/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "€14,200/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€13,600/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,300/year" },
        { name: "M.Tech Environmental Engineering", fees: "€13,100/year" },
        { name: "M.Tech Robotics and AI", fees: "€14,500/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Engineering", fees: "€16,500/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€17,200/year" },
        { name: "Ph.D. Civil Engineering", fees: "€15,200/year" },
        { name: "Ph.D. Chemical Engineering", fees: "€16,300/year" },
        { name: "Ph.D. Biomedical Engineering", fees: "€16,700/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€24,000/total" },
        { name: "MBA in Finance", fees: "€25,500/total" },
        { name: "MBA in Marketing", fees: "€22,000/total" },
        { name: "MBA in International Business", fees: "€26,000/total" },
        { name: "MBA in Technology Management", fees: "€27,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€540/month", areaName: "Groningen", typeOfRoom: "Single", hostelName: "Rebel Rebel Hostel" },
      { id: 2, cost: "€460/month", areaName: "Groningen", typeOfRoom: "Shared apartment", hostelName: "Simplon Hostel" },
      { id: 3, cost: "€630/month", areaName: "Groningen", typeOfRoom: "Studio", hostelName: "Hostel Pension Tivoli" },
      { id: 4, cost: "€550/month", areaName: "Groningen", typeOfRoom: "Single", hostelName: "The Village Hostel Groningen" },
      { id: 5, cost: "€470/month", areaName: "Groningen", typeOfRoom: "Shared apartment", hostelName: "Het Paleis Hostel" }
    ]
  },
  {
    id: 7,
    country: "Netherlands",
    collegeName: "Tilburg University",
    location: "Tilburg, North Brabant",
    description: "Renowned for its social sciences and law programs, Tilburg University is a leading research university.",
    courses: {
      BTech: [
        { name: "B.Tech Data Science", fees: "€11,500/year" },
        { name: "B.Tech Information Technology", fees: "€11,200/year" },
        { name: "B.Tech Business Information Systems", fees: "€11,800/year" },
        { name: "B.Tech Software Engineering", fees: "€11,600/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "€13,500/year" },
        { name: "M.Tech Information Security", fees: "€13,200/year" },
        { name: "M.Tech Artificial Intelligence", fees: "€14,000/year" },
        { name: "M.Tech Software Engineering", fees: "€13,800/year" }
      ],
      PhD: [
        { name: "Ph.D. Data Science", fees: "€16,000/year" },
        { name: "Ph.D. Information Security", fees: "€16,200/year" },
        { name: "Ph.D. Software Engineering", fees: "€16,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€23,800/total" },
        { name: "MBA in Finance", fees: "€24,200/total" },
        { name: "MBA in Digital Business", fees: "€24,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€500/month", areaName: "Wageningen", typeOfRoom: "Single", hostelName: "Wageningen Student Housing" },
      { id: 2, cost: "€450/month", areaName: "Wageningen", typeOfRoom: "Shared apartment", hostelName: "Droevendaal Housing" },
      { id: 3, cost: "€550/month", areaName: "Tilburg", typeOfRoom: "Single", hostelName: "Tilburg Student House" },
      { id: 4, cost: "€480/month", areaName: "Tilburg", typeOfRoom: "Shared apartment", hostelName: "Korte Nieuwstraat Housing" },
      { id: 5, cost: "€600/month", areaName: "Tilburg", typeOfRoom: "Studio", hostelName: "Studio Tilburg" }
    ]
  },
  {
    id: 8,
    country: "Netherlands",
    collegeName: "Utrecht University",
    location: "Utrecht, Utrecht",
    description: "A prestigious university recognized for its comprehensive research and education in a wide range of disciplines.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€12,000/year" },
        { name: "B.Tech Information Science", fees: "€11,500/year" },
        { name: "B.Tech Sustainable Energy", fees: "€12,300/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "€14,000/year" },
        { name: "M.Tech Data Analytics", fees: "€13,800/year" },
        { name: "M.Tech Robotics", fees: "€14,500/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Science", fees: "€16,800/year" },
        { name: "Ph.D. Data Analytics", fees: "€16,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€25,000/total" },
        { name: "MBA in Supply Chain Management", fees: "€25,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€600/month", areaName: "Utrecht", typeOfRoom: "Single", hostelName: "Utrecht Student Housing" },
      { id: 2, cost: "€520/month", areaName: "Utrecht", typeOfRoom: "Shared apartment", hostelName: "Stadsbrouwerij Utrecht" },
      { id: 3, cost: "€700/month", areaName: "Utrecht", typeOfRoom: "Studio", hostelName: "The Student Hotel Utrecht" }
    ]
  },
  {
    id: 9,
    country: "Netherlands",
    collegeName: "Fontys University of Applied Sciences",
    location: "Eindhoven, North Brabant",
    description: "One of the largest universities of applied sciences in the Netherlands, offering a wide range of programs focusing on practical and theoretical knowledge.",
    courses: {
      BTech: [
        { name: "B.Tech Electrical and Electronic Engineering", fees: "€11,000/year" },
        { name: "B.Tech Industrial Engineering", fees: "€10,800/year" },
        { name: "B.Tech Information Technology", fees: "€11,200/year" }
      ],
      MTech: [
        { name: "M.Tech International Business", fees: "€13,200/year" },
        { name: "M.Tech Communication Engineering", fees: "€13,800/year" },
        { name: "M.Tech Software Engineering", fees: "€14,000/year" }
      ],
      PhD: [
        { name: "Ph.D. Engineering", fees: "€15,500/year" },
        { name: "Ph.D. Business Management", fees: "€15,800/year" }
      ],
      MBA: [
        { name: "MBA in International Business", fees: "€24,500/total" },
        { name: "MBA in Innovation Management", fees: "€24,800/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€530/month", areaName: "Eindhoven", typeOfRoom: "Single", hostelName: "Eindhoven Student House" },
      { id: 2, cost: "€480/month", areaName: "Eindhoven", typeOfRoom: "Shared apartment", hostelName: "Kazerne Eindhoven" },
      { id: 3, cost: "€600/month", areaName: "Eindhoven", typeOfRoom: "Studio", hostelName: "The Student Hotel Eindhoven" }
    ]
  },
  {
    id: 10,
    country: "Netherlands",
    collegeName: "Hanze University of Applied Sciences",
    location: "Groningen, Groningen",
    description: "A prominent university of applied sciences known for its strong focus on practical education and internationalization.",
    courses: {
      BTech: [
        { name: "B.Tech International & European Law", fees: "€10,500/year" },
        { name: "B.Tech Engineering", fees: "€10,800/year" },
        { name: "B.Tech Creative Media and Game Technologies", fees: "€11,000/year" }
      ],
      MTech: [
        { name: "M.Tech Digital Business", fees: "€13,000/year" },
        { name: "M.Tech Applied Physics", fees: "€12,800/year" },
        { name: "M.Tech International Communication", fees: "€13,500/year" }
      ],
      PhD: [
        { name: "Ph.D. Applied Sciences", fees: "€15,000/year" },
        { name: "Ph.D. Creative Technologies", fees: "€15,300/year" }
      ],
      MBA: [
        { name: "MBA in Business Development", fees: "€23,000/total" },
        { name: "MBA in Marketing Management", fees: "€22,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€550/month", areaName: "Groningen", typeOfRoom: "Single", hostelName: "Hanze University Housing" },
      { id: 2, cost: "€500/month", areaName: "Groningen", typeOfRoom: "Shared apartment", hostelName: "Yugo Groningen" },
      { id: 3, cost: "€620/month", areaName: "Groningen", typeOfRoom: "Studio", hostelName: "The Student Hotel Groningen" }
    ]
  },
  {
    id: 11,
    country: "Germany",
    collegeName: "Technical University of Munich",
    location: "Munich, Bavaria",
    description: "One of Europe’s top universities, known for excellence in engineering, computer science, and life sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€9,500/year" },
        { name: "B.Tech Electrical Engineering", fees: "€8,900/year" },
        { name: "B.Tech Aerospace Engineering", fees: "€10,200/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "€12,800/year" },
        { name: "M.Tech Electrical Engineering", fees: "€12,400/year" },
        { name: "M.Tech Aerospace Engineering", fees: "€13,500/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Engineering", fees: "€14,800/year" },
        { name: "Ph.D. Electrical Engineering", fees: "€15,200/year" },
        { name: "Ph.D. Aerospace Engineering", fees: "€16,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€21,000/total" },
        { name: "MBA in Finance", fees: "€23,500/total" },
        { name: "MBA in Entrepreneurship", fees: "€22,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€600/month", areaName: "Munich", typeOfRoom: "Single", hostelName: "Studentenstadt Freimann" },
      { id: 2, cost: "€550/month", areaName: "Munich", typeOfRoom: "Shared apartment", hostelName: "Olympisches Dorf" },
      { id: 3, cost: "€700/month", areaName: "Munich", typeOfRoom: "Studio", hostelName: "The Stay Club Munich" },
      { id: 4, cost: "€580/month", areaName: "Munich", typeOfRoom: "Single", hostelName: "Munich Youth Hostel" },
      { id: 5, cost: "€530/month", areaName: "Munich", typeOfRoom: "Shared apartment", hostelName: "The 4You Hostel" }
    ]
  },
  {
    id: 12,
    country: "Germany",
    collegeName: "RWTH Aachen University",
    location: "Aachen, North Rhine-Westphalia",
    description: "A leading technical university known for its strong emphasis on engineering and natural sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Mechanical Engineering", fees: "€10,500/year" },
        { name: "B.Tech Computer Science", fees: "€9,800/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "€12,500/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€13,000/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,000/year" }
      ],
      PhD: [
        { name: "Ph.D. Mechanical Engineering", fees: "€14,500/year" },
        { name: "Ph.D. Computer Science", fees: "€15,000/year" },
        { name: "Ph.D. Civil Engineering", fees: "€14,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€22,000/total" },
        { name: "MBA in Engineering Management", fees: "€23,500/total" },
        { name: "MBA in Innovation", fees: "€21,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€550/month", areaName: "Aachen", typeOfRoom: "Single", hostelName: "Aachen Youth Hostel" },
      { id: 2, cost: "€490/month", areaName: "Aachen", typeOfRoom: "Shared apartment", hostelName: "Eurac Research Hostel" },
      { id: 3, cost: "€600/month", areaName: "Aachen", typeOfRoom: "Studio", hostelName: "Hostel Aachen" },
      { id: 4, cost: "€530/month", areaName: "Aachen", typeOfRoom: "Single", hostelName: "B&B Hotel Aachen" },
      { id: 5, cost: "€480/month", areaName: "Aachen", typeOfRoom: "Shared apartment", hostelName: "Studentenwerk Aachen" }
    ]
  },
  {
    id: 13,
    country: "Germany",
    collegeName: "Heidelberg University",
    location: "Heidelberg, Baden-Württemberg",
    description: "Germany's oldest university, known for its strong research output and a wide range of courses.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€11,000/year" },
        { name: "B.Tech Biomedicine", fees: "€10,500/year" },
        { name: "B.Tech Environmental Engineering", fees: "€10,800/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "€13,000/year" },
        { name: "M.Tech Data Science", fees: "€12,500/year" },
        { name: "M.Tech Environmental Engineering", fees: "€13,200/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Science", fees: "€15,500/year" },
        { name: "Ph.D. Biomedicine", fees: "€16,000/year" },
        { name: "Ph.D. Environmental Engineering", fees: "€15,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€20,000/total" },
        { name: "MBA in Health Management", fees: "€22,500/total" },
        { name: "MBA in International Business", fees: "€21,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€580/month", areaName: "Heidelberg", typeOfRoom: "Single", hostelName: "Studentenwohnheim Heidelberg" },
      { id: 2, cost: "€520/month", areaName: "Heidelberg", typeOfRoom: "Shared apartment", hostelName: "Heidelberg Youth Hostel" },
      { id: 3, cost: "€650/month", areaName: "Heidelberg", typeOfRoom: "Studio", hostelName: "Hostel Heidelberg" },
      { id: 4, cost: "€600/month", areaName: "Heidelberg", typeOfRoom: "Single", hostelName: "B&B Hotel Heidelberg" },
      { id: 5, cost: "€550/month", areaName: "Heidelberg", typeOfRoom: "Shared apartment", hostelName: "Heidelberg Studentenwerk" }
    ]
  },
  {
    id: 14,
    country: "Germany",
    collegeName: "University of Freiburg",
    location: "Freiburg, Baden-Württemberg",
    description: "A comprehensive university known for its research in the natural and social sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€10,200/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€9,800/year" },
        { name: "B.Tech Chemical Engineering", fees: "€10,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "€12,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€12,800/year" },
        { name: "M.Tech Chemical Engineering", fees: "€12,500/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Science", fees: "€14,200/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€15,000/year" },
        { name: "Ph.D. Chemical Engineering", fees: "€14,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€19,000/total" },
        { name: "MBA in Sustainability Management", fees: "€21,000/total" },
        { name: "MBA in Innovation Management", fees: "€20,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€570/month", areaName: "Freiburg", typeOfRoom: "Single", hostelName: "Freiburg Youth Hostel" },
      { id: 2, cost: "€510/month", areaName: "Freiburg", typeOfRoom: "Shared apartment", hostelName: "Hostel Freiburg" },
      { id: 3, cost: "€640/month", areaName: "Freiburg", typeOfRoom: "Studio", hostelName: "The Green Hostel" },
      { id: 4, cost: "€590/month", areaName: "Freiburg", typeOfRoom: "Single", hostelName: "Studentenwerk Freiburg" },
      { id: 5, cost: "€530/month", areaName: "Freiburg", typeOfRoom: "Shared apartment", hostelName: "Freiburg Student Housing" }
    ]
  },
  {
    id: 15,
    country: "Germany",
    collegeName: "University of Mannheim",
    location: "Mannheim, Baden-Württemberg",
    description: "A top-ranked university known for its social sciences and business administration programs.",
    courses: {
      BTech: [
        { name: "B.Tech Business Informatics", fees: "€11,500/year" },
        { name: "B.Tech Data Science", fees: "€10,800/year" },
        { name: "B.Tech Information Technology", fees: "€11,000/year" }
      ],
      MTech: [
        { name: "M.Tech Business Informatics", fees: "€13,500/year" },
        { name: "M.Tech Data Science", fees: "€14,000/year" },
        { name: "M.Tech Information Technology", fees: "€13,800/year" }
      ],
      PhD: [
        { name: "Ph.D. Business Informatics", fees: "€15,500/year" },
        { name: "Ph.D. Data Science", fees: "€16,000/year" },
        { name: "Ph.D. Information Technology", fees: "€15,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€23,000/total" },
        { name: "MBA in Digital Transformation", fees: "€24,500/total" },
        { name: "MBA in International Business", fees: "€22,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€550/month", areaName: "Mannheim", typeOfRoom: "Single", hostelName: "Mannheim Student Residence" },
      { id: 2, cost: "€500/month", areaName: "Mannheim", typeOfRoom: "Shared apartment", hostelName: "Mannheim Youth Hostel" },
      { id: 3, cost: "€620/month", areaName: "Mannheim", typeOfRoom: "Studio", hostelName: "The Student's Lodge" },
      { id: 4, cost: "€580/month", areaName: "Mannheim", typeOfRoom: "Single", hostelName: "B&B Hotel Mannheim" },
      { id: 5, cost: "€520/month", areaName: "Mannheim", typeOfRoom: "Shared apartment", hostelName: "Studentenwerk Mannheim" }
    ]
  },
  {
    id: 16,
    country: "Germany",
    collegeName: "Technical University of Berlin",
    location: "Berlin, Germany",
    description: "A leading technical university known for engineering, technology, and natural sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€10,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€9,500/year" },
        { name: "B.Tech Electrical Engineering", fees: "€10,200/year" }
      ],
      MTech: [
        { name: "M.Tech Software Engineering", fees: "€12,500/year" },
        { name: "M.Tech Robotics", fees: "€13,200/year" },
        { name: "M.Tech Electrical Engineering", fees: "€12,800/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Science", fees: "€14,000/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€14,500/year" },
        { name: "Ph.D. Electrical Engineering", fees: "€15,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€25,000/total" },
        { name: "MBA in Technology Management", fees: "€26,500/total" },
        { name: "MBA in Entrepreneurship", fees: "€24,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€650/month", areaName: "Berlin", typeOfRoom: "Single", hostelName: "Berlin Student Hostel" },
      { id: 2, cost: "€590/month", areaName: "Berlin", typeOfRoom: "Shared apartment", hostelName: "The Student House" },
      { id: 3, cost: "€700/month", areaName: "Berlin", typeOfRoom: "Studio", hostelName: "The Stay Inn" },
      { id: 4, cost: "€620/month", areaName: "Berlin", typeOfRoom: "Single", hostelName: "B&B Hotel Berlin" },
      { id: 5, cost: "€550/month", areaName: "Berlin", typeOfRoom: "Shared apartment", hostelName: "Berlin Student Services" }
    ]
  },
  {
    id: 17,
    country: "Germany",
    collegeName: "University of Stuttgart",
    location: "Stuttgart, Baden-Württemberg",
    description: "Known for its engineering and technology programs, with a strong focus on research and innovation.",
    courses: {
      BTech: [
        { name: "B.Tech Mechanical Engineering", fees: "€10,500/year" },
        { name: "B.Tech Civil Engineering", fees: "€10,200/year" },
        { name: "B.Tech Electrical Engineering", fees: "€10,800/year" }
      ],
      MTech: [
        { name: "M.Tech Mechanical Engineering", fees: "€13,000/year" },
        { name: "M.Tech Civil Engineering", fees: "€12,800/year" },
        { name: "M.Tech Electrical Engineering", fees: "€13,200/year" }
      ],
      PhD: [
        { name: "Ph.D. Mechanical Engineering", fees: "€15,500/year" },
        { name: "Ph.D. Civil Engineering", fees: "€14,800/year" },
        { name: "Ph.D. Electrical Engineering", fees: "€15,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€22,000/total" },
        { name: "MBA in Engineering Management", fees: "€23,500/total" },
        { name: "MBA in Sustainable Management", fees: "€21,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€600/month", areaName: "Stuttgart", typeOfRoom: "Single", hostelName: "Stuttgart Student Hostel" },
      { id: 2, cost: "€550/month", areaName: "Stuttgart", typeOfRoom: "Shared apartment", hostelName: "Hostel Stuttgart" },
      { id: 3, cost: "€670/month", areaName: "Stuttgart", typeOfRoom: "Studio", hostelName: "The Student's Home" },
      { id: 4, cost: "€620/month", areaName: "Stuttgart", typeOfRoom: "Single", hostelName: "B&B Hotel Stuttgart" },
      { id: 5, cost: "€570/month", areaName: "Stuttgart", typeOfRoom: "Shared apartment", hostelName: "Studentenwerk Stuttgart" }
    ]
  },
  {
    id: 18,
    country: "Germany",
    collegeName: "Ludwig Maximilian University of Munich",
    location: "Munich, Bavaria",
    description: "One of Germany's oldest and most prestigious universities, renowned for its strong research programs across a variety of fields.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€11,200/year" },
        { name: "B.Tech Biotechnology", fees: "€10,800/year" },
        { name: "B.Tech Electrical Engineering", fees: "€11,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "€14,000/year" },
        { name: "M.Tech Biotechnology", fees: "€13,500/year" },
        { name: "M.Tech Electrical Engineering", fees: "€14,300/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Science", fees: "€15,500/year" },
        { name: "Ph.D. Biotechnology", fees: "€16,000/year" },
        { name: "Ph.D. Electrical Engineering", fees: "€15,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€26,000/total" },
        { name: "MBA in Digital Innovation", fees: "€27,500/total" },
        { name: "MBA in Global Business", fees: "€25,500/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€650/month", areaName: "Munich", typeOfRoom: "Single", hostelName: "Munich Student Hostel" },
      { id: 2, cost: "€600/month", areaName: "Munich", typeOfRoom: "Shared apartment", hostelName: "The Student House Munich" },
      { id: 3, cost: "€700/month", areaName: "Munich", typeOfRoom: "Studio", hostelName: "The Stay Inn" },
      { id: 4, cost: "€620/month", areaName: "Munich", typeOfRoom: "Single", hostelName: "B&B Hotel Munich" },
      { id: 5, cost: "€570/month", areaName: "Munich", typeOfRoom: "Shared apartment", hostelName: "Studentenwerk München" }
    ]
  },
  {
    id: 19,
    country: "Germany",
    collegeName: "University of Hamburg",
    location: "Hamburg, Germany",
    description: "A comprehensive university with a strong emphasis on research, particularly in the humanities and social sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€11,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "€10,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "€11,200/year" }
      ],
      MTech: [
        { name: "M.Tech Software Engineering", fees: "€13,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "€12,500/year" },
        { name: "M.Tech Mechanical Engineering", fees: "€13,200/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Science", fees: "€14,000/year" },
        { name: "Ph.D. Environmental Engineering", fees: "€14,500/year" },
        { name: "Ph.D. Mechanical Engineering", fees: "€15,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€24,000/total" },
        { name: "MBA in Sustainability Management", fees: "€25,500/total" },
        { name: "MBA in International Business", fees: "€23,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€550/month", areaName: "Hamburg", typeOfRoom: "Single", hostelName: "Hamburg Student Hostel" },
      { id: 2, cost: "€480/month", areaName: "Hamburg", typeOfRoom: "Shared apartment", hostelName: "Hostel Hamburg" },
      { id: 3, cost: "€600/month", areaName: "Hamburg", typeOfRoom: "Studio", hostelName: "The Student Home" },
      { id: 4, cost: "€520/month", areaName: "Hamburg", typeOfRoom: "Single", hostelName: "B&B Hotel Hamburg" },
      { id: 5, cost: "€470/month", areaName: "Hamburg", typeOfRoom: "Shared apartment", hostelName: "Studentenwerk Hamburg" }
    ]
  },
  {
    id: 20,
    country: "Germany",
    collegeName: "University of Tübingen",
    location: "Tübingen, Baden-Württemberg",
    description: "A research university known for its programs in humanities, social sciences, and natural sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "€11,200/year" },
        { name: "B.Tech Molecular Biotechnology", fees: "€10,800/year" },
        { name: "B.Tech Physics", fees: "€10,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "€12,700/year" },
        { name: "M.Tech Molecular Biotechnology", fees: "€13,200/year" },
        { name: "M.Tech Physics", fees: "€12,000/year" }
      ],
      PhD: [
        { name: "Ph.D. Computer Science", fees: "€14,200/year" },
        { name: "Ph.D. Molecular Biotechnology", fees: "€14,800/year" },
        { name: "Ph.D. Physics", fees: "€15,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "€22,500/total" },
        { name: "MBA in Healthcare Management", fees: "€24,000/total" },
        { name: "MBA in Data Analytics", fees: "€23,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "€540/month", areaName: "Tübingen", typeOfRoom: "Single", hostelName: "Tübingen Student Residence" },
      { id: 2, cost: "€490/month", areaName: "Tübingen", typeOfRoom: "Shared apartment", hostelName: "Tübingen Youth Hostel" },
      { id: 3, cost: "€620/month", areaName: "Tübingen", typeOfRoom: "Studio", hostelName: "The Student's Home" },
      { id: 4, cost: "€580/month", areaName: "Tübingen", typeOfRoom: "Single", hostelName: "B&B Hotel Tübingen" },
      { id: 5, cost: "€520/month", areaName: "Tübingen", typeOfRoom: "Shared apartment", hostelName: "Studentenwerk Tübingen" }
    ]
  },
  {
    id: 21,
    country: "India",
    collegeName: "Indian Institute of Technology Bombay",
    location: "Mumbai, Maharashtra",
    description: "One of the premier engineering institutes in India, IIT Bombay is known for its cutting-edge research and education in engineering and technology.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹2,00,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "₹2,50,000/year" },
        { name: "M.Tech Structural Engineering", fees: "₹2,50,000/year" },
        { name: "M.Tech Thermal Engineering", fees: "₹2,50,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "₹3,00,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "₹3,00,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "₹3,00,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹20,00,000/total" },
        { name: "MBA in Finance", fees: "₹22,00,000/total" },
        { name: "MBA in Operations", fees: "₹21,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹8,000/month", areaName: "Mumbai", typeOfRoom: "Single", hostelName: "Gandhi Bhavan" },
      { id: 2, cost: "₹5,000/month", areaName: "Mumbai", typeOfRoom: "Shared", hostelName: "Nehru Bhavan" },
      { id: 3, cost: "₹6,000/month", areaName: "Mumbai", typeOfRoom: "Studio", hostelName: "Tata Hall" },
      { id: 4, cost: "₹7,000/month", areaName: "Mumbai", typeOfRoom: "Single", hostelName: "Saraswati Bhavan" },
      { id: 5, cost: "₹4,500/month", areaName: "Mumbai", typeOfRoom: "Shared", hostelName: "Kendriya Vidyalaya Hostel" }
    ]
  },
  {
    id: 22,
    country: "India",
    collegeName: "Indian Institute of Science",
    location: "Bangalore, Karnataka",
    description: "A premier institute for advanced scientific and technological research and education, IISc is known for its rigorous academic programs.",
    courses: {
      BTech: [
        { name: "B.Tech in Engineering Science", fees: "₹1,50,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Computer Science", fees: "₹2,00,000/year" },
        { name: "M.Tech in Aerospace Engineering", fees: "₹2,00,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "₹3,00,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "₹3,00,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹18,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹6,500/month", areaName: "Bangalore", typeOfRoom: "Single", hostelName: "Hoysala Hostel" },
      { id: 2, cost: "₹4,500/month", areaName: "Bangalore", typeOfRoom: "Shared", hostelName: "Vikram Sarabhai Hostel" },
      { id: 3, cost: "₹7,000/month", areaName: "Bangalore", typeOfRoom: "Studio", hostelName: "Dharwad Hostel" },
      { id: 4, cost: "₹5,500/month", areaName: "Bangalore", typeOfRoom: "Single", hostelName: "Mysore Hostel" },
      { id: 5, cost: "₹4,000/month", areaName: "Bangalore", typeOfRoom: "Shared", hostelName: "Karnataka Hostel" }
    ]
  },
  {
    id: 23,
    country: "India",
    collegeName: "National Institute of Technology, Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    description: "NIT Trichy is one of the leading technical institutes in India, offering a wide range of engineering programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹1,60,000/year" },
        { name: "B.Tech Electronics and Communication Engineering", fees: "₹1,60,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹1,60,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Computer Science", fees: "₹2,00,000/year" },
        { name: "M.Tech in Structural Engineering", fees: "₹2,00,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "₹2,50,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "₹2,50,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹12,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹6,000/month", areaName: "Trichy", typeOfRoom: "Single", hostelName: "Bharathiar Hostel" },
      { id: 2, cost: "₹4,000/month", areaName: "Trichy", typeOfRoom: "Shared", hostelName: "Shivaji Hostel" },
      { id: 3, cost: "₹5,500/month", areaName: "Trichy", typeOfRoom: "Studio", hostelName: "Dr. B.R. Ambedkar Hostel" },
      { id: 4, cost: "₹5,000/month", areaName: "Trichy", typeOfRoom: "Single", hostelName: "Dr. Sarvepalli Radhakrishnan Hostel" },
      { id: 5, cost: "₹3,500/month", areaName: "Trichy", typeOfRoom: "Shared", hostelName: "Vivekananda Hostel" }
    ]
  },
  {
    id: 24,
    country: "India",
    collegeName: "Indian Institute of Technology Delhi",
    location: "New Delhi",
    description: "IIT Delhi is a leading institution for engineering and technology, known for its high academic standards and research output.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Civil Engineering", fees: "₹2,00,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Computer Science", fees: "₹2,50,000/year" },
        { name: "M.Tech in Structural Engineering", fees: "₹2,50,000/year" },
        { name: "M.Tech in Data Science", fees: "₹2,50,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Electrical Engineering", fees: "₹3,00,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "₹3,00,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹18,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹7,500/month", areaName: "New Delhi", typeOfRoom: "Single", hostelName: "Saraswati Hostel" },
      { id: 2, cost: "₹5,000/month", areaName: "New Delhi", typeOfRoom: "Shared", hostelName: "Ganga Hostel" },
      { id: 3, cost: "₹6,000/month", areaName: "New Delhi", typeOfRoom: "Studio", hostelName: "Brahmaputra Hostel" }
    ]
  },
  {
    id: 25,
    country: "India",
    collegeName: "Indian Institute of Technology Madras",
    location: "Chennai, Tamil Nadu",
    description: "IIT Madras is known for its cutting-edge research and high-quality education in engineering and technology.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "₹2,00,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Software Engineering", fees: "₹2,50,000/year" },
        { name: "M.Tech in Robotics", fees: "₹2,50,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Chemical Engineering", fees: "₹3,00,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹20,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹6,500/month", areaName: "Chennai", typeOfRoom: "Single", hostelName: "Vikram Sarabhai Hostel" },
      { id: 2, cost: "₹4,500/month", areaName: "Chennai", typeOfRoom: "Shared", hostelName: "Sangam Hostel" },
      { id: 3, cost: "₹5,500/month", areaName: "Chennai", typeOfRoom: "Studio", hostelName: "Shivaji Hostel" }
    ]
  },
  {
    id: 26,
    country: "India",
    collegeName: "National Institute of Technology Surathkal",
    location: "Mangaluru, Karnataka",
    description: "NIT Surathkal is a leading technical institute in India, recognized for its academic excellence and research contributions.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹1,70,000/year" },
        { name: "B.Tech Electronics and Communication Engineering", fees: "₹1,70,000/year" },
        { name: "B.Tech Civil Engineering", fees: "₹1,70,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Computer Science", fees: "₹2,20,000/year" },
        { name: "M.Tech in Structural Engineering", fees: "₹2,20,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Civil Engineering", fees: "₹2,50,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹12,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹5,000/month", areaName: "Mangaluru", typeOfRoom: "Single", hostelName: "Brahmaputra Hostel" },
      { id: 2, cost: "₹3,500/month", areaName: "Mangaluru", typeOfRoom: "Shared", hostelName: "Ganga Hostel" },
      { id: 3, cost: "₹4,500/month", areaName: "Mangaluru", typeOfRoom: "Studio", hostelName: "Yamuna Hostel" }
    ]
  },
  {
    id: 27,
    country: "India",
    collegeName: "Indian Institute of Technology Kharagpur",
    location: "Kharagpur, West Bengal",
    description: "IIT Kharagpur is renowned for its engineering programs and comprehensive research facilities.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹1,80,000/year" },
        { name: "B.Tech Civil Engineering", fees: "₹1,80,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹1,80,000/year" },
        { name: "B.Tech Mining Engineering", fees: "₹1,80,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Mechanical Engineering", fees: "₹2,40,000/year" },
        { name: "M.Tech in Civil Engineering", fees: "₹2,40,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "₹2,80,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹15,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹4,500/month", areaName: "Kharagpur", typeOfRoom: "Single", hostelName: "Panchavati Hostel" },
      { id: 2, cost: "₹3,000/month", areaName: "Kharagpur", typeOfRoom: "Shared", hostelName: "Brahmaputra Hostel" },
      { id: 3, cost: "₹3,500/month", areaName: "Kharagpur", typeOfRoom: "Studio", hostelName: "Ganga Hostel" }
    ]
  },
  {
    id: 28,
    country: "India",
    collegeName: "Birla Institute of Technology and Science, Pilani",
    location: "Pilani, Rajasthan",
    description: "BITS Pilani is a top private engineering institute known for its rigorous academic programs and innovative research.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "₹2,00,000/year" },
        { name: "B.Tech Electronics and Communication", fees: "₹2,00,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹2,00,000/year" },
        { name: "B.Tech Civil Engineering", fees: "₹2,00,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Data Science", fees: "₹2,50,000/year" },
        { name: "M.Tech in Software Engineering", fees: "₹2,50,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "₹3,00,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹16,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹5,500/month", areaName: "Pilani", typeOfRoom: "Single", hostelName: "Azad Hostel" },
      { id: 2, cost: "₹4,000/month", areaName: "Pilani", typeOfRoom: "Shared", hostelName: "Gandhi Hostel" },
      { id: 3, cost: "₹5,000/month", areaName: "Pilani", typeOfRoom: "Studio", hostelName: "Rajasthan Hostel" }
    ]
  },
  {
    id: 29,
    country: "India",
    collegeName: "National Institute of Technology Tiruchirappalli",
    location: "Tiruchirappalli, Tamil Nadu",
    description: "NIT Trichy is recognized for its academic excellence and comprehensive research programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹1,80,000/year" },
        { name: "B.Tech Electronics and Communication", fees: "₹1,80,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹1,80,000/year" }
      ],
      MTech: [
        { name: "M.Tech in VLSI Design", fees: "₹2,20,000/year" },
        { name: "M.Tech in Software Engineering", fees: "₹2,20,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Electrical Engineering", fees: "₹2,50,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹10,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹5,000/month", areaName: "Tiruchirappalli", typeOfRoom: "Single", hostelName: "Narmada Hostel" },
      { id: 2, cost: "₹3,500/month", areaName: "Tiruchirappalli", typeOfRoom: "Shared", hostelName: "Kaveri Hostel" },
      { id: 3, cost: "₹4,500/month", areaName: "Tiruchirappalli", typeOfRoom: "Studio", hostelName: "Godavari Hostel" }
    ]
  },
  {
    id: 30,
    country: "India",
    collegeName: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu",
    description: "VIT is a private university known for its high-quality engineering programs and global exposure.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science and Engineering", fees: "₹1,75,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₹1,75,000/year" },
        { name: "B.Tech Electrical and Electronics Engineering", fees: "₹1,75,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Computer Science", fees: "₹2,00,000/year" },
        { name: "M.Tech in VLSI Design", fees: "₹2,00,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Mechanical Engineering", fees: "₹2,50,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₹9,00,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₹6,000/month", areaName: "Vellore", typeOfRoom: "Single", hostelName: "Gandhi Hostel" },
      { id: 2, cost: "₹4,500/month", areaName: "Vellore", typeOfRoom: "Shared", hostelName: "Krishna Hostel" },
      { id: 3, cost: "₹5,000/month", areaName: "Vellore", typeOfRoom: "Studio", hostelName: "Narmada Hostel" }
    ]
  },
  {
    id: 31,
    country: "Russia",
    collegeName: "Lomonosov Moscow State University",
    location: "Moscow, Moscow Oblast",
    description: "One of the top universities in Russia, known for academic excellence in various fields.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "₽450,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "₽420,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "₽500,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "₽470,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Artificial Intelligence", fees: "₽600,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₽1,200,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽15,000/month", areaName: "Moscow", typeOfRoom: "Single", hostelName: "Moscow Pearl Hostel" },
      { id: 2, cost: "₽12,000/month", areaName: "Moscow", typeOfRoom: "Shared", hostelName: "Red Square Dormitory" }
    ]
  },
  {
    id: 32,
    country: "Russia",
    collegeName: "Saint Petersburg State University",
    location: "Saint Petersburg, Leningrad Oblast",
    description: "A prestigious university with a focus on humanities and sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Electrical Engineering", fees: "₽430,000/year" },
        { name: "B.Tech Civil Engineering", fees: "₽410,000/year" }
      ],
      MTech: [
        { name: "M.Tech Structural Engineering", fees: "₽480,000/year" },
        { name: "M.Tech Electrical Engineering", fees: "₽470,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Electrical Engineering", fees: "₽550,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "₽1,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽13,000/month", areaName: "Saint Petersburg", typeOfRoom: "Single", hostelName: "Neva River Hostel" },
      { id: 2, cost: "₽11,500/month", areaName: "Saint Petersburg", typeOfRoom: "Shared", hostelName: "Peter the Great Dormitory" }
    ]
  },  
  {
    id: 33,
    country: "Russia",
    collegeName: "Bauman Moscow State Technical University",
    location: "Moscow, Moscow Oblast",
    description: "A leading technical university in Russia specializing in engineering and applied sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Aerospace Engineering", fees: "₽460,000/year" },
        { name: "B.Tech Robotics", fees: "₽450,000/year" }
      ],
      MTech: [
        { name: "M.Tech Aerospace Engineering", fees: "₽510,000/year" },
        { name: "M.Tech Robotics", fees: "₽500,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Robotics", fees: "₽600,000/year" }
      ],
      MBA: [
        { name: "MBA in Innovation Management", fees: "₽1,300,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽14,000/month", areaName: "Moscow", typeOfRoom: "Studio", hostelName: "Sputnik Residence" },
      { id: 2, cost: "₽13,000/month", areaName: "Moscow", typeOfRoom: "Shared", hostelName: "Technograd Hostel" }
    ]
  },
  {
    id: 34,
    country: "Russia",
    collegeName: "National Research University Higher School of Economics",
    location: "Moscow, Moscow Oblast",
    description: "HSE is known for its strength in economics, social sciences, and engineering.",
    courses: {
      BTech: [
        { name: "B.Tech Data Science", fees: "₽400,000/year" },
        { name: "B.Tech Software Engineering", fees: "₽390,000/year" }
      ],
      MTech: [
        { name: "M.Tech Data Analytics", fees: "₽470,000/year" },
        { name: "M.Tech in AI and Robotics", fees: "₽480,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Data Science", fees: "₽570,000/year" }
      ],
      MBA: [
        { name: "MBA in Finance", fees: "₽1,150,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽14,500/month", areaName: "Moscow", typeOfRoom: "Single", hostelName: "Economic Elite Dorm" },
      { id: 2, cost: "₽12,500/month", areaName: "Moscow", typeOfRoom: "Shared", hostelName: "HSE Premier Hostel" }
    ]
  },
  {
    id: 35,
    country: "Russia",
    collegeName: "Novosibirsk State University",
    location: "Novosibirsk, Siberia",
    description: "Located in the heart of Siberia, NSU excels in scientific research and technology.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "₽380,000/year" },
        { name: "B.Tech Biotechnology", fees: "₽400,000/year" }
      ],
      MTech: [
        { name: "M.Tech Biotechnology", fees: "₽450,000/year" },
        { name: "M.Tech in Nanotechnology", fees: "₽460,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Biotechnology", fees: "₽550,000/year" }
      ],
      MBA: [
        { name: "MBA in Technology Management", fees: "₽1,100,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽10,000/month", areaName: "Novosibirsk", typeOfRoom: "Shared", hostelName: "Siberia Tech Hostel" },
      { id: 2, cost: "₽12,000/month", areaName: "Novosibirsk", typeOfRoom: "Single", hostelName: "Arctic Dream Dorm" }
    ]
  },
  {
    id: 36,
    country: "Russia",
    collegeName: "Tomsk Polytechnic University",
    location: "Tomsk, Siberia",
    description: "Tomsk Polytechnic is known for its strong engineering programs, particularly in nuclear engineering.",
    courses: {
      BTech: [
        { name: "B.Tech Nuclear Engineering", fees: "₽440,000/year" },
        { name: "B.Tech Materials Science", fees: "₽420,000/year" }
      ],
      MTech: [
        { name: "M.Tech Nuclear Technology", fees: "₽490,000/year" },
        { name: "M.Tech in Materials Engineering", fees: "₽480,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Nuclear Engineering", fees: "₽600,000/year" }
      ],
      MBA: [
        { name: "MBA in Industrial Management", fees: "₽1,250,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽11,500/month", areaName: "Tomsk", typeOfRoom: "Studio", hostelName: "Proton Residency" },
      { id: 2, cost: "₽10,000/month", areaName: "Tomsk", typeOfRoom: "Shared", hostelName: "Electron Dorm" }
    ]
  },
  {
    id: 37,
    country: "Russia",
    collegeName: "Far Eastern Federal University",
    location: "Vladivostok, Primorsky Krai",
    description: "A prominent university known for its research and education in the Asia-Pacific region.",
    courses: {
      BTech: [
        { name: "B.Tech Marine Engineering", fees: "₽370,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "₽360,000/year" }
      ],
      MTech: [
        { name: "M.Tech Marine Technology", fees: "₽420,000/year" },
        { name: "M.Tech Environmental Science", fees: "₽410,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Marine Biology", fees: "₽500,000/year" }
      ],
      MBA: [
        { name: "MBA in Global Business", fees: "₽950,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽9,500/month", areaName: "Vladivostok", typeOfRoom: "Single", hostelName: "Pacific Ocean Hostel" },
      { id: 2, cost: "₽8,500/month", areaName: "Vladivostok", typeOfRoom: "Shared", hostelName: "Island Breeze Dormitory" }
    ]
  },
  {
    id: 38,
    country: "Russia",
    collegeName: "Siberian Federal University",
    location: "Krasnoyarsk, Siberia",
    description: "A major educational and scientific center in Siberia, focusing on engineering and natural sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Information Technology", fees: "₽400,000/year" },
        { name: "B.Tech Geology", fees: "₽390,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "₽450,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "₽440,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Geology", fees: "₽550,000/year" }
      ],
      MBA: [
        { name: "MBA in Project Management", fees: "₽1,050,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽10,500/month", areaName: "Krasnoyarsk", typeOfRoom: "Studio", hostelName: "Siberian Dream Hostel" },
      { id: 2, cost: "₽9,000/month", areaName: "Krasnoyarsk", typeOfRoom: "Shared", hostelName: "Krasnoyarsk Comfort Dorm" }
    ]
  },
  {
    id: 39,
    country: "Russia",
    collegeName: "Ural Federal University",
    location: "Yekaterinburg, Sverdlovsk Oblast",
    description: "A comprehensive university with a strong focus on engineering and technology.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Systems", fees: "₽410,000/year" },
        { name: "B.Tech Applied Mechanics", fees: "₽400,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "₽480,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "₽470,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Mechanical Engineering", fees: "₽590,000/year" }
      ],
      MBA: [
        { name: "MBA in Business Analytics", fees: "₽1,200,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽11,000/month", areaName: "Yekaterinburg", typeOfRoom: "Single", hostelName: "Ural Heights Hostel" },
      { id: 2, cost: "₽10,000/month", areaName: "Yekaterinburg", typeOfRoom: "Shared", hostelName: "Yekaterinburg City Dorm" }
    ]
  },
  {
    id: 40,
    country: "Russia",
    collegeName: "Kazan Federal University",
    location: "Kazan, Republic of Tatarstan",
    description: "One of the oldest universities in Russia, known for its rich history and strong programs in sciences and humanities.",
    courses: {
      BTech: [
        { name: "B.Tech Information Systems", fees: "₽385,000/year" },
        { name: "B.Tech Biotechnology", fees: "₽375,000/year" }
      ],
      MTech: [
        { name: "M.Tech Software Engineering", fees: "₽440,000/year" },
        { name: "M.Tech Data Science", fees: "₽430,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Biotechnology", fees: "₽520,000/year" }
      ],
      MBA: [
        { name: "MBA in International Business", fees: "₽1,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "₽9,800/month", areaName: "Kazan", typeOfRoom: "Single", hostelName: "Kazan Green Hostel" },
      { id: 2, cost: "₽8,500/month", areaName: "Kazan", typeOfRoom: "Shared", hostelName: "Kazan Youth Dormitory" }
    ]
  },
  {
    id: 41,
    country: "Australia",
    collegeName: "University of Sydney",
    location: "Sydney, New South Wales",
    description: "A prestigious university known for its strong research and comprehensive range of courses.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 48,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 46,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "AUD 45,500/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 44,000/year" },
        { name: "B.Tech Information Technology", fees: "AUD 47,000/year" }
      ],
      MTech: [
        { name: "M.Tech Software Engineering", fees: "AUD 50,000/year" },
        { name: "M.Tech Data Science", fees: "AUD 52,000/year" },
        { name: "M.Tech Robotics", fees: "AUD 51,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 53,000/year" },
        { name: "M.Tech Network Engineering", fees: "AUD 49,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 55,000/year" },
        { name: "Ph.D. in Engineering", fees: "AUD 56,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 80,000/total" },
        { name: "MBA in Finance", fees: "AUD 82,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,200/month", areaName: "Sydney", typeOfRoom: "Single", hostelName: "Harbour View Hostel" },
      { id: 2, cost: "AUD 900/month", areaName: "Sydney", typeOfRoom: "Shared", hostelName: "Cityscape Dormitory" },
      { id: 3, cost: "AUD 1,000/month", areaName: "Sydney", typeOfRoom: "Studio", hostelName: "Sydney Oasis Hostel" },
      { id: 4, cost: "AUD 950/month", areaName: "Sydney", typeOfRoom: "Shared", hostelName: "Blue Sky Hostel" },
      { id: 5, cost: "AUD 1,050/month", areaName: "Sydney", typeOfRoom: "Single", hostelName: "The Crescent Hostel" }
    ]
  },
  {
    id: 42,
    country: "Australia",
    collegeName: "University of Melbourne",
    location: "Melbourne, Victoria",
    description: "Ranked among the top universities globally, it offers a rich academic environment and diverse courses.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 47,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "AUD 45,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 48,500/year" },
        { name: "B.Tech Chemical Engineering", fees: "AUD 46,000/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 49,000/year" }
      ],
      MTech: [
        { name: "M.Tech Information Technology", fees: "AUD 51,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "AUD 53,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 54,000/year" },
        { name: "M.Tech Data Analytics", fees: "AUD 52,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "AUD 50,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Software Engineering", fees: "AUD 58,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "AUD 57,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 85,000/total" },
        { name: "MBA in Marketing", fees: "AUD 84,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,100/month", areaName: "Melbourne", typeOfRoom: "Single", hostelName: "Melbourne City Hostel" },
      { id: 2, cost: "AUD 950/month", areaName: "Melbourne", typeOfRoom: "Shared", hostelName: "The Bridge Hostel" },
      { id: 3, cost: "AUD 1,050/month", areaName: "Melbourne", typeOfRoom: "Studio", hostelName: "Royal Park Hostel" },
      { id: 4, cost: "AUD 1,000/month", areaName: "Melbourne", typeOfRoom: "Shared", hostelName: "Yarra River Dormitory" },
      { id: 5, cost: "AUD 1,200/month", areaName: "Melbourne", typeOfRoom: "Single", hostelName: "The Bayview Hostel" }
    ]
  },
  {
    id: 43,
    country: "Australia",
    collegeName: "Australian National University",
    location: "Canberra, Australian Capital Territory",
    description: "ANU is a research-intensive institution with a strong focus on science, technology, and humanities.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 49,000/year" },
        { name: "B.Tech Software Engineering", fees: "AUD 48,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "AUD 46,500/year" },
        { name: "B.Tech Electronics", fees: "AUD 47,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 48,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "AUD 54,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 53,000/year" },
        { name: "M.Tech Information Systems", fees: "AUD 55,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "AUD 52,000/year" },
        { name: "M.Tech Robotics", fees: "AUD 51,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 60,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "AUD 59,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 90,000/total" },
        { name: "MBA in Leadership", fees: "AUD 88,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,300/month", areaName: "Canberra", typeOfRoom: "Single", hostelName: "Canberra Heights Hostel" },
      { id: 2, cost: "AUD 1,000/month", areaName: "Canberra", typeOfRoom: "Shared", hostelName: "ANU Village" },
      { id: 3, cost: "AUD 1,200/month", areaName: "Canberra", typeOfRoom: "Studio", hostelName: "Lakeview Dormitory" },
      { id: 4, cost: "AUD 1,100/month", areaName: "Canberra", typeOfRoom: "Shared", hostelName: "Campus Lodge" },
      { id: 5, cost: "AUD 1,400/month", areaName: "Canberra", typeOfRoom: "Single", hostelName: "Summit Hostel" }
    ]
  },
  {
    id: 44,
    country: "Australia",
    collegeName: "University of Queensland",
    location: "Brisbane, Queensland",
    description: "UQ is renowned for its research and teaching quality, providing a vibrant student experience.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 46,000/year" },
        { name: "B.Tech Information Technology", fees: "AUD 45,500/year" },
        { name: "B.Tech Environmental Engineering", fees: "AUD 47,500/year" },
        { name: "B.Tech Chemical Engineering", fees: "AUD 48,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "AUD 46,500/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Science", fees: "AUD 52,000/year" },
        { name: "M.Tech Data Science", fees: "AUD 51,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 50,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 53,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "AUD 54,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 62,000/year" },
        { name: "Ph.D. in Environmental Engineering", fees: "AUD 61,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 87,000/total" },
        { name: "MBA in Entrepreneurship", fees: "AUD 85,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,250/month", areaName: "Brisbane", typeOfRoom: "Single", hostelName: "Brisbane Central Hostel" },
      { id: 2, cost: "AUD 950/month", areaName: "Brisbane", typeOfRoom: "Shared", hostelName: "Green Park Hostel" },
      { id: 3, cost: "AUD 1,100/month", areaName: "Brisbane", typeOfRoom: "Studio", hostelName: "Riverfront Dormitory" },
      { id: 4, cost: "AUD 1,000/month", areaName: "Brisbane", typeOfRoom: "Shared", hostelName: "Hilltop Hostel" },
      { id: 5, cost: "AUD 1,300/month", areaName: "Brisbane", typeOfRoom: "Single", hostelName: "Sunnyvale Hostel" }
    ]
  },
  {
    id: 45,
    country: "Australia",
    collegeName: "Monash University",
    location: "Melbourne, Victoria",
    description: "A leading university known for its innovative research and diverse study options.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 48,000/year" },
        { name: "B.Tech Information Technology", fees: "AUD 47,000/year" },
        { name: "B.Tech Software Engineering", fees: "AUD 49,000/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 46,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 48,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "AUD 53,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "AUD 52,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 51,000/year" },
        { name: "M.Tech Information Systems", fees: "AUD 50,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 54,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 63,000/year" },
        { name: "Ph.D. in Information Technology", fees: "AUD 62,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 86,000/total" },
        { name: "MBA in Global Business", fees: "AUD 84,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,300/month", areaName: "Melbourne", typeOfRoom: "Single", hostelName: "Monash Student Residences" },
      { id: 2, cost: "AUD 1,000/month", areaName: "Melbourne", typeOfRoom: "Shared", hostelName: "Waverley Park Hostel" },
      { id: 3, cost: "AUD 1,150/month", areaName: "Melbourne", typeOfRoom: "Studio", hostelName: "Monash City Campus Hostel" },
      { id: 4, cost: "AUD 1,200/month", areaName: "Melbourne", typeOfRoom: "Shared", hostelName: "Oakleigh Campus Hostel" },
      { id: 5, cost: "AUD 1,400/month", areaName: "Melbourne", typeOfRoom: "Single", hostelName: "Clayton Campus Hostel" }
    ]
  },
  {
    id: 46,
    country: "Australia",
    collegeName: "University of Western Australia",
    location: "Perth, Western Australia",
    description: "UWA is known for its excellence in research and teaching, particularly in science and humanities.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 50,000/year" },
        { name: "B.Tech Software Engineering", fees: "AUD 49,000/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 48,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "AUD 47,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 49,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "AUD 56,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 54,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 55,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "AUD 53,000/year" },
        { name: "M.Tech Information Systems", fees: "AUD 52,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 64,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "AUD 63,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 88,000/total" },
        { name: "MBA in Business Analytics", fees: "AUD 85,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,200/month", areaName: "Perth", typeOfRoom: "Single", hostelName: "Perth City Hostel" },
      { id: 2, cost: "AUD 950/month", areaName: "Perth", typeOfRoom: "Shared", hostelName: "Greenfield Hostel" },
      { id: 3, cost: "AUD 1,100/month", areaName: "Perth", typeOfRoom: "Studio", hostelName: "Riverside Dormitory" },
      { id: 4, cost: "AUD 1,000/month", areaName: "Perth", typeOfRoom: "Shared", hostelName: "Hillside Hostel" },
      { id: 5, cost: "AUD 1,400/month", areaName: "Perth", typeOfRoom: "Single", hostelName: "Coastal View Hostel" }
    ]
  },
  {
    id: 47,
    country: "Australia",
    collegeName: "University of Adelaide",
    location: "Adelaide, South Australia",
    description: "A leading research university that offers a wide range of undergraduate and postgraduate courses.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 45,000/year" },
        { name: "B.Tech Information Technology", fees: "AUD 44,500/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 46,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "AUD 47,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 45,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "AUD 50,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 51,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 52,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "AUD 49,000/year" },
        { name: "M.Tech Information Systems", fees: "AUD 48,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 60,000/year" },
        { name: "Ph.D. in Engineering", fees: "AUD 59,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 85,000/total" },
        { name: "MBA in Global Business", fees: "AUD 84,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,000/month", areaName: "Adelaide", typeOfRoom: "Single", hostelName: "Adelaide Central Hostel" },
      { id: 2, cost: "AUD 800/month", areaName: "Adelaide", typeOfRoom: "Shared", hostelName: "Parkland Hostel" },
      { id: 3, cost: "AUD 1,200/month", areaName: "Adelaide", typeOfRoom: "Studio", hostelName: "Riverbank Dormitory" },
      { id: 4, cost: "AUD 1,100/month", areaName: "Adelaide", typeOfRoom: "Shared", hostelName: "Hillview Hostel" },
      { id: 5, cost: "AUD 1,300/month", areaName: "Adelaide", typeOfRoom: "Single", hostelName: "Adelaide University Residence" }
    ]
  },
  {
    id: 48,
    country: "Australia",
    collegeName: "University of Technology Sydney",
    location: "Sydney, New South Wales",
    description: "Known for its innovative approach to education and strong industry connections.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 49,000/year" },
        { name: "B.Tech Information Technology", fees: "AUD 48,000/year" },
        { name: "B.Tech Software Engineering", fees: "AUD 50,000/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 47,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "AUD 48,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "AUD 54,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 52,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 53,000/year" },
        { name: "M.Tech Information Systems", fees: "AUD 51,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "AUD 55,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 61,000/year" },
        { name: "Ph.D. in Engineering", fees: "AUD 60,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 86,000/total" },
        { name: "MBA in Business Innovation", fees: "AUD 84,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,400/month", areaName: "Sydney", typeOfRoom: "Single", hostelName: "Sydney Student Accommodation" },
      { id: 2, cost: "AUD 1,100/month", areaName: "Sydney", typeOfRoom: "Shared", hostelName: "City Campus Hostel" },
      { id: 3, cost: "AUD 1,200/month", areaName: "Sydney", typeOfRoom: "Studio", hostelName: "Harbour View Dormitory" },
      { id: 4, cost: "AUD 1,300/month", areaName: "Sydney", typeOfRoom: "Shared", hostelName: "Sydney University Village" },
      { id: 5, cost: "AUD 1,500/month", areaName: "Sydney", typeOfRoom: "Single", hostelName: "The Rocks Hostel" }
    ]
  },
  {
    id: 49,
    country: "Australia",
    collegeName: "RMIT University",
    location: "Melbourne, Victoria",
    description: "RMIT is known for its industry connections and focus on employability.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 47,000/year" },
        { name: "B.Tech Information Technology", fees: "AUD 48,000/year" },
        { name: "B.Tech Software Engineering", fees: "AUD 49,000/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 46,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 47,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "AUD 52,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 50,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 53,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "AUD 51,000/year" },
        { name: "M.Tech Information Systems", fees: "AUD 54,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 62,000/year" },
        { name: "Ph.D. in Engineering", fees: "AUD 61,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 87,000/total" },
        { name: "MBA in Project Management", fees: "AUD 85,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,300/month", areaName: "Melbourne", typeOfRoom: "Single", hostelName: "RMIT Student Accommodation" },
      { id: 2, cost: "AUD 1,000/month", areaName: "Melbourne", typeOfRoom: "Shared", hostelName: "Royal Park Hostel" },
      { id: 3, cost: "AUD 1,200/month", areaName: "Melbourne", typeOfRoom: "Studio", hostelName: "City Campus Dormitory" },
      { id: 4, cost: "AUD 1,100/month", areaName: "Melbourne", typeOfRoom: "Shared", hostelName: "Melbourne Central Hostel" },
      { id: 5, cost: "AUD 1,500/month", areaName: "Melbourne", typeOfRoom: "Single", hostelName: "Queen Victoria Market Hostel" }
    ]
  },
  {
    id: 50,
    country: "Australia",
    collegeName: "University of Queensland",
    location: "Brisbane, Queensland",
    description: "One of Australia's leading research and teaching universities.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AUD 49,000/year" },
        { name: "B.Tech Information Technology", fees: "AUD 48,000/year" },
        { name: "B.Tech Software Engineering", fees: "AUD 50,000/year" },
        { name: "B.Tech Civil Engineering", fees: "AUD 47,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AUD 48,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "AUD 54,000/year" },
        { name: "M.Tech Cybersecurity", fees: "AUD 53,000/year" },
        { name: "M.Tech Software Engineering", fees: "AUD 55,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "AUD 52,000/year" },
        { name: "M.Tech Information Systems", fees: "AUD 51,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "AUD 63,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "AUD 62,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AUD 88,000/total" },
        { name: "MBA in Health Management", fees: "AUD 86,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AUD 1,300/month", areaName: "Brisbane", typeOfRoom: "Single", hostelName: "Brisbane Student Accommodation" },
      { id: 2, cost: "AUD 1,100/month", areaName: "Brisbane", typeOfRoom: "Shared", hostelName: "UQ St. Lucia Campus Hostel" },
      { id: 3, cost: "AUD 1,200/month", areaName: "Brisbane", typeOfRoom: "Studio", hostelName: "Brisbane Central Dormitory" },
      { id: 4, cost: "AUD 1,000/month", areaName: "Brisbane", typeOfRoom: "Shared", hostelName: "Riverside Hostel" },
      { id: 5, cost: "AUD 1,400/month", areaName: "Brisbane", typeOfRoom: "Single", hostelName: "The University Hall" }
    ]
  },
  {
    id: 51,
    country: "Canada",
    collegeName: "University of Toronto",
    location: "Toronto, Ontario",
    description: "A leading global research university with a strong emphasis on interdisciplinary education.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$10,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "$11,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$10,500/year" },
        { name: "B.Tech Civil Engineering", fees: "$9,800/year" },
        { name: "B.Tech Chemical Engineering", fees: "$11,200/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "$15,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "$16,000/year" },
        { name: "M.Tech Software Engineering", fees: "$14,500/year" },
        { name: "M.Tech Cybersecurity", fees: "$15,500/year" },
        { name: "M.Tech Robotics", fees: "$15,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "$20,000/year" },
        { name: "Ph.D. in Engineering", fees: "$22,000/year" },
        { name: "Ph.D. in AI", fees: "$21,000/year" },
        { name: "Ph.D. in Physics", fees: "$19,500/year" },
        { name: "Ph.D. in Mathematics", fees: "$20,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$60,000/total" },
        { name: "MBA in Finance", fees: "$65,000/total" },
        { name: "MBA in Marketing", fees: "$62,000/total" },
        { name: "MBA in Operations", fees: "$63,000/total" },
        { name: "MBA in Business Analytics", fees: "$64,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,200/month", areaName: "Toronto", typeOfRoom: "Single", hostelName: "St. George Residence" },
      { id: 2, cost: "$900/month", areaName: "Toronto", typeOfRoom: "Shared", hostelName: "Victoria College Dorm" },
      { id: 3, cost: "$1,100/month", areaName: "Toronto", typeOfRoom: "Studio", hostelName: "Hart House" },
      { id: 4, cost: "$1,000/month", areaName: "Toronto", typeOfRoom: "Shared", hostelName: "Sidney Smith Hall" },
      { id: 5, cost: "$1,300/month", areaName: "Toronto", typeOfRoom: "Suite", hostelName: "Innis College Residence" }
    ]
  },
  {
    id: 52,
    country: "Canada",
    collegeName: "University of British Columbia",
    location: "Vancouver, British Columbia",
    description: "Known for its research excellence and beautiful campus, UBC offers a wide range of programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$11,000/year" },
        { name: "B.Tech Software Engineering", fees: "$10,800/year" },
        { name: "B.Tech Environmental Engineering", fees: "$11,500/year" },
        { name: "B.Tech Electrical Engineering", fees: "$10,600/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$11,200/year" }
      ],
      MTech: [
        { name: "M.Tech Machine Learning", fees: "$16,500/year" },
        { name: "M.Tech Information Systems", fees: "$15,800/year" },
        { name: "M.Tech Civil Engineering", fees: "$15,000/year" },
        { name: "M.Tech Data Analytics", fees: "$17,000/year" },
        { name: "M.Tech Software Systems", fees: "$16,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "$21,000/year" },
        { name: "Ph.D. in Engineering", fees: "$22,500/year" },
        { name: "Ph.D. in Environmental Studies", fees: "$20,000/year" },
        { name: "Ph.D. in Biochemistry", fees: "$20,500/year" },
        { name: "Ph.D. in Physics", fees: "$19,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$70,000/total" },
        { name: "MBA in Technology Management", fees: "$72,000/total" },
        { name: "MBA in Supply Chain Management", fees: "$71,000/total" },
        { name: "MBA in Strategic Management", fees: "$73,000/total" },
        { name: "MBA in Entrepreneurship", fees: "$74,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,500/month", areaName: "Vancouver", typeOfRoom: "Single", hostelName: "UBC Place" },
      { id: 2, cost: "$1,200/month", areaName: "Vancouver", typeOfRoom: "Shared", hostelName: "Harrison House" },
      { id: 3, cost: "$1,300/month", areaName: "Vancouver", typeOfRoom: "Studio", hostelName: "Vancouver Commons" },
      { id: 4, cost: "$1,000/month", areaName: "Vancouver", typeOfRoom: "Shared", hostelName: "West Coast Hostel" },
      { id: 5, cost: "$1,800/month", areaName: "Vancouver", typeOfRoom: "Suite", hostelName: "Pacific Residence" }
    ]
  },  
  {
    id: 53,
    country: "Canada",
    collegeName: "McGill University",
    location: "Montreal, Quebec",
    description: "An internationally recognized university with a vibrant student life and diverse programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$12,000/year" },
        { name: "B.Tech Biomedical Engineering", fees: "$12,500/year" },
        { name: "B.Tech Electrical Engineering", fees: "$11,800/year" },
        { name: "B.Tech Civil Engineering", fees: "$11,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "$12,200/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "$15,500/year" },
        { name: "M.Tech Mechanical Engineering", fees: "$16,000/year" },
        { name: "M.Tech Information Technology", fees: "$15,200/year" },
        { name: "M.Tech Software Engineering", fees: "$16,500/year" },
        { name: "M.Tech Cybersecurity", fees: "$17,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "$22,000/year" },
        { name: "Ph.D. in Engineering", fees: "$23,000/year" },
        { name: "Ph.D. in Neuroscience", fees: "$21,500/year" },
        { name: "Ph.D. in Environmental Science", fees: "$20,500/year" },
        { name: "Ph.D. in Sociology", fees: "$22,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$65,000/total" },
        { name: "MBA in Marketing", fees: "$66,000/total" },
        { name: "MBA in Finance", fees: "$67,000/total" },
        { name: "MBA in Health Care Management", fees: "$68,000/total" },
        { name: "MBA in Strategy", fees: "$69,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,300/month", areaName: "Montreal", typeOfRoom: "Single", hostelName: "McGill Residences" },
      { id: 2, cost: "$1,100/month", areaName: "Montreal", typeOfRoom: "Shared", hostelName: "Old Port Hostel" },
      { id: 3, cost: "$1,200/month", areaName: "Montreal", typeOfRoom: "Studio", hostelName: "Montreal Loft" },
      { id: 4, cost: "$1,000/month", areaName: "Montreal", typeOfRoom: "Shared", hostelName: "Maple Leaf Dorm" },
      { id: 5, cost: "$1,500/month", areaName: "Montreal", typeOfRoom: "Suite", hostelName: "Laird Hall" }
    ]
  },
  {
    id: 54,
    country: "Canada",
    collegeName: "University of Alberta",
    location: "Edmonton, Alberta",
    description: "A comprehensive university known for its innovation and research, with a focus on sustainability.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$10,500/year" },
        { name: "B.Tech Civil Engineering", fees: "$11,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "$10,800/year" },
        { name: "B.Tech Electrical Engineering", fees: "$10,600/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$10,200/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Engineering", fees: "$15,000/year" },
        { name: "M.Tech Energy Systems", fees: "$16,000/year" },
        { name: "M.Tech Computer Engineering", fees: "$15,500/year" },
        { name: "M.Tech Robotics", fees: "$16,500/year" },
        { name: "M.Tech Software Engineering", fees: "$15,800/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "$22,000/year" },
        { name: "Ph.D. in Computer Science", fees: "$21,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "$20,500/year" },
        { name: "Ph.D. in Education", fees: "$21,500/year" },
        { name: "Ph.D. in Business", fees: "$22,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$60,000/total" },
        { name: "MBA in Marketing", fees: "$62,000/total" },
        { name: "MBA in Finance", fees: "$63,000/total" },
        { name: "MBA in Supply Chain Management", fees: "$64,000/total" },
        { name: "MBA in Data Analytics", fees: "$65,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,200/month", areaName: "Edmonton", typeOfRoom: "Single", hostelName: "Lister Hall" },
      { id: 2, cost: "$1,000/month", areaName: "Edmonton", typeOfRoom: "Shared", hostelName: "St. Joseph's College" },
      { id: 3, cost: "$1,100/month", areaName: "Edmonton", typeOfRoom: "Studio", hostelName: "Katherine Morton Hall" },
      { id: 4, cost: "$900/month", areaName: "Edmonton", typeOfRoom: "Shared", hostelName: "Enterprise Square" },
      { id: 5, cost: "$1,500/month", areaName: "Edmonton", typeOfRoom: "Suite", hostelName: "Cortez Hall" }
    ]
  },
  {
    id: 55,
    country: "Canada",
    collegeName: "University of Calgary",
    location: "Calgary, Alberta",
    description: "A vibrant community with a focus on innovation, research, and entrepreneurship.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$11,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "$10,800/year" },
        { name: "B.Tech Software Engineering", fees: "$11,200/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$10,500/year" },
        { name: "B.Tech Chemical Engineering", fees: "$11,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "$16,500/year" },
        { name: "M.Tech Robotics", fees: "$15,800/year" },
        { name: "M.Tech Software Systems", fees: "$16,000/year" },
        { name: "M.Tech Data Science", fees: "$16,200/year" },
        { name: "M.Tech Cybersecurity", fees: "$16,800/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "$20,500/year" },
        { name: "Ph.D. in Computer Science", fees: "$21,000/year" },
        { name: "Ph.D. in Business", fees: "$20,800/year" },
        { name: "Ph.D. in Health Sciences", fees: "$21,200/year" },
        { name: "Ph.D. in Environmental Science", fees: "$21,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$62,000/total" },
        { name: "MBA in Innovation", fees: "$63,000/total" },
        { name: "MBA in Finance", fees: "$64,000/total" },
        { name: "MBA in Marketing", fees: "$65,000/total" },
        { name: "MBA in Data Analytics", fees: "$66,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,100/month", areaName: "Calgary", typeOfRoom: "Single", hostelName: "Residence Hall" },
      { id: 2, cost: "$900/month", areaName: "Calgary", typeOfRoom: "Shared", hostelName: "Olympic Village" },
      { id: 3, cost: "$1,200/month", areaName: "Calgary", typeOfRoom: "Studio", hostelName: "The Tower" },
      { id: 4, cost: "$1,000/month", areaName: "Calgary", typeOfRoom: "Shared", hostelName: "Rundle Hall" },
      { id: 5, cost: "$1,500/month", areaName: "Calgary", typeOfRoom: "Suite", hostelName: "Kensington Hall" }
    ]
  },
  {
    id: 56,
    country: "Canada",
    collegeName: "University of Ottawa",
    location: "Ottawa, Ontario",
    description: "Canada's largest bilingual university offering a diverse range of programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$11,500/year" },
        { name: "B.Tech Software Engineering", fees: "$11,000/year" },
        { name: "B.Tech Civil Engineering", fees: "$10,800/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$11,200/year" },
        { name: "B.Tech Electrical Engineering", fees: "$11,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "$15,500/year" },
        { name: "M.Tech Data Science", fees: "$16,000/year" },
        { name: "M.Tech Cybersecurity", fees: "$15,800/year" },
        { name: "M.Tech Software Engineering", fees: "$16,500/year" },
        { name: "M.Tech Robotics", fees: "$16,200/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "$21,000/year" },
        { name: "Ph.D. in Engineering", fees: "$22,000/year" },
        { name: "Ph.D. in Health Sciences", fees: "$21,500/year" },
        { name: "Ph.D. in Sociology", fees: "$20,800/year" },
        { name: "Ph.D. in Education", fees: "$21,200/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$65,000/total" },
        { name: "MBA in Marketing", fees: "$66,000/total" },
        { name: "MBA in Finance", fees: "$67,000/total" },
        { name: "MBA in International Business", fees: "$68,000/total" },
        { name: "MBA in Business Analytics", fees: "$69,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,200/month", areaName: "Ottawa", typeOfRoom: "Single", hostelName: "Residence Hall" },
      { id: 2, cost: "$1,000/month", areaName: "Ottawa", typeOfRoom: "Shared", hostelName: "Sandy Hill Residence" },
      { id: 3, cost: "$1,500/month", areaName: "Ottawa", typeOfRoom: "Studio", hostelName: "City Centre" },
      { id: 4, cost: "$1,100/month", areaName: "Ottawa", typeOfRoom: "Shared", hostelName: "Saint Paul University" },
      { id: 5, cost: "$1,400/month", areaName: "Ottawa", typeOfRoom: "Suite", hostelName: "Catherine Hall" }
    ]
  },
  {
    id: 57,
    country: "Canada",
    collegeName: "Simon Fraser University",
    location: "Burnaby, British Columbia",
    description: "Known for its innovative programs and research initiatives, with a stunning campus.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$10,800/year" },
        { name: "B.Tech Software Engineering", fees: "$10,500/year" },
        { name: "B.Tech Cybersecurity", fees: "$11,200/year" },
        { name: "B.Tech Data Science", fees: "$10,800/year" },
        { name: "B.Tech Electrical Engineering", fees: "$10,700/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "$15,500/year" },
        { name: "M.Tech Software Engineering", fees: "$15,800/year" },
        { name: "M.Tech Data Analytics", fees: "$16,000/year" },
        { name: "M.Tech Cybersecurity", fees: "$16,200/year" },
        { name: "M.Tech Environmental Engineering", fees: "$15,800/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "$20,500/year" },
        { name: "Ph.D. in Engineering", fees: "$21,500/year" },
        { name: "Ph.D. in Business", fees: "$22,000/year" },
        { name: "Ph.D. in Health Sciences", fees: "$21,000/year" },
        { name: "Ph.D. in Social Sciences", fees: "$20,800/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$64,000/total" },
        { name: "MBA in Marketing", fees: "$65,000/total" },
        { name: "MBA in Finance", fees: "$66,000/total" },
        { name: "MBA in Technology Management", fees: "$67,000/total" },
        { name: "MBA in Business Analytics", fees: "$68,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,100/month", areaName: "Burnaby", typeOfRoom: "Single", hostelName: "Shadbolt Centre" },
      { id: 2, cost: "$900/month", areaName: "Burnaby", typeOfRoom: "Shared", hostelName: "Towers" },
      { id: 3, cost: "$1,200/month", areaName: "Burnaby", typeOfRoom: "Studio", hostelName: "Northwood" },
      { id: 4, cost: "$1,500/month", areaName: "Burnaby", typeOfRoom: "Shared", hostelName: "Maguire" },
      { id: 5, cost: "$1,400/month", areaName: "Burnaby", typeOfRoom: "Suite", hostelName: "McTaggart-Cowan Hall" }
    ]
  },
  {
    id: 58,
    country: "Canada",
    collegeName: "University of Victoria",
    location: "Victoria, British Columbia",
    description: "A research-intensive university with a strong focus on the environment and sustainability.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$10,600/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$10,800/year" },
        { name: "B.Tech Civil Engineering", fees: "$10,500/year" },
        { name: "B.Tech Electrical Engineering", fees: "$10,700/year" },
        { name: "B.Tech Environmental Engineering", fees: "$10,900/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "$16,000/year" },
        { name: "M.Tech Civil Engineering", fees: "$15,500/year" },
        { name: "M.Tech Environmental Science", fees: "$15,800/year" },
        { name: "M.Tech Mechanical Engineering", fees: "$16,200/year" },
        { name: "M.Tech Electrical Engineering", fees: "$15,700/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "$21,000/year" },
        { name: "Ph.D. in Computer Science", fees: "$20,500/year" },
        { name: "Ph.D. in Environmental Science", fees: "$20,800/year" },
        { name: "Ph.D. in Sociology", fees: "$21,500/year" },
        { name: "Ph.D. in Psychology", fees: "$21,200/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$68,000/total" },
        { name: "MBA in Marketing", fees: "$69,000/total" },
        { name: "MBA in Finance", fees: "$70,000/total" },
        { name: "MBA in International Business", fees: "$71,000/total" },
        { name: "MBA in Sustainability", fees: "$72,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,200/month", areaName: "Victoria", typeOfRoom: "Single", hostelName: "Student Housing" },
      { id: 2, cost: "$1,000/month", areaName: "Victoria", typeOfRoom: "Shared", hostelName: "Sage Lane" },
      { id: 3, cost: "$1,500/month", areaName: "Victoria", typeOfRoom: "Studio", hostelName: "Residence Hall" },
      { id: 4, cost: "$1,100/month", areaName: "Victoria", typeOfRoom: "Shared", hostelName: "Cedar House" },
      { id: 5, cost: "$1,400/month", areaName: "Victoria", typeOfRoom: "Suite", hostelName: "MacLaurin Building" }
    ]
  },
  {
    id: 59,
    country: "Canada",
    collegeName: "McGill University",
    location: "Montreal, Quebec",
    description: "Renowned for its rigorous academic programs and vibrant student life.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$13,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "$12,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$12,800/year" },
        { name: "B.Tech Civil Engineering", fees: "$12,000/year" },
        { name: "B.Tech Aerospace Engineering", fees: "$13,500/year" }
      ],
      MTech: [
        { name: "M.Tech Software Engineering", fees: "$17,000/year" },
        { name: "M.Tech Data Science", fees: "$16,500/year" },
        { name: "M.Tech Cybersecurity", fees: "$17,200/year" },
        { name: "M.Tech Mechanical Engineering", fees: "$17,000/year" },
        { name: "M.Tech Civil Engineering", fees: "$16,800/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "$24,000/year" },
        { name: "Ph.D. in Engineering", fees: "$23,500/year" },
        { name: "Ph.D. in Business", fees: "$22,800/year" },
        { name: "Ph.D. in Education", fees: "$23,000/year" },
        { name: "Ph.D. in History", fees: "$24,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$70,000/total" },
        { name: "MBA in Marketing", fees: "$71,000/total" },
        { name: "MBA in Finance", fees: "$72,000/total" },
        { name: "MBA in Entrepreneurship", fees: "$73,000/total" },
        { name: "MBA in Global Management", fees: "$74,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,500/month", areaName: "Montreal", typeOfRoom: "Single", hostelName: "New Residence Hall" },
      { id: 2, cost: "$1,200/month", areaName: "Montreal", typeOfRoom: "Shared", hostelName: "Solin Hall" },
      { id: 3, cost: "$1,800/month", areaName: "Montreal", typeOfRoom: "Studio", hostelName: "Cox Hall" },
      { id: 4, cost: "$1,600/month", areaName: "Montreal", typeOfRoom: "Shared", hostelName: "Royal Victoria College" },
      { id: 5, cost: "$1,700/month", areaName: "Montreal", typeOfRoom: "Suite", hostelName: "Burnside Hall" }
    ]
  },
  {
    id: 60,
    country: "Canada",
    collegeName: "Dalhousie University",
    location: "Halifax, Nova Scotia",
    description: "One of Canada's oldest universities, known for its comprehensive programs and research opportunities.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "$12,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "$11,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "$11,800/year" },
        { name: "B.Tech Civil Engineering", fees: "$11,200/year" },
        { name: "B.Tech Marine Engineering", fees: "$12,500/year" }
      ],
      MTech: [
        { name: "M.Tech Software Engineering", fees: "$18,000/year" },
        { name: "M.Tech Data Science", fees: "$17,500/year" },
        { name: "M.Tech Environmental Engineering", fees: "$17,800/year" },
        { name: "M.Tech Mechanical Engineering", fees: "$18,200/year" },
        { name: "M.Tech Marine Engineering", fees: "$18,500/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "$22,000/year" },
        { name: "Ph.D. in Engineering", fees: "$21,500/year" },
        { name: "Ph.D. in Health Sciences", fees: "$22,500/year" },
        { name: "Ph.D. in Education", fees: "$22,800/year" },
        { name: "Ph.D. in Environmental Science", fees: "$23,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "$60,000/total" },
        { name: "MBA in Marketing", fees: "$61,000/total" },
        { name: "MBA in Finance", fees: "$62,000/total" },
        { name: "MBA in Management", fees: "$63,000/total" },
        { name: "MBA in Innovation and Entrepreneurship", fees: "$64,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "$1,100/month", areaName: "Halifax", typeOfRoom: "Single", hostelName: "Carleton Campus" },
      { id: 2, cost: "$900/month", areaName: "Halifax", typeOfRoom: "Shared", hostelName: "Vanier Residence" },
      { id: 3, cost: "$1,400/month", areaName: "Halifax", typeOfRoom: "Studio", hostelName: "Morrison Hall" },
      { id: 4, cost: "$1,300/month", areaName: "Halifax", typeOfRoom: "Shared", hostelName: "Hillside Residence" },
      { id: 5, cost: "$1,500/month", areaName: "Halifax", typeOfRoom: "Suite", hostelName: "Oland Centre" }
    ]
  },
  {
    id: 61,
    country: "England",
    collegeName: "University of Oxford",
    location: "Oxford, Oxfordshire",
    description: "The University of Oxford is one of the oldest and most prestigious universities in the world, known for its rigorous academic programs and distinguished faculty.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£25,000/year" },
        { name: "B.Tech Engineering Science", fees: "£26,000/year" },
        { name: "B.Tech Physics", fees: "£24,000/year" },
        { name: "B.Tech Mathematics", fees: "£24,500/year" },
        { name: "B.Tech Chemistry", fees: "£24,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£28,000/year" },
        { name: "M.Tech Engineering Science", fees: "£29,000/year" },
        { name: "M.Tech Data Science", fees: "£30,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "£30,500/year" },
        { name: "M.Tech Cyber Security", fees: "£28,500/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "£35,000/year" },
        { name: "Ph.D. in Engineering", fees: "£36,000/year" },
        { name: "Ph.D. in Physics", fees: "£34,000/year" },
        { name: "Ph.D. in Mathematics", fees: "£34,500/year" },
        { name: "Ph.D. in Chemistry", fees: "£34,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£60,000/total" },
        { name: "MBA in Finance", fees: "£62,000/total" },
        { name: "MBA in Marketing", fees: "£61,000/total" },
        { name: "MBA in Entrepreneurship", fees: "£63,000/total" },
        { name: "MBA in International Business", fees: "£65,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£600/month", areaName: "Oxford", typeOfRoom: "Single", hostelName: "Bodleian House" },
      { id: 2, cost: "£500/month", areaName: "Oxford", typeOfRoom: "Shared", hostelName: "Radcliffe Dormitory" },
      { id: 3, cost: "£650/month", areaName: "Oxford", typeOfRoom: "Studio", hostelName: "Wolvercote Lodge" },
      { id: 4, cost: "£580/month", areaName: "Oxford", typeOfRoom: "Shared", hostelName: "Christ Church College" },
      { id: 5, cost: "£620/month", areaName: "Oxford", typeOfRoom: "Single", hostelName: "St. John's Hall" }
    ]
  },
  {
    id: 62,
    country: "England",
    collegeName: "University of Cambridge",
    location: "Cambridge, Cambridgeshire",
    description: "The University of Cambridge is renowned for its historical significance and academic excellence in various disciplines.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£26,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "£27,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£28,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "£26,500/year" },
        { name: "B.Tech Mathematics", fees: "£25,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£30,000/year" },
        { name: "M.Tech Electrical Engineering", fees: "£31,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£32,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "£30,500/year" },
        { name: "M.Tech Data Science", fees: "£31,500/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "£36,000/year" },
        { name: "Ph.D. in Engineering", fees: "£37,000/year" },
        { name: "Ph.D. in Physics", fees: "£35,500/year" },
        { name: "Ph.D. in Mathematics", fees: "£35,000/year" },
        { name: "Ph.D. in Biology", fees: "£35,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£60,000/total" },
        { name: "MBA in Finance", fees: "£62,000/total" },
        { name: "MBA in Marketing", fees: "£61,500/total" },
        { name: "MBA in Healthcare Management", fees: "£63,000/total" },
        { name: "MBA in Global Business", fees: "£64,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£650/month", areaName: "Cambridge", typeOfRoom: "Single", hostelName: "Kings College Lodge" },
      { id: 2, cost: "£550/month", areaName: "Cambridge", typeOfRoom: "Shared", hostelName: "Trinity Hall" },
      { id: 3, cost: "£700/month", areaName: "Cambridge", typeOfRoom: "Studio", hostelName: "Clare College" },
      { id: 4, cost: "£600/month", areaName: "Cambridge", typeOfRoom: "Single", hostelName: "Selwyn College" },
      { id: 5, cost: "£580/month", areaName: "Cambridge", typeOfRoom: "Shared", hostelName: "St. Catherine's College" }
    ]
  },
  {
    id: 63,
    country: "England",
    collegeName: "Imperial College London",
    location: "London, England",
    description: "Imperial College London is a global leader in science, engineering, medicine, and business.",
    courses: {
      BTech: [
        { name: "B.Tech Computing", fees: "£28,000/year" },
        { name: "B.Tech Civil Engineering", fees: "£29,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "£30,000/year" },
        { name: "B.Tech Materials Science", fees: "£28,500/year" },
        { name: "B.Tech Bioengineering", fees: "£29,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computing", fees: "£32,000/year" },
        { name: "M.Tech Chemical Engineering", fees: "£33,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£34,000/year" },
        { name: "M.Tech Electrical Engineering", fees: "£31,500/year" },
        { name: "M.Tech Bioinformatics", fees: "£32,500/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£40,000/year" },
        { name: "Ph.D. in Science", fees: "£41,000/year" },
        { name: "Ph.D. in Medicine", fees: "£39,500/year" },
        { name: "Ph.D. in Environmental Science", fees: "£39,000/year" },
        { name: "Ph.D. in Computer Science", fees: "£40,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£65,000/total" },
        { name: "MBA in Management", fees: "£66,000/total" },
        { name: "MBA in Finance", fees: "£67,000/total" },
        { name: "MBA in Strategy", fees: "£68,000/total" },
        { name: "MBA in Entrepreneurship", fees: "£69,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£700/month", areaName: "London", typeOfRoom: "Single", hostelName: "Imperial Residence" },
      { id: 2, cost: "£600/month", areaName: "London", typeOfRoom: "Shared", hostelName: "South Kensington Dorm" },
      { id: 3, cost: "£750/month", areaName: "London", typeOfRoom: "Studio", hostelName: "Hyde Park View" },
      { id: 4, cost: "£720/month", areaName: "London", typeOfRoom: "Single", hostelName: "Earl's Court" },
      { id: 5, cost: "£680/month", areaName: "London", typeOfRoom: "Shared", hostelName: "Brompton Hall" }
    ]
  },  
  {
    id: 64,
    country: "England",
    collegeName: "University College London",
    location: "London, England",
    description: "UCL is a leading multidisciplinary university with a strong emphasis on research and innovation.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£27,000/year" },
        { name: "B.Tech Architecture", fees: "£28,000/year" },
        { name: "B.Tech Civil Engineering", fees: "£29,000/year" },
        { name: "B.Tech Environmental Science", fees: "£27,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£28,500/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "£31,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "£32,000/year" },
        { name: "M.Tech Urban Planning", fees: "£30,000/year" },
        { name: "M.Tech Structural Engineering", fees: "£30,500/year" },
        { name: "M.Tech Robotics", fees: "£31,500/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£39,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "£40,000/year" },
        { name: "Ph.D. in History", fees: "£38,500/year" },
        { name: "Ph.D. in Sociology", fees: "£38,000/year" },
        { name: "Ph.D. in Psychology", fees: "£39,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£62,000/total" },
        { name: "MBA in Management", fees: "£63,000/total" },
        { name: "MBA in Marketing", fees: "£64,000/total" },
        { name: "MBA in Global Business", fees: "£65,000/total" },
        { name: "MBA in Healthcare Management", fees: "£66,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£650/month", areaName: "London", typeOfRoom: "Single", hostelName: "UCL Accommodation" },
      { id: 2, cost: "£550/month", areaName: "London", typeOfRoom: "Shared", hostelName: "Brampton House" },
      { id: 3, cost: "£700/month", areaName: "London", typeOfRoom: "Studio", hostelName: "Hampstead Residence" },
      { id: 4, cost: "£620/month", areaName: "London", typeOfRoom: "Single", hostelName: "Tavistock Hotel" },
      { id: 5, cost: "£580/month", areaName: "London", typeOfRoom: "Shared", hostelName: "Royal Holloway" }
    ]
  },
  {
    id: 65,
    country: "England",
    collegeName: "University of Manchester",
    location: "Manchester, England",
    description: "The University of Manchester is a leading research university with a diverse range of programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£25,500/year" },
        { name: "B.Tech Electrical Engineering", fees: "£26,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£27,000/year" },
        { name: "B.Tech Civil Engineering", fees: "£26,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "£27,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£30,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£31,000/year" },
        { name: "M.Tech Chemical Engineering", fees: "£30,500/year" },
        { name: "M.Tech Electrical Engineering", fees: "£31,500/year" },
        { name: "M.Tech Robotics", fees: "£32,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£38,000/year" },
        { name: "Ph.D. in Science", fees: "£39,000/year" },
        { name: "Ph.D. in Business", fees: "£37,500/year" },
        { name: "Ph.D. in Humanities", fees: "£37,000/year" },
        { name: "Ph.D. in Health", fees: "£38,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£55,000/total" },
        { name: "MBA in Management", fees: "£56,000/total" },
        { name: "MBA in Finance", fees: "£57,000/total" },
        { name: "MBA in Marketing", fees: "£58,000/total" },
        { name: "MBA in International Business", fees: "£59,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£540/month", areaName: "Manchester", typeOfRoom: "Single", hostelName: "Fallowfield Hall" },
      { id: 2, cost: "£480/month", areaName: "Manchester", typeOfRoom: "Shared", hostelName: "Woodsmoor Hall" },
      { id: 3, cost: "£600/month", areaName: "Manchester", typeOfRoom: "Studio", hostelName: "Victoria Park" },
      { id: 4, cost: "£500/month", areaName: "Manchester", typeOfRoom: "Single", hostelName: "Oaks Hall" },
      { id: 5, cost: "£520/month", areaName: "Manchester", typeOfRoom: "Shared", hostelName: "Brunswick Park" }
    ]
  },
  {
    id: 66,
    country: "England",
    collegeName: "University of Bristol",
    location: "Bristol, England",
    description: "The University of Bristol is a leading university with a strong research focus and vibrant student life.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£25,000/year" },
        { name: "B.Tech Civil Engineering", fees: "£26,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£27,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "£26,500/year" },
        { name: "B.Tech Aerospace Engineering", fees: "£28,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£29,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£30,000/year" },
        { name: "M.Tech Civil Engineering", fees: "£30,500/year" },
        { name: "M.Tech Electrical Engineering", fees: "£31,000/year" },
        { name: "M.Tech Robotics", fees: "£31,500/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£36,000/year" },
        { name: "Ph.D. in Science", fees: "£37,000/year" },
        { name: "Ph.D. in Business", fees: "£35,500/year" },
        { name: "Ph.D. in Arts", fees: "£35,000/year" },
        { name: "Ph.D. in Medicine", fees: "£36,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£58,000/total" },
        { name: "MBA in Management", fees: "£59,000/total" },
        { name: "MBA in Marketing", fees: "£60,000/total" },
        { name: "MBA in International Business", fees: "£61,000/total" },
        { name: "MBA in Healthcare Management", fees: "£62,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£600/month", areaName: "Bristol", typeOfRoom: "Single", hostelName: "Bristol Student Housing" },
      { id: 2, cost: "£500/month", areaName: "Bristol", typeOfRoom: "Shared", hostelName: "Brunel House" },
      { id: 3, cost: "£700/month", areaName: "Bristol", typeOfRoom: "Studio", hostelName: "Clifton Residence" },
      { id: 4, cost: "£580/month", areaName: "Bristol", typeOfRoom: "Single", hostelName: "Park View" },
      { id: 5, cost: "£550/month", areaName: "Bristol", typeOfRoom: "Shared", hostelName: "Brunel Student Living" }
    ]
  },
  {
    id: 67,
    country: "England",
    collegeName: "University of Leeds",
    location: "Leeds, England",
    description: "The University of Leeds is a research-intensive university known for its strong academic programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£24,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "£25,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£26,000/year" },
        { name: "B.Tech Civil Engineering", fees: "£25,500/year" },
        { name: "B.Tech Chemical Engineering", fees: "£26,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£28,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£29,000/year" },
        { name: "M.Tech Chemical Engineering", fees: "£29,500/year" },
        { name: "M.Tech Electrical Engineering", fees: "£30,000/year" },
        { name: "M.Tech Robotics", fees: "£30,500/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£37,000/year" },
        { name: "Ph.D. in Science", fees: "£38,000/year" },
        { name: "Ph.D. in Business", fees: "£36,500/year" },
        { name: "Ph.D. in Arts", fees: "£36,000/year" },
        { name: "Ph.D. in Medicine", fees: "£37,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£52,000/total" },
        { name: "MBA in Management", fees: "£53,000/total" },
        { name: "MBA in Marketing", fees: "£54,000/total" },
        { name: "MBA in International Business", fees: "£55,000/total" },
        { name: "MBA in Healthcare Management", fees: "£56,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£540/month", areaName: "Leeds", typeOfRoom: "Single", hostelName: "Leeds Student Housing" },
      { id: 2, cost: "£460/month", areaName: "Leeds", typeOfRoom: "Shared", hostelName: "Woodhouse Hall" },
      { id: 3, cost: "£580/month", areaName: "Leeds", typeOfRoom: "Studio", hostelName: "Parkside" },
      { id: 4, cost: "£500/month", areaName: "Leeds", typeOfRoom: "Single", hostelName: "Cedar Court" },
      { id: 5, cost: "£520/month", areaName: "Leeds", typeOfRoom: "Shared", hostelName: "Crown Point" }
    ]
  },
  {
    id: 68,
    country: "England",
    collegeName: "University of Warwick",
    location: "Coventry, England",
    description: "The University of Warwick is a prestigious institution known for its strong emphasis on research and global partnerships.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£26,500/year" },
        { name: "B.Tech Electrical Engineering", fees: "£27,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£27,500/year" },
        { name: "B.Tech Civil Engineering", fees: "£26,000/year" },
        { name: "B.Tech International Business", fees: "£28,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£32,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£33,000/year" },
        { name: "M.Tech Civil Engineering", fees: "£32,500/year" },
        { name: "M.Tech Robotics", fees: "£33,500/year" },
        { name: "M.Tech Data Science", fees: "£34,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£41,000/year" },
        { name: "Ph.D. in Science", fees: "£42,000/year" },
        { name: "Ph.D. in Business", fees: "£40,500/year" },
        { name: "Ph.D. in Arts", fees: "£40,000/year" },
        { name: "Ph.D. in Social Science", fees: "£41,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£64,000/total" },
        { name: "MBA in Management", fees: "£65,000/total" },
        { name: "MBA in Marketing", fees: "£66,000/total" },
        { name: "MBA in Finance", fees: "£67,000/total" },
        { name: "MBA in International Business", fees: "£68,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£670/month", areaName: "Coventry", typeOfRoom: "Single", hostelName: "Warwick Accommodation" },
      { id: 2, cost: "£590/month", areaName: "Coventry", typeOfRoom: "Shared", hostelName: "Warwick House" },
      { id: 3, cost: "£720/month", areaName: "Coventry", typeOfRoom: "Studio", hostelName: "Coventry Student Living" },
      { id: 4, cost: "£650/month", areaName: "Coventry", typeOfRoom: "Single", hostelName: "Westwood Hall" },
      { id: 5, cost: "£580/month", areaName: "Coventry", typeOfRoom: "Shared", hostelName: "Rootes Residences" }
    ]
  },
  {
    id: 69,
    country: "England",
    collegeName: "University of Edinburgh",
    location: "Edinburgh, Scotland (close to England)",
    description: "The University of Edinburgh is a top-ranked university with a strong focus on research and international collaboration.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£27,000/year" },
        { name: "B.Tech Civil Engineering", fees: "£28,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "£27,500/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£28,500/year" },
        { name: "B.Tech Environmental Science", fees: "£27,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£32,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£33,000/year" },
        { name: "M.Tech Civil Engineering", fees: "£34,000/year" },
        { name: "M.Tech Environmental Science", fees: "£34,500/year" },
        { name: "M.Tech Robotics", fees: "£35,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£40,000/year" },
        { name: "Ph.D. in Science", fees: "£41,000/year" },
        { name: "Ph.D. in Arts", fees: "£39,500/year" },
        { name: "Ph.D. in Business", fees: "£39,000/year" },
        { name: "Ph.D. in Health", fees: "£40,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£65,000/total" },
        { name: "MBA in Management", fees: "£66,000/total" },
        { name: "MBA in Marketing", fees: "£67,000/total" },
        { name: "MBA in International Business", fees: "£68,000/total" },
        { name: "MBA in Healthcare Management", fees: "£69,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£680/month", areaName: "Edinburgh", typeOfRoom: "Single", hostelName: "Edinburgh Student Accommodation" },
      { id: 2, cost: "£600/month", areaName: "Edinburgh", typeOfRoom: "Shared", hostelName: "St. James Student Housing" },
      { id: 3, cost: "£720/month", areaName: "Edinburgh", typeOfRoom: "Studio", hostelName: "Edinburgh Campus Residences" },
      { id: 4, cost: "£650/month", areaName: "Edinburgh", typeOfRoom: "Single", hostelName: "Ingram House" },
      { id: 5, cost: "£580/month", areaName: "Edinburgh", typeOfRoom: "Shared", hostelName: "Meadow House" }
    ]
  },
  {
    id: 70,
    country: "England",
    collegeName: "University of Manchester",
    location: "Manchester, England",
    description: "The University of Manchester is a leading research university known for its diverse programs and strong industry connections.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "£25,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "£26,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "£27,000/year" },
        { name: "B.Tech Civil Engineering", fees: "£26,500/year" },
        { name: "B.Tech Chemical Engineering", fees: "£27,500/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Science", fees: "£30,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "£31,000/year" },
        { name: "M.Tech Civil Engineering", fees: "£30,500/year" },
        { name: "M.Tech Data Science", fees: "£32,000/year" },
        { name: "M.Tech Robotics", fees: "£33,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "£38,000/year" },
        { name: "Ph.D. in Science", fees: "£39,000/year" },
        { name: "Ph.D. in Arts", fees: "£37,500/year" },
        { name: "Ph.D. in Business", fees: "£37,000/year" },
        { name: "Ph.D. in Health", fees: "£38,500/year" }
      ],
      MBA: [
        { name: "MBA", fees: "£60,000/total" },
        { name: "MBA in Management", fees: "£61,000/total" },
        { name: "MBA in Marketing", fees: "£62,000/total" },
        { name: "MBA in International Business", fees: "£63,000/total" },
        { name: "MBA in Healthcare Management", fees: "£64,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "£600/month", areaName: "Manchester", typeOfRoom: "Single", hostelName: "Manchester Student Housing" },
      { id: 2, cost: "£500/month", areaName: "Manchester", typeOfRoom: "Shared", hostelName: "Oxford Road Residences" },
      { id: 3, cost: "£650/month", areaName: "Manchester", typeOfRoom: "Studio", hostelName: "Piccadilly Student Living" },
      { id: 4, cost: "£590/month", areaName: "Manchester", typeOfRoom: "Single", hostelName: "Victoria Hall" },
      { id: 5, cost: "£550/month", areaName: "Manchester", typeOfRoom: "Shared", hostelName: "Whitworth Park" }
    ]
  },  
  {
    id: 71,
    country: "Indonesia",
    collegeName: "Universitas Indonesia",
    location: "Depok, West Java",
    description: "A leading university in Indonesia, known for its comprehensive academic programs and research.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "IDR 20,000,000/year" },
        { name: "B.Tech Civil Engineering", fees: "IDR 18,000,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "IDR 19,000,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "IDR 21,000,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "IDR 22,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Computer Engineering", fees: "IDR 25,000,000/year" },
        { name: "M.Tech Civil Engineering", fees: "IDR 24,000,000/year" },
        { name: "M.Tech Electrical Engineering", fees: "IDR 23,000,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "IDR 26,000,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "IDR 27,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "IDR 30,000,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "IDR 32,000,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "IDR 31,000,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "IDR 33,000,000/year" },
        { name: "Ph.D. in Environmental Engineering", fees: "IDR 34,000,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "IDR 60,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 65,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 62,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 63,000,000/total" },
        { name: "MBA in Operations Management", fees: "IDR 64,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,500,000/month", areaName: "Depok", typeOfRoom: "Single", hostelName: "UI Residence" },
      { id: 2, cost: "IDR 1,200,000/month", areaName: "Depok", typeOfRoom: "Shared", hostelName: "Campus Haven" },
      { id: 3, cost: "IDR 1,700,000/month", areaName: "Depok", typeOfRoom: "Studio", hostelName: "The Green Dorm" },
      { id: 4, cost: "IDR 1,800,000/month", areaName: "Depok", typeOfRoom: "Shared", hostelName: "Comfort Stay" },
      { id: 5, cost: "IDR 2,000,000/month", areaName: "Depok", typeOfRoom: "Single", hostelName: "Wisma Santika" }
    ]
  },
  {
    id: 72,
    country: "Indonesia",
    collegeName: "Institut Teknologi Bandung",
    location: "Bandung, West Java",
    description: "A prominent technical university in Indonesia, renowned for its engineering and technology programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "IDR 22,000,000/year" },
        { name: "B.Tech Architecture", fees: "IDR 24,000,000/year" },
        { name: "B.Tech Civil Engineering", fees: "IDR 20,000,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "IDR 23,000,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "IDR 21,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Civil Engineering", fees: "IDR 26,000,000/year" },
        { name: "M.Tech Information Technology", fees: "IDR 27,000,000/year" },
        { name: "M.Tech Industrial Engineering", fees: "IDR 25,000,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "IDR 28,000,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "IDR 29,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "IDR 35,000,000/year" },
        { name: "Ph.D. in Computer Science", fees: "IDR 36,000,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "IDR 37,000,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "IDR 38,000,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "IDR 39,000,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "IDR 70,000,000/total" },
        { name: "MBA in Strategic Management", fees: "IDR 75,000,000/total" },
        { name: "MBA in Entrepreneurship", fees: "IDR 72,000,000/total" },
        { name: "MBA in Supply Chain Management", fees: "IDR 71,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 74,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,600,000/month", areaName: "Bandung", typeOfRoom: "Single", hostelName: "Bandung Inn" },
      { id: 2, cost: "IDR 1,400,000/month", areaName: "Bandung", typeOfRoom: "Shared", hostelName: "Sunrise Dormitory" },
      { id: 3, cost: "IDR 1,900,000/month", areaName: "Bandung", typeOfRoom: "Studio", hostelName: "Hilltop Stay" },
      { id: 4, cost: "IDR 2,200,000/month", areaName: "Bandung", typeOfRoom: "Shared", hostelName: "Blue Sky Hostel" },
      { id: 5, cost: "IDR 2,500,000/month", areaName: "Bandung", typeOfRoom: "Single", hostelName: "Lavender House" }
    ]
  },
  {
    id: 73,
    country: "Indonesia",
    collegeName: "Universitas Gadjah Mada",
    location: "Yogyakarta, Yogyakarta",
    description: "One of the oldest universities in Indonesia, known for its strong emphasis on research and community engagement.",
    courses: {
      BTech: [
        { name: "B.Tech Agricultural Engineering", fees: "IDR 18,500,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "IDR 19,500,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "IDR 17,500,000/year" },
        { name: "B.Tech Civil Engineering", fees: "IDR 20,000,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "IDR 19,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Science", fees: "IDR 23,000,000/year" },
        { name: "M.Tech Agricultural Engineering", fees: "IDR 24,000,000/year" },
        { name: "M.Tech in Structural Engineering", fees: "IDR 25,000,000/year" },
        { name: "M.Tech in Water Resources", fees: "IDR 26,000,000/year" },
        { name: "M.Tech in Mechanical Engineering", fees: "IDR 27,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Agricultural Science", fees: "IDR 30,000,000/year" },
        { name: "Ph.D. in Environmental Engineering", fees: "IDR 31,000,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "IDR 32,000,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "IDR 33,000,000/year" },
        { name: "Ph.D. in Water Resources", fees: "IDR 34,000,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "IDR 65,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 68,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 66,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 67,000,000/total" },
        { name: "MBA in Business Development", fees: "IDR 69,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,300,000/month", areaName: "Yogyakarta", typeOfRoom: "Single", hostelName: "Yogyakarta Dorm" },
      { id: 2, cost: "IDR 1,100,000/month", areaName: "Yogyakarta", typeOfRoom: "Shared", hostelName: "Student House" },
      { id: 3, cost: "IDR 1,400,000/month", areaName: "Yogyakarta", typeOfRoom: "Studio", hostelName: "Cozy Dorm" },
      { id: 4, cost: "IDR 1,500,000/month", areaName: "Yogyakarta", typeOfRoom: "Shared", hostelName: "Green Stay" },
      { id: 5, cost: "IDR 1,800,000/month", areaName: "Yogyakarta", typeOfRoom: "Single", hostelName: "Nusantara Residence" }
    ]
  },
  {
    id: 74,
    country: "Indonesia",
    collegeName: "Universitas Diponegoro",
    location: "Semarang, Central Java",
    description: "A public university known for its academic excellence and commitment to research.",
    courses: {
      BTech: [
        { name: "B.Tech Civil Engineering", fees: "IDR 17,000,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "IDR 18,000,000/year" },
        { name: "B.Tech Computer Science", fees: "IDR 19,000,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "IDR 20,000,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "IDR 21,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Science", fees: "IDR 24,000,000/year" },
        { name: "M.Tech Water Resources Management", fees: "IDR 25,000,000/year" },
        { name: "M.Tech Structural Engineering", fees: "IDR 23,000,000/year" },
        { name: "M.Tech in Chemical Engineering", fees: "IDR 26,000,000/year" },
        { name: "M.Tech in Mechanical Engineering", fees: "IDR 27,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "IDR 29,000,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "IDR 30,000,000/year" },
        { name: "Ph.D. in Environmental Engineering", fees: "IDR 31,000,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "IDR 32,000,000/year" },
        { name: "Ph.D. in Chemical Engineering", fees: "IDR 33,000,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "IDR 60,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 62,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 61,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 63,000,000/total" },
        { name: "MBA in Entrepreneurship", fees: "IDR 64,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,200,000/month", areaName: "Semarang", typeOfRoom: "Single", hostelName: "Semarang Lodge" },
      { id: 2, cost: "IDR 1,000,000/month", areaName: "Semarang", typeOfRoom: "Shared", hostelName: "Student Residence" },
      { id: 3, cost: "IDR 1,500,000/month", areaName: "Semarang", typeOfRoom: "Studio", hostelName: "Semarang Inn" },
      { id: 4, cost: "IDR 1,700,000/month", areaName: "Semarang", typeOfRoom: "Shared", hostelName: "Comfort Home" },
      { id: 5, cost: "IDR 1,800,000/month", areaName: "Semarang", typeOfRoom: "Single", hostelName: "Nusantara Stay" }
    ]
  },
  {
    id: 75,
    country: "Indonesia",
    collegeName: "Universitas Airlangga",
    location: "Surabaya, East Java",
    description: "A top university in Indonesia, particularly renowned for its medical and health sciences.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "IDR 22,000,000/year" },
        { name: "B.Tech Medical Engineering", fees: "IDR 25,000,000/year" },
        { name: "B.Tech Pharmacy", fees: "IDR 24,000,000/year" },
        { name: "B.Tech Biomedical Engineering", fees: "IDR 26,000,000/year" },
        { name: "B.Tech Environmental Science", fees: "IDR 23,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Medical Informatics", fees: "IDR 30,000,000/year" },
        { name: "M.Tech in Environmental Science", fees: "IDR 31,000,000/year" },
        { name: "M.Tech in Pharmaceutical Science", fees: "IDR 32,000,000/year" },
        { name: "M.Tech in Biomedical Engineering", fees: "IDR 33,000,000/year" },
        { name: "M.Tech in Health Informatics", fees: "IDR 34,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Health Sciences", fees: "IDR 40,000,000/year" },
        { name: "Ph.D. in Medical Science", fees: "IDR 41,000,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "IDR 42,000,000/year" },
        { name: "Ph.D. in Pharmacy", fees: "IDR 43,000,000/year" },
        { name: "Ph.D. in Biomedical Engineering", fees: "IDR 44,000,000/year" }
      ],
      MBA: [
        { name: "MBA in Health Management", fees: "IDR 70,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 75,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 72,000,000/total" },
        { name: "MBA in Operations Management", fees: "IDR 71,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 74,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,800,000/month", areaName: "Surabaya", typeOfRoom: "Single", hostelName: "Surabaya Lodge" },
      { id: 2, cost: "IDR 1,600,000/month", areaName: "Surabaya", typeOfRoom: "Shared", hostelName: "Student Dorm" },
      { id: 3, cost: "IDR 2,000,000/month", areaName: "Surabaya", typeOfRoom: "Studio", hostelName: "Comfort Stay" },
      { id: 4, cost: "IDR 2,200,000/month", areaName: "Surabaya", typeOfRoom: "Shared", hostelName: "Nusantara Residence" },
      { id: 5, cost: "IDR 2,500,000/month", areaName: "Surabaya", typeOfRoom: "Single", hostelName: "Surabaya Inn" }
    ]
  },
  {
    id: 76,
    country: "Indonesia",
    collegeName: "Institut Teknologi Bandung",
    location: "Bandung, West Java",
    description: "One of Indonesia's leading universities, known for its strong engineering and science programs.",
    courses: {
      BTech: [
        { name: "B.Tech Electrical Engineering", fees: "IDR 23,000,000/year" },
        { name: "B.Tech Civil Engineering", fees: "IDR 22,000,000/year" },
        { name: "B.Tech Computer Science", fees: "IDR 24,000,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "IDR 25,000,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "IDR 26,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Engineering", fees: "IDR 29,000,000/year" },
        { name: "M.Tech in Computer Science", fees: "IDR 30,000,000/year" },
        { name: "M.Tech in Chemical Engineering", fees: "IDR 31,000,000/year" },
        { name: "M.Tech in Electrical Engineering", fees: "IDR 32,000,000/year" },
        { name: "M.Tech in Mechanical Engineering", fees: "IDR 33,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "IDR 36,000,000/year" },
        { name: "Ph.D. in Computer Science", fees: "IDR 37,000,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "IDR 38,000,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "IDR 39,000,000/year" },
        { name: "Ph.D. in Chemical Engineering", fees: "IDR 40,000,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "IDR 80,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 82,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 81,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 83,000,000/total" },
        { name: "MBA in Entrepreneurship", fees: "IDR 84,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,700,000/month", areaName: "Bandung", typeOfRoom: "Single", hostelName: "Bandung Lodge" },
      { id: 2, cost: "IDR 1,500,000/month", areaName: "Bandung", typeOfRoom: "Shared", hostelName: "Student House" },
      { id: 3, cost: "IDR 1,800,000/month", areaName: "Bandung", typeOfRoom: "Studio", hostelName: "Cozy Stay" },
      { id: 4, cost: "IDR 2,000,000/month", areaName: "Bandung", typeOfRoom: "Shared", hostelName: "Green Dorm" },
      { id: 5, cost: "IDR 2,200,000/month", areaName: "Bandung", typeOfRoom: "Single", hostelName: "Nusantara Lodge" }
    ]
  },
  {
    id: 77,
    country: "Indonesia",
    collegeName: "Universitas Gadjah Mada",
    location: "Yogyakarta",
    description: "One of Indonesia's oldest and most prestigious universities, known for its diverse academic programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "IDR 20,000,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "IDR 21,000,000/year" },
        { name: "B.Tech Civil Engineering", fees: "IDR 19,000,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "IDR 22,000,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "IDR 23,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Environmental Engineering", fees: "IDR 25,000,000/year" },
        { name: "M.Tech in Civil Engineering", fees: "IDR 24,000,000/year" },
        { name: "M.Tech in Computer Science", fees: "IDR 27,000,000/year" },
        { name: "M.Tech in Chemical Engineering", fees: "IDR 26,000,000/year" },
        { name: "M.Tech in Electrical Engineering", fees: "IDR 28,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "IDR 34,000,000/year" },
        { name: "Ph.D. in Computer Science", fees: "IDR 35,000,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "IDR 36,000,000/year" },
        { name: "Ph.D. in Environmental Engineering", fees: "IDR 37,000,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "IDR 38,000,000/year" }
      ],
      MBA: [
        { name: "MBA in Management", fees: "IDR 72,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 74,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 73,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 75,000,000/total" },
        { name: "MBA in Entrepreneurship", fees: "IDR 76,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,500,000/month", areaName: "Yogyakarta", typeOfRoom: "Single", hostelName: "Yogyakarta Inn" },
      { id: 2, cost: "IDR 1,300,000/month", areaName: "Yogyakarta", typeOfRoom: "Shared", hostelName: "Student Dorm" },
      { id: 3, cost: "IDR 1,600,000/month", areaName: "Yogyakarta", typeOfRoom: "Studio", hostelName: "Cozy Residence" },
      { id: 4, cost: "IDR 1,700,000/month", areaName: "Yogyakarta", typeOfRoom: "Shared", hostelName: "Comfort Stay" },
      { id: 5, cost: "IDR 1,800,000/month", areaName: "Yogyakarta", typeOfRoom: "Single", hostelName: "Nusantara Inn" }
    ]
  },
  {
    id: 78,
    country: "Indonesia",
    collegeName: "Universitas Brawijaya",
    location: "Malang, East Java",
    description: "A prominent university in Indonesia with a strong emphasis on research and community service.",
    courses: {
      BTech: [
        { name: "B.Tech Civil Engineering", fees: "IDR 21,000,000/year" },
        { name: "B.Tech Computer Science", fees: "IDR 20,000,000/year" },
        { name: "B.Tech Agricultural Engineering", fees: "IDR 22,000,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "IDR 23,000,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "IDR 24,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Engineering", fees: "IDR 28,000,000/year" },
        { name: "M.Tech in Civil Engineering", fees: "IDR 27,000,000/year" },
        { name: "M.Tech in Computer Science", fees: "IDR 29,000,000/year" },
        { name: "M.Tech in Mechanical Engineering", fees: "IDR 30,000,000/year" },
        { name: "M.Tech in Chemical Engineering", fees: "IDR 31,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "IDR 35,000,000/year" },
        { name: "Ph.D. in Computer Science", fees: "IDR 36,000,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "IDR 37,000,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "IDR 38,000,000/year" },
        { name: "Ph.D. in Environmental Engineering", fees: "IDR 39,000,000/year" }
      ],
      MBA: [
        { name: "MBA in Management", fees: "IDR 78,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 80,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 79,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 81,000,000/total" },
        { name: "MBA in Entrepreneurship", fees: "IDR 82,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,600,000/month", areaName: "Malang", typeOfRoom: "Single", hostelName: "Malang Inn" },
      { id: 2, cost: "IDR 1,400,000/month", areaName: "Malang", typeOfRoom: "Shared", hostelName: "Student Lodge" },
      { id: 3, cost: "IDR 1,900,000/month", areaName: "Malang", typeOfRoom: "Studio", hostelName: "Cozy Malang" },
      { id: 4, cost: "IDR 2,000,000/month", areaName: "Malang", typeOfRoom: "Shared", hostelName: "Green View Dorm" },
      { id: 5, cost: "IDR 2,200,000/month", areaName: "Malang", typeOfRoom: "Single", hostelName: "Nusantara Stay" }
    ]
  },
  {
    id: 79,
    country: "Indonesia",
    collegeName: "Universitas Diponegoro",
    location: "Semarang",
    description: "A leading university in Indonesia known for its comprehensive academic offerings and research initiatives.",
    courses: {
      BTech: [
        { name: "B.Tech Civil Engineering", fees: "IDR 21,000,000/year" },
        { name: "B.Tech Computer Science", fees: "IDR 22,000,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "IDR 23,000,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "IDR 24,000,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "IDR 25,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Engineering", fees: "IDR 27,000,000/year" },
        { name: "M.Tech in Computer Science", fees: "IDR 28,000,000/year" },
        { name: "M.Tech in Civil Engineering", fees: "IDR 29,000,000/year" },
        { name: "M.Tech in Electrical Engineering", fees: "IDR 30,000,000/year" },
        { name: "M.Tech in Chemical Engineering", fees: "IDR 31,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "IDR 33,000,000/year" },
        { name: "Ph.D. in Computer Science", fees: "IDR 34,000,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "IDR 35,000,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "IDR 36,000,000/year" },
        { name: "Ph.D. in Chemical Engineering", fees: "IDR 37,000,000/year" }
      ],
      MBA: [
        { name: "MBA in Management", fees: "IDR 75,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 77,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 76,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 78,000,000/total" },
        { name: "MBA in Entrepreneurship", fees: "IDR 79,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,800,000/month", areaName: "Semarang", typeOfRoom: "Single", hostelName: "Semarang Inn" },
      { id: 2, cost: "IDR 1,600,000/month", areaName: "Semarang", typeOfRoom: "Shared", hostelName: "Student House" },
      { id: 3, cost: "IDR 1,900,000/month", areaName: "Semarang", typeOfRoom: "Studio", hostelName: "Cozy Stay" },
      { id: 4, cost: "IDR 2,000,000/month", areaName: "Semarang", typeOfRoom: "Shared", hostelName: "Comfort Stay" },
      { id: 5, cost: "IDR 2,200,000/month", areaName: "Semarang", typeOfRoom: "Single", hostelName: "Nusantara Lodge" }
    ]
  },
  {
    id: 80,
    country: "Indonesia",
    collegeName: "Universitas Airlangga",
    location: "Surabaya",
    description: "A prestigious university in Indonesia known for its research and community service programs.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "IDR 23,000,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "IDR 22,000,000/year" },
        { name: "B.Tech Civil Engineering", fees: "IDR 24,000,000/year" },
        { name: "B.Tech Environmental Engineering", fees: "IDR 25,000,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "IDR 26,000,000/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Engineering", fees: "IDR 29,000,000/year" },
        { name: "M.Tech in Civil Engineering", fees: "IDR 30,000,000/year" },
        { name: "M.Tech in Computer Science", fees: "IDR 31,000,000/year" },
        { name: "M.Tech in Electrical Engineering", fees: "IDR 32,000,000/year" },
        { name: "M.Tech in Chemical Engineering", fees: "IDR 33,000,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "IDR 36,000,000/year" },
        { name: "Ph.D. in Computer Science", fees: "IDR 37,000,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "IDR 38,000,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "IDR 39,000,000/year" },
        { name: "Ph.D. in Environmental Engineering", fees: "IDR 40,000,000/year" }
      ],
      MBA: [
        { name: "MBA in Management", fees: "IDR 78,000,000/total" },
        { name: "MBA in Marketing", fees: "IDR 80,000,000/total" },
        { name: "MBA in Finance", fees: "IDR 79,000,000/total" },
        { name: "MBA in Human Resource Management", fees: "IDR 81,000,000/total" },
        { name: "MBA in Entrepreneurship", fees: "82,000,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "IDR 1,900,000/month", areaName: "Surabaya", typeOfRoom: "Single", hostelName: "Surabaya Inn" },
      { id: 2, cost: "IDR 1,700,000/month", areaName: "Surabaya", typeOfRoom: "Shared", hostelName: "Student Lodge" },
      { id: 3, cost: "IDR 2,000,000/month", areaName: "Surabaya", typeOfRoom: "Studio", hostelName: "Comfort Stay" },
      { id: 4, cost: "IDR 1,800,000/month", areaName: "Surabaya", typeOfRoom: "Shared", hostelName: "Green View Dorm" },
      { id: 5, cost: "IDR 2,200,000/month", areaName: "Surabaya", typeOfRoom: "Single", hostelName: "Nusantara Lodge" }
    ]
  },
  {
    id: 81,
    country: "UAE",
    collegeName: "American University in Dubai",
    location: "Dubai, UAE",
    description: "A prestigious institution offering American-style education with a focus on practical skills.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "AED 70,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "AED 68,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "AED 66,000/year" },
        { name: "B.Tech Civil Engineering", fees: "AED 64,000/year" },
        { name: "B.Tech Information Technology", fees: "AED 65,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Software Engineering", fees: "AED 75,000/year" },
        { name: "M.Tech in Data Science", fees: "AED 77,000/year" },
        { name: "M.Tech in Cybersecurity", fees: "AED 80,000/year" },
        { name: "M.Tech in Artificial Intelligence", fees: "AED 82,000/year" },
        { name: "M.Tech in Project Management", fees: "AED 73,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Business Administration", fees: "AED 100,000/year" },
        { name: "Ph.D. in Computer Science", fees: "AED 110,000/year" },
        { name: "Ph.D. in Engineering Management", fees: "AED 105,000/year" },
        { name: "Ph.D. in Data Science", fees: "AED 115,000/year" },
        { name: "Ph.D. in Cybersecurity", fees: "AED 120,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AED 90,000/total" },
        { name: "MBA in Marketing", fees: "AED 95,000/total" },
        { name: "MBA in Finance", fees: "AED 98,000/total" },
        { name: "MBA in International Business", fees: "AED 92,000/total" },
        { name: "MBA in Human Resource Management", fees: "AED 85,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,500/month", areaName: "Dubai Marina", typeOfRoom: "Single", hostelName: "Marina View Hostel" },
      { id: 2, cost: "AED 2,200/month", areaName: "Downtown Dubai", typeOfRoom: "Shared", hostelName: "Downtown Dream Dorm" },
      { id: 3, cost: "AED 2,700/month", areaName: "Jumeirah", typeOfRoom: "Studio", hostelName: "Jumeirah Oasis Hostel" },
      { id: 4, cost: "AED 2,800/month", areaName: "Bur Dubai", typeOfRoom: "Single", hostelName: "Bur Dubai Residency" },
      { id: 5, cost: "AED 2,300/month", areaName: "Al Quoz", typeOfRoom: "Shared", hostelName: "Al Quoz Comfort Dorm" }
    ]
  },
  {
    id: 82,
    country: "UAE",
    collegeName: "University of Dubai",
    location: "Dubai, UAE",
    description: "A vibrant educational institution focused on business and technology programs.",
    courses: {
      BTech: [
        { name: "B.Tech Business Information Systems", fees: "AED 65,000/year" },
        { name: "B.Tech in Computer Science", fees: "AED 67,000/year" },
        { name: "B.Tech in Network Engineering", fees: "AED 66,000/year" },
        { name: "B.Tech in Software Development", fees: "AED 68,000/year" },
        { name: "B.Tech in Data Science", fees: "AED 70,000/year" }
      ],
      MTech: [
        { name: "M.Tech in IT Management", fees: "AED 74,000/year" },
        { name: "M.Tech in Web Technologies", fees: "AED 76,000/year" },
        { name: "M.Tech in Artificial Intelligence", fees: "AED 78,000/year" },
        { name: "M.Tech in Mobile Computing", fees: "AED 75,000/year" },
        { name: "M.Tech in Software Engineering", fees: "AED 73,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Business Administration", fees: "AED 105,000/year" },
        { name: "Ph.D. in Information Technology", fees: "AED 110,000/year" },
        { name: "Ph.D. in Business Analytics", fees: "AED 108,000/year" },
        { name: "Ph.D. in Management", fees: "AED 106,000/year" },
        { name: "Ph.D. in Computer Science", fees: "AED 112,000/year" }
      ],
      MBA: [
        { name: "MBA in Management", fees: "AED 95,000/total" },
        { name: "MBA in Marketing", fees: "AED 97,000/total" },
        { name: "MBA in Project Management", fees: "AED 98,000/total" },
        { name: "MBA in Finance", fees: "AED 100,000/total" },
        { name: "MBA in Supply Chain Management", fees: "AED 92,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,600/month", areaName: "Dubai Silicon Oasis", typeOfRoom: "Single", hostelName: "Silicon Oasis Hostel" },
      { id: 2, cost: "AED 2,400/month", areaName: "Dubai Creek", typeOfRoom: "Shared", hostelName: "Creekside Dorm" },
      { id: 3, cost: "AED 2,500/month", areaName: "Al Ain Road", typeOfRoom: "Studio", hostelName: "Al Ain Comfort Hostel" },
      { id: 4, cost: "AED 2,800/month", areaName: "Jumeirah Lake Towers", typeOfRoom: "Single", hostelName: "JLT Heights Dorm" },
      { id: 5, cost: "AED 2,350/month", areaName: "Al Quoz", typeOfRoom: "Shared", hostelName: "Quoz Village Hostel" }
    ]
  },
  {
    id: 83,
    country: "UAE",
    collegeName: "University of Sharjah",
    location: "Sharjah, UAE",
    description: "A leading university offering a wide range of undergraduate and graduate programs.",
    courses: {
      BTech: [
        { name: "B.Tech in Computer Engineering", fees: "AED 62,000/year" },
        { name: "B.Tech in Civil Engineering", fees: "AED 64,000/year" },
        { name: "B.Tech in Mechanical Engineering", fees: "AED 63,000/year" },
        { name: "B.Tech in Electrical Engineering", fees: "AED 65,000/year" },
        { name: "B.Tech in Environmental Engineering", fees: "AED 66,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Civil Engineering", fees: "AED 72,000/year" },
        { name: "M.Tech in Mechanical Engineering", fees: "AED 74,000/year" },
        { name: "M.Tech in Electrical Engineering", fees: "AED 73,000/year" },
        { name: "M.Tech in Environmental Engineering", fees: "AED 75,000/year" },
        { name: "M.Tech in Structural Engineering", fees: "AED 76,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering Management", fees: "AED 110,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "AED 108,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "AED 112,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "AED 115,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "AED 115,000/year" }
      ],
      MBA: [
        { name: "MBA in Business Administration", fees: "AED 90,000/total" },
        { name: "MBA in Finance", fees: "AED 92,000/total" },
        { name: "MBA in Marketing", fees: "AED 94,000/total" },
        { name: "MBA in Project Management", fees: "AED 95,000/total" },
        { name: "MBA in Human Resource Management", fees: "AED 91,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,000/month", areaName: "Sharjah City", typeOfRoom: "Single", hostelName: "Sharjah Campus Hostel" },
      { id: 2, cost: "AED 1,800/month", areaName: "Al Gulaya", typeOfRoom: "Shared", hostelName: "Gulaya Hostel" },
      { id: 3, cost: "AED 2,200/month", areaName: "Al Zahra", typeOfRoom: "Studio", hostelName: "Al Zahra Dormitory" },
      { id: 4, cost: "AED 2,400/month", areaName: "Al Qasimia", typeOfRoom: "Single", hostelName: "Qasimia Residence" },
      { id: 5, cost: "AED 2,150/month", areaName: "University City", typeOfRoom: "Shared", hostelName: "University Village" }
    ]
  },
  {
    id: 84,
    country: "UAE",
    collegeName: "Dubai Institute of Design and Innovation",
    location: "Dubai, UAE",
    description: "A premier institution specializing in design education and innovation.",
    courses: {
      BTech: [
        { name: "B.Tech in Product Design", fees: "AED 75,000/year" },
        { name: "B.Tech in Graphic Design", fees: "AED 70,000/year" },
        { name: "B.Tech in Fashion Design", fees: "AED 72,000/year" },
        { name: "B.Tech in Interior Design", fees: "AED 68,000/year" },
        { name: "B.Tech in Visual Communication", fees: "AED 74,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Design Management", fees: "AED 85,000/year" },
        { name: "M.Tech in Digital Media", fees: "AED 88,000/year" },
        { name: "M.Tech in Interaction Design", fees: "AED 90,000/year" },
        { name: "M.Tech in User Experience Design", fees: "AED 87,000/year" },
        { name: "M.Tech in Fashion Technology", fees: "AED 89,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Design Studies", fees: "AED 115,000/year" },
        { name: "Ph.D. in Digital Design", fees: "AED 120,000/year" },
        { name: "Ph.D. in Visual Communication", fees: "AED 117,000/year" },
        { name: "Ph.D. in Fashion Design", fees: "AED 119,000/year" },
        { name: "Ph.D. in Product Design", fees: "AED 118,000/year" }
      ],
      MBA: [
        { name: "MBA in Design Management", fees: "AED 100,000/total" },
        { name: "MBA in Creative Industries", fees: "AED 105,000/total" },
        { name: "MBA in Fashion Management", fees: "AED 98,000/total" },
        { name: "MBA in Digital Innovation", fees: "AED 102,000/total" },
        { name: "MBA in Marketing for Designers", fees: "AED 96,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,900/month", areaName: "Dubai Design District", typeOfRoom: "Single", hostelName: "Design District Residence" },
      { id: 2, cost: "AED 2,700/month", areaName: "Downtown Dubai", typeOfRoom: "Shared", hostelName: "Downtown Design Dorm" },
      { id: 3, cost: "AED 3,000/month", areaName: "Business Bay", typeOfRoom: "Studio", hostelName: "Business Bay Apartments" },
      { id: 4, cost: "AED 2,800/month", areaName: "Jumeirah", typeOfRoom: "Single", hostelName: "Jumeirah Living" },
      { id: 5, cost: "AED 2,600/month", areaName: "Al Quoz", typeOfRoom: "Shared", hostelName: "Al Quoz Studios" }
    ]
  },
  {
    id: 85,
    country: "UAE",
    collegeName: "University of Wollongong in Dubai",
    location: "Dubai, UAE",
    description: "An internationally recognized institution offering quality education in various disciplines.",
    courses: {
      BTech: [
        { name: "B.Tech in Computer Science", fees: "AED 67,000/year" },
        { name: "B.Tech in Information Technology", fees: "AED 65,000/year" },
        { name: "B.Tech in Software Engineering", fees: "AED 68,000/year" },
        { name: "B.Tech in Computer Engineering", fees: "AED 66,000/year" },
        { name: "B.Tech in Business Information Systems", fees: "AED 69,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Information Technology", fees: "AED 75,000/year" },
        { name: "M.Tech in Data Analytics", fees: "AED 78,000/year" },
        { name: "M.Tech in Cybersecurity", fees: "AED 80,000/year" },
        { name: "M.Tech in Software Engineering", fees: "AED 76,000/year" },
        { name: "M.Tech in Artificial Intelligence", fees: "AED 82,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Business", fees: "AED 110,000/year" },
        { name: "Ph.D. in Computer Science", fees: "AED 115,000/year" },
        { name: "Ph.D. in Information Systems", fees: "AED 112,000/year" },
        { name: "Ph.D. in Engineering", fees: "AED 118,000/year" },
        { name: "Ph.D. in Data Science", fees: "AED 120,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "AED 90,000/total" },
        { name: "MBA in Marketing", fees: "AED 92,000/total" },
        { name: "MBA in International Business", fees: "AED 93,000/total" },
        { name: "MBA in Project Management", fees: "AED 95,000/total" },
        { name: "MBA in Finance", fees: "AED 94,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,300/month", areaName: "Dubai Knowledge Village", typeOfRoom: "Single", hostelName: "Knowledge Village Residence" },
      { id: 2, cost: "AED 2,100/month", areaName: "Jumeirah", typeOfRoom: "Shared", hostelName: "Jumeirah Apartments" },
      { id: 3, cost: "AED 2,400/month", areaName: "Dubai Marina", typeOfRoom: "Studio", hostelName: "Marina View Residence" },
      { id: 4, cost: "AED 2,500/month", areaName: "Al Barsha", typeOfRoom: "Single", hostelName: "Al Barsha Dorm" },
      { id: 5, cost: "AED 2,200/month", areaName: "Deira", typeOfRoom: "Shared", hostelName: "Deira Community Hostel" }
    ]
  },  
  {
    id: 86,
    country: "UAE",
    collegeName: "Manipal Academy of Higher Education, Dubai",
    location: "Dubai, UAE",
    description: "A global institution with a focus on quality education and research in various fields.",
    courses: {
      BTech: [
        { name: "B.Tech in Computer Science", fees: "AED 60,000/year" },
        { name: "B.Tech in Information Technology", fees: "AED 62,000/year" },
        { name: "B.Tech in Civil Engineering", fees: "AED 61,000/year" },
        { name: "B.Tech in Mechanical Engineering", fees: "AED 63,000/year" },
        { name: "B.Tech in Electronics and Communication", fees: "AED 64,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Data Science", fees: "AED 72,000/year" },
        { name: "M.Tech in Software Engineering", fees: "AED 74,000/year" },
        { name: "M.Tech in Cybersecurity", fees: "AED 76,000/year" },
        { name: "M.Tech in Digital Marketing", fees: "AED 70,000/year" },
        { name: "M.Tech in Artificial Intelligence", fees: "AED 75,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "AED 100,000/year" },
        { name: "Ph.D. in Management", fees: "AED 105,000/year" },
        { name: "Ph.D. in Computer Science", fees: "AED 110,000/year" },
        { name: "Ph.D. in Data Science", fees: "AED 107,000/year" },
        { name: "Ph.D. in Civil Engineering", fees: "AED 108,000/year" }
      ],
      MBA: [
        { name: "MBA in Healthcare Management", fees: "AED 95,000/total" },
        { name: "MBA in Marketing Management", fees: "AED 97,000/total" },
        { name: "MBA in International Business", fees: "AED 96,000/total" },
        { name: "MBA in Business Analytics", fees: "AED 99,000/total" },
        { name: "MBA in Human Resource Management", fees: "AED 94,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,000/month", areaName: "Dubai Silicon Oasis", typeOfRoom: "Single", hostelName: "Silicon Oasis Hostel" },
      { id: 2, cost: "AED 1,800/month", areaName: "Dubai Academic City", typeOfRoom: "Shared", hostelName: "Academic City Hostel" },
      { id: 3, cost: "AED 2,200/month", areaName: "Al Maktoum International Airport", typeOfRoom: "Studio", hostelName: "Airport Residence" },
      { id: 4, cost: "AED 2,400/month", areaName: "Jumeirah Village Circle", typeOfRoom: "Single", hostelName: "JVC Residence" },
      { id: 5, cost: "AED 2,150/month", areaName: "Downtown Dubai", typeOfRoom: "Shared", hostelName: "Downtown Hostel" }
    ]
  },
  {
    id: 87,
    country: "UAE",
    collegeName: "British University in Dubai",
    location: "Dubai, UAE",
    description: "An institution that offers British-style education with a focus on postgraduate degrees.",
    courses: {
      BTech: [
        { name: "B.Tech in Civil Engineering", fees: "AED 70,000/year" },
        { name: "B.Tech in Electrical Engineering", fees: "AED 68,000/year" },
        { name: "B.Tech in Mechanical Engineering", fees: "AED 72,000/year" },
        { name: "B.Tech in Computer Science", fees: "AED 66,000/year" },
        { name: "B.Tech in Information Technology", fees: "AED 67,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Construction Management", fees: "AED 80,000/year" },
        { name: "M.Tech in Project Management", fees: "AED 78,000/year" },
        { name: "M.Tech in Information Technology", fees: "AED 75,000/year" },
        { name: "M.Tech in Engineering Management", fees: "AED 77,000/year" },
        { name: "M.Tech in Cybersecurity", fees: "AED 82,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "AED 115,000/year" },
        { name: "Ph.D. in Business", fees: "AED 118,000/year" },
        { name: "Ph.D. in Information Systems", fees: "AED 120,000/year" },
        { name: "Ph.D. in Construction Management", fees: "AED 117,000/year" },
        { name: "Ph.D. in Project Management", fees: "AED 119,000/year" }
      ],
      MBA: [
        { name: "MBA in Business Administration", fees: "AED 100,000/total" },
        { name: "MBA in Finance", fees: "AED 95,000/total" },
        { name: "MBA in Marketing", fees: "AED 92,000/total" },
        { name: "MBA in Project Management", fees: "AED 98,000/total" },
        { name: "MBA in Human Resource Management", fees: "AED 94,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,800/month", areaName: "Dubai Knowledge Village", typeOfRoom: "Single", hostelName: "Knowledge Village Residence" },
      { id: 2, cost: "AED 2,600/month", areaName: "Jumeirah", typeOfRoom: "Shared", hostelName: "Jumeirah Apartments" },
      { id: 3, cost: "AED 2,700/month", areaName: "Downtown Dubai", typeOfRoom: "Studio", hostelName: "Downtown Studio Apartments" },
      { id: 4, cost: "AED 2,400/month", areaName: "Al Quoz", typeOfRoom: "Single", hostelName: "Al Quoz Residence" },
      { id: 5, cost: "AED 2,200/month", areaName: "Business Bay", typeOfRoom: "Shared", hostelName: "Business Bay Hostel" }
    ]
  },
  {
    id: 88,
    country: "UAE",
    collegeName: "Dubai Pharmacy College",
    location: "Dubai, UAE",
    description: "The first pharmacy college in the UAE, offering a range of pharmacy-related programs.",
    courses: {
      BTech: [
        { name: "B.Tech in Pharmacy", fees: "AED 85,000/year" },
        { name: "B.Tech in Pharmaceutical Sciences", fees: "AED 82,000/year" },
        { name: "B.Tech in Clinical Pharmacy", fees: "AED 84,000/year" },
        { name: "B.Tech in Hospital Pharmacy", fees: "AED 83,000/year" },
        { name: "B.Tech in Pharmaceutical Technology", fees: "AED 86,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Pharmaceutical Sciences", fees: "AED 90,000/year" },
        { name: "M.Tech in Clinical Pharmacy", fees: "AED 95,000/year" },
        { name: "M.Tech in Pharmaceutical Business Management", fees: "AED 92,000/year" },
        { name: "M.Tech in Drug Development", fees: "AED 94,000/year" },
        { name: "M.Tech in Pharmacology", fees: "AED 91,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Pharmacy", fees: "AED 110,000/year" },
        { name: "Ph.D. in Pharmaceutical Sciences", fees: "AED 115,000/year" },
        { name: "Ph.D. in Pharmacology", fees: "AED 113,000/year" },
        { name: "Ph.D. in Pharmaceutical Chemistry", fees: "AED 112,000/year" },
        { name: "Ph.D. in Clinical Pharmacy", fees: "AED 114,000/year" }
      ],
      MBA: [
        { name: "MBA in Healthcare Management", fees: "AED 98,000/total" },
        { name: "MBA in Pharmaceutical Management", fees: "AED 96,000/total" },
        { name: "MBA in Marketing Management", fees: "AED 94,000/total" },
        { name: "MBA in Business Administration", fees: "AED 100,000/total" },
        { name: "MBA in Hospital Management", fees: "AED 97,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,100/month", areaName: "Dubai Healthcare City", typeOfRoom: "Single", hostelName: "Healthcare City Residence" },
      { id: 2, cost: "AED 2,000/month", areaName: "Jumeirah", typeOfRoom: "Shared", hostelName: "Jumeirah Apartments" },
      { id: 3, cost: "AED 2,300/month", areaName: "Al Maktoum International Airport", typeOfRoom: "Studio", hostelName: "Airport Residence" },
      { id: 4, cost: "AED 2,500/month", areaName: "Al Quoz", typeOfRoom: "Single", hostelName: "Quoz Residence" },
      { id: 5, cost: "AED 2,400/month", areaName: "Dubai Marina", typeOfRoom: "Shared", hostelName: "Marina View Hostel" }
    ]
  },
  {
    id: 89,
    country: "UAE",
    collegeName: "American University in Dubai",
    location: "Dubai, UAE",
    description: "An independent university that offers a wide range of programs in various fields of study.",
    courses: {
      BTech: [
        { name: "B.Tech in Business Administration", fees: "AED 78,000/year" },
        { name: "B.Tech in Computer Science", fees: "AED 80,000/year" },
        { name: "B.Tech in Graphic Design", fees: "AED 75,000/year" },
        { name: "B.Tech in Media Production", fees: "AED 77,000/year" },
        { name: "B.Tech in Electrical Engineering", fees: "AED 76,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Business Analytics", fees: "AED 85,000/year" },
        { name: "M.Tech in Cybersecurity", fees: "AED 90,000/year" },
        { name: "M.Tech in Data Science", fees: "AED 95,000/year" },
        { name: "M.Tech in Artificial Intelligence", fees: "AED 88,000/year" },
        { name: "M.Tech in Digital Marketing", fees: "AED 92,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Business Administration", fees: "AED 115,000/year" },
        { name: "Ph.D. in Information Technology", fees: "AED 120,000/year" },
        { name: "Ph.D. in Computer Science", fees: "AED 118,000/year" },
        { name: "Ph.D. in Engineering Management", fees: "AED 122,000/year" },
        { name: "Ph.D. in Data Science", fees: "AED 116,000/year" }
      ],
      MBA: [
        { name: "MBA in Marketing Management", fees: "AED 100,000/total" },
        { name: "MBA in International Business", fees: "AED 98,000/total" },
        { name: "MBA in Business Analytics", fees: "AED 99,000/total" },
        { name: "MBA in Human Resource Management", fees: "AED 95,000/total" },
        { name: "MBA in Project Management", fees: "AED 97,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,500/month", areaName: "Dubai Media City", typeOfRoom: "Single", hostelName: "Media City Residence" },
      { id: 2, cost: "AED 2,700/month", areaName: "Jumeirah", typeOfRoom: "Shared", hostelName: "Jumeirah Apartments" },
      { id: 3, cost: "AED 2,400/month", areaName: "Downtown Dubai", typeOfRoom: "Studio", hostelName: "Downtown Studio Apartments" },
      { id: 4, cost: "AED 2,300/month", areaName: "Al Quoz", typeOfRoom: "Single", hostelName: "Al Quoz Residence" },
      { id: 5, cost: "AED 2,600/month", areaName: "Business Bay", typeOfRoom: "Shared", hostelName: "Business Bay Hostel" }
    ]
  },
  {
    id: 90,
    country: "UAE",
    collegeName: "Dubai International Academy",
    location: "Dubai, UAE",
    description: "A prestigious international school offering the International Baccalaureate (IB) curriculum.",
    courses: {
      BTech: [
        { name: "B.Tech in Early Childhood Education", fees: "AED 60,000/year" },
        { name: "B.Tech in Primary Education", fees: "AED 62,000/year" },
        { name: "B.Tech in Secondary Education", fees: "AED 63,000/year" },
        { name: "B.Tech in Special Education", fees: "AED 64,000/year" },
        { name: "B.Tech in Educational Leadership", fees: "AED 65,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Educational Leadership", fees: "AED 65,000/year" },
        { name: "M.Tech in Curriculum Development", fees: "AED 68,000/year" },
        { name: "M.Tech in Special Education", fees: "AED 66,000/year" },
        { name: "M.Tech in Digital Learning", fees: "AED 67,000/year" },
        { name: "M.Tech in Instructional Design", fees: "AED 70,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Education", fees: "AED 85,000/year" },
        { name: "Ph.D. in Educational Psychology", fees: "AED 90,000/year" },
        { name: "Ph.D. in Curriculum Studies", fees: "AED 88,000/year" },
        { name: "Ph.D. in Higher Education", fees: "AED 87,000/year" },
        { name: "Ph.D. in Special Education", fees: "AED 89,000/year" }
      ],
      MBA: [
        { name: "MBA in Education Management", fees: "AED 90,000/total" },
        { name: "MBA in Leadership", fees: "AED 92,000/total" },
        { name: "MBA in Curriculum Development", fees: "AED 88,000/total" },
        { name: "MBA in School Administration", fees: "AED 91,000/total" },
        { name: "MBA in Early Childhood Education", fees: "AED 89,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "AED 2,200/month", areaName: "Dubai Knowledge Village", typeOfRoom: "Single", hostelName: "Knowledge Village Residence" },
      { id: 2, cost: "AED 2,300/month", areaName: "Jumeirah", typeOfRoom: "Shared", hostelName: "Jumeirah Apartments" },
      { id: 3, cost: "AED 2,400/month", areaName: "Downtown Dubai", typeOfRoom: "Studio", hostelName: "Downtown Studio Apartments" },
      { id: 4, cost: "AED 2,500/month", areaName: "Al Quoz", typeOfRoom: "Single", hostelName: "Al Quoz Residence" },
      { id: 5, cost: "AED 2,600/month", areaName: "Business Bay", typeOfRoom: "Shared", hostelName: "Business Bay Hostel" }
    ]
  },
  {
    id: 91,
    country: "Singapore",
    collegeName: "National University of Singapore",
    location: "Singapore",
    description: "The National University of Singapore is a leading global university, recognized for its research and academic excellence.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Science", fees: "SGD 52,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "SGD 50,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "SGD 48,000/year" },
        { name: "B.Tech Civil Engineering", fees: "SGD 49,000/year" },
        { name: "B.Tech Chemical Engineering", fees: "SGD 51,000/year" }
      ],
      MTech: [
        { name: "M.Tech Data Science", fees: "SGD 60,000/year" },
        { name: "M.Tech Artificial Intelligence", fees: "SGD 58,000/year" },
        { name: "M.Tech Software Engineering", fees: "SGD 59,000/year" },
        { name: "M.Tech Mechanical Engineering", fees: "SGD 57,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "SGD 56,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Computer Science", fees: "SGD 70,000/year" },
        { name: "Ph.D. in Engineering", fees: "SGD 72,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "SGD 75,000/year" },
        { name: "Ph.D. in Physics", fees: "SGD 73,000/year" },
        { name: "Ph.D. in Chemical Engineering", fees: "SGD 74,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "SGD 80,000/total" },
        { name: "MBA in Finance", fees: "SGD 85,000/total" },
        { name: "MBA in Marketing", fees: "SGD 82,000/total" },
        { name: "MBA in Entrepreneurship", fees: "SGD 81,000/total" },
        { name: "MBA in Business Analytics", fees: "SGD 83,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 800/month", areaName: "Kent Ridge", typeOfRoom: "Single", hostelName: "The Hive" },
      { id: 2, cost: "SGD 600/month", areaName: "Kent Ridge", typeOfRoom: "Shared", hostelName: "PGPR" },
      { id: 3, cost: "SGD 700/month", areaName: "Kent Ridge", typeOfRoom: "Studio", hostelName: "Crescent Hall" },
      { id: 4, cost: "SGD 900/month", areaName: "Kent Ridge", typeOfRoom: "Single", hostelName: "King Edward VII Hall" },
      { id: 5, cost: "SGD 750/month", areaName: "Kent Ridge", typeOfRoom: "Shared", hostelName: "Temasek Hall" }
    ]
  },
  {
    id: 92,
    country: "Singapore",
    collegeName: "Nanyang Technological University",
    location: "Singapore",
    description: "NTU is recognized globally for its research and teaching, particularly in engineering and technology.",
    courses: {
      BTech: [
        { name: "B.Tech Computer Engineering", fees: "SGD 51,000/year" },
        { name: "B.Tech Information Technology", fees: "SGD 50,000/year" },
        { name: "B.Tech Mechanical Engineering", fees: "SGD 48,500/year" },
        { name: "B.Tech Civil Engineering", fees: "SGD 49,500/year" },
        { name: "B.Tech Aerospace Engineering", fees: "SGD 52,500/year" }
      ],
      MTech: [
        { name: "M.Tech Electrical Engineering", fees: "SGD 59,000/year" },
        { name: "M.Tech Cybersecurity", fees: "SGD 61,000/year" },
        { name: "M.Tech Data Analytics", fees: "SGD 60,000/year" },
        { name: "M.Tech Environmental Engineering", fees: "SGD 58,500/year" },
        { name: "M.Tech Industrial Engineering", fees: "SGD 57,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "SGD 72,000/year" },
        { name: "Ph.D. in Computer Science", fees: "SGD 71,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "SGD 73,000/year" },
        { name: "Ph.D. in Mechanical Engineering", fees: "SGD 70,000/year" },
        { name: "Ph.D. in Electrical Engineering", fees: "SGD 74,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "SGD 85,000/total" },
        { name: "MBA in Finance", fees: "SGD 90,000/total" },
        { name: "MBA in Marketing", fees: "SGD 88,000/total" },
        { name: "MBA in Digital Business", fees: "SGD 87,000/total" },
        { name: "MBA in Operations Management", fees: "SGD 89,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 750/month", areaName: "Jurong", typeOfRoom: "Single", hostelName: "Hall of Residence" },
      { id: 2, cost: "SGD 600/month", areaName: "Jurong", typeOfRoom: "Shared", hostelName: "NTU Hostel" },
      { id: 3, cost: "SGD 800/month", areaName: "Jurong", typeOfRoom: "Studio", hostelName: "Yunnan Garden" },
      { id: 4, cost: "SGD 900/month", areaName: "Jurong", typeOfRoom: "Single", hostelName: "Banyan Hall" },
      { id: 5, cost: "SGD 700/month", areaName: "Jurong", typeOfRoom: "Shared", hostelName: "Eucalyptus Dorm" }
    ]
  },
  {
    id: 93,
    country: "Singapore",
    collegeName: "Singapore Management University",
    location: "Singapore",
    description: "SMU is known for its business and management programs and provides a strong foundation for future leaders.",
    courses: {
      BTech: [
        { name: "B.Tech Information Systems", fees: "SGD 54,000/year" },
        { name: "B.Tech Business Analytics", fees: "SGD 55,000/year" },
        { name: "B.Tech Finance", fees: "SGD 53,000/year" },
        { name: "B.Tech Marketing", fees: "SGD 52,000/year" },
        { name: "B.Tech Operations Management", fees: "SGD 51,500/year" }
      ],
      MTech: [
        { name: "M.Tech Business Analytics", fees: "SGD 61,000/year" },
        { name: "M.Tech Financial Engineering", fees: "SGD 62,000/year" },
        { name: "M.Tech Information Systems", fees: "SGD 60,000/year" },
        { name: "M.Tech Marketing Analytics", fees: "SGD 59,000/year" },
        { name: "M.Tech Cybersecurity", fees: "SGD 63,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Business", fees: "SGD 68,000/year" },
        { name: "Ph.D. in Economics", fees: "SGD 70,000/year" },
        { name: "Ph.D. in Management", fees: "SGD 69,000/year" },
        { name: "Ph.D. in Finance", fees: "SGD 71,000/year" },
        { name: "Ph.D. in Information Systems", fees: "SGD 72,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "SGD 85,000/total" },
        { name: "MBA in Leadership", fees: "SGD 90,000/total" },
        { name: "MBA in Finance", fees: "SGD 88,000/total" },
        { name: "MBA in Marketing", fees: "SGD 87,000/total" },
        { name: "MBA in Strategy", fees: "SGD 86,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 700/month", areaName: "Bugis", typeOfRoom: "Single", hostelName: "SMU Residence" },
      { id: 2, cost: "SGD 550/month", areaName: "Bugis", typeOfRoom: "Shared", hostelName: "SMU Hall" },
      { id: 3, cost: "SGD 750/month", areaName: "Bugis", typeOfRoom: "Studio", hostelName: "The Haven" },
      { id: 4, cost: "SGD 800/month", areaName: "Bugis", typeOfRoom: "Single", hostelName: "The Pinnacle" },
      { id: 5, cost: "SGD 600/month", areaName: "Bugis", typeOfRoom: "Shared", hostelName: "The Retreat" }
    ]
  },
  {
    id: 94,
    country: "Singapore",
    collegeName: "Singapore Institute of Technology",
    location: "Singapore",
    description: "SIT offers applied degree programs designed to meet the needs of industries in Singapore.",
    courses: {
      BTech: [
        { name: "B.Tech Mechanical Engineering", fees: "SGD 45,000/year" },
        { name: "B.Tech Electrical Engineering", fees: "SGD 46,000/year" },
        { name: "B.Tech Information Systems", fees: "SGD 47,000/year" },
        { name: "B.Tech Nursing", fees: "SGD 48,000/year" },
        { name: "B.Tech Food Technology", fees: "SGD 44,000/year" }
      ],
      MTech: [
        { name: "M.Tech Information Technology", fees: "SGD 52,000/year" },
        { name: "M.Tech Data Science", fees: "SGD 54,000/year" },
        { name: "M.Tech Sustainable Infrastructure", fees: "SGD 55,000/year" },
        { name: "M.Tech Cybersecurity", fees: "SGD 53,000/year" },
        { name: "M.Tech Advanced Manufacturing", fees: "SGD 56,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "SGD 66,000/year" },
        { name: "Ph.D. in Information Technology", fees: "SGD 68,000/year" },
        { name: "Ph.D. in Health Sciences", fees: "SGD 67,000/year" },
        { name: "Ph.D. in Applied Sciences", fees: "SGD 69,000/year" },
        { name: "Ph.D. in Business", fees: "SGD 70,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "SGD 78,000/total" },
        { name: "MBA in Logistics", fees: "SGD 80,000/total" },
        { name: "MBA in Healthcare", fees: "SGD 82,000/total" },
        { name: "MBA in Digital Marketing", fees: "SGD 81,000/total" },
        { name: "MBA in Finance", fees: "SGD 83,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 650/month", areaName: "Dover", typeOfRoom: "Single", hostelName: "SIT Residence" },
      { id: 2, cost: "SGD 500/month", areaName: "Dover", typeOfRoom: "Shared", hostelName: "SIT Hall" },
      { id: 3, cost: "SGD 700/month", areaName: "Dover", typeOfRoom: "Studio", hostelName: "SIT Campus" },
      { id: 4, cost: "SGD 750/month", areaName: "Dover", typeOfRoom: "Single", hostelName: "SIT Suites" },
      { id: 5, cost: "SGD 600/month", areaName: "Dover", typeOfRoom: "Shared", hostelName: "SIT Apartment" }
    ]
  },
  {
    id: 95,
    country: "Singapore",
    collegeName: "Singapore University of Technology and Design",
    location: "Singapore",
    description: "SUTD focuses on design and technology education, fostering innovation and creativity.",
    courses: {
      BTech: [
        { name: "B.Tech Engineering Product Design", fees: "SGD 56,000/year" },
        { name: "B.Tech Information Systems Technology", fees: "SGD 54,000/year" },
        { name: "B.Tech Data Science", fees: "SGD 57,000/year" },
        { name: "B.Tech Architecture", fees: "SGD 58,000/year" },
        { name: "B.Tech Computational Biology", fees: "SGD 55,000/year" }
      ],
      MTech: [
        { name: "M.Tech Design and Innovation", fees: "SGD 62,000/year" },
        { name: "M.Tech Data Science", fees: "SGD 63,000/year" },
        { name: "M.Tech Cyber-Physical Systems", fees: "SGD 64,000/year" },
        { name: "M.Tech Urban Design", fees: "SGD 61,000/year" },
        { name: "M.Tech Robotics", fees: "SGD 65,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Design", fees: "SGD 73,000/year" },
        { name: "Ph.D. in Engineering", fees: "SGD 75,000/year" },
        { name: "Ph.D. in Architecture", fees: "SGD 74,000/year" },
        { name: "Ph.D. in Computer Science", fees: "SGD 76,000/year" },
        { name: "Ph.D. in Urban Science", fees: "SGD 77,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "SGD 84,000/total" },
        { name: "MBA in Innovation", fees: "SGD 89,000/total" },
        { name: "MBA in Technology Management", fees: "SGD 87,000/total" },
        { name: "MBA in Entrepreneurship", fees: "SGD 86,000/total" },
        { name: "MBA in Sustainability", fees: "SGD 88,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 700/month", areaName: "Changi", typeOfRoom: "Single", hostelName: "SUTD Residence" },
      { id: 2, cost: "SGD 600/month", areaName: "Changi", typeOfRoom: "Shared", hostelName: "SUTD Hall" },
      { id: 3, cost: "SGD 750/month", areaName: "Changi", typeOfRoom: "Studio", hostelName: "SUTD Suites" },
      { id: 4, cost: "SGD 800/month", areaName: "Changi", typeOfRoom: "Single", hostelName: "The Pavilion" },
      { id: 5, cost: "SGD 650/month", areaName: "Changi", typeOfRoom: "Shared", hostelName: "SUTD Apartments" }
    ]
  },
  {
    id: 96,
    country: "Singapore",
    collegeName: "James Cook University Singapore",
    location: "Singapore",
    description: "JCU Singapore is part of the prestigious James Cook University, offering quality education with a focus on practical experience.",
    courses: {
      BTech: [
        { name: "B.Tech Information Technology", fees: "SGD 50,000/year" },
        { name: "B.Tech Environmental Science", fees: "SGD 48,000/year" },
        { name: "B.Tech Psychology", fees: "SGD 45,000/year" },
        { name: "B.Tech Business", fees: "SGD 47,000/year" },
        { name: "B.Tech Hospitality Management", fees: "SGD 46,000/year" }
      ],
      MTech: [
        { name: "M.Tech Environmental Management", fees: "SGD 57,000/year" },
        { name: "M.Tech Information Technology", fees: "SGD 58,000/year" },
        { name: "M.Tech Business Administration", fees: "SGD 56,000/year" },
        { name: "M.Tech Cybersecurity", fees: "SGD 59,000/year" },
        { name: "M.Tech Data Science", fees: "SGD 60,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Environmental Science", fees: "SGD 70,000/year" },
        { name: "Ph.D. in Psychology", fees: "SGD 72,000/year" },
        { name: "Ph.D. in Information Technology", fees: "SGD 71,000/year" },
        { name: "Ph.D. in Business", fees: "SGD 73,000/year" },
        { name: "Ph.D. in Education", fees: "SGD 74,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "SGD 85,000/total" },
        { name: "MBA in International Business", fees: "SGD 90,000/total" },
        { name: "MBA in Project Management", fees: "SGD 88,000/total" },
        { name: "MBA in Digital Transformation", fees: "SGD 87,000/total" },
        { name: "MBA in Hospitality Management", fees: "SGD 89,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 600/month", areaName: "Holland Road", typeOfRoom: "Single", hostelName: "JCU Residence" },
      { id: 2, cost: "SGD 500/month", areaName: "Holland Road", typeOfRoom: "Shared", hostelName: "JCU Hall" },
      { id: 3, cost: "SGD 650/month", areaName: "Holland Road", typeOfRoom: "Studio", hostelName: "JCU Campus" },
      { id: 4, cost: "SGD 700/month", areaName: "Holland Road", typeOfRoom: "Single", hostelName: "JCU Suites" },
      { id: 5, cost: "SGD 550/month", areaName: "Holland Road", typeOfRoom: "Shared", hostelName: "JCU Apartments" }
    ]
  },
  {
    id: 97,
    country: "Singapore",
    collegeName: "Nanyang Polytechnic",
    location: "Singapore",
    description: "NYP provides practice-oriented education, emphasizing skills and industry readiness.",
    courses: {
      BTech: [
        { name: "B.Tech in Engineering", fees: "SGD 42,000/year" },
        { name: "B.Tech in Information Technology", fees: "SGD 44,000/year" },
        { name: "B.Tech in Business Management", fees: "SGD 41,000/year" },
        { name: "B.Tech in Media Design", fees: "SGD 45,000/year" },
        { name: "B.Tech in Health Sciences", fees: "SGD 43,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Engineering Management", fees: "SGD 53,000/year" },
        { name: "M.Tech in Information Technology", fees: "SGD 55,000/year" },
        { name: "M.Tech in Business Analytics", fees: "SGD 52,000/year" },
        { name: "M.Tech in Cybersecurity", fees: "SGD 54,000/year" },
        { name: "M.Tech in Logistics Management", fees: "SGD 56,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Engineering", fees: "SGD 65,000/year" },
        { name: "Ph.D. in Information Technology", fees: "SGD 66,000/year" },
        { name: "Ph.D. in Business Management", fees: "SGD 67,000/year" },
        { name: "Ph.D. in Media Studies", fees: "SGD 68,000/year" },
        { name: "Ph.D. in Health Sciences", fees: "SGD 69,000/year" }
      ],
      MBA: [
        { name: "MBA", fees: "SGD 79,000/total" },
        { name: "MBA in International Business", fees: "SGD 82,000/total" },
        { name: "MBA in Marketing", fees: "SGD 80,000/total" },
        { name: "MBA in Finance", fees: "SGD 81,000/total" },
        { name: "MBA in Human Resource Management", fees: "SGD 84,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 650/month", areaName: "Yishun", typeOfRoom: "Single", hostelName: "NYP Residence" },
      { id: 2, cost: "SGD 500/month", areaName: "Yishun", typeOfRoom: "Shared", hostelName: "NYP Hall" },
      { id: 3, cost: "SGD 700/month", areaName: "Yishun", typeOfRoom: "Studio", hostelName: "NYP Campus" },
      { id: 4, cost: "SGD 800/month", areaName: "Yishun", typeOfRoom: "Single", hostelName: "NYP Suites" },
      { id: 5, cost: "SGD 600/month", areaName: "Yishun", typeOfRoom: "Shared", hostelName: "NYP Apartments" }
    ]
  },
  {
    id: 98,
    country: "Singapore",
    collegeName: "Lasalle College of the Arts",
    location: "Singapore",
    description: "Lasalle is renowned for its creative arts education, offering programs in art, design, media, and performing arts.",
    courses: {
      BTech: [
        { name: "B.Tech in Fine Arts", fees: "SGD 40,000/year" },
        { name: "B.Tech in Design Communication", fees: "SGD 41,000/year" },
        { name: "B.Tech in Music Production", fees: "SGD 42,000/year" },
        { name: "B.Tech in Arts Management", fees: "SGD 39,000/year" },
        { name: "B.Tech in Animation", fees: "SGD 44,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Fine Arts", fees: "SGD 58,000/year" },
        { name: "M.Tech in Design", fees: "SGD 59,000/year" },
        { name: "M.Tech in Music Therapy", fees: "SGD 60,000/year" },
        { name: "M.Tech in Arts Management", fees: "SGD 61,000/year" },
        { name: "M.Tech in Animation", fees: "SGD 62,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Creative Arts", fees: "SGD 72,000/year" },
        { name: "Ph.D. in Design Studies", fees: "SGD 73,000/year" },
        { name: "Ph.D. in Music", fees: "SGD 74,000/year" },
        { name: "Ph.D. in Arts Management", fees: "SGD 75,000/year" },
        { name: "Ph.D. in Animation", fees: "SGD 76,000/year" }
      ],
      MBA: [
        { name: "MBA in Arts Management", fees: "SGD 78,000/total" },
        { name: "MBA in Creative Industries", fees: "SGD 80,000/total" },
        { name: "MBA in Cultural Management", fees: "SGD 82,000/total" },
        { name: "MBA in Event Management", fees: "SGD 79,000/total" },
        { name: "MBA in Digital Media", fees: "SGD 81,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 650/month", areaName: "Bishan", typeOfRoom: "Single", hostelName: "Lasalle Residence" },
      { id: 2, cost: "SGD 500/month", areaName: "Bishan", typeOfRoom: "Shared", hostelName: "Lasalle Hall" },
      { id: 3, cost: "SGD 700/month", areaName: "Bishan", typeOfRoom: "Studio", hostelName: "Lasalle Campus" },
      { id: 4, cost: "SGD 750/month", areaName: "Bishan", typeOfRoom: "Single", hostelName: "Lasalle Suites" },
      { id: 5, cost: "SGD 600/month", areaName: "Bishan", typeOfRoom: "Shared", hostelName: "Lasalle Apartments" }
    ]
  },  
  {
    id: 99,
    country: "Singapore",
    collegeName: "Singapore University of Social Sciences",
    location: "Singapore",
    description: "SUSS focuses on applied education with a commitment to social sciences and lifelong learning.",
    courses: {
      BTech: [
        { name: "B.Tech in Social Work", fees: "SGD 45,000/year" },
        { name: "B.Tech in Business Analytics", fees: "SGD 46,000/year" },
        { name: "B.Tech in Information Systems", fees: "SGD 47,000/year" },
        { name: "B.Tech in Human Resource Management", fees: "SGD 44,000/year" },
        { name: "B.Tech in Psychology", fees: "SGD 48,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Applied Social Sciences", fees: "SGD 59,000/year" },
        { name: "M.Tech in Business Analytics", fees: "SGD 60,000/year" },
        { name: "M.Tech in Cybersecurity", fees: "SGD 61,000/year" },
        { name: "M.Tech in Human Resource Management", fees: "SGD 62,000/year" },
        { name: "M.Tech in Public Policy", fees: "SGD 63,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Social Work", fees: "SGD 70,000/year" },
        { name: "Ph.D. in Psychology", fees: "SGD 72,000/year" },
        { name: "Ph.D. in Business Management", fees: "SGD 71,000/year" },
        { name: "Ph.D. in Public Policy", fees: "SGD 73,000/year" },
        { name: "Ph.D. in Social Science", fees: "SGD 74,000/year" }
      ],
      MBA: [
        { name: "MBA in Business Management", fees: "SGD 81,000/total" },
        { name: "MBA in Marketing", fees: "SGD 82,000/total" },
        { name: "MBA in Human Resource Management", fees: "SGD 83,000/total" },
        { name: "MBA in Finance", fees: "SGD 84,000/total" },
        { name: "MBA in Project Management", fees: "SGD 85,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 620/month", areaName: "Pasir Ris", typeOfRoom: "Single", hostelName: "SUSS Residence" },
      { id: 2, cost: "SGD 480/month", areaName: "Pasir Ris", typeOfRoom: "Shared", hostelName: "SUSS Hall" },
      { id: 3, cost: "SGD 680/month", areaName: "Pasir Ris", typeOfRoom: "Studio", hostelName: "SUSS Campus" },
      { id: 4, cost: "SGD 700/month", areaName: "Pasir Ris", typeOfRoom: "Single", hostelName: "SUSS Suites" },
      { id: 5, cost: "SGD 600/month", areaName: "Pasir Ris", typeOfRoom: "Shared", hostelName: "SUSS Apartments" }
    ]
  },
  {
    id: 100,
    country: "Singapore",
    collegeName: "Curtin University Singapore",
    location: "Singapore",
    description: "Curtin University offers industry-relevant courses with a focus on real-world application and global opportunities.",
    courses: {
      BTech: [
        { name: "B.Tech in Information Technology", fees: "SGD 42,000/year" },
        { name: "B.Tech in Computer Systems and Networking", fees: "SGD 43,000/year" },
        { name: "B.Tech in Software Engineering", fees: "SGD 44,000/year" },
        { name: "B.Tech in Construction Management", fees: "SGD 41,000/year" },
        { name: "B.Tech in Environmental Engineering", fees: "SGD 45,000/year" }
      ],
      MTech: [
        { name: "M.Tech in Cyber Security", fees: "SGD 60,000/year" },
        { name: "M.Tech in Project Management", fees: "SGD 61,000/year" },
        { name: "M.Tech in Data Analytics", fees: "SGD 62,000/year" },
        { name: "M.Tech in Sustainable Development", fees: "SGD 63,000/year" },
        { name: "M.Tech in Information Systems", fees: "SGD 64,000/year" }
      ],
      PhD: [
        { name: "Ph.D. in Information Technology", fees: "SGD 75,000/year" },
        { name: "Ph.D. in Engineering", fees: "SGD 76,000/year" },
        { name: "Ph.D. in Business", fees: "SGD 77,000/year" },
        { name: "Ph.D. in Education", fees: "SGD 78,000/year" },
        { name: "Ph.D. in Environmental Science", fees: "SGD 79,000/year" }
      ],
      MBA: [
        { name: "MBA in Business Administration", fees: "SGD 85,000/total" },
        { name: "MBA in Global Business", fees: "SGD 84,000/total" },
        { name: "MBA in Marketing", fees: "SGD 83,000/total" },
        { name: "MBA in Finance", fees: "SGD 82,000/total" },
        { name: "MBA in Supply Chain Management", fees: "SGD 81,000/total" }
      ]
    },
    accommodationDetails: [
      { id: 1, cost: "SGD 750/month", areaName: "Boon Lay", typeOfRoom: "Single", hostelName: "Curtin Residence" },
      { id: 2, cost: "SGD 600/month", areaName: "Boon Lay", typeOfRoom: "Shared", hostelName: "Curtin Hall" },
      { id: 3, cost: "SGD 800/month", areaName: "Boon Lay", typeOfRoom: "Studio", hostelName: "Curtin Campus" },
      { id: 4, cost: "SGD 700/month", areaName: "Boon Lay", typeOfRoom: "Single", hostelName: "Curtin Suites" },
      { id: 5, cost: "SGD 650/month", areaName: "Boon Lay", typeOfRoom: "Shared", hostelName: "Curtin Apartments" }
    ]
  }
]

export default dataSet