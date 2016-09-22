<?php
    // assemble the message from the POST fields

    // getting the captcha
    $captcha = "";
    if (isset($_POST["g-recaptcha-response"]))
        $captcha = $_POST["g-recaptcha-response"];

    if (!$captcha)
        echo "not ok";
    // handling the captcha and checking if it's ok
    $secret = "6Lf0cCgTAAAAALisc8sTJ_17Gycb_WZcxTAAHrid";
    $response = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$captcha."&remoteip=".$_SERVER["REMOTE_ADDR"]), true);

    // if the captcha is cleared with google, send the mail and echo ok.
    if ($response["success"] != false) {

        //contact form submission code
        $user = !empty($_POST['user'])?$_POST['user']:'';
        $firstName = !empty($_POST['firstName'])?$_POST['firstName']:'';
        $lastName = !empty($_POST['lastName'])?$_POST['lastName']:'';
        $email = !empty($_POST['email'])?$_POST['email']:'';
        $phone = !empty($_POST['phone'])?$_POST['phone']:'';
        $company = !empty($_POST['company'])?$_POST['company']:'';
        $message = !empty($_POST['message'])?$_POST['message']:'';
        
        $name = $firstName . ' ' . $lastName;
        $to = 'cd@themoderati.com';
        $subject = 'A new machineQ inquiry has been submitted';
        $htmlContent = "
            <h1>Details from the submission</h1>
            <h3>I AM ".$user."</h3>
            <p><b>Name: </b>".$name."</p>
            <p><b>Email: </b>".$email."</p>
            <p><b>Phone: </b>".$phone."</p>
            <p><b>Company: </b>".$company."</p>
            <p><b>Message: </b>".$message."</p>
        ";
        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        // More headers
        $headers .= 'From:'.$name.' <'.$email.'>' . "\r\n";
        //send email
        @mail($to,$subject,$htmlContent,$headers);

    } else {
        echo "Invalid verification code, please try again!";
    }
?>