<?php  

    include("Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
        {
            $request = file_get_contents("php://input");
            $data = json_decode($request);
            $name= $data->name;
            $contact=$data->contact;
            $address=$data->address;
            $mail=$data->mail;
            $password=$data->password;
        

             $insQry = "insert into tbl_manager(manager_name,manager_contact,manager_address,manager_mail,manager_password)values('".$name."','".$contact."','".$address."','".$mail."','".$password."')";
            
            if($con->query($insQry))
            {
                echo "true";
            }
            else{
                echo "false";
            } 
         }
         if($_SERVER['REQUEST_METHOD']=="GET")
         {
     
             
     
             $selQry = "select*from tbl_manager";
             $result = $con->query($selQry);
             $con = array();
             while($r = $result->fetch_assoc()) {
                 $con[] = $r;
                 }
                 print json_encode($con);
     }
     
         
?>