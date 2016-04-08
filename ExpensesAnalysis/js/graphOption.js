var financeBarDaysOption = function (title, jsonData) {
    var dataTemp1 = jsonData.data;
    var dataTemp2 = jsonData.data.concat();
    var sum = dataTemp2[0];
    dataTemp2[0] = 0;
    for (var i = 1; i < dataTemp2.length; i++) {
        sum = sum - dataTemp2[i];
        dataTemp2[i] = sum;
    }

    return {
        title: {
            text: title,
            subtext: '（单位:天）'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        xAxis: [
            {
                type: 'category',
                axisLabel: {
                    //坐标始终显示
                    interval: 0,
                    rotate: 0
                },
                splitLine: {show: false},
                data: jsonData.xAxis
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0
            }
        ],
        series: [
            {
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: dataTemp2
            },
            {
                name: '天数',
                type: 'bar',
                stack: '总量',
                itemStyle: {normal: {label: {show: true, position: 'inside'}}},
                data: dataTemp1
            }
        ]
    };
};


var financePieOption = function (title, jsonData, subtext, unit) {
    return {
        title: {
            text: title,
            subtext: subtext,
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{c}" + unit + "({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: jsonData.legend
        },
        calculable: true,
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: jsonData.data
            }
        ]
    }
}