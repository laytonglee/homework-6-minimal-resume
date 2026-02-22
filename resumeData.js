const resumeData = {
  name: "Laytong LY",
  title: "Backend Developer | AI & Cloud Enthusiast",
  email: "laytongly@email.com",
  phone: "+855 87 895 155",
  location: "Phnom Penh, Cambodia",
  linkedin: "linkedin.com/in/laytong-ly",
  github: "github.com/laytongly",
  website: "https://laytong-portfolio.vercel.app/",

  summary:
    "Backend developer with strong experience in Laravel, Node.js, and database systems. Currently working on large-scale billing and automation systems. Passionate about Artificial Intelligence, Time Series Forecasting, and AWS cloud technologies. Focused on building scalable, reliable, and high-performance backend solutions.",

  skills: [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "PHP", "Java", "C++", "SQL"],
    },
    {
      category: "Backend",
      items: ["Laravel", "Node.js", "Express.js", "Springboot", "REST APIs"],
    },
    {
      category: "Frontend",
      items: ["Vue.js", "React", "Next.js"],
    },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "Mongo DB"] },
    {
      category: "AI & Data",
      items: ["PyTorch", "TensorFlow", "Time Series Forecasting"],
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "AWS", "Docker", "Postman", "cPanel"],
    },
  ],

  experience: [
    {
      role: "Backend Developer",
      company: "Fastone Technologies",
      location: "Phnom Penh, Cambodia",
      startDate: "Sep 2024",
      endDate: null,
      current: true,
      highlights: [
        "Designed and developed a scalable billing system using Laravel and MySQL",
        "Implemented batch PDF generation and ZIP archiving using Laravel Jobs, Queues, and background processing",
        "Improved system efficiency by reducing processing time and server load through queue-based architecture",
      ],
    },
    {
      role: "Front-End Web Development Intern",
      company: "Fastone Technologies",
      location: "Phnom Penh, Cambodia",
      startDate: "May 2024",
      endDate: "Aug 2024",
      current: false,
      highlights: [
        "Integrated frontend components with RESTful APIs for dynamic data rendering",
        "Enhanced UI/UX consistency across multiple modules and pages",
        "Collaborated with backend developers and participated in code reviews and feature testing",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology & Management",
      school: "American University of Phnom Penh (AUPP)",
      location: "Phnom Penh, Cambodia",
      year: "2022 – Present",
      gpa: 3.7,
      honors: true,
      achievements: [
        "50% Merit Scholarship – National Exam (Grade A)",
        "Built modern web applications using React, JavaScript, and REST APIs",
        "Completed projects focused on responsive UI, state management, and user experience",
        "Strong foundation in Software Engineering, Database Systems, and Cloud Fundamentals",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Fort Hays State University",
      location: "Kansas, United States",
      year: "Jan 2024 – Present",
      gpa: 3.7,
      honors: false,
      achievements: [
        "Dual-degree program emphasizing full-stack development and system design",
        "Advanced coursework in Data Structures, Algorithms, and Web Technologies",
        "Applied React and modern JavaScript practices in academic and personal projects",
      ],
    },
  ],

  certifications: [
    { name: "AWS Academy Graduate - Machine Learning Foundations", year: 2025 },
    {
      name: "AWS Academy Graduate - Data Engineering",
      year: 2025,
    },
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      year: 2024,
    },
    {
      name: "Certified Cybersecurity Technician (CCT) v1 (EC-Council)",
      year: 2023,
    },
  ],

  languages: [
    { name: "Khmer", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working" },
  ],

  interests: [
    "Artificial Intelligence",
    "Time Series Forecasting",
    "Cloud Computing (AWS)",
    "Backend System Design",
  ],

  references: [
    {
      name: "Dr. Ng Tek Ming",
      title: "Dean of IT Faculty",
      institution: "American University of Phnom Penh",
      email: "n.ming@aupp.edu.kh",
    },
    {
      name: "Dr. Chandan Mukherjee",
      title: "Assistant Professor, Faculty of Digital Technologies",
      institution: "American University of Phnom Penh",
      email: "c.mukherjee@aupp.edu.kh",
    },
  ],
};

module.exports = resumeData;
