# VOD-be
Template for hk express based microservices

## Get started

- download archive of project from releases .zip
- unpack .zip and use files to push to your empty repo

## Important commands

- `yarn start` starts the dev server, with linting and reload on changes
- `yarn cover` runs all `*.spec.js` files within the app/ directory and generates a test coverage report detailing how much code is covered
- A pre-commit hook is included which will run eslint + unit tests before every commit

## Notes
- This project has been set up to run on Node v8.1 or above.
- we use the `dotenv-extended` library to handle local environment. If you want to override default environment variable, add a `.env` file to the base of your project. This file will be .gitignored and you can place your env specific variables like api keys here.
- This project comes default with a `/explorer` route that you can define/modify using the `api.yaml`. This `/explorer` route will be disabled in production environment.
