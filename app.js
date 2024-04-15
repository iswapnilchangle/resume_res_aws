const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.render('index', {
    name: 'Swapnil Changle',
    phone: '+91-8871643958',
    city: 'Bangalore, KA',
    email: 'swapnilchangle@live.com',
    linkedIn: 'https://www.linkedin.com/swapnilchangle/',
    website: 'www.swapnilchangle.com',
    objective: `Senior Database and Cloud Administrator with over 6 years of experience in SQL Server, Azure SQL, Managed Instances, Azure, MySQL, and SyBase. Seeking a full-time, Multi-skilled and Hybrid Database Administrator role. Proven expertise in optimizing database performance, ensuring data security, and leading database migration projects in cloud environments. Committed to leveraging technical skills for efficient database management and eager to enhance skills while contributing to the success of the future employer.`,
    skills: [
      { name: 'SQL Server', level: 'Expert' },
      { name: 'Azure SQL', level: 'Expert' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'Sybase', level: 'Intermediate' },
      { name: 'Windows Server Failover Cluster', level: 'Expert' },
      { name: 'Azure Availability Groups', level: 'Expert' },
      { name: 'Azure Migration', level: 'Expert' },
      { name: 'Azure SQL Managed Instance', level: 'Expert' },
      { name: 'Azure SQL Server', level: 'Expert' },
      { name: 'Azure MySQL', level: 'Expert' },
      { name: 'Azure Hybrid Benefit', level: 'Expert' },
      { name: 'Azure Data Studio', level: 'Expert' },
      { name: 'SQLCMD', level: 'Expert' },
      { name: 'SQL Profiler', level: 'Expert' },
      { name: 'SQL Server Upgrade Advisor', level: 'Expert' },
      { name: 'TSQL', level: 'Expert' },
      { name: 'Powershell', level: 'Intermediate' },
      { name: 'Collaborative', level: 'Expert' },
      { name: 'Cooperative', level: 'Expert' },
      { name: 'Analytical', level: 'Expert' },
      { name: 'Versatile', level: 'Expert' },
      { name: 'Empathetic', level: 'Expert' },
      { name: 'Friendly', level: 'Expert' },
      { name: 'Efficient', level: 'Expert' }
    ],
    experience: [
      {
        position: 'Infra Managed Service Sr Analyst',
        company: 'Accenture',
        location: 'Bangalore, KA',
        duration: 'November 2022 - Present',
        achievements: [
          'Successfully installed and configured SQL Server, SYbase, Azure SQL databases, Azure SQL Managed Instance, MySQL and Azure MySQL Single and Flexible Server, by migrating and applying service packs and cumulative updates.',
          'Implemented 3 Node Always On across different data centers with 2 Nodes in production for HA and one node in DR site',
          'Successfully optimized SQL cloud infrastructure to reduce storage costs by 47% and created automationfor backup and restore for enhanced data protection and disaster recovery.',
          'Successfully identified cost-saving opportunities by resizing Azure SQL Managed Disks and SKUs for database servers and calculated monthly savings up-to 72%.',
          'Downgraded non-production SQL servers to Standard edition from Enterprise edition, resulting in significant licensing cost savings. Additionally implemented Azure Hybrid Benefit and HA/DR license types for production servers which reduced our overall SQL Server licensing expenses by 66%.',
          'Configured SQL native backup for newly added Servers and created ANF volumes into mount in the server for SQL native backup job in prod servers.'
        ]
      },
      {
        position: 'Cloud Ops Administration Analyst',
        company: 'Accenture',
        location: 'Bengaluru, KA',
        duration: 'April 2021 - November 2022',
        achievements: [
          'Spearheaded the planning and execution of a comprehensive assessment to align SQL Server configurations with Microsoft’s recommended best practices through Azure SQL best practices assessment.',
          'Increased server performance by 25% in 2 months through implementation of comprehensive maintenance and optimization.',
          'Planned annual DR activity to implementation for DR servers as part of Always on disaster test.',
          'Experience in Creating and Administering the SQL Server Databases like data and log file placements and managing the growth parameters and database options.'
        ]
      },
      {
        position: 'Product Support Consultant II',
        company: 'NextGen Healthcare',
        location: 'Bengaluru, KA',
        duration: 'January 2020 - March 2021',
        achievements: [
          'Streamlined product documentation and support processes for better customer experience.',
          'Successfully decreased customer complaints by 20% within 8 months.',
          'Contributed to a 60% increase in QoS scores.'
        ]
      },
      {
        position: 'Database Administrator',
        company: 'IPsoft Global Services',
        location: 'Bengaluru, KA',
        duration: 'January 2018 - January 2020',
        achievements: [
          'Helped in creation and updating of Standard Operating Procedures.',
          'Helped in creation of use cases for the Amelia Database automation.',
          'Started working under multiple multi-skilled DBAs.'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Engineering(RGPV) in Computer Science',
        college: 'Swami Vivekanand College of Engineering',
        duration: '2013 - 2017'
      },
      {
        degree: 'Senior School Certificate (CBSE) in Maths and Science',
        college: 'New Digamber Public School',
        duration: '2011 - 2013'
      }
    ],
    certifications: [
      {
        name: 'DP-900: Microsoft Azure Data Fundamentals',
        issuedBy: 'Microsoft',
        date: 'April 2023 - Present'
      },
      {
        name: 'AZ-900: Azure Fundamentals',
        issuedBy: 'Microsoft',
        date: 'July 2021 - Present'
      }
    ],
    projects: [
      {
        name: 'SQL Server Upgrade Project',
        description: 'Upgraded SQL Server databases and instances from an older version to a newer one, enhancing performance and security.',
        achievements: [
          'Successfully upgraded SQL Server versions for multiple clients.',
          'Improved database performance and security by implementing best practices.'
        ]
      },
      {
        name: 'Client Onboarding Project',
        description: 'Executed a client on-boarding project, involving Knowledge Transfer sessions, Operational Readiness Tests, and Standard Operating Procedures development, enhancing operational efficiency.',
        achievements: [
          'Successfully onboarded new clients and ensured operational readiness.',
          'Developed Standard Operating Procedures to enhance operational efficiency.'
        ]
      },
      {
        name: 'Annual Disaster Recovery Project',
        description: 'Planned and implemented an annual disaster recovery (DR) activity. This is crucial for maintaining the readiness of our DR servers. The activity forms a part of our“Always On” disaster test strategy, ensuring continuous protection and swift recovery in the event of any unforeseen incidents.',
        achievements: [
          'Successfully planned and implemented annual DR activity.',
          'Ensured continuous protection and swift recovery in the event of any unforeseen incidents.'
        ]
      }
    ],
    extraCurricular: [
      {
        activity: 'Traveling',
        description: 'Passionate about exploring diverse cultures and landscapes, with extensive travel experience across various states and continents. Skilled in planning and organizing complex travel itineraries, demonstrating strong logistical and problem-solving abilities.'
      },
      {
        activity: 'Football',
        description: 'Regular participant in local football leagues, honing strategic thinking and collaborative skills through team sports. And now keen viewer of football matches, with a focus on analyzing game tactics and player performance.'
      },
      {
        activity: 'Violin',
        description: 'Accomplished violinist with experience performing in local orchestras and solo recitals.'
      }
    ],
    leadership: [
      {
        role: 'Cloud Optimization Lead',
        company: 'Accenture',
        achievements: [
          'Achieved 47% SQL storage cost reduction and 72% monthly savings through Azure Managed Disks resizing and SKU adjustments.',
          'Downgraded non-production servers and implemented Azure Hybrid Benefits for significant licensing cost reductions.',
          'Conducted an extensive assessment to align SQL Server configurations with Microsoft’s best practices, leading to a 25% performance boost. Initiated the use of Azure SQL best practices for optimal efficiency.'
        ]
      },
      {
        role: 'Knowledge Transfer and Standard Operating Procedures Lead',
        company: 'Accenture',
        achievements: [
          'Conducted Knowledge Transfer sessions, prepared Operational Readiness tests, and developed Standard Operating Procedures to enhance team capabilities and readiness.'
        ]
      }
    ]
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
