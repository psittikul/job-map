$(function () {
    var maxHue = 55;
    var minHue = 264;
    var newcolors = {tx:'#4c2882', dc: '#e8d82a', wa:'#2ba989'};
    var pin = "\u003ci class=\"fas fa-map-pin\" style=\"color:#4c2882\" \u003e\u003c/\u003e";
    $("#vmap").vectorMap({
        map: 'usa_en',
        backgroundColor: '#222',
        selectedRegions: ['TX', 'NY', 'PA', 'DC', 'CA', 'WA'],
        hoverColor: 'rgba(232,216,42,.5)',
        selectedColor: '#e8d82a'
    });
    $("#vmap").vectorMap('set', 'colors', {tx: '#4c2882', dc:'#e8d82a', wa:'#2ba989'});
});