<?php

$device = $_POST["device"];
$type = $_POST["type"];
$variable = $_POST["variable"];
$ip = $_POST["ip"];
$value = $_POST["value"];
$output = shell_exec("mosquitto_sub -v -t \"$device/$type/$variable/info/reported\" -h $ip -C 1");
echo "$output";
