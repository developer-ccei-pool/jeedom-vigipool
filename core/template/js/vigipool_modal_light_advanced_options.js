function update_vigipool_modal_light_advanced_options() {

    // console.log("///// update_vigipool_modal_light_advanced_options /////");

    // Variables

    var filt_light_force = get_value_from_position(eq_modal, "filt_light_force");

    // Logs

    // console.log("filt_light_force = " + filt_light_force);

    // Check

    const variables = [filt_light_force];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    if (filt_light_force === 1) {
        $(".vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_off").removeClass("btn-primary");
        $(".vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_on").addClass("btn-primary");
    } else {
        $(".vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_off").addClass("btn-primary");
        $(".vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_on").removeClass("btn-primary");
    }
}