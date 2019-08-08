<template>
  <div id="about">
    <div class="header">
      <p>商品分类</p>
    </div>
    <div id="classNav" class="clearfix">
      <ul class="clearfix">
        <li>
          <router-link to="{
            pathname: 'Exhibition',
            params: 1
          }">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
        <li>
          <router-link to="/Exhibition">必买清单</router-link>
        </li>
      </ul>
    </div>
    <div id="content" class="clearfix">
      <router-view />
      <div class="clearfix">
        <!-- <Exhibition></Exhibition> -->
      </div>
    </div>
  </div>
</template>

<script>
import Exhibition from "./../components/Exhibition";
export default {
  name: "Classification",
  data() {
    return {};
  },
  components: {
    Exhibition
  }
};
</script>


<style lang="less" scoped>
#about {
  width: 100%;
  height: 100%;
  .header {
    text-align: center;
    line-height: 50px;
    background: #464d53;
    color: #ffffff;
    font-size: 14px;
  }
  #classNav {
    display: inline-block;
    border: 1px solid red;
    text-align: center;
    float: left;
    background: #e6e6e6;
    ul {
      li {
        padding: 20px 10px;
      }
    }
  }
  #content {
    width: 79%;
    float: right;
  }
}
</style>

