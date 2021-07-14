<template>
  <div>
    <h1 class="text-5xl font-bold text-purple-500">{{msg}}</h1>
    <button class="btn-blue">
      Click me
    </button>
    <button class="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
      Click me
    </button>
    <button class="py-2 px-4 bg-[#7e7e7e] text-[#000] font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
      I'm rendered with JIT syntax for colors 👋
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>
