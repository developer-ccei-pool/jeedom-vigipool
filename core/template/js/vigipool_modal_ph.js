function update_vigipool_modal_ph() {

    // console.log("///// update_vigipool_modal_ph /////");

    // Variables

    var phileox_inject_on = get_value_from_eq(eq_modal, "inject_on", "phileox");
    var phileox_vol_24h_inject = get_value_from_eq(eq_modal, "vol_24h_inject", "phileox");
    var phileox_vol_max_24h = get_value_from_eq(eq_modal, "vol_max_24h", "phileox");
    var phileox_vol_bac = get_value_from_eq(eq_modal, "vol_bac", "phileox");
    var phileox_mode_ph = get_value_from_eq(eq_modal, "mode_ph", "phileox");

    var daisyph_inject_on = get_value_from_eq(eq_modal, "inject_on", "daisyph");
    var daisyph_vol_24h_inject = get_value_from_eq(eq_modal, "vol_24h_inject", "daisyph");
    var daisyph_vol_max_24h = get_value_from_eq(eq_modal, "vol_max_24h", "daisyph");
    var daisyph_vol_bac = get_value_from_eq(eq_modal, "vol_bac", "daisyph");
    var daisyph_mode_ph = get_value_from_eq(eq_modal, "mode_ph", "daisyph");

    if (phileox_inject_on != undefined) var inject_on = phileox_inject_on;
    if (phileox_vol_24h_inject != undefined) var vol_24h_inject = phileox_vol_24h_inject;
    if (phileox_vol_max_24h != undefined) var vol_max_24h = phileox_vol_max_24h;
    if (phileox_vol_bac != undefined) var vol_bac = phileox_vol_bac;
    if (phileox_mode_ph != undefined) var mode_ph = phileox_mode_ph;

    if (daisyph_inject_on != undefined) var inject_on = daisyph_inject_on;
    if (daisyph_vol_24h_inject != undefined) var vol_24h_inject = daisyph_vol_24h_inject;
    if (daisyph_vol_max_24h != undefined) var vol_max_24h = daisyph_vol_max_24h;
    if (daisyph_vol_bac != undefined) var vol_bac = daisyph_vol_bac;
    if (daisyph_mode_ph != undefined) var mode_ph = daisyph_mode_ph;

    // Logs

    // console.log("mode_ph = " + mode_ph);
    // console.log("vol_max_24h = " + vol_max_24h);
    // console.log("vol_bac = " + vol_bac);

    // Init

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 9; j++) {
            $(`.vigipool_modal_source_ph_${i}_${j}0`).removeClass("btn-primary");
        }
    }

    // Check

    const variables = [mode_ph, vol_max_24h, vol_bac];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    if (mode_ph === 0) {
        $(".vigipool_modal_source_ph_ph_m").addClass("btn-primary");
        $(".vigipool_modal_source_ph_ph_p").removeClass("btn-primary");
    } else if (mode_ph === 1) {
        $(".vigipool_modal_source_ph_ph_m").removeClass("btn-primary");
        $(".vigipool_modal_source_ph_ph_p").addClass("btn-primary");
    }

    var to_ui = vol_max_24h_to_ui(vol_max_24h);
    $(`.vigipool_modal_source_ph_${to_ui}`).addClass("btn-primary");

    // vol_bac

    // console.log("vol_bac = " + vol_bac);

    for (var i = 0; i < 50; i++) {
        $(`.vigipool_modal_source_ph_${i}`).removeClass("btn-primary");
    }

    var to_ui = parseInt(vol_bac / 100);
    $(`.vigipool_modal_source_ph_${to_ui}`).addClass("btn-primary");

}