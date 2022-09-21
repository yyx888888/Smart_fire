<!--
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-09-19 14:40:55
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-09-21 14:41:42
 * @FilePath: \Smart_fire-master\src\views\Patrol\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!--左侧导航  -->
  <!-- <div class="left">
    <el-menu default-active="2" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose" router>
      <el-menu-item @click="goPlan" index="1" class="selected">
        <img src="../../../public/images/u4910.svg" alt="">
        <span class="white">巡检计划</span>
      </el-menu-item>
      <el-menu-item @click="goTask
      " index="2">
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
          <el-form-item label="设备名称：">
            <el-input v-model="searchForm.name" placeholder="请输入" class="size" />
          </el-form-item>
          <el-form-item label="所属组织：">
            <el-select v-model="searchForm.organization" class="size">
              <el-option label="全部" value="" />
              <el-option label="综合办公楼" value="综合办公楼" />
              <el-option label="产线厂房" value="产线厂房" />
              <el-option label="仓储楼" value="仓储楼" />
              <el-option label="…" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="执行人员：">
            <el-select v-model="searchForm.staff" class="size">
              <el-option label="全部" value="" />
              <el-option label="test01" value="test01" />
              <el-option label="test02" value="test02" />
              <el-option label="test03" value="test03" />
              <el-option label="…" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="处理状态：">
            <el-select v-model="searchForm.state" class="size">
              <el-option label="全部" value="" />
              <el-option label="未开始" value="未开始" />
              <el-option label="已结束" value="已结束" />
              <el-option label="执行中" value="执行中" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="search"><img src="../../../public/images/u885.svg" alt="">查询</el-button>
            <el-button @click="clear"><img src="../../../public/images/u875.svg" alt="">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 新增栏 -->
      <div class="add">
        <el-button class="addBtn" @click="addNew = true"><img src="../../../public/images/u879.svg" alt="">添加巡检计划
        </el-button>
        <!-- 新增模态框 -->
        <el-dialog v-model="addNew" title="新增巡更计划">
          <el-form :model="addForm" label-position="top" class="alertForm">
            <el-form-item label="任务名称" :label-width="formLabelWidth" class="left w-50">
              <el-input v-model="addForm.name" placeholder="请输入" class="input" />
            </el-form-item>
            <el-form-item label="有效时间" :label-width="formLabelWidth" class="left w-50">
              <el-col :span="11">
                <el-date-picker v-model="addForm.start" type="date" placeholder="年/月/日" style="width: 100%" />
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">&nbsp;&nbsp;—</span>
              </el-col>
              <el-col :span="11">
                <el-date-picker v-model="addForm.end" placeholder="年/月/日" style="width: 100%" />
              </el-col>
            </el-form-item>
            <el-form-item label="执行人员：" class="left w-50">
              <el-select v-model="addForm.staff" class="input">
                <el-option label="请选择" value="" />
                <el-option label="test01" value="test01" />
                <el-option label="test02" value="test02" />
                <el-option label="test03" value="test03" />
                <el-option label="…" value="1" />
              </el-select>
            </el-form-item>
            <el-form-item label="计划类型" class="left">
              <el-select v-model="addForm.type.times1" class="w-120">
                <el-option label="请选择" value="" />
                <el-option label="小时" value="小时" />
                <el-option label="天" value="天" />
                <el-option label="周" value="周" />
                <el-option label="月" value="月" />
                <el-option label="季" value="季" />
                <el-option label="半年" value="半年" />
                <el-option label="年" value="年" />
              </el-select>
              <el-input v-model="addForm.type.times2" placeholder="请输入频次" class="w-166" />
            </el-form-item>
            <el-form-item label="巡更点位：" class="w-50">
              <el-select v-model="addForm.position.part" class="w-160">
                <el-option label="选择分区/组织" value="" />
                <el-option label="综合办公楼" value="综合办公室" />
                <el-option label="产线厂房" value="产线厂房" />
                <el-option label="仓储楼" value="仓储楼" />
                <el-option label="…" value="0" />
              </el-select>
              <el-select v-model="addForm.position.floor" class="w-130">
                <el-option label="选择楼层" value="" />
                <el-option label="B1" value="B1" />
                <el-option label="B2" value="B2" />
                <el-option label="G1" value="G1" />
                <el-option label="G2" value="G2" />
                <el-option label="…" value="0" />
              </el-select>
            </el-form-item>
            <el-form-item label="描述" class="w-100">
              <el-input v-model="addForm.desc" type="textarea" placeholder="请输入巡更计划描述" rows="6" />
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="addNew = false"><img src="../../../public/images/u1071.svg" alt="">取消</el-button>
              <el-button @click="addNew = false;addPlan"><img src="../../../public/images/u1075.svg" alt="">保存
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
      <!-- 表格 -->
      <div class="tableShow">
        <el-table :data="tableData">
          <el-table-column prop="num" label="序号" width="80" />
          <el-table-column prop="name" label="巡检计划名称" width="220" />
          <el-table-column prop="type.times" label="计划类型" />
          <el-table-column prop="position.part" label="所属部门" />
          <el-table-column prop="staff" label="执行人员" />
          <el-table-column prop="rate" label="完成率" />
          <el-table-column prop="start" label="计划开始时间" />
          <el-table-column prop="end" label="计划结束时间" />
          <el-table-column prop="state" label="状态" />
          <el-table-column label="操作" width="227">
            <template #default="scope">
              <el-button @click="handleEdit(scope.$index, scope.row);showMsg = true">查看详情</el-button>
              <!-- 查看详情模态框 -->
              <el-dialog v-model="showMsg" title="巡更计划详情">
                <el-form :model="showForm" label-position="top" class="alertForm">
                  <el-form-item label="任务名称" :label-width="formLabelWidth" class="left w-50">
                    <el-input v-model="showForm.name" placeholder="请输入" class="input" />
                  </el-form-item>
                  <el-form-item label="有效时间" :label-width="formLabelWidth" class="left w-50">
                    <el-col :span="11">
                      <el-date-picker v-model="showForm.start" type="date" placeholder="年/月/日" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                      <span class="text-gray-500">&nbsp;&nbsp;—</span>
                    </el-col>
                    <el-col :span="11">
                      <el-date-picker v-model="showForm.end" placeholder="年/月/日" style="width: 100%" />
                    </el-col>
                  </el-form-item>
                  <el-form-item label="执行人员：" class="left w-50">
                    <el-select v-model="showForm.staff" class="input">
                      <el-option label="请选择" value="" />
                      <el-option label="test01" value="test01" />
                      <el-option label="test02" value="test02" />
                      <el-option label="test03" value="test03" />
                      <el-option label="…" value="" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="计划类型" class="left">
                    <el-select v-model="showForm.type.times1" class="w-120">
                      <el-option label="请选择" value="0" />
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
                  <el-form-item label="巡更点位：" class="w-50">
                    <el-select v-model="showForm.position.part" class="w-160">
                      <el-option label="选择分区/组织" value="" />
                      <el-option label="综合办公楼" value="综合办公室" />
                      <el-option label="产线厂房" value="产线厂房" />
                      <el-option label="仓储楼" value="仓储楼" />
                      <el-option label="…" value="" />
                    </el-select>
                    <el-select v-model="showForm.position.floor" class="w-130">
                      <el-option label="选择楼层" value="" />
                      <el-option label="B1" value="B1" />
                      <el-option label="B2" value="B2" />
                      <el-option label="G1" value="G1" />
                      <el-option label="G2" value="G2" />
                      <el-option label="…" value="" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="描述" class="w-100">
                    <el-input v-model="showForm.desc" type="textarea" placeholder="请输入巡更计划描述" rows="6" />
                  </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="showMsg = false"><img src="../../../public/images/u1071.svg" alt="">取消
                    </el-button>
                    <el-button @click="showMsg= false"><img src="../../../public/images/u1075.svg" alt="">保存</el-button>
                  </span>
                </template>
              </el-dialog>
              <!-- 删除按钮 -->
              <el-button @click="handleDelete(scope.$index, scope.row);cancel = true">删除</el-button>
              <!-- 确认删除 -->
              <!-- <el-dialog
            v-model="cancel"
            title="删除提示"
            width="30%"
          >
            <span>是否确认删除已选巡更计划？</span>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="cancel = false">取消</el-button>
                <el-button type="primary" @click="delThisPlan;cancel = false"
                  >确认</el-button
                >
              </span>
            </template>
          </el-dialog> -->
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
import { ElMessage, ElMessageBox } from 'element-plus'
import { log } from 'console'
import { useRouter } from 'vue-router';
const router = useRouter();
const addNew = ref(false)
const showMsg = ref(false)
const cancel = ref(false)
const store = useStore();
console.log(store);
let num = -1;
// 新增表单
const addForm = reactive({
  num: '',
  name: '',
  start: '',
  end: '',
  staff: '',
  type: {
    times: '',
    times1: '',
    times2: ''
  },
  position: {
    part: '',
    floor: ''
  },
  desc: ''
})
// 查询表单
const searchForm = reactive({
  name: '',
  organization: '',
  staff: '',
  state: '',
})
// 详细信息表单
const showForm = reactive({
  num: '',
  name: '',
  start: '',
  end: '',
  staff: '',
  type: {
    times: '',
    times1: '',
    times2: ''
  },
  position: {
    part: '',
    floor: ''
  },
  desc: ''
})
// 导航路由跳转
const goPlan = () => {
  router.push('/Patrol/plan')
}
const goTask = () => {
  router.push('/Patrol/task')
}
// 查询计划
const search = () => {
  if (searchForm.name != '') {

  }
  if (searchForm.organization != '' && searchForm.organization != '0') {

  }
  if (searchForm.staff != '' && searchForm.staff != '0') {

  }
  if (searchForm.state != '' && searchForm.staff != '0') {

  }
}
// 清空查询列表
const clear = () => {
  tableData = store.getters.getAllPlan;
  searchForm.name = '';
  searchForm.organization = '';
  searchForm.staff = '';
  searchForm.state = '';
}
// 新增计划
const addPlan = () => {
  addForm.num = String(length + 1);
  store.commit('addPlan', addForm)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// 详细信息展示
const handleEdit = (index: number, row: number) => {
  console.log(index, row);
  showForm.name = tableData[index].name;
  showForm.start = tableData[index].start;
  showForm.end = tableData[index].end;
  showForm.staff = tableData[index].staff;
  showForm.type = tableData[index].type;
  showForm.position = tableData[index].position;
  showForm.desc = tableData[index].desc;
}
// 删除
const handleDelete = (index: number, row: number) => {
  console.log(index, row);
  // tableData.splice(index,1);
  store.commit('delPlan', index)
}
import { computed } from "vue"
let tableData = store.getters.getAllPlan;
const length = tableData.length;
</script>

<style lang="scss" scoped>
.left {
  float: left;
}

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
}

.size {
  width: 200px;
  height: 30px;
}

.box {
  margin-top: 25px;
  margin-left: 15px;
}

.select {
  width: 100%;
}

.select .el-form-item {
  float: left;
  width: calc(20% - 10px);
  margin-right: 10px;
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
</style>