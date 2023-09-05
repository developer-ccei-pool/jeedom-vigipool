function update_vigipool_modal_filtration_prog_2(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_filtration_prog_2 /////");

    // Variables

    if (set_sched_value_save === "") {
        var filtration_sched = get_value_from_position(eq_modal, "filt_sched");
    } else {
        var filtration_sched = set_sched_value_save;
    }

    // Logs

    // console.log("filtration_sched = " + filtration_sched);

    // Check

    const variables = [filtration_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // Retrieval of sub-variables in the variable

    var programs_number = get_sched_value(filtration_sched, "programs_number");

    var program_2_off_on_and_days = get_sched_value(filtration_sched, "program_2_off_on_and_days");
    var program_2_thermo = get_sched_value(filtration_sched, "program_2_bright");
    var program_2_sched_number = get_sched_value(filtration_sched, "program_2_sched_number");
    var program_2_sched_1_begin = get_sched_value(filtration_sched, "program_2_sched_1_begin");
    var program_2_sched_1_end = fix_end_dec(get_sched_value(filtration_sched, "program_2_sched_1_end"));
    var program_2_sched_2_begin = get_sched_value(filtration_sched, "program_2_sched_2_begin");
    var program_2_sched_2_end = fix_end_dec(get_sched_value(filtration_sched, "program_2_sched_2_end"));
    var program_2_sched_3_begin = get_sched_value(filtration_sched, "program_2_sched_3_begin");
    var program_2_sched_3_end = fix_end_dec(get_sched_value(filtration_sched, "program_2_sched_3_end"));

    var program_2_off_on = get_sched_value(filtration_sched, "program_2_off_on");
    var program_2_samedi = get_sched_value(filtration_sched, "program_2_samedi");
    var program_2_vendredi = get_sched_value(filtration_sched, "program_2_vendredi");
    var program_2_jeudi = get_sched_value(filtration_sched, "program_2_jeudi");
    var program_2_mercredi = get_sched_value(filtration_sched, "program_2_mercredi");
    var program_2_mardi = get_sched_value(filtration_sched, "program_2_mardi");
    var program_2_lundi = get_sched_value(filtration_sched, "program_2_lundi");
    var program_2_dimanche = get_sched_value(filtration_sched, "program_2_dimanche");

    if (isNaN(program_2_sched_1_begin))
        program_2_sched_1_begin = 0;
    if (isNaN(program_2_sched_1_end))
        program_2_sched_1_end = 0;
    if (isNaN(program_2_sched_2_begin))
        program_2_sched_2_begin = 0;
    if (isNaN(program_2_sched_2_end))
        program_2_sched_2_end = 0;
    if (isNaN(program_2_sched_3_begin))
        program_2_sched_3_begin = 0;
    if (isNaN(program_2_sched_3_end))
        program_2_sched_3_end = 0;

    // console.log("filtration_sched = " + filtration_sched);
    // console.log("filtration_sched = " + filtration_sched);
    // console.log("programs_number = " + programs_number);
    // console.log("program_2_off_on_and_days = " + program_2_off_on_and_days);
    // console.log("program_2_thermo = " + program_2_thermo);
    // console.log("program_2_sched_number = " + program_2_sched_number);
    // console.log("program_2_sched_1_begin = " + program_2_sched_1_begin);
    // console.log("program_2_sched_1_end = " + program_2_sched_1_end);
    // console.log("program_2_sched_2_begin = " + program_2_sched_2_begin);
    // console.log("program_2_sched_2_end = " + program_2_sched_2_end);
    // console.log("program_2_sched_3_begin = " + program_2_sched_3_begin);
    // console.log("program_2_sched_3_end = " + program_2_sched_3_end);
    // console.log("program_2_off_on = " + program_2_off_on);
    // console.log("program_2_samedi = " + program_2_samedi);
    // console.log("program_2_vendredi = " + program_2_vendredi);
    // console.log("program_2_jeudi = " + program_2_jeudi);
    // console.log("program_2_mercredi = " + program_2_mercredi);
    // console.log("program_2_mardi = " + program_2_mardi);
    // console.log("program_2_lundi = " + program_2_lundi);
    // console.log("program_2_dimanche = " + program_2_dimanche);

    // State

    if (program_2_off_on === 0) {
        $(".vigipool_modal_filtration_prog_2_button_off").addClass("btn-primary");
        $(".vigipool_modal_filtration_prog_2_button_on").removeClass("btn-primary");
    } else if (program_2_off_on === 1) {
        $(".vigipool_modal_filtration_prog_2_button_off").removeClass("btn-primary");
        $(".vigipool_modal_filtration_prog_2_button_on").addClass("btn-primary");
    }

    // Schedule 1
    // At
    $("#vigipool_modal_filtration_prog_2_sched_1_begin").html(converter("dec", "time_4", parseInt(program_2_sched_1_begin)));
    $("#myvigipool_modal_filtration_prog_2_sched_1_begin").val(program_2_sched_1_begin);
    // During
    $("#vigipool_modal_filtration_prog_2_sched_1_end").html(converter("dec", "time_4", parseInt(program_2_sched_1_end)));
    $("#myvigipool_modal_filtration_prog_2_sched_1_end").val(program_2_sched_1_end);

    // Schedule 2
    // At
    $("#vigipool_modal_filtration_prog_2_sched_2_begin").html(converter("dec", "time_4", parseInt(program_2_sched_2_begin)));
    $("#myvigipool_modal_filtration_prog_2_sched_2_begin").val(program_2_sched_2_begin);
    // During
    $("#vigipool_modal_filtration_prog_2_sched_2_end").html(converter("dec", "time_4", parseInt(program_2_sched_2_end)));
    $("#myvigipool_modal_filtration_prog_2_sched_2_end").val(program_2_sched_2_end);

    // Schedule 3
    // At
    $("#vigipool_modal_filtration_prog_2_sched_3_begin").html(converter("dec", "time_4", parseInt(program_2_sched_3_begin)));
    $("#myvigipool_modal_filtration_prog_2_sched_3_begin").val(program_2_sched_3_begin);
    // During
    $("#vigipool_modal_filtration_prog_2_sched_3_end").html(converter("dec", "time_4", parseInt(program_2_sched_3_end)));
    $("#myvigipool_modal_filtration_prog_2_sched_3_end").val(program_2_sched_3_end);

    if (program_2_sched_2_begin === 0 && program_2_sched_2_end === 0) {
        $(".vigipool_modal_filtration_prog_2_sched_2").hide();
        $(".vigipool_modal_filtration_prog_2_sched_2_add").show();
    } else {
        $(".vigipool_modal_filtration_prog_2_sched_2").show();
        $(".vigipool_modal_filtration_prog_2_sched_2_add").hide();
    }
    if (program_2_sched_3_begin === 0 && program_2_sched_3_end === 0) {
        $(".vigipool_modal_filtration_prog_2_sched_3").hide();
        $(".vigipool_modal_filtration_prog_2_sched_3_add").show();
    } else {
        $(".vigipool_modal_filtration_prog_2_sched_3").show();
        $(".vigipool_modal_filtration_prog_2_sched_3_add").hide();
    }

    // Scheduling
    // Program 1
    create_program("vigipool_modal_filtration_prog_2", 2, filtration_sched);

    // thermo

    if (program_2_thermo === 0) {
        $(".vigipool_modal_filtration_prog_2_button_thermo_off").addClass("btn-primary");
        $(".vigipool_modal_filtration_prog_2_button_thermo_on").removeClass("btn-primary");
    } else if (program_2_thermo === 1) {
        $(".vigipool_modal_filtration_prog_2_button_thermo_off").removeClass("btn-primary");
        $(".vigipool_modal_filtration_prog_2_button_thermo_on").addClass("btn-primary");
}
}

