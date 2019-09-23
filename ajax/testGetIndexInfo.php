<?php
include "../includes/pg-connection.php";

$companies = pg_query($connection, "SELECT * FROM company");
while ($company = pg_fetch_row($companies)) {
    echo $company[0] . ": " . $company[1] . "\n";
}