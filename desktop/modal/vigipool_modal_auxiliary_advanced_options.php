<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("settings"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <button type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_back"><?php get_text("go_back"); ?></button>

    <br/>
    <br/>

    <!-- enslaved_to_filtration -->

    <div class="vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration">
        <h4 class="transition"><?php get_text("enslaved_to_filtration"); ?></h4>
        <p><?php get_text("auxiliary_settings_dialog_filtration_dependant_tooltip"); ?></p>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off"><?php get_text("off"); ?></button>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on"><?php get_text("on"); ?></button>
    </div>

    <br/>
    <br/>

    <!-- force_filtration_during_aux -->

    <div class="vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux">
        <h4 class="transition"><?php get_text("force_filtration_during_aux"); ?></h4>
        <p><?php get_text("force_filtration_during_aux_help"); ?></p>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off"><?php get_text("off"); ?></button>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on"><?php get_text("on"); ?></button>
    </div>

    <br/>
    <br/>

    <!-- consigne_temp -->

    <div class="vigipool_modal_auxiliary_advanced_options_consigne_temp">
        <h4 class="transition"><?php get_text("consigne_temp"); ?></h4>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_consigne_temp_off"><?php get_text("off"); ?></button>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_consigne_temp_on"><?php get_text("on"); ?></button>
    </div>

    <br/>
    <br/>

    <!-- aux_min_temp -->

    <div class="vigipool_modal_auxiliary_advanced_options_aux_min_temp">
        <h4 class="transition"><?php get_text("aux_min_temp"); ?></h4>
        <p><?php get_text("has_min_temp_setpoint"); ?></p>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_aux_min_temp_off"><?php get_text("off"); ?></button>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_aux_min_temp_on"><?php get_text("on"); ?></button>
    </div>

    <br/>
    <br/>

    <!-- consigne_orp -->

    <div class="vigipool_modal_auxiliary_advanced_options_consigne_orp">
        <h4 class="transition"><?php get_text("consigne_orp"); ?></h4>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_consigne_orp_off"><?php get_text("off"); ?></button>
        <button style="display: none;" type="button" class="transition btn btn-light vigipool_modal_auxiliary_advanced_options_consigne_orp_on"><?php get_text("on"); ?></button>
    </div>

</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    access_modal(".vigipool_modal_auxiliary_advanced_options_back", "vigipool_modal_auxiliary", eq_modal);

    // Select AUX

    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_off", 1, 0);
    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_enslaved_to_filtration_on", 1, 1);

    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_off", 2, 0);
    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_force_filtration_during_aux_on", 2, 1);

    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_consigne_temp_off", 3, 0);
    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_consigne_temp_on", 3, 1);

    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_aux_min_temp_off", 4, 0);
    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_aux_min_temp_on", 4, 1);

    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_consigne_orp_off", 5, 0);
    vigipool_modal_auxiliary_advanced_options("vigipool_modal_auxiliary_advanced_options_consigne_orp_on", 5, 1);

    function vigipool_modal_auxiliary_advanced_options(button, bit, value) {
        $("." + button).click(function () {
            var aux_conf = get_value_from_position(eq_modal, "aux_conf");
            var aux_type = get_value_from_position(eq_modal, "aux_type");
            quick_send("u16_w", "aux_conf", "info", "desired", change_aux_conf(aux_conf, aux_type, bit, value));
        });
    }


</script>