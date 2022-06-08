var ruta = "http://localhost:8080";


function traer_clientes() {
    $.ajax({
        type: "get",
        method: 'get',
        url: ruta + "/users",
        success: function (data) {
            data.forEach(element => {
                var rows = document.getElementById("table_users").rows.length;


                var tabla = document.getElementById("table_users");
                var row = tabla.insertRow(rows);
                row.id = "row_" + element._id;
                row.style.backgroundColor = "white";
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = element.name;
                cell2.innerHTML = element.age;
                cell3.innerHTML = ' <button onclick="eliminar_cliente(' + element._id + ')" class="btn btn-primary" id=eliminar_btn_' + element._id + '>Editar</button>';
                cell4.innerHTML =
                    '      <button value=' + element._id + ' onclick="eliminar_cliente(this.value)" class="btn btn-danger" name="editar" ' +
                    '      id=eliminar_btn_' + element._id + '>Eliminar</button>';



                console.log(element);
                /*
                const listaProductos = document.getElementById("listado");
                const nuevoProducto = document.createElement("div");
                nuevoProducto.id = "user_" + element._id;
                nuevoProducto.className = "productos";
                nuevoProducto.innerHTML =
                    '<div class"card text-center mb-4">' +
                    '<div class"card-body">            ' +
                    '      <strong>Nombre: </strong>   ' + element.name +
                    '      <strong>Edad: </strong>   ' + element.age +
                    '      <a href="#" class="btn btn-primary" name="borrar" ' +
                    '      id=editar_btn_' + element._id + '>Editar</a>                   ' +
                    '      <button value=' + element._id +' onclick="eliminar_cliente(this.value)" class="btn btn-danger" name="editar" ' +
                    '      id=eliminar_btn_' + element._id + '>Eliminar</button>' +
                    '  </div>                          ' +
                    '</div>';
                listaProductos.appendChild(nuevoProducto);
                */
            });
        }
    });
}

function guardar_cliente() {
    var dataString = $('#users-form').serialize(); // carga todos 
    console.log(dataString);
    $.ajax({
        type: "post",
        method: 'post',
        url: ruta + "/users?" + dataString,
        data: dataString,
        success: function (data) {

            var rows = document.getElementById("table_users").rows.length;
            var tabla = document.getElementById("table_users");
            var row = tabla.insertRow(rows);
            row.id = "row_" + data._id;
            row.style.backgroundColor = "white";
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = data.name;
            cell2.innerHTML = data.age;
            cell3.innerHTML = ' <button onclick="eliminar_cliente(' + data._id + ')" class="btn btn-primary" name="editar_btn_" ' + ' id=editar_btn_' + data._id + '>Editar</button>';
            cell4.innerHTML =
                '      <button value=' + data._id + ' onclick="eliminar_cliente(this.value)" class="btn btn-danger" name="editar" ' +
                '      id=eliminar_btn_' + data._id + '>Eliminar</button>';

        }
    });


}


function eliminar_cliente(id) {
    $.ajax({
        url: ruta + "/users/" + id + "",
        type: 'post',
        method: 'DELETE',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $("#user_" + id).remove();
            $("#row_" + id).remove();
        }
    });

}