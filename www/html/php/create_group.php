<?php
  include 'db_handler.php';
  $db = new DB_Handler();
  $result = $db->createGroup($_SESSION['chamber'], $_POST['groupName']);
  if($result)
    echo json_encode($result);
  else
    echo json_encode('Error: Unable to create group');
?>
