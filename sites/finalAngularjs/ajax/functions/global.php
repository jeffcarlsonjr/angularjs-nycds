<?php

//session_start();

include 'connect.php';
include 'crudclass.php';


$connect = $_SERVER['HTTP_HOST'] === 'localhost:80' ? new connect('localhost', 'root', 'root', 'cf_events') : new connect('68.178.143.78', 'cheapEvents','Hopatcong07843!','cheapEvents');
$connect->myconnect();
