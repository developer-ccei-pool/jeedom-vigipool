function update_vigipool_modal_light_prog_1(set_sched_value_save = "") {

    // console.log("///// update_vigipool_modal_all /////");

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

    // Retrieval of sub-variables in the variable

    var p1_color = get_sched_value(light_sched, "program_1_color");

    var programs_number = get_sched_value(light_sched, "programs_number");
    var program_1_off_on_and_days = get_sched_value(light_sched, "program_1_off_on_and_days");
    var program_1_bright = get_sched_value(light_sched, "program_1_bright");
    var program_1_speed = get_sched_value(light_sched, "program_1_speed");
    var program_1_sched_number = get_sched_value(light_sched, "program_1_sched_number");
    var program_1_sched_1_begin = get_sched_value(light_sched, "program_1_sched_1_begin");
    var program_1_sched_1_end = fix_end_dec(get_sched_value(light_sched, "program_1_sched_1_end"));
    var program_1_sched_2_begin = get_sched_value(light_sched, "program_1_sched_2_begin");
    var program_1_sched_2_end = fix_end_dec(get_sched_value(light_sched, "program_1_sched_2_end"));
    var program_1_sched_3_begin = get_sched_value(light_sched, "program_1_sched_3_begin");
    var program_1_sched_3_end = fix_end_dec(get_sched_value(light_sched, "program_1_sched_3_end"));
    var program_1_off_on = get_sched_value(light_sched, "program_1_off_on");
    var program_1_samedi = get_sched_value(light_sched, "program_1_samedi");
    var program_1_vendredi = get_sched_value(light_sched, "program_1_vendredi");
    var program_1_jeudi = get_sched_value(light_sched, "program_1_jeudi");
    var program_1_mercredi = get_sched_value(light_sched, "program_1_mercredi");
    var program_1_mardi = get_sched_value(light_sched, "program_1_mardi");
    var program_1_lundi = get_sched_value(light_sched, "program_1_lundi");
    var program_1_dimanche = get_sched_value(light_sched, "program_1_dimanche");

    // Fix for recovered brightness and speed

    program_1_bright_speed = converter("dec", "bin", program_1_speed);

    if (program_1_bright_speed !== undefined) {
        var bright_1 = parseInt(program_1_bright_speed[7]);
        var bright_2 = parseInt(program_1_bright_speed[6]);
        var speed_1 = parseInt(program_1_bright_speed[5]);
        var speed_2 = parseInt(program_1_bright_speed[4]);
        var speed_3 = parseInt(program_1_bright_speed[3]);
        var unused_1 = parseInt(program_1_bright_speed[2]);
        var unused_2 = parseInt(program_1_bright_speed[1]);
        var unused_3 = parseInt(program_1_bright_speed[0]);

        if (bright_2 === 0 && bright_1 === 0)
            program_1_bright = 0;
        if (bright_2 === 0 && bright_1 === 1)
            program_1_bright = 1;
        if (bright_2 === 1 && bright_1 === 0)
            program_1_bright = 2;
        if (bright_2 === 1 && bright_1 === 1)
            program_1_bright = 3;

        if (speed_3 === 0 && speed_2 === 0 && speed_1 === 0)
            program_1_speed = 0;
        if (speed_3 === 0 && speed_2 === 0 && speed_1 === 1)
            program_1_speed = 1;
        if (speed_3 === 0 && speed_2 === 1 && speed_1 === 0)
            program_1_speed = 2;
        if (speed_3 === 1 && speed_2 === 0 && speed_1 === 0)
            program_1_speed = 3;
    }

    // console.log("p1_color = " + p1_color);
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
        $(".vigipool_modal_light_prog_1_button_off").addClass("btn-primary");
        $(".vigipool_modal_light_prog_1_button_on").removeClass("btn-primary");
    } else if (program_1_off_on === 1) {
        $(".vigipool_modal_light_prog_1_button_off").removeClass("btn-primary");
        $(".vigipool_modal_light_prog_1_button_on").addClass("btn-primary");
    }

    // light_code

    $(document).ready(function () {
        switch (p1_color) {
            case 0:
                $(".vigipool_modal_light_prog_1_warm_button > img").show();
                $(".vigipool_modal_light_prog_1_warm_label").css("opacity", "50%");
                break;
            case 1:
                $(".vigipool_modal_light_prog_1_cold_button > img").show();
                $(".vigipool_modal_light_prog_1_cold_label").css("opacity", "50%");
                break;
            case 2:
                $(".vigipool_modal_light_prog_1_blue_button > img").show();
                $(".vigipool_modal_light_prog_1_blue_label").css("opacity", "50%");
                break;
            case 3:
                $(".vigipool_modal_light_prog_1_lagoon_button > img").show();
                $(".vigipool_modal_light_prog_1_lagoon_label").css("opacity", "50%");
                break;
            case 4:
                $(".vigipool_modal_light_prog_1_cyan_button > img").show();
                $(".vigipool_modal_light_prog_1_cyan_label").css("opacity", "50%");
                break;
            case 10:
                $(".vigipool_modal_light_prog_1_green_button > img").show();
                $(".vigipool_modal_light_prog_1_green_label").css("opacity", "50%");
                break;
            case 5:
                $(".vigipool_modal_light_prog_1_purple_button > img").show();
                $(".vigipool_modal_light_prog_1_purple_label").css("opacity", "50%");
                break;
            case 6:
                $(".vigipool_modal_light_prog_1_magenta_button > img").show();
                $(".vigipool_modal_light_prog_1_magenta_label").css("opacity", "50%");
                break;
            case 7:
                $(".vigipool_modal_light_prog_1_pink_button > img").show();
                $(".vigipool_modal_light_prog_1_pink_label").css("opacity", "50%");
                break;
            case 8:
                $(".vigipool_modal_light_prog_1_red_button > img").show();
                $(".vigipool_modal_light_prog_1_red_label").css("opacity", "50%");
                break;
            case 9:
                $(".vigipool_modal_light_prog_1_orange_button > img").show();
                $(".vigipool_modal_light_prog_1_orange_label").css("opacity", "50%");
                break;
            case 11:
                $(".vigipool_modal_light_prog_1_favorite_button > img").show();
                $(".vigipool_modal_light_prog_1_favorite_label").css("opacity", "50%");
                break;
            case 16:
                $(".vigipool_modal_light_prog_1_gradiant_button > img").css("opacity", "100%");
                $(".vigipool_modal_light_prog_1_gradiant_label").css("opacity", "50%");
                break;
            case 17:
                $(".vigipool_modal_light_prog_1_rainbow_button > img").css("opacity", "100%");
                $(".vigipool_modal_light_prog_1_rainbow_label").css("opacity", "50%");
                break;
            case 18:
                $(".vigipool_modal_light_prog_1_parade_button > img").css("opacity", "100%");
                $(".vigipool_modal_light_prog_1_parade_label").css("opacity", "50%");
                break;
            case 19:
                $(".vigipool_modal_light_prog_1_techno_button > img").css("opacity", "100%");
                $(".vigipool_modal_light_prog_1_techno_label").css("opacity", "50%");
                break;
            case 20:
                $(".vigipool_modal_light_prog_1_horizon_button > img").css("opacity", "100%");
                $(".vigipool_modal_light_prog_1_horizon_label").css("opacity", "50%");
                break;
            case 21:
                $(".vigipool_modal_light_prog_1_random_button > img").css("opacity", "100%");
                $(".vigipool_modal_light_prog_1_random_label").css("opacity", "50%");
                break;
            case 22:
                $(".vigipool_modal_light_prog_1_magical_button > img").css("opacity", "100%");
                $(".vigipool_modal_light_prog_1_magical_label").css("opacity", "50%");
                break;
        }
    });

    // Schedule 1
    // At
    $("#light_begin_1").html(converter("dec", "time_4", parseInt(program_1_sched_1_begin)));
    $("#mylight_begin_1").val(program_1_sched_1_begin);
    // During
    $("#light_end_1").html(converter("dec", "time_4", parseInt(program_1_sched_1_end)));
    $("#mylight_end_1").val(program_1_sched_1_end);

    // Schedule 2
    // At
    $("#light_begin_2").html(converter("dec", "time_4", parseInt(program_1_sched_2_begin)));
    $("#mylight_begin_2").val(program_1_sched_2_begin);
    // During
    $("#light_end_2").html(converter("dec", "time_4", parseInt(program_1_sched_2_end)));
    $("#mylight_end_2").val(program_1_sched_2_end);

    // Schedule 3
    // At
    $("#light_begin_3").html(converter("dec", "time_4", parseInt(program_1_sched_3_begin)));
    $("#mylight_begin_3").val(program_1_sched_3_begin);
    // During
    $("#light_end_3").html(converter("dec", "time_4", parseInt(program_1_sched_3_end)));
    $("#mylight_end_3").val(program_1_sched_3_end);

    if (program_1_sched_2_begin === 0 && program_1_sched_2_end === 0) {
        $(".vigipool_modal_light_prog_1_sched_2").hide();
        $(".vigipool_modal_light_prog_1_sched_2_add").show();
    } else {
        $(".vigipool_modal_light_prog_1_sched_2").show();
        $(".vigipool_modal_light_prog_1_sched_2_add").hide();
    }
    if (program_1_sched_3_begin === 0 && program_1_sched_3_end === 0) {
        $(".vigipool_modal_light_prog_1_sched_3").hide();
        $(".vigipool_modal_light_prog_1_sched_3_add").show();
    } else {
        $(".vigipool_modal_light_prog_1_sched_3").show();
        $(".vigipool_modal_light_prog_1_sched_3_add").hide();
    }

    // Brightness
    var background_color_off = "#dbdbdb";
    var color_off = "#7e7e7e";
    var background_color_on = "#758f8d";
    var color_on = "white";

    $('.vigipool_modal_light_prog_1_bright > th:nth-child(2) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_prog_1_bright > th:nth-child(2) > p').css("color", color_off);
    $('.vigipool_modal_light_prog_1_bright > th:nth-child(3) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_prog_1_bright > th:nth-child(3) > p').css("color", color_off);
    $('.vigipool_modal_light_prog_1_bright > th:nth-child(4) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_prog_1_bright > th:nth-child(4) > p').css("color", color_off);
    $('.vigipool_modal_light_prog_1_bright > th:nth-child(5) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_prog_1_bright > th:nth-child(5) > p').css("color", color_off);

    if (program_1_bright === 0) {
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(2) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(2) > p').css("color", color_on);
    } else if (program_1_bright === 1) {
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(3) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(3) > p').css("color", color_on);
    } else if (program_1_bright === 2) {
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(4) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(4) > p').css("color", color_on);
    } else if (program_1_bright === 3) {
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(5) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_prog_1_bright > th:nth-child(5) > p').css("color", color_on);
    }

    // Speed
    $(document).ready(function () {
        if (16 <= p1_color) {
            $('.vigipool_modal_light_prog_1_speed').show();
            $('.vigipool_modal_light_prog_1_speed_title').show();
        } else {
            $('.vigipool_modal_light_prog_1_speed').hide();
            $('.vigipool_modal_light_prog_1_speed_title').hide();
        }
    });

    $('.vigipool_modal_light_prog_1_speed > th:nth-child(2) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_prog_1_speed > th:nth-child(2) > p').css("color", color_off);
    $('.vigipool_modal_light_prog_1_speed > th:nth-child(3) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_prog_1_speed > th:nth-child(3) > p').css("color", color_off);
    $('.vigipool_modal_light_prog_1_speed > th:nth-child(4) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_prog_1_speed > th:nth-child(4) > p').css("color", color_off);

    if (program_1_speed === 1) {
        $('.vigipool_modal_light_prog_1_speed > th:nth-child(2) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_prog_1_speed > th:nth-child(2) > p').css("color", color_on);
    } else if (program_1_speed === 2) {
        $('.vigipool_modal_light_prog_1_speed > th:nth-child(3) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_prog_1_speed > th:nth-child(3) > p').css("color", color_on);
    } else if (program_1_speed === 3) {
        $('.vigipool_modal_light_prog_1_speed > th:nth-child(4) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_prog_1_speed > th:nth-child(4) > p').css("color", color_on);
    }

    // Scheduling
    // Program 1
    create_program("vigipool_modal_light_prog_1", 1, light_sched, p1_color);

}

