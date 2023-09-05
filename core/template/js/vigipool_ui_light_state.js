// texts

$(".vigipool_ui_light_label > p").html(get_text("light"));

// other

var warm = "#f4e3be";
var cold = "#ffffff";
var blue = "#7eadcf";
var lagoon = "#a0d4dc";
var cyan = "#c1f1f9";
var green = "#9dc46f";
var purple = "#c25dba";
var magenta = "#cc86c3";
var pink = "#ecb7e7";
var red = "#d3585a";
var orange = "#e3aa52";
var favorite = "#758f8d";

function update_vigipool_ui_light_state() {

    // console.log("update_vigipool_ui_light_state");

    // variables
    var max_devices = $(".vigipool_ipaddr").length;

    for (var i = 0, max = max_devices; i < max; i++) {

        // console.log("i = " + i);

        var light_code = get_value_from_position(i, "light_code");
        var light_state = get_value_from_position(i, "light_state");
        // console.log("light_code = " + light_code);
        // console.log("light_state = " + light_state);

        if (is_variable_available(i, "light_state")) {
            $(".vigipool_ui_light_label").eq(i).show();
            $(".vigipool_ui_light_state").eq(i).show();
        } else {
            $(".vigipool_ui_light_label").eq(i).hide();
            $(".vigipool_ui_light_state").eq(i).hide();
        }

        // actions

        if (!is_variable_available(i, "light_state")) {
            $(".vigipool_ui_tild_light").eq(i).hide();
        } else {

            var light_state = parseInt(light_state);
            var light_code = parseInt(light_code);

            if (light_state === 0) {
                $('.vigipool_ui_light_circle').eq(i).css("background-color", "#085a7d");
                $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                $(".vigipool_ui_light_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/light_off.png");
            } else {
                $(".vigipool_ui_light_circle").eq(i).attr("src", "/plugins/vigipool/desktop/img/light_white.png");
                switch (light_code) {
                    case 0:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", warm);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 1:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", cold);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        $(".vigipool_ui_light_circle").attr("src", "/plugins/vigipool/desktop/img/light_black.png");
                        break;
                    case 2:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", blue);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 3:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", lagoon);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 4:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", cyan);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 10:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", green);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 5:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", purple);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 6:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", magenta);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 7:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", pink);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 8:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", red);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 9:
                        $('.vigipool_ui_light_circle').eq(i).css("background-color", orange);
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "none");
                        break;
                    case 16:
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/sequence_gradiant_large.png\")");
                        break;
                    case 17:
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/sequence_rainbow_large.png\")");
                        break;
                    case 18:
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/sequence_parade_large.png\")");
                        break;
                    case 19:
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/sequence_techno_large.png\")");
                        break;
                    case 20:
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/sequence_horizon_large.png\")");
                        break;
                    case 21:
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/sequence_random_large.png\")");
                        break;
                    case 22:
                        $('.vigipool_ui_light_circle').eq(i).css("background-image", "url(\"/plugins/vigipool/desktop/img/sequence_magical_large.png\")");
                        break;
                }
            }
        }
    }
}

