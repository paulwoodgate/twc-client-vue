<template>
  <b-button :to="router.back()" variant="success">{{ text }}</b-button>
</template>

<script>
import router from '@/router';
export default {
  name: 'BackButton',
  props: ['text'],
  components: [router]
};
</script>
