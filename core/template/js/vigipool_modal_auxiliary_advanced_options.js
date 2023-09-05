function update_vigipool_modal_auxiliary_advanced_options() {

    // console.log("||||| update_vigipool_modal_auxiliary_advanced_options |||||");

    // Variables

    var aux_conf = get_value_from_position(eq_modal, "aux_conf");
    if (aux_conf === undefined)
        return;
    aux_conf = parseInt(aux_conf);
    aux_conf = converter("dec", "bin", aux_conf);

    var enslaved_to_filtration = parseInt(aux_conf[6]);
    var force_filtration_during_aux = parseInt(aux_conf[5]);
    var consigne_temp = parseInt(aux_conf[4]);
    var aux_min_temp = parseInt(aux_conf[3]);
    var consigne_orp = parseInt(aux_conf[2]);

    // Logs

    // console.log("aux_conf = " + aux_conf);
    // console.log("enslaved_to_filtration = " + enslaved_to_filtration);
    // console.log("force_filtration_during_aux = " + force_filtration_during_aux);
    // console.log("consigne_temp = " + consigne_temp);
    // console.log("aux_min_temp = " + aux_min_temp);
    // console.log("consigne_orp = " + consigne_orp);

    // Check

    const variables = [aux_conf, enslaved_to_filtration, force_filtration_during_aux, consigne_temp, aux_min_temp, consigne_orp];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // enslaved_to_filtration

    if (enslaved_to_filtration === 1) {
        $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").removeClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").addClass("btn-primary");
    } else {
        $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").addClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").removeClass("btn-primary");
    }

    // force_filtration_during_aux

    if (force_filtration_during_aux === 1) {
        $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").removeClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").addClass("btn-primary");
    } else {
        $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").addClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").removeClass("btn-primary");
    }

    // consigne_temp

    if (consigne_temp === 1) {
        $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").removeClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").addClass("btn-primary");
    } else {
        $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").addClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").removeClass("btn-primary");
    }

    // aux_min_temp

    if (aux_min_temp === 1) {
        $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").removeClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").addClass("btn-primary");
    } else {
        $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").addClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").removeClass("btn-primary");
    }

    // consigne_orp

    if (consigne_orp === 1) {
        $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").removeClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").addClass("btn-primary");
    } else {
        $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").addClass("btn-primary");
        $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").removeClass("btn-primary");
    }

    var aux_type = get_value_from_position(eq_modal, "aux_type");
    aux_type = parseInt(aux_type);
    // console.log("aux_type = " + aux_type);

    switch (aux_type) {
        case 0:
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").hide();
            break;
        case 1:
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").hide();
            break;
        case 2:
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").show();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").hide();
            break;
        case 3:
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").show();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp").show();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").show();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").show();
            var consigne_orp_zelix = get_value_from_eq(eq_modal, "consigne_orp", "zelix");
            if (consigne_orp_zelix > 0) {
                $(".vigipool_modal_auxiliary_advanced_options_consigne_orp").show();
                $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").show();
                $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").show();
            } else {
                $(".vigipool_modal_auxiliary_advanced_options_consigne_orp").hide();
                $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").hide();
                $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").hide();
            }
            break;
        case 4:
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").show();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").hide();
            break;
        case 5:
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration").show();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off").show();
            $(".vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off").show();
            $(".vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on").show();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_aux_min_temp_on").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_off").hide();
            $(".vigipool_modal_auxiliary_advanced_options_consigne_orp_on").hide();
            break;
    }
}