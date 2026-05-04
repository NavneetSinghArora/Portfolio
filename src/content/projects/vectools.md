---
title: 'vectools'
description: 'A lightweight, zero-dependency ESM utility library for vector mathematics and AI embeddings — built for semantic search, RAG pipelines, and ML workflows in JavaScript and TypeScript.'
publishDate: 'Apr 28 2026'
isFeatured: true
tags:
  - Open Source
  - JavaScript
  - AI Tooling
github: 'https://github.com/NavneetSinghArora/vectools'
npm: 'https://www.npmjs.com/package/vectools'
seo:
  title: 'vectools — Vector Math Utilities for AI Embeddings in JavaScript'
  description: 'Zero-dependency ESM library for vector mathematics and AI embeddings. Cosine similarity for semantic search and RAG pipelines in JS/TS.'
---

*Open Source · npm Package · MIT License*

**vectools** is my first published npm package — a zero-dependency, ESM-native utility library for vector mathematics, designed specifically for the growing ecosystem of AI embedding workflows in JavaScript and TypeScript.

## Why I Built It

Working on semantic search, RAG pipelines, and embedding-based retrieval systems, I kept reaching for the same low-level vector operations: cosine similarity, dot products, normalization. These functions are trivial but surprisingly absent from the JS ecosystem without pulling in heavy linear algebra libraries. `vectools` is the focused, dependency-free answer.

## Core API

```js
import { cosineSimilarity } from 'vectools';

// Compare two embedding vectors
const score = cosineSimilarity([1, 2, 3], [1, 2, 4]);
// → 0.9914601339836674
```

`cosineSimilarity(vec1, vec2)` returns a value in the range **[-1, 1]**:
- `1.0` — identical direction (semantically equivalent)
- `0.0` — orthogonal (completely unrelated)
- `-1.0` — opposite direction

This is the standard metric used by OpenAI, Cohere, and most embedding model providers when comparing text or image embeddings.

## Design Principles

- **Zero dependencies** — no transitive supply-chain risk
- **Pure ESM** — tree-shakeable, works natively in Node.js 12+, Deno, and browsers
- **TypeScript-first** — ships with full `.d.ts` type definitions
- **Minimal surface area** — does one thing and does it right

## Installation

```bash
npm install vectools
```

```bash
yarn add vectools
```

```bash
pnpm add vectools
```

---
