<template>
  <v-app>
    <v-main>
      <layout/>
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
