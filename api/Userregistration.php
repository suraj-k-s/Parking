<?php  

    include("Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
        {

            $name = $_POST["name"];
            $contact = $_POST["contact"];
            $address = $_POST["address"];
            $mail = $_POST["mail"];
            $password = $_POST["password"];
            $place = $_POST["place"];


            $photo = $_FILES["photo"]["name"];
            $temp = $_FILES["photo"]["tmp_name"];
            move_uploaded_file($temp,"Assets/".$photo);
            
    
         $insQry = "insert into tbl_user(user_name,user_contact,user_address,user_mail,user_photo,user_password,place_id)values('".$name."','".$contact."','".$address."','".$mail."','".$photo."','".$password."','".$place."')";
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
    
            
    
            $selQry = "select*from tbl_user";
            $result = $con->query($selQry);
            $con = array();
            while($r = $result->fetch_assoc()) {
                $con[] = $r;
                }
                print json_encode($con);
    }
    
        ?>
