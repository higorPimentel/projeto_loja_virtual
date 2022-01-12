<?php 

$file = $_FILES["arquivo"];
$dir_destino = "../img_temp";

move_uploaded_file($file["tmp_name"], "$dir_destino/".$file["name"]);

echo("$dir_destino/".$file["name"]);

?>