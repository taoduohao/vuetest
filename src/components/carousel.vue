<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in carouselList">
      <a :href="item.url">
        <h3>{{item.title}}</h3>
        <img :src="item.img" />
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default ({
    data () {
      return {
        carouselList:[
          {
            url:'http://www.baidu.com',
            title:'标题标题标题标题标题标题111',
            img:require('../assets/carousel/pic1.jpg')
          },
          {
            url:'http://www.qq.com',
            title:'标题标题标题标题标题标题222',
            img:require('../assets/carousel/pic2.jpg')
          },
          {
            url:'http://www.alibaba.com',
            title:'标题标题标题标题标题标题333',
            img:require('../assets/carousel/pic3.jpg')
          },
          {
            url:'http://www.taobao.com',
            title:'标题标题标题标题标题标题444',
            img:require('../assets/carousel/pic4.jpg')
          }
        ]
      }
    }
  })
</script>

<style>
.el-carousel {
  width: 100%;
  height: 500px;
}
.el-carousel__container {
  height: 500px !important;
}
.el-carousel__item img {
  width: 100%;
  height: 500px;
}
.el-carousel__item h3 {
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 100;
  color: #fff;
  font-size: 30px;
  opacity: 1;
  line-height: 500px;
  margin-left: -50%;
  left: 50%;
}
</style>