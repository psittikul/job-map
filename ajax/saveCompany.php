<?php
include "../includes/pg-connection.php";
$company_name = pg_escape_string($connection, $_POST["company_name"]);
$remote_work = $_POST["remote_work"];
$currently_hiring = $_POST['currently_hiring'];
/* The following fields would only be posted if this were being called from the addCompany form, so make them null if they
were not passed to the AJAX call */
$company_website = isset($_POST['company_website']) ? mysqli_real_escape_string($connection, $_POST['company_website']) : NULL;
$company_glassdoor = isset($_POST['company_glassdoor']) ? mysqli_real_escape_string($connection, $_POST['company_glassdoor']) : NULL;
$number_of_employees = isset($_POST['number_of_employees']) ? mysqli_real_escape_string($connection, $_POST['number_of_employees']) : NULL;
$company_id = $_POST['company_id'];

/** TO-DO: If a company ID already exists, just update that company */
if ($company_id > 0) {
    $query = "UPDATE company SET remote_work = $remote_work, currently_hiring = $currently_hiring WHERE company_id = $company_id";
    if (mysqli_query($connection, $query)) {
        $id = mysqli_insert_id($connection);
        echo json_encode(array("message" => "Successfully saved data", "status" => 0, "company_id" => $company_id));
    } else {
        echo json_encode(array("message" => "error", "status" => -1, "id" => mysqli_errno($connection)));
    }
} else {
    $query = "INSERT INTO company(company_name, company_website, company_glassdoor, currently_hiring, number_of_employees, remote_work)
    VALUES('$company_name', '$company_website', '$company_glassdoor', $currently_hiring, '$number_of_employees', $remote_work)";
    if (mysqli_query($connection, $query)) {
        $id = mysqli_insert_id($connection);
        echo json_encode(array("message" => "Successfully saved data", "status" => 0, "company_id" => $id));
    } else {
        echo json_encode(array("message" => "error", "status" => -1, "id" => mysqli_errno($connection)));
    }
}

