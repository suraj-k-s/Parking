<?php  

    include("Connection.php");

  

            $fromDate = $_POST["fromDate"];
            $toDate = $_POST["toDate"];
            $fromTime = $_POST["fromTime"];
            $toTime = $_POST["toTime"];
            $airPort = $_POST["airPort"];

          $sel = "SELECT slot FROM tbl_booking
           WHERE airport = '$airPort'
           AND status = 1
           AND (
             (booking_from_date > '$fromDate' AND booking_to_date < '$toDate')
             OR (booking_from_date = '$fromDate' AND booking_to_date < '$toDate' )
             OR (booking_from_date > '$fromDate' AND booking_to_date = '$toDate' )
             OR (booking_from_date = '$fromDate' AND booking_to_date = '$toDate' )
             OR (booking_from_date >= '$fromDate' AND booking_to_date <= '$toDate' )
             OR (booking_from_date <= '$fromDate' AND booking_to_date >= '$toDate' )
             )";


            $list = array();
            $row = $con->query($sel);
            while($data = $row->fetch_assoc())
            {
              $list[] =  $data;
            }

            echo json_encode($list);
                
?>


