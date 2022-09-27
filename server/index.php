<?php


   header("Access-Control-Allow-Origin: http://localhost:50");
   header("Content-Type: application/json");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");


   echo $_SERVER["REQUEST_URI"];
   echo $_SERVER["REQUEST_METHOD"];

   $uri = $_SERVER["REQUEST_URI"];
   $method = $_SERVER["REQUEST_METHOD"];

   

   if (isset($_POST["data"])) {

    print_r($_POST);
}