_idAnuncio=0;

function Buscar()
{
	var form=frmBuscar;
	var lugar=form.cboLugar;
	var cat=form.cboCategoria;
	var fecha=form.cboFecha;
	
	if(lugar.value=="Seleccione" || lugar.value=="")
	{
		alert('Debe de seleccionar una Ciudad');
		//lugar.value="";
		lugar.focus();
		return false;
	}
	if(cat.value=="Seleccione" || cat.value=="")
	{
		alert('Debe de seleccionar una Categoria');
		
		cat.focus();
		return false;
	}
	if(fecha.value=="Seleccione" || fecha.value=="")
	{
		alert('Debe de seleccionar una Fecha');
		
		fecha.focus();
		return false;
	}
	//alert('Enviando Datos ! '+lugar.value+' '+cat.value+' '+fecha.value);
	form.submit();
	/*if(form.carrera.checked==false){
		validar_error(_elementoError,'Debe de seleccionar una carrera');
		form.carrera.checked=false;
		form.carrera.focus();
		return false;
	}*/
}

function login()
{
	var form=frmLogueo;
	var email=form.txtEmail;
	var pass=form.txtPass;
	if(email.value==0 || valida_correo(email.value)==false)
	{
		alert('Debe Escribir un Email Valido');
		//lugar.value="";
		email.focus();
		return false;
	}
	if(pass.value==0 || pass.value=="")
	{
		alert('Debe Escribir el Password');
		//lugar.value="";
		pass.focus();
		return false;
	}
	//alert('Enviando '+email.value+' '+pass.value);
	form.submit();
}

function valida_correo(correo)
{
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo))
	{
			
		return (true)
	} 
	else 
	{
		   
		return (false);
	}
}
function postularAnuncio()
{
	var form=document.frmPostular;
	var email=form.txtEmail.value;
	var nombre=form.txtNombre.value;
	var file=form.txtFile.value;

	if (email==0 || email=="") {
		alert('Debe Ingresar un Email');
		form.txtEmail.focus();
		return false;
	};
	if (nombre==0 || nombre=="") {
		alert('Debe Ingresar su Nombre');
		form.txtNombre.focus();
		return false;
	};

	if (file==0 || file=="") {
		alert('Debe Seleccionar un Archivo formato word o pdf !');
		form.txtFile.focus();
		return false;
	};

	if (valida_correo(email)==false) {
		alert('El Correo No es Valido');
		form.txtEmail.focus();
		return false;
	};

	//alert("Enviando datos !");
	//return false;

	$.ajax({
	  url: "../postular/",
	  type: "POST",
	  cache:false,
  	  data: {id:_idAnuncio, mail:email, nom:nombre, fil:file}
	}).done(function(msg) {
	   	$("#modalRpt").html("<p class='alert alert-success' role='alert'>"+msg+"</p>");
	  	form.reset();
	}).fail(function() {
    	$("#modalRpt").html("<p class='alert alert-danger' role='alert'>Ha Ocurrido un Error al Grabar los Datos</p>");
  	}).always(function() {
    	//alert( "complete" );
  	});
}

function anuncio(id){
	_idAnuncio=id;
	//alert(_idAnuncio);
}

function mostrarOcultar(elemento){
	$("#"+elemento).hide();
}

function registrar()
{
	var form=document.frmRegistrar;
	var email=form.txtEmail.value;
	var pass=form.txtPassword.value;
	var pass2=form.txtPassword2.value;
	var nombre=form.txtNombre.value;
	var tipo=form.cboTipo.value;
	var distrito=form.cboDistrito.value;
	var estado=1;

	if (email==0 || email=="") {
		alert('Debe Ingresar un Email');
		form.txtEmail.focus();
		return false;
	};

	if (pass==0 || pass=="") {
		alert('Debe Ingresar una contraseña');
		form.txtPassword.focus();
		return false;
	};

	if (pass2==0 || pass2=="") {
		alert('Debe Repetir su contraseña');
		form.txtPassword2.focus();
		return false;
	};

	if (nombre==0 || nombre=="") {
		alert('Debe Ingresar su Nombre');
		form.txtNombre.focus();
		return false;
	};

	if (tipo==0 || tipo=="seleccione") {
		alert('Debe Seleccionar una tipo de Usuario');
		form.cboTipo.focus();
		return false;
	};

	if (distrito==0 || distrito=="seleccione") {
		alert('Debe Seleccionar un Distrito');
		form.cboDistrito.focus();
		return false;
	};

	if (pass!=pass2) {
		alert('Los Password deben Coincidir');
		form.txtPassword2.focus();
		return false;
	};

	if (valida_correo(email)==false) {
		alert('El Correo No es Valido');
		form.txtEmail.focus();
		return false;	
	};

	/////grabar aqui//////
	$.ajax({
	  url: "../grabarRegistro/",
	  type: "POST",
	  cache:false,
  	  data: {mail:email, pas:pass, nom:nombre, tip:tipo, dis:distrito, est:estado}
	}).done(function(msg) {
		if (msg=='1') {
			$("#respuestaP").html("<div class='alert alert-success' role='alert'>EL Registro ha sido Éxitoso espere confirmacion por Correo !</div>");
	  		form.reset();
		}else{
			$("#respuestaP").html("<div class='alert alert-danger' role='alert'>"+msg+"</div>");
		};
	}).fail(function() {
    	$( "#respuestaP" ).html("<div class='alert alert-danger' role='alert'>Ha Ocurrido un Error al Grabar los Datos</div>");
  	}).always(function() {
    	//alert( "complete" );
  	});
}

function grabarPublicacion()
{
	/*$(document).ready(function(){
		alert('funciona Jquery !');
	});*/
	var form=document.frmGrabar;
	var fecha=form.txtFecha.value;
	var titulo=form.txtTitulo.value;
	var contenido=$('#txtaContenido').val();
	var img=$('#file_upload').val();
	var estado=1;
	//Usuario//
	var categoria=form.cboCategoria.value;
	var ciudad=form.cboCiudad.value;
	//alert('datos enviados post '+fecha+' '+titulo+' '+contenido+' '+img+' '+usuario);
	
	if(fecha==0 || fecha=="")
	{
		alert('Debe de seleccionar una Fecha');
		//lugar.value="";
		form.txtFecha.focus();
		return false;
	}
	if(titulo==0 || titulo=="")
	{
		alert('Debe de Escribir un Titulo');
		//lugar.value="";
		form.txtTitulo.focus();
		return false;
	}
	if(contenido==0 || contenido=="")
	{
		alert('Debe de Escribir un contenido');
		//lugar.value="";
		form.txtaContenido.focus();
		return false;
	}
	if(img==0 || img=="")
	{
		//alert('Debe de Seleccionar una imagen');
		//lugar.value="";
		//form.file_upload.focus();
		//return false;
	}

	if(categoria=="Seleccione" || categoria=="")
	{
		alert('Debe de seleccionar una Categoria');
		form.cboCategoria.focus();
		return false;
	}

	if(ciudad=="Seleccione" || ciudad=="")
	{
		alert('Debe de seleccionar una Ciudad');
		form.cboCiudad.focus();
		return false;
	}

	var dato=$("#btnGrabar").attr("data-id");
	
	if (!dato) {
		alert('Usted No ha Subido ninguna imagen (Opcional)');
		//return false;
	}
	
	$.ajax({
	  url: "../publicar/",
	  type: "POST",
	  cache:false,
  	  data: { fec: fecha, tit: titulo, cont: contenido, im: dato, cat: categoria, ciu: ciudad, st: estado }
	}).done(function(msg) {
	  //alert( "Success" );
	  //alert(msg);
	   	$( "#respuestaP" ).html("<div class='alert alert-success' role='alert'>"+msg+"</div>");
	  	form.reset();
	}).fail(function() {
    	$( "#respuestaP" ).html("<div class='alert alert-danger' role='alert'>Ha Ocurrido un Error al Grabar los Datos</div>");
  	}).always(function() {
    	//alert( "complete" );977592347
  	});

	
}