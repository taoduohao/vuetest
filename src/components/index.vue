<template>
  <div id="main">
    <article class="wrapper">
      <nav class="sidebar">
        <div class="sidebar-box">
          <h2>全部产品</h2>
          <div v-for="nav in navList" class="subnav">
            <h3>{{nav.title}}</h3>
            <ul>
              <li v-for="list in nav.list">
                <a :href="list.url">{{list.name}}</a>
                <span class="hot" v-show="list.hot">HOT</span>
              </li>
            </ul>
            <div class="hr" v-show="!nav.last"></div>
          </div>
        </div>
        <div class="sidebar-box">
          <h2>最近新闻</h2>
          <ul>
            <li v-for="news in newList">
              <a :href="news.url">{{news.name}}</a>
            </li>
          </ul>
        </div>
      </nav>
      <section class="container">
        <div class="carousel-box">
          <carousel></carousel>
        </div>
        <div class="column-box">
          <column></column>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import $ from 'jquery'
import carousel from './carousel'
import column from './column'
export default {
  name: 'index',
  components: {
    carousel,
    column
  },
  data () {
    return {
      navList:{
        PC:{
          title:'PC产品',
          list:[
            {
              name:'数据统计',
              url:'http://www.baidu.com',
              hot:true
            },
            {
              name:'数据预测',
              url:'http://www.qq.com',
              hot:true
            },
            {
              name:'流量分析',
              url:'http://www.alibaba.com'
            },
            {
              name:'公告发布',
              url:'http://www.taobao.com'
            }
          ]
        },
        Phone:{
          title:'手机端业务',
          last:true,
          list:[
            {
              name:'产品助手',
              url:'http://www.baidu.com',
            },
            {
              name:'智能语音',
              url:'http://www.qq.com',
              hot:true
            },
            {
              name:'团队地图',
              url:'http://www.alibaba.com'
            }
          ]
        }
      },
      newList:[
        {
          name:'新闻一新闻一新闻一新闻一新闻一新闻一新闻一新闻一新闻一新闻一',
          url:'http://www.baidu.com'
        },
        {
          name:'新闻二新闻二新闻二新闻二新闻二新闻二新闻二新闻二新闻二新闻二',
          url:'http://www.qq.com'
        },
        {
          name:'新闻三新闻三新闻三新闻三新闻三新闻三新闻三新闻三新闻三新闻三',
          url:'http://www.alibaba.com'
        },
        {
          name:'新闻四新闻四新闻四新闻四新闻四新闻四新闻四新闻四新闻四新闻四',
          url:'http://www.taobao.com'
        }
      ]
    }
  }
}
</script>
<style>
.wrapper {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.sidebar {
  float: left;
  width: 300px;
  margin: 15px 15px 15px 0;
}
.sidebar-box {
  margin-bottom: 15px;
  padding-bottom: 15px;
  box-shadow: 0 0 1px #ddd;
  background: #fff;
}
.sidebar-box h2 {
  line-height: 35px;
  background: #4fc08d;
  padding: 0 15px;
  color: #fff;
}
.sidebar-box h3 {
  line-height: 30px;
  font-weight: bold;
  padding: 0 15px;
  margin: 5px 0;
}
.sidebar-box ul {
  margin: 10px 0;
}
.sidebar-box ul li {
  line-height: 25px;
  padding: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot {
  background: red;
  color: #fff;
  font-size: 12px;
}
.hr {
  width: 270px;
  height: 1px;
  background: #eee;
  margin: 10px 15px;
}
.container{
  float: right;
  width: 885px;
  margin: 15px 0;
}
</style>
