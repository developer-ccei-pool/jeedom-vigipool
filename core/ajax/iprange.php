<?php

$ip = filter_input(INPUT_POST, "ip", FILTER_DEFAULT);
$mask = filter_input(INPUT_POST, "mask", FILTER_DEFAULT);

echo shell_exec("sipcalc $ip/$mask | grep 'Usable range'");
