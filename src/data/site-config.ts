import navneet_photo from '../assets/images/navneet_photo.jpg';
import heroBio from '../content/fragments/hero-bio.md?raw';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://www.navneetsingharora.com',
    avatar: {
        src: navneet_photo,
        alt: 'Navneet Singh Arora'
    },
    title: 'Navneet Singh Arora',
    subtitle: 'Machine Learning & Full Stack Engineer',
    description: 'Expertise in AI, Machine Learning, and Full Stack Development with a focus on architecting intelligent automation workflows and high-performance backend systems.',
    keywords: [
        'Navneet Singh Arora', 
        'Machine Learning Engineer', 
        'AI Automation Expert', 
        'n8n Developer', 
        'Self-Hosted Automation', 
        'Full Stack Developer Hamburg', 
        'Deep Learning', 
        'Computer Vision', 
        'Generative AI', 
        'Python Developer', 
        'TypeScript', 
        'Docker', 
        'Google Gemini AI', 
        'Agentic Workflows'
    ],
    image: {
        src: navneet_photo,
        alt: 'Navneet Singh Arora - Machine Learning & Full Stack Engineer'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Education',
            href: '/education'
        },
        {
            text: 'Experience',
            href: '/experience'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Imprint',
            href: '/imprint'
        },
        {
            text: 'Privacy',
            href: '/privacy'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/navneet-singh-arora'
        },
        {
            text: 'GitHub',
            href: 'https://www.github.com/NavneetSinghArora'
        },
        {
            text: 'Xing',
            href: 'https://www.xing.com/profile/NavneetSingh_Arora'
        },
        {
            text: 'Gmail',
            href: 'mailto:aroranavneetsingh.de@gmail.com'
        },
        {
            text: 'Resume',
            href: '/Navneet-Resume.pdf'
        }
    ],
    hero: {
        title: "Hi, I'm Navneet Singh Arora!",
        text: heroBio,
        image: {
            src: navneet_photo,
            alt: 'Navneet Singh Arora'
        },
        actions: [
            {
                text: 'Download Resume',
                href: '/Navneet-Resume.pdf',
                target: '_blank'
            },
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    stack: {
        title: 'Tech Stack',
        description: 'A curated stack of high-performance technologies powering my backend architecture, intelligent automation, and AI workflows.',
        categories: [
            {
                title: 'Languages & Data',
                items: [
                    { label: 'Python', icon: 'python' },
                    { label: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
                    { label: 'Pandas', icon: 'pandas' },
                    { label: 'NumPy', icon: 'numpy' }
                ]
            },
            {
                title: 'Backend & APIs',
                items: [
                    { label: 'PostgreSQL', icon: 'postgresql' },
                    { label: 'FastAPI', icon: 'fastapi' },
                    { label: 'Hasura', icon: 'hasura' },
                    { label: 'Bash', icon: 'bash' }
                ]
            },
            {
                title: 'Infrastructure',
                items: [
                    { label: 'GCP', icon: 'googlecloud' },
                    { label: 'Docker', icon: 'docker' },
                    { label: 'Cloudflare', icon: 'cloudflare' },
                    { label: 'Caddy', icon: 'caddy' },
                    { label: 'Tailscale', icon: { light: 'tailscale-dark', dark: 'tailscale-light' } },
                    { label: 'OAuth', icon: 'auth0' },
                    { label: 'Vercel', icon: { light: 'vercel-dark', dark: 'vercel-light' } },

                ]
            },
            {
                title: 'Automation & Workflow',
                items: [
                    { label: 'n8n', icon: 'n8n' },
                    { label: 'Git', icon: 'git' },
                    { label: 'GitHub', icon: { light: 'github-dark', dark: 'github-light' } },
                    { label: 'Notion', icon: { light: 'notion-dark', dark: 'notion-light' } },
                    { label: 'Slack', icon: 'slack' },
                    { label: 'Miro', icon: 'miro' }
                ]
            },
            {
                title: 'AI Engineering',
                items: [
                    { label: 'HuggingFace', icon: 'hugging-face' },
                    { label: 'PyTorch', icon: 'pytorch' },
                    { label: 'FastMCP', icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/mcp.svg' },
                    { label: 'Google Vertex AI', icon: 'gemini' },
                    { label: 'LangChain', icon: 'langchain' },
                    { label: 'Langsmith', icon: 'langsmith' },
                    { label: 'Cursor', icon: { light: 'cursor-dark', dark: 'cursor-light' } },
                    { label: 'Ollama', icon: { light: 'ollama-dark', dark: 'ollama-light' } },
                    { label: 'Claude Code', icon: 'claude' },
                    { label: 'Jupyter', icon: 'jupyter' },
                    { label: 'Colab', icon: 'colab' }
                ]
            }
        ]
    },
    github: 'NavneetSinghArora, Navneet-Repath',
    subscribe: {
        enabled: false,
        title: 'Subscribe to my Newsletter',
        text: 'Updates on Machine Learning, AI, and Full Stack development.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
