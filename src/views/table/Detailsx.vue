<template>
  <div>
    <div
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-label="确认信息"
      class="el-message-box__wrapper"
      style="z-index: 2016;"
    >
      <div class="el-message-box">
        <div class="el-message-box__header">
          <div class="el-message-box__title">
            <!---->
            <span>确认信息</span>
          </div>
          <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="close">
            <i class="el-message-box__close el-icon-close"></i>
          </button>
        </div>
        <div class="el-message-box__content">
          <!---->
          <div class="el-message-box__message">
            <p></p>
            <div class="bain">
              <div @click="bianse">名字</div>
              <div @click="bianse">身份证号</div>
              <div @click="bianse">社保卡</div>
              <div @click="bianse">性别</div>
              <div @click="bianse">出生日期</div>
              <div @click="bianse">民族</div>
              <div @click="bianse">宗教</div>
              <div @click="bianse">籍贯</div>
              <div @click="bianse">文化</div>
              <div @click="bianse">户籍所在地</div>
              <div @click="bianse">详细地址</div>
              <div @click="bianse">医疗保险</div>
              <div @click="bianse">商业保险</div>
              <div @click="bianse">养老保险</div>
              <div @click="bianse">住院号</div>
              <div @click="bianse">所在房间ID</div>
              <div @click="bianse">所属医生</div>
              <div @click="bianse">所属病区</div>
              <div @click="bianse">电子围栏</div>
              <div @click="bianse">是否在院</div>
              <div @click="bianse">护理等级</div>
              <div @click="bianse">健康状况</div>
              <div @click="bianse">身体状况陈述</div>
              <div @click="bianse">照护重点</div>
              <div @click="bianse">饮食禁忌</div>
              <div @click="bianse">血型</div>
              <div @click="bianse">药物反应</div>
              <div @click="bianse">备注</div>
            </div>
          </div>
          <div class="el-message-box__input" style="display: none;">
            <div class="el-input">
              <!---->
              <input type="text" autocomplete="off" placeholder class="el-input__inner">
              <!---->
              <!---->
              <!---->
            </div>
            <div class="el-message-box__errormsg" style="visibility: hidden;"></div>
          </div>
        </div>
        <div class="el-message-box__btns">
          <button
            type="button"
            class="el-button el-button--default el-button--small"
            @click="close"
          >
            <!---->
            <!---->
            <span>放弃修改</span>
          </button>
          <button
            type="button"
            class="el-button el-button--default el-button--small el-button--primary"
            @click="baocun"
          >
            <!---->
            <!---->
            <span>保存</span>
          </button>
        </div>
      </div>
    </div>

    <div class="left-suo">
      <div>
        <el-input
          size="mini"
          v-model="input"
          placeholder="搜索老人"
          style="width: 90px;height: 16px;font-size:14px;margin-right: 10px;"
        ></el-input>
        <el-button type="primary" size="mini">搜索</el-button>
        <el-button type="danger" size="mini">添加老人</el-button>
      </div>
      <div>
        <div class="old-list">
          <li>测试会员</li>
          <li>男</li>
          <li>房间号</li>
        </div>
      </div>
    </div>
    <div class="right-sou">
      <div class="basic">
        <div>
          <dl>
            <dt></dt>
            <dd>姓名</dd>
          </dl>
        </div>
        <div>
          <table>
            <tr v-for="item in kapian" style="height:35px;">
              <td>{{item.name}}：</td>
              <td style="width:200px;">
                <input readonly="readonly" v-model="$route.query.id" type="text">
              </td>
              <td v-if="item.name2">{{item.name2}}：</td>
              <td v-if="item.name2=='undefined' "></td>
              <td style="width:200px;">
                <input readonly="readonly" type="text">
              </td>
            </tr>
            <!-- <tr style="height:35px;">
              <td>性别：</td>
              <td style="width:200px;">
                <input readonly="readonly" type="text">
                
              </td>
              <td>年龄：</td>
              <td style="width:200px;">
                <input readonly="readonly" type="text">
                
              </td>
            </tr>
            <tr style="height:35px;">
              <td>责任护工：</td>
              <td style="width:200px;">
                <input readonly="readonly" type="text">
                
              </td>
              <td>在院状态：</td>
              <td style="width:200px;">
                <input readonly="readonly" type="text">
                
              </td>
            </tr>
            <tr style="height:35px;">
              <td>护理等级：</td>
              <td style="width:200px;">
                <input readonly="readonly" type="text">
                
              </td>
              <td>护理重点：</td>
              <td style="width:200px;">
                <input readonly="readonly" type="text">
                
              </td>
            </tr>-->
          </table>
        </div>
        <div>
          <i class="el-icon-edit-outline"></i>
          <span @click="zidingyi">快捷信息卡内容</span>
        </div>
      </div>

      <div style="position: relative;">
        <router-link :to="{ name: '编辑', params: { id: $route.params.id}}">
          <el-button
            type="primary"
            style="position: absolute;z-index:99;right:15px;top:6px"
            size="mini"
          >编辑</el-button>
        </router-link>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tap" type="border-card">
          <el-tab-pane lazy label="个人信息" key="1" name="1">
            <div class="tap-data">
             
              <Gerenfo/>
            </div>
          </el-tab-pane>
          <el-tab-pane lazy label="在院信息" key="2" name="2">
            <div class="tap-data">
             
              <Zaiyuan/>
            </div>
          </el-tab-pane>
          <el-tab-pane lazy label="护理方案" key="3" name="3">
            <div class="tap-data">
             裴佳龙
            </div>
          </el-tab-pane>
          <el-tab-pane lazy label="实时健康监测" key="4" name="4">
            <div class="tap-data" style="background-color:#edeff2">
             
              <Testing/>
            </div>
          </el-tab-pane>
          <el-tab-pane lazy label="历史健康档案" key="5" name="5">
            <div class="tap-data">
             <History />
            </div>
          </el-tab-pane>
          <el-tab-pane lazy label="电子围栏" key="6" name="6">
            <div class="tap-data">
             裴佳龙
            </div>
          </el-tab-pane>
          <el-tab-pane lazy label="智能设备" key="7" name="7">
            <div class="tap-data">
             
              <Equipment/>
            </div>
          </el-tab-pane>
          <el-tab-pane lazy label="附件管理" key="8" name="8">
            <div class="tap-data">
             
              <Enclosure/>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Gerenfo from "./Gerenfo.vue";
import Zaiyuan from "./Zaiyuan.vue";
import Equipment from "./Equipment.vue";
import Testing from "./Testing.vue";
import Enclosure from "./Enclosure.vue";
import History from "./History.vue";
var aapian = [];
var zhenkapan = [];
var shang;
var ji = 0;
export default {
  components: {
    Gerenfo,
    Zaiyuan,
    Equipment,
    Testing,
    Enclosure,
    History
  },
  data() {
    return {
      activeName: "1",
      kapian: [{ name: "名字", zhi: "", name2: "社保卡", zhi: "" }],
      input:''
    };
  
  },
  // mounted() {
  //   this.kapian.push({ name: "名字", zhi: "", name2: "社保卡", zhi: "" });
  // },

  methods: {
    bianse(ev) {
      if (aapian.length !== 8) {
        if (ev.target.style.backgroundColor == "rgb(64, 158, 255)") {
          ev.target.style.backgroundColor = "#ffffff";
          for (var i = 0; i < aapian.length; i++) {
            if (aapian[i] == ev.target.innerHTML) {
              aapian.splice(i, 1);
            }
          }
          console.log(aapian);
        } else {
          ev.target.style.backgroundColor = "rgb(64, 158, 255)";
          aapian.push(ev.target.innerHTML);
          console.log(aapian);
        }

        if (aapian.length % 2 == 0) {
          zhenkapan = [];
          for (var t = 0; t < aapian.length / 2; t++) {
            // console.log(0);
            zhenkapan.push({
              name: aapian[ji],
              zhi: "",
              name2: aapian[++ji],
              zhi: ""
            });

            ji++;
          }
          ji = 0;
          console.log(zhenkapan);
        } else {
          zhenkapan = [];
          for (var t = 0; t < Math.ceil(aapian.length / 2); t++) {
            // console.log(0);
            zhenkapan.push({
              name: aapian[ji],
              zhi: "",
              name2: aapian[++ji],
              zhi: ""
            });

            ji++;
          }
          ji = 0;
          console.log(zhenkapan);
        }
      } else {
        // alert(ev.target.backgroundColor)
        if (ev.target.style.backgroundColor == "rgb(64, 158, 255)") {
          ev.target.style.backgroundColor = "#fff";
          for (var i = 0; i < aapian.length; i++) {
            if (aapian[i] == ev.target.innerHTML) {
              aapian.splice(i, 1);
            }
          }
          if (aapian.length % 2 == 0) {
            zhenkapan = [];
            for (var t = 0; t < aapian.length / 2; t++) {
              // console.log(0);
              zhenkapan.push({
                name: aapian[ji],
                zhi: "",
                name2: aapian[++ji],
                zhi: ""
              });

              ji++;
            }
            ji = 0;
            console.log(zhenkapan);
          } else {
            zhenkapan = [];
            for (var t = 0; t < Math.ceil(aapian.length / 2); t++) {
              // console.log(0);
              zhenkapan.push({
                name: aapian[ji],
                zhi: "",
                name2: aapian[++ji],
                zhi: ""
              });

              ji++;
            }
            ji = 0;
            console.log(zhenkapan);
          }
          console.log(aapian);
          this.$message.error("不对啊");
        } else {
          this.$message.error("只能选择八个");
        }
      }
    },
    baocun() {
      this.kapian = zhenkapan;
      console.log(this.kapian);
      var el = document.querySelector(".el-message-box__wrapper");
      el.style.display = "none";
    },
    close() {
      var el = document.querySelector(".el-message-box__wrapper");
      el.style.display = "none";
    },
    zidingyi() {
      // var bain=document.querySelectorAll(".bain div")
      var el = document.querySelector(".el-message-box__wrapper");
      el.style.display = "block";
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.bain {
  height: 288px;
  /* background-color: aqua; */
}
.bain div {
  padding: 3px 10px 3px 10px;
  /* background-color: red; */
  border: 1px solid #dcdfe6;
  margin-right: 14px;
  border-radius: 4px;
  margin-bottom: 8px;
  float: left;
}
.el-message-box__wrapper {
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
}

.left-suo {
  width: 300px;
  height: 780px;
  float: left;
  margin-right: 10px;
}

.left-suo > div:first-of-type {
  border: 1px solid #dcdfe6;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  width: 280px;
  background-color: #ffffff;
  height: 65px;
  margin-bottom: 4px;
  padding-top: 35px;
  padding-left: 20px;
}
.left-suo > div:last-of-type {
  border: 1px solid #dcdfe6;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  width: 100%;
  background-color: #ffffff;
  height: 676px;
}
.right-sou {
  float: left;
  width: 1352px;
}
.basic {
  border: 1px solid #dcdfe6;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  width: 100%;
  background-color: #ffffff;
  height: 160px;
  margin-bottom: 10px;
  padding-top: 30px;
}
.basic > div {
  float: left;
  height: 100%;
}
.basic > div:first-of-type {
  width: 189px;
  /* height: 100px; */
  /* background-color: #409eff; */
}
.basic > div:first-of-type dl {
  margin-left: 45px;
}
.basic > div:first-of-type dl > dt {
  width: 95px;
  height: 104px;
  background-color: green;
  margin-bottom: 10px;
}
.basic > div:first-of-type dl > dd {
  width: 95px;
  text-align: center;
  color: #000000;
}
.basic > div:nth-of-type(2) {
  width: 966px;
  /* height: 100px; */
  /* background-color: #40ff89; */
}
.basic > div:nth-of-type(2) > table {
  font-size: 13px;
  /* border: 1px solid red; */
}
.basic > div:nth-of-type(2) > table input {
  border: none;
  background-color: #ffffff;
}
.basic > div:nth-of-type(3) {
  width: 187px;
  text-align: right;
  padding-right: 1px;
  /* height: 100px; */
  /* background-color: #213252; */
}
.tap {
  background-color: #ffffff;
}
.tap-data {
  position: relative;
  height: 510px;
}
.baocun {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
.old-list {
  width: 225px;
  height: 30px;
  background-color: #409eff;
  margin: 10px auto;
  padding-top: 15px;
  padding-left: 38px;
}

.old-list li {
  float: left;
  color: #ffffff;
  margin-right: 35px;
}
.xiangqing {
  position: absolute;
  /* top:2px; */
  right: 100px;
  width: 30px;
  z-index: 99;
  text-align: center;
}
</style>


