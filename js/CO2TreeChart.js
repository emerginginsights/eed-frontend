let co2sources =[
    { 
        "source": "Gaseous fuel",
        "indicator": '1290', 
        "color": "#2772FF"
    },
    { 
        "source": "Liquid fuel",
        "indicator": '1320', 
        "color": "#C28EFF"
    },
    { 
        "source": "Solid fuel",
        "indicator": '1350', 
        "color": "#37CC93"
    },
]

countryStatsPromise.then(function (stats) {
let ids = co2sources.map(s => s['indicator']);
let index = Math.max(...ids.map(id => (last_no_zero(stats.indicator_values[id]) || [null])[0]))
data_tree = co2sources.map(s => Object.assign({}, s, {'value': stats.indicator_values[s['indicator']][index]}));

chart_options = {
    type: "treemap",
    data: {
        datasets: [
            {
                tree: data_tree.filter(d => d['value'] > 0),
                key: "value",
                groups: ['source'],
                spacing: 5,
                borderWidth: 0,
                fontColor: "white",
                borderColor: "rgba(200,200,200,1)",
                hoverBackgroundColor: "rgba(220,230,220,0.5)",
                backgroundColor: function(ctx) {
                    let d = ctx.dataset.data[ctx.dataIndex]
                    if (!d) {
                        return;
                    }
                    return Color(d._data.children[0].color).rgbString();
                }
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                title: function (item, data) {
                    return data.datasets[item[0].datasetIndex].data[item[0].index].g;
                },
                label: function (item, data) {
                    var dataset = data.datasets[item.datasetIndex];
                    var dataItem = dataset.data[item.index];
                    return ' ' + dataItem.v.toFixed(2);
                }
            }
        }
    }
}

var ctx = document.getElementById("co2_treemap").getContext("2d");
var tm = new Chart(ctx, chart_options);

var ctx = document.getElementById("co2_treemap_mini").getContext("2d");
var tm = new Chart(ctx, chart_options);

});