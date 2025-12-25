const projects = [
  {
    title: "Bay Transit Dashboard",
    summary:
      "A lightweight real-time transit arrivals dashboard for public transportation in the Bay using live 511 data. Features secure live data unlocking, editable stop management, and reliable refresh behavior designed to balance API limits alongside an extremely simple user experience.",
    languages: ["JavaScript"],
    toolsAndTechnologies: [
      "HTML",
      "CSS",
      "Vercel",
      "Vercel Serverless Functions",
      "511 Transit API",
      "GitHub",
    ],
    skills: [
      "Front-End Development",
      "API Integration",
      "Serverless Architecture",
      "State Management",
      "UI/UX Design",
      "Error Handling",
      "Client-Side Routing",
      "Local Storage Persistence",
    ],
    image: "assets/img/bay_transit_dashboard.jpg",
    outputs: {
      live: "https://bay-transit-dashboard-web.vercel.app/",
      repository: "https://github.com/nathantorento/bay-transit-dashboard-web",
    },
  },
  {
    title: "Personal Portfolio Website",
    summary:
      "A fully responsive personal website showcasing data science, engineering, and analytics projects. Built with HTML, CSS, and vanilla JavaScript with a dynamic filter system, light and dark themes, and client-side rendering.",
    languages: ["JavaScript"],
    toolsAndTechnologies: ["HTML", "CSS", "GitHub", "GitHub Pages"],
    skills: [
      "Front-End Development",
      "UI/UX Design",
      "Responsive Design",
      "Interactive Filtering",
      "DOM Manipulation",
      "Theme Engine Development",
    ],
    image: "assets/img/personalwebsite.jpg",
    outputs: {
      live: "https://nathantorento.com",
      repository: "https://github.com/nathantorento/personal-website",
    },
  },

  {
    title: "NoteNotes – Music Library Management Web App",
    summary:
      "A full end-to-end prototype that centralizes music libraries, setlists, and resources. All design and code original. Songs sourced using the Spotify API.",
    languages: ["Python"],
    toolsAndTechnologies: ["Dash (Plotly)", "Spotify API", "GitHub"],
    skills: [
      "Web Development",
      "UI/UX Design",
      "API Integration",
      "Full Stack Development",
      "Version Control",
      "Project Management",
    ],
    image: "assets/img/notenotes.jpg",
    outputs: {
      repository: "https://github.com/nathantorento/notenotes",
    },
  },

  {
    title:
      "2022 SF Sidewalk Cleanliness Report Replication and Extended Analysis",
    summary:
      "A full replication and extension of the DPW 2022 Street and Sidewalk Report across San Francisco.",
    languages: ["Python"],
    toolsAndTechnologies: ["GitHub", "Colab", "Jupyter Notebook"],
    skills: [
      "NLP",
      "Data Wrangling",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Geospatial Analysis",
      "Replication Studies",
      "Machine Learning",
      "Regression Analysis",
      "Model Optimization",
      "Data Visualization",
    ],
    image: "assets/img/preview1.jpg",
    outputs: {
      report:
        "https://docs.google.com/document/d/1NxOFDOxjQnm920lpCXSC99LPypADW0UZlhiOtPjJyLw/edit?usp=sharing",
      code: "https://github.com/nathantorento/2022-SF-Cleanliness-Report-Replication/blob/main/main.ipynb",
    },
  },

  {
    title: "MBTI Classification with NLP",
    summary:
      "A text classification model predicting MBTI types from user posts.",
    languages: ["Python"],
    toolsAndTechnologies: ["GitHub", "Colab", "Jupyter Notebook"],
    skills: [
      "NLP",
      "Data Wrangling",
      "Data Analysis",
      "Data Visualization",
      "Machine Learning",
      "Model Optimization",
    ],
    image:
      "https://raw.githubusercontent.com/nathantorento/MBTI/main/preview.jpg",
    outputs: {
      report:
        "https://docs.google.com/document/d/1uTJQU1-7PlZevXltbRa00iQcai99oz_ry-m2SSdQthQ/edit?usp=sharing",
      code: "https://colab.research.google.com/github/nathantorento/MBTI/blob/main/main.ipynb",
      repository: "https://github.com/nathantorento/MBTI",
      presentation: "https://www.beautiful.ai/player/-NqtspAerBsqRW99dDGS",
      webapp: "WIP",
    },
  },

  {
    title: "HiveQL Netflix Demo",
    summary:
      "A big-data query demo using HiveQL on Hue to explore metrics inspired by the Netflix Engagement Report.",
    languages: ["SQL"],
    toolsAndTechnologies: ["Hive", "HiveQL", "Hue", "Hadoop"],
    skills: [
      "Big Data Querying",
      "Data Wrangling",
      "Data Interpretation",
      "Report Writing",
      "Presentation Development",
    ],
    image: "assets/img/hiveqldemo.jpg",
    outputs: {
      notebook: "HiveQLDemoNotebook.html",
      presentation: "https://www.beautiful.ai/player/-Ntyi7PGPN8HGbRmFlmK",
    },
  },

  {
    title:
      "Unraveling the Complexity: Homelessness and Housing Prices Across SF, the Bay Area, and California",
    summary:
      "A predictive and exploratory project analyzing the relationship between homelessness and housing prices across multiple geographic layers.",
    languages: ["Python"],
    toolsAndTechnologies: ["GitHub", "Colab", "Jupyter Notebook"],
    skills: [
      "Data Collection",
      "Data Cleaning",
      "Data Wrangling",
      "EDA",
      "Statistical Analysis",
      "Machine Learning",
      "Dimensionality Reduction",
      "Model Evaluation",
      "Model Interpretation",
      "Data Visualization",
    ],
    image: "assets/img/homelessness_vs_housing.jpg",
    outputs: {
      report:
        "https://docs.google.com/document/d/1GGRfLFDWNZIKVtrGBoObZ23CEuO8PpgcESGDbZosPMM/edit?usp=sharing",
      code: "https://colab.research.google.com/github/nathantorento/homelessness-vs-housing-prices-sf-bay-ca/blob/main/main.ipynb",
      repository:
        "https://github.com/nathantorento/homelessness-vs-housing-prices-sf-bay-ca",
      presentation: "https://www.beautiful.ai/player/-NqtqC5wWyygGQR8dgQI",
    },
  },

  {
    title: "SQL for Data Science Course and Certification",
    summary:
      "A four-course SQL specialization completed with a 99.82 percent final grade. Includes SQL fundamentals, Spark SQL, A/B testing, distributed computing, and data pipelines.",
    languages: ["SQL", "Python"],
    toolsAndTechnologies: [
      "Apache Spark",
      "Spark SQL",
      "SQLite",
      "Databricks",
      "Delta Lake",
      "Mode",
    ],
    skills: [
      "SQL Querying",
      "Data Retrieval",
      "Data Wrangling",
      "Data Quality Assurance",
      "A/B Testing",
      "Distributed Computing",
      "Pipeline Engineering",
      "Data Storytelling",
    ],
    image: "assets/img/sql_certificate.jpg",
    outputs: {
      certificate:
        "https://www.coursera.org/account/accomplishments/specialization/8HVG3DJYVUBP",
    },
  },

  {
    title:
      "Running a Multi-Node Hadoop Cluster on a Mac with Docker to Test HDFS Fault Tolerance",
    summary:
      "A Medium tutorial on building a multi-node Hadoop cluster in Docker and testing HDFS fault tolerance under the CAP theorem.",
    languages: ["Python"],
    toolsAndTechnologies: ["Docker", "Hadoop", "HDFS", "Terminal"],
    skills: [
      "Distributed Systems",
      "Fault Tolerance Testing",
      "Data Replication",
      "System Monitoring",
      "Technical Documentation",
    ],
    image: "assets/img/hadoop.jpg",
    outputs: {
      article:
        "https://nathan-torento.medium.com/distributed-systems-fault-tolerance-tutorial-78b825f8cada",
    },
  },
];
