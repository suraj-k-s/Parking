<?php
include("Connection.php");


if($_SERVER['REQUEST_METHOD']=="POST")
    { 
        
        $mail=$_POST["email"];
        $Password=$_POST["password"];

        $request_body = file_get_contents('php://input');

        $data = json_decode($request_body);


        $selQryA = "select * from tbl_admin where admin_mail='".$mail."' and admin_password='".$Password."'";
        $resultA = $con->query($selQryA);
        $rowsA = array();


        $selQryH = "select * from tbl_manager where manager_mail='".$mail."' and manager_password='".$Password."'";
        $resultH = $con->query($selQryH);
        $rowsH = array();


        $selQryU = "select * from tbl_user where user_mail='".$mail."' and user_password='".$Password."'";
        $resultU = $con->query($selQryU);
        $rowsU = array();

        
        if($rA = $resultA->fetch_assoc()) 
        {
            $rowsA[] = $rA;
            $rowsA[1] = "Admin"; 
            print json_encode($rowsA); 
        }
        else if($rH = $resultH->fetch_assoc()) 
        {   
            $rowsH[] = $rH;
            $rowsH[1] = "Manager"; 
            print json_encode($rowsH); 
        }
        else if($rU = $resultU->fetch_assoc()) 
        {
            $rowsU[] = $rU;
            $rowsU[1] = "User"; 
            print json_encode($rowsU); 
        }   
            
    
    }

        ?>