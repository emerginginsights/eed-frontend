countryStatsPromise.then(function (stats) {

    var ctx = document.getElementById('GDP-and-GNI__chart-mini').getContext("2d");
    var tenthGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
    var eleventhGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
    tenthGradientMini.addColorStop(0, '#37CC93');
    eleventhGradientMini.addColorStop(0, '#2772FF');
    var gpdAndGniChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stats.years,
            datasets: [
                {
                    barPercentage: 0.9,
                    categoryPercentage: 0.4,
                    data: stats.indicator_values['1610'].map(v => v / 1000000),
                    backgroundColor: eleventhGradientMini,
                    borderWidth: 1
                },
                {
                    barPercentage: 0.9,
                    categoryPercentage: 0.4,
                    data: stats.indicator_values['1590'],
                    backgroundColor: tenthGradientMini,
                    borderWidth: 1
                },
            ]
        },
        options: {
            cornerRadius: 20,
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
                        beginAtZero: true,
                    }
                }],
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
