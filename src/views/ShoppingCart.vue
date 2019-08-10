<template>
  <div id="shopping-box">
    <div class="header">
      <div>
        <h2>购物车</h2>
        <p>(共{{ coun }}件)</p>
      </div>
    </div>
    <div class="conter">
      <div class="div1">
        <ul>
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
          </li>-->
          <li class="clearfix" v-for="v in cartArr" :key="v.id">
            <input class="input1" type="checkbox" v-model="v.isCheck" @click="isCheckClick(v.id)" name id />
            <div class="div2">
              <img :src="v.src" alt />
            </div>
            <div class="div3 clearfix">
              <h5>{{ v.describe }}</h5>
              <p>规格：{{ v.gauge }}</p>
              <h4>￥{{ v.rmb.toString().replace(/\B(?=(\d{3})+$)/g, ",") }}</h4>
            </div>
            <div class="div4 clearfix">
              <button @click="reduce(v.id)">-</button>
              <input type="number" value="1" v-model="v.valueNum" />
              <button @click="add(v.id)">+</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="div1">
          <div class="div2">
          <input type="checkbox" v-model="isAllChecked" @click="checkAll" name id /> 全选
        </div>
        <div class="div3">
          <span>
            合计：
            <p>￥{{ total }}</p>
          </span>
          <button>计算({{ count }}件)</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      cartArr: [
        {
          id: 0,
          src: require("./../assets/images/素材58.jpeg"), //图片地址
          describe: "年代感 XXX风格靠背椅子 年代感 XXX风格靠背椅子", //描述
          gauge: "XXX", //规格
          rmb: "9991", //价格
          valueNum: 1,
          isCheck: false
        },
        {
          id: 1,
          src: require("./../assets/images/素材58.jpeg"), //图片地址
          describe: "年代感 XXX风格靠背椅子 年代感 XXX风格靠背椅子", //描述
          gauge: "XXX", //规格
          rmb: "666", //价格
          valueNum: 2,
          isCheck: false
        },
        {
          id: 2,
          src: require("./../assets/images/素材58.jpeg"), //图片地址
          describe: "年代感 XXX风格靠背椅子 年代感 XXX风格靠背椅子", //描述
          gauge: "XXX", //规格
          rmb: "888", //价格
          valueNum: 3,
          isCheck: false
        },
        {
          id: 3,
          src: require("./../assets/images/素材58.jpeg"), //图片地址
          describe: "年代感 XXX风格靠背椅子 年代感 XXX风格靠背椅子", //描述
          gauge: "XXX", //规格
          rmb: "777", //价格
          valueNum: 4,
          isCheck: false
        }
      ],
      isAllChecked: false
    };
  },
  methods: {
    //减
    reduce(i) {
      if (this.cartArr[i].valueNum >= 2) {
        this.cartArr[i].valueNum--;
      }
    },
    //加
    add(i) {
      this.cartArr[i].valueNum++;
    },
    //单选
    isCheckClick(i){
      if(this.cartArr[i].isCheck === false){ //判断是否选中并计算价格
        this.cartArr[i].isCheck = true
      }
    },
    //全选
    checkAll(){
      if(this.isAllChecked === false){ 
        for(var i=0;i<this.cartArr.length;i++){
          this.cartArr[i].isCheck = true
        }
      }else{
        for(var i=0;i<this.cartArr.length;i++){
          this.cartArr[i].isCheck = false
        }
      }
      this.isAllChecked = !this.isAllChecked
    }
  },
  computed: {
    //统计购物车里面的产品数量
    coun: function(){
      var num = 0;
      for (var i = 0; i < this.cartArr.length; i++) {
        num += parseInt(this.cartArr[i].valueNum);
      }
      return num;
    },
    //统计需要购买的产品数量
    count: function() {
      var num = 0;
      for (var i = 0; i < this.cartArr.length; i++) {
        if(this.cartArr[i].isCheck){
          num += parseInt(this.cartArr[i].valueNum);
        }
      }
      return num;
    },
    //计算需要购买的商品的总价
    total: function() {
      var total = 0;
      for (var i = 0; i < this.cartArr.length; i++) {
        if(this.cartArr[i].isCheck === true){
          total += this.cartArr[i].rmb * this.cartArr[i].valueNum;
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ",");
    }
  }
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
  top: -70px;
  .div1 {
    width: 90%;
    display: inline-block;
    ul {
      width: 100%;
      height: 100%;
      text-align: center;
      li {
        width: 100%;
        height: 130px;
        background: #ffffff;
        border-radius: 5%;
        margin-bottom: 10px;
        .input1 {
          float: left;
          appearance: radio;
          width: 14px;
          position: relative;
          top: 60px;
          left: 6px;
        }
        .div2 {
          width: 26%;
          height: 110px;
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
          padding: 10px 10px 0 10px;
          text-align: left;
        }
        .div4 {
          width: 100%;
          text-align: center;
          position: relative;
          top: -34px;
          left: 100px;
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
.footer {
  width: 100%;
  position: fixed;
  bottom: 65px;
  .div1 {
    width: 100%;
    padding: 9px 0 9px 24px;
    background: #ffffff;
    align-items: center;
    .div2 {
      display: inline-block;
      input {
        appearance: radio;
      }
    }
    .div3 {
      width: 60%;
      display: inline-block;
      margin-left: 60px;
      justify-content: space-between;
      p {
        color: red;
        display: inline-block;
      }
      button {
        width: 27%;
        background: red;
        color: #ffffff;
        font-size: 14px;
        padding: 8px 10px;
        border: none;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
        position: fixed;
        top: 568px;
        left: 256px;
      }
    }
  }
}
</style>

