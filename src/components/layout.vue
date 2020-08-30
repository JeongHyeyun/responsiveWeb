<template>
  <div id="wrap">
    <gnb />
    <div id="main" class="pd-10">
      <!-- first start -->
      <div class="first">
        <first />
      </div>
      <!-- second start  -->
      <div class="second">
        <second />
      </div>
      <!-- third start -->
      <div class="third">
        <third />
      </div>
    </div>
  </div>
</template>

<script>
import gnb from './gnb/index';
import first from './first/index';
import second from './second/index';
import third from './third/index';

export default {
  components: { gnb, first, second, third }
}
</script>
<style lang="scss" scoped>
#wrap {
  background-color: #f5f7f8;
}
#main {
  width: 100%;
  min-width: 360px;
  max-width: 1368px;
  margin: auto;
  display: flex;
  .first {
    width: 25%;
    padding-right: 10px;
  }
  .second {
    width: 58%;
    padding-right: 10px;
  }
  .third {
    width: 17%;
  }
}
@media (max-width: 768px) {
  #main {
    display: block;
    .first {
      width: 100%;
      padding: 0;
    }
    .second {
      width: 100%;
      padding: 0;
    }
    .third {
      width: 100%;
      background-color: pink;
    }
  }
}
</style>
