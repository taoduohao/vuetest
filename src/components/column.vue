<template>
  <el-row :gutter="15">
    <el-col :span="12" v-for="business in businessList">
      <div class="grid-content bg-purple">
        <img :src="business.img" />
        <h4>{{business.title}}</h4>
        <p>{{business.text}}</p>
        <router-link :to="{path:business.url}">
          <button>立即购买</button>
        </router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default ({
    data () {
      return{
         businessList: [
          {
            img:require('../assets/images/1.png'),
            title:'开放产品',
            text:'开放产品是一款开放产品',
            url:'/detail/deone'
          },
          {
            img:require('../assets/images/2.png'),
            title:'品牌营销',
            text:'品牌营销帮助你的产品更好地找到定位',
            url:'/detail/detwo'
          },
          {
            img:require('../assets/images/3.png'),
            title:'使命必达',
            text:'使命必达快速迭代永远保持最前端的速度',
            url:'/detail/dethree'
          },
          {
            img:require('../assets/images/4.png'),
            title:'勇攀高峰',
            text:'帮你勇闯高峰，到达事业的顶峰',
            url:'/detail/defour'
          }
        ]
      }
    }
  })
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 0px;
  margin-top: 15px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 1px #ddd;
  overflow: hidden;
  padding: 15px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 0px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bg-purple img {
  float: left;
  margin-right: 15px;
}
.bg-purple h4 {
  font-weight: bold;
  line-height: 30px;
  font-size: 16px;
}
.bg-purple p {
  line-height: 30px;
}
.bg-purple button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  outline: none;
  margin-top: 10px;
}
</style>