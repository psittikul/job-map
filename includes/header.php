<?php include "connection.php"; ?>
<!doctype html>
<html>

<head>
    <title>Job Map</title>
    <!-- Favicons -->

    <link rel="icon" href="favicon.ico">
    <!-- Styles -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="jqvmap/dist/jqvmap.css" media="screen" rel="stylesheet" type="text/css">
    <!-- Our styles -->
    <link rel="stylesheet" href="styles/css/style.css">
    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Oswald|Raleway&display=swap" rel="stylesheet">
    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="jqvmap/dist/jquery.vmap.js"></script>
    <script src="https://kit.fontawesome.com/8819ef24c8.js"></script>

    <script type="text/javascript" src="jqvmap/dist/maps/jquery.vmap.usa.js" charset="utf-8"></script>
    <script type="text/javascript" src="jqvmap/dist/maps/jquery.vmap.world.js" charset="utf-8"></script>
    <!-- Google Places API JavaScript (must include API key) -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaDeAtfQa2FsHwSyxpxa2tZcm73FLoRbE&libraries=places"></script>

    <script type="text/javascript" src="js/init-map.js"></script>
    <?php
        $scriptsArray = array("view"=>"js/view-functions.js", "add"=>"js/add-functions.js");
        if (isset($_GET["action"])) {
            $script = $scriptsArray[htmlspecialchars($_GET["action"])];
            echo "<script type='text/javascript' src='js/action-functions.js'></script>";
            echo "<script type='text/javascript' src='$script'></script>";
        }
    ?>
    <!-- JavaScript for AJAX call functions -->
    <script type="text/javascript" src="js/ajax.js"></script>
    <!-- JavaScript for data type class -->
    <script type="text/javascript" src="js/data_type.js"></script>
    <!-- JavaScript for action class -->
    <script type="text/javascript" src="js/action_object.js"></script>
    <!-- JavaScript for form class -->
    <script type="text/javascript" src="js/classes/form_class.js"></script>
    <!-- JavaScript to initialize objects -->
    <script type="text/javascript" src="js/init-objects.js"></script>
    <!-- JavaScript for various global functions -->
    <script type="text/javascript" src="js/functions.js"></script>
    <!-- Top nav -->
    <nav class="navbar navbar-expand-lg" id="topNav">
        <a class="navbar-brand" href="index.php">
            <h1>Job Map</h1>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <button class="btn dropdown-toggle" type="button" id="actionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actions
                    </button>
                    <div class="dropdown-menu" id="actionsMenu" aria-labelledby="actionsDropdown">
                        <a class="dropdown-item action-item" role="button" id="addJobLink" data-action="addJob" data-toggle="tooltip" data-placement="left" title="Add a job you are interested in applying for">Add Job</a>
                        <a class="dropdown-item action-item" role="button" id="addLocationLink" data-action="addLocation" data-placement="left" data-toggle="tooltip" title="Add a location you are interested in relocating to">Add Location</a>
                        <a class="dropdown-item action-item" role="button" id="addCompanyLink" data-action="addCompany" data-placement="left" data-toggle="tooltip" title="Add a company you are interested in">Add Company</a>
                        <a class="dropdown-item action-item" role="button" id="editJobLink" data-action="editJob">Edit Job</a>
                        <a class="dropdown-item action-item" role="button" id="editLocationLink" data-action="editLocation">Edit Location</a>
                        <a class="dropdown-item action-item" role="button" id="editCompanyLink" data-action="editCompany">Edit Company</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <button class="btn dropdown-toggle" type="button" id="viewsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Views
                    </button>
                    <div class="dropdown-menu" role="button" id="viewsMenu" aria-labelledby="viewsDropdown">
                        <a class="dropdown-item action-item" role="button" data-action="viewJobs" id="viewJobsLink">View Jobs</a>
                        <a class="dropdown-item action-item" role="button" data-action="viewLocations" id="viewLocationsLink">View Locations</a>
                        <a class="dropdown-item action-item" role="button" data-action="viewCompanies" id="viewCompaniesLink">View Companies</a>
                </li>
                <li class="nav-item">
                    <span class="navbar-text">
                        An interactive web application designed to help organize and visualize the job search process.
                    </span>
                </li>
            </ul>
            <!-- <p id="copyright">
            &#169; Patricia Sittikul 2019
</p> -->
            <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn  my-2 my-sm-0" type="submit">Search</button>
            </form> -->
        </div>
    </nav>
</head>
