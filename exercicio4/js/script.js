$.ajax({
	method: "GET",
	datatype: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for (var i in data.noticias){
			id = data.noticias[i].id;
			$('#not'+id).append('<div id="secao"><strong>Seção ' + id + '</strong></div>');
			
			for (var x in data.noticias[i].p){
				$('#not'+id).append('<p>' + data.noticias[i].p[x] + '</p>');
			}					
		}
	}
});