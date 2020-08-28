<template>
  <div id="wrap">
    <gnb class="mg-b10"/>
    <div id="main" class="pd-10">
      <!-- first start -->
      <div class="first">
        <first />
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
import first from './first/index';

export default {
  components: { gnb, first }
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
  display: flex;
  .first {
    width: 25%;
    padding-right: 10px;
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
