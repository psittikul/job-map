<?php
include "../includes/connection.php";
$city = $_POST["city"];
$state = $_POST["state"];
$country = $_POST["country"];

$preexistingQuery = "SELECT * FROM city WHERE name LIKE %$city%";
$insertQuery = "INSERT IGNORE INTO city(name, state, country) VALUES('$city', '$state', '$country')";


if ($result = mysqli_query($connection, $insertQuery)) {
    $id = mysqli_insert_id($connection);
    echo json_encode(array("message"=>"Successfully inserted city", "id"=>$id));
}
else {
    echo "ERROR: COULD NOT EXECUTE QUERY " . $insertQuery . " " .  mysqli_error($connection);
    echo json_encode(array("message"=>"error", "data"=>mysqli_error($connection)));
}

