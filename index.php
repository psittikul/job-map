<?php include "includes/header.php"; ?>

<body>
        <?php
        // Array mapping URL parameters to the PHP file that should be included
        $includesArray = array(
            "job" => "includes/addJob.php",
            "company" => "includes/addCompany.php"
        );
        // If no URL parameters are set, just show the plain index
        if (!isset($_GET["action"]) && !isset($_GET["item"])) {
            include "includes/main.php";
        } else {
            $key = htmlspecialchars($_GET["item"]);
            include $includesArray[$key];
         }

        ?>
    <!-- Bootstrap scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>

</html>