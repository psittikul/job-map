<?php
include "../includes/connection.php";
$searchString = $_GET['search'];
$companies = array();
$query = "SELECT company_id, company_name FROM company WHERE company_name LIKE '%$searchString%'";
if ($results = mysqli_query($connection, $query)) {
    while ($company = $results->fetch_object()) {
        $companies[] = array("company_id"=>$company->company_id, "company_name"=>$company->company_name);
    }
    echo json_encode(array("data"=>$companies, "status"=>0));
}
else {
    echo json_encode(array("data"=>"ERROR: could not execute search query: " . $query . " " . mysqli_error($connection), "status"=>0));
}
