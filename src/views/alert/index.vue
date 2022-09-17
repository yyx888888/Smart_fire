<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px" class="aside">
        <div class="aside-head">
          <h3>项目部门列表</h3>
        </div>
        <div class="aside-search">
          <el-input
            v-model="input2"
            class="w-50 m-2"
            placeholder="Please Input"
            :suffix-icon="Search"
          />
        </div>
        <div class="aside-select">
          <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </el-aside>
      <el-main>
        <el-row class="main-row1">
          <el-col :span="6">
            设备编号：<el-input
              class="input"
              v-model="input"
              placeholder="Please input"
            />
          </el-col>
          <el-col :span="6">
            设备名称：<el-input
              class="input"
              v-model="input"
              placeholder="Please input"
            />
          </el-col>
          <el-col :span="6">
            处理状态：
            <el-select class="input" v-model="value" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
          <el-col :span="6">
            告警时间：
            <el-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
      />
          </el-col>
        </el-row>
        <el-row class="main-row1">
          <el-col :span="6">
          告警详情：<el-input
            class="input"
            v-model="input"
            placeholder="Please input"
          />
        </el-col>
        <el-col :span="6">
          告警等级：
          <el-select class="input" v-model="value" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
        </el-col>
        <el-col :span="6">
          <el-button type="Basic White" :icon="Search">查询</el-button>
          <el-button type="Basic White" :icon="RefreshRight">重置</el-button>
        </el-col>

        </el-row>
        <el-row class="main-row1">
        <div class="button">
          <el-button type="Basic White" :icon="Download">批量导出</el-button>
          <el-button type="Basic White" :icon="Files">批量处理</el-button>
        </div>
      </el-row>
      <div>
        <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="name" label="Name" width="120" />
    <el-table-column property="address" label="Address" show-overflow-tooltip />
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])"
      >Toggle selection status of second and third rows</el-button
    >
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
      </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Search, RefreshRight, Files, Download } from "@element-plus/icons-vue";
import { ElTable } from 'element-plus'
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
  date: string
  name: string
  address: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped>
  .common-layout {
    background-color: white;
  }
.aside {
  padding: 20px;
}
.aside-head {
  position: relative;
  height: 36px;
  background-color: #ebeef5;
}
.aside-head h3 {
  position: relative;
  left: 10px;
  padding: 8px;
}

.aside-search {
  padding: 20px;
}
.aside-select {
  padding: 20px;
}
.main-row1 {
  padding: 16px;
}
.input {
  width: 150px;
}
</style>
