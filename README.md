# Tailwindcss and VueJS Hello World

Hello World test project for trailing out [Tailwindcss](https://tailwindcss.com)

This is just a sample application from Vue CLI and attempt at an optimised Tailwind css output

## Steps
1. Vue CI scaffold project with separate config files:
```
vue create .
```

2. npm install tailwind
```
npm install --save-dev tailwind
```

3. Generate configuration file
```
./node_modules/.bin/tailwind init tailwind.js
```

4. Add `postcss.config.js` changes
5. Add `tailwind.css` with:
```
@tailwind preflight;
@tailwind components;
@tailwind utilities;
```

6. Import `tailwind.css` into `main.js`

7. Test...and it should all work....


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
