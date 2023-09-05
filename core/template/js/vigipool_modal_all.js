function update_vigipool_modal_all() {

    // console.log("///// update_vigipool_modal_all /////");

    // Variables

    var device_id = get_value_from_position(eq_modal, "device_id");
    var frost_free = get_value_from_position(eq_modal, "frost_free");
    var light_type = get_value_from_position(eq_modal, "light_type");
    var aux_type = get_value_from_position(eq_modal, "aux_type");
    var winter_mode = get_value_from_position(eq_modal, "winter_mode");

    // Logs

    // console.log("device_id = " + device_id);
    // console.log("frost_free = " + frost_free);
    // console.log("light_type = " + light_type);
    // console.log("aux_type = " + aux_type);
    // console.log("winter_mode = " + winter_mode);

    // Check

    const variables = [device_id, frost_free, light_type, aux_type, winter_mode];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    if (!is_variable_available(eq_modal, "frost_free")) {
        $(".vigipool_common_modal_all_frost_free").hide();
        $(".vigipool_common_modal_all_frost_free_off").hide();
        $(".vigipool_common_modal_all_frost_free_0").hide();
        $(".vigipool_common_modal_all_frost_free_1").hide();
        $(".vigipool_common_modal_all_frost_free_2").hide();
    }
    if (!is_variable_available(eq_modal, "light_type")) {
        $(".vigipool_common_modal_all_light_type").hide();
        $(".vigipool_common_modal_all_light_type_rc").hide();
        $(".vigipool_common_modal_all_light_type_mono").hide();
        $(".vigipool_common_modal_all_light_type_mono_dim").hide();
        $(".vigipool_common_modal_all_light_type_micro_cuts").hide();
    }
    if (!is_variable_available(eq_modal, "aux_type")) {
        $(".vigipool_common_modal_all_aux_type").hide();
        $(".vigipool_common_modal_all_aux_type_none").hide();
        $(".vigipool_common_modal_all_aux_type_heater").hide();
        $(".vigipool_common_modal_all_aux_type_treatment").hide();
        $(".vigipool_common_modal_all_aux_type_booster").hide();
        $(".vigipool_common_modal_all_aux_type_auxiliary").hide();
    }
    if (!is_variable_available(eq_modal, "aux_type")) {
        $(".vigipool_common_modal_all_winter_mode").hide();
        $(".vigipool_common_modal_all_winter_mode_off").hide();
        $(".vigipool_common_modal_all_winter_mode_on").hide();
    }

    if (is_device(device_id, "anteam")) {
        $(".vigipool_common_modal_all_light_type").hide();
        $(".vigipool_common_modal_all_light_type_rc").hide();
        $(".vigipool_common_modal_all_light_type_mono").hide();
        $(".vigipool_common_modal_all_light_type_mono_dim").hide();
        $(".vigipool_common_modal_all_light_type_micro_cuts").hide();
    } else if (is_device(device_id, "zelix")) {
        $(".vigipool_common_modal_all_frost_free").html(get_text("no_parameters"));
        $(".vigipool_common_modal_all_light_type").hide();
        $(".vigipool_common_modal_all_aux_type").hide();
        $(".vigipool_common_modal_all_winter_mode").hide();

        $(".vigipool_common_modal_all_frost_free_off").hide();
        $(".vigipool_common_modal_all_frost_free_0").hide();
        $(".vigipool_common_modal_all_frost_free_1").hide();
        $(".vigipool_common_modal_all_frost_free_2").hide();
        $(".vigipool_common_modal_all_light_type_rc").hide();
        $(".vigipool_common_modal_all_light_type_mono").hide();
        $(".vigipool_common_modal_all_light_type_mono_dim").hide();
        $(".vigipool_common_modal_all_light_type_micro_cuts").hide();
        $(".vigipool_common_modal_all_aux_type_none").hide();
        $(".vigipool_common_modal_all_aux_type_heater").hide();
        $(".vigipool_common_modal_all_aux_type_treatment").hide();
        $(".vigipool_common_modal_all_aux_type_booster").hide();
        $(".vigipool_common_modal_all_aux_type_auxiliary").hide();
        $(".vigipool_common_modal_all_winter_mode_off").hide();
        $(".vigipool_common_modal_all_winter_mode_on").hide();
        $(".vigipool_common_modal_all_button_deletion").hide();
    } else if (is_device(device_id, "phileo")) {
        $(".vigipool_common_modal_all_frost_free").hide();
        $(".vigipool_common_modal_all_light_type").hide();
        $(".vigipool_common_modal_all_aux_type").hide();

        $(".vigipool_common_modal_all_frost_free_off").hide();
        $(".vigipool_common_modal_all_frost_free_0").hide();
        $(".vigipool_common_modal_all_frost_free_1").hide();
        $(".vigipool_common_modal_all_frost_free_2").hide();
        $(".vigipool_common_modal_all_light_type_rc").hide();
        $(".vigipool_common_modal_all_light_type_mono").hide();
        $(".vigipool_common_modal_all_light_type_mono_dim").hide();
        $(".vigipool_common_modal_all_light_type_micro_cuts").hide();
        $(".vigipool_common_modal_all_aux_type_none").hide();
        $(".vigipool_common_modal_all_aux_type_heater").hide();
        $(".vigipool_common_modal_all_aux_type_treatment").hide();
        $(".vigipool_common_modal_all_aux_type_booster").hide();
        $(".vigipool_common_modal_all_aux_type_auxiliary").hide();
        $(".vigipool_common_modal_all_button_deletion").hide();
    }

    // Init

    $(".vigipool_common_modal_all_frost_free_off").removeClass("btn-primary");
    $(".vigipool_common_modal_all_frost_free_0").removeClass("btn-primary");
    $(".vigipool_common_modal_all_frost_free_1").removeClass("btn-primary");
    $(".vigipool_common_modal_all_frost_free_2").removeClass("btn-primary");
    $(".vigipool_common_modal_all_light_type_rc").removeClass("btn-primary");
    $(".vigipool_common_modal_all_light_type_mono").removeClass("btn-primary");
    $(".vigipool_common_modal_all_light_type_mono_dim").removeClass("btn-primary");
    $(".vigipool_common_modal_all_light_type_micro_cuts").removeClass("btn-primary");
    $(".vigipool_common_modal_all_aux_type_none").removeClass("btn-primary");
    $(".vigipool_common_modal_all_aux_type_heater").removeClass("btn-primary");
    $(".vigipool_common_modal_all_aux_type_treatment").removeClass("btn-primary");
    $(".vigipool_common_modal_all_aux_type_booster").removeClass("btn-primary");
    $(".vigipool_common_modal_all_aux_type_auxiliary").removeClass("btn-primary");
    $(".vigipool_common_modal_all_anteam_frost_protection_mode_off").removeClass("btn-primary");
    $(".vigipool_common_modal_all_anteam_frost_protection_mode_0").removeClass("btn-primary");
    $(".vigipool_common_modal_all_anteam_frost_protection_mode_1").removeClass("btn-primary");
    $(".vigipool_common_modal_all_anteam_frost_protection_mode_2").removeClass("btn-primary");

    // frost_free

    switch (frost_free) {
        case 255:
            $(".vigipool_common_modal_all_frost_free_off").addClass("btn-primary");
            break;
        case 0:
            $(".vigipool_common_modal_all_frost_free_0").addClass("btn-primary");
            break;
        case 1:
            $(".vigipool_common_modal_all_frost_free_1").addClass("btn-primary");
            break;
        case 2:
            $(".vigipool_common_modal_all_frost_free_2").addClass("btn-primary");
            break;
    }

    // light_type

    switch (light_type) {
        case 0:
            $(".vigipool_common_modal_all_light_type_rc").addClass("btn-primary");
            break;
        case 1:
            $(".vigipool_common_modal_all_light_type_mono").addClass("btn-primary");
            break;
        case 2:
            $(".vigipool_common_modal_all_light_type_mono_dim").addClass("btn-primary");
            break;
        case 3:
            $(".vigipool_common_modal_all_light_type_micro_cuts").addClass("btn-primary");
            break;
    }

    // aux_type

    switch (aux_type) {
        case 1:
            $(".vigipool_common_modal_all_aux_type_none").addClass("btn-primary");
            break;
        case 2:
            $(".vigipool_common_modal_all_aux_type_heater").addClass("btn-primary");
            break;
        case 3:
            $(".vigipool_common_modal_all_aux_type_treatment").addClass("btn-primary");
            break;
        case 4:
            $(".vigipool_common_modal_all_aux_type_booster").addClass("btn-primary");
            break;
        case 5:
            $(".vigipool_common_modal_all_aux_type_auxiliary").addClass("btn-primary");
            break;
    }

    // winter_mode

    switch (winter_mode) {
        case 0:
            $(".vigipool_common_modal_all_winter_mode_off").addClass("btn-primary");
            break;
        case 1:
            $(".vigipool_common_modal_all_winter_mode_on").addClass("btn-primary");
            break;
    }
}