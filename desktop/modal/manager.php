<?php

function get_text($id, $echo = true) {

    $language = config::byKey('language', 'core');

    $result = "";

    switch ($language) {
        case "fr_FR":
            include 'language_french.php';
            $result = $language_fr[$id];
            break;
        case "en_US":
            include 'language_english.php';
            $result = $language_en[$id];
            break;
        case "es_ES":
            include 'language_spanish.php';
            $result = $language_sp[$id];
            break;
        case "de_DE":
            include 'language_german.php';
            $result = $language_ge[$id];
            break;
        case "it_IT":
            include 'language_italian.php';
            $result = $language_it[$id];
            break;
        default:
            include 'language_english.php';
            $result = $language_en[$id];
            break;
    }

    if (isset($result)) {
        if ($echo) {
            echo $result;
        } else {
            return $result;
        }
    } else {
        echo "<p>ERROR : get_text($id)</p>";
    }
}

function create_ui_speed($file_name) {

    $speed = get_text("speed", false);
    $slow = get_text("slow", false);
    $normal = get_text("normal", false);
    $fast = get_text("fast", false);

    echo "<h3 class=\"transition {$file_name}_speed_title\">$speed</h3>";

    echo "<table class=\"centerer\">";
    echo "<tr class=\"transition {$file_name}_speed\">";
    echo "<th>";
    echo "<img style=\"filter: invert(1); vertical-align: super;\" src=\"/plugins/vigipool/desktop/img/rocket-takeoff-fill.svg\">";
    echo "</th>";
    echo "<th>";
    echo "<p class=\"transition\" style=\"border-radius: 10px;width: 100px;text-align: center;cursor: pointer;\">$slow</p>";
    echo "</th>";
    echo "<th>";
    echo "<p class=\"transition\" style=\"border-radius: 10px;width: 100px;text-align: center;cursor: pointer;\">$normal</p>";
    echo "</th>";
    echo "<th>";
    echo "<p class=\"transition\" style=\"border-radius: 10px;width: 100px;text-align: center;cursor: pointer;\">$fast</p>";
    echo "</th>";
    echo "</tr>";
    echo "</table>";
}

function create_ui_bright($file_name) {

    $bright = get_text("bright", false);
    $low = get_text("low", false);
    $medium = get_text("medium", false);
    $high = get_text("high", false);
    $max = get_text("max", false);

    echo "<h3 class=\"transition {$file_name}_bright_title\">$bright</h3>";

    echo "<table class=\"centerer\">";
    echo "<tr class=\"transition {$file_name}_bright\">";
    echo "<th>";
    echo "<img style=\"filter: invert(1); vertical-align: super;\" src=\"/plugins/vigipool/desktop/img/sun.svg\">";
    echo "</th>";
    echo "<!--<th style=\"border-radius: 50px;;background-image: linear-gradient(to right, transparent , white); width: 102px;\">-->";
    echo "<!--<p>⬤</p>-->";
    echo "<!--</th>-->";
    echo "<th>";
    echo "<p class=\"transition\" style=\"border-radius: 10px;width: 100px;text-align: center;cursor: pointer;\">$low</p>";
    echo "</th>";
    echo "<th>";
    echo "<p class=\"transition\" style=\"border-radius: 10px;width: 100px;text-align: center;cursor: pointer;\">$medium</p>";
    echo "</th>";
    echo "<th>";
    echo "<p class=\"transition\" style=\"border-radius: 10px;width: 100px;text-align: center;cursor: pointer;\">$high</p>";
    echo "</th>";
    echo "<th>";
    echo "<p class=\"transition\" style=\"border-radius: 10px;width: 100px;text-align: center;cursor: pointer;\">$max</p>";
    echo "</th>";
    echo "</tr>";
    echo "</table>";
}

function create_ui_tild_light($file_name) {

    $colors = get_text("colors", false);
    $warm = get_text("warm", false);
    $cold = get_text("cold", false);
    $blue = get_text("blue", false);
    $lagoon = get_text("light_color_lagoon", false);
    $cyan = get_text("light_color_cyan", false);
    $green = get_text("green", false);
    $purple = get_text("light_color_purple", false);
    $magenta = get_text("light_color_magenta", false);
    $pink = get_text("light_color_pink", false);
    $red = get_text("red", false);
    $orange = get_text("light_color_orange", false);
    $favorite = get_text("favorite", false);
    $sequences = get_text("sequences", false);
    $gradiant = get_text("gradiant", false);
    $rainbow = get_text("rainbow", false);
    $parade = get_text("parade", false);
    $techno = get_text("techno", false);
    $horizon = get_text("horizon", false);
    $random = get_text("random", false);
    $magical = get_text("magical", false);

    echo "<h3>$colors</h3>";

    echo "<table class=\"centerer\" style=\"table-layout: fixed;width: 400px;\">";
    echo "<tr>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_warm_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_cold_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot  {$file_name}_blue_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_lagoon_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_cyan_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_green_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th class=\"transition vigipool_label {$file_name}_warm_label\">$warm</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_cold_label\">$cold</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_blue_label\">$blue</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_lagoon_label\">$lagoon</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_cyan_label\">$cyan</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_green_label\">$green</th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_purple_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_magenta_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_pink_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_red_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_orange_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "<th class=\"transition vigipool_button\" ><span class=\"clickable transition dot {$file_name}_favorite_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></span></th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th class=\"transition vigipool_label {$file_name}_purple_label\">$purple</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_magenta_label\">$magenta</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_pink_label\">$pink</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_red_label\">$red</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_orange_label\">$orange</th>";
    echo "<th class=\"transition vigipool_label {$file_name}_favorite_label\">$favorite</th>";
    echo "</tr>";
    echo "</table>";

    echo "<h3>$sequences</h3>";

    echo "<table class=\"centerer\">";
    echo "<tr>";
    echo "<th class=\"clickable transition vigipool_button_sequence {$file_name}_gradiant_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></th>";
    echo "<th class=\"clickable transition vigipool_button_sequence {$file_name}_rainbow_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></th>";
    echo "<th class=\"clickable transition vigipool_button_sequence {$file_name}_parade_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></th>";
    echo "<th class=\"clickable transition vigipool_button_sequence {$file_name}_techno_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th class=\"transition vigipool_label_sequence {$file_name}_gradiant_label\">$gradiant</th>";
    echo "<th class=\"transition vigipool_label_sequence {$file_name}_rainbow_label\">$rainbow</th>";
    echo "<th class=\"transition vigipool_label_sequence {$file_name}_parade_label\">$parade</th>";
    echo "<th class=\"transition vigipool_label_sequence {$file_name}_techno_label\">$techno</th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th class=\"clickable transition vigipool_button_sequence {$file_name}_horizon_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></th>";
    echo "<th class=\"clickable transition vigipool_button_sequence {$file_name}_random_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></th>";
    echo "<th class=\"clickable transition vigipool_button_sequence {$file_name}_magical_button\"><img src=\"/plugins/vigipool/desktop/img/check-circle.svg\"></th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th class=\"transition vigipool_label_sequence {$file_name}_horizon_label\">$horizon</th>";
    echo "<th class=\"transition vigipool_label_sequence {$file_name}_random_label\">$random</th>";
    echo "<th class=\"transition vigipool_label_sequence {$file_name}_magical_label\">$magical</th>";
    echo "</tr>";
    echo "</table>";
}

function create_ui_timer($file_name) {
    $state = get_text("state", false);
    $off = get_text("off", false);
    $on = get_text("on", false);

    $common_timer = get_text("common_timer", false);
    $start_timer = get_text("start_timer", false);

    echo "<h3>$common_timer</h3>";

    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_timer_off\">$off</button>";
    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_timer_on\">$on</button>";
}

function create_ui_options($file_name) {

    $see_advanced_options = get_text("see_advanced_options", false);

    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_see_advanced_options\">$see_advanced_options</button>";
}

function create_ui_prog_auto($file_name) {

    $lighting_mode = get_text("lighting_mode", false);
    $off = get_text("off", false);
    $on = get_text("on", false);
    $auto = get_text("auto", false);
    $prog = get_text("prog", false);

    echo "<h3>$lighting_mode</h3>";

    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_off\">$off</button>";
    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_on\">$on</button>";
    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_prog\">$prog</button>";
    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_auto\">$auto</button>";
}

function create_ui_on_off($file_name) {

    $state = get_text("state", false);
    $off = get_text("off", false);
    $on = get_text("on", false);

    echo "<h3>$state</h3>";

    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_off\">$off</button>";
    echo "<button type=\"button\" class=\"transition btn btn-light {$file_name}_button_on\">$on</button>";
}

function create_slider($id, $min, $max) {
    echo "<p id=\"$id\"></p>";
    echo "<div class=\"slidecontainer\">";
    echo "<input type=\"range\" min=\"$min\" max=\"$max\" value=\"$min\" class=\"slider\" id=\"my$id\">";
    echo "</div>";
}

function create_program($file_name, $sched_number) {

    $ratio = 2.5;
    $width = 100 / $ratio;
    $height = 100 / $ratio;
    $cx = 50 / $ratio;
    $cy = 50 / $ratio;
    $r = 40 / $ratio;

    $program = get_text("program", false);
    $monday = get_text("monday", false);
    $tuesday = get_text("tuesday", false);
    $wednesday = get_text("wednesday", false);
    $thursday = get_text("thursday", false);
    $friday = get_text("friday", false);
    $saturday = get_text("saturday", false);
    $sunday = get_text("sunday", false);
    $duration = get_text("duration", false);
    $hours = get_text("hours", false);

    echo "<table class=\"centerer\">";
    echo "<tr>";
    echo "<td>$program $sched_number</td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_off_on\">Off/On</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_lundi\">$monday</td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_mardi\">$tuesday</td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_mercredi\">$wednesday</td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_jeudi\">$thursday</td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_vendredi\">$friday</td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_samedi\">$saturday</td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_dimanche\">$sunday</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_color_label\"></td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_color\"></td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_color_circle\">";
    echo "<svg style=\"display:none;\"  width=\"$width\" height=\"$height\">";
    echo "<circle cx=\"$cx\" cy=\"$cy\" r=\"$r\" fill=\"#ffffff\" />";
    echo "</svg>";
    echo "<img style=\"display:none;\" src=\"/plugins/vigipool/desktop/img/null.png\" alt=\"rainbow\" width=\"$width\" height=\"$height\"/>";
    echo "</td>";
    echo "<td></td>";
    echo "<td>$duration : </td>";
    echo "<td class=\"clickable transition {$file_name}_{$sched_number}_duration\"></td>";
    echo "<td>$hours</td>";
    echo "</tr>";
    echo "</table>";
}

function create_program_simple($file_name, $sched_number) {

    $ratio = 2.5;
    $width = 100 / $ratio;
    $height = 100 / $ratio;
    $cx = 50 / $ratio;
    $cy = 50 / $ratio;
    $r = 40 / $ratio;

    $program = get_text("program", false);
    $from = get_text("from", false);
    $to = get_text("to", false);
    $duration = get_text("duration", false);
    $hours = get_text("hours", false);

    echo "<h4>$program $sched_number</h4>";

    echo "<table class=\"centerer\">";
    echo "<tr>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_from_label_1\">$from</td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_from_value_1\"></td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_to_label_1\">$to</td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_to_value_1\"></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_from_label_2\">$from</td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_from_value_2\"></td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_to_label_2\">$to</td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_to_value_2\"></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_from_label_3\">$from</td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_from_value_3\"></td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_to_label_3\">$to</td>";
    echo "<td class=\"transition {$file_name}_{$sched_number}_to_value_3\"></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "<td></td>";
    echo "</tr>";
    echo "</table>";

    echo "<p class=\"transition {$file_name}_{$sched_number}_duration\">$duration : $hours</p>";
}

function modal_top() {
    echo "<div class=\"top_container\" >";
    echo "<div class=\"top_box\">";
    echo "<div class=\"scroll_container\">";
    echo "<div class=\"scroll_sliding-background\">";
    echo "</div>";
    echo "</div>";
    echo "</div>";
    echo "<div class=\"top_box top_overlay center\">";
}

function modal_bot() {
    echo "</div>";
    echo "</div>";
}
