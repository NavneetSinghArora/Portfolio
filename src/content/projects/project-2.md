---
title: 'FAZE: Few-Shot Adaptive Gaze Estimation using Meta-Learning (2021)'
description: 'Implementation of a personalized gaze estimation framework using DT-ED networks and meta-learning to achieve high accuracy with minimal calibration samples.'
publishDate: 'Aug 15 2021'
isFeatured: true
github: 'https://github.com/NavneetSinghArora/Gaze-Estimatiom'
paper: '/papers/Few-Shot-Adaptive-Gaze-Estimation.pdf'
seo:
  image:
    src: '../../assets/images/gaze.png'
    alt: 'FAZE Gaze Estimation Framework'
---

![FAZE Project preview](../../assets/images/gaze.png)

*Intelligent Robotics Seminar: Paper Review & Implementation, Universität Hamburg*

<div class="not-prose my-12 p-6 rounded-2xl border border-main-border/10 bg-main-bg/5 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors hover:border-main-border/20">
    <div class="space-y-1">
        <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-main/40">Project Sources</h4>
        <p class="text-sm text-main/60 font-medium">Technical implementation and research paper review.</p>
    </div>
    <div class="flex items-center gap-6">
        <a href="https://github.com/NavneetSinghArora/Gaze-Estimatiom" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" title="GitHub Repository" class="group transition-transform hover:-translate-y-1">
            <img src="https://cdn.simpleicons.org/github" alt="" class="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity dark:hidden" />
            <img src="https://cdn.simpleicons.org/github/white" alt="" class="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity hidden dark:block" />
        </a>
        <a href="/papers/Few-Shot-Adaptive-Gaze-Estimation.pdf" target="_blank" rel="noopener noreferrer" aria-label="Research Paper" title="Research Paper" class="group transition-transform hover:-translate-y-1">
            <img src="https://unpkg.com/lucide-static/icons/file-text.svg" alt="" class="h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity dark:invert" />
        </a>
    </div>
</div>

This project explores the implementation of **Few-Shot Adaptive Gaze Estimation (FAZE)**, a framework designed to bridge the gap between generic gaze estimation and highly personalized models. Traditional models often struggle with individual anatomical differences, whereas FAZE leverages meta-learning to adapt to new users using as few as 3 to 9 calibration samples.

The core of the system is the **Disentangling Transforming Encoder-Decoder (DT-ED)** network. This architecture is trained to decouple gaze direction, head pose, and facial appearance from raw images. By utilizing a latent space that represents these features independently, the model can synthesize novel viewpoints through a latent transformation, effectively augmenting the calibration data provided by the user.

A key contribution of this project is the application of **MAML (Model-Agnostic Meta-Learning)** to the gaze estimation task. By training the network to be highly adaptable, we achieve significant accuracy gains in "personalizing" the model to a specific individual's eyes and facial features. The results demonstrate that FAZE significantly outperforms static baseline models, providing a robust solution for hands-free interaction and user-intent detection in real-world scenarios.

***
