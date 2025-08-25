<?php
$con = mysqli_connect('localhost', 'admin', '', 'myDB');
if ($con) {
    echo "<h2>Database Connection Successful!</h2>";
} else {
    die("<h2>Database Connection Failed: " . mysqli_connect_error() . "</h2>");
}
