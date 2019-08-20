<template>
  <div class="text-center">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/tailwind">Tailwind</router-link>
    </div>
    <router-view />
  </div>
</template>

<style src="./assets/tailwind.css">
