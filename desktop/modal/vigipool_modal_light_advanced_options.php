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

    <button type="button" class="transition btn btn-light vigipool_modal_light_advanced_options_back"><?php get_text("go_back"); ?></button>

    <br/>
    <br/>

    <div class="vigipool_modal_light_advanced_options_enslaved_to_filtration">
        <h4 class="transition"><?php get_text("lighting_settings_dialog_forced_filtration_text"); ?></h4>
        <p><?php get_text("lighting_settings_dialog_forced_filtration_hint"); ?></p>
        <button type="button" class="transition btn btn-light vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_off"><?php get_text("off"); ?></button>
        <button type="button" class="transition btn btn-light vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_on"><?php get_text("on"); ?></button>
    </div>
</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    access_modal(".vigipool_modal_light_advanced_options_back", "vigipool_modal_light", eq_modal);

    quick_assign('.vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_off', "u8_w", "filt_light_force", "info", "desired", 0);
    quick_assign('.vigipool_modal_light_advanced_options_lighting_settings_dialog_forced_filtration_on', "u8_w", "filt_light_force", "info", "desired", 1);


</script>