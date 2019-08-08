<?php
$cwd = getcwd();
include "../includes/connection.php";
$job_title = mysqli_real_escape_string($connection, $_POST['job_title']);
$url = mysqli_real_escape_string($connection, $_POST['job_url']);
$remote = $_POST['remote'];
$company_id = $_POST['company_id'];

$insertQuery = "INSERT INTO job(job_title, company_id, remote, url) VALUES('$job_title', $company_id, $remote, '$url')";
if (mysqli_query($connection, $insertQuery)) {
    $job_id = mysqli_insert_id($connection);
    echo json_encode(array("message" => "Successfully inserted new job", "status" => 0, "job_id" => $job_id));
} else {
    echo json_encode(array("message" => "error", "status" => -1, "id" => mysqli_errno($connection)));
}
