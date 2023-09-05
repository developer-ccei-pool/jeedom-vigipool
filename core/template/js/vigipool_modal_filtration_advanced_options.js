function update_vigipool_modal_filtration_advanced_options() {

    // console.log("///// update_vigipool_modal_filtration_advanced_options /////");
    
    // Variables

    var frost_free = get_value_from_position(eq_modal, "frost_free");

    // Logs

    // console.log("frost_free = " + frost_free);

    // Check

    const variables = [frost_free];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    switch (frost_free) {
        case 255:
            $(".vigipool_modal_filtration_advanced_options_frost_free_off").addClass("btn-primary");
            break;
        case 0:
            $(".vigipool_modal_filtration_advanced_options_frost_free_0").addClass("btn-primary");
            break;
        case 1:
            $(".vigipool_modal_filtration_advanced_options_frost_free_1").addClass("btn-primary");
            break;
        case 2:
            $(".vigipool_modal_filtration_advanced_options_frost_free_2").addClass("btn-primary");
            break;
    }
}