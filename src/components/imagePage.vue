<template>
  <div class="demo-image">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <el-image
        style="width: 380px; height: 380px"
        :src="url"
        :fit="fit"
      ></el-image>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fits: ["狗狗"],
      url:
        "",
    };
  },
  mounted() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        this.url = response.data.message
      })
      .catch(function (err) {
        console.log(err.data)
      });
  },
};
</script>