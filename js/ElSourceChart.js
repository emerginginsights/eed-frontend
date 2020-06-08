countryStatsPromise.then(function (stats) {
    var ctx = document.getElementById('el-source__chart').getContext("2d");

    els_datasets = elsources.map(function (s){
        gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, s['color'])
        return {
                    label: s['source'],
                    data: stats.indicator_values[s['indicator']],
                    backgroundColor: gradient,
                    borderColor: [
                        'rgba(244, 213, 255, 1)',
                    ],
                    borderWidth: 2
                } 
    });

    var sixthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var seventhGradient = ctx.createLinearGradient(0, 0, 0, 400);
    sixthGradient.addColorStop(0, 'rgba(244, 213, 255, 0.37)');
    seventhGradient.addColorStop(0, '#F5D66B');
    var elSourceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: stats.years,
            datasets: els_datasets,
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