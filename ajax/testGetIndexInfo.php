<?php
include "../includes/pg-connection.php";

$companies = pg_query($connection, "SELECT COUNT(*) AS count_companies FROM company");
if ($companies) {
    $result = pg_fetch_assoc($companies);
    echo "Number of companies saved: " . $result["count_companies"];
}