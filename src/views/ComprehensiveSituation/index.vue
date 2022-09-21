<template>
  <div class="large">
    <!-- 背景图片设置 -->
    <div class="imageBack">
      <img src="../../assets/u1.svg" alt="">
    </div>
    <div class="common-layout">
       <el-container>
        <!-- 左侧echarts -->
        <div class="leftEchart">
          <!-- 左一 -->
          <div class="block text-center leftTop"  m="t-4">
            <el-carousel trigger="click" height="150px" arrow="never" class="zhi" indicator-position="outside">
              <el-carousel-item  >
              <h1 class="male">消防总览</h1>
              <div class="iconB">
                <div class="listFirst">
                  <div class="iconBox">
                    <el-icon color="white" size="30px" class="icon1">
                      <BellFilled />
                    </el-icon>
                  </div>
                  <span class="iconText">当日预警</span>
                  <span class="iconNum"><br>&nbsp; &nbsp;&nbsp;8</span>
                </div>
                <div class="listFirst">
                  <div class="iconBox">
                    <el-icon color="white" size="30px" class="icon1">
                      <WarnTriangleFilled />
                    </el-icon>
                  </div>
                  <span class="iconText">当日警情</span>
                  <span class="iconNum"><br>&nbsp; &nbsp;&nbsp;5</span>
                </div>
                <div class="listFirst">
                  <div class="iconBox">
                    <el-icon color="white" size="30px" class="icon1">
                      <Failed />
                    </el-icon>
                  </div>
                  <span class="iconText">当日故障</span>
                  <span class="iconNum"><br>&nbsp; &nbsp;&nbsp;3</span>
                </div>
                <div class="listFirst">
                  <div class="iconBox">
                    <el-icon color="white" size="30px" class="icon1">
                      <Link />
                    </el-icon>
                  </div>
                  <span class="iconText">当日离线</span>
                  <span class="iconNum"><br>&nbsp; &nbsp;&nbsp;3</span>
                </div>
              </div>
              </el-carousel-item>
              <el-carousel-item >
               <h1 class="bb">联网单位总览</h1>
               <div class="iconB2">
                  <div class="listSecond">
                     <span class="secondOne">120</span> 
                     <span class="secondTwo"><br> &nbsp;&nbsp;&nbsp;联网设备数</span>
                  </div>
                  <div class="listSecond">
                     <span class="secondOne">8</span> 
                     <span class="secondTwo"><br> &nbsp;&nbsp;&nbsp;联网单位数</span>
                  </div>
                  <div class="listSecond">
                     <span class="secondOne">3</span> 
                     <span class="secondTwo"><br> &nbsp;&nbsp;&nbsp;重点单位数</span>
                  </div>
                  <div class="listSecond">
                     <span class="secondOne">5</span> 
                     <span class="secondTwo"><br> &nbsp;&nbsp;&nbsp;单位场所数</span>
                  </div>
                  <div class="listSecond">
                     <span class="secondOne">2</span> 
                     <span class="secondTwo"><br> &nbsp;&nbsp;&nbsp;真实报警数</span>
                  </div>
                  <div class="listSecond">
                     <span class="secondOne">0</span> 
                     <span class="secondTwo"><br> &nbsp;&nbsp;&nbsp;真实火灾数</span>
                  </div>
               </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 左二 -->
          <div class="leftMiddle">
            <div class="block text-center">
              <el-carousel trigger="click" height="150px" arrow="never" class="zhi2" indicator-position="outside">
                <el-carousel-item>
                   <div id="leftE1" ref="leftE1">
                   </div>
                </el-carousel-item>
                <el-carousel-item>
                   <div id="leftE2" ref="leftE2">
                   </div>
                </el-carousel-item>
                <el-carousel-item>
                   <div id="leftE3" ref="leftE3">
                   </div>
                </el-carousel-item>
                <el-carousel-item>
                   <div id="leftE4" ref="leftE4">
                   </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!-- 左三 -->
          <div class="leftBottom">
            <div class="block text-center">
              <el-carousel trigger="click" height="150px" arrow="never" class="zhi3" indicator-position="outside">
                <el-carousel-item>
                   <div id="leftE5" ref="leftE5">
                   </div>
                </el-carousel-item>
                <el-carousel-item>
                   <div id="leftE6" ref="leftE6">
                   </div>
                </el-carousel-item>
                <el-carousel-item>
                   <div id="leftE7" ref="leftE7">
                   </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
         <!-- 右侧echars -->
        <div class="rightEchart">
          <div id="rightTop" ref="rightTop">
          </div>
          <div id="rightMiddle" ref="rightMiddle">
          </div>
          <div id="rightBottom" ref="rightBottom">
          </div>
        </div>
        <!-- 中上图标 -->
        <div class="middleTop">
          <div class="topBox1">
            <img src="../../assets/u103.svg" alt="">
            <img src="../../assets/u104.svg" alt="" class="topImg1">
            <span class="topText">450天</span>
            <span class="bottomText">运行保障</span>
          </div>
          <div class="topBox1">
            <img src="../../assets/u97.svg" alt="" >
            <span class="topText">7</span>
            <span class="bottomText">消防系统</span>
          </div>
        </div>
       </el-container>
    </div>

  </div>


</template>

<script>
  import * as echarts from 'echarts'
  export default{
    mounted(){
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~右1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // @ts-ignore
  let rightTop=echarts.init(this.$refs.rightTop);
  let r1 = {
    title: {
    text: '消防报警趋势',
    left: "center",
    top:10,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['告警', '火警', '故障',],
    top:30,
    textStyle:{
      color:'#f4f6f8',
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
      axisLabel:{
        color:'#f4f6f8'
      },
      axisLine:{
      lineStyle:{
        color:'#f4f6f8'
      }
    }
    }
  ],
  yAxis: [
    {
      show:true,
      type: 'value',
      axisLine:{
      show:true,
      lineStyle:{
        color:'#f4f6f8'
      }
      },
      axisTick: {show:false},
      splitLine:{show:false},  
    }
  ],
  series: [
    {
      name: '故障',
      type: 'line',
      stack: 'Total',
      lineStyle:{
        color:'#80f4f5'
      },
      areaStyle: {
                  normal: {
                      color: '#828d92'
                  },
      }, 
      emphasis: {
        focus: 'series'
      },
      data: [5, 8, 9, 10, 5, 7, 9]
    },
    {
      name: '火警',
      type: 'line',
      stack: 'Total',
      lineStyle:{
        color:'#d46162'
      },
      areaStyle: {
                  normal: {
                      color: '#82666d'
                  },
      }, 
      emphasis: {
        focus: 'series'
      },
      data: [2, 5, 3, 4, 1, 2, 3]
    },
    {
      name: '告警',
      type: 'line',
      stack: 'Total',
      lineStyle:{
        color:'#bd8e49'
      },
      areaStyle: {
                  normal: {
                      color: '#636871'
                  },
      }, 
      emphasis: {
        focus: 'series'
      },
      data: [3, 3, 6, 6, 4, 5, 6]
    }

  ]
};
    rightTop.setOption(r1)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~右一结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~右二开始~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // @ts-ignore
  let rightMiddle=echarts.init(this.$refs.rightMiddle);
  let r2 = {
  title: {
    text: '隐患整改趋势',
    left: "center",
    top:10,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['隐患数'],
    top:30,
    textStyle:{
      color:'#f4f6f8',
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
    axisLabel:{
        color:'#f4f6f8'
      },
      axisLine:{
      lineStyle:{
        color:'#f4f6f8'
      }
    }
    
  },
  yAxis: {
    show:true,
      type: 'value',
      axisLine:{
      show:true,
      lineStyle:{
        color:'#f4f6f8'
      }
      },
      axisTick: {show:false},
      splitLine:{show:false},
  },
  series: [
    {
      name: '隐患数',
      type: 'line',
      stack: 'Total',
      lineStyle:{
        color:'#0bd3de'
      },
      data: [3, 3, 6, 6, 4, 5, 6]
    },

  ]
};
 rightMiddle.setOption(r2)
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~右二结束~~~~~~~~~~~~~~~~~~~~~~~~
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~右三开始~~~~~~~~~~~~~~~~~~~~~~~~
  // @ts-ignore
 let rightBottom=echarts.init(this.$refs.rightBottom);
 let r3= {
  title: {
    text: '工单趋势/及格率',
    left: "center",
    top:10,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  legend: {
    data: ['Evaporation', 'Precipitation', 'Temperature']
  },
  xAxis: [
    {
      type: 'category',
      data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
      axisPointer: {
        type: 'shadow'
      },
      axisLabel:{
        color:'#f4f6f8'
      },
      axisLine:{
      lineStyle:{
        color:'#f4f6f8'
      }
    }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '(次)',
      interval: 50,
      axisLine:{
      show:true,
      lineStyle:{
        color:'#f4f6f8'
      }
      },
      axisTick: {show:false},
      splitLine:{show:false},
      
    },
    {
      type: 'value',
      name: '(%)',
      min: 0,
      interval: 25,
      axisLine:{
      show:true,
      lineStyle:{
        color:'#f4f6f8'
      }
      },
      axisTick: {show:false},
      splitLine:{show:false},
    }
  ],
  series: [
    {
      name: '工单数',
      type: 'bar',
      itemStyle:{
         color:'#17eecb'
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' 单';
        }
      },
      data: [
        16, 20, 26, 18, 10, 12, 20, 16
      ]
    },

    {
      name: '及时率',
      type: 'line',
      yAxisIndex: 1,
      lineStyle:{
        color:'#8be20f'
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [72, 78, 88, 74, 60, 62, 80, ]
    }
  ]
};
 rightBottom.setOption(r3)
 //~~~~~~~~~~~~~~~~~~~~~~~~左一~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // @ts-ignore 注释ts错误
 let leftE1=echarts.init(this.$refs.leftE1);
 let L1 = {
    title: {
    text: '设备总状态',
    left: 'center',
    top:5,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show:true,
        position: 'center',
      },
      emphasis: {
        label: {
          fontSize: '20',
          fontWeight: 'bold',
        }
      },
      data: [
        { value: 440, name: '正常',itemStyle:{color:'#17eecb'} },
        { value: 50, name: '报警', itemStyle:{color:'#e96c5b'} },
        { value: 20, name: '离线',itemStyle:{color:'#f6c022'} },

      ]
    }
  ]
};
leftE1.setOption(L1)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左一结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左二开始~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 // @ts-ignore
let leftE2=echarts.init(this.$refs.leftE2);
 let L2 = {
    title: {
    text: '智慧安全用电系统',
    left: 'center',
    top:5,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show:true,
        position: 'center',
      },
      emphasis: {
        label: {
          fontSize: '20',
          fontWeight: 'bold',
        }
      },
      data: [
        { value: 70, name: '正常',itemStyle:{color:'#17eecb'} },
        { value: 15, name: '报警', itemStyle:{color:'#e96c5b'} },
        { value: 15, name: '离线',itemStyle:{color:'#f6c022'} },

      ]
    }
  ]
};
leftE2.setOption(L2)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~左二结束~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~左三开始~~~~~~~~~~~~~~~~~~
  // @ts-ignore
let leftE3=echarts.init(this.$refs.leftE3);
 let L3 = {
    title: {
    text: '火灾自动报警系统',
    left: 'center',
    top:5,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show:true,
        position: 'center',
      },
      emphasis: {
        label: {
          fontSize: '20',
          fontWeight: 'bold',
        }
      },
      data: [
        { value: 150, name: '正常',itemStyle:{color:'#17eecb'} },
        { value: 30, name: '报警', itemStyle:{color:'#e96c5b'} },
        { value: 20, name: '离线',itemStyle:{color:'#f6c022'} },

      ]
    }
  ]
};
leftE3.setOption(L3)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左三结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左四开始~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // @ts-ignore
let leftE4=echarts.init(this.$refs.leftE4);
 let L4 = {
    title: {
    text: '消防水检测系统',
    left: 'center',
    top:5,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show:true,
        position: 'center',
      },
      emphasis: {
        label: {
          fontSize: '20',
          fontWeight: 'bold',
        }
      },
      data: [
        { value: 10, name: '正常',itemStyle:{color:'#17eecb'} },
        { value: 2, name: '报警', itemStyle:{color:'#e96c5b'} },
        { value: 1, name: '离线',itemStyle:{color:'#f6c022'} },

      ]
    }
  ]
};
leftE4.setOption(L4)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左四结束~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左五开始~~~~~~~~~~~~~~~~~~~~~~~
  // @ts-ignore
let leftE5=echarts.init(this.$refs.leftE5);
let L5 = {
    title: {
    text: '部门/单位报警排名',
    left: 'center',
    top:5,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['一楼', '二楼', '三楼', '四楼', '五楼'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{
        color:'#f4f6f8'
      },
      axisLine:{
      lineStyle:{
        color:'#f4f6f8'
      }
    }
    }
  ],
  yAxis: [
    {
      type: 'value',
          axisLine:{
      show:true,
      lineStyle:{
        color:'#f4f6f8'
      }
      },
      axisTick: {show:false},
      splitLine:{show:false},
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [6, 8, 21, 30, 45]
    }
  ]
};
leftE5.setOption(L5)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左五结束~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左六开始~~~~~~~~~~~~~~~~~~~~~~~
  // @ts-ignore
let leftE6=echarts.init(this.$refs.leftE6);
let L6 = {
    title: {
    text: '设备报警排名',
    left: 'center',
    top:5,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['A01烟感', 'B02水压', 'C06用电', 'D08液位', 'M10视频'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{
        color:'#f4f6f8'
      },
      axisLine:{
      lineStyle:{
        color:'#f4f6f8'
      }
    }
    }
  ],
  yAxis: [
    {
      type: 'value',
          axisLine:{
      show:true,
      lineStyle:{
        color:'#f4f6f8'
      }
      },
      axisTick: {show:false},
      splitLine:{show:false},
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [80, 50, 30, 20, 10]
    }
  ]
};
leftE6.setOption(L6)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左六结束~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左七开始~~~~~~~~~~~~~~~~~~~~~~~
  // @ts-ignore
let leftE7=echarts.init(this.$refs.leftE7);
let L7 = {
    title: {
    text: '报警高发时段排名',
    left: 'center',
    top:5,
    textStyle: {
      fontSize: 12,
      color:'#f4f6f8',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['6~8时', '10~12时', '16~18时', '18~20时', '2~4时'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{
        color:'#f4f6f8'
      },
      axisLine:{
      lineStyle:{
        color:'#f4f6f8'
      }
    }
    }
  ],
  yAxis: [
    {
      type: 'value',
          axisLine:{
      show:true,
      lineStyle:{
        color:'#f4f6f8'
      }
      },
      axisTick: {show:false},
      splitLine:{show:false},
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [62, 43, 41, 30, 31]
    }
  ]
};
leftE7.setOption(L7)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~左七结束~~~~~~~~~~~~~~~~~~~~~~~
}
}
</script>

<style scoped>

  .large{
    width: 100%;
    min-height:700px;
    background-color: #082c61;
    background-image: url(../../assets/u0.png);
    background-repeat: no-repeat;
    background-position-x:center;
    background-position-y:center;
    background-size: 60% 57%;
    position: relative;
  }
  .imageBack{
    margin-left: 20%;
    margin-right: 20%;
    height: 100%;
    width: 60%;
    position: relative;
  }
  .imageBack img{
    margin-top: 10%;
    width: 100%;
    height: 100%;
    /* position: absolute;
    left: 200px; */
  }
  /* 走马灯设置 */
  .demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item:nth-child(2n) {
  background-color: #294776
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #294776
}
/* 右方echarts大容器设置 */
.rightEchart{
  position: absolute;
  right: 15px;
  top: 15px;
}
/*右侧上方echarts容器*/
#rightTop{
  width: 350px;
  height: 200px;
  background-color: #294776 ;
  border: 1px solid #1475eb;

}
/*右侧中部echarts容器*/
#rightMiddle{
  margin-top:15px;
  width: 350px;
  height: 200px;
  background-color: #294776 ;
  border: 1px solid #1475eb;
}
/*右侧下方echarts容器*/
#rightBottom{
  margin-top:15px;
  width: 350px;
  height: 200px;
  background-color: #294776 ;
  border: 1px solid #1475eb;
}
/*页面中上两个图标容器*/
.middleTop{
  position: absolute;
  width: 30%;
  left: 35%;
  right: 35%;
  top: 5%;
  width: 500px;
  height: 300px;

  display: flex;
  justify-content: space-between;
}
.middleTop span{
  color:white;
}

.topBox1{
  position: relative;

  width: 120px;
  height: 100px;
}

.topImg1{
  position: absolute;
  left:8px;
  top:14px;
}
.topText{
  position: absolute;
  top: 5px;
  left:70px;
}
.bottomText{
  position: absolute;
  top: 40px ;
  left: 70px;
  font-size: 12px;
}
/*左侧echarts大容器设置*/
.leftEchart{
  position: absolute;
  left: 15px;
  top: 15px;
}
/*左侧上方echarts容器设置*/
.leftTop{
  width:350px;
  height: 200px;
  background-color: #294776;
  border: 1px solid #1475eb;
 
}
.iconBox{
  width: 50px;
  height: 50px;
  border: 2px solid  #32c0d8;
  border-radius: 25px;
  margin-bottom: 10px;

}
.icon1{
  position: relative;
  left: 10px;
  top: 10px;
}
.iconText{
  font-size: 12px;
  color: white;

}
.iconNum{
  color: #32c0d8;

}
.iconB{
  display: flex;
  justify-content: space-around;
}
.male{
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.listSecond{
  width: 80px;
  height: 36px;
  border: 2px solid #32c0d8;
  border-radius: 6px;
  margin-left: 15px;
  margin-right: 15px ;
  margin-top: 5px;
  margin-bottom: 5px;
}
.iconB2{
  display: flex;
  flex-wrap: wrap;
}
.secondOne{
  color: #32c0d8;
  display: inline-block;
  width: 100%;
  text-align: center;
}
.secondTwo{
  font-size: 12px;
  color: white;
}
.bb{
  font-size:14px;
  color: white;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
}
/*左侧中部echarts容器设置*/
.leftMiddle{
  width:350px;
  height: 200px;
  background-color: #294776;
  margin-top:15px;
  border: 1px solid #1475eb;
}
/*左侧下方echarts容器设置*/
.leftBottom{
  width:350px;
  height: 200px;
  background-color: #294776;
  margin-top:15px;
  border: 1px solid #1475eb;
}
#leftE1{
  width:350px;
  height: 170px;
}
#leftE2{
  width:350px;
  height: 170px;
}
#leftE3{
  width:350px;
  height: 170px;
}
#leftE4{
  width:350px;
  height: 170px;
}
#leftE5{
  width:350px;
  height: 150px;
}
#leftE6{
  width:350px;
  height: 150px;
}
#leftE7{
  width:350px;
  height: 150px;
}
.strut{
  width: 100%;
  height: 100%;
}
</style>