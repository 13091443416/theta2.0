<template>
  <div class="zhuinfo">
    <button type="button" class="baocun el-button el-button--success is-circle" @click="baocun">
      <!---->
      <i class="el-icon-check"></i>
      <!---->
    </button>
    <table>
      <tr style="height:80px">
        <td style="width:100px">住院号</td>
        <td style="width:392px">
          <el-input style="width:235px" v-model="yaopost.code" placeholder="请输入内容"></el-input>
        </td>
        <td style="width:100px">所在房间ID</td>
        <td style="width:392px">
          <el-input style="width:235px" v-model="yaopost.roomid" placeholder="请输入内容"></el-input>
        </td>
        <td style="width:100px">所属医生</td>
        <td>
          <el-input style="width:235px" v-model="yaopost.doctor" placeholder="请输入内容"></el-input>
        </td>
      </tr>
      <tr style="height:80px">
        <td style="width:100px">备注</td>
        <td>
          <el-input style="width:235px" v-model="yaopost.remark" placeholder="请输入内容"></el-input>
        </td>
        <td style="width:100px">是否在院</td>
        <td>
          <el-select v-model="yaopost.isinhospital" placeholder="请选择">
            <el-option
              v-for="item in zaiyuanstate"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td>护理等级</td>
        <td>
          <el-select v-model="yaopost.nursinglevel" placeholder="请选择">
            <el-option
              v-for="item in grade"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr style="height:80px">
        <td style="width:100px">健康状况</td>
        <td>
          <el-select v-model="yaopost.health" placeholder="请选择">
            <el-option
              v-for="item in Healthy"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td style="width:100px">身体状况陈述</td>
        <td>
          <el-input style="width:235px" v-model="yaopost.physicalcondition" placeholder="请输入内容"></el-input>
        </td>
        <td style="width:100px">照护重点</td>
        <td>
          <el-input style="width:235px" v-model="yaopost.carepoint" placeholder="请输入内容"></el-input>
        </td>
      </tr>
      <tr style="height:80px">
        <td style="width:100px">饮食禁忌</td>
        <td>
          <el-input style="width:235px" v-model="yaopost.diettaboo" placeholder="请输入内容"></el-input>
        </td>
        <td>血型</td>
        <td>
          <el-select v-model="yaopost.bloodtype" placeholder="未知">
            <el-option
              v-for="item in blood"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td style="width:100px">药物反应</td>
        <td>
          <el-input style="width:235px" v-model="yaopost.drugreaction" placeholder="请输入内容"></el-input>
        </td>
      </tr>
      <tr style="height:80px">
        <td style="width:100px"></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yaopost: {
        code: "",
        roomif: "",
        affiliateddoctor: "",
        remark: "",
        isinhospital: "",
        nursinglevel: "",
        health: "",
        physicalcondition: "",
        carepoint: "",
        diettaboo: "",
        bloodtype: "",
        drugreaction: "",
        id: this.did
      },
      grade: [
        {
          value: "全自理",
          label: "全自理"
        },
        {
          value: "半失能",
          label: "半失能"
        },
        {
          value: "全失能",
          label: "全失能"
        }
      ],
      Healthy: [
        {
          value: "优秀",
          label: "优秀"
        },
        {
          value: "良好",
          label: "良好"
        },
        {
          value: "较差",
          label: "较差"
        }
      ],
      zaiyuanstate: [
        {
          value: "在院",
          label: "在院"
        },
        {
          value: "离院",
          label: "离院"
        }
      ],
      blood: [
        {
          value: "A型",
          label: "A型"
        },
        {
          value: "B型",
          label: "B型"
        },
        {
          value: "O型",
          label: "O型"
        },
        {
          value: "AB型",
          label: "AB型"
        },
        {
          value: "Rh阴性A型",
          label: "Rh阴性A型"
        },
        {
          value: "Rh阴性B型",
          label: "Rh阴性B型"
        },
        {
          value: "Rh阴性O型",
          label: "Rh阴性O型"
        },
        {
          value: "Rh阴性AB型",
          label: "Rh阴性AB型"
        }
      ],
      xinyaopost: ""
    };
  },
  props: {
    did: null
  },
  created() {
    this.$ajax
      .post(
        "/api/person/getPersonById",
        `id=${this.did}`
      )
      .then(respones => {
        console.log(respones.data);
        this.yaopost=respones.data
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    yaopost: {
      handler(newName, oldName) {
        console.log(newName);
        console.log(this.did);
        this.xinyaopost = newName;
        console.log(this.xinyaopost);
      },
      deep: true
    }
  },
  methods: {
    baocun() {
      this.$ajax
        .post(
          "/api/person/updatePerson",
          `person=${JSON.stringify(this.xinyaopost)}`
        )
        .then(respones => {
          this.$message({
            type: "info",
            message: respones
          });
          console.log(respones.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.zhuinfo table {
  border: none;
}
.baocun {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>

