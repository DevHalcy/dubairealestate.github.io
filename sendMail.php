<?php 
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);

	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->isHTML(true);

	//From Mail
	$mail->setFrom('postmaster@mamp.pro', 'Dubai Real Estate');

	//Who mail
	$mail->addAddress('postmaster@mamp.pro');

	//Theme mail
	$mail->Subject = 'New Lead From site Dubai Real Estate';

	//body mail
	$body = '<h1>User Data</h1>';

	if (trim(!empty($_POST['name']))) {
		$body.= '<p><strong>Name: </strong> '.$_POST['name'].'</p>';
	}

	if (trim(!empty($_POST['email']))) {
		$body.= '<p><strong>Email: </strong> '.$_POST['email'].'</p>';
	}

	if (trim(!empty($_POST['phone']))) {
		$body.= '<p><strong>Phone: </strong> '.$_POST['phone'].'</p>';
	}

	$mail->Body = $body;

	//Send mail
	if (!$mail->send()) {
		$massage = 'Error sending';
	} else {
		$massage = 'Successfully sending!';
	}

	$response = ['message' => $massage];

	header('Content-Type: application/json');
	echo json_encode($response);

	?> 