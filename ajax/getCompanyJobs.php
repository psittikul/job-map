<?php
include "../includes/connection.php";
$id = $_GET["id"];
$companyJobsQuery = "SELECT * FROM job WHERE company_id = $id";
$html = "";
if ($companyJobs = mysqli_query($connection, $companyJobsQuery)) {
    /* fetch object array */
    while ($job = $companyJobs->fetch_object()) {
        $html .= "<tr><td class='job-cell' data-id='$job->job_id'>$job->job_title</td>" .
        "<td class='job-location-cell'>[LOCATION HERE]</td>" .
        "<td class='deadline-cell'>$job->deadline</td>" .
        "<td class='applied-cell'>$job->date_applied</td>" . 
        "</tr>";
    }
    echo json_encode(array("status"=>0, "data"=>$html));
} else {
    echo json_encode(array("status"=>-1, "data"=>"ERROR: could not execute query " . $companyJobsQuery . mysqli_error($connection)));
}
