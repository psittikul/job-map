<!doctype html>
<html>

<head>
    <title>Job Map</title>
    <!-- Styles -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/css/style.css">
    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Oswald|Raleway&display=swap" rel="stylesheet">
    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="js/init-map.js"></script>
    <script src="js/functions.js"></script>
</head>

<body>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg" id="topNav">
            <a class="navbar-brand" href="#">Job Map</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="actionsDropdown" role="button" data-toggle="dropdown" data-target="#actionsMenu" aria-haspopup="true" aria-expanded="false">
                            Actions</a>
                        <div class="dropdown-menu" id="actionsMenu" aria-labelledby="actionsDropdown">
                            <a class="dropdown-item" href="#">Add Job</a>
                            <a class="dropdown-item" href="#">Add Location</a>
                            <a class="dropdown-item" href="#">Edit Job</a>
                            <a class="dropdown-item" href="#">Edit Location</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="viewsDropdown" role="button" data-toggle="dropdown" data-target="#viewsMenu" aria-haspopup="true" aria-expanded="false">
                            Views
                        </a>
                        <div class="dropdown-menu" id="viewsMenu" aria-labelledby="viewsDropdown">
                            <a class="dropdown-item" href="#">View All Jobs</a>
                            <a class="dropdown-item" href="#">View All Locations</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>