countryStatsPromise.then(function (stats) {
    var ctx = document.getElementById('gaz-emmisions__chart').getContext("2d");
    var fifthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    fifthGradient.addColorStop(0, '#8888EA');
    fifthGradient.addColorStop(0.3, 'rgba(66, 118, 196, 0.15)');
    fifthGradient.addColorStop(0.5, 'rgba(66, 118, 196, 0.05)');
    fifthGradient.addColorStop(0.7, 'rgba(66, 118, 196, 0)');
    var gazEmmisionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: stats.years,
            datasets: [{
                label: '# of Votes',
                data: stats.indicator_values['1390'],
                backgroundColor: fifthGradient,
                borderColor: [
                    '#8888EA',

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