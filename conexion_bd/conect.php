<?php
$conexion = mysqli_connect("localhost", "root", "", "clientes");

if ($conexion) {
    echo 'Conectado a servidor MYSQL.';
      
}else{
    echo 'Error al conectar a servidor MYSQL.';

}



?>