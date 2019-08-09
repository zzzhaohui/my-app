<template>
  <div id="about">
    <div class="header">
      <p>商品分类</p>
    </div>
    <div id="classNav" class="clearfix">
      <ul class="clearfix">
        <li v-for="(v,i) in rouerArr" :key="v.id" @click="clickClass(v.conten)">
          <router-link :to=v.navName>{{ v.conten }}</router-link>
        </li>
      </ul>
    </div>
    <div id="content" class="clearfix">
      <!-- <router-view :ExhibitionArr="ExhibitionArr"></router-view> -->
      <Exhibition :ExhibitionArr="ExhibitionArr"/>
    </div>
  </div>
</template>

<script>
import Exhibition from "./../components/Exhibition";
export default {
  name: "Classification",
  data() {
    return {
      rouerArr: [
        {
          id: '1',
          navName: '/Exhibition/限时购买',
          conten: '限时购买'
        },{
          id: '2',
          navName: '/Exhibition/必买清单',
          conten: '必买清单'
        },{
          id: '3',
          navName: '/Exhibition/套餐搭配',
          conten: '套餐搭配'
        },{
          id: '4',
          navName: '/Exhibition/1',
          conten: '限时购买'
        },{
          id: '5',
          navName: '/Exhibition/2',
          conten: '限时购买'
        },{
          id: '6',
          navName: '/Exhibition/3',
          conten: '限时购买'
        },{
          id: '7',
          navName: '/Exhibition/4',
          conten: '限时购买'
        },{
          id: '8',
          navName: '/Exhibition/5',
          conten: '限时购买'
        },
      ],
      ExhibitionArr: [],
      ExhibitionArr1: [
        {
          id: 1,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 256,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 2,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 256,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 3,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 256,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 4,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 256,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 5,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 256,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 6,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 256,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        }
      ],
      ExhibitionArr2: [
        {
          id: 1,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 666,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 2,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 666,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 3,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 666,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 4,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 666,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 5,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 666,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 6,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 666,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        }
      ],
      ExhibitionArr3: [
        {
          id: 1,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 555,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 2,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 555,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 3,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 555,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 4,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 555,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 5,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 555,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        },
        {
          id: 6,
          describe: "棉麻布艺风情北欧简约风棉麻布艺",
          rmb: 555,
          number: 21321,
          src: require("./../assets/images/素材12.jpg")
        }
      ]
    };
  },
  beforeMount() {
    this.classLoad()
  },
  methods: {
    //点击分类  加载 限时购买
    classLoad(){
      // console.log(this.$route.params.navName)
      if(this.$route.params.navName == '限时购买'){
        this.clickClass('限时购买')
      }
    },
    clickClass(v){
      // console.log(v)
      switch(v){
        case "限时购买":
          this.ExhibitionArr = this.ExhibitionArr1;
          break;
        case "必买清单":
          this.ExhibitionArr = this.ExhibitionArr2;
          break;
        case "套餐搭配":
          this.ExhibitionArr = this.ExhibitionArr3;
          break;
      }
    }
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
    // border: 1px solid red;
    text-align: center;
    float: left;
    background: #e6e6e6;
    ul {
      li {
        
        a{
          display: inline-block;
          padding: 20px 10px;
        }
        .router-link-exact-active{
          background: #ffffff;
        }
      }
    }
  }
  #content {
    width: 79%;
    float: right;
  }
}
</style>

