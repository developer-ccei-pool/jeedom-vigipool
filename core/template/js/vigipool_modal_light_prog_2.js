function update_vigipool_modal_light_prog_2(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_light_prog_2 /////");

    // Variables

    if (set_sched_value_save === "") {
        var light_sched = get_value_from_position(eq_modal, "light_sched");
    } else {
        var light_sched = set_sched_value_save;
    }

    // Logs

    // console.log("light_sched = " + light_sched);

    // Check

    const variables = [light_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display
    
    var p2_color = get_sched_value(light_sched, "program_2_color");

    var programs_number = get_sched_value(light_sched, "programs_number");
    var program_2_off_on_and_days = get_sched_value(light_sched, "program_2_off_on_and_days");
    var program_2_bright = get_sched_value(light_sched, "program_2_bright");
    var program_2_speed = get_sched_value(light_sched, "program_2_speed");
    var program_2_sched_number = get_sched_value(light_sched, "program_2_sched_number");
    var program_2_sched_1_begin = get_sched_value(light_sched, "program_2_sched_1_begin");
    var program_2_sched_1_end = fix_end_dec(get_sched_value(light_sched, "program_2_sched_1_end"));
    var program_2_sched_2_begin = get_sched_value(light_sched, "program_2_sched_2_begin");
    var program_2_sched_2_end = fix_end_dec(get_sched_value(light_sched, "program_2_sched_2_end"));
    var program_2_sched_3_begin = get_sched_value(light_sched, "program_2_sched_3_begin");
    var program_2_sched_3_end = fix_end_dec(get_sched_value(light_sched, "program_2_sched_3_end"));
    var program_2_off_on = get_sched_value(light_sched, "program_2_off_on");
    var program_2_samedi = get_sched_value(light_sched, "program_2_samedi");
    var program_2_vendredi = get_sched_value(light_sched, "program_2_vendredi");
    var program_2_jeudi = get_sched_value(light_sched, "program_2_jeudi");
    var program_2_mercredi = get_sched_value(light_sched, "program_2_mercredi");
    var program_2_mardi = get_sched_value(light_sched, "program_2_mardi");
    var program_2_lundi = get_sched_value(light_sched, "program_2_lundi");
    var program_2_dimanche = get_sched_value(light_sched, "program_2_dimanche");

    // Fix for recovered brightness and speed

    program_2_bright_speed = converter("dec", "bin", program_2_speed);

    if (program_2_bright_speed !== undefined) {
        var bright_1 = parseInt(program_2_bright_speed[7]);
        var bright_2 = parseInt(program_2_bright_speed[6]);
        var speed_1 = parseInt(program_2_bright_speed[5]);
        var speed_2 = parseInt(program_2_bright_speed[4]);
        var speed_3 = parseInt(program_2_bright_speed[3]);
        var unused_1 = parseInt(program_2_bright_speed[2]);
        var unused_2 = parseInt(program_2_bright_speed[1]);
        var unused_3 = parseInt(program_2_bright_speed[0]);

        if (bright_2 === 0 && bright_1 === 0)
            program_2_bright = 0;
        if (bright_2 === 0 && bright_1 === 1)
            program_2_bright = 1;
        if (bright_2 === 1 && bright_1 === 0)
            program_2_bright = 2;
        if (bright_2 === 1 && bright_1 === 1)
            program_2_bright = 3;

        if (speed_3 === 0 && speed_2 === 0 && speed_1 === 0)
            program_2_speed = 0;
        if (speed_3 === 0 && speed_2 === 0 && speed_1 === 1)
            program_2_speed = 1;
        if (speed_3 === 0 && speed_2 === 1 && speed_1 === 0)
            program_2_speed = 2;
        if (speed_3 === 1 && speed_2 === 0 && speed_1 === 0)
            program_2_speed = 3;
    }

//    console.log("p2_color = " + p2_color);
//    console.log("programs_number = " + programs_number);
//    console.log("program_2_off_on_and_days = " + program_2_off_on_and_days);
//    console.log("program_2_bright = " + program_2_bright);
//    console.log("program_2_speed = " + program_2_speed);
//    console.log("program_2_sched_number = " + program_2_sched_number);
//    console.log("program_2_sched_1_begin = " + program_2_sched_1_begin);
//    console.log("program_2_sched_1_end = " + program_2_sched_1_end);
//    console.log("program_2_sched_2_begin = " + program_2_sched_2_begin);
//    console.log("program_2_sched_2_end = " + program_2_sched_2_end);
//    console.log("program_2_sched_3_begin = " + program_2_sched_3_begin);
//    console.log("program_2_sched_3_end = " + program_2_sched_3_end);
//    console.log("program_2_off_on = " + program_2_off_on);
//    console.log("program_2_samedi = " + program_2_samedi);
//    console.log("program_2_vendredi = " + program_2_vendredi);
//    console.log("program_2_jeudi = " + program_2_jeudi);
//    console.log("program_2_mercredi = " + program_2_mercredi);
//    console.log("program_2_mardi = " + program_2_mardi);
//    console.log("program_2_lundi = " + program_2_lundi);
//    console.log("program_2_dimanche = " + program_2_dimanche);

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

    // State

    if (program_2_off_on === 0) {
        $(".vigipool_modal_light_prog_2_button_off").addClass("btn-primary");
        $(".vigipool_modal_light_prog_2_button_on").removeClass("btn-primary");
    } else if (program_2_off_on === 1) {
        $(".vigipool_modal_light_prog_2_button_off").removeClass("btn-primary");
        $(".vigipool_modal_light_prog_2_button_on").addClass("btn-primary");
    }

    // light_code

    $(document).ready(function () {
        create_ui_tild_light("vigipool_modal_light_prog_2", p2_color);
    });

    // Schedule 1
    // At
    $("#light_begin_1").html(converter("dec", "time_4", parseInt(program_2_sched_1_begin)));
    $("#mylight_begin_1").val(program_2_sched_1_begin);
    // During
    $("#light_end_1").html(converter("dec", "time_4", parseInt(program_2_sched_1_end)));
    $("#mylight_end_1").val(program_2_sched_1_end);

    // Schedule 2
    // At
    $("#light_begin_2").html(converter("dec", "time_4", parseInt(program_2_sched_2_begin)));
    $("#mylight_begin_2").val(program_2_sched_2_begin);
    // During
    $("#light_end_2").html(converter("dec", "time_4", parseInt(program_2_sched_2_end)));
    $("#mylight_end_2").val(program_2_sched_2_end);

    // Schedule 3
    // At
    $("#light_begin_3").html(converter("dec", "time_4", parseInt(program_2_sched_3_begin)));
    $("#mylight_begin_3").val(program_2_sched_3_begin);
    // During
    $("#light_end_3").html(converter("dec", "time_4", parseInt(program_2_sched_3_end)));
    $("#mylight_end_3").val(program_2_sched_3_end);

    if (program_2_sched_2_begin === 0 && program_2_sched_2_end === 0) {
        $(".vigipool_modal_light_prog_2_sched_2").hide();
        $(".vigipool_modal_light_prog_2_sched_2_add").show();
    } else {
        $(".vigipool_modal_light_prog_2_sched_2").show();
        $(".vigipool_modal_light_prog_2_sched_2_add").hide();
    }
    if (program_2_sched_3_begin === 0 && program_2_sched_3_end === 0) {
        $(".vigipool_modal_light_prog_2_sched_3").hide();
        $(".vigipool_modal_light_prog_2_sched_3_add").show();
    } else {
        $(".vigipool_modal_light_prog_2_sched_3").show();
        $(".vigipool_modal_light_prog_2_sched_3_add").hide();
    }

    // Brightness
    create_ui_bright("vigipool_modal_light_prog_2", program_2_bright);

    // Speed
    create_ui_speed("vigipool_modal_light_prog_2", program_2_speed, p2_color);

    // Scheduling
    // Program 1
    create_program("vigipool_modal_light_prog_2", 2, light_sched, p2_color);

}



