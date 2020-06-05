countryStatsPromise.then(function(stats) {
    population = last_no_zero(stats.indicator_values['2170'])
    $('#country_population')
        .text((population[1] / 1000000).toFixed(1));

    $('#country_population_year')
        .text(stats.years[population[0]]); 
    
    grow = stats.indicator_values['2160'][population[0]];
    update_grow(grow, '#country_population_grow');
});