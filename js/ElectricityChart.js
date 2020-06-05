countryStatsPromise.then(function (stats) {
    rural = stats.indicator_values['1020']
    urban = stats.indicator_values['1030']

    var ctx = document.getElementById('electricity__chart').getContext("2d");
    var firstGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var secondGradient = ctx.createLinearGradient(0, 0, 0, 400);
    firstGradient.addColorStop(0, '#76EFFF');
    secondGradient.addColorStop(0, '#2772FF');
    var electricityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: stats.years,
            datasets: [
                {
                    label: '# of Votes',
                    data: rural,
                    backgroundColor: firstGradient,
                    borderColor: [
                        '#8888EA',
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of Votes',
                    data: urban,
                    backgroundColor: secondGradient,
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