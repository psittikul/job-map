<?php
include "../includes/pg-connection.php";
$data_array = array();
$companies = pg_query($connection, "SELECT COUNT(*) AS count_companies FROM company");
if ($companies) {
    $result = pg_fetch_assoc($companies);
    $data_array["count_companies"] = $result["count_companies"];
    $jobs = pg_query($connection, "SELECT COUNT(*) AS count_jobs FROM job");
    if ($jobs) {
        $result = pg_fetch_assoc($jobs);
        $data_array["count_jobs"] = $result["count_jobs"];
        $jobs_applied = pg_query($connection, "SELECT COUNT(*) AS count_applied FROM job WHERE applied = true");
        if ($jobs_applied) {
            $result = pg_fetch_assoc($jobs_applied);
            $data_array["count_applied"] = $result["count_applied"];
            echo json_encode(array("status"=>0, "data"=>$data_array));
        }
        else {
            echo json_encode(array("status"=>-1, "data"=>pg_last_error($connection)));
        }
    }
    else {
        echo json_encode(array("status"=>-1, "data"=>pg_last_error($connection)));
    }
} else {
    echo json_encode(array("status" => -1, "data" => pg_last_error($connection)));
}
