<?php

include 'global.php';

$id = $_GET['id'];

$sql = mysql_query('select * from events where id = '.$id.' ');

$row = mysql_fetch_array($sql);

$data = [];

$data = json_encode($row);

echo $data;
