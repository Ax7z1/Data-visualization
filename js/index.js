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
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

// 折线图1模块制作
(function () {

    var yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];

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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                data: yearData[0].data[0]
            },
            {
                name: '新增电芯',
                type: 'line',
                smooth: true, // 是否平滑显示
                data: yearData[0].data[1]
            }
        ]
    };
    // 3.把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });

    // 5. 点击切换效果
    $(".line h2").on('click', 'a', function () {
        //alert(1);
        //console.log($(this).index());
        // 点击 a 之后，根据当前a的索引号 找到对应的yearData的相关对象
        //console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        myChart.setOption(option);
    });

})();

// 折线图2 模块制作
(function () {
    var myChart = echarts.init(document.querySelector('.line2 .chart'))
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "0%",
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: '10',
            top: '30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                // 文本颜色为rgba(255,255,255,.6) 文字大小为 12
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // x轴线的颜色为 rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTice: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                smooth: true,
                // 单独修改当前线条的样式
                lineStyle: {
                    color: "#0184d5",
                    width: "2"
                },
                // 填充颜色设置
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(0,0,0,1,
                        [
                            {offset: 0,color: "rgba(1, 132, 213, 0.4)"},
                            { offset: 0.8,color: "rgba(1, 132, 213, 0.1)"}
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点
                symbol: "circle",
                symbolSize: 7,  // 拐点大小
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221,220,107,.1)",
                    borderWidth: 10
                },
                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
            },
            {
                name: 'Union Ads',
                type: 'line',
                smooth: true,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [{
                                offset: 0, color: "rgba(0, 216, 135, 0.4)"
                            },
                            { offset: 0.8, color: "rgba(0, 216, 135, 0.1)" }
                            ],
                            false),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function(){
        myChart.resize();
    })
})();

//饼状图 