+++
title = "Getting Started with PocketBase and Vite+React+TypeScript"
date = "2024-09-01T15:12:10-03:00"
description = "A beginner's guide to setting up a full-stack application using PocketBase as a backend and Vite with React and TypeScript for the frontend."
tags = [
  "productivity",
  "fullstack"
]
+++

## Why Pocketbase?

PocketBase (PB) is an open-source backend solution providing
real-time database,
authentication,
and file storage.
It is easy to deploy and you can build web and mobile applications
without worrying much about backend.

Our goal here is get everything installed and running.
Once we get the frontend and pocketbase running,
we will test the connection beween them.
We want it to be as simple as possible,
so no todo app,
no calculator,
no nothing.

I downloaded the `linux_amd64` version of PocketBase [here](https://github.com/pocketbase/pocketbase/releases/tag/v0.22.20).
Then I extracted the binary to `~/.local/bin`.
Close and open the terminal and type `pocketbase --version`,
which should print something like:

```plaintext
pocketbase version 0.22.20
```

## Why Vite + Typescript + React

Because if you get a job in frontend development in 2024,
you're going to need a bit of those three.

Once you  get `npm` installed, kick-start a new project running:

```bash
npm create vite@latest
```

I chose React and Typescript with SWC.
I recommend you to choose which of these you prefer.
This will create a folder with the name of your project.
I named my project `pocketbase-exploration`

## Getting started with PocketBase

Once you have installed PB, navigate into `pocketbase-exploration` and start a server:

```bash
pocketbase serve
```

Then open `http://127.0.0.1:8090/_/` on your browser.
You are going to be prompted to create an account.

You should see something like:

![pocket base](/posts/pocketbase/pb.png)

Beautiful.

### Installing the SDK

I insalled the sdk running the following command inside `pocketbase-exploration`:

```bash
npm install pocketbase --save
```

### The frontend

Now that we the SDK installed, we can run the frontend server:

```bash
pnpm vite
```

You should see the default vite page.
At this point, your `pocketbase-exploration/src` should look like:

```plaintext
src
├── App.css
├── App.tsx
├── assets
│   └── react.svg
├── index.css
├── main.tsx
└── vite-env.d.ts
```

We are going to edit the `App.tsx` file.
Here are a bunch of functions that I thought you could use to manage authentication:

```typescript
import {
  useCallback,
  useState,
  useMemo,
} from "react";

import PocketBase from 'pocketbase';

const BASE_URL = "http://127.0.0.1:8090";

// [...] 

  const pb = useMemo(() => new PocketBase(BASE_URL), []);
  const [token, setToken] = useState(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model);

  console.log(token)
  console.log(user)

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  const login = useCallback(async (email, password) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, []);

  const doLogin = async _ => login("<email>", "<password>")

  doLogin().then(e => console.log(e))

  if (!user) {
    throw new Error('Not logged in');
  };

// [...] 
```

Good luck!!!
