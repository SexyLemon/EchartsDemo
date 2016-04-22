var myChart = echarts.init($('#main')[0]);
var option1 = {
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
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [{
        name: '河北',
        type: 'map',
        //是否可以拖拽，放大缩小。均可以true|均不可以false|仅放大缩小scale|仅拖动move
        roam: 'true',
        hoverable: false,
        //背景地图类型
        mapType: '河北',
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
            data: [
                { name: '裕华区', value: 10, geoCoord: [114.53, 38.03] },
                { name: '桥西区', value: 10, geoCoord: [114.46, 38.03] },
                { name: '井陉矿区', value: 10, geoCoord: [114.06, 38.07] },
                { name: '新华区', value: 10, geoCoord: [114.47, 38.07] },
                { name: '藁城区', value: 10, geoCoord: [114.85, 38.03] },
                { name: '长安区', value: 10, geoCoord: [114.55, 38.05] },
                { name: '鹿泉区', value: 10, geoCoord: [114.32, 38.09] },
                { name: '栾城区', value: 10, geoCoord: [114.65, 37.89] },
                { name: '行唐县', value: 10, geoCoord: [114.55, 38.44] },
                { name: '井陉县', value: 10, geoCoord: [114.14, 38.03] },
                { name: '正定县', value: 10, geoCoord: [114.57, 38.15] },
                { name: '深泽县', value: 10, geoCoord: [115.20, 38.18] },
                { name: '高邑县', value: 10, geoCoord: [114.61, 37.61] },
                { name: '赞皇县', value: 10, geoCoord: [114.39, 37.66] },
                { name: '灵寿县', value: 10, geoCoord: [114.38, 38.31] },
                { name: '平山县', value: 10, geoCoord: [114.18, 38.26] },
                { name: '无极县', value: 10, geoCoord: [114.98, 38.18] },
                { name: '元氏县', value: 10, geoCoord: [114.53, 37.76] },
                { name: '辛集市', value: 10, geoCoord: [115.22, 37.93] },
                { name: '晋州市', value: 10, geoCoord: [115.04, 38.03] },
                // { name: '赵县', value: 10, geoCoord: [114.78, 37.75] },
                { name: '新乐市', value: 10, geoCoord: [114.69, 38.34] }
            ]
        },
        data: [
            { name: '石家庄市', value: 1 },
            { name: '唐山市', value: 2 },
            { name: '张家口市', value: 3 },
            { name: '廊坊市', value: 4 },
            { name: '衡水市', value: 5 },
            { name: '邯郸市', value: 6 },
            { name: '承德市', value: 7 },
            { name: '沧州市', value: 8 },
            { name: '秦皇岛市', value: 9 },
            { name: '邢台市', value: 0 },
            { name: '保定市', value: 10 }
        ]
    }, {
        name: '河北',
        type: 'map',
        //是否可以拖拽，放大缩小。均可以true|均不可以false|仅放大缩小scale|仅拖动move
        roam: 'true',
        hoverable: false,
        //背景地图类型
        mapType: '河北',
        markPoint: {
            symbolSize: 5,
            large: true,
            itemStyle: {
                normal: {
                    color: '#000',
                    label: {
                        show: true
                    }
                }
            },
            data: [
                { name: '赵县', value: 10, geoCoord: [114.78, 37.75] }
            ]
        },
        data: []
    }]
};
myChart.setOption(option1);
window.onresize = myChart.resize;
