<?php
include "../includes/connection.php";
$companyData = array();
$id = $_GET["id"];
/**
 * Get list of all companies in database
 */
function get_all_companies($connection)
{
    $companyInfoQuery = "SELECT * FROM company ORDER BY company_name ASC";
    if ($result = mysqli_query($connection, $companyInfoQuery)) {
        /* fetch object array */
        while ($obj = $result->fetch_object()) {
            $companyJobsQuery = "SELECT COUNT(*) AS num_jobs FROM job WHERE company_id = $obj->company_id";
            if ($companyJobs = mysqli_query($connection, $companyJobsQuery)) {
                $jobs = mysqli_fetch_assoc($companyJobs);
                $count_jobs = $jobs["num_jobs"];
                $companyData[] = array(
                    "company_id" => $obj->company_id, "company_name" => $obj->company_name, "company_website" => $obj->company_website,
                    "company_glassdoor" => $obj->company_glassdoor, "currently_hiring" => $obj->currently_hiring,
                    "number_of_employees" => $obj->number_of_employees, "remote_work" => $obj->remote_work, "num_jobs" => $count_jobs
                );
            }
            else {
                echo "ERROR: COULD NOT EXECUTE QUERY " . $companyJobsQuery . " " .  mysqli_error($connection);
            }
        }
        return $companyData;
    } else {
        echo "ERROR: COULD NOT EXECUTE QUERY " . $companyInfoQuery . " " .  mysqli_error($connection);
    }
}

/**
 * Get a single company's info based on company ID
 */
function get_company($cid, $connection)
{
    $companyInfoQuery = "SELECT * FROM company WHERE company_id = $cid";
    if ($result = mysqli_query($connection, $companyInfoQuery)) {
        while ($obj = $result->fetch_object()) {
            $companyData = array(
                "company_id" => $obj->company_id, "company_name" => $obj->company_name, "company_website" => $obj->company_website,
                "company_glassdoor" => $obj->company_glassdoor, "currently_hiring" => $obj->currently_hiring, "number_of_employees" => $obj->number_of_employees
            );
        }
        return $companyData;
    } else {
        echo "ERROR: COULD NOT EXECUTE QUERY " . $companyInfoQuery . " " . mysqli_error($connection);
    }
}
if ($id > 0) {
    $companyData = get_company($id, $connection);
    echo json_encode(array("data" => $companyData, "range" => "single"));
} else {
    $companyData = get_all_companies($connection);
    echo json_encode(array("data" => $companyData, "range" => "all"));
}
