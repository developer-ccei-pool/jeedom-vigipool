<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="vigipool_ui_text_modal">

    <h2 class="vigipool_modal_title"></h2>

    <h3><?php get_text("common_filtration_type"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <p class="vigipool_tild_modal_filtration_reason"></p>
    <button type="button" class="btn btn-filt vigipool_tild_modal_filtration_button_off"><?php get_text("off"); ?></button>
    <button type="button" class="btn btn-filt vigipool_tild_modal_filtration_button_on"><?php get_text("on"); ?></button>

    <br/>
    <br/>

    <h3><?php get_text("scheduling"); ?></h3>
    <?php create_program("vigipool_modal_filtration", 1); ?>
    <?php create_program("vigipool_modal_filtration", 2); ?>

    <br/>
    <br/>

    <h3><?php get_text("history_title"); ?></h3>
    <button type="button" class="btn btn-filt vigipool_tild_modal_filtration_button_filtration_state"><?php get_text("history"); ?></button>

    <br/>
    <br/>

    <?php create_ui_options("vigipool_modal_filtration"); ?>
</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    create_ui_options_click("vigipool_modal_filtration");

    quick_assign('.vigipool_tild_modal_filtration_button_off', "u8_w", "filt_state", "info", "desired", "0");
    quick_assign('.vigipool_tild_modal_filtration_button_on', "u8_w", "filt_state", "info", "desired", "1");

    $('.vigipool_tild_modal_filtration_button_off').click(function () {
        all_mqtt_data = Array();
    });
    $('.vigipool_tild_modal_filtration_button_on').click(function () {
        all_mqtt_data = Array();
    });

    $('.vigipool_tild_modal_filtration_button_filtration_state').click(function () {
        show_history("flow_on", eq_modal);
    });

    access_modal(".vigipool_modal_filtration_1_off_on", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_lundi", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_mardi", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_mercredi", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_jeudi", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_vendredi", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_samedi", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_dimanche", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_color", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_color_circle", "vigipool_modal_filtration_prog_1", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_1_duration", "vigipool_modal_filtration_prog_1", 0, eq_modal);

    access_modal(".vigipool_modal_filtration_2_off_on", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_lundi", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_mardi", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_mercredi", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_jeudi", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_vendredi", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_samedi", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_dimanche", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_color", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_color_circle", "vigipool_modal_filtration_prog_2", 0, eq_modal);
    access_modal(".vigipool_modal_filtration_2_duration", "vigipool_modal_filtration_prog_2", 0, eq_modal);

</script>