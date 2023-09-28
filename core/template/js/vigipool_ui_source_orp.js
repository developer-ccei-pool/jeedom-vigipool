$(".vigipool_ui_source_orp_label > p").html(get_text("orp_regulation"));
$(".vigipool_ui_orp_inject_on_label > p").html(get_text("injection_in_progress"));
$(".vigipool_ui_orp_vol_max_24h_label > p").html(get_text("volume_injected_in_24h"));

function update_vigipool_ui_source_orp() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var source_orp = get_value_from_position(i, "source_orp");
        var inject_on = get_value_from_eq(i, "inject_on", "oxeox");
        var vol_max_24h = get_value_from_eq(i, "vol_max_24h", "oxeox");

        // console.log("source_orp = " + source_orp);
        // console.log("inject_on = " + inject_on);
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

        var vol_max_24h = get_value_from_position(i, "vol_max_24h");
        $(".vigipool_ui_orp_vol_max_24h_state > p").eq(i).html(`0.0 L / ${vol_max_24h} L`);
    }
}