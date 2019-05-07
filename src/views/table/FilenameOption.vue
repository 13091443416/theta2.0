<template>
  <div style="display:inline-block;">
    <form action id="form1">
      <input
        ref="filElem"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        type="file"
        class="upload-file"
        @change="getFile"
        style="display:none"
      >
    </form>
    <!-- $t is vue-i18n global function to translate lang -->
    <el-input
      v-model="sousuo.id"
      placeholder="ID"
      style="width:200px;"
      prefix-icon="el-icon-document"
    />
    <el-input
      v-model="sousuo.name"
      placeholder="老人姓名"
      style="width:200px;"
      prefix-icon="el-icon-document"
    />
    <el-select v-model="sousuo.sex" style="width:95px;" placeholder="性别">
      <el-option
        v-for="item in optionsex"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-input
      v-model="sousuo.roomN"
      placeholder="房间号"
      style="width:130px;"
      prefix-icon="el-icon-document"
    />
    <el-select v-model="sousuo.state" style="width:140px;" placeholder="在院状态">
      <el-option
        v-for="item in optionstate"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    <el-button style="margin:0 0 20px 20px;" type="primary" icon="document" @click="handleDownload">
      <i class="el-icon-edit"></i>
      添加
    </el-button>

    <el-button style="margin:0 0 20px 20px;" type="primary" icon="document" @click="Downloadmoban">
      <i class="el-icon-edit"></i>
      批量添加
    </el-button>
    <download-excel
      class="export-excel-wrapper"
      :data="list"
      :fields="json_fields"
      name="filename.xls"
    >
      <i class="el-icon-download"></i>
      导出
    </download-excel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json_fields: {
        ID: "id",
        姓名: "name",
        性别: "sex",
        年龄: "age",
        房间号: "roomN",
        护理等级: "grade",
        入院时间: "time",
        在院状态: "state"
      },
      list: [
        {
          id: 1,
          name: "王小虎",
          sex: "男",
          age: "2016-05-02",
          roomN: "101",
          grade: "全失能",
          time: "2016-05-02",
          state: "在院",
          bgc: "success"
        },
        {
          id: 2,
          name: "王小虎",
          sex: "男",
          age: "2016-05-02",
          roomN: "101",
          grade: "全失能",
          time: "2016-05-02",
          state: "离院",
          bgc: "danger"
        },
        {
          id: 3,
          name: "王小虎",
          sex: "男",
          age: "2016-05-02",
          roomN: "101",
          grade: "全失能",
          time: "2016-05-02",
          state: "在院",
          bgc: "success"
        },
        {
          id: 4,
          name: "王小虎",
          sex: "男",
          age: "2016-05-02",
          roomN: "101",
          grade: "全失能",
          time: "2016-05-02",
          state: "离院",
          bgc: "danger"
        },
        {
          id: 5,
          name: "王小虎",
          sex: "男",
          age: "2016-05-02",
          roomN: "101",
          grade: "全失能",
          time: "2016-05-02",
          state: "在院",
          bgc: "success"
        },
        {
          id: 6,
          name: "王小虎",
          sex: "男",
          age: "2016-05-02",
          roomN: "101",
          grade: "全失能",
          time: "2016-05-02",
          state: "离院",
          bgc: "danger"
        }
      ],
      optionsex: [
        {
          value: "男",
          label: "男"
        },
        {
          value: "女",
          label: "女"
        },
        // {
        //   value: "",
        //   label: "全部"
        // }
      ],
      optionstate: [
        {
          value: "0",
          label: "在院"
        },
        {
          value: "1",
          label: "离院"
        },
        {
          value: "2",
          label: "外出"
        }
      ],
      value: "",
      sousuo: {
        id: "",
        name: "",
        sex: "",
        roomN: "",
        state: ""
      }
    };
  },
  props: {
    values: null
  },
  mounted() {
    console.log(this.value);
  },
  methods: {
    getFile() {
      // var that = this;
      // const inputFile = this.$refs.filElem.files[0];
      // if (inputFile) {
      // if (
      //   inputFile.type !== "image/jpeg" &&
      //   inputFile.type !== "image/png" &&
      //   inputFile.type !== "image/gif"
      // ) {
      //   alert("不是有效的图片文件！");
      //   return;
      // }
      // this.imgInfo = Object.assign({}, this.imgInfo, {
      //   name: inputFile.name,
      //   size: inputFile.size,
      //   lastModifiedDate: inputFile.lastModifiedDate.toLocaleString()
      // });
      // const reader = new FileReader();
      // reader.readAsDataURL(inputFile);
      // reader.onload = function(e) {
      //   that.imgSrc = this.result;
      // };
      // } else {
      //   return;
      // }
      const inputFile = this.$refs.filElem.files[0];
      if (inputFile) {
        console.log(123);
        var form1 = document.getElementById("form1");
        form1.action = "";
        form1.submit();
        setTimeout(() => {
          this.$notify({
            title: "成功提示",
            dangerouslyUseHTMLString: true,
            message:
              '<strong style="color:#67C23A">两个成功</strong> <br /> <strong style="color:#F56C6C">两个失败</strong>'
          });
        }, 1000);
      }
    },
    Downloadmoban() {
      this.$confirm("请先下载模板?", "提示", {
        confirmButtonText: "确定下载",
        cancelButtonText: "我已下载",
        distinguishCancelAndClose: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "下载成功!"
          });
          window.location.href = "http://www.baidu.com";
        })
        .catch(data => {
          if (data == "cancel") {
            this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
          } else {
          }
        });
    },
    handleDownload() {
      this.$prompt("请输入将要添加的老人编号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          var a = { code: value };
          this.$ajax
            .post("/api/person/insertPerson", `person=${JSON.stringify(a)}`)
            .then(respones => {
              console.log(respones.data);
              if (respones.data.id) {
                this.$router.push({
                  path: "/Details:id",
                  name: "编辑",
                  query: { id: respones.data.id }
                });
              }else{
                  this.$message({
            type: "info",
            message: "编号重复"
          });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    search() {
      //     this.$ajax.post('/person/getPersonList', "sousuo="+JSON.stringify(this.sousuo))
      // .then((respones)=>{
      //   this.list=respones.data

      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      this.$emit("clackhand", this.sousuo);
    }
  },
  computed: {
    filename: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>
<style>
.export-excel-wrapper {
  /* float: right;
  background-color:red ;
  width: 93px;
	height: 36px;
  text-align: center;
  line-height: 36px;
  color: #ffffff;
  border-radius:5px;  */
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  margin-left: 18px;
}
</style>
