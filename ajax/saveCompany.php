<?php
include "../includes/connection.php";
// $data = $_POST["data"];
// $company_name = $data["company_name"];
// $company_name = mysqli_real_escape_string($connection, $company_name);
// $company_website = $data["company_website"];
// $company_website = mysqli_real_escape_string($connection, $company_website);
// $company_glassdoor = $data["company_glassdoor"];
// $company_glassdoor = mysqli_real_escape_string($connection, $company_glassdoor);
$name = $_POST['company_name'];
$company_name = mysqli_real_escape_string($connection, $name);
$company_website = mysqli_real_escape_string($connection, $_POST['company_website']);
$company_glassdoor = mysqli_real_escape_string($connection, $_POST['company_glassdoor']);

$preexistingQuery = "SELECT * FROM company WHERE company_name LIKE %$company_name%";
$insertQuery = "INSERT INTO company(company_name, company_website, company_glassdoor) VALUES('$company_name', '$company_website', '$company_glassdoor')";

if ($result = mysqli_query($connection, $insertQuery)) {
    $id = mysqli_insert_id($connection);
    echo json_encode(array("message"=>"Successfully inserted data", "id"=>$id));
}
else {
    echo "ERROR: COULD NOT EXECUTE QUERY " . $insertQuery . " " .  mysqli_error($connection);
    echo json_encode(array("message"=>"error", "data"=>mysqli_error($connection)));
}
