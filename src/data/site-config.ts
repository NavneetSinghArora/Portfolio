import navneet_photo from '../assets/images/navneet_photo.jpg';
import ogCard from '../assets/images/og-card.png';
import heroPitch from '../content/fragments/hero-pitch.md?raw';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://www.navneetsingharora.com',
    avatar: {
        src: navneet_photo,
        alt: 'Navneet Singh Arora'
    },
    title: 'Navneet Singh Arora',
    subtitle: 'Senior AI Engineer · Agentic Systems & RAG',
    jobTitle: 'Senior AI Engineer',
    description: 'Senior AI Engineer building production multi-agent systems and RAG pipelines with LangGraph, MCP, and vector search — from architecture through evaluation to deployment.',
    keywords: [
        'Navneet Singh Arora',
        'Senior AI Engineer',
        'Multi-Agent Systems',
        'Retrieval-Augmented Generation',
        'LangGraph',
        'FastMCP',
        'Model Context Protocol',
        'LLM Evaluation',
        'RAGAS',
        'DeepEval',
        'Vector Search',
        'Qdrant',
        'FastAPI',
        'Google Cloud Platform',
        'Computer Vision',
        'Python'
    ],
    image: {
        src: ogCard,
        alt: 'Navneet Singh Arora — Senior AI Engineer, Agentic Systems & RAG'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Experience',
            href: '/experience'
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
            text: 'About',
            href: '/about'
        },
        {
            text: 'Education',
            href: '/education'
        },
        {
            text: 'Stack',
            href: '/stack'
        },
        {
            text: 'Currently',
            href: '/currently'
        },
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
            text: 'n8n Profile',
            href: 'https://n8n.io/creators/navneet-singh-arora/'
        },
        {
            text: 'npm',
            href: 'https://www.npmjs.com/package/vectools'
        },
        {
            text: 'Resume',
            href: '/Navneet-Resume.pdf'
        }
    ],
    hero: {
        title: "Hi, I'm Navneet Singh Arora!",
        text: heroPitch,
        actions: [
            {
                text: 'View Work',
                href: '/projects',
                variant: 'primary'
            },
            {
                text: 'Download Resume',
                href: '/Navneet-Resume.pdf',
                target: '_blank',
                variant: 'secondary'
            },
            {
                text: 'Get in Touch',
                href: '/contact',
                variant: 'secondary'
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
                    { label: 'TypeScript', icon: 'typescript' },
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
                    { label: 'Caddy', icon: { light: 'caddy-dark', dark: 'caddy-light' } },
                    { label: 'Tailscale', icon: { light: 'tailscale-dark', dark: 'tailscale-light' } },
                    { label: 'Auth0', icon: 'auth0' },
                    { label: 'Vercel', icon: { light: 'vercel-dark', dark: 'vercel-light' } },

                ]
            },
            {
                title: 'Automation & Workflow',
                items: [
                    { label: 'n8n', icon: 'n8n' },
                    { label: 'Git', icon: 'git' },
                    { label: 'GitHub', icon: { light: 'github-dark', dark: 'github-light' } },
                    { label: 'GitHub Actions', icon: 'github-actions' },
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
                    { label: 'LangGraph', icon: 'langgraph' },
                    { label: 'LangChain', icon: { light: 'langchain-dark', dark: 'langchain-light' } },
                    { label: 'FastMCP', icon: { light: 'mcp-dark', dark: 'mcp-light' } },
                    { label: 'Qdrant', icon: 'qdrant' },
                    { label: 'Google Vertex AI', icon: 'gemini' },
                    { label: 'Langsmith', icon: { light: 'langsmith-dark', dark: 'langsmith-light' } },
                    { label: 'VS Code', icon: { light: 'vscode-dark', dark: 'vscode-light' } },
                    { label: 'Ollama', icon: { light: 'ollama-dark', dark: 'ollama-light' } },
                    { label: 'Claude Code', icon: 'claude' },
                    { label: 'Gemini CLI', icon: 'gemini' },
                    { label: 'Codex', icon: 'codex' },
                    { label: 'Computer Vision', icon: 'opencv' },
                    { label: 'LLMs', icon: 'openai' },
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
