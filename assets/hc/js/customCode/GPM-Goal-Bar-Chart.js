Highcharts.chart('gpm-goal', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'GPM Goal Attainment By Client'
    },
    subtitle: {
        text: '$4.7M'
    },
    xAxis: {
        categories: [
            'Client 1',
            'Client 2',
            'Client 3'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Client 1',
        data: [2400000 ,848400 ]

    }, {
        name: 'Client 2',
        data: [1650000,227600]

    }, {
        name: 'Client 3',
        data: [900000, 267600]

    }]
});
