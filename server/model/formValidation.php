<?php
       class FormValidation{

        private $formData;

        function __construct($formData)
        {   
            $this->formData = $formData;
            $this->errors = [];
        }


       private function empty(){
        $formData = $this->formData;
         foreach($formData as $key => $data){
            if($key === "phone"){
                continue;
            }else{
                  if(empty(trim($data))){
                       $this->errors[$key] = "$key is required";
                  }
            }
             
         }
       }

       private function emailValidation(){
        $formData = $this->formData;
         foreach($formData as $key => $data){
            if($key !== "email" && !empty(trim($data))){
                continue;
            }else if($key === "email" && !empty(trim($data))){
                  if(!filter_var($data, FILTER_VALIDATE_EMAIL)){
                       $this->errors[$key] = "Not a valid email";
                  }
            }
         }
       }
        

        function init(){
            $this->empty();
            $this->emailValidation();
            return $this->errors;
        }

       }