//http://localhost/betha/views/layout/Gigpz/img/img9.jpg
var _xcolum1=0;
var _xcolum3=0;
var _xcolum4=0;
var _columActivo="";
var ncolum=0;

function activo(data){
	
	var elemento = data.id;
	//$(".draggable").addClass('disabled');
	$("#"+elemento).addClass('activeComlumn');
	//alert('Elemento: '+data.id);
	_columActivo=data.id;
}

function nOactivo(data){
	var elemento = data.id;
	$("#"+elemento).removeClass('activeComlumn');
}

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

function publicarColumna(iDm)
{
	
	var form = document.frmContenido;
	ncolum=form.optionsColumns.value;
	var vTitulo=form.txtTitulo.value;
	var vContenido=form.txtContenido.value;
	var vcolor=form.optionColor.value;
	var vImg=form.txtFile.value;
	var styleColor='';
	//alert('Creando Columna !!'+ncolum);return false;

	var columna=document.createElement("div");
		var img=document.createElement("img");
		var caption=document.createElement("div");
			var titulo=document.createElement("h3");
			var texto=document.createElement("p");
				
				titulo.innerHTML=vTitulo;
				texto.innerHTML=vContenido;

	if (vcolor=='color1') {
		styleColor="column-color1";
	}
	if (vcolor=='color2') {
		styleColor="column-color2";
	};

	columna.className="thumbnail draggable "+styleColor;
		img.setAttribute('src','http://localhost/betha/views/layout/Gigpz/img/img.jpg');
		img.setAttribute('alt','');
		img.className="img-responsive";
		caption.className="caption";
		///var texto=document.createTextNode("Individual (Recomendado)");

	if (vImg.length>0) {columna.appendChild(img)};
	if (vTitulo.length>0){caption.appendChild(titulo);};
	if (vContenido.length>0) {caption.appendChild(texto);};

	if (vTitulo.length>0 || vContenido.length>0) {columna.appendChild(caption);};
	
	if (ncolum=='columna1') {
		_xcolum1++;
		columna.setAttribute('id','columx1'+_xcolum1);
		if (_xcolum1==1) {
			var dato=document.getElementById("colum10");
			if (dato) {
				document.getElementById("columna1").insertBefore(columna,dato);
			}else{
				var divPrincipal=document.getElementById("columna1");
				var divs=divPrincipal.getElementsByTagName("div");
				var xdiv=divs[0];
				//alert('Mostrando: '+xdiv);return false;
				document.getElementById("columna1").insertBefore(columna,xdiv);
			}
		}else{
			var dato=document.getElementById("columx1"+(_xcolum1-1));
			document.getElementById("columna1").insertBefore(columna,dato);
		}
	};
	if (ncolum=='columna3') {
		_xcolum3++;
		columna.setAttribute('id','columx3'+_xcolum3);
		if (_xcolum3==1) {
			var dato=document.getElementById("colum30");
			if (dato) {
				document.getElementById("columna3").insertBefore(columna,dato);
			}else{
				var divPrincipal=document.getElementById("columna3");
				var divs=divPrincipal.getElementsByTagName("div");
				var xdiv=divs[0];
				document.getElementById("columna3").insertBefore(columna,xdiv);
			}
		}else{
			var dato=document.getElementById("columx3"+(_xcolum3-1));
			document.getElementById("columna3").insertBefore(columna,dato);
		}
	};
	if (ncolum=='columna4') {
		_xcolum4++;
		columna.setAttribute('id','columx4'+_xcolum4);
		if (_xcolum4==1) {
			var dato=document.getElementById("colum40");
			if (dato) {
				document.getElementById("columna4").insertBefore(columna,dato);
			}else{
				var divPrincipal=document.getElementById("columna4");
				var divs=divPrincipal.getElementsByTagName("div");
				var xdiv=divs[0];
				document.getElementById("columna4").insertBefore(columna,xdiv);
			}
		}else{
			var dato=document.getElementById("columx4"+(_xcolum4-1));
			document.getElementById("columna4").insertBefore(columna,dato);
		}
		
	};
	
	columna.onmouseover=function(){
		activo(columna);
	}
	columna.onmouseout=function(){
		nOactivo(columna);
	}

	$(function() {$(".draggable").draggable({ revert: true, scroll: true, cursor: "move" });});

	$.ajax({
	  url: "Gigpz/publicarColumna/",
	  type: "POST",
	  cache:false,
  	  data: "column="+ncolum+"&fecha="+getFecha()+"&hora="+getHora()+"&titulo="+vTitulo+"&contenido="+vContenido+"&foto="+vImg+"&estilo="+styleColor+"&miembro="+iDm+"&tipo="+1+"&estado="+1+"&votos="+0,
  	  //$numero, $fecha, $hora, $titulo, $contenido, $foto, $estilo, $miembro, $tipo, $estado, $votos
	}).done(function(msg) {
	   	//$("#modalRpt").html("<p class='alert alert-success' role='alert'>"+msg+"</p>");
	  	//publicarColum($numero, $fecha, $hora, $titulo, $contenido, $foto, $estilo, $miembro, $tipo, $estado, $votos)
	  	
	  	var idGen=parseInt(msg);
	  	columna.setAttribute('attr',idGen);
	  	//alert(columna.id);
	  	form.reset();
	}).fail(function() {
    	//$("#modalRpt").html("<p class='alert alert-danger' role='alert'>Ha Ocurrido un Error al Grabar los Datos</p>");
  	}).always(function() {
    	//alert( "complete" );
  	});
}


function getHora(){
	var hora = new Date();
	horaCompleta=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
	return horaCompleta;
	//window.status =cad;
}

function getFecha(){
	var fecha = new Date();
	var dd = fecha.getDate();
	var mm = fecha.getMonth()+1; //fecha es 0!
	var yyyy = fecha.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 
	fecha = yyyy+'/'+mm+'/'+dd;
	return fecha;
}
//////Capturar enter con jquery////
function pruebaEnter(){
	$(".input-coment").keypress(function(e){
		if (e.which == 13) {
			e.preventDefault();
			alert("Se ha pulsado Enter");
		}
	});
}

//preventDefault jquery///
function pruebaDefault(){
	$(".input-coment").on(click,function(event){
		event.preventDefault();
		alert("Ok");
	});	
}
