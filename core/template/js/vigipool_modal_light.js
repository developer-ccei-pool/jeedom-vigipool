function update_vigipool_modal_light() {

    // console.log("////////// update_vigipool_modal_light //////////");

    // Variables

    var light_state = get_value_from_position(eq_modal, "light_state");
    var light_code = get_value_from_position(eq_modal, "light_code");
    var light_bright = get_value_from_position(eq_modal, "light_bright");
    var light_speed = get_value_from_position(eq_modal, "light_speed");
    var light_sched = get_value_from_position(eq_modal, "light_sched");

    // Logs

    // console.log("light_state = " + light_state);
    // console.log("light_code = " + light_code);
    // console.log("light_bright = " + light_bright);
    // console.log("light_speed = " + light_speed);
    // console.log("light_sched = " + light_sched);

    // Check

    const variables = [light_state, light_code, light_bright, light_speed, light_sched];

    if (variable_check(variables)) {
        // console.log("go");
    } else {
        // console.log("no go");
        return;
    }

    // Display

    // light_state

    if (light_state === 0) {
        $(".vigipool_modal_light_button_off").addClass("btn-primary");
        $(".vigipool_modal_light_button_on").removeClass("btn-primary");
    } else if (light_state === 1) {
        $(".vigipool_modal_light_button_off").removeClass("btn-primary");
        $(".vigipool_modal_light_button_on").addClass("btn-primary");
    }

    // light_code

    create_ui_tild_light("vigipool_modal_light", light_code);

    // Timer

    if (light_state === 3) {
        $(".vigipool_modal_light_button_timer_off").removeClass("btn-primary");
        $(".vigipool_modal_light_button_timer_on").addClass("btn-primary");
    } else {
        $(".vigipool_modal_light_button_timer_off").addClass("btn-primary");
        $(".vigipool_modal_light_button_timer_on").removeClass("btn-primary");
    }

    // light_bright

    var background_color_off = "#dbdbdb";
    var color_off = "#7e7e7e";
    var background_color_on = "#758f8d";
    var color_on = "white";

    $(document).ready(function () {
        $('.vigipool_modal_light_bright > th:nth-child(2) > p').css("background-color", background_color_off);
        $('.vigipool_modal_light_bright > th:nth-child(2) > p').css("color", color_off);
        $('.vigipool_modal_light_bright > th:nth-child(3) > p').css("background-color", background_color_off);
        $('.vigipool_modal_light_bright > th:nth-child(3) > p').css("color", color_off);
        $('.vigipool_modal_light_bright > th:nth-child(4) > p').css("background-color", background_color_off);
        $('.vigipool_modal_light_bright > th:nth-child(4) > p').css("color", color_off);
        $('.vigipool_modal_light_bright > th:nth-child(5) > p').css("background-color", background_color_off);
        $('.vigipool_modal_light_bright > th:nth-child(5) > p').css("color", color_off);

        if (light_bright === 0) {
            $('.vigipool_modal_light_bright > th:nth-child(2) > p').css("background-color", background_color_on);
            $('.vigipool_modal_light_bright > th:nth-child(2) > p').css("color", color_on);
        } else if (light_bright === 1) {
            $('.vigipool_modal_light_bright > th:nth-child(3) > p').css("background-color", background_color_on);
            $('.vigipool_modal_light_bright > th:nth-child(3) > p').css("color", color_on);
        } else if (light_bright === 2) {
            $('.vigipool_modal_light_bright > th:nth-child(4) > p').css("background-color", background_color_on);
            $('.vigipool_modal_light_bright > th:nth-child(4) > p').css("color", color_on);
        } else if (light_bright === 3) {
            $('.vigipool_modal_light_bright > th:nth-child(5) > p').css("background-color", background_color_on);
            $('.vigipool_modal_light_bright > th:nth-child(5) > p').css("color", color_on);
        }
    });

    // light_speed

    if (light_code > 11) {
        $('.vigipool_modal_light_speed').eq(eq).show();
        $('.vigipool_modal_light_speed_title').eq(eq).show();
    } else {
        $('.vigipool_modal_light_speed').eq(eq).hide();
        $('.vigipool_modal_light_speed_title').eq(eq).hide();
    }

    $('.vigipool_modal_light_speed > th:nth-child(2) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_speed > th:nth-child(2) > p').css("color", color_off);
    $('.vigipool_modal_light_speed > th:nth-child(3) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_speed > th:nth-child(3) > p').css("color", color_off);
    $('.vigipool_modal_light_speed > th:nth-child(4) > p').css("background-color", background_color_off);
    $('.vigipool_modal_light_speed > th:nth-child(4) > p').css("color", color_off);

    if (light_speed === 0) {
        $('.vigipool_modal_light_speed > th:nth-child(2) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_speed > th:nth-child(2) > p').css("color", color_on);
    } else if (light_speed === 1) {
        $('.vigipool_modal_light_speed > th:nth-child(3) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_speed > th:nth-child(3) > p').css("color", color_on);
    } else if (light_speed === 2) {
        $('.vigipool_modal_light_speed > th:nth-child(4) > p').css("background-color", background_color_on);
        $('.vigipool_modal_light_speed > th:nth-child(4) > p').css("color", color_on);
    }

    // light_sched
    var program_1_color = get_sched_value(light_sched, "program_1_color");
    var program_2_color = get_sched_value(light_sched, "program_2_color");
    // console.log("program_1_color = " + program_1_color);
    // console.log("program_2_color = " + program_2_color);
    create_program("vigipool_modal_light", 1, light_sched, program_1_color);
    create_program("vigipool_modal_light", 2, light_sched, program_2_color);
}

function fix_duration_bug(programmation_1_duration, hex)
{
    if (programmation_1_duration === "error time 4") {
        var dec = converter("hex", "dec", hex);
        dec = dec - 128;
        var time_4 = converter("dec", "time_4", dec);
        return time_4;
    } else {
        return programmation_1_duration;
    }
}