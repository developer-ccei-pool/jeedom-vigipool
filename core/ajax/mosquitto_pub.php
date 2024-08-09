<?php

// mosquitto_pub -t 'tild_70B8F646F378/u8_w/light_state/info/desired' -h 192.168.41.38 -m '3'

$device = filter_input(INPUT_POST, "device", FILTER_DEFAULT);
$type = filter_input(INPUT_POST, "type", FILTER_DEFAULT);
$variable = filter_input(INPUT_POST, "variable", FILTER_DEFAULT);
$info = filter_input(INPUT_POST, "info", FILTER_DEFAULT);
$desired = filter_input(INPUT_POST, "desired", FILTER_DEFAULT);
$ip = filter_input(INPUT_POST, "ip", FILTER_DEFAULT);
$value = filter_input(INPUT_POST, "value", FILTER_DEFAULT);

$output = shell_exec("mosquitto_pub -t '$device/$type/$variable/$info/$desired' -h $ip -m '$value'");
echo "mosquitto_pub -t '$device/$type/$variable/$info/$desired' -h $ip -m '$value'";

// light_state
// light_state
