$(document).ready(function() {



	
	$("#formulario").submit(function (event) {
		var url = $("#url").val();
		if(url != ""){

		} else {
			$("#formulario").html("<div>Complete todos los campos</div>");
		};



	event.preventDefault();
	});
});