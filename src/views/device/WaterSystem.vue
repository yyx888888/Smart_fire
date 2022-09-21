<template>
  <div>
    <!--    上半部分-->
    <div class="topCont">
      <monitoringSystem></monitoringSystem>
    </div>
    <!--    下半部分-->
    <div class="bottomCont">
      <div class="content">
        <!--      搜索栏-->
        <div class="searchInput">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="设备编号：">
              <el-input v-model="formInline.user" placeholder="请输入" />
            </el-form-item>
            <el-form-item label="设备名称：">
              <el-input v-model="formInline.user" placeholder="请输入" />
            </el-form-item>
            <el-form-item label="设备类型：">
              <el-select v-model="value" placeholder="全部">
                <el-option label="全部" value="全部" />
                <el-option label="消防水压表" value="消防水压表" />
                <el-option label="消防水液位采集终端" value="消防水液位采集终端" />
              </el-select>
            </el-form-item>
            <el-form-item label="设备状态：">
              <el-select v-model="valueW" placeholder="全部">
                <el-option label="全部" value="全部" />
                <el-option label="正常" value="正常" />
                <el-option label="报警" value="报警" />
                <el-option label="故障" value="故障" />
                <el-option label="离线" value="离线" />
                <el-option label="禁用" value="禁用" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="onSubmit">
                <el-icon :size="20"><Search /></el-icon>
                <span>查  询</span>
              </el-button>
              <el-button type="primary" plain @click="onSubmit">
                <el-icon :size="20"><RefreshRight /></el-icon>
                <span>重  置</span>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <!--      功能按钮-->
        <div class="btn">
          <el-button type="primary" plain class="refreshButton">
            <el-icon :size="20"><Plus /></el-icon>
            <span>添  加</span>
          </el-button>
          <el-button type="primary" plain class="refreshButton">
            <el-icon :size="20"><CircleClose /></el-icon>
            <span>禁  用</span>
          </el-button>
          <el-button type="primary" plain class="refreshButton">
            <el-icon :size="20"><Refresh /></el-icon>
            <span>启  用</span>
          </el-button>
          <el-button type="primary" plain class="refreshButton">
            <el-icon :size="20"><Upload /></el-icon>
            <span>批量导入</span>
          </el-button>
          <el-button type="primary" plain class="refreshButton">
            <el-icon :size="20"><Delete /></el-icon>
            <span>批量删除</span>
          </el-button>
          <el-button type="primary" plain class="refreshButton">
            <el-icon :size="20"><Download /></el-icon>
            <span>批量导出</span>
          </el-button>
        </div>
        <!--      设备表格展示-->
        <div class="showDevice">
          <el-table
              :header-cell-style="{background:'#f2f2f2'}"
              ref="multipleTableRef"
              :data="tableData"
              style="width: 100%"
              @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="40" />
            <el-table-column property="id" label="序号" width="55"></el-table-column>
            <el-table-column property="DevNum" label="设备编号" width="165" />
            <el-table-column property="DevName" label="设备名称" width="80"/>
            <el-table-column property="DevType" label="设备类型" width="95"></el-table-column>
            <el-table-column property="iccId" label="ICCID" width="150"></el-table-column>
            <el-table-column property="Voltage" label="电压" width="65"></el-table-column>
            <el-table-column property="hydraulicPressure" label="水压" width="85"></el-table-column>
            <el-table-column property="waterLevel" label="水位" width="85"></el-table-column>
            <el-table-column property="department" label="所属部门" width="95"></el-table-column>
            <el-table-column property="DevLocation" label="安装位置" width="130"></el-table-column>
            <el-table-column property="person" label="消防安全负责人" width="125"></el-table-column>
            <el-table-column property="tel" label="责任人电话" width="110"></el-table-column>
            <el-table-column property="DevStatus" label="设备状态" width="80"></el-table-column>
            <el-table-column property="camera" label="关联摄像头" width="95"></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template #default>
                <el-button link type="primary" size="small">编辑</el-button>
                <el-button link type="primary" size="small">详情</el-button>
                <el-button link type="primary" size="small">配置</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>



    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent,reactive,ref} from "vue";
import monitoringSystem from '../../components/MonitoringSystem.vue';
import { ElTable } from 'element-plus'
import {useStore} from "vuex";

export default defineComponent({
  name:"FireSystem",

  setup(){
    interface User {
      date: string
      name: string
      address: string
    }

    const value=ref('');
    const valueW=ref('');
    const store=useStore();
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


    const formInline = reactive({
      user: '',
      region: '',
    })

    const onSubmit = () => {
      console.log('submit!')
    }

    return {
      monitoringSystem,
      formInline,
      onSubmit,
      tableData:store.state.deviceData.waterTableData,
      valueW,value

    }
  }
})

</script>

<style scoped>
.bottomCont{
  height: 80vh;
  background-color: #fff;
}
.searchInput{
  padding-top: 1rem;
}
.content{
  margin: 1rem;
}
.showDevice{
  margin-top: 1rem;
}
</style>

