<?php
$db = parse_url(getenv("DATABASE_URL"));
$db["path"] = ltrim($db["path"], "/");
$connection = pg_connect(getenv("DATABASE_URL"));