<?php
$cwd = getcwd();
include "../includes/connection.php";
$name = $_POST['company_name'];
$company_name = mysqli_real_escape_string($connection, $name);
$company_website = mysqli_real_escape_string($connection, $_POST['company_website']);
$company_glassdoor = mysqli_real_escape_string($connection, $_POST['company_glassdoor']);
$currently_hiring = $_POST['currently_hiring'];
$number_of_employees = mysqli_real_escape_string($connection, $_POST['number_of_employees']);
$remote_work = $_POST["remote_work"];


$preexistingQuery = "SELECT * FROM company WHERE company_name LIKE %$company_name%";
$insertQuery = "INSERT INTO company(company_name, company_website, company_glassdoor, currently_hiring, number_of_employees, remote_work)
VALUES('$company_name', '$company_website', '$company_glassdoor', $currently_hiring, '$number_of_employees', $remote_work)";

if (mysqli_query($connection, $insertQuery)) {
    $id = mysqli_insert_id($connection);
    echo json_encode(array("message"=>"Successfully inserted data", "status"=>0, "company_id"=>$id));
}
else {
    // echo "ERROR: COULD NOT EXECUTE QUERY " . $insertQuery . " " .  mysqli_error($connection);
    echo json_encode(array("message"=>"error", "status"=>-1, "id"=>mysqli_errno($connection)));
}

