$('document').ready(function () 
{
    $.post('consulta.php', function (ret) {
                 $("#tablaJSGRID").jsGrid({
                 width: "100%",
                 height: "400px",
                 inserting: true,
                 editing: true,
                 sorting: true,
                 paging: true,
                 data: ret,
                 onItemDeleted: function(args) {   console.log(args.item);  },
                 fields: [{ name: "idUsuario",type: "text",title: "ID",         width: 30,validate: "required"},
                         { name: "nombre",    type: "text",title: "Nombre",     width: 100},
                         { name: "apPaterno",    type: "text",title: "Apellido Paterno",     width: 100},
                         { name: "apMaterno",    type: "text",title: "Apellido Materno",     width: 100},
                         { name: "area",    type: "text",title: "Area",     width: 100},
                         { name: "RFC", type: "text",title: "RFC", width: 55},
                         ],
                });
            }
    ,'json');
});