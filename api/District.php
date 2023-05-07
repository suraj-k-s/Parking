<?php

include("Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $request = file_get_contents("php://input");
        $data = json_decode($request);
        $district = $data->district;
    
        

        $insQry = "insert into tbl_district(district_name)values('".$district."')";
        if($con->query($insQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
    }
    if($_SERVER['REQUEST_METHOD']=="GET" && isset($_GET["id"]))
{
    $cat = $_GET["id"];

    if($cat!="")
    {
        $delQry = "delete from tbl_district where district_id ='".$cat."'";
        if($con->query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }
}
   else if($_SERVER['REQUEST_METHOD']=="GET")
    {


        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select*from tbl_district";
        $result = $con->query($selQry);
        $con = array();
        while($data = $result->fetch_assoc())
        {
            $i++;
            $list[] =  $data;
            $list[$j]['id'] = $i;
            $j++;
        }

        echo json_encode($list);

}


    ?>