<template>
  <div>
    <button type="button" class="baocun el-button el-button--success is-circle">
      <!---->
      <i class="el-icon-check"></i>
      <!---->
    </button>
    <el-tabs tab-position="left" style="height: 100%;">
      <el-tab-pane label="入院合同" class="zhi">
        <el-upload
          class="upload-demo"
          drag
          action="api/person/uploadFile?type=contract"
          multiple
          :on-success="success"
          :on-error="erroe"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          
          :on-exceed="handleExceed"
          :file-list="fileList"
          :data="test"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">请上传附件</div>
        </el-upload>
        <el-table
          v-loading="listLoading"
          max-height="460"
          class="table"
          :data="list"
          element-loading-text="拼命加载中"
          border
          fit
          highlight-current-row
        >
          <el-table-column type="index" align="center" width="50"></el-table-column>
          <el-table-column prop="time" align="center" label="时间"></el-table-column>
          <el-table-column prop="title" align="left" label="标题" width="260"></el-table-column>
          <el-table-column prop="username" label="上传人"></el-table-column>
          <el-table-column prop="type" align="center" label="文档类型">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.type=='contract' ">入院合同</el-tag>
              <el-tag type="info" v-if="scope.row.type=='physical' ">体检报告</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='credentials' ">证件扫描件</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='other' ">其他</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作" width="150">
            <template slot-scope="scope">
               <el-button type="primary" size="mini" @click="down(scope.row.id)">下载</el-button>
         
             
                <el-button type="danger" size="mini" @click="deletewen(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="体检报告" class="zhi">
        <el-upload
          class="upload-demo"
          drag
          action="api/person/uploadFile?type=physical"
          multiple
          :on-success="success"
          :on-error="erroe"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          
          :on-exceed="handleExceed"
          :file-list="fileList"
          :data="test"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">请上传附件</div>
        </el-upload>
        <el-table
          v-loading="listLoading"
          max-height="460"
          class="table"
          :data="list"
          element-loading-text="拼命加载中"
          border
          fit
          highlight-current-row
        >
          <el-table-column type="index" align="center" width="50"></el-table-column>
          <el-table-column prop="time" align="center" label="时间"></el-table-column>
          <el-table-column prop="title" align="left" label="标题" width="260"></el-table-column>
          <el-table-column prop="username" label="上传人"></el-table-column>
          <el-table-column prop="type" align="center" label="文档类型">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.type=='contract' ">入院合同</el-tag>
              <el-tag type="info" v-if="scope.row.type=='physical' ">体检报告</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='credentials' ">证件扫描件</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='other' ">其他</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作" width="150">
            <template slot-scope="scope">
               <el-button type="primary" size="mini" @click="down(scope.row.id)">下载</el-button>
         
             
                <el-button type="danger" size="mini" @click="deletewen(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="证件扫描件" class="zhi">
        <el-upload
          class="upload-demo"
          drag
          action="api/person/uploadFile?type=credentials"
          multiple
          :on-success="success"
          :on-error="erroe"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
          :data="test"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">请上传附件</div>
        </el-upload>
        <el-table
          v-loading="listLoading"
          max-height="460"
          class="table"
          :data="list"
          element-loading-text="拼命加载中"
          border
          fit
          highlight-current-row
        >
          <el-table-column type="index" align="center" width="50"></el-table-column>
          <el-table-column prop="time" align="center" label="时间"></el-table-column>
          <el-table-column prop="title" align="left" label="标题" width="260"></el-table-column>
          <el-table-column prop="username" label="上传人"></el-table-column>
          <el-table-column prop="type" align="center" label="文档类型">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.type=='contract' ">入院合同</el-tag>
              <el-tag type="info" v-if="scope.row.type=='physical' ">体检报告</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='credentials' ">证件扫描件</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='other' ">其他</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作" width="150">
            <template slot-scope="scope">
               <el-button type="primary" size="mini" @click="down(scope.row.id)">下载</el-button>
         
             
                <el-button type="danger" size="mini" @click="deletewen(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="其它" class="zhi">
        <el-upload
          class="upload-demo"
          drag
          action="api/person/uploadFile?type=other"
          multiple
          :on-success="success"
          :on-error="erroe"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          
          :on-exceed="handleExceed"
          :file-list="fileList"
          :data="test"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">请上传附件</div>
        </el-upload>
        <el-table
          v-loading="listLoading"
          max-height="460"
          class="table"
          :data="list"
          element-loading-text="拼命加载中"
          border
          fit
          highlight-current-row
        >
          <el-table-column type="index" align="center" width="50"></el-table-column>
          <el-table-column prop="time" align="center" label="时间"></el-table-column>
          <el-table-column prop="title" align="left" label="标题" width="260"></el-table-column>
          <el-table-column prop="username" label="上传人"></el-table-column>
          <el-table-column prop="type" align="center" label="文档类型">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.type=='contract' ">入院合同</el-tag>
              <el-tag type="info" v-if="scope.row.type=='physical' ">体检报告</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='credentials' ">证件扫描件</el-tag>
              <el-tag type="danger" v-if="scope.row.type=='other' ">其他</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="operation" align="center" label="操作" width="150">
            <template slot-scope="scope">
           
                <el-button type="primary" size="mini" @click="down(scope.row.id)">下载</el-button>
         
             
                <el-button type="danger" size="mini" @click="deletewen(scope.row.id)">删除</el-button>
           
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "合同",
      username: "韩一斌",
      test: "",
      list: [
   
      ],
      fileList: [
        // {
        //   name: "food.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        // },
        // {
        //   name: "food2.jpeg",
        //   url:
        //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        // }
      ]
    };
  },
  props: {
    did: null
  },
  created() {
    console.log(111111);
    console.log(this.did);
    this.$ajax
      .post("/api/person/getFileListByPersonid", `personid=${this.did}`)
      .then(respones => {
        this.list=respones.data
        console.log(respones.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {
    var personid = this.did;
    var username = this.username;
    var test = {
      personid,
      username
    };
    console.log(test);
    this.test = test;
  },
  methods: {
    deletewen(val){
      this.$ajax
      .post("/api/person/delFileById", `id=${val}`)
      .then(respones => {
        this.$ajax
      .post("/api/person/getFileListByPersonid", `personid=${this.did}`)
      .then(respones => {
        this.list=respones.data
        console.log(respones.data);
      })
      .catch(function(error) {
        console.log(error);
      });
      })
      .catch(function(error) {
        console.log(error);
      });
console.log(val)
console.log(this.did)
      console.log(this.$route.params.id)

    },
    down(val){
     
      window.location.href=`api/person/downLoad?fileid=${val}`
    
    },
    error() {
      this.$message.warning("上传失败");
    },
    success(response, a, b) {
      console.log(response);
      // console.log(a);
      // console.log(b);
      this.$message("上传成功");
       this.$ajax
      .post("/api/person/getFileListByPersonid", `personid=${this.did}`)
      .then(respones => {
        this.list=respones.data
        console.log(respones.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    handleAvatarSuccess(response, file, fileList) {
      console.log(123456);
      console.log(response);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style scoped>
.upload-demo {
  width: 360px;
  float: left;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 50px;
}
.table {
  float: left;
  width: 67%;
}
.zhi {
  width: 100%;
  height: 510px;
  border: 1px solid #fff;
  /* background-color: red */
}
.baocun {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>


