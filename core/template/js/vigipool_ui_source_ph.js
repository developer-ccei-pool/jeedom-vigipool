$(".vigipool_ui_source_ph_label > p").html(get_text("ph_regulation"));
$(".vigipool_ui_ph_inject_on_label > p").html(get_text("injection_in_progress"));
$(".vigipool_ui_ph_vol_max_24h_label > p").html(get_text("volume_injected_in_24h"));

function update_vigipool_ui_source_ph() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var source_ph = get_value_from_position(i, "source_ph");
        var inject_on = get_value_from_eq(i, "inject_on", "phileox");
        var vol_max_24h = get_value_from_eq(i, "vol_max_24h", "phileox");

        // console.log("source_ph = " + source_ph);
        // console.log("inject_on = " + inject_on);
        // console.log("vol_max_24h = " + vol_max_24h);

        if (!is_variable_available(i, "source_ph")) {
            $(".vigipool_ui_source_ph_label").eq(i).hide();
            $(".vigipool_ui_source_ph_state").eq(i).hide();
            $(".vigipool_ui_ph_inject_on_label").eq(i).hide();
            $(".vigipool_ui_ph_inject_on_state").eq(i).hide();
            $(".vigipool_ui_ph_vol_max_24h_label").eq(i).hide();
            $(".vigipool_ui_ph_vol_max_24h_state").eq(i).hide();
        } else {
            $(".vigipool_ui_source_ph_label").eq(i).show();
            $(".vigipool_ui_source_ph_state").eq(i).show();
            $(".vigipool_ui_ph_inject_on_label").eq(i).show();
            $(".vigipool_ui_ph_inject_on_state").eq(i).show();
            $(".vigipool_ui_ph_vol_max_24h_label").eq(i).show();
            $(".vigipool_ui_ph_vol_max_24h_state").eq(i).show();
        }

        switch (inject_on) {
            case 0:
                $(".vigipool_ui_ph_inject_on_state > p").eq(i).html(`Off`);
                break;
            case 1:
                $(".vigipool_ui_ph_inject_on_state > p").eq(i).html(`On`);
                break;
        }

        $(".vigipool_ui_ph_vol_max_24h_label > p").eq(i).html(get_text("vol_24h_inject"));

        var vol_24h_inject = get_value_from_eq(i, "vol_24h_inject", "phileox");
        var vol_max_24h = get_value_from_eq(i, "vol_max_24h", "phileox");
        $(".vigipool_ui_ph_vol_max_24h_state > p").eq(i).html(`${vol_24h_inject} L / ${vol_max_24h} L`);
    }
}