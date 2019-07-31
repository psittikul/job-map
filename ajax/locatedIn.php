<?php
include "../includes/connection.php";
$company_id = $_POST['company_id'];
$company_locations = $_POST['company_locations'];

foreach ($company_locations as $location) {
    $city = mysqli_real_escape_string($connection, trim(explode(", ", $location)[0]));
    $state = mysqli_real_escape_string($connection, trim(explode(", ", $location)[1]));
    $country = mysqli_real_escape_string($connection, trim(explode(", ", $location)[2]));
    $companyLocationsQuery = "INSERT INTO located_in(object_id, city, state, country) VALUES($company_id,
        '$city', '$state', '$country')";
    if ($result = mysqli_query($connection, $companyLocationsQuery)) {
        echo json_encode(array("message" => "Successfully inserted into located_in", "status" => 0, "company_id" => $company_id));
    } else {
        echo json_encode(array("message" => "ERROR", "status" => -1, "company_id" => -1));
    }
}
