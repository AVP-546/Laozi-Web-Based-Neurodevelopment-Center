<?php
$name = $_POST['name'];
$visitor_email = $_POST['email']
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'laoziwebsite@gmail.com';
$email_subject = 'Nova Mensagem Submetida';
$email_body = "Nome do Utilizador: $name.\n".
				"Email do Utilizador: $visitor_email.\n".
				"Assunto: $subject.\n".
				"Mensagem: $message.\n";
$to = 'laozicservice@gmail.com';

$headers = "From: $email_from \r\n";
$headers .= "Reply to: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contacto.html");




?>