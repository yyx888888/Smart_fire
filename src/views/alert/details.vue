<template>
            <el-row class="main-row1">
          <el-col :span="5">
            <span>设备编号:  </span>
            <el-input
              class="input"
              v-model="input"
              placeholder="请输入"
            />
          </el-col>
          <el-col :span="5">
            <span>设备名称：</span>
            <el-input
              class="input"
              v-model="input"
              placeholder="请输入"
            />
          </el-col>
          <el-col :span="5">
            处理状态：
            <el-select class="input" v-model="value" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
          <el-col :span="9">
            <span>告警时间: </span>
            <el-date-picker
              v-model="value2"
              type="daterange"
              start-placeholder="年/月/日"
              end-placeholder="年/月/日"
              :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
            />
          </el-col>
        </el-row>
        <el-row class="main-row1">
          <el-col :span="5">
            告警详情：<el-input
              class="input"
              v-model="input"
              placeholder="请输入"
            />
          </el-col>
          <el-col :span="5">
            告警等级：
            <el-select class="input" v-model="value" placeholder="全部">
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

        <el-table
          ref="multipleTableRef"
          :data="tableData"
          @selection-change="handleSelectionChange"
          class="table-head"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="设备名称" width="120">
            <template #default="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            property="name"
            label="告警等级"
            width="120"
            show-overflow-tooltip
          />
          <el-table-column
            property="address"
            label="告警详情"
            width="120"
            show-overflow-tooltip
          />
          <el-table-column property="name" label="所属部门" width="160" />
          <el-table-column property="name" label="安装位置" width="160" />
          <el-table-column property="name" label="告警时间" width="160" />
          <el-table-column property="name" label="是否复位" width="80" />
          <el-table-column property="name" label="处理状态" width="80" />
          <el-table-column property="name" label="操作" width="240">
          
          <!-- <el-link :underline="false"  style="width:40px"> -->
            <router-link to="/detailspages">详情</router-link>
            <router-link to="/detailspages">处理</router-link>
            <router-link to="/detailspages">处理结果</router-link>
            <router-link to="/detailspages">隐患上报</router-link>
        <!-- </el-link> -->
        <popoverVue/>
          <!-- <el-link :underline="false" style="width:40px">处理</el-link> -->
          <!-- <el-link :underline="false" style="width:80px">处理结果</el-link>
          <el-link :underline="false" style="float: right">隐患上报</el-link> -->
        
        </el-table-column>
        </el-table>
        <div style="padding: 20px">
          <el-button @click="toggleSelection()">Clear selection</el-button>
        </div>
        <el-pagination class="pagination" background layout="prev, pager, next" :total="10" />
</template>
<script setup lang="ts">
    import { Search, RefreshRight, Files, Download } from "@element-plus/icons-vue";

    import popoverVue from "../../components/alert/popover.vue";
    import { ElTable} from "element-plus";
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
          // TODO: improvement typing when refactor table
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
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
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-08",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-06",
        name: "Tom,jjjjjjj",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-07",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    </script>
    
    <style scoped>
    .common-layout {
      position: relative;
      height: 1000px;
    }
    .el-container {
      position: relative;
      height: 100%;
    }
    .aside {
      position: relative;
      top: 16px;
      background-color: white;
      overflow-x: hidden;
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
    .el-main {
      background-color: white;
      margin: 16px;
      overflow-x: hidden;
    }
    .main-row1 {
      padding: 16px;
    }
    .input {
      width: 150px;
    }
    .table-head {
      position: relative;
    
      text-align: left;
    }
    .el-table-column {
      background-color: #d8d9dd;
    }
    .pagination {
      position: relative;
      left: 65%
    };
    </style>
    
