<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<h2 class="transition vigipool_modal_title"></h2>

<h3><?php get_text("options") ?></h3>

<br/>
<br/>
<br/>
<br/>

<h4 class="transition vigipool_common_modal_all_frost_free"><?php get_text("settings_button_frost_protection_mode") ?></h4>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_frost_free_off">Off</button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_frost_free_0">0°C</button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_frost_free_1">1°C</button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_frost_free_2">2°C</button>

<br/>
<br/>

<h4 class="transition vigipool_common_modal_all_light_type"><?php get_text("my_vp_devices_settings_projector_type") ?></h4>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_light_type_rc"><?php get_text("proj_type_rc") ?></button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_light_type_mono"><?php get_text("proj_type_mono") ?></button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_light_type_mono_dim"><?php get_text("proj_type_mono_dim") ?></button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_light_type_micro_cuts"><?php get_text("proj_type_microcut") ?></button>

<br/>
<br/>

<h4 class="transition vigipool_common_modal_all_aux_type"><?php get_text("auxiliary") ?></h4>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_aux_type_none"><?php get_text("none") ?></button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_aux_type_heater"><?php get_text("aux1_type_2") ?></button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_aux_type_treatment"><?php get_text("treatment") ?></button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_aux_type_booster"><?php get_text("aux_type_booster") ?></button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_aux_type_auxiliary"><?php get_text("auxiliary") ?></button>

<br/>
<br/>

<h4 class="transition vigipool_common_modal_all_winter_mode"><?php get_text("winter_mode") ?></h4>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_winter_mode_off">Off</button>
<button type="button" class="transition btn btn-light vigipool_common_modal_all_winter_mode_on">On</button>

</div>
</div>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    quick_assign('.vigipool_common_modal_all_frost_free_off', "u8_w", "frost_free", "info", "desired", "255");
    quick_assign('.vigipool_common_modal_all_frost_free_0', "u8_w", "frost_free", "info", "desired", "0");
    quick_assign('.vigipool_common_modal_all_frost_free_1', "u8_w", "frost_free", "info", "desired", "1");
    quick_assign('.vigipool_common_modal_all_frost_free_2', "u8_w", "frost_free", "info", "desired", "2");

    quick_assign('.vigipool_common_modal_all_light_type_rc', "u8_w", "light_type", "info", "desired", "0");
    quick_assign('.vigipool_common_modal_all_light_type_mono', "u8_w", "light_type", "info", "desired", "1");
    quick_assign('.vigipool_common_modal_all_light_type_mono_dim', "u8_w", "light_type", "info", "desired", "2");
    quick_assign('.vigipool_common_modal_all_light_type_micro_cuts', "u8_w", "light_type", "info", "desired", "3");

    var undefined = "00000000";
    var desactive = "00000000";
    var chauffage = "00001110";
    var trait = "00010110";
    var surpresseur = "00000110";
    var aux = "00000000";

    undefined = converter("bin", "dec", undefined);
    desactive = converter("bin", "dec", desactive);
    chauffage = converter("bin", "dec", chauffage);
    trait = converter("bin", "dec", trait);
    surpresseur = converter("bin", "dec", surpresseur);
    aux = converter("bin", "dec", aux);

    quick_assign('.vigipool_common_modal_all_aux_type_none', "u8_w", "aux_type", "info", "desired", "1");
    quick_assign('.vigipool_common_modal_all_aux_type_heater', "u8_w", "aux_type", "info", "desired", "2");
    quick_assign('.vigipool_common_modal_all_aux_type_treatment', "u8_w", "aux_type", "info", "desired", "3");
    quick_assign('.vigipool_common_modal_all_aux_type_booster', "u8_w", "aux_type", "info", "desired", "4");
    quick_assign('.vigipool_common_modal_all_aux_type_auxiliary', "u8_w", "aux_type", "info", "desired", "5");

    quick_assign('.vigipool_common_modal_all_aux_type_none', "u16_w", "aux_conf", "info", "desired", desactive);
    quick_assign('.vigipool_common_modal_all_aux_type_heater', "u16_w", "aux_conf", "info", "desired", chauffage);
    quick_assign('.vigipool_common_modal_all_aux_type_treatment', "u16_w", "aux_conf", "info", "desired", trait);
    quick_assign('.vigipool_common_modal_all_aux_type_booster', "u16_w", "aux_conf", "info", "desired", surpresseur);
    quick_assign('.vigipool_common_modal_all_aux_type_auxiliary', "u16_w", "aux_conf", "info", "desired", aux);

    quick_assign('.vigipool_common_modal_all_winter_mode_off', "u8_w", "winter_mode", "info", "desired", "0");
    quick_assign('.vigipool_common_modal_all_winter_mode_on', "u8_w", "winter_mode", "info", "desired", "1");

    $('.vigipool_common_modal_all_button_deletion').click(function () {

        console.log("Launching the script");
        $('.vigipool_scanner').eq(eq_modal).click();

        console.log("updates");
        actualize_data();
    });
</script>