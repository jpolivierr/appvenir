<?php 

    $filePath = dirname(__FILE__)."/webApp/css/main.css";
    $folder = dirname(__FILE__)."/webApp/css";

    (function ($filePath, $folder ){
        try{
            //erases current content data
                file_put_contents($filePath, "");
                $dir = scandir($folder);

                $mainFile = fopen($filePath,"r+");
                foreach($dir as $value){
                    if(strpos($value,".css") !== false && strpos($value,"main") === false){
                        $file = file_get_contents($folder."/".$value);
                        
                        fwrite($mainFile,$file);
                    }
                    
                }
                    fclose($mainFile);
        }catch(error $e){
             echo $e;
        }
        

    })($filePath,$folder);
?>


