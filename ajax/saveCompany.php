<?php
include "../includes/pg-connection.php";
$company_name = pg_escape_string($connection, $_POST["company_name"]);
$remote_work = $_POST["remote_work"];
$currently_hiring = $_POST['currently_hiring'];
$company_website = pg_escape_string($connection, $_POST['company_website']);
$company_glassdoor = pg_escape_string($connection, $_POST["company_glassdoor"]);
$number_of_employees = pg_escape_string($connection, $_POST["number_of_employees"]);
$company_id = $_POST['company_id'];


if ($company_id > 0) {
    /** TO-DO: If a company ID already exists, just update that company */
} else {
    $insertQuery = "INSERT INTO company(company_name, company_website, company_glassdoor, currently_hiring, number_of_employees, remote_work)
    VALUES('$company_name', '$company_website', '$company_glassdoor', '$currently_hiring', '$number_of_employees', '$remote_work') RETURNING company_id";
    if ($result = pg_query($connection, $insertQuery)) {
        $id = pg_fetch_result($result, 0, "company_id");
        echo json_encode(array("status"=>0, "message"=>"Successfully inserted new company", "company_id"=>$id));
    } else {
        echo json_encode(array("status" => -1, "message" => pg_last_error($connection)));
    }
}
