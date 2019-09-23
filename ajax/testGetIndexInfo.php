<?php
include "../includes/pg-connection.php";
$companiesQuery = "SELECT COUNT(*) AS count_companies FROM company";
// $companiesQuery = "SELECT * FROM company";
$jobsQuery = "SELECT COUNT(*) AS count_jobs FROM job";
$appliedQuery = "SELECT COUNT(*) AS count_applied FROM job WHERE applied = 1";
$deadlinesQuery = "SELECT COUNT(*) AS count_deadlines FROM job WHERE deadline IS NOT NULL";
$data_array = array();

$companies = pg_query($connection, "SELECT * FROM company");
while ($company = pg_fetch_row($companies)) {
    echo $company[0] . ": " . $company[1] . "\n";
}

$companies = mysqli_query($connection, $companiesQuery);
if ($companies) {
    $result = mysqli_fetch_assoc($companies);
    $count_companies = $result["count_companies"];
    $data_array["num_companies"] = $count_companies;
    $jobs = mysqli_query($connection, $jobsQuery);
    if ($jobs) {
        $result = mysqli_fetch_assoc($jobs);
        $count_jobs = $result["count_jobs"];
        $data_array["num_jobs"] = $count_jobs;

        $jobs_applied = mysqli_query($connection, $appliedQuery);
        if ($jobs_applied) {
            $result = mysqli_fetch_assoc($jobs_applied);
            $count_applied = $result["count_applied"];
            $data_array["num_applied"] = $count_applied;
        } else {
            echo json_encode(array("status" => -1, "data" => mysqli_error($connection)));
        }
    } else {
        echo json_encode(array("status" => -1, "data" => mysqli_error($connection)));
    }
    echo json_encode(array("status" => 0, "data" => $data_array));
    // echo json_encode(array("status"=>0, "data"=>$result["count_companies"]));
} else {
    echo json_encode(array("status" => -1, "data" => mysqli_error($connection)));
}

// $companies = mysqli_query("SELECT * FROM companies", $connection);
// if ($companies) {
//     // $count = mysqli_fetch_assoc($companies);
//     // $data_array["num_companies"] = $count;
//     // if (($jobs = mysqli_query($jobsQuery, $connection))) {
//     //     $count_jobs = mysqli_fetch_assoc($count);
//     //     $data_array["num_jobs"] = $count_jobs;
//     // }
//     echo json_encode(array("status"=>0, "data"=>"success"));
//     // echo json_encode(array("status"=>0, "data"=>$data_array));
// }   
// else {
//     echo json_encode(array("status"=>-1, "data"=>"ERROR: could not execute query " . mysqli_error($connection)));
// }
