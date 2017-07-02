function validateForm(){
	/* Escribe tú código aquí */
}

$(document).ready(function(){
	$(".submit-btn").click(function(){
		if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,13})+$/.test($("#name").val()))){
   			$("#name").parent().append("<span>Ingrese Nombre correcto<br>primera letra mayúscula</span>");
  		}

  		if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,13})+$/.test($("#lastname").val()))){
   			$("#lastname").parent().append("<span>Ingrese Apellido correcto<br>primera letra mayúscula</span>");
  		}

  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-email").parent().append("<span>Ingrese correo valido</span>");
  		}

  		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val())) ){
   			$("#input-email").parent().append("<span>Ingrese correo valido</span>");
  		}

  		if(($("#input-password").val() == "password") || ($("#input-password").val() == 123456) || ($("#input-password").val() == 098765) || (($("#input-password").val()).length < 5)){
  			$("#input-password").parent().append("<span>Ingrese contraseña valida</span>");
  		}

  		if($("select").val() === "0") {
   			$("select").parent().append("<span>Elige una opción</span>");
  		}	


  		$("#name").val("");
  		$("#lastname").val("");
  		$("#input-email").val("");
  		$("#input-password").val("");
  		$("select").val("0");  
  		$("#input-social").val(""); 
  		$("input:checkbox").val(""); 
  		$('input:checkbox[value=remember-me]').attr('checked',false);	
  		//No se como desmarcar el checkbox 
  		//$('input:checkbox[value=remember-me]').checkbox("");			  		  				  		
	});
});