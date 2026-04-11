---
title: 'FAZE: Few-Shot Adaptive Gaze Estimation using Meta-Learning'
description: 'Implementation of a personalized gaze estimation framework using DT-ED networks and meta-learning to achieve high accuracy with minimal calibration samples.'
publishDate: 'Jan 28 2021'
isFeatured: true
tags:
  - Computer Vision
  - Meta-Learning
  - Deep Learning
github: 'https://github.com/NavneetSinghArora/Gaze-Estimatiom'
paper: '/papers/Few-Shot-Adaptive-Gaze-Estimation.pdf'
seo:
  image:
    src: '../../assets/images/gaze.png'
    alt: 'FAZE Gaze Estimation Framework'
---

*Intelligent Robotics Seminar: Paper Review & Implementation, Universität Hamburg*


This project explores the implementation of **Few-Shot Adaptive Gaze Estimation (FAZE)**, a framework designed to bridge the gap between generic gaze estimation and highly personalized models. Traditional models often struggle with individual anatomical differences, whereas FAZE leverages meta-learning to adapt to new users using as few as 3 to 9 calibration samples.

The core of the system is the **Disentangling Transforming Encoder-Decoder (DT-ED)** network. This architecture is trained to decouple gaze direction, head pose, and facial appearance from raw images. By utilizing a latent space that represents these features independently, the model can synthesize novel viewpoints through a latent transformation, effectively augmenting the calibration data provided by the user.

A key contribution of this project is the application of **MAML (Model-Agnostic Meta-Learning)** to the gaze estimation task. By training the network to be highly adaptable, we achieve significant accuracy gains in "personalizing" the model to a specific individual's eyes and facial features. The results demonstrate that FAZE significantly outperforms static baseline models, providing a robust solution for hands-free interaction and user-intent detection in real-world scenarios.

***
