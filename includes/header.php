<?php include "connection.php"; ?>
<!doctype html>
<html>

<head>
    <title>Job Map</title>
    <!-- Favicons -->

    <link rel="icon" href="favicon.ico">
    <!-- <link rel="manifest" href="/manifest.json"> -->
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
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
    <script type="text/javascript" src="jqvmap/dist/maps/jquery.vmap.usa.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/form-html.js"></script>
    <script type="text/javascript" src="js/init-map.js"></script>
    <script type="text/javascript" src="js/functions.js"></script>
    <!-- Top nav -->
    <nav class="navbar navbar-expand-lg" id="topNav">
        <a class="navbar-brand">
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
                        <a class="dropdown-item" role="button" id="addJob">Add Job</a>
                        <a class="dropdown-item" role="button" id="addLocation">Add Location</a>
                        <a class="dropdown-item" role="button" id="addCompany">Add Company</a>
                        <a class="dropdown-item" role="button" id="editJob">Edit Job</a>
                        <a class="dropdown-item" role="button" id="editLocation">Edit Location</a>
                        <a class="dropdown-item" role="button" id="editCompany">Edit Company</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <button class="btn dropdown-toggle" type="button" id="viewsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Views
                    </button>
                    <div class="dropdown-menu" role="button" id="viewsMenu" aria-labelledby="viewsDropdown">
                        <a class="dropdown-item" role="button" id="viewJobs">View Jobs</a>
                        <a class="dropdown-item" role="button" id="viewLocations">View Locations</a>
                        <a class="dropdown-item" role="button" id="viewCompanies">View Companies</a>
                </li>
                <!-- <li class="nav-item">
                    <span class="navbar-text">
                        An interactive web application designed to help organize and visualize the job search process.
                    </span>
                </li> -->
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn  my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</head>