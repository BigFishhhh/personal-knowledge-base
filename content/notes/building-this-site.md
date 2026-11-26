---
title: From a Link Directory to a Bilingual Site
publish: true
---

This site started with a modest goal: a free place for my notes and useful links. I chose Obsidian so I could keep the original notes and images as local files, and Quartz to turn them into a searchable website. After the first version went live, I had a better question to work with: what should someone see first when they arrive?

## Finding a home page worth reading

The first home page had three links. I tried a directory that put useful links up front, then a magazine-style layout with a single article on a brick-red cover. The directory made links easy to find, and the cover gave one article a lot of room. I wanted a home page that made it easy to keep reading.

I went back to Jacky Zhao’s site. On my first pass, I had picked out the welcome message, selected writing, and recent notes. Putting those same sections on my site still produced a very different result. Looking at the page again made the sidebar, banner proportions, typography, and spacing stand out. [Jacky Zhao’s site](https://jzhao.xyz/)

The current home page opens with a blue halftone landscape. On desktop, selected writing and recent notes sit on the left, with the introduction on the right. On a phone, those lists move below the introduction. I set the link directory aside for now so the home page leads with the writing.

## Carrying the design into the articles

For a while, opening an article sent readers from the redesigned home page straight into a default Quartz layout. I carried the warm paper palette, serif headings, and handwritten dates into the article pages. Search became a magnifying-glass button that opens the input when needed.

The English type uses DM Serif Display for headings, Bricolage Grotesque for prose, and JetBrains Mono for code. Caveat gives the welcome heading and dates a handwritten touch. For Chinese text, I picked LXGW WenKai. Its brushlike strokes fit the landscape banner and still read well in paragraphs. The site serves a compressed subset of common characters and falls back to system fonts for characters outside that subset. [LXGW WenKai Lite](https://github.com/lxgw/LxgwWenKai-Lite)

## Publishing in two languages

At one point I switched the whole site to English. When I added Chinese back, it went under `/zh/`. The existing English URLs stayed in place. The language link beside search takes readers to the other version of the same page. Search prompts, dates, and the table of contents follow the page’s language.

In Obsidian, the two versions are separate Markdown files with matching paths. The Chinese version goes under `content/zh/`. Quartz shows a switch once both versions are published. The first time I tested this online, the Chinese article opened fine but search still missed it. The Chinese article started showing up after I made the site check for an updated index when it loads.

## How I maintain it now

I write in Obsidian, choose the notes and images I want to share, and push them to GitHub. GitHub Actions rebuilds the site and publishes it to GitHub Pages. Private drafts and attachments stay outside the public repository. The publish flag controls which pages Quartz generates, and files in the public repository remain visible. [Writing and Publishing](./notes/publishing)

After all those iterations, I judge the home page by a simple test: can I quickly find something I want to read and keep going once I click it? When there are more notes here, I’ll have a better sense of what deserves a place of its own.
