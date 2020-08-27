<template>
  <v-app>
    <v-main>
      <layout/>
      <v-avatar color="orange" size="62">
    <span class="white--text headline">62</span>
  </v-avatar>
    </v-main>
  </v-app>
</template>

<script>
import layout from './components/layout';

export default {
  name: 'App',

  components: {
    layout,
  },

  data: () => ({
    //
  }),
};
</script>
