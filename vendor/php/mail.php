<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
    }
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $body = '
        <h4>Contact Details</h4>
        <ul>
        <li>First name:' .$name .'</li>
        <li>Email:' .$email .'</li>
        <li>Message:' .$message .'</li>
        </ul>
    ';
    $to = "rio.Knightley@gmail.com";
    $headers = "MIME-Version: 1.0" ."\r\n";
    $headers .="Content-Type:text/html;charset=UTF-8" ."\r\n";
    $headers .= "From: New Message <noreply@rioKnightley.co.uk>" ."\r\n";
    mail($to,$subject,$body,$headers);
    echo json_encode(['status' => 200]);
