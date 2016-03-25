$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.estados) {
			id = data.estados[i].id;

			$('#combobox').append('<option>' + data.estados[i].nome + '</option>');

		}
	}
});