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
            $companyData[] = array(
                "company_id" => $obj->company_id, "company_name" => $obj->company_name, "company_website" => $obj->company_website,
                "company_glassdoor" => $obj->company_glassdoor, "currently_hiring" => $obj->currently_hiring, "number_of_employees" => $obj->number_of_employees
            );
        }
        echo $companyData;
        $result->close();
    } else {
        echo "ERROR: COULD NOT EXECUTE QUERY " . $companyInfoQuery . " " .  mysqli_error($connection);
    }
}

/**
 * Get a single company's info based on company ID
 */
function get_company_info($cid, $connection)
{
    echo "To do lol";
}
if ($id > 0) {
    get_company_info($id, $connection);
} else {
    get_all_companies($connection);
}
