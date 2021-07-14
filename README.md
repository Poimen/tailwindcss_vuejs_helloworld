# Tailwindcss and VueJS Hello World

Hello World test project for trying out [Tailwindcss](https://tailwindcss.com)

This is just a sample application from Vue CLI and attempt at an optimised Tailwind css output.

Versions:
- VueJS 3
- TailwindCSS 2.0.1

## Steps
1. Vue CI scaffold project with separate config files:
```
vue create .
```

2. npm install tailwindcss and dependencies

VueJS 3 does not currently support PostCSS 8, so install the [compat](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build) build for Tailwind.

```
npm install --save-dev tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

1. Generate configuration file
```
npx tailwindcss-cli@latest init
```

4. Add `postcss.config.js` changes
5. Add `src/assets/styles/tailwind.css` with:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Add tailwind to main.js:
```
import './assets/styles/tailwind.css';
```

7. Test...and it should all work...

## After production build...
```
npm run build
```

should output something similar to:
```
  File                                 Size                Gzipped

  dist\js\chunk-vendors.d37d1dc5.js    82.14 KiB           30.85 KiB
  dist\js\app.174f1285.js              3.80 KiB            1.68 KiB
  dist\css\app.b0a48201.css            7.70 KiB            2.17 KiB
```

## Optimisations

By default Tailwind runs purgecss to remove unnecessary styles. Any further optimisation do not add significant value.

For other CSS assets, `cssnano` has been added. This does not reduce tailwind sizes.

For further reductions to suite your use case - refer the tailwind [docs](https://tailwindcss.com/docs/optimizing-for-production)
