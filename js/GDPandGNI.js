countryStatsPromise.then(function(stats) {
    gdp = last_no_zero(stats.indicator_values['1610'])
    $('#gdp')
        .text((gdp[1]/1000000).toFixed(1));

    $('#gdp_year')
        .text(stats.years[gdp[0]]); 
    
    if (gdp[0]>0){
        prev_gdp = stats.indicator_values['1610'][gdp[0]-1];
        grow = ((gdp[1] / prev_gdp) - 1) * 100;
    } else {
        grow = false;
    }
    update_grow(grow, '#gdp_grow');
});

countryStatsPromise.then(function(stats) {
    gni = last_no_zero(stats.indicator_values['1590'])
    $('#gni')
        .text(gni[1].toLocaleString());

    $('#gni_year')
        .text(stats.years[gni[0]]); 
    
    if (gni[0]>0){
        prev_gni = stats.indicator_values['1590'][gni[0]-1];
        grow = ((gni[1] / prev_gni) - 1) * 100;
    } else {
        grow = false;
    }
    update_grow(grow, '#gni_grow');
});