<?php
include "../includes/connection.php";?>
<?php
$data = $_POST["data"];
// $table = mysqli_real_escape_string($connection, $_POST["data"]);
// $table = mysqli_real_escape_string($connection, $_POST["table"]);
// $tableFields = array(
//     "company"=>["company_id", "company_name", "company_website", "company_glassdoor", "jobs_available", "number_of_employees"],
//     "job"=>["job_id", "job_title", "company", "city_id", "remote", "date_added", "posting_date", "deadline", "url", "salary", "preference", "requirements", "fit", "applied"]
// );

echo json_encode(array("message"=>"AJAX call received", "data"=>$data));
// if ($result = mysqli_query($connection, $insertQuery)) {
//     $id = mysqli_insert_id($connection);
//     echo json_encode(array("message"=>"Successfully inserted data", "id"=>$id));
// }
// else {
//     echo "ERROR: COULD NOT EXECUTE QUERY " . $insertQuery . " " .  mysqli_error($connection);
//     echo json_encode(array("message"=>"error", "data"=>mysqli_error($connection)));
// }
?>
