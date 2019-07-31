<?php include "includes/header.php"; ?>

<body>
        <?php
        // Array mapping URL parameters to the PHP file that should be included
        $includesArray = array(
            "addjob" => "includes/addJob.php",
            "addcompany" => "includes/addCompany.php",
            "addlocation" => "includes/addLocation.php",
            "viewcompany" => "includes/viewCompany.php"
        );
        // If no URL parameters are set, just show the plain index
        if (!isset($_GET["action"]) && !isset($_GET["item"])) {
            include "includes/main.php";
        } else {
            $key = htmlspecialchars($_GET["action"]) . htmlspecialchars($_GET["item"]);
            include $includesArray[$key];
         }

        ?>
        <!-- Status message modal -->
        <div class="modal" id="statusModal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn action-btn"></button>
                <button type="button" class="btn action-btn"></button>
              </div>
            </div>
          </div>
        </div>
    <!-- Bootstrap scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
         
</body>

</html>