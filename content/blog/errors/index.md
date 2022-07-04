---
title: Errors
date: "2022-06-24T20:12:03.284Z"
description: "This is a post on my understanding of JavaScript's runtime model based on an event loop and the order of processing events, and executing queued sub-tasks."
---

Here is the example function I used for this post [Callback Queue and Event Loop Original](./2022-05-11_rshogan-dev.pdf).

```js {1,9-12}
const harry = "potter"

const characters = {
  harry: "potter",
  hermione: "granger",
  ron: "weasley",
}

const WingardiumLeviosa = object => {
  const isTroll = object === "troll"

  return isTroll
    ? `You are too weak to leviate a troll`
    : `You lifted ${object}`
}
```
