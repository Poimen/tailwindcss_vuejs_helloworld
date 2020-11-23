<template>
  <h1 class="text-5xl font-bold text-purple-500">{{msg}}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>
