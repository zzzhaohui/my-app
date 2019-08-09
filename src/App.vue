<template>
  <div id="app" class="clearfix">
    <div id="content" class="clearfix">
      <router-view />
    </div>
    <div id="nav" class="clearfix">
      <hr />
      <ul class="clearfix">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link :to="{
            name: 'Classification',
            params: {navName: '限时购买'}
          }">分类</router-link>
        </li>
        <li>
          <router-link to="/ShoppingCart">购物车</router-link>
        </li>
        <li>
          <router-link to="/Personal">个人中心</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  name: "App",
 
};
</script>

<style scoped lang="less">
#app {
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}
#content{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  padding-bottom: 602px;
  background: #f2f2f2;
}
#nav {
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0;
  text-align: center;
  z-index: 9999;
  ul {
    display: flex;
    li {
      margin: 0 18px;
      list-style: none;
      a {
        display: inline-block;
        padding: 8px 8px;
        text-decoration: none;
        // background: rebeccapurple;
      }
      .router-link-exact-active {
        background: yellow;
      }
    }
  }
}


</style>
