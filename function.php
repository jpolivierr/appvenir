<?php

function mapProps($funcName){
     if(!function_exists($funcName)){
                echo "function does not exist <br>";
            }else{
              return call_user_func($funcName);
            }
}

function mount(string $folder, string $file, $props){
     try{
          require dirname(__FILE__)."/webApp/components/$folder/$file.php";
      }
     catch(error $error){
          echo $error;
     }
}

function addHeader(string $file, string $title){
        require_once dirname(__FILE__)."/webApp/$file.php";
     }

function addFooter(string $file){
     require_once dirname(__FILE__)."/webApp/$file.php";
     }

