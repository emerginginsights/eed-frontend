countryStatsPromise.then(function (stats) {
    rural = stats.indicator_values['1020']
    urban = stats.indicator_values['1030']
    var ctx = document.getElementById('electricity__chart-mini').getContext("2d");
    var firstGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
    var secondGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
    firstGradientMini.addColorStop(0, '#76EFFF');
    secondGradientMini.addColorStop(0, '#2772FF');
    var electricityChartMini = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
            datasets: [
                {
                    label: '# of Votes',
                    data: urban,
                    backgroundColor: firstGradientMini,
                    borderColor: [
                        '#8888EA',
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of Votes',
                    data: rural,
                    backgroundColor: secondGradientMini,
                    borderColor: [
                        '#8888EA',
                    ],
                    borderWidth: 1
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