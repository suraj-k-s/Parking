<?php  

    include("Connection.php");

          $insQry = "update tbl_booking set status=1 where booking_id='".$_GET["id"]."'";
            if($con->query($insQry))
            {
                echo "true";
            }
            else{
                echo "false";
            } 
       
   
    ?>
