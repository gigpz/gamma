<?php
session_start();
//define('BASE_URL', 'http://www.gigpz.com/');
define('BASE_URL', 'http://localhost/chamba/'); 
define('APP_NAME', 'La Web Gigpz');
define('APP_SLOGAN', 'La Web de tus Ideas');
define('APP_COMPANY', 'Gigpz');
define('DEFAULT_CONTROLLER', 'index');
define('DEFAULT_LAYOUT', 'gigpz'); ///EDITAR PARA CAMBIAR DE LAYOUT

define('DB_HOST', 'localhost');
define('DB_NAME', 'gigpz150215');
//define('DB_NAME', 'gigpz_gigpz150215');
define('DB_USER','root');
//define('DB_USER','gigpz_original');
define('DB_PASS', 'gigpz');
//define('DB_PASS', 'el1gigpzoriginal7');
define('DB_CHAR', 'utf8');

date_default_timezone_set('America/Lima');

class GzDatabase extends PDO{
	
	public function __construct(){
		parent::__construct(
			'mysql:host='.DB_HOST.
			';dbname='.DB_NAME,
			DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'Set Names '.DB_CHAR)
		);
	}
}
//protected $_db;
//$this->_db= new GzDatabase();
//NSVOuxSUT-o9

?>