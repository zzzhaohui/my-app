<template>
  <div class="home clearfix">
    <div id="header" class="clearfix">
      <div class="div-img1">
        <img class="img1" src="./../assets/images/素材2.jpg" alt />
        <div class="div-img1-h3">
          <div>
            <h3>THE</h3>
            <h3>ART OF HOME</h3>
            <h2>家具的艺术</h2>
          </div>
        </div>
      </div>
      <div class="div-img2">
        <img class="img2" src="./../assets/images/素材1.jpeg" alt />
        <h3>生活品味由你选择</h3>
      </div>
    </div>
    <div id="conter" class="clearfix">
      <div class="conter1 clearfix">
        <div class="div-img1 clearfix">
          <img class="img3" src="./../assets/images/素材7.jpg" alt />
          <div>
            <h5>SIMPLE</h5>
            <h2>时尚简约</h2>
            <h4>新品上架</h4>
          </div>
        </div>
        <div class="div-img2 clearfix">
          <img class="img3" src="./../assets/images/素材15.png" alt />
          <div>
            <h5>PRODUCT</h5>
            <h2>时尚新品</h2>
            <h4>陶瓷制品</h4>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="conter2 clearfix">
        <div class="conter2-1">
          <h2>店内头条</h2>
          <div>
            <img src="./../assets/images/素材20.jpg" alt />
            <h6>客厅善法的摆放特色与方法</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  text-align: center;
  #header {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    .div-img1 {
      width: 100%;
      height: 100%;
      position: relative;
      .img1 {
        width: 100%;
      }
      .div-img1-h3 {
        color: #ffffff;
        text-align: left;
        position: absolute;
        top: 80px;
        left: 44px;
        h3 {
          font-size: 16px;
        }
        h2 {
          font-size: 20px;
        }
      }
    }
    .div-img2 {
      width: 90%;
      background-color: #ffffff;
      border-radius: 5%;
      display: inline-block;
      position: absolute;
      left: 18px;
      top: 164px;
      .img2 {
        width: 50%;
      }
      h3 {
        position: absolute;
        top: 70px;
        left: 34%;
        font-weight: 900;
      }
    }
  }
  #conter {
    display: inline-block;
    width: 90%;
    height: 100%;
    position: relative;
    top: 290px;
    left: 0;
    .conter1 {
      width: 100%;
      height: 100%;
      clear: both;
      .div-img1 {
        // border: 1px solid red;
        width: 48%;
        float: left;
        // padding: 10px 0;
        background: #ffffff;
        border-radius: 5%;
        img {
          float: left;
          width: 50%;
        }
        div {
          text-align: right;
          padding-right: 8px;
          padding-top: 10px;
          h5 {
            font-size: 14px;
          }
          h2 {
            font-size: 18px;
            font-weight: 700;
          }
          h4 {
            color: #dc8c00;
          }
        }
      }
      .div-img2 {
        float: right;
        width: 48%;
        background: #ffffff;
        border-radius: 5%;
        // border: #dc8c00 1px solid;
        img {
          padding-left: 10px;
          float: left;
          width: 36%;
        }
        div {
          text-align: right;
          padding-right: 8px;
          padding-top: 10px;
          h5 {
            font-size: 14px;
          }
          h2 {
            font-size: 18px;
            font-weight: 700;
          }
          h4 {
            color: #dc8c00;
          }
        }
      }
    }
    .conter2 {
      .conter2-1 {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        background: #ffffff;
        border-radius: 5%;
        h2 {
          text-align: left;
          font-size: 18px;
          padding: 10px 10px;
          font-weight: 700;
        }
        div{
          width: 100%;
          height: 100%;
          img{
            width: 94%;
            border-radius: 5%;
          }
          h6{
            position: relative;
            top: -40px;
            left: 0;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
