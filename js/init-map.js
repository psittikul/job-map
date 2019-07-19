$(function () {
    $("#vmap").vectorMap({
        map: 'usa_en',
        backgroundColor: '#222',
        selectedRegions: ['TX', 'NY', 'PA', 'DC', 'CA', 'WA']
    });
});