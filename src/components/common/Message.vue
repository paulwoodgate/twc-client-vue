<template>
  <h4>{{ message }}</h4>
</template>

<script>
export default {
  name: 'Message',
  props: ['message']
};
</script>

<style scoped>
h4 {
  text-align: center;
  width: 100vw;
}
</style>
