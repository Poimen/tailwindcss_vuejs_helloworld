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
```
  File                                 Size               Gzipped

  dist/js/chunk-vendors.2bfcdb6b.js    118.22 KiB         41.09 KiB
  dist/js/app.a44c6bfd.js              7.16 KiB           2.73 KiB
  dist/js/about.f80e36fb.js            0.44 KiB           0.31 KiB
  dist/css/app.dd43ce07.css            620.96 KiB         80.00 KiB
```

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
```
  File                                 Size               Gzipped
  dist/js/chunk-vendors.2bfcdb6b.js    118.22 KiB         41.09 KiB
  dist/js/app.d731a3d0.js              7.20 KiB           2.75 KiB
  dist/js/about.f80e36fb.js            0.44 KiB           0.31 KiB
  dist/css/app.f0cac879.css            1.89 KiB           0.77 KiB
```

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
