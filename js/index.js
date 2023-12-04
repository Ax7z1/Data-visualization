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
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

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
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['新站1期', '新站2期', '新站3期', '新站4期', '新站5期'],
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
                },
            },
            {
                type: 'category',
                inverse: true,
                data: ['778', '896', '640', '850', '660'],
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
                },
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [55, 33, 47, 69, 94],
                yAxisIndex: 0,
                yAxisIndex: 1,
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // 此时的color 可以修改柱子的颜色
                    color: function (params) {
                        //params 传进来的是柱子对象
                        //    console.log(params)
                        // dataIndex是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                // 柱子的宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: 'inside',
                    // {c} 会自动解析data里的数据
                    formatter: "{c}%"
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100]
            }
        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图标跟随屏幕自动的去适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 折线图1模块制作
(function (){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.line .chart'));
    // 2.指定配置
    option = {
        // 通过color修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: "#4c9bfd"
          },
          // 这个10% 必须加引号
          right: '10%'
            
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          show: true, // 显示边框
          borderColor: "#012f4a",
          containLabel: true // 包含刻度文字在内
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd' // 刻度标签颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd' //刻度标签颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
                color: "#012f4a"
            }
          }
        },
        series: [
          {
            name: '新增电池',
            type: 'line',
            smooth: true, // 折线是否平滑显示
            data: [120, 70, 101, 134, 90, 230, 210,123,345,233,345,234]
          },
          {
            name: '新增电芯',
            type: 'line',
            smooth: true, // 是否平滑显示
            data: [220, 45, 191, 234, 290, 330, 310,234,157,654,21,456]
          }
        ]
      };
    // 3.把配置给实例对象
    myChart.setOption(option);

    document.querySelect
})();