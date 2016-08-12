<?php

//session_start();

include 'connect.php';
include 'crudclass.php';


$connect = new connect('localhost', 'root', 'root', 'cf_events');
$connect->myconnect();
