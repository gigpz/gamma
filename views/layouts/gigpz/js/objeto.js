/*var Pokemon={
	nombre: "Pikachu",
	tipo: "Eléctrico",
	vida: 100,
	ataque: 55
};*/

function Pokemon(n,v,a)
{
	var estructuraPokemon = {
		nombre: n,
		vida: v,
		ataque: a,
		datos:{tipo:"tierra", debilidad:"Fuego"}
	};
	return estructuraPokemon;
}

var pikachu=Pokemon("Pikachu",100,55);
var  bulbasaur=Pokemon("Bulbasaur",90,50);

//console.log(bulbasaur);
//document.write(pikachu.nombre);

function Digimon(n,v,a)
{
	this.grito="Pika!";
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.gritar=function()
	{
		alert(this.grito);
	}
}

function inicio()
{
	var greimon = new Digimon("Greimon",100,55);
	greimon.vida=greimon.vida-12;
	//greimon.gritar();
	//nombrePokemon=innerText=greimon.nombre;
	//nombrePokemon es el name de del elemento html
}
