<?php
$cwd = getcwd();
include "../includes/connection.php";
$job_title = mysqli_real_escape_string($connection, $_POST['job_title']);
$job_url = mysqli_real_escape_string($connection, $_POST['job_url']);
$remote_work = $_POST["remote_work"];
$hiring_company = mysqli_real_escape_string($connection, $_POST['hiring_company']);
$company_id = $_POST['company_id'];

// If $company_id > 0, this is a preexisting company, so just use its ID instead of inserting it
if ($company_id > 0) {

}
// Otherwise, insert the company first, then insert the job
else {
    $insertCompanyQuery = "INSERT INTO company(company_name, currently_hiring, remote_work) VALUES('$hiring_company', 1, $remote_work)";
    if (mysqli_query($connection, $insertCompanyQuery)) {
        // If company was inserted successfully, get its new ID and then insert the job with
        $companyID = mysqli_insert_id($connection);
        $insertJobQuery = "INSERT INTO job(job_title, company_id, remote, url) VALUES('$job_title', $companyID, $remote_work, '$job_url')";
        // if (mysqli_query($connection, $insertJobQuery) {
        //     $jobID = mysqli_insert_id($connection);
        //     echo json_encode(array("message"=>"Successfully inserted new job", "status"=>0, "id"=>$jobID));
        // }
        // else {
        //     echo json_encode(array("message"=>"error", "status"=>-1, "id"=>mysqli_errno($connection)));
        // }
        echo json_encode(array("message"=>"Successfully inserted new company", "status"=>0, "id"=>$companyID));
    }
    else {
        echo json_encode(array("message"=>"error", "status"=>-1, "id"=>mysqli_errno($connection)));
    }
}

