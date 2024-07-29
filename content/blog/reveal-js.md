+++
title = "Reveal.js super quick"
date = "2022-06-10"
description = "Text-based presentation tools can reduce hours spent & improve reusability."
tags = [
    "util",
]
+++

Using visual tools for quick presentations is overkill, in my opinion. If you give different presentations weekly, please try a text-based tool; I promise you won't regret it. There are many options. In this short post, I will discuss Reveal.js because it is part of my toolchain.

Reveal.js is an open-source JavaScript library for creating presentations using HTML, CSS, and JavaScript. It is designed to allow customizable and interactive presentations to be viewed in a web browser without additional software. Reveal.js supports many features, including slides with different layouts, embedded media, animation, speaker notes, and more. It is used by **educators**, **developers**, designers, and others who need to create presentations for various purposes, such as teaching, showcasing their work, or delivering speeches.

## Super quickstart

Most tutorials will tell you to clone reveal.js and go from there. Don't do that. That is insane. Use **Pandoc** instead.

### What is pandoc

Pandoc is an open-source command line tool for converting documents between various formats. It supports conversion between over 20 different document processing languages, including LaTeX, Markdown, HTML, PDF, and many other popular file types. With Pandoc, you can convert files between formats quickly and easily. Pandoc simplifies cross-platform document creation and publishing by allowing users to write in plain text markup syntax while providing access to features typically reserved for more advanced tools. Good luck: [https://pandoc.org/installing.html](https://pandoc.org/installing.html)

### Markdown Template

I am glad you've managed to get Pandoc installed. Now, here's a template to make things simpler. Please save it as `slides.md` so that the following command works out of the box.

```markdown
---
title: Your Title Here
subtitle: Your Subtitle Here
author: Your Name Here
date: Date Here
output:
  revealjs::revealjs_presentation:
    theme: night
---

# Introduction

- Introduction slide 1
- Introduction slide 2

---

# Conclusion

- Conclusion slide 1
- Conclusion slide 2
```

### Using Pandoc to convert from Markdown to Reveal.js

Run the command below to get the `index.html` with your presentation.

```bash
pandoc -t revealjs -s -o index.html slides.md -V revealjs-url=https://unpkg.com/reveal.js/
```