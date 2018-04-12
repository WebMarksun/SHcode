<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4" class="imgbox">
          <img src="./assets/ico.png" class="headico">
        </el-col>
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
          <el-menu :default-active="activeIndex" class="el-menu-demo nav-link" mode="horizontal" @select="handleSelect" :router="router">
            <el-menu-item index="/Home">Home</el-menu-item>
            <el-menu-item index="/Label">Label</el-menu-item>
            <el-menu-item index="/Files">File</el-menu-item>
            <el-menu-item index="/About">About</el-menu-item>
            <el-menu-item index="5">GitHub</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xs="20" :sm="0" :md="0" :lg="0" :xl="0">
          <el-row class="tac">
            <el-col :span="8" :offset="16">
              <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect" :router="router">
                <el-submenu index="">
                  <template slot="title">
                        <i class="iconfont icon-htmal5icon35"></i>
</template>
        <el-menu-item-group>
          <el-menu-item index="/Home">Home</el-menu-item>
          <el-menu-item index="/Label">Label</el-menu-item>
          <el-menu-item index="/Files">File</el-menu-item>
          <el-menu-item index="/About">About</el-menu-item>
          <el-menu-item index="">GitHub</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
    <el-footer>Copyright ©  codersunhao.com  版权所有  ICP证：京ICP备17074611号.</el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        router: true,
        activeIndex: '/Home'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
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
    background: #fff;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #444;
    margin-top: 60px;
  }
  .el-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    -moz-box-shadow: 10px 2px 10px #888888;
    /* 老的 Firefox */
    box-shadow: 10px 2px 10px #888888;
  }
  .el-header,
  .el-footer {
    padding: 0;
    color: #333;
    background-color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-header {
    height: 61px !important;
    /* margin: 20px 0; */
    border-bottom: solid 1px #e6e6e6;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu--horizontal {
    border: none;
  }
  .headico {
    margin-top: 10px;
    height: 40px;
    width: 40px;
  }
  .nav-link {
    float: right;
  }
  .el-menu {
    border: none;
  }
  .el-submenu .el-menu-item {
    text-align: center;
    min-width: 60px;
    background-color: #fafafa;
    padding: 0 !important;
  }
  .el-submenu__title:hover {
    background-color: #fff;
  }
  .el-footer {
    border-top: 1px solid #e6e6e6;
    /* -moz-box-shadow: 10px 10px 5px #888888;
    box-shadow: 10px 10px 5px #888888; */
    margin: 30px 0;
    text-align: center;
  }
</style>
