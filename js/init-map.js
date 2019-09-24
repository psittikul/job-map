$(function () {
    var maxHue = 55;
    var minHue = 264;
    var newcolors = { tx: '#4c2882', dc: '#e8d82a', wa: '#2ba989' };
    var pin = "\u003ci class=\"fas fa-map-pin\" style=\"color:#4c2882\" \u003e\u003c/\u003e";
    if ($("#vmap")) {
        $("#vmap").vectorMap({
            map: 'usa_en',
            backgroundColor: '#F5F5F5',
            selectedRegions: ['TX', 'NY', 'PA', 'DC', 'CA', 'WA'],
            hoverColor: 'rgba(232,216,42,.8)',
            selectedColor: '#e8d82a',
            borderColor: '#222',
            borderOpacity: .8
        });
        // Add a legend for the small states (like DC) and highlight if applicable
        $(".jqvmap-zoomin").before("<div class='small-states-legend'><ul><li>D.C.</li></ul></div>");
        if ($("#jqvmap1_dc").attr("fill") == "#e8d82a") {
            $(".small-states-legend").css("background-color", "#e8d82a");
        }
    }
    // "Picture in picture" map on the other pages
    if ($("#pipmap")) {
        init_pip_map();
    }
});

function init_pip_map() {
    // Only initiate the map with all states if we are on the page listing all companies
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id") ? urlParams.get("id") : 0;
    if (id === 0) {
        $("#pipmap").html("");
        $("#pipmap").vectorMap({
            map: 'usa_en',
            backgroundColor: 'rgba(0,0,0,.7)',
            selectedRegions: ['TX', 'NY', 'PA', 'DC', 'CA', 'WA'],
            hoverColor: 'rgba(232,216,42,.8)',
            selectedColor: '#e8d82a',
            borderColor: '#222',
            borderOpacity: .8,
            multiSelectRegion: true
        });
        $("#pipmap").append('<button id="expandMap" data-toggle="tooltip" title="Click to expand map" style="bottom: .25rem; color: #e8d84a; cursor: pointer;transition: .25s;position: absolute;left: 10px; border: none; background: none; padding: 0"><i class="fas fa-expand-arrows-alt"  aria-hidden="true"></i></button>');

    }
    $("#pipmap").html("");
    $("#pipmap").vectorMap({
        map: 'usa_en',
        backgroundColor: 'rgba(0,0,0,.7)',
        hoverColor: 'rgba(232,216,42,.8)',
        selectedColor: '#e8d82a',
        borderColor: '#222',
        borderOpacity: .8,
        multiSelectRegion: true
    });
    $("#pipmap").append('<button id="expandMap" data-toggle="tooltip" title="Click to expand map" style="bottom: .25rem; color: #e8d84a; cursor: pointer;transition: .25s;position: absolute;left: 10px; border: none; background: none; padding: 0"><i class="fas fa-expand-arrows-alt"  aria-hidden="true"></i></button>');
};

function reconstruct_pip_map(states) {
    $("#pipmap").html("");
    $("#pipmap").vectorMap({
        map: 'usa_en',
        backgroundColor: 'rgba(0,0,0,.7)',
        selectedRegions: states,
        hoverColor: 'rgba(232,216,42,.8)',
        selectedColor: '#e8d82a',
        borderColor: '#222',
        borderOpacity: .8,
        multiSelectRegion: true
    });
    $("#pipmap").append('<button id="expandMap" data-toggle="tooltip" title="Click to expand map" style="bottom: .25rem; color: #e8d84a; cursor: pointer;transition: .25s;position: absolute;left: 10px; border: none; background: none; padding: 0"><i class="fas fa-expand-arrows-alt"  aria-hidden="true"></i></button>');
}