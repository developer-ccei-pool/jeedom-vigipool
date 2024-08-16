$(".vigipool_ui_source_orp_label > p").html(get_text("orp_regulation"));
$(".vigipool_ui_orp_inject_on_label > p").html(get_text("injection_in_progress"));
$(".vigipool_ui_orp_vol_max_24h_label > p").html(get_text("volume_injected_in_24h"));

function update_vigipool_ui_source_orp() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var source_orp = get_value_from_position(i, "source_orp");

        var oxeox_inject_on = get_value_from_eq(i, "inject_on", "oxeox");
        var oxeox_vol_24h_inject = get_value_from_eq(i, "vol_24h_inject", "oxeox");
        var oxeox_vol_max_24h = get_value_from_eq(i, "vol_max_24h", "oxeox");

        var zelix_inject_on = get_value_from_eq(i, "inject_on", "zelix");
        var zelix_vol_24h_inject = get_value_from_eq(i, "vol_24h_inject", "zelix");
        var zelix_vol_max_24h = get_value_from_eq(i, "vol_max_24h", "zelix");

        if (oxeox_inject_on != undefined) var inject_on = oxeox_inject_on;
        if (oxeox_vol_24h_inject != undefined) var vol_24h_inject = oxeox_vol_24h_inject;
        if (oxeox_vol_max_24h != undefined) var vol_max_24h = oxeox_vol_max_24h;

        if (zelix_inject_on != undefined) var inject_on = zelix_inject_on;
        if (zelix_vol_24h_inject != undefined) var vol_24h_inject = zelix_vol_24h_inject;
        if (zelix_vol_max_24h != undefined) var vol_max_24h = zelix_vol_max_24h;

        // console.log("source_orp = " + source_orp);
        // console.log("oxeox_inject_on = " + oxeox_inject_on);
        // console.log("oxeox_vol_24h_inject = " + oxeox_vol_24h_inject);
        // console.log("oxeox_vol_max_24h = " + oxeox_vol_max_24h);
        // console.log("zelix_inject_on = " + zelix_inject_on);
        // console.log("zelix_vol_24h_inject = " + zelix_vol_24h_inject);
        // console.log("zelix_vol_max_24h = " + zelix_vol_max_24h);
        // console.log("inject_on = " + inject_on);
        // console.log("vol_24h_inject = " + vol_24h_inject);
        // console.log("vol_max_24h = " + vol_max_24h);
        // console.log("inject_on = " + inject_on);
        // console.log("vol_24h_inject = " + vol_24h_inject);
        // console.log("vol_max_24h = " + vol_max_24h);

        if (is_variable_available(i, "source_orp") && is_variable_available(i, "inject_on")) {
            $(".vigipool_ui_source_orp_label").eq(i).show();
            $(".vigipool_ui_source_orp_state").eq(i).show();
            $(".vigipool_ui_orp_vol_max_24h_label").eq(i).show();
            $(".vigipool_ui_orp_vol_max_24h_state").eq(i).show();
            $(".vigipool_ui_orp_vol_max_24h_label").eq(i).show();
            $(".vigipool_ui_orp_vol_max_24h_state").eq(i).show();
        } else {
            $(".vigipool_ui_source_orp_label").eq(i).hide();
            $(".vigipool_ui_source_orp_state").eq(i).hide();
            $(".vigipool_ui_orp_inject_on_label").eq(i).hide();
            $(".vigipool_ui_orp_inject_on_state").eq(i).hide();
            $(".vigipool_ui_orp_vol_max_24h_label").eq(i).hide();
            $(".vigipool_ui_orp_vol_max_24h_state").eq(i).hide();
        }

        switch (inject_on) {
            case 0:
                $(".vigipool_ui_orp_inject_on_state > p").eq(i).html(`Off`);
                break;
            case 1:
                $(".vigipool_ui_orp_inject_on_state > p").eq(i).html(`On`);
                break;
        }

        $(".vigipool_ui_orp_vol_max_24h_label > p").eq(i).html(get_text("vol_24h_inject"));
        $(".vigipool_ui_orp_vol_max_24h_state > p").eq(i).html(`${vol_24h_inject} L / ${vol_max_24h} L`);
    }
}