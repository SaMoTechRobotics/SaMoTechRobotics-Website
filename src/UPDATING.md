# How to Update the Website

The website is made with [SvelteKit](https://kit.svelte.dev/)
using [Typescript](https://www.typescriptlang.org/)
and [SCSS](https://sass-lang.com/).

Install the prerequisites and follow the setup instructions to get started. Then refer to the docs below on how to
update the website.

## Prerequisites

Install these before you start:

> I would highly recommend getting [brew](https://brew.sh/) for macOS to install the packages and also to generally use.
>

- [pnpm](https://pnpm.io/) (more efficient) or [npm](https://www.npmjs.com/)
- [git](https://git-scm.com/)

## Setup

If you are familiar with git and terminals and fully understand below, just do it this way and use your editor of
choice.

```bash
git clone git@github.com:SaMoTechRobotics/SaMoTechRobotics-Website.git
cd SaMoTechRobotics-Website
pnpm install
pnpm dev
```

Otherwise, follow the steps below:

# Docs

## Navigating the Project

- `src/routes` contains the pages of the website, each page is a `+page.svelte` file that is within a folder named with
  the page name, for example the about page is `src/routes/about/+page.svelte`.
- `src/lib/components` contains the components that are used in the pages, most of these do not need to be edited.
- `src/lib/ts/posts.ts` contains the posts that are displayed on the home and news pages.

### Editing Pages

To edit a page, open the `+page.svelte` file in the corresponding folder in `src/routes`.
Each page is made up of the components from `src/lib/components`.
