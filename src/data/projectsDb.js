const projects = [
    {
        name: 'FitHub',
        img: 'images/projects/fitHub.png',
        githubLink: 'https://github.com/Abhay212121/fitness-ai',
        previewLink: 'https://fitness-ai-five-ashen.vercel.app/',
        desc: `Fithub is an AI-powered fitness tracker that provides personalized health tips using users’ exercise, mood, and sleep data for better wellness and performance.`,
        techStackUsed: [
            { name: 'React', logo: 'images/techStack/react.svg' },
            { name: 'ExpressJS', logo: 'images/techStack/express.svg' },
            { name: 'OpenAI', logo: 'images/techStack/openai.svg' },
            { name: 'JWT', logo: 'images/techStack/jwt.svg' },
            { name: 'PostgreSQL', logo: 'images/techStack/sql.svg' },
        ]
    },
    {
        name: 'ActionNotes',
        img: 'images/projects/actionnotes.png',
        githubLink: 'https://github.com/Abhay212121/Meeting-Notes-Summarizer-AI',
        previewLink: 'https://actionnotes-frontend.vercel.app/',
        desc: `An AI-powered app that intelligently transforms raw meeting transcripts into clear, editable, concise summaries you can easily review and share with your team.`,
        techStackUsed: [
            { name: 'React', logo: 'images/techStack/react.svg' },
            { name: 'ExpressJS', logo: 'images/techStack/express.svg' },
            { name: 'Groq', logo: 'images/techStack/groq.png' },
            { name: 'JWT', logo: 'images/techStack/jwt.svg' },
            { name: 'PostgreSQL', logo: 'images/techStack/sql.svg' },
        ]
    },
    {
        name: 'chatzy',
        img: 'images/projects/chatzy.png',
        githubLink: 'https://github.com/Abhay212121/chatzy-frontend',
        previewLink: 'https://chatzy-frontend-six.vercel.app',
        desc: 'A real-time chat application for fast and seamless communication, enabling users to connect instantly and collaborate efficiently across teams or with friends anywhere.',
        techStackUsed: [
            { name: 'React', logo: 'images/techStack/react.svg' },
            { name: 'ExpressJS', logo: 'images/techStack/express.svg' },
            { name: 'Socket.IO', logo: 'images/techStack/socket.svg' },
            { name: 'JWT', logo: 'images/techStack/jwt.svg' },
            { name: 'PostgreSQL', logo: 'images/techStack/sql.svg' },
        ]
    },
    {
        name: 'ClickedIn',
        img: 'images/projects/clickedin.png',
        githubLink: 'https://github.com/Abhay212121/Linkedin_clone_frontend',
        previewLink: 'https://linkedin-clone-frontend-sage.vercel.app/',
        desc: `A LinkedIn clone where users can create posts, like and comment on content, and update their profile picture to personalize their professional profile.`,
        techStackUsed: [
            { name: 'React', logo: 'images/techStack/react.svg' },
            { name: 'ExpressJS', logo: 'images/techStack/express.svg' },
            { name: 'JWT', logo: 'images/techStack/jwt.svg' },
            { name: 'PostgreSQL', logo: 'images/techStack/sql.svg' },
        ]
    },
    {
        name: 'SNEHA Foundation',
        img: 'images/projects/sneha-foundation.png',
        githubLink: 'https://github.com/Abhay212121/Sneha-Foundation',
        previewLink: 'https://sneha-foundation.vercel.app/',
        desc: `Sneha Foundation is an NGO supporting community welfare. At Digital Supreme, I built their website from scratch with a responsive design for public access.`,
        techStackUsed: [
            { name: 'React', logo: 'images/techStack/react.svg' },
            { name: 'Tailwind', logo: 'images/techStack/tailwind.svg' },
            { name: 'git', logo: 'images/techStack/git.svg' }
        ]
    },
    {
        name: 'QCERT Assessment',
        img: 'images/projects/qcert.png',
        githubLink: 'https://github.com/Abhay212121/qcert.in',
        previewLink: 'https://qcertcertification.com/',
        desc: 'QCERT Assessment Services is an ISO certification provider. At Digital Supreme, I built their responsive website from scratch to enhance their online presence.',
        techStackUsed: [
            { name: 'React', logo: 'images/techStack/react.svg' },
            { name: 'Tailwind', logo: 'images/techStack/tailwind.svg' },
            { name: 'git', logo: 'images/techStack/git.svg' }
        ]
    },
    {
        name: 'NaariStyle',
        img: 'images/projects/naaristyle.png',
        githubLink: 'https://github.com/Abhay212121/NaariStyle',
        previewLink: 'https://naari-style.vercel.app/',
        desc: 'Naaristyle is an e-commerce website for ladies’ products. I developed it to provide a seamless shopping experience with a user-friendly interface and product browsing.',
        techStackUsed: [
            { name: 'React', logo: 'images/techStack/react.svg' },
            { name: 'Tailwind', logo: 'images/techStack/tailwind.svg' },
            { name: 'git', logo: 'images/techStack/git.svg' }
        ]
    },
    {
        name: 'Inventory Application',
        img: 'images/projects/inventory.png',
        githubLink: 'https://github.com/Abhay212121/inventory-application',
        previewLink: 'https://inventory-application-cj5m.onrender.com/',
        desc: 'The Inventory Management application helps admins track and manage stock levels, streamline operations, and ensure accurate reporting for better inventory control.',
        techStackUsed: [
            { name: 'NodeJS', logo: 'images/techStack/nodejs.svg' },
            { name: 'ExpressJS', logo: 'images/techStack/express.svg' },
            { name: 'PostgreSQL', logo: 'images/techStack/sql.svg' },
            { name: 'Tailwind', logo: 'images/techStack/tailwind.svg' },
            { name: 'git', logo: 'images/techStack/git.svg' }
        ]
    },
    // {
    //     name: 'Mini Message Board',
    //     img: 'images/projects/message-board.png',
    //     githubLink: 'https://github.com/Abhay212121/mini-msg-board',
    //     previewLink: 'https://mini-msg-board-9qhq.onrender.com/',
    //     desc: 'A simple and user-friendly message board where users can post their thoughts and comments.',
    //     techStackUsed: [
    //         { name: 'NodeJS', logo: 'images/techStack/nodejs.svg' },
    //         { name: 'ExpressJS', logo: 'images/techStack/express.svg' },
    //         { name: 'Tailwind', logo: 'images/techStack/tailwind.svg' },
    //         { name: 'git', logo: 'images/techStack/git.svg' }
    //     ]
    // },
    // {
    //     name: 'Anime Memory Game',
    //     img: 'images/projects/memorygame.png',
    //     githubLink: 'https://github.com/Abhay212121/memory-game',
    //     previewLink: 'https://memory-game-gamma-gules.vercel.app/',
    //     desc: 'Test your anime knowledge and memory skills with an engaging Anime Memory Game.',
    //     techStackUsed: [
    //         { name: 'React', logo: 'images/techStack/react.svg' },
    //         { name: 'Tailwind', logo: 'images/techStack/tailwind.svg' },
    //         { name: 'git', logo: 'images/techStack/git.svg' }
    //     ]
    // },
    // {
    //     name: 'CV Builder',
    //     img: 'images/projects/cvbuilder.png',
    //     githubLink: 'https://github.com/Abhay212121/CV-builder',
    //     previewLink: 'https://cv-builder-mocha.vercel.app/',
    //     desc: 'Create a professional CV effortlessly with online CV builder.',
    //     techStackUsed: [
    //         { name: 'React', logo: 'images/techStack/react.svg' },
    //         { name: 'Tailwind', logo: 'images/techStack/tailwind.svg' },
    //         { name: 'git', logo: 'images/techStack/git.svg' }
    //     ]
    // },
    // {
    //     name: 'Procrastinot',
    //     img: 'images/projects/todolist.png',
    //     githubLink: 'https://github.com/Abhay212121/to-do-list',
    //     previewLink: 'https://abhay212121.github.io/to-do-list/',
    //     desc: 'A simple and intuitive web app to create, organize, and manage your daily tasks.',
    //     techStackUsed: [
    //         { name: 'JavaScript', logo: 'images/techStack/javascript.svg' },
    //         { name: 'HTML', logo: 'images/techStack/html.svg' },
    //         { name: 'CSS', logo: 'images/techStack/css.svg' },
    //         { name: 'git', logo: 'images/techStack/git.svg' }
    //     ]
    // },
    // {
    //     name: 'Weatherly',
    //     img: 'images/projects/weatherly.png',
    //     githubLink: 'https://github.com/Abhay212121/Weatherly',
    //     previewLink: 'https://abhay212121.github.io/Weatherly/',
    //     desc: 'Get real time weather updates with our weather App.',
    //     techStackUsed: [
    //         { name: 'JavaScript', logo: 'images/techStack/javascript.svg' },
    //         { name: 'HTML', logo: 'images/techStack/html.svg' },
    //         { name: 'CSS', logo: 'images/techStack/css.svg' },
    //         { name: 'git', logo: 'images/techStack/git.svg' }
    //     ]
    // },
    // {
    //     name: 'Calculator',
    //     img: 'images/projects/calculator.png',
    //     githubLink: 'https://github.com/Abhay212121/Calculator',
    //     previewLink: 'https://abhay212121.github.io/Calculator/',
    //     desc: 'A fast, elegant and easy to use calculator for all your calculation needs.',
    //     techStackUsed: [
    //         { name: 'JavaScript', logo: 'images/techStack/javascript.svg' },
    //         { name: 'HTML', logo: 'images/techStack/html.svg' },
    //         { name: 'CSS', logo: 'images/techStack/css.svg' },
    //         { name: 'git', logo: 'images/techStack/git.svg' }
    //     ]
    // },
]

export default projects