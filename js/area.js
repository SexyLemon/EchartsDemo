var myChart = echarts.init($('#main')[0]);
option = {
    backgroundColor:'#f5f5f5',
    title: {
        text: '工程进度监控图',
        subtext: '在建阶段工程项目数量',
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    dataRange: {
        min: 0,
        max: 1000,
        x: 'left',
        y: 'bottom',
        color: ['#f44336', '#fbc9c5'],
        text: ['高', '低'],           // 文本，默认为数值文本
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
            name: '项目数',
            type: 'map',
            mapType: 'china',
            roam: true,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#000'
                        }
                    },
                    borderColor: '#fff',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#e1e1e1'
                    }
                }
            },
            data: [
                {name: '北京', value: Math.round(Math.random() * 1000)},
                {name: '天津', value: Math.round(Math.random() * 1000)},
                {name: '上海', value: Math.round(Math.random() * 1000)},
                {name: '重庆', value: Math.round(Math.random() * 1000)},
                {name: '河北', value: Math.round(Math.random() * 1000)},
                {name: '河南', value: Math.round(Math.random() * 1000)},
                {name: '云南', value: Math.round(Math.random() * 1000)},
                {name: '辽宁', value: Math.round(Math.random() * 1000)},
                {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                {name: '湖南', value: Math.round(Math.random() * 1000)},
                {name: '安徽', value: Math.round(Math.random() * 1000)},
                {name: '山东', value: Math.round(Math.random() * 1000)},
                {name: '新疆', value: Math.round(Math.random() * 1000)},
                {name: '江苏', value: Math.round(Math.random() * 1000)},
                {name: '浙江', value: Math.round(Math.random() * 1000)},
                {name: '江西', value: Math.round(Math.random() * 1000)},
                {name: '湖北', value: Math.round(Math.random() * 1000)},
                {name: '广西', value: Math.round(Math.random() * 1000)},
                {name: '甘肃', value: Math.round(Math.random() * 1000)},
                {name: '山西', value: Math.round(Math.random() * 1000)},
                {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                {name: '陕西', value: Math.round(Math.random() * 1000)},
                {name: '吉林', value: Math.round(Math.random() * 1000)},
                {name: '福建', value: Math.round(Math.random() * 1000)},
                {name: '贵州', value: Math.round(Math.random() * 1000)},
                {name: '广东', value: Math.round(Math.random() * 1000)},
                {name: '青海', value: Math.round(Math.random() * 1000)},
                {name: '西藏', value: Math.round(Math.random() * 1000)},
                {name: '四川', value: Math.round(Math.random() * 1000)},
                {name: '宁夏', value: Math.round(Math.random() * 1000)},
                {name: '海南', value: Math.round(Math.random() * 1000)},
                {name: '台湾', value: Math.round(Math.random() * 1000)},
                {name: '香港', value: Math.round(Math.random() * 1000)},
                {name: '澳门', value: Math.round(Math.random() * 1000)}
            ]
        }
    ]
};
myChart.setOption(option);
window.onresize = myChart.resize;