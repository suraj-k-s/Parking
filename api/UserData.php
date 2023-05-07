<?php
include("Connection.php");

if($_SERVER['REQUEST_METHOD']=="GET")
        {
    
            $id=$_GET["uid"];
    
            $selQry = "select*from tbl_user where user_id='".$id."'";
            $result = $con->query($selQry);
            $con = array();
            while($r = $result->fetch_assoc()) {
                $con[] = $r;
                }
                print json_encode($con);
    }

?>