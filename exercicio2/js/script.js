$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.formula1) {
			id = data.formula1[i].id;

			$('#content').append('<img src="' + data.formula1[i].src + '">');
		}
	}
});