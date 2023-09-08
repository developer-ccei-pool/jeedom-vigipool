<link rel="stylesheet" href="/plugins/vigipool/core/template/css/vigipool_modal_x3_state.css">

<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("scheduling"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <h3><?php get_text("save"); ?></h3>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_button_back"><?php get_text("back"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("state"); ?></h3>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_button_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_button_on""><?php get_text("on"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("color_picker"); ?></h3>
    <input type="color" class="vigipool_modal_x3_state_prog_1_button_color_picker">

    <br/>
    <br/>

    <h3><?php get_text("saved_colors"); ?></h3>
    <table class="centerer">
        <tr>
            <td style="color: #fbdfc6; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_1">●</td>
            <td style="color: #fbdfc6; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_2">●</td>
            <td style="color: #c0d2fc; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_3">●</td>
            <td style="color: #2f5ff7; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_4">●</td>
            <td style="color: #31ffb8; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_5">●</td>
            <td style="color: #14fffd; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_6">●</td>
            <td style="color: #f892f4; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_7">●</td>
            <td style="color: #e80001; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_8">●</td>
            <td style="color: #f06303; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_9">●</td>
            <td style="color: #31ff20; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_prog_1_button_saved_color_10">●</td>
        </tr>
    </table>


    <h3><?php get_text("sequences"); ?></h3>

    <table class="centerer">
        <tr>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_rainbow_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_rainbow.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_fun_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_fun.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_ocean_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_ocean.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_flamme_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_flamme.png"></th>
        </tr>
        <tr>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_rainbow_label"><?php get_text("rainbow"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_fun_label"><?php get_text("fun"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_ocean_label"><?php get_text("ocean"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_flamme_label"><?php get_text("flamme"); ?></th>
        </tr>
    </table>
    <table class="centerer">
        <tr>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_parade_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_parade.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_elegant_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_elegant.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_horizon_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_horizon.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_prog_1_psyche_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_psyche.png"></th>
        </tr>
        <tr>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_parade_label"><?php get_text("parade"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_elegant_label"><?php get_text("elegant"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_horizon_label"><?php get_text("horizon"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_prog_1_psyche_label"><?php get_text("psyche"); ?></th>
        </tr>
    </table>

    <br/>
    <br/>

    <h3><?php get_text("select_the_start_time_and_duration_of_the_program"); ?></h3>

    <h4><?php get_text("schedule"); ?> 1</h4>
    <h4><?php get_text("at"); ?></h4>
    <?php create_slider("vigipool_modal_x3_state_prog_1_sched_1_begin", 0, 24 * 4); ?>
    <h4><?php get_text("during"); ?></h4>
    <?php create_slider("vigipool_modal_x3_state_prog_1_sched_1_end", 0, 24 * 4); ?>

    <br/>
    <br/>

    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_sched_2_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_x3_state_prog_1_sched_2">
        <h4><?php get_text("schedule"); ?> 2</h4>
        <h4><?php get_text("at"); ?></h4>
        <?php create_slider("vigipool_modal_x3_state_prog_1_sched_2_begin", 0, 24 * 4); ?>
        <h4><?php get_text("during"); ?></h4>
        <?php create_slider("vigipool_modal_x3_state_prog_1_sched_2_end", 0, 24 * 4); ?>
    </div>

    <br/>
    <br/>


    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_sched_3_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_x3_state_prog_1_sched_3">
        <h4><?php get_text("schedule"); ?> 3</h4>
        <h4><?php get_text("at"); ?></h4>
        <?php create_slider("vigipool_modal_x3_state_prog_1_sched_3_begin", 0, 24 * 4); ?>
        <h4><?php get_text("during"); ?></h4>
        <?php create_slider("vigipool_modal_x3_state_prog_1_sched_3_end", 0, 24 * 4); ?>
    </div>

    <br/>
    <br/>

    <h3><?php get_text("bright"); ?></h3>
    <?php create_slider("vigipool_modal_x3_state_prog_1_bright", 0, 100); ?>

    <br/>
    <br/>

    <h3 class="transition vigipool_modal_x3_state_prog_1_speed_title"><?php get_text("speed"); ?></h3>
    <table class="centerer">
        <tr class="transition vigipool_modal_x3_state_prog_1_speed">
            <th>
                <img style="filter: invert(1); vertical-align: super;" src="/plugins/vigipool/desktop/img/rocket-takeoff-fill.svg">
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("slow"); ?></p>
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("normal"); ?></p>
            </th>
            <th>
                <p style="border-radius: 10px;width: 100px;text-align: center;cursor: pointer;"><?php get_text("fast"); ?></p>
            </th>
        </tr>
    </table>

    <br/>
    <br/>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program("vigipool_modal_x3_state_prog_1", 1); ?>

    <br/>
    <br/>

    <h3><?php get_text("save"); ?></h3>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_prog_1_button_back"><?php get_text("back"); ?></button>

</div>

<?php modal_bot(); ?>

<script>
    // Common

    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    // p1_color

    $(".vigipool_modal_x3_state_prog_1_button_color_picker").mouseleave(function () {
        var color = $(".vigipool_modal_x3_state_prog_1_button_color_picker").val().toUpperCase();
        quick_send("s128_w", "p1_color", "info", "desired", color);
    });

    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_1', "s128_w", "p1_color", "info", "desired", "#fbdfc6");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_2', "s128_w", "p1_color", "info", "desired", "#fbdfc6");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_3', "s128_w", "p1_color", "info", "desired", "#c0d2fc");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_4', "s128_w", "p1_color", "info", "desired", "#2f5ff7");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_5', "s128_w", "p1_color", "info", "desired", "#31ffb8");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_6', "s128_w", "p1_color", "info", "desired", "#14fffd");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_7', "s128_w", "p1_color", "info", "desired", "#f892f4");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_8', "s128_w", "p1_color", "info", "desired", "#e80001");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_9', "s128_w", "p1_color", "info", "desired", "#f06303");
    quick_assign('.vigipool_modal_x3_state_prog_1_button_saved_color_10', "s128_w", "p1_color", "info", "desired", "#31ff20");

    quick_assign('.vigipool_modal_x3_state_prog_1_rainbow_button', "s128_w", "p1_color", "info", "desired", "S#FF000094#FFFF0094#00FF0094#00FFFF94#0000FF94#FF00FF94");
    quick_assign('.vigipool_modal_x3_state_prog_1_fun_button', "s128_w", "p1_color", "info", "desired", "S#FF000027#FFFF0027#0000FF27#00FF0027#00FFFF27#FF00FF27#FFFFFF27");
    quick_assign('.vigipool_modal_x3_state_prog_1_ocean_button', "s128_w", "p1_color", "info", "desired", "S#0000FF32KFF32#008AFF32KFF32#00D8FF32KFF32#00DCD432KFF32#18FFFF32KFF32#01579B32KFF32#039BE532KFF32#00FFFF32KFF32");
    quick_assign('.vigipool_modal_x3_state_prog_1_flamme_button', "s128_w", "p1_color", "info", "desired", "S#FD31034B#FE88174B#FD4E0A2B#FE6B104B#FFDD004B#FE88172D#FFDD004B#FE88176B");
    quick_assign('.vigipool_modal_x3_state_prog_1_parade_button', "s128_w", "p1_color", "info", "desired", "S#FFFF00FE#00FF00FE#18FFFFFEKFFFE#FF00FFFE#9C27B0FE#FF0000FE#FFAB40FEK3CFE");
    quick_assign('.vigipool_modal_x3_state_prog_1_elegant_button', "s128_w", "p1_color", "info", "desired", "SK8038KBF38KFF38KBF38K4438K0038K4438");
    quick_assign('.vigipool_modal_x3_state_prog_1_horizon_button', "s128_w", "p1_color", "info", "desired", "S#0000FF7FK897F#04FFFF7F");
    quick_assign('.vigipool_modal_x3_state_prog_1_psyche_button', "s128_w", "p1_color", "info", "desired", "S#FF005004#00000000#0000FF04#00000000#15EDFF04#00000000#C000FF04#00000000#FFFF0004#00000000#FF00FF04#00000000");

    // x3_sched

    var x3_sched = get_value_from_position(eq_modal, "x3_sched");
    console.log("x3_sched = " + x3_sched);

    // program_1_off_on_and_days

    $(".vigipool_modal_x3_state_prog_1_button_save").click(function () {
        quick_send("s44_w", "x3_sched", "info", "desired", set_sched_value_save);
    });
    access_modal(".vigipool_modal_x3_state_prog_1_button_back", "vigipool_modal_x3_state", 0);
    access_modal(".vigipool_modal_x3_state_prog_1_button_back", "vigipool_modal_x3_state", 1);

    $(".vigipool_modal_x3_state_prog_1_button_off").click(function () {
        if (set_sched_value_save === "") {
            var x3_sched = get_value_from_position(eq_modal, "x3_sched");
        } else {
            var x3_sched = set_sched_value_save;
        }

        var new_program_1_off_on_and_days = get_sched_value(x3_sched, "program_1_off_on_and_days");
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("dec", "bin", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var program_off_on = 0;
        var program_samedi = parseInt(new_program_1_off_on_and_days[1]);
        var program_vendredi = parseInt(new_program_1_off_on_and_days[2]);
        var program_jeudi = parseInt(new_program_1_off_on_and_days[3]);
        var program_mercredi = parseInt(new_program_1_off_on_and_days[4]);
        var program_mardi = parseInt(new_program_1_off_on_and_days[5]);
        var program_lundi = parseInt(new_program_1_off_on_and_days[6]);
        var program_dimanche = parseInt(new_program_1_off_on_and_days[7]);

        new_program_1_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("bin", "dec", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var new_x3_sched = set_sched_value("prog_1_off_on_and_days", new_program_1_off_on_and_days);
        update_vigipool_modal_x3_state_prog_1(new_x3_sched);
    });
    $(".vigipool_modal_x3_state_prog_1_button_on").click(function () {
        if (set_sched_value_save === "") {
            var x3_sched = get_value_from_position(eq_modal, "x3_sched");
        } else {
            var x3_sched = set_sched_value_save;
        }

        var new_program_1_off_on_and_days = get_sched_value(x3_sched, "program_1_off_on_and_days");
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("dec", "bin", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var program_off_on = 1;
        var program_samedi = parseInt(new_program_1_off_on_and_days[1]);
        var program_vendredi = parseInt(new_program_1_off_on_and_days[2]);
        var program_jeudi = parseInt(new_program_1_off_on_and_days[3]);
        var program_mercredi = parseInt(new_program_1_off_on_and_days[4]);
        var program_mardi = parseInt(new_program_1_off_on_and_days[5]);
        var program_lundi = parseInt(new_program_1_off_on_and_days[6]);
        var program_dimanche = parseInt(new_program_1_off_on_and_days[7]);

        new_program_1_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        new_program_1_off_on_and_days = converter("bin", "dec", new_program_1_off_on_and_days);
        console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

        var new_x3_sched = set_sched_value("prog_1_off_on_and_days", new_program_1_off_on_and_days);
        update_vigipool_modal_x3_state_prog_1(new_x3_sched);
    });

    // Schedule
    var id = "vigipool_modal_x3_state_prog_1_sched_1_begin";
    var init_value = get_sched_value(x3_sched, "program_1_sched_1_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_x3_state_prog_1_sched_1_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_x3_state_prog_1_sched_1_end";
    var init_value = fix_end_dec(get_sched_value(x3_sched, "program_1_sched_1_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_x3_state_prog_1_sched_1_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_x3_state_prog_1_sched_2_begin";
    var init_value = get_sched_value(x3_sched, "program_1_sched_2_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_x3_state_prog_1_sched_2_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_x3_state_prog_1_sched_2_end";
    var init_value = fix_end_dec(get_sched_value(x3_sched, "program_1_sched_2_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_x3_state_prog_1_sched_2_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_x3_state_prog_1_sched_3_begin";
    var init_value = get_sched_value(x3_sched, "program_1_sched_3_begin");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_x3_state_prog_1_sched_3_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    var id = "vigipool_modal_x3_state_prog_1_sched_3_end";
    var init_value = fix_end_dec(get_sched_value(x3_sched, "program_1_sched_3_end"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_x3_state_prog_1_sched_3_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_4");

    // Bright

    var id = "vigipool_modal_x3_state_prog_1_bright";
    var init_value = get_sched_value(x3_sched, "program_1_bright");
    var division = 1;
    var unit = "%";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_x3_state_prog_1_bright";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value);

    $(".vigipool_modal_x3_state_prog_1_sched_2_add").click(function () {
        $(".vigipool_modal_x3_state_prog_1_sched_2_add").hide();
        $(".vigipool_modal_x3_state_prog_1_sched_2").show();
    });
    $(".vigipool_modal_x3_state_prog_1_sched_3_add").click(function () {
        $(".vigipool_modal_x3_state_prog_1_sched_3_add").hide();
        $(".vigipool_modal_x3_state_prog_1_sched_3").show();
    });


    // Speed
    $(".vigipool_modal_x3_state_prog_1_speed > th:nth-child(2) > p").click(function () {
        if (set_sched_value_save === "") {
            var x3_sched = get_value_from_position(eq_modal, "x3_sched");
        } else {
            var x3_sched = set_sched_value_save;
        }
        var new_x3_sched = set_sched_value("prog_1_speed", 50);
        update_vigipool_modal_x3_state_prog_1(new_x3_sched);
    });
    $(".vigipool_modal_x3_state_prog_1_speed > th:nth-child(3) > p").click(function () {
        if (set_sched_value_save === "") {
            var x3_sched = get_value_from_position(eq_modal, "x3_sched");
        } else {
            var x3_sched = set_sched_value_save;
        }
        var new_x3_sched = set_sched_value("prog_1_speed", 100);
        update_vigipool_modal_x3_state_prog_1(new_x3_sched);
    });
    $(".vigipool_modal_x3_state_prog_1_speed > th:nth-child(4) > p").click(function () {
        if (set_sched_value_save === "") {
            var x3_sched = get_value_from_position(eq_modal, "x3_sched");
        } else {
            var x3_sched = set_sched_value_save;
        }
        var new_x3_sched = set_sched_value("prog_1_speed", 150);
        update_vigipool_modal_x3_state_prog_1(new_x3_sched);
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
        $(".vigipool_modal_x3_sched_1_" + day).click(function () {

            if (set_sched_value_save === "") {
                var x3_sched = get_value_from_position(eq_modal, "x3_sched");
            } else {
                var x3_sched = set_sched_value_save;
            }

            var new_program_1_off_on_and_days = get_sched_value(x3_sched, "program_1_off_on_and_days");
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            new_program_1_off_on_and_days = converter("dec", "bin", new_program_1_off_on_and_days);
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            var program_off_on = parseInt(new_program_1_off_on_and_days[0]);
            var program_samedi = parseInt(new_program_1_off_on_and_days[1]);
            var program_vendredi = parseInt(new_program_1_off_on_and_days[2]);
            var program_jeudi = parseInt(new_program_1_off_on_and_days[3]);
            var program_mercredi = parseInt(new_program_1_off_on_and_days[4]);
            var program_mardi = parseInt(new_program_1_off_on_and_days[5]);
            var program_lundi = parseInt(new_program_1_off_on_and_days[6]);
            var program_dimanche = parseInt(new_program_1_off_on_and_days[7]);

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

            new_program_1_off_on_and_days = `${program_off_on}${program_samedi}${program_vendredi}${program_jeudi}${program_mercredi}${program_mardi}${program_lundi}${program_dimanche}`;
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            new_program_1_off_on_and_days = converter("bin", "dec", new_program_1_off_on_and_days);
            console.log("new_program_1_off_on_and_days = " + new_program_1_off_on_and_days);

            var new_x3_sched = set_sched_value("prog_1_off_on_and_days", new_program_1_off_on_and_days);
            update_vigipool_modal_x3_state_prog_1(new_x3_sched);
        });
    }

</script>
