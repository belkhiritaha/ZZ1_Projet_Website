<?php
    $to      = 'belkhiri.taha53@gmail.com';
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $headers = array(
        'From' => $_POST["from"],
        'Reply-To' => $_POST["from"],
        'X-Mailer' => 'PHP/' . phpversion()
    );

    if (mail($to, $subject, $message, $headers)){
        echo "Mail sent successfully";
    }
    else{
        echo "Mail not sent";
    }
 ?>