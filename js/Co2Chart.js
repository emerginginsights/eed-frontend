countryStatsPromise.then(function (stats) {
    var ctx = document.getElementById('co2__chart').getContext("2d");
    var eighthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var ninethGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var gradient1350 = ctx.createLinearGradient(0, 0, 0, 400);
    eighthGradient.addColorStop(0, 'rgba(244, 213, 255, 0.37)');
    ninethGradient.addColorStop(0, '#F5D66B');
    gradient1350.addColorStop(0, '#37CC93');
    var co2Chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: stats.years,
            datasets: [
                {
                    label: '# of Votes',
                    data: stats.indicator_values['1290'],
                    backgroundColor: ninethGradient,
                    borderColor: [
                        'rgba(244, 213, 255, 1)',
                    ],
                    borderWidth: 2
                },
                {
                    label: '# of Votes',
                    data: stats.indicator_values['1320'],
                    backgroundColor: eighthGradient,
                    borderColor: [
                        'rgba(244, 213, 255, 1)',
                    ],
                    borderWidth: 5
                },
                {
                    label: '# of Votes',
                    data: stats.indicator_values['1350'],
                    backgroundColor: gradient1350,
                    borderColor: [
                        'rgba(244, 213, 255, 1)',
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
                        fontSize: 16,
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
                        fontSize: 16,
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