<?php
include "../includes/pg-connection.php";
$job_title = pg_escape_string($connection, $_POST['job_title']);
$url = pg_escape_string($connection, $_POST['job_url']);
$remote = $_POST['remote'];
$posting_date = $_POST['posting_date'];
$deadline = $_POST['deadline'];
$date_applied = $_POST['date_applied'];
$company_id = $_POST['company_id'];

// TO-DO: If this is a preexisting job, just update
if (isset($_POST['job_id']) && $_POST['job_id'] > 0) {
    $query = "UPDATE job...";
} else {
    $insertQuery = "INSERT INTO job(job_title, company_id, remote, job_url) VALUES('$job_title', $company_id, '$remote', '$url') RETURNING job_id";
    if ($result = pg_query($connection, $insertQuery)) {
        $job_id = pg_fetch_result($result, 0, "job_id");
        echo json_encode(array("message" => "Successfully saved job information", "status" => 0, "job_id" => $job_id));
    } else {
        echo json_encode(array("message" => pg_last_error($connection) . " " . $insertQuery, "status" => -1));
    }
}
