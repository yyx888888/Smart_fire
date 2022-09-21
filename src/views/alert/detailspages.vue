<template>
  <div class="container">
    <p>告警设备详情</p>
    <div class="heade">
      <h3>设备名称：燃气探测器</h3>
      <el-button class="return" size="small" :icon="RefreshLeft">
        <router-link to="/details">返回</router-link>
        </el-button>
      <p>设备编号：Dev-002021063001</p>
    </div>
    <div class="table1">
      <div class="table-header">
        <h4>设备信息</h4>
      </div>
      <div class="table-contain">
        <el-descriptions column="2">
          <el-descriptions-item label="设备编号"
            >Dev-002021063001</el-descriptions-item
          >
          <el-descriptions-item label="设备名称"
            >燃气探测器</el-descriptions-item
          >
          <el-descriptions-item label="设备型号">-</el-descriptions-item>
          <el-descriptions-item label="上报时间："
            >2022/9/20 18:3:10</el-descriptions-item
          >
          <el-descriptions-item label="设备类型："
            >浓度超上限告警</el-descriptions-item
          >
          <el-descriptions-item label="所属组织："
            >综合办公楼</el-descriptions-item
          >
          <el-descriptions-item label="责任人：">严重</el-descriptions-item>
          <el-descriptions-item label="电话：">123456789</el-descriptions-item>
          <el-descriptions-item label="安装点位："
            >综合楼A#5层103</el-descriptions-item
          >
          <el-descriptions-item label="详细地址：">-</el-descriptions-item>
          <el-descriptions-item label="设备描述：">-</el-descriptions-item>
          <el-descriptions-item label="Remarks">
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="地址"
            >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
            Province</el-descriptions-item
          >
        </el-descriptions>
      </div>
    </div>
    <div class="table2">
      <div class="table-header">
        <h4>设备事实参数</h4>
      </div>
      <div class="table-contain2">
        <div class="table-contain">
          <div class="table3">
            <div class="table-header2">
              <p>设备状态</p>
            </div>
            <div class="table-contain">
              <h3>在线</h3>
            </div>
          </div>
        </div>
        <div class="table-contain">
          <div class="table3">
            <div class="table-header2">
              <p>漏电流</p>
            </div>
            <div class="table-contain">
              <el-descriptions column="2">
                <el-descriptions-item label="漏电流："
                  >120mA</el-descriptions-item
                >
              </el-descriptions>
            </div>
          </div>
        </div>
        <div class="table-contain">
          <div class="table3">
            <div class="table-header2">
              <p>线路温度</p>
            </div>
            <div class="table-contain">
              <el-descriptions column="1" >
                <el-descriptions-item label="A相线缆温度："
                  >23.6℃</el-descriptions-item
                >
                <el-descriptions-item label="B相线缆温度："
                  >23.6℃</el-descriptions-item
                >
              </el-descriptions>
            </div>
          </div>
        </div>
        <div class="table-contain">
          <div class="table3">
            <div class="table-header2">
              <p>线路电流</p>
            </div>
            <div class="table-contain">
                <el-descriptions column="1" >
                <el-descriptions-item label="A相线缆温度："
                  >23.6℃</el-descriptions-item
                >
                <el-descriptions-item label="B相线缆温度："
                  >23.6℃</el-descriptions-item
                >
              </el-descriptions>
            </div>
          </div>
        </div>
        <div class="table-contain">
          <div class="table3">
            <div class="table-header2">
              <p>相电压</p>
            </div>
            <div class="table-contain">
                <el-descriptions column="1" >
                <el-descriptions-item label="A相线缆温度："
                  >23.6℃</el-descriptions-item
                >
                <el-descriptions-item label="B相线缆温度："
                  >23.6℃</el-descriptions-item
                >
              </el-descriptions>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table2">
      <div class="table-header">
        <h4>设备点位</h4>
      </div>
      <div class="photo-f">
        <div >
        <p>平面图：</p>
        <el-col :span="17">
              <img
                src="https://cdn3.axureshop.com/demo/2051878/images/%E7%81%AB%E7%81%BE%E7%9B%91%E6%B5%8B%E6%8A%A5%E8%AD%A6%E7%B3%BB%E7%BB%9F/u1424.png"
                style="width: 92%"
              />
            </el-col>
      </div>
      <div class="photo-f">
        <el-col :span="17">
            <el-descriptions column="2">
                <el-descriptions-item label="定位："
                  >经度103.567， 纬度203.456</el-descriptions-item
                >
              </el-descriptions>
              <img
                src="https://cdn3.axureshop.com/demo/1968221/images/%E6%A5%BC%E5%AE%87%E6%96%B0%E5%A2%9E/u3769.png"
                style="width: 100%"
              />
            </el-col>
      </div>
      </div>
      
    </div>
  </div>
</template>
<script setup lang="ts">
import { RefreshLeft } from "@element-plus/icons-vue";
</script>
<style scoped>
.container {
  padding: 20px;
  width: 100%;
  height: 100%;
}

.heade {
  position: relative;
  width: 600px;
  height: 100px;
  top: 20px;
}
.heade h3 {
  display: inline-block;
  width: 200px;
  height: 30px;
}
.table1 {
  width: 800px;
  border-style: solid;
  border-color: #ececec;
}
.table-header {
  background-color: rgb(236, 236, 236);
  padding: 8px;
}
.table-contain {
  position: relative;
  padding: 10px;
  top: 10px;
}
.table2 {
  width: 100%;
  padding: 20px;
}
.table3 {
  width: 230px;
  height: 110px;
  /* padding: 20px; */
  border-style: solid;
  border-color: #ececec;
}
.table-header2 {
  background-color: rgb(236, 236, 236);
}
.table-header2 p {
  position: relative;
  background-color: rgb(236, 236, 236);
  width: 100px;
}
.table-contain2 {
  display: flex;
}

.photo-f {
    display: flex;
}
</style>
