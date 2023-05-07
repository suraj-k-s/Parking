<?php

    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Methods:GET,POST");
    header("Access-Control-Allow-Headers:*");

    $servername="localhost";
    $username="root";
    $password="6282";
    $DB="db_mainproject";
    $con=mysqli_connect($servername,$username,$password,$DB);
?>