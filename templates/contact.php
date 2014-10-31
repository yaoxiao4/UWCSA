<div>
<div id="featured" style="margin-left:30px; width:50%; display:inline-block">
  <h3>Contact Us!<br>
  </h3>
  <p>Interested in collaborating with us? Or have a question regarding CSA? <br/>Feel free to send us a message!</p>
  <br>
  <?php function spamcheck($field)
  {
  //filter_var() sanitizes the e-mail
  //address using FILTER_SANITIZE_EMAIL
    $field=filter_var($field, FILTER_SANITIZE_EMAIL);

  //filter_var() validates the e-mail
  //address using FILTER_VALIDATE_EMAIL
    if(filter_var($field, FILTER_VALIDATE_EMAIL))
    {
      return TRUE;
    }
    else
    {
      return FALSE;
    }
  }

  if (isset($_REQUEST['email']))
  {//if "email" is filled out, proceed

  //check if the email address is invalid
$mailcheck = spamcheck($_REQUEST['email']);
if ($mailcheck==FALSE)
{
  echo "Invalid input";
}
else
    {//send email
      $email = $_REQUEST['email'] ;
      $subject = $_REQUEST['subject'] ;
      $message = $_REQUEST['message'] ;
      mail("uwcsa888@gmail.com", "Subject: $subject",
        $message, "From: $email" );
      echo "Thank you for contacting UWCSA! We will get back to you as soon as possible!";
    }
  }
  else
  {//if "email" is not filled out, display the form
echo "<form method='post'>
Email&nbsp;&nbsp;&nbsp; <input name='email' type='text' size= '45'/><br /><br />
Subject <input name='subject' type='text' size= '45'/><br /><br />
Message<br />
<textarea name='message' rows='8' cols='57'>
</textarea><br />
<input type='submit' value='Send' />
</form>";
}
?>
</div>
  <div style = "width:35%;margin-top:30px; padding-left:10px;border-color:gray; padding-top:10px;margin-right:10%; border-style:solid;border-radius:30px; display:inline-block; float:right">
    <p><a target="_blank" href="https://www.facebook.com/groups/2241879340/"><img src="images/icons/02_facebook.png" style="height:20px;width:20px"></a>&nbsp Like us on Facebook! </p>
    <p><a target="_blank" href="https://twitter.com/UWaterlooCSA"><img src="images/icons/01_twitter.png" style="height:20px;width:20px"></a>&nbsp Follow us on Twitter!  </p>
    <p><a target="_blank" href="http://instagram.com/uwcsa"><img src="images/icons/10_instagram.png" style="height:20px;width:20px"></a>&nbsp Check out our pictures on Instagram!  </p>
    <p> Or you may directly contact us at: <a href="mailto:uwaterloocsa@gmail.com?Subject=Question%20Or%20Concern" target="_top">uwaterloocsa@gmail.com</a> </p>
  </div>
</div>