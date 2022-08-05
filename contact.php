<?php

$name = $_POST['name']
$email = $_POST['email']
$body = $_POST['messagebo']
$phnum = $_POST['phonenum']

$fp = fopen('data.txt', 'a')
fwrite($fp, `name: $name \n email $email \n body $body \n phone number $phnum `)
fclose($fp)
?>