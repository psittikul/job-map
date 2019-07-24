<?php
include "../includes/connection.php";
$fields = $_POST["fields"];
$table = $_POST["table"];
$queryVals = array();
$table = mysqli_real_escape_string($connection, $_POST["table"]);
$response = "";
function cleanFieldValues($item, $key, $params)
{
    $connection = $params["connection"];
    $typesArray = $params["typesArray"];
    if ($typesArray[$key] == "text") {
        $item = mysqli_real_escape_string($connection, $item);
    }
};
function mapFieldValues($item1, $key, $postedVals)
{
    $queryVals[] = $postedVals[$item1];
};

$tableFields = array(
    "company" => ["company_name", "company_website", "company_glassdoor", "currently_hiring", "number_of_employees"],
    "job" => [
        "job_title", "company", "city_id", "remote", "date_added", "posting_date", "deadline", "url", "salary",
        "preference", "requirements", "fit", "date_applied"
    ]
);
$tableFieldTypes = array(
    "company_name"=>"text",
    "company_website"=>"text",
    "company_glassdoor"=>"text",
    "currently_hiring"=>"int",
    "number_of_employees"=>"int"
);
$insertQueries = array(
    "company" => "INSERT INTO company(company_name, company_website, company_glassdoor, currently_hiring, number_of_employees) " .
        "VALUES('$fields[company_name]', '$fields[company_website]', '$fields[company_glassdoor]', " .
        "$fields[currently_hiring], $fields[number_of_employees])",
    "job" => "INSERT INTO job(...)"
);
$requiredFields = $tableFields[$table];
array_walk($fields, "cleanFieldValues", array("connection"=>$connection, "typesArray"=>$tableFieldTypes));
array_walk($requiredFields, "mapFieldValues", $fields);

$checkExistsQuery = "";
$insertQuery = $insertQueries[$table];
if (($insert = mysqli_query($connection, $insertQuery))) {
    $response .= "<div class='row'><h4 style='margin:auto'>Company '$fields[company_name]' inserted successfully</h4></div>" .
    "<div class='modal-button-sec row'><div class='col'><button type='button' id='viewBtn' class='btn action-btn' data-action='viewCompany'>View Company Details" . 
    "</button></div><div class='col'><button type='button' class='btn action-btn' data-action='addCompany'>Add Another Company</button></div>";
    echo $response;
} else {
    echo "Error executing query: " . $insertQuery . ", error message: " . $connection->error . "\n";
}
