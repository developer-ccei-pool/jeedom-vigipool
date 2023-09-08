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

    <button type="button" class="transition btn btn-light vigipool_modal_filtration_m_prog_1_button_save"><?php get_text("save"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_filtration_m_prog_1_button_back"><?php get_text("back"); ?></button>

    <br/>
    <br/>

    <h4><?php get_text("schedule"); ?> 1</h4>
    <h4><?php get_text("at"); ?></h4>
    <?php create_slider("vigipool_modal_filtration_m_prog_1_sched_1_begin", 0, 24 * 2); ?>
    <h4><?php get_text("during"); ?></h4>
    <?php create_slider("vigipool_modal_filtration_m_prog_1_sched_1_end", 0, 24 * 2); ?>

    <br/>
    <br/>

    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_m_prog_1_sched_2_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_filtration_m_prog_1_sched_2">
        <h4><?php get_text("schedule"); ?> 2</h4>
        <h4><?php get_text("at"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_m_prog_1_sched_2_begin", 0, 24 * 2); ?>
        <h4><?php get_text("during"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_m_prog_1_sched_2_end", 0, 24 * 2); ?>
    </div>

    <br/>
    <br/>

    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_m_prog_1_sched_3_add"><?php get_text("add"); ?></button>

    <div class="vigipool_modal_filtration_m_prog_1_sched_3">
        <h4><?php get_text("schedule"); ?> 3</h4>
        <h4><?php get_text("at"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_m_prog_1_sched_3_begin", 0, 24 * 2); ?>
        <h4><?php get_text("during"); ?></h4>
        <?php create_slider("vigipool_modal_filtration_m_prog_1_sched_3_end", 0, 24 * 2); ?>
    </div>

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

    $(".vigipool_modal_filtration_m_prog_1_button_save").click(function () {
        quick_send("s44_w", "filt_sched_m", "info", "desired", set_filtration_m_sched_value_save);
        console.log("set_filtration_m_sched_value_save = " + set_filtration_m_sched_value_save);
    });
    access_modal(".vigipool_modal_filtration_m_prog_1_button_back", "vigipool_modal_filtration_m", 0);
    access_modal(".vigipool_modal_filtration_m_prog_1_button_back", "vigipool_modal_filtration_m", 1);

    // Schedule

    var filtration_sched = get_value_from_position(eq_modal, "filt_sched_m");
    console.log("filtration_sched = " + filtration_sched);

    var id = "vigipool_modal_filtration_m_prog_1_sched_1_begin";
    var init_value = get_sched_value(filtration_sched, "1");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_m_prog_1_sched_1_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

    var id = "vigipool_modal_filtration_m_prog_1_sched_1_end";
    var init_value = fix_end_dec(get_sched_value(filtration_sched, "2"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_m_prog_1_sched_1_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

    var id = "vigipool_modal_filtration_m_prog_1_sched_2_begin";
    var init_value = get_sched_value(filtration_sched, "3");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_m_prog_1_sched_2_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

    var id = "vigipool_modal_filtration_m_prog_1_sched_2_end";
    var init_value = fix_end_dec(get_sched_value(filtration_sched, "4"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_m_prog_1_sched_2_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

    var id = "vigipool_modal_filtration_m_prog_1_sched_3_begin";
    var init_value = get_sched_value(filtration_sched, "5");
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_m_prog_1_sched_3_begin";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

    var id = "vigipool_modal_filtration_m_prog_1_sched_3_end";
    var init_value = fix_end_dec(get_sched_value(filtration_sched, "6"));
    var division = 1;
    var unit = "";
    var disable = false;
    var type = "u8_w";
    var variable = "vigipool_modal_filtration_m_prog_1_sched_3_end";
    var info = "info";
    var desired = "desired";
    var value = 1;
    create_slider_sched(id, init_value, division, unit, disable, type, variable, info, desired, value, "time_2");

    $(".vigipool_modal_filtration_m_prog_1_sched_2_add").click(function () {
        $(".vigipool_modal_filtration_m_prog_1_sched_2_add").hide();
        $(".vigipool_modal_filtration_m_prog_1_sched_2").show();
    });
    $(".vigipool_modal_filtration_m_prog_1_sched_3_add").click(function () {
        $(".vigipool_modal_filtration_m_prog_1_sched_3_add").hide();
        $(".vigipool_modal_filtration_m_prog_1_sched_3").show();
    });

</script>
