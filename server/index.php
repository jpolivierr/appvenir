<?php
require_once dirname(__FILE__) . "/bootstrap/bootstrap.php";


   header("Access-Control-Allow-Origin: http://localhost:50");
   header("Content-Type: application/json");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");

   $uri = $_SERVER["REQUEST_URI"];
   $method = $_SERVER["REQUEST_METHOD"];

   function response($status, $data){
        http_response_code($status);
        echo json_encode($data);
   }

   

   if (isset($_POST["data"])) {

    $formValidation = new FormValidation(json_decode($_POST["data"],true));
    if(count($formValidation->init()) !== 0){
        response(400,$formValidation->init());
    }else{
        response(200, ["message"=>"success"]);
    }
}