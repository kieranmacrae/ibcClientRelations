<?php
  include 'db_handler.php';
  $db = new DB_Handler();

  if(isset($_SESSION['user'])){
      if ( $db->unregisterMailListID($_POST['group_id']) ) {
        echo json_encode(array('status' => 200, 'value' => 'Successfully unregistered ListID.'));
      } else {
        echo json_encode(array('status' => 500, 'value' => 'Error: Something went wrong.'));
      }
  }
  else {
      echo json_encode(false);
  }


?>
