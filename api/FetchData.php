<?php

include("Connection.php");



        $i = 0;
        $j = 0;
        $list = array();
        $selQry = "SELECT * FROM `tbl_booking` b  inner join tbl_user u on u.user_id=b.user_id where status=1 and airport = 'Kannur'";
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