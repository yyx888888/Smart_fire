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
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="设备编号：">
              <el-input placeholder="请输入" v-model="search"/>
            </el-form-item>
            <el-form-item label="设备名称：">
              <el-input placeholder="请输入" />
            </el-form-item>
            <el-form-item label="设备类型：">
              <el-select placeholder="全部" v-model="value">
                <el-option
                    v-for="item in option"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="设备状态：">
              <el-select placeholder="全部" v-model="valueW">
                <el-option
                    v-for="item in optionW"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="searchBtn">
                <el-icon :size="20" ><Search /></el-icon>
                <span>查  询</span>
              </el-button>
              <el-button type="primary" plain>
                <el-icon :size="20"><RefreshRight /></el-icon>
                <span>重  置</span>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <!--      功能按钮-->
        <div class="btn">
          <el-button type="primary" plain @click="addDevice">
            <el-icon :size="20"><Plus /></el-icon>
            <span>添  加</span>
          </el-button>
          <el-button type="primary" plain>
            <el-icon :size="20"><CircleClose /></el-icon>
            <span>禁  用</span>
          </el-button>
          <el-button type="primary" plain>
            <el-icon :size="20"><Refresh /></el-icon>
            <span>启  用</span>
          </el-button>
          <el-button type="primary" plain>
            <el-icon :size="20"><Upload /></el-icon>
            <span>批量导入</span>
          </el-button>
          <el-button type="primary" plain>
            <el-icon :size="20"><Delete /></el-icon>
            <span>批量删除</span>
          </el-button>
          <el-button type="primary" plain>
            <el-icon :size="20"><Download /></el-icon>
            <span>批量导出</span>
          </el-button>
        </div>
        <!--      设备表格展示-->
        <div class="showDevice">
          <el-table
              :header-cell-style="{background:'#f2f2f2'}"
              ref="multipleTableRef"
              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              style="width: 100%"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column property="id" label="序号" width="60"></el-table-column>
            <el-table-column property="DevNum" label="设备编号" width="150" />
            <el-table-column property="DevName" label="设备名称" width="150"/>
            <el-table-column property="DevType" label="设备类型" width="180"></el-table-column>
            <el-table-column property="department" label="所属部门" width="150"></el-table-column>
            <el-table-column property="DevLocation" label="安装位置" width="150"></el-table-column>
            <el-table-column property="person" label="消防安全负责人" width="130"></el-table-column>
            <el-table-column property="tel" label="责任人电话" width="150"></el-table-column>
            <el-table-column property="DevStatus" label="设备状态" width="120"></el-table-column>
            <el-table-column property="camera" label="关联摄像头" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="editDev(scope.row)">编辑</el-button>
                <el-button link type="primary" size="small">详情</el-button>
                <el-button link type="primary" size="small">配置</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--        分页-->
        <div class="page">
          <el-pagination
              :currentPage="currentPage"
              :page-sizes="[10, 20, 30, 40]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length"
              @current-change="changePage"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent,ref,computed} from "vue";
import monitoringSystem from '../../components/MonitoringSystem.vue';
import { ElMessage ,ElMessageBox} from 'element-plus'
import {useStore} from "vuex";
import {useRouter} from "vue-router";


export default defineComponent({
  name:"FireSystem",

  setup(){
    const router=useRouter();
    const store=useStore();
    const value=ref('');
    const valueW=ref('');
    const currentPage = ref(1);
    const tableData=store.state.deviceData.fireTableData
    const option=[
      {label:"全部", value:"全部"}, {label:"可燃气体探测器", value:"可燃气体探测器"},
      {label:"手动火灾报警按钮", value:"手动火灾报警按钮"}, {label:"消防火栓按钮", value:"消防火栓按钮"},
      {label:"火灾探测器", value:"火灾探测器"}, {label:"典型感文火灾探测器", value:"典型感文火灾探测器"},
      {label:"点型光电感烟火灾探测器", value:"点型光电感烟火灾探测器"}, {label:"消防水泵", value:"消防水泵"},
      {label:"喷淋泵", value:"喷淋泵"}, {label:"水流指示器", value:"水流指示器"}, {label:"信号阀", value:"信号阀"},
      {label:"防火阀", value:"防火阀"}, {label:"防烟排烟风机", value:"防烟排烟风机"},
      {label:"排烟防火阀", value:"排烟防火阀"}, {label:"警报装置", value:"警报装置"},
    ];
    const optionW=[
      {label:"全部", value:"全部"}, {label:"正常", value:"正常"}, {label:"报警", value:"报警"},
      {label:"故障", value:"故障"}, {label:"离线", value:"离线"}, {label:"禁用", value:"禁用"},
    ];


    const search=ref('')
    const tableDataTwo=ref([])
    const searchBtn=()=>{
      let sea = search.value
      if (sea) {
        tableDataTwo.value = tableData.value.filter(function(a:any) { //通过鲁律数据赋值给新数组可实现重复搜索
          return Object.keys(a).some(function(key) {
            return String(a['name']).toLowerCase().indexOf(sea) > -1
          })
        })
      }
    }
    const changePage=(val:any)=>{
      console.log()
    }
    const addDevice=()=>{

      ElMessageBox.alert(
          'HTML',
          'HTML String',
          {
            dangerouslyUseHTMLString: true,
          }
      )
    }
    const editDev=(row:any)=>{
      router.push({path:"/changeUser",query:{id:row.id}})
    }
    return {
      monitoringSystem,
      tableData,
      value,valueW, option, optionW,
      pageSize: 10, currentPage,changePage,
      searchBtn,search,tableDataTwo,
      addDevice,
      editDev
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
.page{
  text-align: center;
  margin-left: 35rem;
  margin-top: 12vh;
}
</style>

