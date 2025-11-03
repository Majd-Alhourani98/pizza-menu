## 🍕 Pizza Menu

A simple React app for browsing a pizza menu. Built for learning and experimentation, with a clean structure and familiar tooling so you can run and modify it quickly.

### Features
- Browse a curated list of pizzas
- Lightweight, fast, and easy to extend
- Zero backend dependencies (static data or mock APIs)

### Tech Stack
- **React** (Create React App)
- **JavaScript/JSX**
- **CSS** (vanilla or modules, depending on implementation)

## Getting Started

### Prerequisites
- Node.js 18+ and npm 8+

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Runs the app in development mode at `http://localhost:3000` with fast refresh.

### Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Tests
```bash
npm test
```
Starts the test runner in watch mode (if tests are present).

## Project Structure
Common CRA structure (key parts may vary by iteration):

```
src/
  components/      # Reusable UI components
  assets/          # Images, icons, styles (if any)
  App.js           # App shell and routes
  index.js         # Entry point
```

## Deployment
Any static host works:
- Vercel / Netlify: deploy the `build/` folder
- GitHub Pages: use a CRA GH Pages setup

## Acknowledgements
This project was created as a learning exercise and was initially scaffolded with Create React App.

