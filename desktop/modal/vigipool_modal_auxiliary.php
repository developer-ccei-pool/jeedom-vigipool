<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <?php create_ui_options("vigipool_modal_auxiliary"); ?>

    <h3><?php get_text("heater"); ?></h3>

    <h4><?php get_text("aux_state"); ?></h4>

    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_aux_state_off"><?php get_text("off"); ?></button>
    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_aux_state_on"><?php get_text("on"); ?></button>

    <h4><?php get_text("consigne_temp"); ?></h4>

    <?php create_slider("consigne_temp", 10, 40); ?>

    <h4><?php get_text("aux_min_temp"); ?></h4>

    <?php create_slider("aux_min_temp", 10, 18); ?>

    <?php create_program("vigipool_modal_auxiliary", 1); ?>
    <?php create_program("vigipool_modal_auxiliary", 2); ?>

    <h3><?php get_text("history_title"); ?></h3>

    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_button_aux_state"><?php get_text("history"); ?></button>

</div>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    create_ui_options_click("vigipool_modal_auxiliary");

    // Select AUX

    $(".vigipool_modal_auxiliary_aux_state_off").click(function () {
        var aux_conf = get_value_from_position(eq_modal, "aux_conf");
        var aux_type = get_value_from_position(eq_modal, "aux_type");
        console.log("aux_conf = " + aux_conf);
        console.log("aux_conf = " + aux_type);
        quick_send("u8_w", "aux_conf", "info", "desired", change_aux_conf(aux_conf, aux_type, 0, 0));
    });
    $(".vigipool_modal_auxiliary_aux_state_on").click(function () {
        var aux_conf = get_value_from_position(eq_modal, "aux_conf");
        var aux_type = get_value_from_position(eq_modal, "aux_type");
        console.log("aux_conf = " + aux_conf);
        console.log("aux_conf = " + aux_type);
        quick_send("u8_w", "aux_conf", "info", "desired", change_aux_conf(aux_conf, aux_type, 0, 1));
    });

    // consigne_temp

    var id = "consigne_temp";
    var init_value = get_value_from_position(eq_modal, "consigne_temp") * 1;
    var division = 1;
    var unit = "°C";
    var disable = false;
    var type = "u16_w";
    var variable = "consigne_temp";
    var info = "consigne";
    var desired = "desired";
    var value = 10;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    // aux_min_temp

    var id = "aux_min_temp";
    var init_value = get_value_from_position(eq_modal, "aux_min_temp") / 10;
    var division = 1;
    var unit = "°C";
    var disable = false;
    var type = "u16_w";
    var variable = "aux_min_temp";
    var info = "info";
    var desired = "desired";
    var value = 10;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    $('.vigipool_modal_auxiliary_button_aux_state').click(function () {
        show_history("aux_state", eq_modal);
    });

    access_modal(".vigipool_modal_auxiliary_1_off_on", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_lundi", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_mardi", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_mercredi", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_jeudi", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_vendredi", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_samedi", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_dimanche", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_color", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_color_circle", "vigipool_modal_auxiliary_prog_1", eq_modal);
    access_modal(".vigipool_modal_auxiliary_1_duration", "vigipool_modal_auxiliary_prog_1", eq_modal);

    access_modal(".vigipool_modal_auxiliary_2_off_on", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_lundi", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_mardi", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_mercredi", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_jeudi", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_vendredi", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_samedi", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_dimanche", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_color", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_color_circle", "vigipool_modal_auxiliary_prog_2", eq_modal);
    access_modal(".vigipool_modal_auxiliary_2_duration", "vigipool_modal_auxiliary_prog_2", eq_modal);

</script>