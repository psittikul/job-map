<?php
include "../includes/pg-connection.php";
$company_name = pg_escape_string($connection, $_POST["company_name"]);
$remote_work = $_POST["remote_work"];
$currently_hiring = $_POST['currently_hiring'];
$company_website = isset($_POST['company_website']) ? pg_escape_string($connection, $_POST['company_website']) : NULL;
$company_glassdoor = isset($_POST['company_glassdoor']) ? pg_escape_string($connection, $_POST["company_glassdoor"]) : NULL;
$number_of_employees = isset($_POST['number_of_employees']) ? pg_escape_string($connection, $_POST["number_of_employees"]) : NULL;
$company_id = $_POST['company_id'];


if ($company_id > 0) {
    /** TO-DO: If a company ID already exists, just update that company */
    $updateQuery = "UDPATE company SET currently_hiring = '$currently_hiring' WHERE company_id = $company_id";
    if (pg_query($connection, $updateQuery)) {
        echo json_encode(array("status"=>0, "message"=>"Successfully updated company: " . $company_name, "company_id"=>$company_id));
    }
    else {
        echo json_encode(array("status"=>-1, "message"=>"ERROR: " . pg_last_error($connection), "company_id"=>$company_id));
    }
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
