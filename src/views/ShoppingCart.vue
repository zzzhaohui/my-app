<template>
  <div id="shopping-box">
    <div class="header">
      <div>
        <h2>购物车</h2>
        <p>(共12件)</p>
      </div>
    </div>
    <div class="conter">
      <div class="div1">
        <ul>
          <li class="clearfix">
              <input class="input1" type="checkbox" name id />
              <div class="div2">
                <img src="./../assets/images/素材58.jpeg" alt />
              </div>
            
            <div class="div3 clearfix">
              <h5>年代感 XXX风格靠背椅子 年代感 XXX风格靠背椅子</h5>
              <p>规格：xxx</p>
              <h4>￥990</h4>
            </div>
            <div class="div4 clearfix">
              <button>-</button>
              <input type="number" value="1" />
              <button>+</button>
            </div>
          </li>
          <!-- <li class="clearfix">
              <input class="input1" type="checkbox" name id />
              <div class="div2">
                <img src="./../assets/images/素材58.jpeg" alt />
              </div>
            
            <div class="div3 clearfix">
              <h5>年代感 XXX风格靠背椅子 年代感 XXX风格靠背椅子</h5>
              <p>规格：xxx</p>
              <h4>￥990</h4>
            </div>
            <div class="div4 clearfix">
              <button>-</button>
              <input type="number" value="1" />
              <button>+</button>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart"
};
</script>

<style lang="less" scoped>
#shopping-box {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 150px;
  background: linear-gradient(90deg, rgb(96, 105, 112), rgb(16, 18, 22));
  color: #ffffff;
  text-align: center;
  div {
    width: 90%;
    display: inline-block;
    text-align: left;
    margin-top: 20px;
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
}
.conter {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  top: 0;
  .div1 {
    width: 90%;
    display: inline-block;
    ul {
      width: 100%;
      height: 100%;
      text-align: center;
      li {
        width: 100%;
        height: 137px;
        background: #ffffff;
        border-radius: 5%;
          .input1 {
            float: left;
            appearance: radio;
            width: 14px;
            
          }
          .div2 {
            width: 26%;
            height: 115px;
            overflow: hidden;
            border-radius: 5%;
            float: left;
            margin: 10px 10px;
            img {
              width: 100%;
              transform: scale(1.3);
            }
          }
        
        .div3 {
            display: block;
            padding: 10px;
            text-align: left;
        }
        .div4 {
          width: 100%;
          text-align: center;
          
          input {
            width: 7%;
          }
          button {
            padding: 0 5px;
          }
        }
      }
    }
  }
}
</style>

