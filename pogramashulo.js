var rectangulo = document.getElementById("recuadro");
var lapiz = rectangulo.getContext("2d");

var a=0.0;
var b=0.0;
var c=0.0;

function mini(n, m){
	if (n<m){
		return n;
	} else {
		return m;
	}
}
function maxi(n, m){
	if (n>m){
		return n;
	} else {
		return m;
	}
}
function abso(k){
	if (k<0){
		return 0-k;
	} else {
		return k;
	}
}

function generate(){
	var p = Math.random();
	var q = Math.random();
	a = abso(p - q);
	b = mini(p, q);
	c = 1 - maxi(p, q);
	if (a > b){
		a = a + b;
		b = a - b;
		a = a - b;
	}
}

function play(d, f, g){
	var x = d;
	var y = f;
	var z = g;
	if (x > y){
		y = y + x;
		x = y - x;
		y = y - x;
	}
	if (y > z){
		y = y + z;
		z = y - z;
		y = y - z;
	}
	if (x > y){
		y = y + x;
		x = y - x;
		y = y - x;
	}
	generate();
	var tot=0;
	if (a<x){
		tot++;
	}
	if (b<y){
		tot++;
	}
	if (c<z){
		tot++;
	}
	return tot - 1;
}

function comienza() {
	lapiz.fillStyle = "white";
	lapiz.fillRect(0,0,1100,1100);
	lapiz.fillStyle = "black";
	for (var i=0.0; i<105; i=i+5){
		for (var j=0.0; j<105 - i; j=j+5){
			var suma=0;
			for (var e=0; e<10000; e++){
				suma = suma + play(i/100, j/100, (100 - i - j)/100);
			}
			lapiz.fillText(suma/100, 60 + 10*i, 80 + 10*j);
		}
		lapiz.beginPath();
		lapiz.moveTo(50, 50 + 10*i);
		lapiz.lineTo(10*(100-i) + 150, 50 + 10*i);
		lapiz.moveTo(50 + 10*i, 50);
		lapiz.lineTo(50 + 10*i, 10*(100-i) + 150);
		lapiz.stroke();
		lapiz.fillText(i/100, 10, 80 + 10*i);
		lapiz.fillText(i/100, 60 + 10*i, 30);
	}
}
