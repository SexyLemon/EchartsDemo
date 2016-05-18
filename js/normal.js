var myChart = echarts.init($('#main')[0]);
var option = {
    backgroundColor: '#eee',
    color: [
        'rgba(255, 255, 255, 1)',
        'rgba(14, 241, 242, 1)',
        'rgba(37, 140, 249, 1)'
    ],
    title: {
        text: '大规模MarkPoint特效',
        subtext: '纯属虚构',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['中', '弱'],
        textStyle: {
            color: '#fff'
        }
    },
    dataRange: {
        min: 0,
        max: 10,
        color: ['#4EA4A9', '#65AF3F'],
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '中国',
            type: 'map',
            //是否可以拖拽，放大缩小。均可以true|均不可以false|仅放大缩小scale|仅拖动move
            roam: 'true',
            hoverable: false,
            //背景地图类型
            mapType: 'china',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#000'
                        }
                    },
                    borderColor: '#fff',
                    borderWidth: 1.5,
                    areaStyle: {
                        color: '#4CAF50'
                    }
                }
            },
            markPoint: {
                symbolSize: 5,
                large: true,
                itemStyle: {
                    normal: {
                        color: '#CEFFE1',
                        label: {
                            show: true
                        }
                    }
                },
                data: [{}]
            },
            data: [
                {name: '石家庄市', value: 1},
                {name: '唐山市', value: 2},
                {name: '张家口市', value: 3},
                {name: '廊坊市', value: 4},
                {name: '衡水市', value: 5},
                {name: '邯郸市', value: 6},
                {name: '承德市', value: 7},
                {name: '沧州市', value: 8},
                {name: '秦皇岛市', value: 9},
                {name: '邢台市', value: 0},
                {name: '保定市', value: 10}
            ]
        }]
};
myChart.setOption(option);
window.onresize = myChart.resize;
