<?php
$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "upload_image";
$conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
if ($conn) {
    echo"something went right";
}