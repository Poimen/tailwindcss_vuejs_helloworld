<template>
  <div id="app" class="min-h-screen flex items-center justify-center">
    <HelloWorld msg="Hello from Tailwind inside VueJS"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>
