// JavaScript Document
//////////////////////////////////DECLARACIONES/////////////////////////////////////
var _elementoError='rpt_registro';
////////////////////////////////////7
total_addOp=0;
/////funcion crear_container_videos
sw_containerv=0;
///////////funcion ver_descargas//////
sw_verDescarga=0;
//////////funcion ver_video
sw_verVideo=0;
///////////////////funcion container_chat()
sw_chat=0;
///////////////////crear_seccion
sw_seccion=0;
/*var v_gigpzID=0;
var id_gigpz=0;*/
////////////////////////
//////////coordenadas///////////
var cX=0;cY=0;cW=0;cH=0;
var vimg='';
///////////////////////
var sw_efecto=0;
var gz_efecto='';
var d_efecto='';
///////////nuevaNoticia
var Nid=0;
var nVeces=0;
//////////////////////
///gigpz_ajaxGet
var Ndiv;
var Nv=0;
var Nv2=0;
////////////////

//////////////////nuevocomentario
var NidComen=0;
var nVe=0;

///////////////////nuevo comentario foto
var NidCfoto=0;
var nVeCfoto=0;

///////////////hizo enter
var swEnter=0;

///////////////funcion escogido
var escoge=0;
var escogeNom='';
var control_votos=0;
////////////// funcion el evento de addcampo
var numero=0;

/////////////funcion elegido
var id_elegido;
var posicion;
var conteo;
///////////////////// para uploadify
var swIdAlbum=0;

//////////////para draggable
var id_NoticiaX=0;
var id_div=''; //6
//////////// crearAlbum ->>>funcion creadora de Elementos ////////////////////////
var swAlbum=0;
//2 var div_album=document.createElement("div");
//3 var div_album=document.getElementById('crear_album');
var span_contenido=document.createElement("span");
var hr_separador=document.createElement("hr");
var frm_album=document.createElement("form");

var txtNombre=document.createElement("input");
var lblNombre=document.createElement("label");
var var_br=document.createElement("br");
var btn_subir=document.createElement("a");
var div_adjuntos=document.createElement("div");
var nfotos=document.createElement("input");
var btn_grabar=document.createElement("input");
var btn_oculto=document.createElement("input");

//fileImagen:false,
var texto_span=document.createTextNode("Individual (Recomendado)");
span_contenido.appendChild(texto_span);

frm_album.setAttribute('name','frmupload_fotos');
frm_album.setAttribute('enctype','multipart/form-data');
frm_album.setAttribute('method','post');
frm_album.setAttribute('action','?accion=upload_fotos');

	txtNombre.setAttribute('type','text');
	txtNombre.setAttribute('id','txt_nombre');
	txtNombre.setAttribute('name','txt_nombre');

	lblNombre.setAttribute('for','txt_nombre');
	lblNombre.innerHTML="Nombre del Album: ";

	div_adjuntos.setAttribute('id','adjuntos');
	//<input type="file" name="fotos[]" id="fotos[]" />
		nfotos.setAttribute('type','file');
		nfotos.setAttribute('name','fotos[]');
		nfotos.setAttribute('id','fotos[]');
		nfotos.onclick=function()
		{
			//alert('hizo click');
		}
	div_adjuntos.appendChild(nfotos);

	btn_subir.setAttribute('href','javascript:void(0)');
	btn_subir.setAttribute('id','btn_subir');
	btn_subir.setAttribute('name','btn_Subir');

	var textop=document.createTextNode("subir otro Foto");

	//gigpz.textoArea.onkeyup=function(elevento)
	btn_subir.onclick=function(evt)
	{
		//alert('funka este boton');
		addcampo();
	}
	btn_subir.appendChild(textop);

	btn_grabar.setAttribute('type','button');
	btn_grabar.setAttribute('id','btn_grabar');
	btn_grabar.setAttribute('name','btn_grabar');
	btn_grabar.setAttribute('value','Grabar');
	btn_grabar.onclick=function()
	{
		//alert('aki se graban los datos');
		//document.frmupload_fotos.submit();
		valida_upload();
	}
	
	btn_oculto.setAttribute('type','hidden');
	btn_oculto.setAttribute('name','grabar');
	btn_oculto.setAttribute('value','si');

function ver_descargas(){
		if (sw_verDescarga==0) {
			document.getElementById("locked").className="locked_on";		
			//document.body.className="mi_body";

			var div=document.createElement('div');
			var titulo=document.createElement('h2');
			var x_delete=document.createElement('span');
			var a1=document.createElement('a');
			var a2=document.createElement('a');
			var a3=document.createElement('a');
			var a4=document.createElement('a');
			var a5=document.createElement('a');
			var a6=document.createElement('a');

			div.setAttribute('id','cont_descarga');
			div.className="cont_descargas";

			titulo.innerHTML=" Descargas...";

			x_delete.className="close";
			x_delete.innerHTML="X";
			x_delete.onclick=function(){
				erase_verDescargas();
				eliminar_locked();
			};

			a1.setAttribute('href','public/upload/1/files/uploadify.rar');
			a1.innerHTML="plugin 1 uploadify || ";

			a2.setAttribute('href','public/upload/1/files/jcrop.rar');
			a2.innerHTML=" plugin 2 jcrop || ";

			a3.setAttribute('href','public/upload/1/files/turnjs.rar');
			a3.innerHTML=" plugin 3 turns.js || ";

			a4.setAttribute('href','public/upload/1/files/albumweb.rar');
			a4.innerHTML=" Curso Album web ultima versión|| ";

			a5.setAttribute('href','public/upload/1/videos/albumweb5.rar');
			a5.innerHTML=" Video de Album Web 5 || ";

			a6.setAttribute('href','public/upload/1/videos/album web 6.rar');
			a6.innerHTML=" Video de Album Web 6 || ";

			div.appendChild(titulo);
			div.appendChild(x_delete);
			div.appendChild(a1);
			div.appendChild(a2);
			div.appendChild(a3);
			div.appendChild(a4);
			div.appendChild(a5);
			div.appendChild(a6);

			document.body.appendChild(div);
			//$("#cont_descarga").toggle('slow');
			sw_verDescarga++;			
		}else{
			erase_verDescargas();
			sw_verDescarga=0;
		}		
}
///clase instanceOf mi_clase///
//if(typeOf(calcular.metodo)==undefinied - object - number - string)
function erase_verDescargas(){
	if (sw_verDescarga==1) {
		var div=document.getElementById("cont_descarga");
  		div.parentNode.removeChild(div);
  		sw_verDescarga=0;
  		//alert('se elimina el bloke');
	}
	
}

function eliminar_locked()
{
	erase_verDescargas();
	document.getElementById("locked").className="locked_off";
	var div=document.getElementById("cont_video");
  	div.parentNode.removeChild(div);
	sw_verVideo=0;
	
}

function ver_video(id_video){
	/*if($.browser.safari){				
	}else{			
	}*/
	document.getElementById("locked").className="locked_on";
	//document.body.className="mi_body";
	
	sw_verVideo++;
	if (sw_verVideo==1) {
		var div_video=document.createElement("div");
		div_video.setAttribute('id','cont_video');
		div_video.className="cont_video";

	    var iframe_video=document.createElement("iframe");
		iframe_video.setAttribute('width','580');
		iframe_video.setAttribute('height','380');
		iframe_video.setAttribute('src',id_video);
		iframe_video.setAttribute('frameborder','0');

		div_video.appendChild(iframe_video);
		
		//document.getElementById("principal").appendChild(div_video);
		document.body.appendChild(div_video);	
		$("#cont_video").slideDown('slow');
	}else
	{
		var div=document.getElementById("cont_video");
  		div.parentNode.removeChild(div);
		sw_verVideo=0;
	};
	
}

function crear_container_videos(){
	sw_containerv++;
	var padre=document.getElementById("principal").id;
	if (sw_containerv==1)
		{
			var div_videos=document.createElement("div");
			var div_videos_in=document.createElement("div");
			var indice_a=document.createElement("a");
			//var texto_a=document.createTextNode("^");

			div_videos.setAttribute('id','container_videos');
			div_videos.setAttribute('name','container_videos');
			div_videos.className='contenedor_videos';

			div_videos_in.setAttribute('id','cont_videosIn');
			div_videos_in.setAttribute('name','cont_videosIn');
			div_videos_in.className='cont_in_videos';
			
			indice_a.setAttribute('name','indice');

			var img_video1=document.createElement("img");
			img_video1.setAttribute('width','187');
			img_video1.setAttribute('height','100');
			img_video1.setAttribute('src','public/img/video1.png');
			img_video1.setAttribute('border','1');
			img_video1.setAttribute('title','Album o Libro web con Turn.js');
			img_video1.onclick=function(){
				ver_video('http://www.youtube.com/embed/mTZ8CrATd6Q');
			}
			
			var img_video2=document.createElement("img");
			img_video2.setAttribute('width','187');
			img_video2.setAttribute('height','100');
			img_video2.setAttribute('src','public/img/video2.png');
			img_video2.setAttribute('border','1');
			img_video2.setAttribute('title','Recortar imagenes con jcrop plugin para jquery');
			img_video2.onclick=function(){
				ver_video('http://www.youtube.com/embed/QX90zVhe6p4');
			}
			
			var img_video3=document.createElement("img");
			img_video3.setAttribute('width','187');
			img_video3.setAttribute('height','100');
			img_video3.setAttribute('src','public/img/video3.png');
			img_video3.setAttribute('border','1');
			img_video3.setAttribute('title','Subir Multiples archivos al servidor con uploadify');
			img_video3.onclick=function(){
				ver_video('http://www.youtube.com/embed/s7gQtpLWqpQ');
			}
			
			var img_video4=document.createElement("img");
			img_video4.setAttribute('width','187');
			img_video4.setAttribute('height','100');
			img_video4.setAttribute('src','public/img/video4.png');
			img_video4.setAttribute('border','1');
			img_video4.setAttribute('title','Quinta Parte Nuestra Aplicacion de Votos Online');
			img_video4.onclick=function(){
				ver_video('http://www.youtube.com/embed/XgHgDg6GWCM');
			}

			var img_video5=document.createElement("img");
			img_video5.setAttribute('width','187');
			img_video5.setAttribute('height','100');
			img_video5.setAttribute('src','public/img/video5.png');
			img_video5.setAttribute('border','1');
			img_video5.setAttribute('title','Cuarta Parte Nuestra Aplicacion de Votos Online');
			img_video5.onclick=function(){
				ver_video('http://www.youtube.com/embed/lhjWtGrJxFc');
			}
			//indice_a.appendChild(texto_a);
			div_videos_in.appendChild(indice_a);
			div_videos_in.appendChild(img_video1);
			div_videos_in.appendChild(img_video2);
			div_videos_in.appendChild(img_video3);
			div_videos_in.appendChild(img_video4);
			div_videos_in.appendChild(img_video5);
			
			div_videos.appendChild(div_videos_in);
			document.getElementById("principal").appendChild(div_videos);
			$("#container_videos").slideDown('slow');
		};
	if (sw_containerv>1) 
		{
			var div=document.getElementById("container_videos");
  			div.parentNode.removeChild(div);
			sw_containerv=0;
			if (document.getElementById('cont_video')) 
			{
				var xdiv=document.getElementById('cont_video');
				xdiv.parentNode.removeChild(xdiv);
				sw_verVideo=0;
			};
		};
}

function container_chat()
{
	if (sw_chat==0) {
		sw_chat++;
		var div=document.createElement('div');
		div.setAttribute('id','container_chat');
		div.setAttribute('name','container_chat');
		div.className='chat_container';

		var txt=document.createTextNode('el chat');
		div.appendChild(txt);
		//alert('funka chat');
		document.getElementById('chat').appendChild(div);
	}else{
		var div=document.getElementById('container_chat');
		div.parentNode.removeChild(div);
		sw_chat=0;
	}
	
}
//1 div_album.setAttribute('id','crear_album');
////////////////////////////////////////////////
/*<form name="frmupload_fotos" enctype="multipart/form-data" method="post" action="upload_fotos.php">
        <label for="nombre_album">Nombre del Album</label>
        <input type="text" name="nombre_album" id="nombre_album" value=""/>
        <br />
        <div id="adjuntos">
        <input type="file" name="fotos[]" id="fotos[]" />
    	</div>
        <a href="javascript:void(0);" onclick="addcampo()">Subir otra foto</a>
        <br />
        <input type="button" name="btngrabar" value="Grabar"  onclick="valida_upload();"/><input type="hidden" name="grabar" value="si" /><input type="hidden" name="idm" id="idm" value="<?php echo $id;?>" />!!
        <input type="button" name="btnvolver" value="Volver"  onclick="javascript:window.location='home.php'"/>
	</form>*/
function crear_encuesta()
{
	//alert('crea encuesta');
	var div=document.createElement('div');
	var frm=document.createElement('form');
	var btn_grabar_e=document.createElement('input');

	frm.setAttribute('name','frm_encuesta');
	frm.setAttribute('id','frm_encuesta');
  	
	btn_grabar_e.setAttribute('type','button');
	btn_grabar_e.setAttribute('id','btn_grabar_e');
	btn_grabar_e.setAttribute('name','btn_grabar_e');
	btn_grabar_e.setAttribute('value','grabar');
	btn_grabar_e.onclick=function()
	{
		//alert('Grabar Encuesta !');
		id_gigpz=document.getElementById('id_gigpz').getAttribute('name');
		$.ajax({
				url:'controller/grabar_encuestaController.php',
				type:'POST',
				data:'preg='+txt_pregunta.value+'&web='+id_gigpz+'&op=encuesta',
				cache:false,
				success:function(rpt)
				{
					var id_encuesta=rpt;
					var teXto=0;
					var fv=document.frm_encuesta;
					var txts=fv.getElementsByTagName("input");
					
					for (var i=0; i<txts.length; i++) {
						if (txts[i].type=='text')
							{
								//alert(txts[i].value+' '+id_gigpz);
								$.ajax({
									url:'controller/grabar_encuestaController.php',
									type:'POST',
									data:'op_c='+txts[i].value+'&id_c='+id_encuesta+'&op=detalle',
									cache:false,
									success:function(rpt2)
									{
										//alert(rpt2);
									}

								});
							};
					};
					//$('#encuesta_dato').html('<h2>grabado correctamente</h2>');
					$.ajax({
							url:'controller/grabar_encuestaController.php',
							type:'POST',
							data:'op=listar&id_m='+id_gigpz,
							cache:false,
							success:function(rpt3)
							{
								$('#encuesta_dato').html(rpt3);
							}

					});
				}
		});
		

	}

	var txt_pregunta=document.createElement('input');
	var lbl_pregunta=document.createElement('label');
	var btn_pregunta=document.createElement('input');

	div.setAttribute('id','add_encuesta');
	div.setAttribute('name','add_encuesta');
	
	txt_pregunta.setAttribute('type','text');
	txt_pregunta.setAttribute('id','txt_pregunta');
	txt_pregunta.setAttribute('name','txt_pregunta');

	lbl_pregunta.setAttribute('for','txt_pregunta');
	lbl_pregunta.innerHTML="Tu Pregunta";

	btn_pregunta.setAttribute('type','button');
	btn_pregunta.setAttribute('id','grabar_encuesta');
	btn_pregunta.setAttribute('name','grabar_encuesta');
	btn_pregunta.setAttribute('value','Agregar Opciones');
	btn_pregunta.onclick=function()
	{
		
		add_opcion();
	}
	div.appendChild(lbl_pregunta);
	div.appendChild(txt_pregunta);
	div.appendChild(btn_pregunta);

	div.appendChild(frm);

	document.getElementById('encuesta_dato').innerHTML="";
	document.getElementById('encuesta_dato').appendChild(div);
	document.getElementById('encuesta_dato').appendChild(btn_grabar_e);
};

function add_opcion()
{
	//alert('agregar opciones');
	if (total_addOp<10) {
		total_addOp++;
		frset=document.createElement('fieldset');

		var txt_opcion=document.createElement('input');
		var btn_op_mas=document.createElement('input');
		var btn_cancel=document.createElement('a');

		frset.setAttribute('id','frsetAdd'+total_addOp);
		frset.setAttribute('name','frsetAdd'+total_addOp);

		txt_opcion.setAttribute('type','text');
		//txt_opcion.setAttribute('id','txt_opcion'+total_addOp);
		txt_opcion.setAttribute('name','txt_opcion'+total_addOp);		
	  	/*txt_opcion.name='txt_opcion[]';
	  	txt_opcion.type='file';*/

		btn_op_mas.setAttribute('type','button');
		btn_op_mas.setAttribute('id','btn_op_'+total_addOp);
		btn_op_mas.setAttribute('name','btn_op_'+total_addOp);
		btn_op_mas.setAttribute('value','+');
		btn_op_mas.onclick=function()
		{
			add_opcion();	
		}
		btn_cancel.setAttribute('name','btn_cancel'+total_addOp);
		btn_cancel.setAttribute('id','btn_cancel'+total_addOp);
		btn_cancel.setAttribute('href','javascript:void(0)');
		btn_cancel.innerHTML="cancelar";
		btn_cancel.onclick=function(evt)
		{
			var eli=this.id;
			var padre=document.getElementById(eli).parentNode;
			padre.parentNode.removeChild(padre);
			//aqui optengo el elemento que ocasiona el evento//
			//var ev=evt.srcElement? evt.srcElement:evt.target;
			//alert(ev.name);
		}

		frset.appendChild(txt_opcion);
		frset.appendChild(btn_op_mas);
		frset.appendChild(btn_cancel);
		document.getElementById('frm_encuesta').appendChild(frset);
	};
	
}

function editar_portada()
{
	//alert('funka');
	$("#portada span").toggle();
}

function mEliminar_comentario(elemento)
{
	$("#"+elemento+" span").toggle();

}
function eliminar_comentario(id_ele,elemen,miembro,sesion)
{
	//alert('Id elemento '+id_ele+' '+'elemento '+elemen);
	//alert(miembro+' '+sesion);return false;
	if (miembro==sesion) {
		var hijo=document.getElementById(elemen);
		hijo.parentNode.removeChild(hijo);
		$.ajax({
				url:'controller/erase_comentarioController.php',
				type:'POST',
				data:'id='+id_ele,
				cache:false,
				success:function(rpt)
				{
					//alert(rpt);
				}

		});	
	};
	
}

function showCoords(c)
  	{
		// variables can be accessed here as
		// c.x, c.y, c.x2, c.y2, c.w, c.h
		//alert(c.x+' '+c.y+' '+c.x2+' '+c.y2+' '+c.w+' '+c.h);		
		cX=c.x;
		cY=c.y;
		cW=c.w;
		cH=c.h;
	};
function recortar(id,src)
{
	//alert(id+' '+src+' '+vimg); return false;
	if (cW>0)
	{
		$.ajax({
			    	url:'controller/cortar_fotoController.php',
			    	type:'POST',
			    	data:'x='+cX+'&y='+cY+'&w='+cW+'&h='+cH+'&img='+vimg+'&dir='+id,
			    	cache:false,
			    	success:function(rpt)
			    	{
			    		//alert(rpt);
			    		$('#portada img').attr('src',rpt);
			    		//window.location="index.php?accion=home";
			    		window.location.reload();
			    	}
		});
		//alert(cW+' '+cH);
	}else{
		alert('no ha seleccionado un area');
	};
}
function activar_recorte()
{

	$('#target').Jcrop({
			onSelect: showCoords,
            //onChange: showCoords
            //onRelease: showCoords,
            bgColor:     'black',
            bgOpacity:   .4,
            //setSelect:   [ 100, 100, 50, 50 ],
            aspectRatio:  18/7,
            minSize: [ 300, 20 ]
            //maxSize: [ w, h ]
	});
}
function subir_portada()
{
	$('#upload_portada').toggle();
	//alert('funka');
	//$('#upload_portada').show();
}

function cambiar_portada(id_sesion,src_img)
{	
	//alert(id_sesion+' '+src_img);
	$('#sombra').removeClass('sombraUnload');
	$('#sombra').addClass('sombraLoad');

	vimg=$('#portada img').attr('src');
	//alert(vimg);
	$('#recorte').removeClass('windowUnload');
	$('#recorte').addClass('windowMax');

	document.getElementById('recorte').innerHTML="<img src='"+vimg+"' id='target' onmouseover='activar_recorte();'/><br /><a href='javascript:void(0);' onclick='recortar("+id_sesion+",\""+src_img+"\");'>Recortar</a>";
	//",\"resultado_de_comentariosX".$noticia_final."\"

	/*var div=document.createElement('div');
	var form_portada=document.createElement('form');
	var txt_file=document.createElement('input');
	var btn_portada=document.createElement('input');
	
	form_portada.setAttribute('name','form_portada');
	form_portada.setAttribute('id','form_portada');
	form_portada.setAttribute('method','post');
	form_portada.setAttribute('action','controller/cambiar_PortadaController.php');
	form_portada.setAttribute('enctype','multipart/form-data');

	txt_file.setAttribute('type','file');
	txt_file.setAttribute('id','upload_portada');
	txt_file.setAttribute('name','upload_portada');

	btn_portada.setAttribute('type','button');
	btn_portada.setAttribute('id','grabar_portada');
	btn_portada.setAttribute('name','grabar_portada');
	btn_portada.setAttribute('value','Grabar');
	btn_portada.onclick=function(){
		if (txt_file.value!=0) 
			{
				//alert(txt_file.value);
				form_portada.submit();

				/*$.ajax({
					url:'controller/cambiar_PortadaController.php',
					type:'POST',
					data:'img='+txt_file.value,
					cache:false,
					success:function(rpt)
					{
						$('#portada').html(rpt);
					}
				}); 
				
			}
		
	}
	
	form_portada.appendChild(txt_file);
		
	form_portada.appendChild(btn_portada);
	div.appendChild(form_portada);

	document.getElementById('portada').appendChild(div);*/
	
}

function crear_seccion()
{
	//alert('crear secciones');
	/*$(document.body).addClass("mi_body");
	$("#sombra").addClass("sombraLoad");
	$("#sombra").show();*/
	if (sw_seccion==0) {
		sw_seccion++;
		var div=document.createElement('div');
		var txt_sec=document.createElement('input');
		var lbl_sec=document.createElement('label');
		var txta_sec=document.createElement('textarea');
		var btn_sec=document.createElement('input');

		div.setAttribute('id','add_seccion');
		div.setAttribute('name','add_seccion');
		div.className='in_post';

		txt_sec.setAttribute('type','text');
		txt_sec.setAttribute('id','txt_sec');
		txt_sec.setAttribute('name','txt_sec');

		lbl_sec.setAttribute('for','txt_sec');
		lbl_sec.innerHTML="Título de Seccion: ";

		btn_sec.setAttribute('type','button');
		btn_sec.setAttribute('id','grabar_sec');
		btn_sec.setAttribute('name','grabar_sec');
		btn_sec.setAttribute('value','guardar');

		v_gigpzID=document.getElementById('id_gigpz');
		id_gigpz=v_gigpzID.getAttribute('name');


		btn_sec.onclick=function()
		{
			//alert('aki se graban los datos ');			
			$.ajax({
				url:'controller/grabar_seccionController.php',
				type:'POST',
				data:'titulo='+txt_sec.value+'&texto='+txta_sec.value+'&idg='+id_gigpz,
				cache:false,
				success:function(rpt)
				{
					//alert(rpt);
					$('#accordion').append(rpt);
					//window.location="?accion=home";
					
				}
			});
		}
		
		div.appendChild(lbl_sec);
		div.appendChild(txt_sec);
		div.appendChild(txta_sec);
		div.appendChild(btn_sec);

		document.getElementById('gz_accordion').appendChild(div);	
	}else{
		var div=document.getElementById('add_seccion');
		div.parentNode.removeChild(div);
		sw_seccion=0;
	}
	
};

function crear_hobby()
{
	alert('crear hobby');
};

function contar_visitas(){
	//alert('contar');
	$.ajax({
		url:'controller/contar_visitasController.php',
		type:'POST',
		data:'id_w=1',
		cache:false,
		success:function(rpt)
		{
			//$("#mostrar_foto").html(rpt);
			
		}
	});
}

function cambiar_imagen(img,ele){
	//alert('funka');
	elemento=document.getElementById(ele).src=img;

}
////////////////////////////////////////////////
function elegido(idelemento,npos)
{
	//alert(idelemento+" "+npos);
	id_elegido=idelemento;
	posicion=npos;
	conteo=0;
	//alert('posicion '+npos+' id foto '+idelemento);
	return id_elegido;

}
function mostrar_foto(pag,miembro,album,id_foto,tot,xfoto,pos)
{
	//alert('foto mostrada '+id_foto);
	$(document.body).addClass("mi_body");
	$("#sombra").addClass("sombraLoad");
	$("#sombra").show();

	$("#v_modal").removeClass("windowUnload");
	$("#v_modal").addClass("windowLoad");
	$("#v_modal").show();
	$("#mostrar_foto").html('<h3>Cargando...</h3>');

	$.ajax({
		  	url:'controller/mostrar_fotoController.php',
		  	type:"GET",
		  	data:"idm="+miembro+"&alb="+album+"&id_f="+id_foto+"&vfoto="+xfoto+"&xtot="+tot+"&posi="+pos,
		  	cache: false,
		  	//dataType:"json",
		  	success:function(rpt)
		  	{
		  		//alert(rpt);
		  		//document.getElementById("v_modal").innerHTML=rpt;
		  		$("#mostrar_foto").html(rpt);

		  	}
		 }).done(function( obj ) {
		  		//alert( "datos Recibidos: ");
		  					
		 });
}

function navegar_fotos(miembro,pos,orden,tot)
{
	posicion=pos;
	var ntot=tot-1;
	if (orden=='prev') 
		{
			--posicion;
			--conteo;
								
		}
	if (orden=='next') 
		{
			++posicion;
			++conteo;
			
		}

	if (posicion<0)
		{
			posicion=0;
			return false;
		};
	if (posicion>ntot) 
		{
			posicion=ntot;
			return false;
		};

	$("#mostrar_foto").html('<h3>Cargando...</h3>');
	$.ajax({
			url:'controller/navegar_fotoController.php',
			type:'POST',
			data:'idm='+miembro+'&xpos='+posicion+"&tot_f="+tot,
			cache:false,
			success:function(vrpt)
			{
				$("#mostrar_foto").html(vrpt);
			}
	});
	
}

function probar()
{
	alert('funka');
}

function escogido(id,nom){

	
		escoge=id;
		escogeNom=nom;
		//alert(escoge);
		//return id;
		//evt=evento(evt);
	  	//ncampo=rObj(evt);
}

function votar(n_en){
	if (escoge!=0 && control_votos==0) {
		/*if (n_en==2) {
			escogeNom='gigpz';
		}*/
		$("#rpt_encuesta").html("<img src='public/img/preloadgigpz.gif'>");
		$.ajax({
		url:'controller/votarController.php',
		type:'POST',
		data:'id_op='+escoge,
		cache:false,
		success:function(rpt)
			{
				//alert('Usted voto correctamente por '+escogeNom+' '+rpt);
				$('#rpt_encuesta').html('+1 para '+escogeNom);
				control_votos=1;
			}

		})	
	}
}

evento=function(evt){
	
	return(!evt)?event:evt;
}

addcampo=function()
{
	ndiv=document.createElement("div");
	//ndiv.className="fotos";
	ndiv.id='file'+(++numero);
	
	  ncampo=document.createElement("input");
	  ncampo.name='fotos[]';
	  ncampo.type='file';
	  
	  a=document.createElement("a");
	  a.name=ndiv.id;
	  a.href='#';
	  
	  a.onclick=elimcamp;
	  a.innerHTML='Cancelar';
	  
	  //INTEGRANDO//
	  ndiv.appendChild(ncampo);
	  ndiv.appendChild(a);
	 
	container=document.getElementById("adjuntos");
	container.appendChild(ndiv);
	  	
}

elimcamp=function(evt)
{
  evt=evento(evt);
  ncampo=rObj(evt);
  div=document.getElementById(ncampo.name);
  div.parentNode.removeChild(div);
  
}

rObj=function(evt)
{
	return evt.srcElement? evt.srcElement:evt.target;
}

function valida_upload(){
	var form=document.frmupload_fotos;
	if(form.txt_nombre.value.length==0)
	{
		form.txt_nombre.value="";
		form.txt_nombre.focus();
		return false;
	}
	form.submit();
}
///////////////////////////////////////////////////////////////////////////////////
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
function escribio(valor,div)
{
	//alert("funciona");
	if(valor!="")
	{
  	 document.getElementById(div).style.display="none";
	}
	
}
function validar_error(elemento,msj)
{
		document.getElementById(elemento).innerHTML=msj;
		document.getElementById(elemento).style.display="block";
		document.getElementById(elemento).style.color="red";
}
function validaregistro()
{
  var form=document.form_registro;
	if(form.nombre.value==0){
		validar_error(_elementoError,'Debe ingresar su Nombre');

		form.nombre.value="";
		form.nombre.focus();
		return false;
		}
	if(form.apellido.value==0){
		validar_error(_elementoError,'Debe ingresar su apellido');

		form.apellido.value="";
		form.apellido.focus();
		return false;
		}
	if(form.email.value==0){
		validar_error(_elementoError,'Debe ingresar su email');

		form.email.value="";
		form.email.focus();
		return false;
		}
		
	///////////////////////////////////////	
	if (valida_correo(form.email.value)==false)
	{
		validar_error(_elementoError,'el Email ingresado no es Correcto o Valido');

		form.email.value="";
		form.email.focus();
		return false;
	}
	///////////////////////////////////////////////
	if(form.pass.value==0){
		
		validar_error(_elementoError,'Debe ingresar el password');

		form.pass.value="";
		form.pass.focus();
		return false;
		}
	if(form.repass.value==0 || form.repass.value!=form.pass.value){
		
		validar_error(_elementoError,'Los password no coinciden o no son validos');

		form.repass.value="";
		form.repass.focus();
		return false;
		}
	if(form.sexo.value=="Seleccione el Sexo"){
		
		validar_error(_elementoError,'Debe de seleccionar tu sexo');

		form.sexo.value="";
		form.sexo.focus();
		return false;
		}
	
	/*if(form.carrera.checked==false){
		
		validar_error(_elementoError,'Debe de seleccionar una carrera');

		form.carrera.checked=false;
		form.carrera.focus();
		return false;
	}*/

	if(form.cbo_dias.value=="dia"){
		
		validar_error(_elementoError,'Debe de seleccionar un dia valido');

		form.cbo_dias.value="";
		form.cbo_dias.focus();
		return false;
		}
	if(form.cbo_meses.value=="mes"){
		
		validar_error(_elementoError,'Debe de seleccionar un mes valido');

		form.cbo_meses.value="";
		form.cbo_meses.focus();
		return false;
		}
	if(form.cbo_anos.value=="ano"){
		
		validar_error(_elementoError,'Debe de seleccionar un año valido');

		form.cbo_anos.value="";
		form.cbo_anos.focus();
		return false;
		}
	 form.repass.value=calcMD5(form.repass.value);
	 form.pass.value=calcMD5(form.pass.value);
	 form.submit();
 }
 
function validalogueo()
{
	var form=document.form_ingreso;
    if (form.nom_miembro.value.length >0 && form.pass_miembro.value.length>0)
	{
		//alert('se envio');return false;
		//form.nom_usuario.value=htmlSpecialChars
		form.pass_miembro.value=calcMD5(form.pass_miembro.value);
		form.submit();
	}else
	{
		//alert('No se ha Enviado');
	}
}

function enter(elevento,funx)
{
  //alert('funcion enter');
  var evento=elevento || window.event; 
  if(evento.keyCode==13 && evento.type=="keyup")
  {
	 
	 swEnter=1;
	 //alert('Enviado Enter '+swEnter);
	 if (funx==1) 
	 	{
	 		validalogueo();
	 	};

	 }else{
	 swEnter=0;
  }                
}

/////////////////////////////////////////////////////////////////////////////////7
function eliminar(url)
{
	//alert("Funciona...");
	if(confirm("realmente desea eliminar este registro ?"))
	{
		window.location=url;
	}
}
function limpiar_form(frm,txt)
{
	//document.form_add.reset();
	document.getElementById(frm).reset();
	document.getElementById(txt).focus();
	//document.forms[0].elements[0]
	//document.form_add.nom.focus();
}
///////////////////////////////////////////////////////////////////////////////////////
function ocultar_ventana()
{			

			$("#v_modal").removeClass("windowLoad");
			$("#v_modal").addClass("windowUnlooad");
			$("#v_modal").hide();

  			$(document.body).removeClass("mi_body");
  			$("#sombra").removeClass("sombraLoad");

  			$("#crear_album").hide();
  			swAlbum=0;
  			div_album.innerHTML="";
  			div_album.parentNode.removeChild(div_album);

			$("#sombra").addClass("sombraUnload");
			$("#sombra").hide();

			//document.getElementById('sombra').className='sombraUnload';
			//document.getElementById('v_modal').className='windowUnload';
			//document.getElementById('mi_marco').src="";

			//$("#sombra").removeClass("sombraLoad");

			//$("#sombra").addClass("sombraUnload");
			//$("#sombra").hide();

			//$("#v_modal").hide();
}

function eliminar_noticia(id_elemento,id_noticia,id_pro)
{
	//alert(id_elemento+' '+id_noticia+' '+id_pro);		
			var xdiv=document.getElementById(id_elemento);
		  	//alert('quieres eliminar el div '+id_elemento+' '+id_noticia);
		  	xdiv.parentNode.removeChild(xdiv);
		  	
		  	$.ajax({
		  		url:'controller/eliminar_noticiaController.php',
		  		type:'post',
		  		data:'id_p='+id_pro+'&id_n='+id_noticia,
		  		cache:false,
		  		success:function(vrpt)
		  		{
		  			//alert(vrpt);
		  		}
		  	});		
		
}

///////////////////////////////MIS FUNCIONES AJAX///////////////////////////////////////7
function getXMLHTTPRequest()
{
 var req=false;
 try {
 	//req=new XMLHTTPRequest();
	req = new XMLHttpRequest(); 
 }
 catch(err1)
 {
	try
	{
	 req= new ActiveXObject('Msxml2.XMLHTTP');
	 //req = new ActiveXObject('MSXML2.XMLHTTP'); // IE
	}
 catch(err2)
 {
	try
	{
	 req= new ActiveXObject('Microsoft.XMLHTTP');
    }
 catch(err3)
  {
    req= false;
  }
 }
 }
 return req;	
}
var httpgigpz = getXMLHTTPRequest();

function gigpz_ajaxGet(div,pag,id_not,coment,btnId,resp,ultima)
{	
	//gigpz_ajaxGet(<?php echo $total_noticia; ?>,'?accion=grabar_noticia',<?php echo $id_miembro; ?>,frm_ideas.txtideas.value,'a',<?php echo $id_miembro;?>,<?php echo $ultima_noticia;?>);
   //alert(id_not+" "+div+" "+pag+" "+coment+" "+btnId+" "+resp+" "+ultima);return false;
   if(coment.length>0)
   {
   		var mi_aleatorio=parseInt(Math.random()*99999999);
   		if(btnId=="a"){
		  	Nv=Nv+1;
  			//Ndiv="datos_noticias"+(div+Nv);
  			Ndiv="datos_noticias"+Nid;
  		}else if(btnId=="b"){
   			Nv2=Nv2+1;
   			Ndiv="comentGeneradoD"+(div+Nv2);
  		}else if(btnId=="c")
  		{
			Ndiv=div;
  		}
  		//var vinculo=pag+"?id_noticia="+id+"&rand="+mi_aleatorio;
  		//var id_p=pusher.connection.socket_id;   -->>+"&socket_id="+id_p
  		var vinculo=pag+"&id_resp="+id_not+"&id_amigo="+resp+"&comentario="+coment+"&del="+ultima+"&rand="+mi_aleatorio;
  		//alert(vinculo);return false;
   		httpgigpz.open("GET",vinculo,true); //true para q la peticion sea asincrona..
   		//httpgips.setRequestHeader("Content-Type", "text/javascript");  //"application/x-www-form-urlencoded" "text/javascript"
   		function respuestaHttp()
   		{
	   	if(httpgigpz.readyState==4)
	   	{
		   if(httpgigpz.status==200)
		   {
		  	   var httpOptenida=httpgigpz.responseText;
			   document.getElementById(Ndiv).innerHTML=httpOptenida;
			   Ndiv=null;
			   //gigpz.enviar_peticion(coment,resp,ultima);
			   //gigpz.enviar_peticion($('#txtideas').val(),<?php echo $id_miembro;?>,<?php echo $ultima_noticia;?>);
			   				  
			}
	   	}else{
		   //document.getElementById(div).innerHTML="Cargando...";
		   document.getElementById(Ndiv).innerHTML="<img src='public/img/preloadgigpz.gif' title='Cargando...' width='39px' height='15px'>";
		   
		}
	}

	httpgigpz.onreadystatechange=respuestaHttp; //OTRO METODO
    httpgigpz.send(null); //OTRO METODO	
 }  
}
 
function gigpz_ajax(id,div,pag)
{
   if (id.length>0) 
   	{
   	   //valida_correo(form.email.value)
   		//alert(id+" "+div+" "+pag);return false;
	   var mi_aleatorio=parseInt(Math.random()*99999999);
	   var vinculo=pag+"?rand="+mi_aleatorio+"&id_valor="+id;
	   //alert(vinculo);return false;
	   
	   httpgigpz.open("POST",vinculo,true); //true para q la peticion sea asincrona..
	   httpgigpz.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  //"application/x-www-form-urlencoded" "text/javascript"
	   httpgigpz.send(vinculo);
	   function respuestaHttp(){
		   if(httpgigpz.readyState==4)
		   {
			   if(httpgigpz.status==200){
			  	   var httpOptenida=httpgigpz.responseText;
			  	   //document.getElementById(div).style.display="block";
			  	   $('#rpt_registro').toggle();
				   document.getElementById(div).innerHTML=httpOptenida;
				   div=null;
					  
			 	}
		   }else{
		   		//document.getElementById(div).style.display="block";
		   		$('#rpt_registro').toggle();
			    document.getElementById(div).innerHTML="Cargando...";
			}
		  
		  
		}
		httpgigpz.onreadystatechange=respuestaHttp; //OTRO METODO
	    httpgigpz.send(null); //OTRO METODO
    }
}

function nuevaNoticia(id,texto)
{

 //alert(id);return false;
 if (texto.length>0)
 	{
	 nVeces=nVeces+1;
	 Nid=id+nVeces;
	 var divNoticias=document.createElement("div");
	 var contenidoDiv=document.createTextNode("Cargando...!");
	 divNoticias.id="datos_noticias"+Nid;
	 divNoticias.className="noticias draggable";

	 //divNoticias.className="noticias draggable";
	 divNoticias.appendChild(contenidoDiv);
	 
	 if (nVeces>1)
	 	{
			var dVeces=nVeces-1;
			var divId=document.getElementById("datos_noticias"+(id+dVeces));
			if (!divId) 
				{
					//alert('El div destino no existe -- nveces es: '+nVeces);
					for (var i = 1; i <=nVeces; i++) {
						var temp_id=nVeces-i;
						divId=document.getElementById("datos_noticias"+(id+temp_id));
						if (!divId) {
							//alert('sigue sin existir');
							if (i==nVeces) {
								divId=document.getElementById("datos_noticias0");
							};
							
						}else{
							//alert('ya existe');
							break;
						}
						//alert(i+" "+temp_id);
					}
				};

			document.getElementById("bloke_noticias").insertBefore(divNoticias,divId);
		}else if(nVeces==1){
			//var xdiv=document.getElementById("datos_noticias0");
			var xdiv=document.getElementById("datos_noticias");
			document.getElementById('bloke_noticias').insertBefore(divNoticias,xdiv);
		}

		$(function() {
			$( "#datos_noticias"+Nid).draggable({ 
				revert: true,
				scroll:true,
				zIndex:2700,
				start: function(event, ui) {
					//id_NoticiaX=<?php echo $noticias[$i]["id_noticia"];?>;
					id_div='datos_noticias'+Nid; //5
					//id_div=Nid;
				}

			});
		});
		/*new Draggable('datos_noticias'+Nid,
						{revert: true,
						 zindex:999,
						 onStart:function()
						 {
							//id_Noticia=;
						 }
						});
		*/
 	}	
}

function nuevoComentario(id,lugar)
{
	nVe=nVe+1;
	NidComen=id+nVe;
	
	var divComentario=document.createElement("div");
	var divSeparador=document.createElement("div");
	//var contenidoDiv=document.createTextNode("Este es un Texto de Prueba"+NidComen);
	divComentario.id="comentGeneradoD"+NidComen;
	divComentario.name="comentGeneradoD"+NidComen;
	divComentario.className="comentarios_grabados";
	divComentario.onmouseover=function()
	{
		mEliminar_comentario("comentGeneradoD"+NidComen);
	};

	divComentario.onmouseout=function()
	{
		mEliminar_comentario("comentGeneradoD"+NidComen);
	};
	//divComentario.appendChild(contenidoDiv);
	divSeparador.className="formatoInternoSeparador";
	//lugar=resultado_de_comentarios$x donde se mostrar o agregara
	document.getElementById(lugar).appendChild(divComentario);
	document.getElementById(lugar).appendChild(divSeparador);

	return NidComen;
}

function nuevo_comentario_foto(ultimo_id,pag,id_foto,coment,btnId,resp)
{
	if(swEnter==1)
	{
		//alert(ultimo_id+' '+pag+' '+id_foto+' '+coment+' '+btnId+' '+resp);
		if (coment.length>1)
			{
				nVeCfoto=nVeCfoto+1;
				NidCfoto=ultimo_id+nVeCfoto;

				var divComentarioFoto=document.createElement("div");
				divComentarioFoto.id="comentFoto"+NidCfoto;
				divComentarioFoto.className="";

				document.getElementById("bloke_comentarios_foto").appendChild(divComentarioFoto);
				var idc=divComentarioFoto.id;
				gigpz_ajaxGet(idc,pag,id_foto,coment,btnId,resp);

				swEnter=0;
			};

	}
}

function get_elementoPadre(elemen)
{
	var xElemen=document.getElementById(elemen);
	var elementPadre=xElemen.parentNode.id;
  	//return elementPadre;
  	id_div=elementPadre; //4
  	//alert('el elemento padre es: '+elementPadre);
  	
}

var gigpz={
	
			valor:'Funciona',
			comentador:false,
			miForm: false,
			textoArea:false,
			vTexto:false,
			btn_a:false,
			///////////////
			conexiones:0,
			timestamp: 0,
  			url: 'controller/backendController.php',
  			noerror: true,
  			id_ultima:0,

  			mifuncion:function(){
				//alert(this.valor+' con el this');
				alert(gigpz.valor+ 'con gigpz');
			},

  			inicializar:function(){},

  			manejador_respuesta:function(rpt)
  			{				
  				//alert('manejador ha sido llamado');
  				if (rpt["msg"]!='')
  					{
  						var msgN=rpt["msg"];

  						nuevaNoticia(10,msgN);
  						//alert(Nid);
  						//$('#chat').append('<br />'+rpt["msg"]);
  						document.getElementById("datos_noticias"+Nid).innerHTML=rpt["msg"];
  					}
  				
  			},

  			conectar:function(id_m,ultima_noti)
  			{		
  					//alert("conectar");
  					gigpz.conexiones++;
  					if (gigpz.conexiones>1)
  						{
  							var misDatos='timestamp='+gigpz.timestamp+"&id_miembro="+id_m+"&ultima_noticia="+gigpz.id_ultima;
  						}else{
  							var misDatos='timestamp='+gigpz.timestamp+"&id_miembro="+id_m+"&ultima_noticia="+ultima_noti;
  						}
  					//data:'timestamp='+gigpz.timestamp+"&id_miembro="+id_m+"&ultima_noticia="+gigpz.id_ultima,

  					this.gigpz_ajax=$.ajax({
  					url:gigpz.url,
  					type:"GET",
  					data:misDatos,
  					cache: false,
  					dataType:"json",
  					ifModified:true,
  					processData:true,
  					success:function(datos){
  						//alert(datos.codigo);
  						var respuesta=datos;
  						gigpz.timestamp=respuesta["timestamp"];
  						gigpz.id_ultima=respuesta["id_ultima"];
  						//alert(this.timestamp);
  						gigpz.manejador_respuesta(respuesta);
  						gigpz.noerror=true;
  					}
  					/*complete:function(datos){
  						if (!this.noerror)
  							{
  								setTimeout(function(){ this.conectar() }, 5000); 
  							};
  							}else{
  								gigpz.conectar();
  								gigpz.noerror=false;
  								
  							}*/

  					}).done(function( msg ) {
  						
  						if (!gigpz.noerror)
  							{
  								setTimeout(function(){ gigpz.conectar(id_m,ultima_noti) }, 5000); 
  							}else{
  								setTimeout(function(){ gigpz.conectar(id_m,ultima_noti); gigpz.noerror=false; }, 5000); 
  								//gigpz.conectar(id_m,ultima_noti);
  								//gigpz.noerror=false;
  							}
  					});
  					//this.gigpz_ajax.comet = this;
  				//.done(function( msg ) {alert( "Data Saved: ");});					
  				
  				/*
  			   var cod='codigo='+texto;	
  			   $.ajax({
			   url:'pruebaJquery.php',
			   data:cod,
			   type:"POST",
			   //dataType:"json",
			   success:function(respuesta){
							alert(respuesta);
							}
		   
		   		});
				*/

  			},

  			desconectar:function(){},

  			enviar_peticion:function(peticion,id_m,ultima_noti,btnId,tot_noti)
  			{
  				//data: "name=John&location=Boston"
  				//gigpz_ajaxGet(div,pag,id_not,coment,btnId,resp,ultima)
  				/////////////////////////////////////////////////////////
  				//gigpz_ajaxGet(<?php echo $total_noticia; ?>,'?accion=grabar_noticia',<?php echo $id_miembro; ?>,frm_ideas.txtideas.value,'a',<?php echo $id_miembro;?>,<?php echo $ultima_noticia;?>);  				
  				 //alert(id_not+" "+div+" "+pag+" "+coment+" "+btnId+" "+resp);return false;
				  //alert(peticion+' '+id_m+' '+ultima_noti+' '+btnId+' '+tot_noti); return false;
				  if(peticion.length>0)
				   {
				   		//var mi_aleatorio=parseInt(Math.random()*99999999);
				   		if(btnId=="a"){
						  	Nv=Nv+1;
				  			//Ndiv="datos_noticias"+(div+Nv);
				  			Ndiv="datos_noticias"+Nid;
				  		}else if(btnId=="b"){
				   			Nv2=Nv2+1;
				   			Ndiv="comentGeneradoD"+(div+Nv2);
				  		}else if(btnId=="c")
				  		{
							Ndiv=div;
				  		}
				  		//var vinculo=pag+"?id_noticia="+id+"&rand="+mi_aleatorio;
				  		//var id_p=pusher.connection.socket_id;   -->>+"&socket_id="+id_p

				  		////////////////////////////////////////////////////////
		  				//alert("datos enviados "+peticion+' '+id_m+' '+ultima_noti);
		  				gigpz.conexiones++;
  						if (gigpz.conexiones>1)
  						{
  							var misDatos="msg="+peticion+"&id_miembro="+id_m+"&ultima_noticia="+gigpz.id_ultima;
  						}else{
  							var misDatos="msg="+peticion+"&id_miembro="+id_m+"&ultima_noticia="+ultima_noti;
  						}
  						

		  				$.ajax({
		  					url:gigpz.url,
		  					type:"GET",
		  					data:misDatos,
		  					cache: false,
		  					dataType:"json",
		  					success:function()
		  					{
		  						////////////
		  					}
		  				}).done(function( obj ) {
		  					//alert( "datos Recibidos: ");
		  					gigpz_ajaxGet(tot_noti,'?accion=grabar_noticia',id_m,peticion,btnId,id_m,ultima_noti);
		  				});
		  				//this.conectar();

		  				/*
				  		var vinculo=pag+"&id_resp="+id_not+"&id_amigo="+resp+"&comentario="+coment+"&rand="+mi_aleatorio;
				  		//alert(vinculo);return false;
				   		httpgigpz.open("GET",vinculo,true); //true para q la peticion sea asincrona..
				   		//httpgips.setRequestHeader("Content-Type", "text/javascript");  //"application/x-www-form-urlencoded" "text/javascript"
				   		function respuestaHttp()
				   		{
						   	if(httpgigpz.readyState==4)
						   	{
							   if(httpgigpz.status==200)
							   {
							  	   var httpOptenida=httpgigpz.responseText;
								   document.getElementById(Ndiv).innerHTML=httpOptenida;
								   Ndiv=null;
								   //gigpz.enviar_peticion(coment,resp,ultima);
								   //gigpz.enviar_peticion($('#txtideas').val(),<?php echo $id_miembro;?>,<?php echo $ultima_noticia;?>);
								   				  
								}
						   	}else{
						   	//document.getElementById(div).innerHTML="Cargando...";
						  	 document.getElementById(Ndiv).innerHTML="<img src='public/img/preloadgigpz.gif' title='Cargando...' width='39px' height='15px'>";
						 	}
						}

						httpgigpz.onreadystatechange=respuestaHttp; //OTRO METODO
				    	httpgigpz.send(null); //OTRO METODO	
						*/
					}
  			},
  			
  			///////////////////////////
  			crearAlbum:function()
  			{  	
  				
  				if (swAlbum<1)
  				{		

  					$(document.body).addClass("mi_body");
					$("#sombra").addClass("sombraLoad");
					$("#sombra").show();
					$('#file_upload').toggle();
  					//4 document.getElementById("contenido_cuerpo").appendChild(div_album);
  					var div_album=document.getElementById('crear_album');
  					//textoCabecera=document.createTextNode("Subir Archivos");
  					//div_album.appendChild(textoCabecera);			
  					 					
  					frm_album.appendChild(div_adjuntos);
  					frm_album.appendChild(btn_subir);
  					frm_album.appendChild(var_br);
  					frm_album.appendChild(lblNombre);
  					frm_album.appendChild(txtNombre);
  					frm_album.appendChild(btn_grabar);
  					frm_album.appendChild(btn_oculto);

  					
  					//$('#crear_album').append('<hr /><span>Individual (Recomendado)</span>');
  					div_album.appendChild(span_contenido);
  					div_album.appendChild(hr_separador);
  					div_album.appendChild(frm_album);


  					$("#crear_album").toggle("slow");
  					swAlbum=1;
  				}
  			},
			
			crearComentador:function(id,totC,lugar,pag,id_not,btnId,resp)
			{
				//alert(id+" "+totC+" "+lugar+" "+pag+" "+id_not+" "+btnId+" "+resp);return false;
				//alert(id);

				if(!document.getElementById('div_comentador'+id))
				{
				   //alert('No existe el div con este Id');
				
				//alert('soy comentador'); return false;
				gigpz.comentador=document.createElement("div");
				gigpz.comentador.setAttribute('id','div_comentador'+id);
				//gigpz.comentador.className='comentador';
				//gigpz.texto=document.createTextNode("Este es un Texto de Prueba");
				//gigpz.comentador.appendChild(gigpz.texto);
					gigpz.miForm=document.createElement("form");
					gigpz.miForm.setAttribute('id','form'+id);
					gigpz.miForm.setAttribute('name','form'+id);
					
					gigpz.textoArea=document.createElement("textarea");
					gigpz.textoArea.setAttribute('id','txt_comentario'+id);
					gigpz.textoArea.setAttribute('name','txt_comentario'+id);
					gigpz.textoArea.setAttribute('cols','10');
					gigpz.textoArea.setAttribute('rows','1');
					gigpz.textoArea.className='formatoInternoText';
					gigpz.textoArea.onkeyup=function(elevento)
					{
						
						var evento=elevento || window.event;
  						if(evento.keyCode==13 && evento.type=="keyup")
  						{
	 						//alert("El enter");
	 						swEnter=1;
	 						if (swEnter==1)
	 						 {
	 						 	var v=nuevoComentario(totC,lugar);
	 						 	//alert(v);
								gigpz_ajaxGet(totC,pag,id_not,gigpz.vTexto,btnId,resp,v);
								gigpz.comentador.parentNode.removeChild(gigpz.comentador);
								swEnter=0;
	 						 }
  						}else{
	 						swEnter=0;
	  					}

						gigpz.vTexto=gigpz.textoArea.value;
						
					}
					
					gigpz.miForm.appendChild(gigpz.textoArea);
					
					//gigpz.btn_a=document.createElement("a");
					//gigpz.btn_a.setAttribute('id','btn_comentario'+id);
					//gigpz.btn_a.setAttribute('href','javascript:void(0)');
					//gigpz.btn_a.className='formatoInternoBoton';
					//gigpz.btn_a.onclick=function()
	   			    //{
							//alert('Funcion el onclick');

						//nuevoComentario(totC,lugar);
						//gigpz_ajaxGet(totC,pag,id_not,gigpz.vTexto,btnId,resp);
						//gigpz.comentador.parentNode.removeChild(gigpz.comentador);

							//div.parentNode.removeChild(div);
				     //}
					
					
					//var comen=document.createTextNode("Publicar");
					//gigpz.btn_a.appendChild(comen);
					//gigpz.miForm.appendChild(gigpz.btn_a);
				
				gigpz.comentador.appendChild(gigpz.miForm);
				//document.getElementById('noticias_cuerpo'+id).appendChild(gigpz.comentador);
				//alert('Se ejecuto'); comentarios_separador
				 var div_sepa=document.getElementById("noticias_separador"+id);
				 document.getElementById('noticias_cuerpo'+id).insertBefore(gigpz.comentador,div_sepa);
				
				}else if (document.getElementById('div_comentador'+id)){
					//alert('existe '+gigpz.comentador.id);
					gigpz.comentador.parentNode.removeChild(gigpz.comentador);
					return false;
				}
				
			},
			
			mostrar_coordenadas:function(evento)
			{
				//alert('esta es la funcion');
				//return false;
				
				var evt=evento || window.event;
				var coocx=evt.clientX;
				var coocy=evt.clientY;
				//alert('la posicion respecto a la ventana es: x='+coocx+' y='+coocy);
				//exit;
				var coosx=evt.screenX;
				var coosy=evt.screenY;
				//valida navegador//
				var ie=navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
				if(ie)
					{
						coohx=evt.clientX+document.body.scrollLeft;
						coohy=evt.clientY+document.body.scrollTop;
					}else{
						coohx=evt.pageX;
						coohy=evt.pageY;
					}
				alert('la posicion respecto a la ventana es: x='+coocx+' y='+coocy);
				alert('la posicion respecto al documento completo es: x='+coohx+' y='+coohy);
				alert('la posicion respecto al la pantalla es: x='+coosx+' y='+coosy);

			},
			medida_pantalla:function()
			{
				alert('Altura Total '+screen.height+' Anchura Total '+screen.width);
				//alert('La Altura de la Ventana '+screen.availHeight+' La Anchura de la Ventana '+screen.availWidth);
				//alert('La Altura en Windows '+window.outerHeight+' La Anchura en Windows '+window.outerWidth);
			},
			detectar_scroll:function()
			{
				 ///Revizar propiedades de scroll en todos los navegadores
				 var ds=window.pageYOffset;
				 var dx=document.body.clientHeight;
				 //alert(ds+' '+dx);
				 document.getElementById('chat').innerHTML=ds+' '+dx;
			}

};

function aplicar_resolucion()
{
	var an=screen.width;
	var al=screen.height;
	var v_apl=an*0.8;
	//var v_apl=an;
	document.getElementById('principal').style.width=v_apl+'px';
	document.getElementById('principal').style.minWidth='640px';
	document.getElementById('principal').style.maxWidth='1366px';
	//alert(an);
}

function add_css()
{
	//$('.noticias_titulo').
}