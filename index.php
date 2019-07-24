<?php include "includes/header.php"; ?>

<body>
    <div class="container-fluid">
        <div class="row">
        <input type="text" id="autocomplete" name="company_location_lookup" placeholder="Enter city to lookup" style="display: none">    
    </div>
        <div class="row">
            <div class="col">
                <div id="vmap" style="width: 1000px; height: 500px;"></div>
            </div>
        </div>
    </div>
    <?php include "includes/modal.php";?>
    <!-- Bootstrap scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 
</body>

</html>