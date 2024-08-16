<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
}

include 'manager.php';

modal_top();
?>

<div class="transition vigipool_ui_text_modal">

    <h2 class="transition vigipool_modal_title"></h2>

    <h3><?php get_text("ph"); ?></h3>

    <br/>
    <br/>
    <br/>
    <br/>

    <h3><?php get_text("type_of_product_injected"); ?></h3>
    <button type="button" class="transition btn btn-light vigipool_modal_source_ph_ph_m">pH-</button>
    <button type="button" class="transition btn btn-light vigipool_modal_source_ph_ph_p">pH+</button>

    <br/>
    <br/>

    <h3><?php get_text("maximum_volume_injected"); ?></h3>
    <?php create_slider("vol_max_24h", 0, 20); ?>

    <br/>
    <br/>

    <h3><?php get_text("product_volume_available"); ?></h3>
    <?php create_slider("vol_bac", 0, 50); ?>
</div>

<?php modal_bot(); ?>

<script>
    common_modals_finish_load();
    eq_modal = <?php echo filter_input(INPUT_GET, "eq_modal", FILTER_DEFAULT) ?>;
    var ip_selected = $(".vigipool_ipaddr").eq(eq_modal).html();
    var id_selected = $(".vigipool_device_id").eq(eq_modal).html();
    set_title(ip_selected, id_selected, "vigipool_modal_title");

    var phileox_inject_on = get_value_from_eq(eq_modal, "inject_on", "phileox");
    var phileox_vol_24h_inject = get_value_from_eq(eq_modal, "vol_24h_inject", "phileox");
    var phileox_vol_max_24h = get_value_from_eq(eq_modal, "vol_max_24h", "phileox");
    var phileox_vol_bac = get_value_from_eq(eq_modal, "vol_bac", "phileox");

    var daisyph_inject_on = get_value_from_eq(eq_modal, "inject_on", "daisyph");
    var daisyph_vol_24h_inject = get_value_from_eq(eq_modal, "vol_24h_inject", "daisyph");
    var daisyph_vol_max_24h = get_value_from_eq(eq_modal, "vol_max_24h", "daisyph");
    var daisyph_vol_bac = get_value_from_eq(eq_modal, "vol_bac", "daisyph");

    if (phileox_inject_on != undefined) var inject_on = phileox_inject_on;
    if (phileox_vol_24h_inject != undefined) var vol_24h_inject = phileox_vol_24h_inject;
    if (phileox_vol_max_24h != undefined) var vol_max_24h = phileox_vol_max_24h;
    if (phileox_vol_bac != undefined) var vol_bac = phileox_vol_bac;

    if (daisyph_inject_on != undefined) var inject_on = daisyph_inject_on;
    if (daisyph_vol_24h_inject != undefined) var vol_24h_inject = daisyph_vol_24h_inject;
    if (daisyph_vol_max_24h != undefined) var vol_max_24h = daisyph_vol_max_24h;
    if (daisyph_vol_bac != undefined) var vol_bac = daisyph_vol_bac;


    // Volume maximum injecté

    var id = "vol_max_24h";
    var init_value = vol_max_24h * 10;
    var division = 10;
    var unit = "L/" + get_text("day");
    var disable = true;
    var type = "u16_w";
    var variable = "vol_max_24h";
    var info = "info";
    var desired = "desired";
    var value = 10;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

    // Volume produit disponible

    var id = "vol_bac";
    var init_value = vol_bac / 100;
    var division = 1;
    var unit = "L";
    var disable = false;
    var type = "u16_w";
    var variable = "vol_bac";
    var info = "info";
    var desired = "desired";
    var value = 100;
    create_slider(id, init_value, division, unit, disable, type, variable, info, desired, value);

</script>