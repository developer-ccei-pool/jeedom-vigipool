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
    <button type="button" class="transition btn btn-light vigipool_modal_light_m_prog_1_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_light_m_prog_1_button_back"><?php get_text("back"); ?></button>

    <br/>
    <br/>

    <h4><?php get_text("schedule"); ?> 1</h4>
    <h4><?php get_text("at"); ?></h4>
    <?php create_slider("vigipool_modal_light_m_prog_1_sched_1_begin", 0, 24 * 2); ?>
    <h4><?php get_text("during"); ?></h4>
    <?php create_slider("vigipool_modal_light_m_prog_1_sched_1_end", 0, 24 * 2); ?>

</div>

<?php modal_bot(); ?>

<script>
    // Common

    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    // Save

    $(".vigipool_modal_light_m_prog_1_button_save").click(function () {
        quick_send("s44_w", "light_sched_m", "info", "desired", set_light_m_sched_value_save);
        console.log("set_light_m_sched_value_save = " + set_light_m_sched_value_save);
    });
    access_modal(".vigipool_modal_light_m_prog_1_button_back", "vigipool_modal_light_m", 0);
    access_modal(".vigipool_modal_light_m_prog_1_button_back", "vigipool_modal_light_m", 1);

    // Schedule

    var light_sched = get_value_from_position(eq_modal, "light_sched_m");
    console.log("light_sched = " + light_sched);

    var id = "vigipool_modal_light_m_prog_1_sched_1_begin";
    var init_value = get_sched_value(light_sched, "programs_number");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_m_prog_1_sched_1_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

    var id = "vigipool_modal_light_m_prog_1_sched_1_end";
    var init_value = fix_end_dec(get_sched_value(light_sched, "program_1_off_on_and_days"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_light_m_prog_1_sched_1_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

</script>
