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


      myChart.setOption({
        backgroundColor: '#000',
        globe: {
          baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
          heightTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
          displacementScale: 0.04,
          shading: 'realistic',
          environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambientCubemap: {
              texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
              diffuseIntensity: 0.2
            }
          }
        }
      });

    }

}
</script>

<style>
.echarts{
  width: 100%;
  height: 600px;
}
</style>
