<?php
$cwd = getcwd();
include "../includes/connection.php";
$job_title = mysqli_real_escape_string($connection, $_POST['job_title']);
$url = mysqli_real_escape_string($connection, $_POST['job_url']);
$remote = $_POST['remote'];
$posting_date = $_POST['posting_date'];
$deadline = $_POST['deadline'];
$date_applied = $_POST['date_applied'];
$company_id = $_POST['company_id'];

// TO-DO: If this is a preexisting job, just update
if (isset($_POST['job_id']) && $_POST['job_id'] > 0) {
    $query = "UPDATE job...";
} else {
    $query = "INSERT INTO job(job_title, company_id, remote, url) VALUES('$job_title', $company_id, $remote, '$url')";
}
if (mysqli_query($connection, $query)) {
    $job_id = mysqli_insert_id($connection);
    echo json_encode(array("message" => "Successfully saved job information", "status" => 0, "job_id" => $job_id));
} else {
    echo json_encode(array("message" => mysqli_error($connection) . " " . $query, "status" => -1, "id" => mysqli_errno($connection)));
}
