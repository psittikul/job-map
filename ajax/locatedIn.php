<?php
include "../includes/pg-connection.php";
$object_type = $_POST['object_type'];
$object_id = $_POST['object_id'];
$object_locations = $_POST['object_locations'];

foreach ($object_locations as $location) {
    $city = pg_escape_string($connection, trim(explode(", ", $location)[0]));
    $state = pg_escape_string($connection, trim(explode(", ", $location)[1]));
    $country = pg_escape_string($connection, trim(explode(", ", $location)[2]));
    /**
     * Depending on the type of object being associated with locations, insert into the company_located_in
     * or job_located_in table accordingly
     *  */
    switch ($object_type) {
        case "company":
            $query = "INSERT INTO company_located_in(object_id, city, state, country) VALUES($object_id,
        '$city', '$state', '$country')";
            break;
        case "job":
            $query = "INSERT INTO job_located_in(object_id, city, state, country) VALUES($object_id,
        '$city', '$state', '$country')";
            break;
    }
    if ($result = pg_query($connection, $query)) {
        echo json_encode(array("message" => "Successfully inserted into located_in", "status" => 0, "object_id" => $object_id));
    } else {
        echo json_encode(array("message" => pg_last_error($connection), "status" => -1));
    }
}
