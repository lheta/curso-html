/*
var childList = [1.3,1,1.2,1.6,1.7,1.8];

var looper = 1.4;
var rodaGigante = 1.2;
var barcoViking = 1.5;

function funcao(array,altura){
	for(var a = 0 ; a < array.length; a++){

	if (array[a] > altura){
		console.log('Acesso Liberado: ' + array[a]);
	}else{
		console.log('Acesso Negado: '+ array[a]);
	}
	
}
}
function funcao(array,altura){
	for(var i in array){
	
		console.log((array[i]> altura ?' Acesso Liberado: ' + array[i] : 'Acesso Restrito ' + array[i]));
	
	}
}
console.log('LOOPER');
funcao(childList,looper)
console.log('-------------------');
console.log('RODA GIGANTE');
funcao(childList,rodaGigante)
console.log('-------------------');
console.log('BARCO VIKING');
funcao(childList,barcoViking);


function Crianca(nome,altura){
	this.nome = nome ;
	this.altura = altura;

	this.check = function(comparador){	
		return this.altura > comparador ? true : false;
	}
}

var childList = [new Crianca('joao',1.2),
				new Crianca('rafael',1.3),
				new Crianca('luiz',1.5),
				new Crianca('maria',1.1),
				new Crianca('pedro',1.8)];

function funcao(childList,limitador){
	for(var i in childList){
		console.log(( childList[i].check(limitador) ?' Acesso Liberado: ' + childList[i].nome  : 'Acesso Restrito ' + childList[i].nome);
	}
}

document.getElementById('Title').innerHTML+=': Luiz';
document.getElementsByTagName('li');

for (var i in document.getElementsByTagName('li')){
	document.getElementsByTagName('li')[i].innerHTML = 'Texto' ;
}

);
*/
$('form').submit(function(evt){
	var value = 'Terceira fase de saques\
A terceira etapa de saques das contas inativas do FGTS começou na última sexta-feira (12) para pessoas nascidas nos meses de junho, julho e agosto. O lote deve contemplar cerca de 7,6 milhões de trabalhadores, ou 25% do total, segundo o banco.\
O valor total disponível para saque nesse mês ultrapassa R$ 10,8 bilhões. Segundo a Caixa, cerca de 3,2 milhões de correntistas do banco (42% do total) recebem automaticamente o crédito em suas contas nesta sexta-feira (12).';
	//var regexp = /[0-9]/g;
	console.log(value.match(/\d{2}\//igm));
	return false;
})


