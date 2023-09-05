function update_vigipool_modal_orp() {

    // console.log("////////// update_vigipool_modal_orp //////////");

    // Variables

    var vol_max_24h = get_value_from_position(eq_modal, "vol_max_24h");

    // Logs

    // console.log("vol_max_24h = " + vol_max_24h);

    // Check

    const variables = [vol_max_24h];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display
    

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 9; j++) {
            $(`.vigipool_modal_source_orp_${i}_${j}0`).removeClass("btn-primary");
        }
    }

    var to_ui = vol_max_24h_to_ui(vol_max_24h);
    $(`.vigipool_modal_source_orp_${to_ui}`).addClass("btn-primary");

    // vol_bac

    var vol_bac = get_value_from_position(eq_modal, "vol_bac");
    // console.log("vol_bac = " + vol_bac);

    for (var i = 0; i < 50; i++) {
        $(`.vigipool_modal_source_orp_${i}`).removeClass("btn-primary");
    }

    var to_ui = parseInt(vol_bac / 100);
    $(`.vigipool_modal_source_orp_${to_ui}`).addClass("btn-primary");

}