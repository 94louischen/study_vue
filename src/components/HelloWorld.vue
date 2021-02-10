<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <span v-on:click="username='张三'">{{username}},你好啊</span> -->
    <span @click="changeUser">{{username}},你好啊</span>
    <p>有一天，{{username}}想去网吧上网</p>
    <p v-if="age >= 70">{{username}}老爷爷，您还是回家锻炼身体吧？</p>
    <p v-else-if="age >=18">{{username}}，欢迎您愉快的玩英雄联盟</p>
    <p v-else>{{username}}小朋友，你的作业写完了？</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      username: "louis",
      age: 20

    }
  },
  methods:{
    changeUser(){
      this.username = '陈旋'
    }
  },
  created() {
      this.username = this.$route.query.username
      this.age = this.$route.query.age
  },
  mounted() {
    console.log("vue实例挂载到DOM树之后")
  }
}
</script>

<style scoped>
  .hello p {
    color: red;
  }
</style>
