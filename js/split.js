var myChart = echarts.init($('#main')[0]);
echarts.util.mapData.params.params.石家庄市 = {
    getGeoJson: function (callback) {
        $.getJSON('./json/shijiazhuang.json', function (data) {
            // 压缩后的地图数据必须使用 decode 函数转换
            callback(echarts.util.mapData.params.decode(data));
        });
    }
};
option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false}
        }
    },
    series: [
        {
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            name: '选择器',
            type: 'map',
            mapType: '河北',
            mapLocation: {
                x: '10%',
                width: '50%'
            },
            roam: false,
            selectedMode: 'single',
            itemStyle: {
                //normal:{label:{show:true}},
                emphasis: {label: {show: true}}
            },
            data: [
                {name: '石家庄市', selected: false},
                {name: '保定市', selected: false},
                {name: '张家口市', selected: false},
                {name: '承德市', selected: false},
                {name: '廊坊市', selected: false},
                {name: '唐山市', selected: false},
                {name: '秦皇岛市', selected: false},
                {name: '沧州市', selected: false},
                {name: '衡水市', selected: false},
                {name: '邢台市', selected: false},
                {name: '邯郸市', selected: false}
            ],
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    //color：线条颜色
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        label: {
                            show: true,
                            formatter: '{c}',
                            textStyle: {
                                align: 'center',
                                baseline:'bottom'
                            }
                        },
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            position:'right',
                            shadowBlur: 10
                        }
                    }
                },
                data:[
                    [{name:'河北省'},{name:'石家庄市'}],
                    [{name:'河北省'},{name:'唐山市'}],
                    [{name:'河北省'},{name:'秦皇岛市'}]
                ]
            },
            geoCoord: {
                '河北省': [112.80,41.00],
                '石家庄市': [114.48,38.03],
                '唐山市': [118.30,39.63],
                '秦皇岛市': [119.35,39.93],
                '邯郸市': [114.47,36.60],
                '邢台市': [114.48,37.30],
                '保定市': [115.48,39.05],
                '张家口市': [115.07,41.12],
                '承德市': [117.93,40.97],
                '沧州市': [116.83,38.33],
                '廊坊市': [116.50,38.83],
                '衡水市': [115.72,37.72],
                '石家庄市 ': [114.48,38.23],
                '唐山市 ': [118.30,39.93],
                '秦皇岛市 ': [119.35,40.23],
                '邯郸市 ': [114.77,36.60],
                '邢台市 ': [114.98,37.20],
                '保定市 ': [115.48,39.05],
                '张家口市 ': [114.87,41.02],
                '承德市 ': [117.93,41.27],
                '沧州市 ': [117.23,38.33],
                '廊坊市 ': [116.60,39.33],
                '衡水市 ': [115.72,37.92]
            }
        }
    ],
    animation: false
};
myChart.setOption(option);
window.onresize = myChart.resize;
var ecConfig = echarts.config;
myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param) {
    console.log(option);
    var selected = param.selected;
    var selectedProvince;
    var name;
    for (var i = 0, l = option.series[0].data.length; i < l; i++) {
        name = option.series[0].data[i].name;
        option.series[0].data[i].selected = selected[name];
        if (selected[name]) {
            selectedProvince = name;
        }
    }
    if (typeof selectedProvince == 'undefined') {
        option.series.splice(1);
        option.legend = null;
        option.dataRange = null;
        myChart.setOption(option, true);
        return;
    }
    option.series[1] = {
        name: '随机数据',
        type: 'map',
        mapType: selectedProvince,
        itemStyle: {
            normal: {
                label: {show: true},
                borderColor:'rgba(100,149,237,1)',
                borderWidth:0.5,
                areaStyle:{
                    color:'#f5f5f5'
                }
            },
            emphasis: {label: {show: true}}
        },
        mapLocation: {
            x: 'right',
            width: '40%'
        },
        roam: false,
        markLine : {
            smooth:true,
            effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                //color：线条颜色
                color: '#fff',
                shadowBlur: 10
            },
            itemStyle : {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}',
                        textStyle: {
                            align: 'center',
                            baseline:'bottom'
                        }
                    },
                    borderWidth:1,
                    lineStyle: {
                        type: 'solid',
                        position:'right',
                        shadowBlur: 10
                    }
                }
            },
            data:[
                [{name:'石家庄'},{name:'裕华区'}],
                [{name:'石家庄'},{name:'桥西区'}],
                [{name:'石家庄'},{name:'井陉矿区'}]
            ]
        },
        data: [],
        geoCoord: {
            '石家庄': [111.35,37.75],
            '裕华区': [114.53, 38.03],
            '桥西区': [114.46, 38.03],
            '井陉矿区': [114.06, 38.07],
            '新华区': [114.47, 38.07],
            '藁城区': [114.85, 38.03],
            '长安区': [114.55, 38.05],
            '鹿泉区': [114.32, 38.09],
            '栾城区': [114.65, 37.89],
            '行唐县': [114.55, 38.44],
            '井陉县': [114.14, 38.03],
            '正定县': [114.57, 38.15],
            '深泽县': [115.20, 38.18],
            '高邑县': [114.61, 37.61],
            '赞皇县': [114.39, 37.66],
            '灵寿县': [114.38, 38.31],
            '平山县': [114.18, 38.26],
            '无极县': [114.98, 38.18],
            '元氏县': [114.53, 37.76],
            '辛集市': [115.22, 37.93],
            '晋州市': [115.04, 38.03],
            '赵县': [114.78, 37.75],
            '新乐市': [114.69, 38.34]
        }
    };
    option.legend = {
        x: 'right',
        data: ['随机数据']
    };
    option.dataRange = {
        orient: 'horizontal',
        x: 'right',
        min: 0,
        max: 1000,
        color: ['orange', 'yellow'],
        text: ['高', '低'],           // 文本，默认为数值文本
        splitNumber: 0
    };
    myChart.setOption(option, true);
});
