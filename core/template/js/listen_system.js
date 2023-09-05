function check_all(debug = "") {

//     if (debug !== "") {
//         console.log("debug check_all : " + debug);
//     }

    update_vigipool_modal_all();

    update_vigipool_modal_auxiliary_1();
    update_vigipool_modal_auxiliary_2();
    update_vigipool_modal_auxiliary();
    update_vigipool_modal_auxiliary_prog_1();
    update_vigipool_modal_auxiliary_prog_2();

    update_vigipool_modal_light_advanced_options();
    update_vigipool_modal_filtration_advanced_options();
    update_vigipool_modal_auxiliary_advanced_options();

    update_vigipool_modal_ely();

    update_vigipool_modal_filtration();
    update_vigipool_modal_filtration_prog_1();
    update_vigipool_modal_filtration_prog_2();

    update_vigipool_modal_filtration_m();
    update_vigipool_modal_filtration_m_prog_1();

    update_vigipool_modal_light();
    update_vigipool_modal_light_prog_1();
    update_vigipool_modal_light_prog_2();

    update_vigipool_modal_light_m();
    update_vigipool_modal_light_m_prog_1();

    update_vigipool_modal_orp();
    update_vigipool_modal_ph();

    update_vigipool_modal_x3_state();
    update_vigipool_modal_x3_state_prog_1();
    update_vigipool_modal_x3_state_prog_2();

    update_vigipool_ui_aux_state();
    update_vigipool_ui_aux1_state();
    update_vigipool_ui_aux2_state();

    update_vigipool_ui_ely_state();

    update_vigipool_ui_filt_m_state();
    update_vigipool_ui_filt_state();

    update_vigipool_ui_light_m_state();
    update_vigipool_ui_light_state();

    update_vigipool_ui_logo();

    update_vigipool_ui_mqtt();

    update_vigipool_ui_source_orp();
    update_vigipool_ui_source_ph();
    update_vigipool_ui_value_orp();
    update_vigipool_ui_value_ph();

    update_vigipool_ui_water();

    update_vigipool_ui_x3_state();
}

var listened = ["vigipool_scanner", "vigipool_aux1_state", "vigipool_aux2_state", "vigipool_aux_state", "vigipool_filt_state", "vigipool_filt_state_m", "vigipool_flow_on", "vigipool_light_state", "vigipool_light_state_m", "vigipool_winter_mode", "vigipool_action", "vigipool_ap_bcast_duration", "vigipool_aux1_mode", "vigipool_aux1_state", "vigipool_aux1_type", "vigipool_aux2_mode", "vigipool_aux2_state", "vigipool_aux2_type", "vigipool_aux_conf", "vigipool_aux_conf_m", "vigipool_aux_min_temp", "vigipool_aux_state", "vigipool_aux_temp_hyst", "vigipool_aux_type", "vigipool_backwash", "vigipool_bus_err_9", "vigipool_bus_err", "vigipool_choc_duration", "vigipool_consigne_orp", "vigipool_consigne_ph", "vigipool_consigne_temp", "vigipool_couv_on", "vigipool_current_ely", "vigipool_date_mes", "vigipool_date_mes_orp", "vigipool_date_mes_ph", "vigipool_ely_duration_compensated", "vigipool_ely_duration_in_minut", "vigipool_ely_duration_theo", "vigipool_epoch", "vigipool_error", "vigipool_filt_cur", "vigipool_filt_cur_nom", "vigipool_filt_light_force", "vigipool_filt_mode", "vigipool_filt_serv_inter", "vigipool_filt_state", "vigipool_filt_state_m", "vigipool_flow_on", "vigipool_frost_free", "vigipool_horizontal", "vigipool_hw_vers", "vigipool_inject_on", "vigipool_jeedom_dbg", "vigipool_jeedom_interval", "vigipool_lat", "vigipool_light_bright", "vigipool_light_code", "vigipool_light_mode", "vigipool_light_speed", "vigipool_light_state", "vigipool_light_state_m", "vigipool_light_timer", "vigipool_light_type", "vigipool_light_type_m", "vigipool_long", "vigipool_lvl_reg", "vigipool_meteor_errors", "vigipool_meteor_version", "vigipool_mode_choc", "vigipool_mode_ely", "vigipool_model_id", "vigipool_mode_ph", "vigipool_mqtt_connected", "vigipool_orp_calibration_target", "vigipool_ph_calibration_target", "vigipool_power_ely", "vigipool_priority", "vigipool_prod_chlore", "vigipool_prod_on", "vigipool_server_on", "vigipool_source_orp", "vigipool_source_ph", "vigipool_state", "vigipool_sunset", "vigipool_sw_vers", "vigipool_temp_accuracy", "vigipool_temp_min_off_ely", "vigipool_tile", "vigipool_ui", "vigipool_update_ota", "vigipool_value_cond", "vigipool_value_orp", "vigipool_value_ph", "vigipool_value_temp", "vigipool_value_temp_int", "vigipool_valve_on", "vigipool_vol_24h_inject", "vigipool_vol_bac", "vigipool_vol_max_24h", "vigipool_voltage_ely", "vigipool_vol_tot_inject", "vigipool_water_hardness", "vigipool_aux1_sched", "vigipool_aux2_sched", "vigipool_aux_sched_1", "vigipool_aux_sched", "vigipool_aux_sched_m", "vigipool_device_id", "vigipool_filt_sched", "vigipool_filt_sched_m", "vigipool_ipaddr", "vigipool_language", "vigipool_lat", "vigipool_light_sched", "vigipool_light_sched_m", "vigipool_long", "vigipool_name", "vigipool_orp_adjust", "vigipool_ph_adjust", "vigipool_rssi", "vigipool_serial_num", "vigipool_source_orp", "vigipool_source_ph", "vigipool_source_temp", "vigipool_temp_adjust", "vigipool_tz", "vigipool_sunrise", "vigipool_x3_sched", "vigipool_dmx_ch", "vigipool_x3_state", "vigipool_x3_bright", "vigipool_x3_speed", "vigipool_rgbw", "vigipool_x3_color", "vigipool_p1_color", "vigipool_p2_color"];

$(document).ready(function () {
    for (let i = 0; i < listened.length; i++) {
        $("." + listened[i]).on('DOMSubtreeModified', function () {
            check_all("1");
        });
    }
});

check_all("2");
$(document).ready(function () {
    check_all("6");
    // console.log("check_screen begin");
    check_screen();
    check_data();
    // console.log("check_screen end");
});