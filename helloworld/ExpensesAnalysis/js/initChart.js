function financeBarDays(title, id, data, rotate) {
    var chartDiv = $('#' + id);
    var barOption = financeBarDaysOption(title, data);
    if (rotate) {
        barOption.xAxis[0].axisLabel.rotate = rotate;
    }
    echarts.init(chartDiv[0], cus_style).setOption(barOption);
}

function financePie(title, id, data, subtext, unit) {
    var chartDiv = $('#' + id);
    var barOption = financePieOption(title, data, subtext, unit);
    echarts.init(chartDiv[0], cus_style).setOption(barOption);
}

function financeWord(id, data) {
    $('#' + id).jQCloud(data);
}


/***********************************初始化**********************************/

financeBarDays('武汉出差(2015-02-12)', 'chart_1', financeBarDays_data1);

financeBarDays('武汉出差(2015-03-25)', 'chart_2', financeBarDays_data2);

financeBarDays('贵州出差(2015-07-15)', 'chart_3', financeBarDays_data3);

financeBarDays('团队建设(2015-08-19)', 'chart_4', financeBarDays_data4);

financeBarDays('北京出差(2015-08-24)', 'chart_5', financeBarDays_data5);

financeBarDays('团队建设(2015-08-25)', 'chart_6', financeBarDays_data6);

financeBarDays('出差北京(2015-11-03)', 'chart_7', financeBarDays_data7, 20);

financeBarDays('项目活动(2015-11-09)', 'chart_8', financeBarDays_data8);

financeBarDays('北京出差(2015-12-17)', 'chart_9', financeBarDays_data9);

financeBarDays('项目购书(2016-01-04)', 'chart_10', financeBarDays_data10);

financeBarDays('北京出差(2016-02-26)', 'chart_11', financeBarDays_data11);

financePie('平均耗时占比', 'chart_12', financePie_data1, '平均数', '天');

financePie('打回分布图', 'chart_13', financePie_data2, '', '次');

financeWord('chart_14', word_array);