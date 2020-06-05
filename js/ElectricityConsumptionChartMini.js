countryStatsPromise.then(function (stats) {
    el_cons_total = stats.indicator_values['1260']
    el_cons_green_percent = stats.indicator_values['1210']
    el_cons_green = []
    for(i in el_cons_green_percent)
        el_cons_green.push(el_cons_total[i] * el_cons_green_percent[i] /100)


    var ctx = document.getElementById('el-consumption__chart-mini').getContext("2d");
    var thirdGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
    var fourthGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
    thirdGradientMini.addColorStop(0, 'rgba(252, 119, 48, 1)');
    thirdGradientMini.addColorStop(0.2, 'rgba(252, 119, 48, 0.3)');
    thirdGradientMini.addColorStop(0.4, 'rgba(252, 119, 48, 0.15)');
    fourthGradientMini.addColorStop(0, 'rgba(55, 204, 147, 1)');
    fourthGradientMini.addColorStop(0.2, 'rgba(55, 204, 147, 0.7)');
    fourthGradientMini.addColorStop(0.3, 'rgba(55, 204, 147, 0.4)');
    fourthGradientMini.addColorStop(0.4, 'rgba(55, 204, 147, 0.2)');
    var elConsumptionChartMini = new Chart(ctx, {
        type: 'line',
        data: {
            labels: stats.years,
            datasets: [
                {
                    label: '# of Votes',
                    data: el_cons_green,
                    backgroundColor: fourthGradientMini,
                    borderColor: [
                        'rgba(55, 204, 147, 1)',
                    ],
                    borderWidth: 5
                },
                {
                    label: '# of Votes',
                    data: el_cons_total,
                    backgroundColor: thirdGradientMini,
                    borderColor: [
                        'rgba(252, 119, 48, 1)',
                    ],
                    borderWidth: 5
                },
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                        color: 'rgba(255, 255, 255, 0.2)',
                        zeroLineColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                        fontSize: 8,
                        fontFamily: 'Lato',
                        fontColor: "#fff",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                        color: 'rgba(255, 255, 255, 0.2)',
                        zeroLineColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                        fontSize: 8,
                        fontFamily: 'Lato',
                        fontColor: "#fff",
                    }
                }]
            },
            maintainAspectRatio: false,
            elements: {
                point: {
                    radius: 0
                }
            },
            responsive: true,
            legend: {
                display: false,
            },
        }
    });
});