<?php
include "../includes/pg-connection.php";
$companyData = array();
$id = $_GET["id"];
/**
 * Get list of all companies in database
 */
function get_all_companies($connection)
{
    $companyInfoQuery = "SELECT * FROM company ORDER BY company_name ASC";
    if ($companies = pg_query($connection, $companyInfoQuery)) {
        /* fetch object array */
        while ($company = pg_fetch_object($companies)) {
            $companyJobsQuery = "SELECT COUNT(*) AS count_jobs FROM job WHERE company_id = $company->company_id";
            if ($companyJobs = pg_query($connection, $companyJobsQuery)) {
                $jobs = pg_fetch_assoc($companyJobs);
                $count_jobs = $jobs["count_jobs"];
                $companyData[] = array(
                    "company_id" => $company->company_id, "company_name" => $company->company_name,
                    "company_website" => $company->company_website, "company_glassdoor" => $company->company_glassdoor,
                    "currently_hiring" => $company->currently_hiring, "number_of_employees" => $company->number_of_employees,
                    "remote_work" => $company->remote_work, "num_jobs" => $count_jobs
                );
            }else {
                echo "ERROR: COULD NOT EXECUTE QUERY " . $companyJobsQuery . " " . pg_last_error($connection);
            }
        }
        return $companyData;
    } else {
        echo "ERROR: COULD NOT EXECUTE QUERY " . $companyInfoQuery . " " . pg_last_error($connection);
    }
}

/**
 * Get a single company's info based on company ID
 */
function get_company($cid, $connection)
{
    $companyInfoQuery = "SELECT * FROM company WHERE company_id = $cid";
    if ($result = pg_query($connection, $companyInfoQuery)) {
        while ($obj = pg_fetch_object($result)) {
            $companyData = array(
                "company_id" => $obj->company_id, "company_name" => $obj->company_name, "company_website" => $obj->company_website,
                "company_glassdoor" => $obj->company_glassdoor, "currently_hiring" => $obj->currently_hiring, "number_of_employees" => $obj->number_of_employees
            );
        }
        return $companyData;
    } else {
        echo "ERROR: COULD NOT EXECUTE QUERY " . $companyInfoQuery . " " . pg_last_error($connection);
    }
}
if ($id > 0) {
    $companyData = get_company($id, $connection);
    echo json_encode(array("data" => $companyData, "range" => "single"));
} else {
    $companyData = get_all_companies($connection);
    echo json_encode(array("data" => $companyData, "range" => "all"));
}
