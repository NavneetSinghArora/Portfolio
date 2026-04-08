---
title: 'COLMAN: Collaborative Multi-Agent Navigation using Textual-Visual Embeddings (2022)'
description: 'COLMAN explores object goal navigation using embodied AI agents, leveraging Transformer-based architectures and CLIP semantic embeddings for improved scene understanding.'
publishDate: 'Aug 20 2022'
isFeatured: true
seo:
  image:
    src: '../../assets/images/colman.png'
    alt: 'COLMAN Project - Multi-Agent Navigation'
---

![COLMAN Project preview](../../assets/images/colman.png)

*CV Masters Seminar, Universität Hamburg*

<div class="not-prose my-12 p-6 rounded-2xl border border-main/10 bg-main/5 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors hover:border-main/20">
    <div class="space-y-1">
        <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-main/40">Project Sources</h4>
        <p class="text-sm text-main/60 font-medium">Technical implementation and research paper.</p>
    </div>
    <div class="flex items-center gap-6">
        <a href="https://github.com/NavneetSinghArora/COLMAN" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" title="GitHub Repository" class="group transition-transform hover:-translate-y-1">
            <img src="https://cdn.simpleicons.org/github" alt="" class="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity dark:hidden" />
            <img src="https://cdn.simpleicons.org/github/white" alt="" class="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity hidden dark:block" />
        </a>
        <a href="https://github.com/NavneetSinghArora/COLMAN/blob/master/COLMAN_Computer_Vision_Master_Project.pdf" target="_blank" rel="noopener noreferrer" aria-label="Research Paper" title="Research Paper" class="group transition-transform hover:-translate-y-1">
            <img src="https://unpkg.com/lucide-static/icons/file-text.svg" alt="" class="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity dark:invert" />
        </a>
    </div>
</div>

The project works around the recent advancements in object goal navigation using embodied AI agents. While CNN-based approaches have achieved state-of-the-art performance in these tasks, they are memory-intensive and have limitations in more complex environments. The emergence of Transformers has shifted the focus towards attention-inclusive, transformer-based approaches that leverage egocentric views and have scene understanding with multi-head attention.

The recent works that involve multiple agents working together, such as TBONE and Cordial Sync, and how they achieve SOTA performance. However, these approaches do not incorporate natural language processing (NLP) modules, which could improve the agents' understanding of the semantic meaning of the object.

This work aims to enable object recognition for multiple objects by incorporating Contrastive Language-Image Pre-Training (CLIP), a SOTA model that generates semantic embeddings using both image and textual features.

***