countryStatsPromise.then(function(stats) {
    methan = last_no_zero(stats.indicator_values['1460'])
    $('#methan_emission')
        .text(methan[1].toFixed(1));

    $('#methan_emission_year')
        .text(stats.years[methan[0]]); 
    
    grow = stats.indicator_values['2160'][methan[0]];
    update_grow(grow, '#methan_emission_grow')
});

countryStatsPromise.then(function(stats) {
    greenhouse = last_no_zero(stats.indicator_values['1390'])
    $('#greenhouse_emission')
        .text(greenhouse[1].toFixed(1));

    $('#greenhouse_emission_year')
        .text(stats.years[greenhouse[0]]); 
    
    if (greenhouse[0] > 0) {
        prev_greenhouse = stats.indicator_values['1390'][greenhouse[0] - 1];
        grow = ((greenhouse[1] / prev_greenhouse) - 1) * 100;
    } else {
        grow = false;
    }
    update_grow(grow, '#greenhouse_emission_grow');
});

countryStatsPromise.then(function(stats) {
    co2 = last_no_zero(stats.indicator_values['1310'])
    $('#co2_emission')
        .text(co2[1].toFixed(1));

    $('#co2_emission_year')
        .text(stats.years[co2[0]]); 
    
    if (co2[0] > 0) {
        prev_co2 = stats.indicator_values['1310'][co2[0] - 1];
        grow = ((co2[1] / prev_co2) - 1) * 100;
    } else {
        grow = false;
    }
    update_grow(grow, '#co2_emission_grow');
});