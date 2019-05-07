<template>
  <!-- $t is vue-i18n global function to translate lang -->
  <div class="app-container">
    <div>
      <FilenameOption :value="sadfsadf" v-on:clackhand="jieshou"/>
    </div>

    <!-- <el-table-column type='index' :index='indexMethod' ></el-table-column> -->
    <el-table
      v-loading="listLoading"
      :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column prop="ROWNUM" align="center" label="序号"></el-table-column>
      <el-table-column prop="CODE" align="center" label="编号"></el-table-column>
      <el-table-column prop="FULLNAME"  align="center" label="姓名"></el-table-column>
      <el-table-column prop="SEX" align="center" label="性别"></el-table-column>
      <el-table-column prop="AGE" label="年龄" width="300" align="center"></el-table-column>
      <el-table-column prop="ROOMNAME" label="房间号" align="center"></el-table-column>
      <el-table-column prop="grade" align="center" label="护理等级">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.NURSINGLEVEL=='全自理' ">全自理</el-tag>
          <el-tag type="info" v-if="scope.row.NURSINGLEVEL=='半自理' ">半失能</el-tag>
          <el-tag type="danger" v-if="scope.row.NURSINGLEVEL=='全失能' ">全失能</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="ADMISSIONDATE" align="center" label="入院时间"></el-table-column>
      <el-table-column prop="STATE" align="center" label="在院状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.STATE=='0' ">在院</el-tag>
          <el-tag type="info" v-if="scope.row.STATE=='2' ">外出</el-tag>
          <el-tag type="danger" v-if="scope.row.STATE=='1' ">离院</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operation" align="center" label="操作" width="300">
        <template slot-scope="scope">
          <router-link :to="{ name: '编辑', params: { id: scope.row.ID}}">
            <el-button type="primary" size="mini">编辑</el-button>
          </router-link>

          <router-link :to="{ name: '详情', params: { id: scope.row.ID}}">
            <el-button type="success" size="mini">详情</el-button>
          </router-link>
          <router-link to="#">
            <el-button type="danger" size="mini">离院</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length"
    ></el-pagination>
  </div>
</template>


<script>
import FilenameOption from "./FilenameOption";
import AutoWidthOption from "./AutoWidthOption";
import BookTypeOption from "./BookTypeOption";
export default {
  name: "filterTable",
  components: {
    FilenameOption,
    AutoWidthOption,
    BookTypeOption
  },
  data() {
    return {
      a: 1,
      list: [
        {
          ID: 1,
          FULLNAME: "",
          ROWNUM:'',
          SEX: "",
          AGE: "",
          ROOMNAME: "",
          NURSINGLEVEL: "",
          ADMISSIONDATE: "",
          STATE: "",
          CODE:'',
          bgc: ""
        }
      ],
      pagesize: 10,
      currentPage: 1,
      sousuo: {
        id: "",
        name: "",
        sex: "",
        roomN: "",
        state: ""
      }
    };
  },
  created() {
    this.$ajax
      .post("api/person/getPersonList", `sousou=${JSON.stringify(this.sousuo)}`)
      .then(respones => {
        this.list=respones.data
        console.log(respones.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {
    this.handleSizeChange(currentPage);
  },
   watch:{
     sousuo: {
      handler(newName, oldName) {
        console.log('请求')
      this.$ajax
      .post("api/person/getPersonList", `sousou=${JSON.stringify(newName)}`)
      .then(respones => {
        this.list=respones.data
        console.log(respones.data);
        console.log(11111111111);
      })
      .catch(function(error) {
        console.log(error);
      });
      console.log(sousou)
      },
      deep: true
    }
  },
  methods: {
    jieshou(data) {
      this.sousuo=data
      console.log(this.sousuo)
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    handleSizeChange(size) {
      this.pagesize = size;
    }
    // handleEdit(index, row) {
    //   console.log(index, row);
    //   this.$message({
    //     showClose: true,
    //     message: index,
    //     row,
    //     type: "success"
    //   });
    // },
    // handleDelete(index, row) {
    //   console.log(index, row);
    //   this.$message({
    //     showClose: true,
    //     message: index,
    //     row,
    //     type: "success"
    //   });
    // },
    // filterHandler(value, row, column) {
    //   const property = column["property"];
    //   return row[property] === value;
    // },
    // formatter(row, column) {
    //   return row.address;
    // },
    // filterTag(value, row) {
    //   return row.tag === value;
    // }
  }
};
</script>

<style scoped>
</style>
