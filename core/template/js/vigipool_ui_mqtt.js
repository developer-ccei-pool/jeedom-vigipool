function update_vigipool_ui_mqtt() {

    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        var mqtt_connected = get_value_from_position(i, "mqtt_connected");
        var rssi = get_value_from_position(i, "rssi");
        // console.log("mqtt_connected = " + mqtt_connected);
        // console.log("rssi = " + rssi);

        if (mqtt_connected === 0) {
            $(".vigipool_ui_mqtt_icon").eq(i).attr("src", "/plugins/vigipool/desktop/img/wifi-off.svg");
        } else if (mqtt_connected === 1) {
            if (rssi <= -80)
                $(".vigipool_ui_mqtt_icon").eq(i).attr("src", "/plugins/vigipool/desktop/img/wifi_red.svg");
            else if (-80 <= rssi && rssi <= -70)
                $(".vigipool_ui_mqtt_icon").eq(i).attr("src", "/plugins/vigipool/desktop/img/wifi_yellow.svg");
            else if (rssi >= -70)
                $(".vigipool_ui_mqtt_icon").eq(i).attr("src", "/plugins/vigipool/desktop/img/wifi_green.svg");
        }
    }
}
