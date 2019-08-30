$(document).ready(function(){
	$('.cargando').hide();
    listar();

});


var listar = function(){
$('.cargando').show();
	var table = $('#clientes').DataTable({
		"destroy":true,
		"pageLength": 40,
		"lengthMenu": [[40, 80, 100, -1], [40, 80, 100, "All"]],
		"language": {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
    },
		"ajax":{
			"method":"POST",
			"url": "php/consulta_clientes.php"
		},
		"columns":[
			{data:"cardcode"},
			{data:"cardname"},
			{data:"direccion"},
			{data:"telefono"},
			{data: 'cardcode', render: function ( data) {
			   		return '<a class="btn btn-primary" href="profile.php?cardcode='+data+'"><i class="fa fa-eye"</i></a>';
          		
       		 	}      
      		},
			{data: 'cardcode', render: function ( data) {
			   		return '<a class="btn btn-danger" href="editar.php?cardcode='+data+'"><i class="fa fa-edit"</i></a>';
          		
       		 	}      
      		},
			

		]
	});
	$('.cargando').hide();
	data_editar("#clientes tbody", table);
	data_eliminar("#clientes tbody", table);
}

