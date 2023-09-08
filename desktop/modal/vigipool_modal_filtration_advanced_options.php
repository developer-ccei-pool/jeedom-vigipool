<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("options"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_advanced_options_back"><?php get_text("go_back"); ?></button>

    <br/>
    <br/>

    <div class="vigipool_modal_filtration_advanced_options_frost_free">
        <h4 class="transition"><?php get_text("settings_button_frost_protection_mode"); ?></h4>
        <p><?php get_text("my_vp_devices_settings_frost_free_mode_tooltip"); ?></p>
        <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_advanced_options_frost_free_off">Off</button>
        <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_advanced_options_frost_free_0">0°C</button>
        <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_advanced_options_frost_free_1">1°C</button>
        <button type="button" class="transition btn btn-filtration vigipool_modal_filtration_advanced_options_frost_free_2">2°C</button>
    </div>

</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    access_modal(".vigipool_modal_filtration_advanced_options_back", "vigipool_modal_filtration", eq_modal);

    quick_assign('.vigipool_modal_filtration_advanced_options_frost_free_off', "u8_w", "frost_free", "info", "desired", "255");
    quick_assign('.vigipool_modal_filtration_advanced_options_frost_free_0', "u8_w", "frost_free", "info", "desired", "0");
    quick_assign('.vigipool_modal_filtration_advanced_options_frost_free_1', "u8_w", "frost_free", "info", "desired", "1");
    quick_assign('.vigipool_modal_filtration_advanced_options_frost_free_2', "u8_w", "frost_free", "info", "desired", "2");
</script>