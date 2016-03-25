
var game;
$("button").on('click', function() {
	document.getElementById('informa').innerHTML = "";
	document.getElementById('texto').innerHTML = ""; 
	

	if ($(this).attr("id") == "primeiro") {
		game = 0;
	}else if ($(this).attr("id") == "segundo") {
		game = 1;
	}else if ($(this).attr("id") == "terceiro") {
		game = 2;
	}
	console.log(game);

	$.ajax({
		method: "GET",
		dataType: "json",
		url: "data/dados.json",
		success: function(data) {
			$('#informa').append('<h1>' + data.jogo[game].nome + '</h1>');
			$('#informa').append('<h3>Data de Lançamento: ' + data.jogo[game].datalanc + '</h3>');
			$('#informa').append('<img id="imgJogo" src="' + data.jogo[game].imagem + '">');
			$('#texto').append('<h3>' + data.jogo[game].nota + '</h3>');
			$('#texto').append('<p>' + data.jogo[game].descricao + '</p>');				
		}
	
	});


});
