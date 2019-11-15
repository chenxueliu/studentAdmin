<template>
  <div class='containerbox'>
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="班级名称"
                    prop="classname">
        <el-input v-model="ruleForm.classname"></el-input>
      </el-form-item>

      <el-form-item label="创建时间"
                    required>
        <el-col :span="11">
          <el-form-item prop="createtime">
            <el-date-picker type="datetime"
                            placeholder="选择日期"
                            v-model="ruleForm.createtime"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="讲师"
                    prop="teacher">
        <el-input v-model="ruleForm.teacher"></el-input>

      </el-form-item>
      <el-form-item label="班主任"
                    prop="classmaster">
        <el-input v-model="ruleForm.classmaster"></el-input>

      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addClassRoom } from "@/api/index";
export default {
  data() {
    return {
      ruleForm: {
        classname: "",
        createtime: "",
        teacher: "",
        classmaster: ""
      }
    };
  },
  methods: {
    async submitForm() {
      let { classname, createtime, teacher, classmaster } = this.ruleForm;
      let formobj = { classname, createtime, teacher, classmaster };
      let { data, status } = await addClassRoom(formobj);
      if (status == 200) {
        alert(data.msg);
      } else {
        alert("网络错误，请稍后再试");
      }
    }
  }
};
</script>
<style>
.containerbox {
  width: 1000px;
  height: 650px;
  background: white;
  border: 1px black solid;
  margin: 20px auto;
}
.el-input {
  width: 415px;
  margin-top: 20px;
}
</style>