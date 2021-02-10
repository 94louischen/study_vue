<template>
<div>
 <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    class="project_list"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
   <el-table-column
      prop="name"
      label="项目名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Project_manager"
      label="项目负责人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Project_Cycle"
      label="项目周期"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[0], tableData[1]])">全选</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      tableData: [{'name': '活动应用', 'Project_manager': 'tony', 'Project_Cycle': '1月'},
                      {'name': '请假应用', 'Project_manager': 'mai', 'Project_Cycle': '3月'},
                      {'name': '支付应用', 'Project_manager': 'susi', 'Project_Cycle': '5月'}],
      multipleSelection: []
    } 
  },
  methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      }
    }
  }
</script>

<style scoped>
  .project_list{
    margin: 50px 700px;
  }
</style>
