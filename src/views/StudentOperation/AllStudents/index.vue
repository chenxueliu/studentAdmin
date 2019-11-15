<template>
  <div>
    <!-- 查询模块 -->
    <div class="searchbox-bs-002"
         v-show="isShow">
      <li style='fontSize:14px'>根据可选项搜索</li>
      <li>
        <el-input v-model="search.name"
                  size="mini"
                  placeholder="姓名"></el-input>
      </li>
      <li>
        <el-select v-model="search.year"
                   size="mini"
                   placeholder="学制">
          <el-option size="mini"
                     v-for="item in upstudys"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </li>
      <li>
        <el-select v-model="search.major"
                   size="mini"
                   placeholder="专业">
          <el-option size="mini"
                     v-for="item in upmajors"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </li>
      <li>
        <el-select v-model="search.classname"
                   size="mini"
                   placeholder="班级">
          <el-option size="mini"
                     v-for="item in classnameoptions"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </li>
      <li>
        <el-select v-model="search.market"
                   size="mini"
                   placeholder="市场部">
          <el-option size="mini"
                     v-for="item in marketoptions"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </li>
      <li>
        <el-input v-model="search.pass"
                  size="mini"
                  placeholder="成绩/门"></el-input>
      </li>
      <li>
        <el-select v-model="search.nopass"
                   size="mini"
                   placeholder="挂科次数">
          <el-option size="mini"
                     v-for="item in searFail"
                     :key="item.value"
                     :value="item.value"></el-option>
        </el-select>
      </li>
      <li style="display:flex;">
        <el-button size="small"
                   type="success"
                   @click="sureclick">确定</el-button>
        <el-button size="small"
                   type="info">清空</el-button>
      </li>
    </div>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="name"
                       label="姓名"
                       width="70">
      </el-table-column>
      <el-table-column prop="sex"
                       label="性别"
                       width="70">
      </el-table-column>
      <el-table-column prop="age"
                       label="年龄"
                       width="70">
      </el-table-column>
      <el-table-column prop="year"
                       label="学制"
                       width="100">
      </el-table-column>
      <el-table-column prop="major"
                       label="专业"
                       width="120">
      </el-table-column>
      <el-table-column prop="classname"
                       label="班级"
                       width="90">
      </el-table-column>
      <el-table-column prop="market"
                       label="市场部"
                       width="120">
      </el-table-column>
      <el-table-column prop="pass"
                       label="已有成绩/门"
                       width="100">
      </el-table-column>
      <el-table-column prop="nopass"
                       label="挂科次数/次"
                       width="100">
      </el-table-column>
      <el-table-column label="操作"
                       width="200">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.row._id)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header"
                  slot-scope="scope">
          <el-button v-if="searchShow"
                     type="primary"
                     size="small"
                     @click="goBack">返回</el-button>
          <el-button v-else
                     type="success"
                     size="small"
                     @click="searchResult">查询</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑弹框 -->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form"
               label-position="left"
               label-width="70px"
               style="width: 400px; margin-left:50px;">
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
          <el-select v-model="form.classtype"
                     placeholder="请选择学制">
            <el-option label="一年"
                       value="一年"></el-option>
            <el-option label="两年"
                       value="两年"></el-option>
            <el-option label="三年"
                       value="三年"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业">
          <el-select v-model="form.master"
                     placeholder="请选择专业">
            <el-option label="web架构"
                       value="web架构"></el-option>
            <el-option label="视觉设计"
                       value="视觉设计"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级">
          <el-select v-model="form.classname"
                     placeholder="请选择班级">
            <el-option label="1807A"
                       value="1807A"></el-option>
            <el-option label="1810A"
                       value="1810A"></el-option>
            <el-option label="1902B"
                       value="1902B"></el-option>
            <el-option label="1905A"
                       value="1905A"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="市场部">
          <el-select v-model="form.market"
                     placeholder="请选择市场部">
            <el-option label="冀中市场部"
                       value="冀中市场部"></el-option>
            <el-option label="豫皖市场部"
                       value="豫皖市场部"></el-option>
            <el-option label="邢台市场部"
                       value="邢台市场部"></el-option>
            <el-option label="淮南市场部"
                       value="淮南市场部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="已有成绩">
          <el-input v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item label="挂科次数">
          <el-input v-model="form.nopass"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary"
                   @click="updateData">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  findStudent,
  deleteStudent,
  editStudent,
  confirmEdit,
  saerchStudent
} from "@/api/index";
export default {
  data() {
    return {
      tableData: [],
      // 编辑
      studentid: "",
      isShow: false,
      searchShow: false,
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "",
        age: "",
        classtype: "",
        master: "",
        classname: "",
        market: "",
        pass: "",
        nopass: ""
      },
      search: {
        // 搜索的v-model绑定值
        name: "",
        year: "",
        major: "",
        classname: "",
        market: "",
        pass: "",
        nopass: ""
      },
      upstudys: [
        //学制选项
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
      upmajors: [
        //专业选项
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
      ],
      searFail: [
        //搜索挂科次数选项
        {
          value: "0次"
        },
        {
          value: "1次"
        },
        {
          value: "2次"
        },
        {
          value: "3次及以上"
        }
      ]
    };
  },
  created() {
    this.findstudentHandle();
  },
  methods: {
    async findstudentHandle() {
      let { data } = await findStudent();
      this.tableData = data.data;
      // this.tableData = [...this.tableData, ...data.data];
    },
    // 删除
    async handleDelete(id) {
      let { data } = await deleteStudent(id);
      // console.log(await deleteStudent(id));
      if (data.code == 0) {
        this.tableData = this.tableData.filter(item => {
          return item._id != id;
        });
      }
    },
    // 编辑 获取弹框默认信息
    async handleEdit(id) {
      this.dialogFormVisible = true;
      this.studentid = id;
      let { data } = await editStudent(id);
      this.form = data.data;
    },
    // 确定修改
    async updateData() {
      this.dialogFormVisible = false;
      let { data } = await confirmEdit(this.studentid, this.form);
      // console.log(await confirmEdit(this.studentid,this.form))
      this.findstudentHandle();
    },
    // 搜索功能
    searchResult() {
      this.isShow = true;
      this.searchShow = true;
    },
    async sureclick() {
      let {
        serName,
        serStudy,
        serMajor,
        serClasses,
        sercityCenter,
        serchengji,
        serFailss
      } = this.search;
      let val = {};
      for (let key in this.search) {
        if (this.search[key] !== "") {
          val[key] = this.search[key];
        }
      }
      if (
        serName !== "" ||
        serStudy !== "" ||
        serMajor !== "" ||
        serClasses !== "" ||
        sercityCenter !== "" ||
        serchengji !== "" ||
        serFailss !== ""
      ) {
        saerchStudent(val).then(data => {
         this.tableData=data.data
        });
      } else {
        alert("您搜索的值不能为空");
      }
    },
    // 返回
    goBack() {
      this.isShow = false;
      this.searchShow = false;
         findStudent().then(data=>{
           this.tableData = data.data.data;
         })
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  text-align: center;
}
.searchbox-bs-002 {
  width: 100%;
  display: flex;
  align-items: center;
}
.searchbox-bs-002 > li {
  width: 10%;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  list-style: none;
}
</style>