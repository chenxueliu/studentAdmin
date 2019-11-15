<template>
  <div class="studentAddform">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="学制">
        <el-select v-model="form.year"
                   placeholder="请选择学制">
          <el-option v-for="item in form.classtypeoptions"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="form.major"
                   placeholder="请选择专业">
          <el-option v-for="item in form.masteroptions"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级">
        <el-select v-model="form.classname"
                   placeholder="请选择班级">
          <el-option v-for="item in form.classnameoptions"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="市场部">
        <el-select v-model="form.market"
                   placeholder="请选择市场部">
          <el-option v-for="item in form.marketoptions"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="已有成绩">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item label="挂科次数">
        <el-input v-model="form.nopass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="addstudent">添加</el-button>
        <el-button @click="clear">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addStudent } from "@/api/index";

export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        age: "",
        year: "",
        major: "",
        classname: "",
        market: "",
        pass: "",
        nopass: "",
        classtypeoptions: [
          {
            value: "一年"
          },
          {
            value: "两年"
          },
          {
            value: "三年"
          }
        ],
        masteroptions: [
          {
            value: "web架构"
          },
          {
            value: "视觉设计"
          }
        ],
        classnameoptions: [
          {
            value: "1807A"
          },
          {
            value: "1810A"
          },
          {
            value: "1902A"
          },
          {
            value: "1905A"
          }
        ],
        marketoptions: [
          {
            value: "冀中市场部"
          },
          {
            value: "豫皖市场部"
          },
          {
            value: "邢台市场部"
          },
          {
            value: "淮南市场部"
          }
        ]
      }
    };
  },
  methods: {
    async addstudent() {
      let {
        name,
        sex,
        age,
        year,
        major,
        classname,
        market,
        pass,
        nopass
      } = this.form;
      let obj = {
        name,
        sex,
        age,
        year,
        major,
        classname,
        market,
        pass,
        nopass
      };
      let { data, status } = await addStudent(obj);
      console.log(await addStudent(obj));
      if (status == 200) {
        alert(data.msg);
      } else {
        alert("网络错误，请稍后再试");
      }
    },
    clear() {
      this.form.name = "";
      this.form.sex = "";
      this.form.age = "";
      this.form.year = "";
      this.form.major = "";
      this.form.classname = "";
      this.form.market = "";
      this.form.pass = "";
      this.form.nopass = "";
    }
  }
};
</script>

<style>
.studentAddform {
  width: 600px;
}
</style>