# Data-visualization
ECharts使用五部曲

- 步骤1：下载并引入echarts.js文件 —>图表依赖这个js库
- 步骤2：准备一个具备大小的DOM容器（必须有宽度和高度）—>生成的图表会放入这个容器内
- 步骤3：初始化echarts实例对象—>实例化echarts对象
- 步骤4：指定配置项和数据（option）—>根据具体需求修改配置选项
- 步骤5：将配置项设置给echarts实例对象—>让echarts对象根据修改好的配置生效

Echarts - 基础配置

知道以下配置每个模块的主要作用干什么的就可以了。

需要了解的主要配置： series xAxis yAxis grid tooltip title legend color

- series
  - 系列列表。每个系列通过type决定自己的图表类型
  - 大白话：图表数据，指定什么类型的图表，可以多个图表重叠。
- xAxis：直接坐标系 grid 中的x轴
  - boundaryGap：坐标轴两边留白策略 true， 这时候刻度只是作为分隔线

![echarts](https://github.com/Ax7z1/Data-visualization/assets/88520528/8db30a28-686a-49cc-a8d0-c53e6668c503)








    //采用立即执行函数，防止变量污染，减少命名冲突
    ```
    (function() {
        var myChart = 
    })();
    (function() {
        var myChart = 
    })();
    ```


