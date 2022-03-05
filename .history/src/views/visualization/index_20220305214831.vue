<template>
  <div id="main" class="echarts"></div>
</template>

<script>

import * as echarts from 'echarts';
import 'echarts-gl';

export default {
    name:"visualization",
    data(){
        return{}
    },
    mounted(){
      // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById('main'));
      // // 绘制图表
      // myChart.setOption({
      //   title: {
      //     text: '柱状图 示例'
      //   },
      //   tooltip: {},
      //   xAxis: {
      //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       name: '销量',
      //       type: 'bar',
      //       data: [5, 20, 36, 10, 10, 20]
      //     }
      //   ]
      // });
      var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';


      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

option = {
  backgroundColor: '#000',
  globe: {
    baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
    heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
    displacementScale: 0.1,
    shading: 'lambert',
    environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
    light: {
      ambient: {
        intensity: 0.1
      },
      main: {
        intensity: 1.5
      }
    },
    layers: [
      {
        type: 'blend',
        blendTo: 'emission',
        texture: ROOT_PATH + '/data-gl/asset/night.jpg'
      },
      {
        type: 'overlay',
        texture: ROOT_PATH + '/data-gl/asset/clouds.png',
        shading: 'lambert',
        distance: 5
      }
    ]
  },
  series: []
};

option && myChart.setOption(option);

    }

}
</script>

<style>
.echarts{
  width: 100%;
  height: 600px;
}
</style>
