<?php

$ip = $_POST["ip"];

$output = shell_exec("timeout 1 mosquitto_sub -v -t \"#\" -h $ip");

echo "$output";
