console.log("READY");

setInterval(function () {

    // console.log("go");

    // General
    // var selector_tild = "#vigipool > div > div > center";
    // var image_tild = "http://192.168.41.64/plugins/vigipool/desktop/img/vigipool.png";
    // $(selector_tild).css("background-image", "url(" + image_tild + ")");
    // $(selector_tild).css("background-repeat", "no-repeat");
    // $(selector_tild).css("background-position", "center");
    // $(selector_tild).css("background-size", "20%");

    var temperature_label_log = "#vigipool > div > div > center > div:nth-child(1) > div"
    $(temperature_label_log).html("");

    // Temperature
    // var selector_all_temp = "#vigipool > div > div > center > div.cmd.cmd-widget.arcgauge.history.cursor.tooltipstered";
    // $(selector_all_temp).css("background-image", "url(" + image_tild + ")");
    // $(selector_all_temp).css("background-repeat", "no-repeat");
    // $(selector_all_temp).css("background-position", "center");
    // $(selector_all_temp).css("background-size", "20%");

    var temperature_label_selector = "#vigipool > div > div > center > div.cmd.cmd-widget.arcgauge.history.cursor.tooltipstered > div.title > span";
    $(temperature_label_selector).css("color", "white");
    $(temperature_label_selector).html("Température");

    var selector_temp_gauge = "#vigipool > div > div > center > div.cmd.cmd-widget.arcgauge.history.cursor.tooltipstered > div.content-sm > div.gauge.cursor.history.cursor";
    $(selector_temp_gauge).css("filter", "hue-rotate(300deg) brightness(1.5)");

    var selector_temp_gauge_value = "#vigipool > div > div > center > div.cmd.cmd-widget.arcgauge.history.cursor.tooltipstered > div.content-sm > div.gaugeValue";
    $(selector_temp_gauge_value).css("filter", "hue-rotate(300deg) brightness(1.5)");

    // Tempature Value
    var selector_temp = "#vigipool > div > div > center > div.cmd.cmd-widget.arcgauge.history.cursor.tooltipstered > div.state > strong";

    var value_temp = parseInt($(selector_temp).html());
    console.log("value_temp = " + value_temp);

    var rgb = value_temp_to_rgb(value_temp);
    console.log("rgb = " + rgb);

    $(selector_temp).css('color', 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')');


}, 1000);

function value_temp_to_rgb(value_temp) {

    var red = 0;
    var green = 0;
    var blue = 0;

    if (value_temp === 0) {
        red = 55;
        green = 155;
        blue = 255;
    }
    if (value_temp === 1) {
        red = 60;
        green = 160;
        blue = 250;
    }
    if (value_temp === 2) {
        red = 65;
        green = 165;
        blue = 245;
    }
    if (value_temp === 3) {
        red = 70;
        green = 170;
        blue = 240;
    }
    if (value_temp === 4) {
        red = 75;
        green = 175;
        blue = 235;
    }
    if (value_temp === 5) {
        red = 80;
        green = 180;
        blue = 230;
    }
    if (value_temp === 6) {
        red = 85;
        green = 185;
        blue = 225;
    }
    if (value_temp === 7) {
        red = 90;
        green = 190;
        blue = 220;
    }
    if (value_temp === 8) {
        red = 95;
        green = 195;
        blue = 215;
    }
    if (value_temp === 9) {
        red = 100;
        green = 200;
        blue = 210;
    }
    if (value_temp === 10) {
        red = 105;
        green = 205;
        blue = 205;
    }
    if (value_temp === 11) {
        red = 110;
        green = 210;
        blue = 200;
    }
    if (value_temp === 12) {
        red = 115;
        green = 215;
        blue = 195;
    }
    if (value_temp === 13) {
        red = 120;
        green = 220;
        blue = 190;
    }
    if (value_temp === 14) {
        red = 125;
        green = 225;
        blue = 185;
    }
    if (value_temp === 15) {
        red = 130;
        green = 230;
        blue = 180;
    }
    if (value_temp === 16) {
        red = 135;
        green = 235;
        blue = 175;
    }
    if (value_temp === 17) {
        red = 140;
        green = 240;
        blue = 170;
    }
    if (value_temp === 18) {
        red = 145;
        green = 245;
        blue = 165;
    }
    if (value_temp === 19) {
        red = 150;
        green = 250;
        blue = 160;
    }
    if (value_temp === 20) {
        red = 155;
        green = 255;
        blue = 155;
    }
    if (value_temp === 21) {
        red = 160;
        green = 250;
        blue = 150;
    }
    if (value_temp === 22) {
        red = 165;
        green = 245;
        blue = 145;
    }
    if (value_temp === 23) {
        red = 170;
        green = 240;
        blue = 140;
    }
    if (value_temp === 24) {
        red = 175;
        green = 235;
        blue = 135;
    }
    if (value_temp === 25) {
        red = 180;
        green = 230;
        blue = 130;
    }
    if (value_temp === 26) {
        red = 185;
        green = 225;
        blue = 125;
    }
    if (value_temp === 27) {
        red = 190;
        green = 220;
        blue = 120;
    }
    if (value_temp === 28) {
        red = 195;
        green = 215;
        blue = 115;
    }
    if (value_temp === 29) {
        red = 200;
        green = 210;
        blue = 110;
    }
    if (value_temp === 30) {
        red = 205;
        green = 205;
        blue = 105;
    }
    if (value_temp === 31) {
        red = 210;
        green = 200;
        blue = 100;
    }
    if (value_temp === 32) {
        red = 215;
        green = 195;
        blue = 95;
    }
    if (value_temp === 33) {
        red = 220;
        green = 190;
        blue = 90;
    }
    if (value_temp === 34) {
        red = 225;
        green = 185;
        blue = 85;
    }
    if (value_temp === 35) {
        red = 230;
        green = 180;
        blue = 80;
    }
    if (value_temp === 36) {
        red = 235;
        green = 175;
        blue = 75;
    }
    if (value_temp === 37) {
        red = 240;
        green = 170;
        blue = 70;
    }
    if (value_temp === 38) {
        red = 245;
        green = 165;
        blue = 65;
    }
    if (value_temp === 39) {
        red = 250;
        green = 160;
        blue = 60;
    }
    if (value_temp === 40) {
        red = 255;
        green = 155;
        blue = 55;
    }
    if (value_temp === 65535) {
        red = 255;
        green = 0;
        blue = 0;
    }

    let result = [red, green, blue];

    return result;

}