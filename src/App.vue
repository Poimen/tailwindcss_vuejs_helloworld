<template>
  <div id="app" class="flex flex-col items-center justify-center min-h-screen gap-4">
    <HelloWorld msg="Hello from Tailwind inside VueJS"/>
    <TailwindJIT />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TailwindJIT from './components/TailwindJIT.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TailwindJIT
  }
};
</script>
