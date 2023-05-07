<?php

include("Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $request = file_get_contents("php://input");
        $data = json_decode($request);
        $district = $data->district;
        $place = $data->place;
    
        

        $insQry = "insert into tbl_place(district_id,place_name)values('".$district."','".$place."')";
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
        $delQry = "delete from tbl_place where place_id ='".$cat."'";
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
        $selQry = "select*from tbl_place p inner join tbl_district d on p.district_id=d.district_id";
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