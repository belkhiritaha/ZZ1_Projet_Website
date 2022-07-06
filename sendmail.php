<?php
    $to      = "belkhiri.taha53@gmail.com";
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $header = "From: " . $_POST["from"];


    if (mail($to, $subject, $message, $header)) {
        echo "Mail sent successfully";
    }
    else{
        echo "Mail not sent";
    }
 ?>