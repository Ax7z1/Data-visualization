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
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 柱状图2（横向）
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 2. 指定配置和数据
    option = {
        // title: {
        //   text: 'World Population'
        // },
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'shadow'
        //   }
        // },
        // legend: {},
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
        //    containLabel: true
        },
        // 不显示X轴的相关信息
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            //把刻度标签里面的文字颜色设置为白色
            axisLabel: {
                color: "#fff"
            }
        },
        series: [
            {
                name: '条',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230],
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10
            },
            {
                name: '2012',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
})();