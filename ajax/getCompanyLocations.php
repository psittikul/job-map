<?php
include "../includes/pg-connection.php";
$id = $_GET["id"];
$companyLocationsQuery = "SELECT * FROM located_in WHERE object_id = $id";
$locationString = "<ul style='padding: 0; margin: 0'>";
$states = array();

if ($companyLocations = mysqli_query($connection, $companyLocationsQuery)) {
    /* fetch object array */
    while ($location = $companyLocations->fetch_object()) {
        $states[] = $location->state;
        $locationString .= "<li style='display: inline; white-space: nowrap; margin-right: .5rem;'><i class='fas fa-map-pin' style='margin-right: .25rem; color: #642279'></i>$location->city, $location->state</li>";
    }
    $locationString .= "</ul>";
    echo json_encode(array("states"=>$states, "string"=>$locationString));
} else {
    echo json_encode(array("states"=>NULL, "string"=>"ERROR: COULD NOT EXECUTE QUERY " . $companyInfoQuery . " " .  mysqli_error($connection)));
}
