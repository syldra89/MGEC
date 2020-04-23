
<?php

	if( isset($_POST['fname']) && isset($_POST['femail']) && isset($_POST['fsubject']) && isset($_POST['fmessage']) ){
		$fname = $_POST['fname']; 
		$femail = $_POST['femail'];
		$fsubject = $_POST['fsubject'];
		$fmessage = nl2br($_POST['fmessage']);
		$to = "mail@mail.com";	
		$from = $femail;
		
		$mail_body = '<b>Name:</b> '.$fname.' <br><b>Email:</b> '.$femail.' <p>'.$fmessage.'</p>';
		$headers = "MGEC - From: $from\n";
		//$headers .= "MIME-Version: 1.0\n";
		//$headers .= "Content-type: text/html; charset=iso-8859-1\n";
		if( mail($to, $fsubject, $mail_body, $headers) ){
			echo "success";
		} else {
			echo "error";
		}
	}
?>

