countryStatsPromise.then(function (stats) {
    rural = last_no_zero(stats.indicator_values['2240'])
    year = stats.years[rural[0]]
    urban = stats.indicator_values['2270'][rural[0]]

    $('#ruraltourban_year').text(year)

    var ctx = document.getElementById('rural-to-urban__chart').getContext("2d");
    var ruralToUrbanChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['', ''],
            datasets: [{
                data: [Math.round(rural[1]*10)/10, Math.round(urban*10)/10],
                borderWidth: 0,
                backgroundColor: ['#F5D66B', 'rgba(252, 119, 48, 1)']
            }],

        },
        options: {
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return ' ' + data.datasets[0].data[tooltipItem.index] + '%';
                    }
                }
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
            rotation: -1 * Math.PI,
            cutoutPercentage: 37.5,
        }
    });


    // let stat3 = ruralToUrbanChart.config.data.datasets[0].data[0];
    // let stat4 = ruralToUrbanChart.config.data.datasets[0].data[1]

    // let legendValue3 = document.getElementById('stat-item-3');
    // console.log(legendValue3);
    // legendValue3.innerHTML = `${stat3}%`;
    // let legendValue4 = document.getElementById('stat-item-4');
    // legendValue4.innerHTML = `${stat4}%`;
});