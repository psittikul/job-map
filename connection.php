<?php
$connection = mysqli_connect("216.15.108.25", "jmdb", "pw-random-071719", "job-map");

if (!$connection) {
    echo "Error: unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
mysqli_set_charset($connection, "utf8");

?>