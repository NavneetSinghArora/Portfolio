---
title: 'Open Source — vectools & n8n Workflows'
description: 'A zero-dependency npm library for vector mathematics, plus AI automation templates published in the official n8n gallery — covering resume parsing and job search scoring with Google Gemini.'
publishDate: 'May 11 2026'
isFeatured: true
tags:
  - Open Source
  - JavaScript
  - AI Tooling
  - n8n
  - AI Automation
  - Google Gemini
github: 'https://github.com/NavneetSinghArora/vectools'
npm: 'https://www.npmjs.com/package/vectools'
external: 'https://n8n.io/creators/navneet-singh-arora/'
seo:
  title: 'Open Source — vectools & n8n Workflows'
  description: 'vectools: a zero-dependency vector math library for JS/TS embeddings, plus AI automation workflows published in the official n8n gallery.'
---

*Open Source · npm Package · n8n Official Gallery*

Two threads of open-source work: a small utility library for the AI embeddings ecosystem, and automation templates published in n8n's official workflow gallery.

## vectools (npm)

**vectools** is a zero-dependency, ESM-native utility library for vector mathematics, built for the growing ecosystem of AI embedding workflows in JavaScript and TypeScript. Working on semantic search, RAG pipelines, and embedding-based retrieval, the same low-level operations — cosine similarity, dot products, normalization — kept coming up without a lightweight, dependency-free option in the JS ecosystem.

```js
import { cosineSimilarity } from 'vectools';

const score = cosineSimilarity([1, 2, 3], [1, 2, 4]);
// → 0.9914601339836674
```

- **Zero dependencies** — no transitive supply-chain risk
- **Pure ESM** — tree-shakeable, works natively in Node.js 12+, Deno, and browsers
- **TypeScript-first** — ships with full `.d.ts` type definitions

```bash
npm install vectools
```

→ [github.com/NavneetSinghArora/vectools](https://github.com/NavneetSinghArora/vectools) · [npmjs.com/package/vectools](https://www.npmjs.com/package/vectools)

## n8n Workflows

Three workflow templates published under my [n8n creator profile](https://n8n.io/creators/navneet-singh-arora/), covering AI-assisted document parsing and job search automation with Google Gemini:

- **[Extract Job Titles from Resumes with Google Gemini AI](https://n8n.io/workflows/14983-extract-job-titles-from-resumes-with-google-gemini/)** — parses unstructured resume documents and extracts job titles with semantic accuracy, handling nested or inconsistent formats.
- **[Score and Log Relevant Job Listings using Google Gemini, JSearch and Notion](https://n8n.io/workflows/15480-score-and-log-relevant-job-listings-using-google-gemini-jsearch-and-notion/)** — cross-references live JSearch listings against a candidate profile, scores relevance with Gemini, and logs matches to Notion.
- A third workflow runs locally as part of the same automation stack, not yet published to the gallery.

---
