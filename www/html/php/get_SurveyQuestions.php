<?php
  include 'db_handler.php';
  $db = new DB_Handler();
  $surveyID = $_POST["surveyID"];
  $results = $db->get_SurveyQuestions($surveyID);
  echo json_encode($results);
?>
