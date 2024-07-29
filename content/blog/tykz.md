+++
title = "Tykz for scientific drawing"
date = "2023-03-28"
description = "How to write tykz"
tags = [
    "util",
]
+++

The two images below have the same information. How do you go from this:

![before](https://cdn.hashnode.com/res/hashnode/image/upload/v1675048854707/26a0ee9b-356c-4983-9cf0-d850598bfd4c.png)

To this?

![after](https://cdn.hashnode.com/res/hashnode/image/upload/v1675048838279/12ca21c4-5849-41d1-8a89-6e38ce2f69e4.png)

Using tikz :)

---

### What is TikZ?

TykZ is a LaTeX package used for creating professional-looking graphics in scientific documents. LaTeX is a typesetting language used for producing high-quality technical and scientific documents, and TykZ provides additional tools and features for producing graphics in these types of documents.

The TykZ package offers a variety of tools for creating graphics, including the ability to create 3D graphics, plot data, and produce animations. It also provides several pre-made templates for common types of graphics, making it easier to produce professional-looking results quickly.

The TykZ package is particularly well-suited for use in scientific documents, as it provides features for creating graphics that are specifically designed to meet the needs of this type of content. For example, it includes tools for creating 3D graphics that can be used to visualize scientific data, and it provides options for labeling axes and including legends.

Overall, the TikZ package is a valuable tool for scientists and technical writers who need to produce high-quality graphics in their documents. It offers a range of features that make it easier to create professional-looking results, even for those with limited experience in creating graphics.

### How to use TikZ?

TikZ is a package inside Latex. To use TikZ, you will need a machine with Latex installed and working.

One solution to get Latex working faster is Overleaf. Overleaf is a collaborative, cloud-based LaTeX editor and project management tool for creating, editing, and publishing scientific and academic documents.

If you want to learn TykZ, overleaf has a great 5 part tutorial: [learn tykz](https://www.overleaf.com/learn/latex/LaTeX_Graphics_using_TikZ%3A_A_Tutorial_for_Beginners_(Part_1)%E2%80%94Basic_Drawing).

You can use the following latex template to get started with TykZ.

```latex
\documentclass[12pt]{article}

\usepackage{graphicx}
\usepackage[margin=1in]{geometry}

\title{
  My beautiful square
}

\author{George C. G. Barbosa}
\date{\today}

\usepackage{tikz}
\usetikzlibrary{
  shapes,
  arrows,
  arrows.meta,
  shapes.geometric,
  calc,
  positioning,
  backgrounds,
  decorations.pathreplacing,
  matrix,
  math
}

\begin{document}

\maketitle

\begin{figure}[h]
  \centering
  \resizebox{\columnwidth}{!}{
    \begin{tikzpicture}[]
      \draw (0,0) -- (4,0) -- (4,4) -- (0,4) -- (0,0);
    \end{tikzpicture}
  }
\caption{\footnotesize{El squaro}}\label{fig:tikz}
\end{figure}

\end{document}
```

The above source code will draw a square of 4x4 units.
