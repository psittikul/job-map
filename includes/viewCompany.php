<?php
// If ID parameter is set, show single company page view
if (isset($_GET["id"])) {
    include "includes/singleCompanyPage.php";
}
// Otherwise if no ID parameter is set, show all companies
else {
    include "includes/allCompaniesPage.php";
}
