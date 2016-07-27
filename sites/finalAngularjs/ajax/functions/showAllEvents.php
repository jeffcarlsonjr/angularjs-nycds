<?php

include 'global.php';

$lat = $_GET['lat']; 
$long = $_GET['long'];

function searchZips($lat,$lon)
    {
        $lat1 = $lat;
        $lon1 = $lon;
        $d = 3;
        //earth's radius in miles
        $r = 3959;

        //compute max and min latitudes / longitudes for search square
        $latN = rad2deg(asin(sin(deg2rad($lat1)) * cos($d / $r) + cos(deg2rad($lat1)) * sin($d / $r) * cos(deg2rad(0))));
        $latS = rad2deg(asin(sin(deg2rad($lat1)) * cos($d / $r) + cos(deg2rad($lat1)) * sin($d / $r) * cos(deg2rad(180))));
        $lonE = rad2deg(deg2rad($lon1) + atan2(sin(deg2rad(90)) * sin($d / $r) * cos(deg2rad($lat1)), cos($d / $r) - sin(deg2rad($lat1)) * sin(deg2rad($latN))));
        $lonW = rad2deg(deg2rad($lon1) + atan2(sin(deg2rad(270)) * sin($d / $r) * cos(deg2rad($lat1)), cos($d / $r) - sin(deg2rad($lat1)) * sin(deg2rad($latN))));
        
        $sql = mysql_query('SELECT zip FROM zip WHERE (latitude <= '.$latN.' AND latitude >= '.$latS.' AND longitude <= '.$lonE.' AND longitude >= '.$lonW.') AND (latitude != '.$lat1.' AND longitude != '.$lon1.')');
        
        while($row = mysql_fetch_array($sql))
        {
            $sth = mysql_query('select * from events where eventZip = '.$row['zip'].' ');
            while($zip = mysql_fetch_array($sth))
            {
                $data[] = $zip;
            }
        }
        
        echo json_encode($data);
    }

print_r(searchZips($lat,$long));


