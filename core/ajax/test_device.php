<?php

$ip = $_POST["ip"];
$speed = $_POST["speed"];

if ($speed === "slow") {
    $output = shell_exec("timeout 0.5 mosquitto_sub -v -t \"#\" -h $ip");
}
if ($speed === "fast") {
    $output = shell_exec("timeout 0.1 mosquitto_sub -v -t \"#\" -h $ip");
}

$explode = explode("/", $output);

$id = $explode[0];

$result = "$ip/$id";

if ($id !== "") {
    echo $result;
} else {
    echo "";
}



