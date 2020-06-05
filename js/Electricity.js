// Access to electricity
countryStatsPromise.then(function(stats) {
    electricity = last_no_zero(stats.indicator_values['1000'])
    $('#country_acces_to_electricity')
        .text(electricity[1].toFixed(1) + '%');

    $('#country_acces_to_electricity_year')
        .text(stats.years[electricity[0]]); 
    
    if (electricity[0]>0){
        prev_electricity = stats.indicator_values['1000'][electricity[0]-1];
        grow = ((electricity[1] / prev_electricity) - 1) * 100; 
    } else {
        grow = false;
    }
    update_grow(grow, '#country_acces_to_electricity_grow');
});

// Production
countryStatsPromise.then(function(stats) {
    electricity_prod = last_no_zero(stats.indicator_values['1070'])
    $('#electricity_prod')
        .text((electricity_prod[1]/1000).toFixed(1));

    $('#electricity_prod_year')
        .text(stats.years[electricity_prod[0]]); 
    
    if (electricity_prod[0]>0){
        prev_electricity_prod = stats.indicator_values['1070'][electricity_prod[0]-1];
        grow = ((electricity_prod[1] / prev_electricity_prod) - 1) * 100;
    } else {
        grow = false;
    }
    update_grow(grow, '#electricity_prod_grow');
});

// Consumption
countryStatsPromise.then(function(stats) {
    electricity_cons = last_no_zero(stats.indicator_values['1260'])
    $('#electricity_cons')
        .text((electricity_cons[1]).toFixed(1));

    $('#electricity_cons_year')
        .text(stats.years[electricity_cons[0]]); 
    
    if (electricity_cons[0]>0){
        prev_electricity_cons = stats.indicator_values['1260'][electricity_cons[0]-1];
        grow = ((electricity_cons[1] / prev_electricity_cons) - 1) * 100;
    } else {
        grow = false;
    }
    update_grow(grow, '#electricity_cons_grow');
});