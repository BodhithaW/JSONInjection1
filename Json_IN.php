<?php
header("Content-Type: application/json");

if (isset($_GET['name'])) {
    $name = $_GET['name']; // No input validation or sanitization

    // JSON Response with direct user input (Vulnerable to JSON Injection)
    $response = "{ \"user\": \"$name\" }";
    
    echo $response;
} else {
    echo "{ \"error\": \"No name provided\" }";
}
?>
