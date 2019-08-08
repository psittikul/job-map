<?php
include "../includes/connection.php";
$object_id = $_POST['object_id'];
$object_locations = $_POST['object_locations'];

foreach ($object_locations as $location) {
    $city = mysqli_real_escape_string($connection, trim(explode(", ", $location)[0]));
    $state = mysqli_real_escape_string($connection, trim(explode(", ", $location)[1]));
    $country = mysqli_real_escape_string($connection, trim(explode(", ", $location)[2]));
    $query = "INSERT INTO located_in(object_id, city, state, country) VALUES($object_id,
        '$city', '$state', '$country')";
    if ($result = mysqli_query($connection, $query)) {
        echo json_encode(array("message" => "Successfully inserted into located_in", "status" => 0, "object_id" => $object_id));
    } else {
        echo json_encode(array("message" => "ERROR", "status" => -1, "object_id" => -1));
    }
}
