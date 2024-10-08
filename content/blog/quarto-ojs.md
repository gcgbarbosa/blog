+++
title = "Jumpstart Your Data Visualization: Quarto & ObservableJS with R"
date = "2024-08-22T15:12:10-03:00"
description = "A step-by-step guide to creating plots using Quarto, ObservableJS, and R"
tags = [
  "writing",
  "data"
]
+++


## Let's run the hello quarto

### Getting quarto installed

Download it from the [download page](https://quarto.org/docs/get-started/).

I download the ubuntu version and installed it with:f

```bash
sudo dpkg -i quarto-*.deb
```

Cool.

Now running `quarto --version` should print:

```plaintext
1.5.55
```

### Hello quarto

Create a file named `hello.qmd` with the content from this [gist](https://gist.github.com/gcgbarbosa/526c155c01489319b0ed4c9082e32268).
Then render an html with quarto:

```bash
quarto render hello.qmd --to html
```

Beautiful. Now we can render html from qmd.

![example test](/posts/observable/ggplot.png)

While we are editing, we can also use the preview command:

```bash
quarto preview hello.qmd
```

## ObservableJS

The first step is to make the data available for ObservableJS.
After that we use the `{ojs}` markup to define the plot.

```quarto
## Observable JS Data

~~~{ojs}
// transpose object
data = transpose(airquality)

// output data
data

// draw plot
Plot.plot({
  style: {
    fontSize: 12
  },
  y: {
    grid: true,
    label: "Ozone"
  },
  x: {
    label: "Temperature"
  },
  marks: [
    Plot.dot(data, {x: "Temp", y: "Ozone"}),
    Plot.linearRegressionY(data, {
      y: "Ozone",
      x:"Temp",
      curve: "catmull-rom"
    }),
  ],
  width: 640,
  height: 400,
  marginBottom: 40,
  marginLeft: 40,
  caption: "Temperature and ozone level."
})
~~~

~~~{r}
// makes `airquality` available to ObservableJS
ojs_define(airquality)
~~~

```

![observable result](/posts/observable/observable.png)

Beautiful.
