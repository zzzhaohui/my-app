<template>
  <div id="exhibition">
    <ul>
      <!-- <li>
        <img src="./../assets/images/素材12.jpg" alt />
        <p>棉麻布艺风情北欧简约风棉麻布艺</p>
        <h4>价格：￥256</h4>
        <h6>销量：9999</h6>
      </li> -->
      <li v-for="(v,i) in ExhibitionArr" :key="i">
          <img :src="v.src" alt="">
          <p>{{ v.describe }}</p>
          <h4>价格：￥{{ v.rmb }}</h4>
          <h6>销量：{{ v.number }}</h6>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Exhibition",
  props: {
    ExhibitionArr: Array,
    required: true
  },
  data() {
    // console.log(this.$route.params.navName);
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
#exhibition {
  width: 100%;
  height: 100%;
  li {
    font-size: 12px;
    float: left;
    width: 43%;
    margin: 8px 0 8px 8px;
    background: #ffffff;
    text-align: center;
    padding: 5px;
    img {
      width: 90%;
    }
    p {
      text-align: left;
    }
    h4 {
      text-align: left;
      color: #ff0000;
      font-size: 14px;
    }
    h6 {
      text-align: left;
    }
  }
}
</style>