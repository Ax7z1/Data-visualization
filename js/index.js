// 柱状图模块1
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'))
    // 2.指定配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'  // 默认为直线，可选为 'line ' | 'shadow'
            }
        },
        // 修改图表的大小
        grid: {
            left: '0%',
            right: '0%',
            top: '10px',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['用料', '产量', '优品', '良品', '次品'],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签的相关样式
                axisLabel: {
                    color: "rgba(255,255,255,6)",
                    fontSize: "12"

                },
                //不显示x坐标轴的样式
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // y轴的线条改为了 2像素
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 10000
                    }
                },
                // y轴分隔线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }
        ],
        series: [
            {
                name: '数量',
                type: 'bar',
                barWidth: '35%',
                data: [200, 334, 390, 330, 220],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                }
            }
        ]
    };
    // 3. 把配置项和示例对象
    myChart.setOption(option);

    // 4. 让图标跟随屏幕自动的去适应
    window.addEventListener('resize', function(){
        myChart.resize();
    });
})();