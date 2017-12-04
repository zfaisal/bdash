Highcharts.chart('total-Billings', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        //marginTop: -50,
        style:
        {
          background: 'red'
        }
        //,marginBottom: -80
    },
    title: {
        text: '',
        style:
        {
          display: 'none',
          height: 0
        }
    },
    tooltip: {
        pointFormat: '<div class="pie-tooltip">{series.name}: <b>{point.percentage}%</b></div>',
      //  shared: true,
       useHTML: true
       ,style:
       {
         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
       },
       enabled: false
       //,color: 'green'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white',
                    fontSize: 50,
                    color: 'whtie'
                }
                ,format: '<b>{point.name}</b>: {point.percentage:.1f} %'

            },
            startAngle: -90,
            endAngle: -90,
            center: ['50%', '40%'],
            size:300
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Unbilled',   3286800.00],
            ['Billed Unpaid',      4081500.00],
            ['Billed & Paid', 4807000.00]
        ]
    }]
    , credits:
    {
      enabled: false
    }
});


$('.highcharts-root').css({
  height: '150px'
})

//
// $('.pie-tooltip').css({
//   background: 'green'
// })
