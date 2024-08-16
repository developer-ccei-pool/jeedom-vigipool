function update_vigipool_modal_orp() {

    // console.log("////////// update_vigipool_modal_orp //////////");

    // Variables

    var oxeox_inject_on = get_value_from_eq(eq_modal, "inject_on", "oxeox");
    var oxeox_vol_24h_inject = get_value_from_eq(eq_modal, "vol_24h_inject", "oxeox");
    var oxeox_vol_max_24h = get_value_from_eq(eq_modal, "vol_max_24h", "oxeox");
    var oxeox_vol_bac = get_value_from_eq(eq_modal, "vol_bac", "oxeox");

    var zelix_inject_on = get_value_from_eq(eq_modal, "inject_on", "zelix");
    var zelix_vol_24h_inject = get_value_from_eq(eq_modal, "vol_24h_inject", "zelix");
    var zelix_vol_max_24h = get_value_from_eq(eq_modal, "vol_max_24h", "zelix");
    var zelix_vol_bac = get_value_from_eq(eq_modal, "vol_bac", "zelix");

    if (oxeox_inject_on != undefined) var inject_on = oxeox_inject_on;
    if (oxeox_vol_24h_inject != undefined) var vol_24h_inject = oxeox_vol_24h_inject;
    if (oxeox_vol_max_24h != undefined) var vol_max_24h = oxeox_vol_max_24h;
    if (oxeox_vol_bac != undefined) var vol_bac = oxeox_vol_bac;

    if (zelix_inject_on != undefined) var inject_on = zelix_inject_on;
    if (zelix_vol_24h_inject != undefined) var vol_24h_inject = zelix_vol_24h_inject;
    if (zelix_vol_max_24h != undefined) var vol_max_24h = zelix_vol_max_24h;
    if (zelix_vol_bac != undefined) var vol_bac = zelix_vol_bac;
    
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

    for (var i = 0; i < 50; i++) {
        $(`.vigipool_modal_source_orp_${i}`).removeClass("btn-primary");
    }

    var to_ui = parseInt(vol_bac / 100);
    $(`.vigipool_modal_source_orp_${to_ui}`).addClass("btn-primary");

}