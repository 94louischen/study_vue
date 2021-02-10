<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Projects/> -->
    <!-- <ProjectsNew/> -->
    <!-- <Login/> -->
    <!-- 第一种 -->
    <!-- <ul>
      <li><router-link to="/hellowrold">主页</router-link></li>
      <li><router-link to="/login">登录</router-link></li>
      <li><router-link to="/projects">项目列表A页面</router-link></li>
      <li><router-link to="/projectsNew">项目列表B页面</router-link></li>
    </ul> -->
    <!-- 第二种 -->
    <ul>
        <li><router-link :to="{name: 'helloworld',query:{age:20, username:'小陈'}}">主页</router-link></li>
        <li><router-link :to="{name: 'login'}">登录</router-link></li>
        <li><router-link :to="{name: 'projects', params: { id: 1 }}">项目列表A页面</router-link></li>
        <li><router-link :to="{name: 'projectsNew'}">项目列表B页面</router-link></li>
        <li><router-link :to="{name: 'cardpage'}">走马灯页面</router-link></li>
        <li><router-link :to="{name: 'imagePage'}">加载图片</router-link></li>
      </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Projects from './components/Projects'
// import ProjectsNew from './components/Projects_New'
// import Login from './components/login'

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Projects,
    // ProjectsNew,
    // Login
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
