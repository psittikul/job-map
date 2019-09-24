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
    VALUES('$company_name', '$company_website', '$company_glassdoor', '$currently_hiring', '$number_of_employees', '$remote_work')";
    if (pg_query($connection, $insertQuery)) {
        // Get last insert id
        if (($lastInsertQuery = "SELECT currval(pg_get_serial_sequence('company', 'company_id'))")) {
            $id = var_dump(pg_fetch_object($lastInsertQuery));
            echo json_encode(array("message" => "Successfully saved data", "status" => 0, "company_id" => $id));
        } else {
            echo json_encode(array("status" => -1, "message" => pg_last_error($connection)));
        }
    } else {
        echo json_encode(array("status" => -1, "message" => pg_last_error($connection)));
    }
}
