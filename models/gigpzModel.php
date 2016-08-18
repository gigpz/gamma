<?php
//extends GzDatabase
class gigpzModel extends GzDatabase
{
	protected $_db;
	public function __construct()
	{
		//parent::__construct();
		$this->_db= new GzDatabase();
	}
	
	public static function URL(){
		return "http://localhost/GAMMA/";
		//return "http://www.chambaparachincha.com/";
	}

	public static function con_guion($url)
	{
		$url = strtolower($url);
		//Rememplazamos caracteres especiales latinos 
		$find = array('á','é','í','ó','ú','ñ');
		$repl = array('a','e','i','o','u','n');
		$url = str_replace($find,$repl,$url);
		// Añaadimos los guiones
		$find = array(' ', '&', '\r\n', '\n', '+'); 
				$url = str_replace ($find, '-', $url); 
		// Eliminamos y Reemplazamos demás caracteres especiales 
		$find = array('/[^a-z0-9\-<>]/', '/[\-]+/', '/<[^>]*>/'); 
		$repl = array('', '-', ''); 
		$url = preg_replace ($find, $repl, $url); 
		//$palabra=trim($palabra);
		//$palabra=str_replace(" ","-",$palabra);
		return $url;
	} 
	public function cambiaf_a_normal($date){
		$year=substr($date,0,4);
		$month=substr($date,5,2);
		$day=substr($date,8,2);
		$date=$day."-".$month."-".$year;
		return ($date);
	}

	public function cambiaf_a_mysql($date){
		$day=substr($date,0,2);
		$month=substr($date,3,2);
		$year=substr($date,6,4);
		$date=$year."-".$month."-".$day;
		return ($date);
	}

	public function cortar_contenido($string,$length){
		if ($length == NULL)
        	$length = 50;
	    	//Primero eliminamos las etiquetas html y luego cortamos el string
	    	$stringDisplay = substr(strip_tags($string), 0, $length);
	    	//Si el texto es mayor que la longitud se agrega puntos suspensivos
	    	if (strlen(strip_tags($string)) > $length)
	        	$stringDisplay .= ' ...';
	    	return $stringDisplay;
	}

	public function getTipos(){
		$cat = $this->_db->query("select * from tipo_usuarios");
		return $cat->fetchAll();
	}
	public function getCategorias(){
		$cat = $this->_db->query("select * from categorias");
		return $cat->fetchAll();
	}
	public function getProvincias(){
		$prov = $this->_db->query("select * from provincias");
		return $prov->fetchAll();
	}
	public function getRegiones(){
		$reg = $this->_db->query("select * from regiones");
		return $reg->fetchAll();
	}
	public function getPublicaciones()
	{
		/*$post = array(
			'id'=>1,
			'titulo'=>'titulo post',
			'cuerpo'=>'cuerpo post'
		);
		return $post;*/
		$post = $this->_db->query("select publicaciones.*, empresa.*, distritos.* from publicaciones inner join empresa on publicaciones.cod_empresa=empresa.cod_empresa inner join distritos on publicaciones.cod_provincia=distritos.cod_provincia order by publicaciones.id_publicacion desc limit 10");
		return $post->fetchAll();
	}
	public function getPublicacionId($idp){
		$post = $this->_db->query("select publicaciones.*, empresa.*, distritos.*, categorias.* from publicaciones inner join empresa on publicaciones.cod_empresa=empresa.cod_empresa inner join distritos on publicaciones.cod_provincia=distritos.cod_provincia inner join categorias on publicaciones.id_categoria=categorias.id_categoria where id_publicacion=$idp");
		return $post->fetch();
	}

	public function queryPublicaciones($lugar,$cat)
	{
		$lugar=(int)$lugar;
		$cat=(int)$cat;
		date_default_timezone_set("America/Lima");
		$dateActual=date('Y-m-d');
		//$sql="select * from publicaciones where cod_provincia=$lugar and id_categoria=$cat and fecha between '".$fecha."' and '".$dateActual."' ORDER BY id_publicacion DESC";
		$sql="select publicaciones.*, empresa.*, distritos.*, categorias.* from publicaciones inner join empresa on publicaciones.cod_empresa=empresa.cod_empresa inner join distritos on publicaciones.cod_provincia=distritos.cod_provincia inner join categorias on publicaciones.id_categoria=categorias.id_categoria where distritos.cod_provincia=$lugar and categorias.id_categoria=$cat ORDER BY id_publicacion DESC";
		$query=$this->_db->query($sql);
		return $query->fetchAll();
	}

	public function closeSesion()
    {
    	session_destroy();
    	header("Location: ".chambaModel::URL()."?accion=index&m=3");

    }

	public function getUsuario($login,$pass)
	{
		$login=strip_tags($login);
		$pass=strip_tags($pass);
		$logueo = $this->_db->query("select * from usuarios where usu_login='".$login."' and usu_pass='".$pass."' and usu_estado=1;");
		return $logueo->fetch();
	}
	public function validarEmail($login)
	{
		$logueo = $this->_db->query("select * from usuarios where usu_login='".$login."';");
		return $logueo->fetch();
	}
	
	public function registrarUsuario($login, $pass, $nombre, $tipo, $estado, $distrito)
	{
		$this->_db->prepare("insert into usuarios values (null, :login, :pass, :nombre, :tipo, :estado, :distrito)")
				  ->execute(array('login'=>$login,'pass'=>$pass,'nombre'=>$nombre, 'tipo'=>$tipo, 'estado'=>$estado, 'distrito'=>$distrito));
	}

	public function insertarPublicacion($fecha, $titulo, $contenido, $img, $estado, $usuario, $categoria, $ciudad, $empresa)
	{
		$this->_db->prepare("insert into publicaciones values (null, :fecha, :titulo, :contenido, :banner, :estado, :id_usuario, :id_categoria, :id_ciudad, :cod_empresa)")
				  ->execute(array('fecha'=>$fecha,'titulo'=>$titulo,'contenido'=>$contenido, 'banner'=>$img, 'estado'=>$estado, 'id_usuario'=>$usuario, 'id_categoria'=>$categoria, 'id_ciudad'=>$ciudad, 'cod_empresa'=>$empresa));
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////
	public function validarPostulacion($id,$email){
		$datos = $this->_db->query("select * from postulaciones where id_publicacion=$id and email='".$email."'");
		return $datos->fetchAll();
	}
	public function postularAnuncio($id,$email,$nombre,$file)
	{
		$this->_db->prepare("insert into postulaciones values (null, :idpublicacion, :email, :nombre, :archivo)")
				  ->execute(array('idpublicacion'=>$id,'email'=>$email,'nombre'=>$nombre, 'archivo'=>$file));
	}
	public function editarPostulacion($id,$email,$nombre,$file)
	{
		$this->_db->prepare("update postulaciones set nombre= :nombre, archivo=:archivo where id_publicacion=:id and email=:email")
				  ->execute(array('id'=>$id,'email'=>$email,'nombre'=>$nombre,'archivo'=>$file));
	}

	public function editarPost($id, $titulo, $cuerpo)
	{
		$id=(int) $id;
		$this->_db->prepare("update posts set titulo= :titulo, cuerpo= :cuerpo where id = :id")
				  ->execute(array('id'=>$id,'titulo'=>$titulo,'cuerpo'=>$cuerpo));
			
	}
	
	public function eliminarPost($id)
	{
		$id=(int) $id;
		$this->_db->query("delete from posts where id= $id");
		
	}

		
}
?>