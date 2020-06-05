countryStatsPromise.then(function (stats) {
    var ctx = document.getElementById('demography__chart').getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#8888EA');
    gradient.addColorStop(0.3, 'rgba(66, 118, 196, 0.15)');
    gradient.addColorStop(0.5, 'rgba(66, 118, 196, 0.05)');
    gradient.addColorStop(0.7, 'rgba(66, 118, 196, 0)');
    var demographyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: stats.years, //['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
            datasets: [{
                label: '# of Votes',
                data: stats.indicator_values['2170'].map(v=>v/1000000), //[0, 3, 4, 3.8, 4.6, 5.2, 6, 6.2, 6.8,],
                backgroundColor: gradient,
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