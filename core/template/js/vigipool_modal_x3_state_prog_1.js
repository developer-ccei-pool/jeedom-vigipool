function update_vigipool_modal_x3_state_prog_1(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_x3_state_prog_1 /////");

    // Variables

    if (set_sched_value_save === "") {
        var x3_sched = get_value_from_position(eq_modal, "x3_sched");
    } else {
        var x3_sched = set_sched_value_save;
    }

    // Logs

    // console.log("x3_sched = " + x3_sched);

    // Check

    const variables = [x3_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // console.log("x3_sched = " + x3_sched);

    var p1_color = get_value_from_position(eq_modal, "p1_color");

    var programs_number = get_sched_value(x3_sched, "programs_number");
    var program_1_off_on_and_days = get_sched_value(x3_sched, "program_1_off_on_and_days");
    var program_1_bright = get_sched_value(x3_sched, "program_1_bright");
    var program_1_speed = get_sched_value(x3_sched, "program_1_speed");
    var program_1_sched_number = get_sched_value(x3_sched, "program_1_sched_number");
    var program_1_sched_1_begin = get_sched_value(x3_sched, "program_1_sched_1_begin");
    var program_1_sched_1_end = fix_end_dec(get_sched_value(x3_sched, "program_1_sched_1_end"));
    var program_1_sched_2_begin = get_sched_value(x3_sched, "program_1_sched_2_begin");
    var program_1_sched_2_end = fix_end_dec(get_sched_value(x3_sched, "program_1_sched_2_end"));
    var program_1_sched_3_begin = get_sched_value(x3_sched, "program_1_sched_3_begin");
    var program_1_sched_3_end = fix_end_dec(get_sched_value(x3_sched, "program_1_sched_3_end"));
    var program_1_off_on = get_sched_value(x3_sched, "program_1_off_on");
    var program_1_samedi = get_sched_value(x3_sched, "program_1_samedi");
    var program_1_vendredi = get_sched_value(x3_sched, "program_1_vendredi");
    var program_1_jeudi = get_sched_value(x3_sched, "program_1_jeudi");
    var program_1_mercredi = get_sched_value(x3_sched, "program_1_mercredi");
    var program_1_mardi = get_sched_value(x3_sched, "program_1_mardi");
    var program_1_lundi = get_sched_value(x3_sched, "program_1_lundi");
    var program_1_dimanche = get_sched_value(x3_sched, "program_1_dimanche");

    // console.log("programs_number = " + programs_number);
    // console.log("program_1_off_on_and_days = " + program_1_off_on_and_days);
    // console.log("program_1_bright = " + program_1_bright);
    // console.log("program_1_speed = " + program_1_speed);
    // console.log("program_1_sched_number = " + program_1_sched_number);
    // console.log("program_1_sched_1_begin = " + program_1_sched_1_begin);
    // console.log("program_1_sched_1_end = " + program_1_sched_1_end);
    // console.log("program_1_sched_2_begin = " + program_1_sched_2_begin);
    // console.log("program_1_sched_2_end = " + program_1_sched_2_end);
    // console.log("program_1_sched_3_begin = " + program_1_sched_3_begin);
    // console.log("program_1_sched_3_end = " + program_1_sched_3_end);
    // console.log("program_1_off_on = " + program_1_off_on);
    // console.log("program_1_samedi = " + program_1_samedi);
    // console.log("program_1_vendredi = " + program_1_vendredi);
    // console.log("program_1_jeudi = " + program_1_jeudi);
    // console.log("program_1_mercredi = " + program_1_mercredi);
    // console.log("program_1_mardi = " + program_1_mardi);
    // console.log("program_1_lundi = " + program_1_lundi);
    // console.log("program_1_dimanche = " + program_1_dimanche);

    if (isNaN(program_1_sched_1_begin))
        program_1_sched_1_begin = 0;
    if (isNaN(program_1_sched_1_end))
        program_1_sched_1_end = 0;
    if (isNaN(program_1_sched_2_begin))
        program_1_sched_2_begin = 0;
    if (isNaN(program_1_sched_2_end))
        program_1_sched_2_end = 0;
    if (isNaN(program_1_sched_3_begin))
        program_1_sched_3_begin = 0;
    if (isNaN(program_1_sched_3_end))
        program_1_sched_3_end = 0;

    // State

    if (program_1_off_on === 0) {
        $(".vigipool_modal_x3_state_prog_1_button_off").addClass("btn-primary");
        $(".vigipool_modal_x3_state_prog_1_button_on").removeClass("btn-primary");
    } else if (program_1_off_on === 1) {
        $(".vigipool_modal_x3_state_prog_1_button_off").removeClass("btn-primary");
        $(".vigipool_modal_x3_state_prog_1_button_on").addClass("btn-primary");
    }

    // Color picker

    $(".vigipool_modal_x3_state_prog_1_button_color_picker").val(p1_color);

    // Saved colors 
    // Sequences

    if (p1_color === x3_rainbow_value) {
        $(x3_prog_1_rainbow_button).attr("src", x3_rainbow_image_ok);
        // console.log(p1_color + " === " + x3_rainbow_value);
    } else {
        $(x3_prog_1_rainbow_button).attr("src", x3_rainbow_image);
        // console.log(p1_color + " !== " + x3_rainbow_value);
    }
    if (p1_color === x3_fun_value) {
        $(x3_prog_1_fun_button).attr("src", x3_fun_image_ok);
        // console.log(p1_color + " === " + x3_fun_value);
    } else {
        $(x3_prog_1_fun_button).attr("src", x3_fun_image);
        // console.log(p1_color + " !== " + x3_fun_value);
    }
    if (p1_color === x3_ocean_value) {
        $(x3_prog_1_ocean_button).attr("src", x3_ocean_image_ok);
        // console.log(p1_color + " === " + x3_ocean_value);
    } else {
        $(x3_prog_1_ocean_button).attr("src", x3_ocean_image);
        // console.log(p1_color + " !== " + x3_ocean_value);
    }
    if (p1_color === x3_flamme_value) {
        $(x3_prog_1_flamme_button).attr("src", x3_flamme_image_ok);
        // console.log(p1_color + " === " + x3_flamme_value);
    } else {
        $(x3_prog_1_flamme_button).attr("src", x3_flamme_image);
        // console.log(p1_color + " !== " + x3_flamme_value);
    }
    if (p1_color === x3_parade_value) {
        $(x3_prog_1_parade_button).attr("src", x3_parade_image_ok);
        // console.log(p1_color + " === " + x3_parade_value);
    } else {
        $(x3_prog_1_parade_button).attr("src", x3_parade_image);
        // console.log(p1_color + " !== " + x3_parade_value);
    }
    if (p1_color === x3_elegant_value) {
        $(x3_prog_1_elegant_button).attr("src", x3_elegant_image_ok);
        // console.log(p1_color + " === " + x3_elegant_value);
    } else {
        $(x3_prog_1_elegant_button).attr("src", x3_elegant_image);
        // console.log(p1_color + " !== " + x3_elegant_value);
    }
    if (p1_color === x3_horizon_value) {
        $(x3_prog_1_horizon_button).attr("src", x3_horizon_image_ok);
        // console.log(p1_color + " === " + x3_horizon_value);
    } else {
        $(x3_prog_1_horizon_button).attr("src", x3_horizon_image);
        // console.log(p1_color + " !== " + x3_horizon_value);
    }
    if (p1_color === x3_psyche_value) {
        $(x3_prog_1_psyche_button).attr("src", x3_psyche_image_ok);
        // console.log(p1_color + " === " + x3_psyche_value);
    } else {
        $(x3_prog_1_psyche_button).attr("src", x3_psyche_image);
        // console.log(p1_color + " !== " + x3_psyche_value);
    }

    // Schedule 1
    // At
    $("#x3_state_begin_1").html(converter("dec", "time_4", parseInt(program_1_sched_1_begin)));
    $("#myx3_state_begin_1").val(program_1_sched_1_begin);
    // During
    $("#x3_state_end_1").html(converter("dec", "time_4", parseInt(program_1_sched_1_end)));
    $("#myx3_state_end_1").val(program_1_sched_1_end);

    // Schedule 2
    // At
    $("#x3_state_begin_2").html(converter("dec", "time_4", parseInt(program_1_sched_2_begin)));
    $("#myx3_state_begin_2").val(program_1_sched_2_begin);
    // During
    $("#x3_state_end_2").html(converter("dec", "time_4", parseInt(program_1_sched_2_end)));
    $("#myx3_state_end_2").val(program_1_sched_2_end);

    // Schedule 3
    // At
    $("#x3_state_begin_3").html(converter("dec", "time_4", parseInt(program_1_sched_3_begin)));
    $("#myx3_state_begin_3").val(program_1_sched_3_begin);
    // During
    $("#x3_state_end_3").html(converter("dec", "time_4", parseInt(program_1_sched_3_end)));
    $("#myx3_state_end_3").val(program_1_sched_3_end);

    // Brightness
    $("#myx3_bright").val(program_1_bright);

    if (program_1_sched_2_begin === 0 && program_1_sched_2_end === 0) {
        $(".vigipool_modal_x3_state_prog_1_sched_2").hide();
        $(".vigipool_modal_x3_state_prog_1_sched_2_add").show();
    } else {
        $(".vigipool_modal_x3_state_prog_1_sched_2").show();
        $(".vigipool_modal_x3_state_prog_1_sched_2_add").hide();
    }
    if (program_1_sched_3_begin === 0 && program_1_sched_3_end === 0) {
        $(".vigipool_modal_x3_state_prog_1_sched_3").hide();
        $(".vigipool_modal_x3_state_prog_1_sched_3_add").show();
    } else {
        $(".vigipool_modal_x3_state_prog_1_sched_3").show();
        $(".vigipool_modal_x3_state_prog_1_sched_3_add").hide();
    }

    // Speed

    if (is_sequence(p1_color)) {
        $('.vigipool_modal_x3_state_prog_1_speed').show();
        $('.vigipool_modal_x3_state_prog_1_speed_title').show();
    } else {
        $('.vigipool_modal_x3_state_prog_1_speed').hide();
        $('.vigipool_modal_x3_state_prog_1_speed_title').hide();
    }

    var background_color_off = "#dbdbdb";
    var color_off = "#7e7e7e";
    var background_color_on = "#758f8d";
    var color_on = "white";

    $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(2) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(2) > p').css("color", color_off);
    $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(3) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(3) > p').css("color", color_off);
    $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(4) > p').css("background-color", background_color_off);
    $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(4) > p').css("color", color_off);

    if (program_1_speed === 50) {
        $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(2) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(2) > p').css("color", color_on);
    } else if (program_1_speed === 100) {
        $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(3) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(3) > p').css("color", color_on);
    } else if (program_1_speed === 150) {
        $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(4) > p').css("background-color", background_color_on);
        $('.vigipool_modal_x3_state_prog_1_speed > th:nth-child(4) > p').css("color", color_on);
    }

    // Scheduling
    // Program 1
    create_program("vigipool_modal_x3_state_prog_1", 1, x3_sched, p1_color);

}


