import { createStore } from 'vuex'

export default createStore({
  state:{
    deviceData:{
      menuInfo:[
        {
          menuId:1,
          menuUrl:"/fireSystem",
          menuName:"火灾监测报警系统",
          menuIcon:"Document"
        },
        {
          menuId:2,
          menuUrl:"/waterSystem",
          menuName:"消防水监测系统",
          menuIcon:"Location"
        },
        {
          menuId:3,
          menuUrl:"/waterSystem",
          menuName:"室外消防栓系统",
          menuIcon:"Sunny"
        },
        {
          menuId:4,
          menuUrl:"/waterSystem",
          menuName:"智慧安全用电系统",
          menuIcon:"CollectionTag"
        },
        {
          menuId:5,
          menuUrl:"/waterSystem",
          menuName:"视频监控系统",
          menuIcon:"Cpu"
        }
      ],
      fireDeviceStatus:[
        {
          id:1,
          backgroundColor:'#1890ff',
          deviceImgUrl:'../../public/images/allDevice.svg',
          deviceName:'全部设备',
          deviceNum:'102',
        },
        {
          id:2,
          backgroundColor:'#00e266',
          deviceImgUrl:'../../public/images/normalDevice.svg',
          deviceName:'正常',
          deviceNum:'82',
        },
        {
          id:3,
          backgroundColor:'#d4321c',
          deviceImgUrl:'../../public/images/alertDevice.svg',
          deviceName:'报警',
          deviceNum:'9',
        },
        {
          id:4,
          backgroundColor:'#ec9d26',
          deviceImgUrl:'../../public/images/faultDevice.svg',
          deviceName:'故障',
          deviceNum:'4',
        },
        {
          id:5,
          backgroundColor:'#ccc',
          deviceImgUrl:'../../public/images/off-lineDevice.svg',
          deviceName:'离线',
          deviceNum:'5',
        },
        {
          id:6,
          backgroundColor:'#6300bf',
          deviceImgUrl:'../../public/images/disableDevice.svg',
          deviceName:'禁用',
          deviceNum:'2',
        }
      ],
      waterDeviceStatus:[
        {
          id:1,
          backgroundColor:'#1890ff',
          deviceImgUrl:'../../public/images/allDevice.svg',
          deviceName:'全部设备',
          deviceNum:'28',
        },
        {
          id:2,
          backgroundColor:'#00e266',
          deviceImgUrl:'../../public/images/normalDevice.svg',
          deviceName:'正常',
          deviceNum:'26',
        },
        {
          id:3,
          backgroundColor:'#d4321c',
          deviceImgUrl:'../../public/images/alertDevice.svg',
          deviceName:'报警',
          deviceNum:'1',
        },
        {
          id:4,
          backgroundColor:'#ec9d26',
          deviceImgUrl:'../../public/images/faultDevice.svg',
          deviceName:'故障',
          deviceNum:'1',
        },
        {
          id:5,
          backgroundColor:'#ccc',
          deviceImgUrl:'../../public/images/off-lineDevice.svg',
          deviceName:'离线',
          deviceNum:'0',
        },
        {
          id:6,
          backgroundColor:'#6300bf',
          deviceImgUrl:'../../public/images/disableDevice.svg',
          deviceName:'禁用',
          deviceNum:'0',
        }
      ],
      fireTableData: [
        {
          id:1,
          DevNum: 'Dev-00202106300',
          DevName: '燃气探测器',
          DevType: '可燃气体探测器',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:2,
          DevNum: 'Dev-002021063002',
          DevName: '手动按钮',
          DevType: '手动火灾报警按钮',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层104',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'无'
        },
        {
          id:3,
          DevNum: 'Dev-002021063003',
          DevName: '消火栓按钮',
          DevType: '消火栓按钮',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层105',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:4,
          DevNum: 'Dev-002021063004',
          DevName: '三合一火灾探测器',
          DevType: '火灾探测器',
          department: '产线厂房',
          DevLocation: '厂房B#3层060',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '离线',
          camera:'IPC1002'
        },
        {
          id:5,
          DevNum: 'Dev-002021063005',
          DevName: '感温探测器',
          DevType: '典型感文火灾探测器',
          department: '产线厂房',
          DevLocation: '厂房B#3层061',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '故障',
          camera:'无'
        },
        {
          id:6,
          DevNum: 'Dev-002021063006',
          DevName: '感烟探测器',
          DevType: '点型光电感烟火灾探测器',
          department: '产线厂房',
          DevLocation: '厂房B#3层062',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '离线',
          camera:'无'
        },
        {
          id:7,
          DevNum: 'Dev-002021063007',
          DevName: '输入模块',
          DevType: '输入模块',
          department: '产线厂房',
          DevLocation: '厂房B#3层063',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '禁用',
          camera:'无'
        },
        {
          id:8,
          DevNum: 'Dev-002021063008',
          DevName: '照明切电',
          DevType: '输入/输出模块',
          department: '仓储楼',
          DevLocation: '仓储楼C#2层205',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '延时',
          camera:'无'
        },
        {
          id:9,
          DevNum: 'Dev-002021063009',
          DevName: '消防泵',
          DevType: '消防水泵',
          department: '仓储楼',
          DevLocation: '仓储楼C#2层206',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'无'
        },
        {
          id:10,
          DevNum: 'Dev-002021063010',
          DevName: '喷淋泵',
          DevType: '喷淋泵',
          department: '仓储楼',
          DevLocation: '仓储楼C#2层207',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'IPC1003'
        },
        {
          id:11,
          DevNum: 'Dev-002021063011',
          DevName: '水流指示',
          DevType: '水流指示器',
          department: '仓储楼',
          DevLocation: '仓储楼C#2层208',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'IPC1003'
        },
        {
          id:12,
          DevNum: 'Dev-002021063012',
          DevName: '信号阀',
          DevType: '信号阀',
          department: '活动中心',
          DevLocation: '活动中心D#3层302',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'无'
        },
        {
          id:13,
          DevNum: 'Dev-002021063013',
          DevName: '防火阀出',
          DevType: '防火阀',
          department: '活动中心',
          DevLocation: '活动中心D#3层303',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'无'
        },
        {
          id:14,
          DevNum: 'Dev-002021063014',
          DevName: '排烟风机',
          DevType: '防烟排烟风机',
          department: '活动中心',
          DevLocation: '活动中心D#3层304',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'无'
        },
        {
          id:15,
          DevNum: 'Dev-002021063015',
          DevName: '防排烟阀',
          DevType: '排烟防火阀',
          department: '活动中心',
          DevLocation: '活动中心D#3层305',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'无'
        },
        {
          id:16,
          DevNum: 'Dev-002021063016',
          DevName: '声光报警',
          DevType: '警报装置',
          department: '活动中心',
          DevLocation: '活动中心D#3层306',
          person: 'test02',
          tel: '13601234560',
          DevStatus: '正常',
          camera:'无'
        }
      ],
      waterTableData: [
        {
          id:1,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '689.0mm',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:2,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:3,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:4,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:5,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:6,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:7,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:8,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:9,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        },
        {
          id:10,
          DevNum: 'Dev-01012021063001',
          DevName: '水压表',
          DevType: '消防水压表',
          iccId: '89861120214316',
          Voltage: '3.65V',
          hydraulicPressure: '586.5kpa',
          waterLevel: '689.0mm',
          department: '综合办公楼',
          DevLocation: '综合楼A#5层103',
          person: 'test01',
          tel: '13601234560',
          DevStatus: '报警',
          camera:'IPC1001'
        }
      ]
    },
    patrol:{
      plan:[
        {
          num: '1',
          name: '安防巡更01',
          type: {
          times:'每天4次',
          times1:'天',
          times2:'4次'
          },
          position: {
            part:'综合办公楼',
            floor:'G1'
          },
          staff:'test01',
          rate:'0.00%',
          start:'2022/6/30',
          end:'2022/7/30',
          state:'未开始',
          desc:''
        },
        {
          num: '2',
          name: '安防巡更02',
          type: {
          times:'每天4次',
          times1:'天',
          times2:'4次'
          },
          position: {
            part:'综合办公楼',
            floor:'G1'
          },
          staff:'test01',
          rate:'90.40%',
          start:'2021/12/25',
          end:'2022/12/25',
          state:'执行中',
          desc:''
        },
        {
          num: '3',
          name: '设备常规巡检03',
          type: {
          times:'每周1次',
          times1:'周',
          times2:'1次'
          },
          position: {
            part:'产线厂房',
            floor:'G1'
          },
          staff:'test01',
          rate:'96.50%',
          start:'2021/12/25',
          end:'2021/12/25',
          state:'执行中',
          desc:''
        },
        {
          num: '4',
          name: '视频巡更04',
          type: {
          times:'每小时1次',
          times1:'时',
          times2:'1次'
          },
          position: {
            part:'仓储楼',
            floor:'G1'
          },
          staff:'test02',
          rate:'95.50%',
          start:'2021/12/25',
          end:'2022/12/25',
          state:'执行中',
          desc:''
        },
        {
          num: '5',
          name: '设备常规巡检05',
          type: {
          times:'每周1次',
          times1:'周',
          times2:'1次'
          },
          position: {
            part:'产线厂房',
            floor:'G1'
          },
          staff:'test02',
          rate:'86.70%',
          start:'2021/9/25',
          end:'2022/9/25',
          state:'执行中',
          desc:''
        },
        {
          num: '6',
          name: '设备常规巡检06',
          type: {
          times:'每周1次',
          times1:'周',
          times2:'1次'
          },
          position: {
            part:'产线厂房',
            floor:'G1'
          },
          staff:'test02',
          rate:'0.00%',
          start:'2021/9/25',
          end:'2022/9/25',
          state:'执行中',
          desc:''
        },
        {
          num: '7',
          name: '设备常规巡检07',
          type: {
          times:'每月1次',
          times1:'月',
          times2:'1次'
          },
          position: {
            part:'产线厂房',
            floor:'G1'
          },
          staff:'test03',
          rate:'98.50%',
          start:'2021/6/30',
          end:'2021/12/30',
          state:'已结束',
          desc:''
        },
        {
          num: '8',
          name: '活动巡更08',
          type: {
          times:'每小时1次',
          times1:'时',
          times2:'1次'
          },
          position: {
            part:'仓储楼',
            floor:'G1'
          },
          staff:'test03',
          rate:'100.00%',
          start:'2021/6/20',
          end:'2021/6/25',
          state:'已结束',
          desc:''
        }    
      ],
      task: [
        {
          num: '1',
          name: '安防巡更01',
          type:{
          times:'每天',
          times1:'天',
          times2:'1次'
        },
          staff:'test01',
          rate:'0.00%',
          effectiveTime:{
            time:'2022/6/30-2022/6/30',
            start:'2022/6/30',
            end:'2022/6/30',
          },
          completeionTime:'执行中',
          state:'执行中',
        },
        {
          num: '2',
          name: '安防巡更02',
          type:{
          times:'每天',
          times1:'天',
          times2:'1次'
        },
          staff:'test01',
          rate:'100.00%',
          effectiveTime:{
            time:'2022/6/30-2022/6/30',
            start:'2022/6/30',
            end:'2022/6/30',
          },
          completeionTime:'2022/6/30',
          state:'已完成',
        },
        {
          num: '3',
          name: '设备常规巡检03',
          type:{
          times:'每天',
          times1:'天',
          times2:'1次'
        },
          staff:'test01',
          rate:'0.00%',
          effectiveTime:{
            time:'2022/6/30-2022/6/30',
            start:'2022/6/30',
            end:'2022/6/30',
          },
          completeionTime:'未完成',
          state:'未完成',
        },
        {
          num: '4',
          name: '视频巡更04',
          type:{
          times:'每小时',
          times1:'时',
          times2:'1次'
        },
          staff:'test02',
          rate:'90.00%',
          effectiveTime:{
            time:'2022/6/26-2022/6/26',
            start:'2022/6/26',
            end:'2022/6/26',
          },
          completeionTime:'2022/6/27',
          state:'已完成',
        },
        {
          num: '5',
          name: '活动巡更05',
          type:{
          times:'每小时',
          times1:'时',
          times2:'1次'
        },
          staff:'test02',
          rate:'90.00%',
          effectiveTime:{
            time:'2022/6/26-2022/6/26',
            start:'2022/6/26',
            end:'2022/6/26',
          },
          completeionTime:'2022/6/27',
          state:'已完成',
        },
        {
          num: '6',
          name: '设备常规巡检06',
          type:{
          times:'每周',
          times1:'周',
          times2:'1次'
        },
          staff:'test02',
          rate:'0.00%',
          effectiveTime:{
            time:'2022/6/21-2022/6/25',
            start:'2022/6/21',
            end:'2022/6/25',
          },
          completeionTime:'未完成',
          state:'未完成',
        },
        {
          num: '7',
          name: '设备功能巡检07',
          type:{
          times:'每周',
          times1:'周',
          times2:'1次'
        },
          staff:'test03',
          rate:'98.50%',
          effectiveTime:{
            time:'2022/6/21-2022/6/25',
            start:'2022/6/21',
            end:'2022/6/25',
          },
          completeionTime:'2022/6/25',
          state:'已完成',
        },
        {
          num: '8',
          name: '设备功能巡检08',
          type:{
          times:'每周',
          times1:'周',
          times2:'1次'
        },
          staff:'test03',
          rate:'100.00%',
          effectiveTime:{
            time:'2022/6/21-2022/6/25',
            start:'2022/6/21',
            end:'2022/6/25',
          },
          completeionTime:'2022/6/25',
          state:'已完成'
        },
        {
          num: '9',
          name: '安防巡更09',
          type:{
          times:'每天',
          times1:'天',
          times2:'1次'
        },
          staff:'test03',
          rate:'100.00%',
          effectiveTime:{
            time:'2022/6/24-2022/6/24',
            start:'2022/6/24',
            end:'2022/6/24',
          },
          completeionTime:'2022/6/24',
          state:'已完成',
        },
        {
          num: '10',
          name: '安防巡更10',
          type:{
          times:'每天',
          times1:'天',
          times2:'1次'
        },
          staff:'test03',
          rate:'100.00%',
          effectiveTime:{
            time:'2022/6/24-2022/6/24',
            start:'2022/6/24',
            end:'2022/6/24',
          },
          completeionTime:'2022/6/24',
          state:'已完成',
        }
      ],
    }
  },
  getters:{
    getAllTask(state){
      return state.patrol.task
    },
    getAllPlan(state){
      return state.patrol.plan
    },
  },
  mutations:{
    addPlan(state,data){
      state.patrol.plan.push(data)
    },
    delPlan(state,i){
      state.patrol.plan.splice(i,1)
    },
    delTask(state,i){
      state.patrol.task.splice(i,1)
    }
  },
  actions:{
    addNewPlan({commit},data){
      commit('addPlan',data)
    },
    delCurrentPlan({commit},i){
      commit('delPlan',i)
    },
    delCurrentTask({commit},i){
      commit('delTask',i)
    }
  },
  // 模块引入
  modules: {

  }
})