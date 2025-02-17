# Frontend Scaffold - Vite + Vue3 + Tailwind

This is a basic frontend Scaffold which will essentially be the boilerplate for building new apps.

This scaffold includes:

- [Vite](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
- [Vue Router v4](https://github.com/vuejs/router)
- [Headless UI](https://headlessui.dev/vue/menu)
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue)
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

Other tools intergrated:
- [Bugsnag](https://docs.bugsnag.com/)
- [Auth0](https://auth0.com/docs)
- [Posthog](https://posthog.com/docs)

## Getting Started

1. Fork the master branch of this repository.
2. Run `npm install` from the root of the repo to install dependencies.
3. Update the values of environment Variables.

## Environment Variables

- Your Bugsnag API Key - `BGSNG_API_KEY`
- Your Auth0 Domain URL - `AUTH0_DOMAIN`
- Your Auth0 Client ID - `AUTH0_CLIENT_ID`
- Your Auth0 Client Secret - `AUTH0_CLIENT_SECRET`
- Your Auth0 API Identifier - `AUTH0_API_IDENTIFIER`
- Your PostHog API Key - `PH_API_KEY`
- Your PostHog API Host URL - `PH_API_HOST`

## Available Scripts

- Dev: `vite --host`
- Build: `vite build`
- Serve: `vite build`
- Test: `vitest --dom`

To run the scripts, use `npm run <script name>`