countryStatsPromise.then(function(stats) {
    easy_busines = last_no_zero(stats.indicator_values['1570'])
    if (!easy_busines){
        $('#easy_busines').text('--');
        return;
    }

    $('#easy_busines')
        .text((easy_busines[1]));

    $('#easy_busines_year')
        .text(stats.years[easy_busines[0]]); 
    
    $('#easy_busines_grow').text('')
    // if (easy_busines[0]>0){
    //     prev_easy_busines = stats.indicator_values['1570'][easy_busines[0]-1];
    //     grow = ((easy_busines[1] / prev_easy_busines) - 1) * 100;
    // } else {
    //     grow = false;
    // }
    // update_grow(grow, '#easy_busines_grow');
});

countryStatsPromise.then(function(stats) {
    $('#credit_rating').text('--');
    return;

    credit_rating = last_no_zero(stats.indicator_values['1620'])
    if (!credit_rating){
        $('#credit_rating').text('--');
        return;
    }

    $('#credit_rating')
        .text((credit_rating[1]).toFixed(1) + '%');

    $('#credit_rating_year')
        .text(stats.years[credit_rating[0]]); 
    
    // if (credit_rating[0]>0){
    //     prev_credit_rating = stats.indicator_values['1620'][credit_rating[0]-1];
    //     grow = ((credit_rating[1] / prev_credit_rating) - 1) * 100;
    // } else {
    //     grow = false;
    // }
    // update_grow(grow, '#credit_rating_grow');
});


countryStatsPromise.then(function(stats) {
    poverty_level = last_no_zero(stats.indicator_values['1620'])
    if (!poverty_level){
        $('#poverty_level').text('--');
        return;
    }

    $('#poverty_level')
        .text((poverty_level[1]).toFixed(1) + '%');

    $('#poverty_level_year')
        .text(stats.years[poverty_level[0]]); 
    
    if (poverty_level[0]>0){
        prev_poverty_level = stats.indicator_values['1620'][poverty_level[0]-1];
        grow = ((poverty_level[1] / prev_poverty_level) - 1) * 100;
    } else {
        grow = false;
    }
    update_grow(grow, '#poverty_level_grow');
});