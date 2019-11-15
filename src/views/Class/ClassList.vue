<template>
  <el-table :data="tableData"
            style="width: 100%">
    <el-table-column prop="classname"
                     label="班级名称"
                     width="220">
    </el-table-column>
    <el-table-column prop="createtime"
                     label="创建时间"
                     width="220">
    </el-table-column>
    <el-table-column prop="teacher"
                     label="任课老师"
                     width="220">
    </el-table-column>
    <el-table-column prop="classmaster"
                     label="班主任"
                     width="220">
    </el-table-column>
    <el-table-column label="操作"
                     width="200">
      <template slot-scope="scope">
        <el-button size="mini"
                   type="danger"
                   @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { findClassroom, delClass } from "@/api/index";
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.findClass();
  },
  methods: {
    async findClass() {
      let { data } = await findClassroom();
      this.tableData = [...this.tableData, ...data.data];
    },
    // 删除
    async handleDelete(id) {
      let { data } = await delClass(id);
      console.log(await delClass(id));
      if (data.code == 0) {
        this.tableData = this.tableData.filter(item => {
          return item._id != id;
        });
      }
    }
  }
};
</script>