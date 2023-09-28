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

    <h3><?php get_text("description_wix"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <h3><?php get_text("state"); ?></h3>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_button_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_x3_state_button_on"><?php get_text("on"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("color_picker"); ?></h3>
    <input type="color" class="vigipool_modal_x3_state_button_color_picker">

    <br/>
    <br/>

    <h3><?php get_text("saved_colors"); ?></h3>
    <table class="centerer">
        <tr>
            <td style="color: #fbdfc6; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_1">●</td>
            <td style="color: #fbdfc6; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_2">●</td>
            <td style="color: #c0d2fc; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_3">●</td>
            <td style="color: #2f5ff7; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_4">●</td>
            <td style="color: #31ffb8; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_5">●</td>
            <td style="color: #14fffd; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_6">●</td>
            <td style="color: #f892f4; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_7">●</td>
            <td style="color: #e80001; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_8">●</td>
            <td style="color: #f06303; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_9">●</td>
            <td style="color: #31ff20; font-size: 50px !important;" class="saved_colors vigipool_modal_x3_state_button_saved_color_10">●</td>
        </tr>
    </table>

    <h3><?php get_text("sequences"); ?></h3>

    <table class="centerer">
        <tr>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_rainbow_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_rainbow.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_fun_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_fun.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_ocean_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_ocean.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_flamme_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_flamme.png"></th>
        </tr>
        <tr>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_rainbow_label"><?php get_text("rainbow"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_fun_label"><?php get_text("fun"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_ocean_label"><?php get_text("ocean"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_flamme_label"><?php get_text("flamme"); ?></th>
        </tr>
    </table>
    <table class="centerer">
        <tr>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_parade_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_parade.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_elegant_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_elegant.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_horizon_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_horizon.png"></th>
            <th class="transition vigipool_button_sequence vigipool_modal_x3_state_psyche_button"><img width="103px" height="59px" src="/plugins/vigipool/desktop/img/x3_psyche.png"></th>
        </tr>
        <tr>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_parade_label"><?php get_text("parade"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_elegant_label"><?php get_text("elegant"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_horizon_label"><?php get_text("horizon"); ?></th>
            <th class="transition vigipool_label_sequence vigipool_modal_x3_state_psyche_label"><?php get_text("psyche"); ?></th>
        </tr>
    </table>

    <br/>
    <br/>

    <h3><?php get_text("bright"); ?></h3>
    <?php create_slider("x3_bright", 0, 100); ?>

    <h3 class="transition vigipool_modal_x3_state_speed_title"><?php get_text("speed"); ?></h3>

    <table class="centerer">
        <tr class="transition vigipool_modal_x3_state_speed">
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
    <?php create_program("vigipool_modal_x3_state", 1); ?>
    <?php create_program("vigipool_modal_x3_state", 2); ?>
</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    // State

    quick_assign('.vigipool_modal_x3_state_button_off', "u8_w", "x3_state", "info", "desired", "0");
    quick_assign('.vigipool_modal_x3_state_button_on', "u8_w", "x3_state", "info", "desired", "1");

    // Color Picker

    $(".vigipool_modal_x3_state_button_color_picker").mouseleave(function () {
        var color = $(".vigipool_modal_x3_state_button_color_picker").val().toUpperCase();
        quick_send("s128_w", "x3_color", "info", "desired", color);
    });

    // Saved colors

    quick_assign('.vigipool_modal_x3_state_button_saved_color_1', "s128_w", "x3_color", "info", "desired", "#fbdfc6");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_2', "s128_w", "x3_color", "info", "desired", "#fbdfc6");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_3', "s128_w", "x3_color", "info", "desired", "#c0d2fc");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_4', "s128_w", "x3_color", "info", "desired", "#2f5ff7");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_5', "s128_w", "x3_color", "info", "desired", "#31ffb8");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_6', "s128_w", "x3_color", "info", "desired", "#14fffd");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_7', "s128_w", "x3_color", "info", "desired", "#f892f4");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_8', "s128_w", "x3_color", "info", "desired", "#e80001");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_9', "s128_w", "x3_color", "info", "desired", "#f06303");
    quick_assign('.vigipool_modal_x3_state_button_saved_color_10', "s128_w", "x3_color", "info", "desired", "#31ff20");

    quick_assign('.vigipool_modal_x3_state_rainbow_button', "s128_w", "x3_color", "info", "desired", "S#FF000094#FFFF0094#00FF0094#00FFFF94#0000FF94#FF00FF94");
    quick_assign('.vigipool_modal_x3_state_fun_button', "s128_w", "x3_color", "info", "desired", "S#FF000027#FFFF0027#0000FF27#00FF0027#00FFFF27#FF00FF27#FFFFFF27");
    quick_assign('.vigipool_modal_x3_state_ocean_button', "s128_w", "x3_color", "info", "desired", "S#0000FF32KFF32#008AFF32KFF32#00D8FF32KFF32#00DCD432KFF32#18FFFF32KFF32#01579B32KFF32#039BE532KFF32#00FFFF32KFF32");
    quick_assign('.vigipool_modal_x3_state_flamme_button', "s128_w", "x3_color", "info", "desired", "S#FD31034B#FE88174B#FD4E0A2B#FE6B104B#FFDD004B#FE88172D#FFDD004B#FE88176B");
    quick_assign('.vigipool_modal_x3_state_parade_button', "s128_w", "x3_color", "info", "desired", "S#FFFF00FE#00FF00FE#18FFFFFEKFFFE#FF00FFFE#9C27B0FE#FF0000FE#FFAB40FEK3CFE");
    quick_assign('.vigipool_modal_x3_state_elegant_button', "s128_w", "x3_color", "info", "desired", "SK8038KBF38KFF38KBF38K4438K0038K4438");
    quick_assign('.vigipool_modal_x3_state_horizon_button', "s128_w", "x3_color", "info", "desired", "S#0000FF7FK897F#04FFFF7F");
    quick_assign('.vigipool_modal_x3_state_psyche_button', "s128_w", "x3_color", "info", "desired", "S#FF005004#00000000#0000FF04#00000000#15EDFF04#00000000#C000FF04#00000000#FFFF0004#00000000#FF00FF04#00000000");

    // Brightness

    var id = "x3_bright";
    var init_value = get_value_from_position(eq_modal, "x3_bright");
    var division = 1;
    var unit = "%";
    var disable = false;
    var type = "u8_w";
    var variable = "x3_bright";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    // Speed

    quick_assign('.vigipool_modal_x3_state_speed > th:nth-child(2) > p', "u8_w", "x3_speed", "info", "desired", 50);
    quick_assign('.vigipool_modal_x3_state_speed > th:nth-child(3) > p', "u8_w", "x3_speed", "info", "desired", 100);
    quick_assign('.vigipool_modal_x3_state_speed > th:nth-child(4) > p', "u8_w", "x3_speed", "info", "desired", 150);

    // Schedule

    access_modal(".vigipool_modal_x3_sched_1_off_on", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_lundi", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_mardi", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_mercredi", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_jeudi", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_vendredi", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_samedi", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_dimanche", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_color", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_color_circle", "vigipool_modal_x3_state_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_1_duration", "vigipool_modal_x3_state_prog_1", 0, eq_modal);

    access_modal(".vigipool_modal_x3_sched_2_off_on", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_lundi", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_mardi", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_mercredi", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_jeudi", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_vendredi", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_samedi", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_dimanche", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_color", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_color_circle", "vigipool_modal_x3_state_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_x3_sched_2_duration", "vigipool_modal_x3_state_prog_2", 0, eq_modal);


</script>