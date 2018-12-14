<template>
  <div id="app">
    <header id="header" class="">
      <div class="header-box">
        <router-link :to="{path:'/'}">
          <img src="./assets/logo.png" class="logo"/>
        </router-link>
        <ul class="header-list">
          <li @click="showPrompt('isShowLogin')">登录</li>
          <li>|</li>
          <li @click="showPrompt('isShowReg')">注册</li>
          <li>|</li>
          <li @click="showPrompt('isShowAbout')">关于</li>
        </ul>
      </div>
    </header><!-- /header -->
    <transition name="fade-left">
      <router-view></router-view>
    </transition>
    <footer id="footer" class="">
      <p>&copy; 2018 shenzhen taoduohao</p>
    </footer>
    <prompt :is-show="isShowAbout" @on-close="hidePrompt('isShowAbout')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </prompt>
    <prompt :is-show="isShowLogin" @on-close="hidePrompt('isShowLogin')">
      <!-- 写在标签里面的值或者方法，可以传递到子组件中，只有这样，子组件才可以触发父组件的方法 -->
      <login @on-close="hidePrompt('isShowLogin')"></login>
    </prompt>
    <prompt :is-show="isShowReg" @on-close="hidePrompt('isShowReg')">
      <reg @on-close="hidePrompt('isShowReg')"></reg>
    </prompt>
  </div>
</template>

<script>
import prompt from './components/prompt'
import login from './components/login'
import reg from './components/reg'
export default {
  name: 'App',
  components: {
    prompt,
    login,
    reg
  },
  data (){
    return {
      isShowAbout:false,
      isShowLogin:false,
      isShowReg:false
    }
  },
  methods:{
    showPrompt(parem){
      this[parem] = true
    },
    hidePrompt(parem){
      this[parem] = false
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#header {
  height: 100px;
  background: #363636;
}
.header-box {
  width: 1200px;
  margin: 0 auto;
}
.logo {
  width: 50px;
  margin-top: 25px;
  float: left;
  cursor: pointer;
}
.header-list {
  float: right;
}
.header-list li {
  float: left;
  line-height: 100px;
  color: #b2b2b2;
  margin: 0 3px;
  cursor: pointer;
}
#footer {
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin-top: 20px;
  background: #e3e4e8;
}
.fade-left {
  position: absolute;
  left:0;
  right: 0;
}
.fade-left-enter-active {
  transition: all 1.2s ease;
}
.fade-left-leave-active {
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.fade-left-enter, .fade-left-leave-to {
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
