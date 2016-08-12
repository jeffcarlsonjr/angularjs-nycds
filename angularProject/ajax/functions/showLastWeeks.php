<?php 
include 'global.php';

function lastWeeksEvents()
{
	$weekEnd=strtotime('next monday')-1;
    $weekEnd = date('Y-m-d',$weekEnd);
    $pastWeekEnd = strtotime($weekEnd.' - 1 week');
    $pastWeekEnd = date('Y-m-d',$pastWeekEnd);
    $sql = mysql_query('select * from events where eventWeekEnd = "'.$pastWeekEnd.'" ');
    while($row = mysql_fetch_array($sql))
    {

    	$data[] = $row;
    }

    echo json_encode($data);
}

print_r(lastWeeksEvents());