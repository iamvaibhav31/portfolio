
export const commandMap = {
  HELP: 'help',
  ABOUT: 'summary',
  EXPERIENCE: "experience",
  EDUCATION: "education",
  SKILLS: "skills",
  PROJECTS: 'projects',
  CLEAR: 'clear',
}

export const commands = {
  [commandMap.HELP]: 'List of all available commands',
  [commandMap.ABOUT]: 'About me',
  [commandMap.EXPERIENCE]: 'My work experience',
  [commandMap.EDUCATION]: 'My educational background',
  [commandMap.SKILLS]: 'My technical skills',
  [commandMap.PROJECTS]: 'List my projects',
  [commandMap.CLEAR]: 'Clear the terminal',
}

export const portfolioInfo = {
  [commandMap.ABOUT]: "Software development professional with ~2 years of experience in front-end and full-stack development, specializing in React.js and TypeScript. Currently focused on building modular, AI-driven platforms with role-based access, drag-and-drop flow builders, and real-time voice bot tools powered by OpenAI and Gemini. Integrated multichannel communication systems—including Facebook, WhatsApp, and Email—alongside voice and transcription modules to enable seamless agent-customer interactions. Reduced manual effort and significantly improved support response times for over 200 enterprise clients. Seeking a Software Development Engineer role at KaptureCX to apply this expertise in building scalable, high-performance React applications that elevate customer engagement.",
  [commandMap.EXPERIENCE]: [
    {
      "company": "Kapture CX",
      "role": "Software Development Engineer",
      "location": "Bengaluru",
      "date": "Dec 2023 – Present",
      "responsibilities": [
        "Developed a modular workspace platform using React, Redux, and TypeScript with full CRUD support, role-based access control, and custom builder modules.",
        "Built no-code tools including a drag-and-drop flow builder and a voice bot builder with LLM integration (OpenAI, Gemini, etc.).",
        "Engineered 50+ reusable UI components to accelerate development by 50% and maintain design consistency.",
        "Refactored legacy CRM features into modern React components, reducing load times by 20%.",
        "Integrated multichannel support (Facebook, WhatsApp, Email) reducing response times by 30% for 200+ enterprise clients.",
        "Implemented real-time function calls and advanced prompt control for enhanced bot responsiveness.",
        "Configured voice and transcription modules with Azure, Google, and Deepgram."
      ]
    },
    {
      "company": "Embifi",
      "role": "Full Stack Engineer (Intern)",
      "location": "Delhi NCR",
      "date": "June 2023 - Dec 2023",
      "responsibilities": [
        "Implemented and optimized UI enhancements in React and React Native applications.",
        "Fortified backend services with robust unit tests using Node.js and Mocha, catching 10+ critical bugs.",
        "Deployed AWS Lambda functions and AWS Step Functions to automate critical backend workflows."
      ]
    },
    {
      "company": "GoodSpace",
      "role": "Full Stack Engineer (Intern)",
      "location": "Delhi NCR",
      "date": "March 2023 - June 2023",
      "responsibilities": [
        "Revamped front-end architecture using Next.js 13 and TypeScript, improving load times by 15%.",
        "Developed backend unit tests in Node.js, increasing test coverage from 60% to 85%.",
        "Integrated ChatGPT APIs for AI-driven resume analysis, interview round generation, and performance analytics."
      ]
    }
  ],
  [commandMap.EDUCATION]: {
    "institution": "Maharishi Markandeshwar University",
    "degree": "B.Tech",
    "field": "Computer Science & Engineering",
    "gpa": "7.7",
    "year": "2019 - 2023"
  },
  [commandMap.SKILLS]: {
    "languages": ["JavaScript (ES6+)", "TypeScript", "Python"],
    "frontend": ["React.js", "Next.js", "HTML5", "CSS3", "Redux", "Material-UI", "Shadcn-UI", "TanStack"],
    "backend": ["Node.js", "Express.js", "REST APIs"],
    "databases": ["MongoDB"],
    "tools_devops": ["Git", "GitHub", "Agile", "Cloudinary", "AWS (Lambda, Step Functions)"]
  },
  [commandMap.PROJECTS]: [
    {
      "name": "KapNote",
      "description": "Chrome extension that captures meeting audio and generates AI-powered meeting summaries.",
      "features": [
        "Supports Google Meet, Zoom, and other conferencing tools.",
        "AI-crafted MoM, real-time transcription, and collaborative knowledge management.",
        "Planned support for Slack, GitHub, Jira, Trello, team dashboards, and voice activity recognition."
      ],
      "link": "https://github.com/Vicenzo7/KapNote"
    },
    {
      "name": "Kap.io",
      "description": "Scalable Configuration Management System (CMS) for managing project-specific settings, access rules, and live CSS Manager.",
      "features": [
        "Custom SDK for real-time communication between CMS and projects.",
        "Conditional config logic, secondary authentication, and live theme control.",
        "Improved deployment speed and UI consistency across products."
      ],
      "link": "https://kap-io.netlify.app/"
    }
  ]
}

export const basicPortfolioInfo = {
  "name": "Vaibhav Sharma",
  "title": "Software Development Engineer @Kapture CX",
  "contact": {
    "phone": "8769284560",
    "email": "vaibhavsharmaofficial31@gmail.com",
  },
  "location": "Bengaluru, India",
  "profiles": [
    { "url": "https://vaibhav-sharma-portfolio.vercel.app/", "platform": "portfolio" },
    { "platform": "linkedin", "url": "https://www.linkedin.com/in/vaibhavsharma31/"},
    { "platform": "github", "url": "https://github.com/iamvaibhav31"  },
    { "platform": "leetcode", "url": "https://leetcode.com/u/vaibhav_3108/" }
  ],

}


export const commandList = [ commandMap.ABOUT , commandMap.EXPERIENCE , commandMap.EDUCATION , commandMap.SKILLS , commandMap.PROJECTS  ]


