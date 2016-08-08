<?php

include 'global.php';

$weekEnd=strtotime('next monday')-1;
$weekEnd = date('Y-m-d',$weekEnd);

$sql = 'insert into events (eventName,eventVenueName,eventStart,eventVenuePhone,eventWebsite,eventAddress,eventCity,eventState,eventZip,eventDesc,eventWeekEnd) values ("'.$_GET['eventName'].'","'.$_GET['venueName'].'","'.$_GET['eventStart'].'","'.$_GET['eventVenuePhone'].'","'.$_GET['eventWebsite'].'","'.$_GET['eventAddress'].'","'.$_GET['eventCity'].'","'.$_GET['eventState'].'","'.$_GET['eventZip'].'","'.$_GET['eventDesc'].'","'.$weekEnd.'")';


$result = mysql_query($sql) or die(mysql_error());

?>

