
export const commandMap = {
  HELP: 'help',
  ABOUT: 'summary',
  ACHIEVEMENTS: 'achievements',
  EXPERIENCE: "experience",
  EDUCATION: "education",
  SKILLS: "skills",
  PROJECTS: 'projects',
  CLEAR: 'clear',
}

export const commands = {
  [commandMap.HELP]: 'List of all available commands',
  [commandMap.ABOUT]: 'About me',
  [commandMap.ACHIEVEMENTS]: 'My achievements',
  [commandMap.EXPERIENCE]: 'My work experience',
  [commandMap.EDUCATION]: 'My educational background',
  [commandMap.SKILLS]: 'My technical skills',
  [commandMap.PROJECTS]: 'List my projects',
  [commandMap.CLEAR]: 'Clear the terminal',
}

export const portfolioInfo = {
  [commandMap.ABOUT]: "Software Development Engineer with 2+ years of experience delivering scalable, AI-driven web platforms using React, Javascript, TypeScript, and Redux. Proven expertise in building voice bots, multi-agent voice systems, and no-code flow builders integrated with Generative AI (OpenAI, Gemini), real-time communication (WebSocket), and TTS/STT services. Skilled in optimizing code for speed, delivering high-quality results, and collaborating with cross-functional teams to achieve project milestones.",
  [commandMap.ACHIEVEMENTS]: [
    {
      "title": "Vitos (AI Voice & Chat Platform)",
      "description": [
        "Built AI-driven voice bots and multi-agent voice solutions leveraging React, TypeScript, Redux, LLMs (OpenAI, Gemini), WebSockets, and cloud-based TTS/STT pipelines, resulting in 35% higher response rates and 25% faster resolution across 200+ agents.",
        "Created a no-code visual flow builder using React Flow, enabling drag-and-drop orchestration, conditional routing, multilingual conversations, and real-time prompt tuning, improving conversational accuracy by 25% at enterprise scale."
      ]
    }
  ],
  [commandMap.EXPERIENCE]: [
    {
      "company": "Kapture CX",
      "role": "Software Development Engineer",
      "location": "Bengaluru",
      "date": "Dec 2023 – Present",
      "responsibilities": [
        "Delivered AI-powered voice and chat automation systems using React, TypeScript, Redux, React Flow, and LLM integrations, supporting multilingual workflows, real-time orchestration, and visual configuration, driving a 35% uplift in response rates and 25% reduction in resolution time.",
        "Architected a scalable UI ecosystem with 50+ reusable components, shared libraries, dynamic API-driven configurations, and no-code builders, accelerating feature delivery by 30–50% while maintaining enterprise-grade design consistency.",
        "Unified multichannel customer communication platforms including WhatsApp, Facebook, Instagram, LinkedIn, Email, and YouTube into a single inbox with agent templates and media handling, boosting agent productivity by 45% and cutting response times by 30% for 200+ clients.",
        "Streamlined CRM and data-intensive modules such as Ticket View, Ticket List, Email Split, and Master Data Manager by introducing efficient pagination, sorting, and bulk operations, reducing load times by 20–35% and setup effort by 40% for over 1,000 users.",
        "Enforced role-based access control, workflow governance, and content moderation in collaboration with design, backend, QA, and ML teams, shortening delivery cycles by 25%, and strengthening platform security.",
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
    { "platform": "linkedin", "url": "https://www.linkedin.com/in/vaibhavsharma31/"},
    { "platform": "github", "url": "https://github.com/iamvaibhav31"  },
    { "platform": "leetcode", "url": "https://leetcode.com/u/vaibhav_3108/" }
  ],

}


export const commandList = [ commandMap.ABOUT , commandMap.EXPERIENCE , commandMap.EDUCATION , commandMap.SKILLS , commandMap.PROJECTS , commandMap.ACHIEVEMENTS  ]


