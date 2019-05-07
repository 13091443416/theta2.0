<template>
  <div class="ginfo">
    <button type="button" class="baocun el-button el-button--success is-circle" @click="baocun">
                <!---->
                <i class="el-icon-check"></i>
                <!---->
              </button>
    <table>
      <tr style="height:80px">
        <td style="width:100px">名字</td>
        <td>
          <el-input style="width:235px" v-model="formzong.fullname  " placeholder="请输入内容"></el-input>
        </td>
        <td style="width:100px">身份证号</td>
        <td>
          <el-input style="width:235px" v-model="formzong.idcard" placeholder="请输入内容"></el-input>
        </td>
        <td style="width:100px">社保卡</td>
        <td>
          <el-input style="width:235px" v-model="formzong.insurancecard" placeholder="请输入内容"></el-input>
        </td>
      </tr>
      <tr style="height:80px">
        <td style="width:100px">性别</td>
        <td>
          <el-select v-model="formzong.sex " placeholder="请选择">
            <el-option
              v-for="item in sex"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td style="width:100px">出生日期</td>
        <td>
          <el-date-picker v-model="formzong.birthdate  " type="date" placeholder="选择日期"></el-date-picker>
        </td>
        <td style="width:100px">民族</td>
        <td>
          <el-input style="width:235px" v-model="formzong.nation  " placeholder="请输入内容"></el-input>
        </td>
      </tr>
      <tr style="height:80px">
        <td>宗教</td>
        <td>
          <el-select v-model="formzong.religion" placeholder="请选择">
            <el-option
              v-for="(item,index) in Religions"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td style="width:100px">籍贯</td>
        <td>
          <el-select v-model="valsheng" placeholder="请选择省" style="width:30%">
            <el-option
              v-for="(item,index) in optionsheng"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="valshi" placeholder="请选择市" style="width:30%">
            <el-option
              v-for="item in optionshi"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="valqu" placeholder="请选择区" style="width:30%">
            <el-option
              v-for="item in optionqu"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td style="width:100px">文化</td>
        <td>
          <el-select v-model="formzong.education" placeholder="请选择文化">
            <el-option
              v-for="item in Culture"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr style="height:80px">
        <td style="width:100px">户籍所在地</td>
        <td>
          <el-select v-model="valsheng" placeholder="请选择省" style="width:30%">
            <el-option
              v-for="item in optionsheng"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="valshi" placeholder="请选择市" style="width:30%">
            <el-option
              v-for="(item,index) in optionshi"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="valqu" placeholder="请选择区" style="width:30%">
            <el-option
              v-for="item in optionqu"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
        <td style="width:100px">详细地址</td>
        <td>
          <el-input style="width:235px" v-model="formzong.detailaddr" placeholder="请输入内容"></el-input>
        </td>
        <td style="width:100px">医疗保险</td>
        <td>
          <el-select v-model="formzong.medicalinsurance" placeholder="请选择医疗保险">
            <el-option
              v-for="item in Medical"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </td>
      </tr>
      <tr style="height:80px">
        <td style="width:100px">商业保险</td>
        <td>
          <el-input style="width:235px" v-model="formzong.commercialinsurance" placeholder="请输入内容"></el-input>
        </td>

        <td style="width:100px">养老保险</td>
        <td>
          <el-input style="width:235px" v-model="formzong.endowmeninsurance" placeholder="请输入内容"></el-input>
        </td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valsheng: "",
      valshi: "",
      valqu: "",
      optionsheng: "",
      optionshi: "",
      optionqu: "",
      sex: [
        {
          value: "男",
          label: "男"
        },
        {
          value: "女",
          label: "女"
        }
      ],
      Religions: [
        {
          value: "无宗教",
          label: "无宗教"
        },
        {
          value: "佛教",
          label: "佛教"
        },
        {
          value: "基督教",
          label: "基督教"
        },
        {
          value: "伊斯兰教",
          label: "伊斯兰教"
        }
      ],
      Culture: [
        {
          value: "大学",
          label: "大学"
        },

        {
          value: "高职",
          label: "高职"
        },
        {
          value: "高中",
          label: "高中"
        },
        {
          value: "中专技校",
          label: "中专技校"
        },
        {
          value: "初中",
          label: "初中"
        },
        {
          value: "小学",
          label: "小学"
        },
        {
          value: "文盲或半文盲",
          label: "文盲或半文盲"
        }
      ],
      Medical: [
        {
          value: "城镇职工基本医疗保险",
          label: "城镇职工基本医疗保险"
        },

        {
          value: "新型农村合作医疗",
          label: "新型农村合作医疗"
        },
        {
          value: "城镇居民基本医疗保险",
          label: "城镇居民基本医疗保险"
        },
        {
          value: "铁路医疗保险",
          label: "铁路医疗保险"
        },
        {
          value: "商业保险",
          label: "商业保险"
        },
        {
          value: "自费",
          label: "自费"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },

      formzong: {
        birthdate: "",
        fullname: "",
        sex: "",
        idcard: "",
        insurancecard: "",
        nation: "",
        detailaddr: "",
        commercialinsurance: "",
        endowmeninsurance: "",
        medicalinsurance: "",
        education: "",
        religion: "",
        id:this.did
      },
      xinformz:''
    };
  },
  props:{
    did:null
  },
  created(){
    
    
console.log(this.did)
   
    this.$ajax
      .post(
        "/api/person/getPersonById",
        `id=${this.did}`
      )
      .then(respones => {
        console.log(respones.data);
        this.formzong=respones.data
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.id)
  },
  watch:{
   formzong: {
      handler(newName, oldName) {
         console.log(newName);
         console.log(this.did)
         this.xinformz=newName
         console.log(this.xinformz)
      },
      deep: true
    }
  },
  methods:{
    baocun(){
      
      this.$ajax.post('/api/person/updatePerson', `person=${JSON.stringify(this.xinformz)}`
  )
  .then((respones)=>{
    this.$message({
            type: 'info',
            message:respones.data
          });  
    console.log(respones.data)
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
};
</script>
<style>
.ginfo table {
  border: none;
}
.ginfo {
  height: 500px;
}
.baocun {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>

