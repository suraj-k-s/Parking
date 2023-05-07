<?php  

    include("Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
        {

            $fromDate = $_POST["fromDate"];
            $toDate = $_POST["toDate"];
            $fromTime = $_POST["fromTime"];
            $toTime = $_POST["toTime"];
            $userID = $_POST["userID"];
            $airPort = $_POST["airPort"];
            $slot = $_POST["slot"];

         $insQry = "INSERT INTO `tbl_booking`( `booking_date`, `booking_from_date`, `booking_to_date`, `booking_from_time`, `booking_for_time`, `user_id`, `airport`, `slot`) 
         values(curdate(),'".$fromDate."','".$toDate."','".$fromTime."','".$toTime."','".$userID."','".$airPort."','".$slot."')";
            if($con->query($insQry))
            {
                $sel = "select max(booking_id) as id from tbl_booking";
                $row = $con->query($sel);
                $data = $row->fetch_assoc();
                echo $data["id"];
            }
            else{
                echo false;
            } 
        }
   
        ?>
