# Tailwindcss and VueJS Hello World

Hello World test project for trialing out [Tailwindcss](https://tailwindcss.com)

This is just a sample application from Vue CLI and attempt at an optimised Tailwind css output

## Steps
1. Vue CI scaffold project with separate config files:
```
vue create .
```

2. npm install tailwindcss
```
npm install --save-dev tailwindcss
```

3. Generate configuration file
```
npx init tailwind
```

4. Add `postcss.config.js` changes
5. Add `tailwind.css` with:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Use tailwindcss inside `site.scss`:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Import `site.scss` into `main.js`

8. Test...and it should all work....

## After production build...
Sizes:
308K    dist/css
736K    dist/js
12K     dist/img
1.1M    dist/

## Optimisations
1. Install cssnano
```
npm install --save-dev cssnano
```

2. Install purgecss
```
npm install --save-dev @fullhuman/postcss-purgecss
```

3. Update `postcss.config.js` to include above modules


## After optimisations
8.0K    dist/css
736K    dist/js
12K     dist/img
768K    dist/



## Thanks to blog posts:
- https://flaviocopes.com/vue-tailwind/
- https://flaviocopes.com/tailwind-setup/
- https://nick-basile.com/blog/post/setting-up-tailwind-in-a-laravel-project
- https://medium.com/backticks-tildes/how-to-configure-your-vue-js-app-to-use-tailwind-css-a6f95d06e1c7


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
