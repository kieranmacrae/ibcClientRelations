<?php
include 'db_handler.php';

$db = new DB_Handler();
$result = $db->addNote($_SESSION['userid'], $_POST['memberID'], $_POST['note']);

if ($result)
  echo json_encode('Successfully added the note.');
else
  echo json_encode('Failed to add the note.');
?>
