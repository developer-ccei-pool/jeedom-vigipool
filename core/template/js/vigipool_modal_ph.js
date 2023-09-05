function update_vigipool_modal_ph() {

    // console.log("///// update_vigipool_modal_ph /////");

    // Variables

    var mode_ph = get_value_from_position(eq_modal, "mode_ph");
    var vol_max_24h = get_value_from_position(eq_modal, "vol_max_24h");
    var vol_bac = get_value_from_position(eq_modal, "vol_bac");

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