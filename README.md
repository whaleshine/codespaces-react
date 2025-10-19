<<<<<<< HEAD
# GitHub Codespaces ♥️ React

Welcome to your shiny new Codespace running React! We've got everything fired up and running for you to explore React.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

This project was bootstrapped for you with [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `npm start`

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn Vitest, a Vite-native testing framework, go to [Vitest documentation](https://vitest.dev/guide/)

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://sambitsahoo.com/blog/vite-code-splitting-that-works.html](https://sambitsahoo.com/blog/vite-code-splitting-that-works.html)

### Analyzing the Bundle Size

This section has moved here: [https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer)

### Making a Progressive Web App

This section has moved here: [https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf](https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf)

### Advanced Configuration

This section has moved here: [https://vitejs.dev/guide/build.html#advanced-base-options](https://vitejs.dev/guide/build.html#advanced-base-options)

### Deployment

This section has moved here: [https://vitejs.dev/guide/build.html](https://vitejs.dev/guide/build.html)

### Troubleshooting

This section has moved here: [https://vitejs.dev/guide/troubleshooting.html](https://vitejs.dev/guide/troubleshooting.html)
=======
// ...existing code...

# Codespaces React — Product Listing Example

A small React + Vite starter that demonstrates a product listing page with search, sort and filters. Uses Tailwind CSS for styling and Faker to generate demo data.

## Key files & symbols

- App and UI: [`App`](src/App.jsx) — main UI, reducer logic is defined there as [`reducer`](src/App.jsx) and [`initialState`](src/App.jsx).
- Demo data: [`data`](src/data/index.js) — Faker-generated product list.
- Entry: [`index.jsx`](src/index.jsx) and template [`index.html`](index.html).
- Styles: [`index.css`](src/index.css) (Tailwind import).
- Vite config & test runner: [`vite.config.js`](vite.config.js).
- Tests: [`App.test.jsx`](src/App.test.jsx) and test setup [`setupTests.js`](src/setupTests.js).
- Perf helper: [`reportWebVitals`](src/reportWebVitals.js).
- PWA manifest & robots: [`public/manifest.json`](public/manifest.json), [`public/robots.txt`](public/robots.txt).
- Dev container: [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) (auto-starts the app and forwards port 3000).
- VS Code launch: [.vscode/launch.json](.vscode/launch.json).
- Project metadata: [`package.json`](package.json).
- License: [LICENSE](LICENSE).

## Features

- Search by product name.
- Sort by price (low → high, high → low).
- Filters: in-stock only, fast delivery only.
- Demo data seeded for deterministic results via Faker.

## Local setup

Prerequisites: Node.js (recommended via devcontainer if used).

Install dependencies:

```bash
npm install
```

Run development server (Vite) on port 3000:

```bash
npm start
```

Open the app in the host browser (from the devcontainer environment):

```bash
$BROWSER http://localhost:3000
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run tests (Vitest + Testing Library):

```bash
npm test
```

## Devcontainer behavior

The devcontainer defined in [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) runs `npm install` on update and forwards port 3000. It also opens `src/App.jsx` on start and attempts to start the app automatically.

## Notes

- Tailwind is included via [`index.css`](src/index.css) and the plugin in [`vite.config.js`](vite.config.js).
- Faker seeding in [`src/data/index.js`](src/data/index.js) ensures reproducible demo data.
- Tests use JSDOM as configured in [`vite.config.js`](vite.config.js).

## Troubleshooting

- If the dev server doesn't appear, confirm no process is already using port 3000.
- If images from Faker fail to load, they are placeholder URLs; network restrictions may block them.

## Contributing

Small example — open a PR with improvements. Keep UI and reducer logic inside [`App`](src/App.jsx).

## License

This project is MIT licensed — see [LICENSE](LICENSE).
>>>>>>> 414979d (feat: initialize React project with Vite and Tailwind CSS)
