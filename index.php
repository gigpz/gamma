<?php

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', realpath(dirname(__FILE__)).DS);
define('APP_PATH', ROOT.'app'.DS);

try {
	
	require_once APP_PATH.'Config.php';
		
} catch (Exception $e) {
	echo $e->getMessage();
}


if (!empty($_GET["accion"]))
{
	$accion=$_GET["accion"];
}else
{
	$accion="index";
}
if (is_readable("controllers/".$accion."Controller.php"))
{
	require_once("controllers/".$accion."Controller.php");
}
else
{
	require_once("controllers/errorController.php");
}


?>