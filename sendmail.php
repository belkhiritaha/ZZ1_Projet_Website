<?php
    $to      = "belkhiri.taha53@gmail.com";
    $subject = $_POST["subject"];
    $message = $_POST["message"];


    if (mail($to, $subject, $message)){
        echo "Mail sent successfully";
    }
    else{
        echo "Mail not sent";
    }
 ?>