<!-- <template>
  <h1>隐患管理</h1>
</template>

<script setup></script>

<style lang="scss" scoped></style> -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px" class="aside">
        <div class="aside-head">
          <h3>消防子系统类型</h3>
          <div class="libox">
            <img src="../../../public/images/la.jpg" />
            <div>
              <div class="lili">全部设备系统</div>
              <div class="lili">火灾监测报警系统</div>
              <div class="lili">消防水监测系统</div>
              <div class="lili">室外消防栓系统</div>
              <div class="lili">智慧安全用电系统</div>
              <div class="lili">视频监控系统</div>
            </div>
          </div>
        </div>
      </el-aside>
      <el-main>
        <el-row class="topbox">
          <div class="xiao">
            <div>设备故障统计</div>
            <div>数据更新时间：2022/9/21 上午9:17:54</div>
          </div>
          <div class="xiaobox">
            <img src="../../../public/images/1.jpg" />
            <div>
              <div>当前未处理</div>
              <div>2</div>
            </div>
          </div>
          <div class="xiaobox">
            <img src="../../../public/images/2.jpg" />
            <div>
              <div>当前未处理</div>
              <div>2</div>
            </div>
          </div>
          <div class="xiaobox">
            <img src="../../../public/images/3.jpg" />
            <div>
              <div>当前未处理</div>
              <div>2</div>
            </div>
          </div>
          <div class="xiaobox">
            <img src="../../../public/images/4.jpg" />
            <div>
              <div>当前未处理</div>
              <div>2</div>
            </div>
          </div>
        </el-row>
        <div class="downbox">
          <el-row class="inoutBox">
            <el-input class="input" v-model="input" placeholder="请输入设备编号" />
            <el-input class="input" v-model="input" placeholder="请输入设备名称" />
            <el-select class="input" v-model="value" placeholder="选择负责人">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <el-select class="input" v-model="value" placeholder="选择处理状态">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-date-picker v-model="value2" type="daterange" start-placeholder="Start Date"
              end-placeholder="End Date" />
            <div class="chabox">
              <el-button type="Basic White" :icon="Search">查询</el-button>
              <el-button type="Basic White" :icon="RefreshRight">重置</el-button>
            </div>
          </el-row>
          <el-row class="main-row1">
            <div class="button">
              <el-button type="Basic White" :icon="Download">批量删除</el-button>
            </div>
          </el-row>
          <div>
            <el-table ref="multipleTableRef" :data="tableData" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" />
              <el-table-column property="name0" label="序号" width="60" />
              <el-table-column property="name1" label="设备编号" width="250" />
              <el-table-column property="name2" label="设备名称" width="120" />
              <el-table-column property="name3" label="子系统类型" width="150" />
              <el-table-column property="name4" label="故障描述" width="150" />
              <el-table-column property="name5" label="安装位置" width="150" />
              <el-table-column property="name6" label="故障发生时间" width="200" />
              <el-table-column property="name7" label="责任人" width="150" />
              <el-table-column property="name8" label="处理状态" width="150">
                <template #default="scope">
                  <el-button @click="handleEdit(scope.$index, scope.row)">未处理</el-button>
                </template>
              </el-table-column>
              <el-table-column property="name9" label="操作">
                <template #default="scope">
                  <el-button size="small" @click="handleEdit(scope.$index, scope.row)">处理详情</el-button>
                  <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-row class="pagebox">
              <el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4"
                :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Search, RefreshRight, Files, Download } from "@element-plus/icons-vue";
import { ElTable } from "element-plus";
import { ref } from "vue";
const input = ref("");
const input2 = ref("");
const value = ref("");
const value2 = ref("");
// 选择器
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

// 表格
interface User {
  date: string;
  name: string;
  address: string;
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref<User[]>([]);
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined);
    });
  } else {
    multipleTableRef.value!.clearSelection();
  }
};
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val;
};

const tableData: User[] = [
  {
    name0: "1",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "2",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "3",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "4",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "5",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "6",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "7",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "8",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
  {
    name0: "9",
    name1: "Dev-002021063001",
    name2: "燃气探测器",
    name3: "火灾监测报警系统",
    name4: "设备故障",
    name5: "综合办公楼",
    name6: "综合楼A#5层103",
    name7: "test01",
    name8: "燃气探测器",
  },
];
</script>

<style scoped>
el-table-column {
  text-align: center;
}

.lili {
  margin-bottom: 29px;
}

.lili:hover {
  color: blue;
}

.libox {
  display: flex;
  align-items: center;
  flex-direction: cow;
  margin-top: 40px;
  margin-left: 30px;
  cursor: pointer;
}

.pagebox {
  margin-top: 60px;
  margin-left: 25%;
}

.topbox {
  display: flex;
  width: 100%;
  flex-direction: cow;
  justify-content: space-between;
  padding: 20px 0;
}

.downbox {
  background-color: #ffffff;
  height: 100%;
  padding: 20px;
}

.xiaobox {
  width: 18%;
  padding: 20px;
  display: flex;
  flex-direction: cow;
  align-items: center;
  background-color: #ffffff;
}

.xiao {
  width: 16%;
  padding: 20px;
  background-color: #ffffff;
}

.chabox {
  margin-left: 30px;
}

.aside {
  padding: 20px;
}

.aside-head {
  position: relative;
  height: 800px;
  background-color: #ffffff;
}

.aside-head h3 {
  position: relative;
  padding: 8px;
  background-color: #ebeef5;
  text-align: center;
  border-bottom: 1px solid black;
}

.input {
  width: 250px;
  margin: 0 20px 0 0;
}

.inoutBox {
  display: flex;
  flex-direction: cow;
  padding: 30px 0;
  margin-right: 20px;
}
</style>
