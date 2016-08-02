_ruta="http://localhost/chamba/";
_swBoton=0;
//_ruta="http://www.chambaparachincha.com/";

function eliminarColumna(idc){
	//alert('se eliminara '+idc);
	$.ajax({
	  url: "Gigpz/eliminarColumna/",
	  type: "POST",
	  cache:false,
  	  data: "id="+idc,
	}).done(function(msg) {
	  	alert(msg);
	}).fail(function() {
    	//$("#modalRpt").html("<p class='alert alert-danger' role='alert'>Ha Ocurrido un Error al Grabar los Datos</p>");
  	}).always(function() {
    	//alert( "complete" );
  	});
}

function validarLogin()
{
	//alert('funciona !');
	var frm=frmLogin;
	var email="";
	var pass="";

	if (frm.txtEmail.value=="" || frm.txtEmail.value==0) {
		alert('Debe de ingresar un Email');
		frm.txtEmail.focus();
		return false;
	};

	if (valida_correo(frm.txtEmail.value)==false)
	{
		alert('Debe de ingresar un Email Valido !');
		form.email.value="";
		form.email.focus();
		return false;
	}

	if (frm.txtPass.value=="" || frm.txtPass.value==0) {
		alert('Debe de ingresar un Password');
		frm.txtPass.focus();
		return false;
	};
	
	//alert('Datos Enviados Correctamente !');
	mail=txtEmail.value;
	pass=calcMD5(txtPass.value);
	
	$.ajax({
	  url: "controllers/loginController.php",
	  type: "POST",
	  cache:false,
  	  data: "email="+mail+"&pas="+pass,
	}).done(function(msg) {
	  	//alert(msg);
	  	if (msg=="GO") {
	  		window.location=_ruta+'?accion=home';
	  		//alert('Datos Validos '+msg);
	  	}else{
	  		alert('Fail: '+msg);
	  	}
	}).fail(function() {
    	//$("#modalRpt").html("<p class='alert alert-danger' role='alert'>Ha Ocurrido un Error al Grabar los Datos</p>");
  	}).always(function() {
    	//alert( "complete" );
  	});
}

function configurarFecha()
{
	Calendar.setup({
	inputField: "txtFecha",
	ifFormat:   "%d-%m-%Y",
	button:     "selector"
	});
};

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

function postular(){
	alert('Pronto Estará Disponible !');
}

function Buscar()
{
	
	var form=frmBuscar;
	var region=form.cboRegion;
	var prov=form.cboProvincia;
	var cat=form.cboCategoria;
	
	/*if(region.value=="Seleccione" || region.value=="")
	{
		alert('Debe de seleccionar una Region');
		//region.value="";
		region.focus();
		return false;
	}*/
	if(prov.value=="Seleccione" || prov.value=="")
	{
		alert('Debe de seleccionar una provincia');
		
		prov.focus();
		return false;
	}
	if(cat.value=="Seleccione" || cat.value=="")
	{
		alert('Debe de seleccionar una categoria');
		
		cat.focus();
		return false;
	}
	//alert('Enviando Datos ! '+region.value+' '+prov.value+' '+cat.value);
	form.submit();
	//alert('Buscando');
	//return false;
	/*if(form.carrera.checked==false){
		validar_error(_elementoError,'Debe de seleccionar una carrera');
		form.carrera.checked=false;
		form.carrera.focus();
		return false;
	}*/
}

function grabarUsuario(){
	var form=document.frmNewUser;
	var email=frmNewUser.txtEmail.value;
	var _pass=frmNewUser.txtPass.value;
	var nombre=frmNewUser.txtNombre.value;
	var tipo=frmNewUser.cboTipo.value;
	var prov=frmNewUser.cboProvincia.value;
	var estado=1;

	if (email=="" || email==0) {
		alert('Debe de ingresar un Email');
		frmNewUser.txtEmail.focus();
		return false;
	};
	if (valida_correo(form.txtEmail.value)==false)
	{
		alert('Debe de ingresar un Email Valido !');
		frmNewUser.txtEmail.value="";
		frmNewUser.txtEmail.focus();
		return false;
	};
	if (_pass=="" || _pass==0) {
		alert('Debe de ingresar un Password');
		frmNewUser.txtPass.focus();
		return false;
	};
	if (nombre=="" || nombre==0) {
		alert('Debe de ingresar un Nombre');
		frmNewUser.txtNombre.focus();
		return false;
	};
	if (tipo=="Seleccione") {
		alert('Debe de seleccionar un Tipo de Usuario');
		frmNewUser.cboTipo.focus();
		return false;
	};
	if (prov=="Seleccione") {
		alert('Debe de seleccionar una Provincia');
		frmNewUser.cboProvincia.focus();
		return false;
	};

	_pass=calcMD5(_pass);
	//alert('Nuevo Usuario ! '+_pass);
	//return false;

	$.ajax({
	  url: "controllers/saveUserController.php",
	  type: "POST",
	  cache:false,
  	  data: { mail: email, pass: _pass, nom: nombre, tip: tipo, pro: prov, est: estado}
	}).done(function(msg) {
	  //alert( "Success" );
	  //alert(msg);
	   	$( "#rptOperation" ).html("<div class='alert alert-success' role='alert'>"+msg+"</div>");
	  	form.reset();
	  	_swBoton=0;
		$("#btnNuevo").html("Nuevo");
		$("#btnGrabar").attr("disabled","disabled");
	}).fail(function() {
    	$( "#rptOperation" ).html("<div class='alert alert-danger' role='alert'>Ha Ocurrido un Error al Grabar los Datos</div>");
  	}).always(function() {
    	//alert( "complete" );977592347
  	});
}

function nuevoUsuario(){
	var form=document.frmNewUser;
	if (_swBoton==0) {
		form.reset();
		form.txtEmail.focus();
		$("#btnGrabar").removeAttr("disabled");
		$("#btnNuevo").html("Cancelar");
		_swBoton=1;
	}else{
		//alert('cancelar !');
		_swBoton=0;
		$("#btnNuevo").html("Nuevo");
		$("#btnGrabar").attr("disabled","disabled");
	};
	
}

function grabarPublicacion()
{
	var form=document.frmPublicar;
	var fecha=form.txtFecha.value;
	var titulo=form.txtTitulo.value;
	var contenido=$('#txtaContenido').val();
	var img=$('#file_upload').val();
	var estado=1;
	//Usuario//
	var categoria=form.cboCategoria.value;
	var ciudad=form.cboCiudad.value;
	var empresa=1;
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
		alert('Debe de Seleccionar una imagen');
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

	form.submit();
	

	
}

function limpiarForms(){
	
	//formularios=document.forms.length;
	//alert('Formularios : ');
	for (var i = 0; i < document.forms.length; i++) {
		document.forms[i].reset();
	};
}
