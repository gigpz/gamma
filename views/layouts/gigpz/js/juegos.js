function explosion(){
	alert("Boom");
	document.write("<h2>BOOM elejiste un area minada !</h2>");
}
//explosion();
function ganaste(){
	document.write("Eres un Ganador !");
}
//ganaste();

//CREANDO ARRAY BIDIMENSIONAL MATRIZ
//1 = bomba, 0 = no bomba

var area=[ [1,0,0,],
		   [0,1,0,],
		   [1,0,1,] ];

/*if (area[1][1]==1)
{
	explosion();
}else{
	ganaste();
}*/

var textos = ["cesped","bomba"];
var x,y;

alert("Estás en un campo minado,\n elije una posicion entre el 0 y 2 para X y para Y");

x = Number(prompt("posicion en X ? (entre 0 y 2)"));
y = Number(prompt("posicion en y ? (entre 0 y 2)"));

if (x>2 || y>2)
{
	document.write("<h2>Estas Fuera del Rango Permitido</h2>");	
}else if(x==NaN || y==NaN) {
	document.write("<h2>Parmatros invalidos !</h2>");	
}else if(x<0 || y<0) {
	document.write("<h2>Parmatros invalidos !</h2>");	
}
else if(x==undefined || y==undefined) {
	document.write("<h2>Parmatros invalidos !</h2>");	
}
else{
	var posicion=area[x][y];
	document.write("Elegiste "+textos[posicion]);
	if (posicion==1) {
		explosion();
	}else{
		ganaste();
	}
	console.log(posicion);
}

//document.write(textos[posicion]);

//GEOLOCALIZACION//
/*var maxima;
maxima= Math.max(5,20,10,3);
document.write(maxima);

function mostrar(pos){
	document.write(pos.coords.latitude + " , "+pos.coords.longitude);
}
navigator.geolocation.getCurrentPosition(mostrar);*/


