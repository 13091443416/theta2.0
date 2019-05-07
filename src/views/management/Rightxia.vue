<template>
  <div>
    <el-radio-group v-model="radio1" style="margin-left: 130px;">
      <el-radio-button label="全自理"></el-radio-button>
      <el-radio-button label="半自理"></el-radio-button>
      <el-radio-button label="全介护"></el-radio-button>
    </el-radio-group>
    <el-select v-model="value" placeholder="请选择" style="margin-left: 50px;">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-radio-group v-model="radio2" style="margin-left: 50px;">
      <el-radio-button label="已入住"></el-radio-button>
      <el-radio-button label="已住满"></el-radio-button>
      <el-radio-button label="空余"></el-radio-button>
    </el-radio-group>
    <el-button icon="el-icon-search" circle style="margin-left: 30px;"></el-button>
    <div class="bingqubiao">
      <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
           <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
       <div class="ceng">
        <div class="cengming">
          一楼
          <br>一层
        </div>
        <div class="cengnei">
          <div class="room">
            <div>101</div>
            <div>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
              <el-tag type="success" size="mini" class="bad">标签二</el-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "全自理",
      radio2: "已入住",
      options: [
        {
          value: "病区一",
          label: "病区一"
        },
        {
          value: "病区二",
          label: "病区二"
        },
        {
          value: "病区三",
          label: "病区三"
        }
      ],
      value: ""
    };
  }
};
</script>
<style scoped>
.bingqubiao {
  width: 97%;
  height: 674px;
  /* background-color: red; */
  margin-left: 15px;
  margin-top: 15px;
  overflow: auto;
}
.ceng {
  width: 100%;
  height: 144px;
  /* background-color: aqua; */
  border: 2px solid #dfe6ec;
  box-sizing: border-box;
  border-bottom: none;
}
.bingqubiao .ceng:last-of-type{
    border-bottom: 2px solid #dfe6ec;
}
.cengming {
  width: 10%;
  height: 90px;
  padding-top: 50px;
  text-align: center;
  border-right: 2px solid #dfe6ec;
  float: left;
}
.cengnei {
  width: 1010px;
  height: 140px;
  /* background-color: antiquewhite; */
  float: left;
  overflow-x: auto;
}

::-webkit-scrollbar {
  display: none;
}
.room {
  width: 80px;
  height: 110px;
  border: 3px solid black;
  border-radius: 15px;
  float: left;
  margin: 10px;
  margin-left: 30px;
}
.room div:first-of-type {
  text-align: center;
  border-bottom: 1px solid #000;
}
.room div:last-of-type {
  text-align: center;
}
.bad {
  margin-top: 10px;
}
</style>

