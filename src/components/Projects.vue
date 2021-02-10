<template>
  <div>
    <table>
      <tr>
        <th v-for="(title, key) in ProjectTitle" v-bind:key="key">
          {{ title }}
        </th>
        <!-- <th>项目名称</th>
           <th>项目负责人</th>
           <th>项目周期</th> -->
      </tr>
      <tr v-for="(project, key) in projects_list" v-bind:key="key">
        <td>{{ project.name }}</td>
        <td>{{ project.Project_manager }}</td>
        <td>{{ project.Project_Cycle }}</td>
      </tr>
      <!-- <tr>
      <td>活动应用</td>
      <td>tony</td>
      <td>1月</td>
    </tr>
    <tr>
      <td>请假应用</td>
      <td>mai</td>
      <td>3月</td>
    </tr>
    <tr>
      <td>支付应用</td>
      <td>susi</td>
      <td>5月</td>
    </tr> -->
    </table>
    <p>当前项目的id是:{{id}}</p>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      ProjectTitle: ["项目名称", "项目负责人", "项目周期"],
      projects_list: [
        { name: "活动应用", Project_manager: "tony", Project_Cycle: "1月" },
        { name: "请假应用", Project_manager: "mai", Project_Cycle: "3月" },
        { name: "支付应用", Project_manager: "susi", Project_Cycle: "5月" },
      ]
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style scoped>
table {
  margin: 50px auto;
  border-collapse: collapse;
  width: 30%;
}
td,
th {
  border: 1px solid #dddddd;
  padding: 8;
}
</style>
