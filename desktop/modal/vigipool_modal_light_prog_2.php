<link rel="stylesheet" href="/plugins/vigipool/core/template/css/vigipool_modal_light_prog_2.css">

<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("save"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_modal_light_prog_2_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_light_prog_2_button_back"><?php get_text("back"); ?></button>

    <?php create_ui_on_off("vigipool_modal_light_prog_2"); ?>

    <?php create_ui_tild_light("vigipool_modal_light_prog_2") ?>

    <h3><?php get_text("select_the_start_time_and_duration_of_the_program"); ?></h3>

    <h4><?php get_text("schedule"); ?> 1</h4>
    <h4><?php get_text("at"); ?></h4>
    <?php create_slider("vigipool_modal_light_prog_2_sched_1_begin", 0, 24 * 4); ?>
    <h4><?php get_text("during"); ?></h4>
    <?php create_slider("vigipool_modal_light_prog_2_sched_1_end", 0, 24 * 4); ?>

    <button type="button" class="transition btn btn-light vigipool_modal_light_prog_2_sched_2_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_light_prog_2_sched_2">
        <h4><?php get_text("schedule"); ?> 2</h4>
        <h4><?php get_text("at"); ?></h4>
        <?php create_slider("vigipool_modal_light_prog_2_sched_2_begin", 0, 24 * 4); ?>
        <h4><?php get_text("during"); ?></h4>
        <?php create_slider("vigipool_modal_light_prog_2_sched_2_end", 0, 24 * 4); ?>
    </div>

    <button type="button" class="transition btn btn-light vigipool_modal_light_prog_2_sched_3_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_light_prog_2_sched_3">
        <h4><?php get_text("schedule"); ?> 3</h4>
        <h4><?php get_text("at"); ?></h4>
        <?php create_slider("vigipool_modal_light_prog_2_sched_3_begin", 0, 24 * 4); ?>
        <h4><?php get_text("during"); ?></h4>
        <?php create_slider("vigipool_modal_light_prog_2_sched_3_end", 0, 24 * 4); ?>
    </div>

    <?php create_ui_bright("vigipool_modal_light_prog_2"); ?>

    <?php create_ui_speed("vigipool_modal_light_prog_2"); ?>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program("vigipool_modal_light_prog_2", 2); ?>

    <h3><?php get_text("save"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_modal_light_prog_2_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_light_prog_2_button_back"><?php get_text("back"); ?></button>

</div>

<script>
    // Common

    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    // Save

    $(".vigipool_modal_light_prog_2_button_save").click(function () {
        quick_send("s44_w", "light_sched", "info", "desired", set_light_sched_value_save);
    });
    access_modal(".vigipool_modal_light_prog_2_button_back", "vigipool_modal_light", 0);
    access_modal(".vigipool_modal_light_prog_2_button_back", "vigipool_modal_light", 1);

    // Off On

    $(".vigipool_modal_light_prog_2_button_off").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }

        var new_program_2_off_on_and_days = get_sched_value(light_sched, "program_2_off_on_and_days");
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        new_program_2_off_on_and_days = converter("dec", "bin", new_program_2_off_on_and_days);
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        var program_off_on = 0;
        var program_samedi = parseInt(new_program_2_off_on_and_days[1]);
        var program_vendredi = parseInt(new_program_2_off_on_and_days[2]);
        var program_jeudi = parseInt(new_program_2_off_on_and_days[3]);
        var program_mercredi = parseInt(new_program_2_off_on_and_days[4]);
        var program_mardi = parseInt(new_program_2_off_on_and_days[5]);
        var program_lundi = parseInt(new_program_2_off_on_and_days[6]);
        var program_dimanche = parseInt(new_program_2_off_on_and_days[7]);

        new_program_2_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        new_program_2_off_on_and_days = converter("bin", "dec", new_program_2_off_on_and_days);
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        var new_light_sched = set_light_sched_value("prog_2_off_on_and_days", new_program_2_off_on_and_days);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_button_on").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }

        var new_program_2_off_on_and_days = get_sched_value(light_sched, "program_2_off_on_and_days");
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        new_program_2_off_on_and_days = converter("dec", "bin", new_program_2_off_on_and_days);
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        var program_off_on = 1;
        var program_samedi = parseInt(new_program_2_off_on_and_days[1]);
        var program_vendredi = parseInt(new_program_2_off_on_and_days[2]);
        var program_jeudi = parseInt(new_program_2_off_on_and_days[3]);
        var program_mercredi = parseInt(new_program_2_off_on_and_days[4]);
        var program_mardi = parseInt(new_program_2_off_on_and_days[5]);
        var program_lundi = parseInt(new_program_2_off_on_and_days[6]);
        var program_dimanche = parseInt(new_program_2_off_on_and_days[7]);

        new_program_2_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        new_program_2_off_on_and_days = converter("bin", "dec", new_program_2_off_on_and_days);
        console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

        var new_light_sched = set_light_sched_value("prog_2_off_on_and_days", new_program_2_off_on_and_days);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });

    // Color
    
    create_ui_tild_light("vigipool_modal_light_prog_2");

    var id_warm = 0;
    var id_cold = 1;
    var id_blue = 2;
    var id_lagoon = 3;
    var id_cyan = 4;
    var id_green = 10;
    var id_purple = 5;
    var id_magenta = 6;
    var id_pink = 7;
    var id_red = 8;
    var id_orange = 9;
    var id_gradiant = 16;
    var id_rainbow = 17;
    var id_parade = 18;
    var id_techno = 19;
    var id_horizon = 20;
    var id_random = 21;
    var id_magical = 22;
    var id_favorite = 11;

    $(".vigipool_modal_light_prog_2_warm_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_warm);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_cold_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_cold);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_blue_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_blue);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_lagoon_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_lagoon);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_cyan_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_cyan);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_green_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_green);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_purple_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_purple);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_magenta_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_magenta);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_pink_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_pink);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_red_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_red);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_orange_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_orange);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_favorite_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_favorite);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_gradiant_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_gradiant);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_rainbow_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_rainbow);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_parade_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_parade);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_techno_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_techno);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_horizon_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_horizon);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_random_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_random);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_magical_button").click(function () {
        var new_light_sched = set_light_sched_value("prog_2_bright", id_magical);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });

    // Schedule

    var light_sched = get_value_from_position(eq_modal, "light_sched");
    console.log("light_sched = " + light_sched);

    var id = "vigipool_modal_light_prog_2_sched_1_begin";
    var init_value = get_sched_value(light_sched, "program_2_sched_1_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_prog_2_sched_1_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_light_prog_2_sched_1_end";
    var init_value = fix_end_dec(get_sched_value(light_sched, "program_2_sched_1_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_prog_2_sched_1_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_light_prog_2_sched_2_begin";
    var init_value = get_sched_value(light_sched, "program_2_sched_2_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_prog_2_sched_2_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_light_prog_2_sched_2_end";
    var init_value = fix_end_dec(get_sched_value(light_sched, "program_2_sched_2_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_prog_2_sched_2_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_light_prog_2_sched_3_begin";
    var init_value = get_sched_value(light_sched, "program_2_sched_3_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_prog_2_sched_3_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_light_prog_2_sched_3_end";
    var init_value = fix_end_dec(get_sched_value(light_sched, "program_2_sched_3_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_prog_2_sched_3_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    $(".vigipool_modal_light_prog_2_sched_2_add").click(function () {
        $(".vigipool_modal_light_prog_2_sched_2_add").hide();
        $(".vigipool_modal_light_prog_2_sched_2").show();
    });
    $(".vigipool_modal_light_prog_2_sched_3_add").click(function () {
        $(".vigipool_modal_light_prog_2_sched_3_add").hide();
        $(".vigipool_modal_light_prog_2_sched_3").show();
    });

    // Bright
    // quick_assign('.vigipool_modal_light_prog_2_light_bright > th:nth-child(2) > p', "u8_w", "light_bright", "info", "desired", 0);
    // quick_assign('.vigipool_modal_light_prog_2_light_bright > th:nth-child(3) > p', "u8_w", "light_bright", "info", "desired", 1);
    // quick_assign('.vigipool_modal_light_prog_2_light_bright > th:nth-child(4) > p', "u8_w", "light_bright", "info", "desired", 2);
    // quick_assign('.vigipool_modal_light_prog_2_light_bright > th:nth-child(5) > p', "u8_w", "light_bright", "info", "desired", 3);

    $(".vigipool_modal_light_prog_2_bright > th:nth-child(2) > p").click(function () {

        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }

        console.log("light_sched = " + light_sched);


        var new_program_2_bright_speed = get_sched_value(light_sched, "program_2_speed");
        console.log("new_program_2_bright_speed = " + new_program_2_bright_speed);

        new_program_2_bright_speed = converter("dec", "bin", new_program_2_bright_speed);
        console.log("new_program_2_bright_speed = " + new_program_2_bright_speed);

        var bright_1 = 0;
        var bright_2 = 0;
        var speed_1 = parseInt(new_program_2_bright_speed[5]);
        var speed_2 = parseInt(new_program_2_bright_speed[4]);
        var speed_3 = parseInt(new_program_2_bright_speed[3]);
        var unused_1 = 0;
        var unused_2 = 0;
        var unused_3 = 0;

        new_program_2_bright_speed = `${unused_3}${unused_2}${unused_1}${speed_3}${speed_2}${speed_1}${bright_2}${bright_1}`;
        console.log("new_program_2_bright_speed = " + new_program_2_bright_speed);

        new_program_2_bright_speed = converter("bin", "dec", new_program_2_bright_speed);
        console.log("new_program_2_bright_speed = " + new_program_2_bright_speed);

        var new_light_sched = set_light_sched_value("prog_2_speed", new_program_2_bright_speed);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_bright > th:nth-child(3) > p").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }
        var new_program_2_bright_speed = get_sched_value(light_sched, "program_2_speed");
        new_program_2_bright_speed = converter("dec", "bin", new_program_2_bright_speed);
        var bright_1 = 1;
        var bright_2 = 0;
        var speed_1 = parseInt(new_program_2_bright_speed[5]);
        var speed_2 = parseInt(new_program_2_bright_speed[4]);
        var speed_3 = parseInt(new_program_2_bright_speed[3]);
        var unused_1 = 0;
        var unused_2 = 0;
        var unused_3 = 0;
        new_program_2_bright_speed = `${unused_3}${unused_2}${unused_1}${speed_3}${speed_2}${speed_1}${bright_2}${bright_1}`;
        new_program_2_bright_speed = converter("bin", "dec", new_program_2_bright_speed);
        var new_light_sched = set_light_sched_value("prog_2_speed", new_program_2_bright_speed);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_bright > th:nth-child(4) > p").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }
        var new_program_2_bright_speed = get_sched_value(light_sched, "program_2_speed");
        new_program_2_bright_speed = converter("dec", "bin", new_program_2_bright_speed);
        var bright_1 = 0;
        var bright_2 = 1;
        var speed_1 = parseInt(new_program_2_bright_speed[5]);
        var speed_2 = parseInt(new_program_2_bright_speed[4]);
        var speed_3 = parseInt(new_program_2_bright_speed[3]);
        var unused_1 = 0;
        var unused_2 = 0;
        var unused_3 = 0;
        new_program_2_bright_speed = `${unused_3}${unused_2}${unused_1}${speed_3}${speed_2}${speed_1}${bright_2}${bright_1}`;
        new_program_2_bright_speed = converter("bin", "dec", new_program_2_bright_speed);
        var new_light_sched = set_light_sched_value("prog_2_speed", new_program_2_bright_speed);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_bright > th:nth-child(5) > p").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }
        var new_program_2_bright_speed = get_sched_value(light_sched, "program_2_speed");
        new_program_2_bright_speed = converter("dec", "bin", new_program_2_bright_speed);
        var bright_1 = 1;
        var bright_2 = 1;
        var speed_1 = parseInt(new_program_2_bright_speed[5]);
        var speed_2 = parseInt(new_program_2_bright_speed[4]);
        var speed_3 = parseInt(new_program_2_bright_speed[3]);
        var unused_1 = 0;
        var unused_2 = 0;
        var unused_3 = 0;
        new_program_2_bright_speed = `${unused_3}${unused_2}${unused_1}${speed_3}${speed_2}${speed_1}${bright_2}${bright_1}`;
        new_program_2_bright_speed = converter("bin", "dec", new_program_2_bright_speed);
        var new_light_sched = set_light_sched_value("prog_2_speed", new_program_2_bright_speed);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });







    // Speed
    $(".vigipool_modal_light_prog_2_speed > th:nth-child(2) > p").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }
        var new_program_2_bright_speed = get_sched_value(light_sched, "program_2_speed");
        new_program_2_bright_speed = converter("dec", "bin", new_program_2_bright_speed);
        var bright_1 = parseInt(new_program_2_bright_speed[7]);
        var bright_2 = parseInt(new_program_2_bright_speed[6]);
        var speed_1 = 1;
        var speed_2 = 0;
        var speed_3 = 0;
        var unused_1 = 0;
        var unused_2 = 0;
        var unused_3 = 0;
        new_program_2_bright_speed = `${unused_3}${unused_2}${unused_1}${speed_3}${speed_2}${speed_1}${bright_2}${bright_1}`;
        new_program_2_bright_speed = converter("bin", "dec", new_program_2_bright_speed);
        var new_light_sched = set_light_sched_value("prog_2_speed", new_program_2_bright_speed);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_speed > th:nth-child(3) > p").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }
        var new_program_2_bright_speed = get_sched_value(light_sched, "program_2_speed");
        new_program_2_bright_speed = converter("dec", "bin", new_program_2_bright_speed);
        var bright_1 = parseInt(new_program_2_bright_speed[7]);
        var bright_2 = parseInt(new_program_2_bright_speed[6]);
        var speed_1 = 0;
        var speed_2 = 1;
        var speed_3 = 0;
        var unused_1 = 0;
        var unused_2 = 0;
        var unused_3 = 0;
        new_program_2_bright_speed = `${unused_3}${unused_2}${unused_1}${speed_3}${speed_2}${speed_1}${bright_2}${bright_1}`;
        new_program_2_bright_speed = converter("bin", "dec", new_program_2_bright_speed);
        var new_light_sched = set_light_sched_value("prog_2_speed", new_program_2_bright_speed);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });
    $(".vigipool_modal_light_prog_2_speed > th:nth-child(4) > p").click(function () {
        if (set_light_sched_value_save === "") {
            var light_sched = get_value_from_position(eq_modal, "light_sched");
        } else {
            var light_sched = set_light_sched_value_save;
        }
        var new_program_2_bright_speed = get_sched_value(light_sched, "program_2_speed");
        new_program_2_bright_speed = converter("dec", "bin", new_program_2_bright_speed);
        var bright_1 = parseInt(new_program_2_bright_speed[7]);
        var bright_2 = parseInt(new_program_2_bright_speed[6]);
        var speed_1 = 0;
        var speed_2 = 0;
        var speed_3 = 1;
        var unused_1 = 0;
        var unused_2 = 0;
        var unused_3 = 0;
        new_program_2_bright_speed = `${unused_3}${unused_2}${unused_1}${speed_3}${speed_2}${speed_1}${bright_2}${bright_1}`;
        new_program_2_bright_speed = converter("bin", "dec", new_program_2_bright_speed);
        var new_light_sched = set_light_sched_value("prog_2_speed", new_program_2_bright_speed);
        update_vigipool_modal_light_prog_2(new_light_sched);
    });

    // Scheduling - Program 1

    manage_day("samedi");
    manage_day("vendredi");
    manage_day("jeudi");
    manage_day("mercredi");
    manage_day("mardi");
    manage_day("lundi");
    manage_day("dimanche");

    function manage_day(day) {
        $(".vigipool_modal_light_prog_2_2_" + day).click(function () {

            if (set_light_sched_value_save === "") {
                var light_sched = get_value_from_position(eq_modal, "light_sched");
            } else {
                var light_sched = set_light_sched_value_save;
            }

            var new_program_2_off_on_and_days = get_sched_value(light_sched, "program_2_off_on_and_days");
            console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

            new_program_2_off_on_and_days = converter("dec", "bin", new_program_2_off_on_and_days);
            console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

            var program_off_on = parseInt(new_program_2_off_on_and_days[0]);
            var program_samedi = parseInt(new_program_2_off_on_and_days[1]);
            var program_vendredi = parseInt(new_program_2_off_on_and_days[2]);
            var program_jeudi = parseInt(new_program_2_off_on_and_days[3]);
            var program_mercredi = parseInt(new_program_2_off_on_and_days[4]);
            var program_mardi = parseInt(new_program_2_off_on_and_days[5]);
            var program_lundi = parseInt(new_program_2_off_on_and_days[6]);
            var program_dimanche = parseInt(new_program_2_off_on_and_days[7]);

            if (day === "samedi")
                program_samedi = reverse_bool(program_samedi);
            if (day === "vendredi")
                program_vendredi = reverse_bool(program_vendredi);
            if (day === "jeudi")
                program_jeudi = reverse_bool(program_jeudi);
            if (day === "mercredi")
                program_mercredi = reverse_bool(program_mercredi);
            if (day === "mardi")
                program_mardi = reverse_bool(program_mardi);
            if (day === "lundi")
                program_lundi = reverse_bool(program_lundi);
            if (day === "dimanche")
                program_dimanche = reverse_bool(program_dimanche);

            new_program_2_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
            console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

            new_program_2_off_on_and_days = converter("bin", "dec", new_program_2_off_on_and_days);
            console.log("new_program_2_off_on_and_days = " + new_program_2_off_on_and_days);

            var new_light_sched = set_light_sched_value("prog_2_off_on_and_days", new_program_2_off_on_and_days);
            update_vigipool_modal_light_prog_2(new_light_sched);
        });
    }

</script>
