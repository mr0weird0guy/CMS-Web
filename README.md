# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
pnpm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `pnpm install` (or `npm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

We'll be using pnpm as the package manager: https://pnpm.io/installation

Run this command from an elevated command prompt (Run powershell as administrator):

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex

pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Front-End Development

Strictly use Flexbox. For uniformity and ease of development for everyone.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
