<?php
include 'db_handler.php';
$db = new DB_Handler();
if(isset($_SESSION['user'])){
    $result = $db->getMemberInvoiceData($_POST['user_id']);
    $response = array('status' => 500, 'value' => 'Something went wrong.');
    if($result)
      $response = array('status' => 200, 'value' => $result);
    echo json_encode($response);
}
else {
    echo json_encode(false);
}
?>
