<!--
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-09-19 14:40:55
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-09-21 14:46:36
 * @FilePath: \Smart_fire-master\src\views\Patrol\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!--左侧导航  -->
  <!-- <div class="left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo menu"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" @click="goPlan">
            <img src="../../../public/images/u4910.svg" alt="">
            <span class="white">巡检计划</span>
        </el-menu-item>
        <el-menu-item index="2" @click="goTask" class="selected">
          <img src="../../../public/images/u4914.svg" alt="">
          <span class="white">巡检任务</span>
        </el-menu-item>
      </el-menu>
</div> -->
  <!-- 右侧表格 -->
  <div class="table left">
    <div class="box">
      <!-- 筛选栏 -->
      <div class="select">
        <el-form :model="searchForm">
          <el-form-item label="任务名称：">
            <el-input v-model="searchForm.name" placeholder="请输入" class="size" />
          </el-form-item>
          <el-form-item label="任务类型：">
            <el-select v-model="searchForm.type" class="size">
              <el-option label="全部" value="0" />
              <el-option label="每天" value="每天" />
              <el-option label="每小时" value="每小时" />
              <el-option label="每周" value="每周" />
              <el-option label="每月" value="每月" />
              <el-option label="…" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="执行人员：">
            <el-select v-model="searchForm.staff" class="size">
              <el-option label="全部" value="0" />
              <el-option label="test01" value="test01" />
              <el-option label="test02" value="test02" />
              <el-option label="test03" value="test03" />
              <el-option label="…" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="任务状态：">
            <el-select v-model="searchForm.state" class="size">
              <el-option label="全部" value="0" />
              <el-option label="执行中" value="执行中" />
              <el-option label="已完成" value="已完成" />
              <el-option label="未完成" value="未完成" />
            </el-select>
          </el-form-item>
          <el-form-item id="w-600" el-form-item label="完成时间：">
            <el-col :span="11">
              <el-date-picker v-model="searchForm.start" type="date" placeholder="年/月/日" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">—</span>
            </el-col>
            <el-col :span="11">
              <el-date-picker v-model="searchForm.end" placeholder="年/月/日" style="width: 100%" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button><img src="../../../public/images/u885.svg" alt="">查询</el-button>
            <el-button @click="clear"><img src="../../../public/images/u875.svg" alt="">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 表格 -->
      <div class="tableShow">
        <el-table :data="tableData" height="440">
          <el-table-column prop="num" label="序号" width="80" />
          <el-table-column prop="name" label="巡检任务名称" width="220" />
          <el-table-column prop="type.times" label="任务类型" />
          <el-table-column prop="staff" label="责任人" />
          <el-table-column prop="rate" label="完成率" />
          <el-table-column prop="effectiveTime.time" label="有效时间" width="260" />
          <el-table-column prop="completeionTime" label="完成时间" />
          <el-table-column label="任务状态" prop="state">
            <template #default="scope">
              <el-tag :type="scope.row.state === '已完成' ? 'success' : '' || scope.row.state === '未完成' ? 'danger' : '' "
                disable-transitions>
                {{ scope.row.state }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="227">
            <template #default="scope">
              <el-button @click="handleEdit(scope.$index, scope.row);showMsg = true">查看详情</el-button>
              <!-- 查看详情弹框 -->
              <el-dialog v-model="showMsg" title="巡更任务详情">
                <el-form :model="showForm" label-position="top" class="alertForm">
                  <el-form-item label="任务名称" :label-width="formLabelWidth" class="left w-50">
                    <el-input v-model="showForm.name" placeholder="请输入" class="input" />
                  </el-form-item>
                  <el-form-item label="有效时间" :label-width="formLabelWidth" class="left w-50">
                    <el-col :span="11">
                      <el-date-picker v-model="showForm.effectiveTime.start" type="date" placeholder="年/月/日"
                        style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                      <span class="text-gray-500">&nbsp;&nbsp;—</span>
                    </el-col>
                    <el-col :span="11">
                      <el-date-picker v-model="showForm.effectiveTime.end" placeholder="年/月/日" style="width: 100%" />
                    </el-col>
                  </el-form-item>
                  <el-form-item label="执行人员：" class="left w-50">
                    <el-select v-model="showForm.staff" class="input">
                      <el-option label="请选择" value="" />
                      <el-option label="test01" value="test01" />
                      <el-option label="test02" value="test02" />
                      <el-option label="test03" value="test03" />
                      <el-option label="…" value="0" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="计划类型" class="left w-50">
                    <el-select v-model="showForm.type.times1" class="w-120">
                      <el-option label="请选择" value="" />
                      <el-option label="小时" value="小时" />
                      <el-option label="天" value="天" />
                      <el-option label="周" value="周" />
                      <el-option label="月" value="月" />
                      <el-option label="季" value="季" />
                      <el-option label="半年" value="半年" />
                      <el-option label="年" value="年" />
                    </el-select>
                    <el-input v-model="showForm.type.times2" placeholder="请输入频次" class="w-166" />
                  </el-form-item>
                  <el-form-item label="任务状态" class="w-50">
                    <el-select v-model="showForm.state" class="size">
                      <el-option label="执行中" value="执行中" />
                      <el-option label="已完成" value="已完成" />
                      <el-option label="未完成" value="未完成" />
                    </el-select>
                  </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="showMsg = false"><img src="../../../public/images/u1071.svg" alt="">取消
                    </el-button>
                    <el-button @click="showMsg = false"><img src="../../../public/images/u1075.svg" alt="">保存
                    </el-button>
                  </span>
                </template>
              </el-dialog>
              <el-button @click="handleDelete(scope.$index, scope.row);cancel = true">删除</el-button>
              <!-- 删除弹框 -->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();
const cancel = ref(false)
const showMsg = ref(false)

const showForm = reactive({
  name: '',
  effectiveTime: {
    time: '',
    start: '',
    end: '',
  },
  staff: '',
  type: {
    times: '',
    times1: '',
    times2: ''
  },
  state: '',
})
const searchForm = reactive({
  name: '',
  organization: '',
  staff: '',
  state: '',
})
const goPlan = () => {
  router.push('/patrol/plan')
}
const goTask = () => {
  router.push('/patrol/task')
}
// 清空查询列表
const clear = () => {
  tableData = store.getters.getAllTask;
  searchForm.name = '';
  searchForm.organization = '';
  searchForm.staff = '';
  searchForm.state = '';
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleEdit = (index: number, row: number) => {
  console.log(index, row)
  showForm.name = tableData[index].name;
  showForm.effectiveTime = tableData[index].effectiveTime;
  showForm.staff = tableData[index].staff;
  showForm.type = tableData[index].type;
  showForm.state = tableData[index].state;
}
const handleDelete = (index: number, row: number) => {
  console.log(index, row)
  store.commit('delTask', index)
}
import { computed } from "vue"
let tableData = store.getters.getAllTask;
</script>

<style lang="scss" scoped>
// .left {
//   float: left;
// }

.menu {
  width: 260px;
  height: 935px;
  background-color: rgba(40, 44, 52, 1);
}

.el-menu-item {
  position: relative;
  top: 10px;
  width: 100%;
  height: 45px;
}

.el-menu-item:hover {
  background-color: rgba(58, 142, 230, 0.298039215686275);
  border-right: 4px solid rgba(58, 142, 230, 1);
}

.selected {
  background-color: rgba(58, 142, 230, 0.298039215686275);
  border-right: 4px solid rgba(58, 142, 230, 1);
}

.white {
  color: #FFFFFF;
  text-align: center;
  margin-left: 20px
}

.el-menu-item img {
  width: 20px;
  height: 20px;
}

.table {
  width: 100%;
  height: 905px;
  margin: 10px;
  background-color: #FFFFFF;
  padding-top: 10px;
}

.size {
  width: 200px;
  height: 30px;
}

.box {
  margin-top: 10px;
  margin-left: 15px;
}

.select {
  width: 100%;
}

.select .el-form-item {
  float: left;
  width: calc(25% - 10px);
  margin-right: 10px;
}

#w-600 {
  width: 600px;
  margin-right: 0;
}

.select .el-form-item__label {
  display: block !important;
  width: 70px !important;
  padding: 0 !important;
  font-size: 13px !important;
}

.select .el-button {
  width: 80px;
  height: 30px;
  line-height: 30px;
}

.el-button img {
  width: 16px;
  height: 16px;
  line-height: 30px;
  margin-right: 10px;
}

.addBtn {
  position: relative;
  top: 0;
  left: -990px;
}

.tableShow {
  margin-top: 20px;
}

.el-table thead {
  color: #000000 !important;
  background-color: rgba(242, 242, 242, 1) !important;
  border-top: 1px solid rgba(215, 215, 215, 1) !important;
  border-bottom: 1px solid rgba(215, 215, 215, 1) !important;
}

.w-50 {
  width: 50%;
}

.input {
  width: 300px;
  height: 30px;
}

w-100 {
  width: 100% !important;
}

.w-160 {
  width: 160px;
  height: 30px;
  margin-right: 10px;
}

.w-130 {
  width: 130px;
  height: 30px;
}

.w-120 {
  width: 120px;
  height: 30px;
  margin-right: 10px;
}

.w-166 {
  width: 166px;
  height: 30px;
}

.el-table {
  --el-table-border-color: transparent;
}

.el-table__row {
  height: 40px;
}
</style>