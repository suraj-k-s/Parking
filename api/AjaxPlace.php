<?php

include("Connection.php");


        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "select * from tbl_place where district_id='".$_GET["id"]."'";
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




    ?>