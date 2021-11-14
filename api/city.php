<?php
     require '../file_functions.php'; 
     require '../users_functions.php';

     

    $city = findCityByID(getUsersFromFile("../cities.txt"), $_GET['id']);
    if($city){
        echo json_encode(["status" => true, "data" => $city]);
    }else{
        echo json_encode(["status" => false, "data" => null]);
    }


?>