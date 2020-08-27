<template>
  <div id="wrap">
    <gnb />
    <div id="main">
      <!-- first start -->
      <div class="first">
        <v-card>
          <v-row justify="space-around">
            <v-avatar color="orange" size="120">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
          </v-row>
          <v-divider class="mx-4"></v-divider>
          1<br>
          2<br>
          3<br>
        </v-card>
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(item,i) in 3"
            :key="i"
          >
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <!-- second start  -->
      <div class="second"></div>
      <!-- third start -->
      <div class="third"></div>
    </div>
  </div>
</template>

<script>
import gnb from './gnb/index';

export default {
  components: { gnb }
}
</script>
<style lang="scss" scoped>
#wrap {
  background-color: #f5f7f8;
}
#main {
  width: 100%;
  max-width: 1368px;
  margin: auto;
  height: 1000px;
  background-color: red;
  display: flex;
  .first {
    width: 25%;
    height: 1000px;
    background-color: green;
  }
  .second {
    width: 58%;
    height: 1000px;
    background-color: black;
    padding: 16px;
  }
  .third {
    width: 17%;
    height: 1000px;
    background-color: blue;
  }
}
@media (max-width: 768px) {
  #main {
    display: block;
    .first {
      width: 100%;
    }
    .second {
      width: 100%;
    }
    .third {
      width: 100%;
      background-color: pink;
    }
  }
}
</style>
