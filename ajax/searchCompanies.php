<?php
include "../includes/pg-connection.php";
$searchString = $_GET['search'];
$companies = array();
$query = "SELECT company_id, company_name FROM company WHERE LOWER(company_name) LIKE LOWER('%$searchString%')";
if ($results = pg_query($connection, $query)) {
    while ($company = pg_fetch_object($results)) {
        $companies[] = array("company_id"=>$company->company_id, "company_name"=>$company->company_name);
    }
    echo json_encode(array("data"=>$companies, "status"=>0));
}
else {
    echo json_encode(array("data"=>"ERROR: could not execute search query: " . $query . " " . pg_last_error($connection), "status"=>-1));
}
