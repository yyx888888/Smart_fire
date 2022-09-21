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
          <el-table-column property="size" label="安装位置" width="160" />
          <el-table-column property="time" label="告警时间" width="160" />
          <el-table-column property="fuwei" label="是否复位" width="80" />
          <el-table-column property="zhuangtai" label="处理状态" width="80" />
          <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="editDev(scope.row)">编辑</el-button>
                <el-button link type="primary" size="small">详情</el-button>
                <el-button link type="primary" size="small">配置</el-button>
              </template>
            </el-table-column>
        </el-table>
        <div style="padding: 20px">
          <el-button @click="toggleSelection()">Clear selection</el-button>
        </div>
        <el-pagination class="pagination" background layout="prev, pager, next" :total="10" />
</template>
<script setup lang="ts">
    import { Search, RefreshRight, Files, Download } from "@element-plus/icons-vue";
    import {useRouter} from "vue-router";
    import { ElMessage ,ElMessageBox} from 'element-plus'
    import {useStore} from "vuex";
    import { ElTable} from "element-plus";
    import { ref } from "vue";
    const router=useRouter();
    const input = ref("");
    const input2 = ref("");
    const value = ref("");
    const value2 = ref("");
    
    // 选择器
    const options = [
      {
        value: "未处理",
        label: "未处理",
      },
      {
        value: "已提醒",
        label: "已提醒",
      },
      {
        value: "已处理",
        label: "已处理",
      },
      {
        value: "转工单",
        label: "转工单",
      },
    ];
    
    // 表格
    interface User {
      date: string;
      name: string;
      address: string;
      size:string;
      time:string;
      bumeng:string;
      fuwei:string;
      zhuangtai:string;
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
        date: "Dev-002021063001",
        name: "严重",
        address: "浓度超上限告警",
        size: "综合楼A#5层103",
        time: "2021/9/25 09:20:50",
        bumeng:"综合办公楼",
      fuwei:"否",
      zhuangtai:"未处理",
      },
      {
        date: "Dev-002021063001",
        name: "重要",
        address: "浓度超上限告警",
        size: "综合楼A#5层103",
        time: "2021/9/25 09:20:50",
        bumeng:"仓储楼",
      fuwei:"否",
      zhuangtai:"未处理",
      },
      {
        date: "Dev-0021063001",
        name: "次要",
        address: "温度超上限告警",
        size: "综合楼A#5层103",
        time: "2021/9/25 09:20:50",
        bumeng:"综合办公楼",
      fuwei:"否",
      zhuangtai:"未处理",
      },
      {
        date: "Dev-002021063001",
        name: "重要",
        address: "故障报警",
        size: "综合楼A#5层103",
        time: "2021/9/25 09:20:50",
        bumeng:"仓储楼",
      fuwei:"否",
      zhuangtai:"未处理",
      },
      {
        date: "Dev-002021063001",
        name: "次要",
        address: "温度超上限告警",
        size: "综合楼A#5层103",
        time: "2021/9/25 09:20:50",
        bumeng:"综合办公楼",
      fuwei:"否",
      zhuangtai:"未处理",
      },
      {
        date: "Dev-002021063001",
        name: "重要",
        address: "故障报警",
        size: "综合楼A#5层103",
        time: "2021/9/25 09:20:50",
        bumeng:"产线厂房",
      fuwei:"否",
      zhuangtai:"未处理",
      },
      {
        date: "Dev-002021063001",
        name: "次要",
        address: "故障报警",
        size: "综合楼A#5层103",
        time: "2021/9/25 09:20:50",
        bumeng:"综合办公楼",
      fuwei:"否",
      zhuangtai:"未处理",
      },
    ];
    const editDev=(row:any)=>{
      router.push({path:"/detailspages",query:{id:row.id}})
    }
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
    
