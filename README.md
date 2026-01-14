# about this site

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## to run

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev

## any issues run this !!!

npm run dev -- --host 127.0.0.1

## open

http://localhost:5173/

## deply git hub

to me on the main

git add .
git commit -m "Update navbar styles"
git push origin main
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run deploy

## if any errors in text

Press Ctrl+F → enable regex search (.\*)

Search for \u2028 \u00A0

## deploy to Netlify

push the changes to github

npm run build

drag-and-drop dist

## using the correct aspect ratios for hero and svg - only on the 4 pages for a fast reloud

Each time a new hero and svg image is beeing importend it is important to make sure the aspect is the same size as the imported image. see last commit for the change: aspect-changed
