import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    output: 'static',
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap({
        filter: (page) => !page.includes('/demo-step')
    })],
    redirects: {
        '/blog/post-1': '/blog/siamese-neural-networks',
        '/blog/post-2': '/blog/unlock-the-power-of-git-part-1',
        '/blog/post-3': '/blog/self-hosted-n8n-zero-cost-automation',
        '/projects/project-1': '/projects/deep-imitation-learning-vr-teleoperation',
        '/projects/project-2': '/projects/faze-few-shot-gaze-estimation',
        '/projects/project-3': '/projects/audio-visual-emotion-recognition',
        '/projects/project-4': '/projects/colman-multi-agent-navigation',
        '/projects/project-5': '/projects/indore-relation-extraction',
        '/projects/vectools': '/projects/open-source',
        '/projects/n8n-workflow': '/projects/open-source',
        '/projects/n8n-job-search': '/projects/open-source',
        '/knowledge-graph': '/',
        '/now': '/currently'
    }
});
