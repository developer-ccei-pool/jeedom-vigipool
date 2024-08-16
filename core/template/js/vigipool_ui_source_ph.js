$(".vigipool_ui_source_ph_label > p").html(get_text("ph_regulation"));
$(".vigipool_ui_ph_inject_on_label > p").html(get_text("injection_in_progress"));
$(".vigipool_ui_ph_vol_max_24h_label > p").html(get_text("volume_injected_in_24h"));

function update_vigipool_ui_source_ph() {

    var max_devices = $(".vigipool_ipaddr").length;

    // console.log("max_devices = " + max_devices);

    for (var i = 0, max = max_devices; i < max; i++) {

        var source_ph = get_value_from_position(i, "source_ph");

        var phileox_inject_on = get_value_from_eq(i, "inject_on", "phileox");
        var phileox_vol_24h_inject = get_value_from_eq(i, "vol_24h_inject", "phileox");
        var phileox_vol_max_24h = get_value_from_eq(i, "vol_max_24h", "phileox");
        var phileox_vol_bac = get_value_from_eq(i, "vol_bac", "phileox");

        var daisyph_inject_on = get_value_from_eq(i, "inject_on", "daisyph");
        var daisyph_vol_24h_inject = get_value_from_eq(i, "vol_24h_inject", "daisyph");
        var daisyph_vol_max_24h = get_value_from_eq(i, "vol_max_24h", "daisyph");
        var daisyph_vol_bac = get_value_from_eq(i, "vol_bac", "daisyph");

        if (phileox_inject_on != undefined) var inject_on = phileox_inject_on;
        if (phileox_vol_24h_inject != undefined) var vol_24h_inject = phileox_vol_24h_inject;
        if (phileox_vol_max_24h != undefined) var vol_max_24h = phileox_vol_max_24h;
        if (phileox_vol_bac != undefined) var vol_bac = phileox_vol_bac;

        if (daisyph_inject_on != undefined) var inject_on = daisyph_inject_on;
        if (daisyph_vol_24h_inject != undefined) var vol_24h_inject = daisyph_vol_24h_inject;
        if (daisyph_vol_max_24h != undefined) var vol_max_24h = daisyph_vol_max_24h;
        if (daisyph_vol_bac != undefined) var vol_bac = daisyph_vol_bac;

        // console.log("source_ph = " + source_ph);
        // console.log("phileox_inject_on = " + phileox_inject_on);
        // console.log("phileox_vol_24h_inject = " + phileox_vol_24h_inject);
        // console.log("phileox_vol_max_24h = " + phileox_vol_max_24h);
        // console.log("daisyph_inject_on = " + daisyph_inject_on);
        // console.log("daisyph_vol_24h_inject = " + daisyph_vol_24h_inject);
        // console.log("daisyph_vol_max_24h = " + daisyph_vol_max_24h);
        // console.log("inject_on = " + inject_on);
        // console.log("vol_24h_inject = " + vol_24h_inject);
        // console.log("vol_max_24h = " + vol_max_24h);
        // console.log("inject_on = " + inject_on);
        // console.log("vol_24h_inject = " + vol_24h_inject);
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

        $(".vigipool_ui_ph_vol_max_24h_state > p").eq(i).html(`${vol_24h_inject} L / ${vol_max_24h} L`);
    }
}