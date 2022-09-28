<?php

include 'conect.php';

$correo_electronico= $_POST['correo_electronico'];
$nombre_cliente= $_POST['nombre_cliente'];
$contrasena= $_POST['contra_cliente'];

$query = "INSERT INTO clientes(correo,nombre,contrase)
VALUES ('$correo_electronico','$nombre_cliente','$contrasena')";


$execute= mysqli_query($conexion, $query); 


if ($execute) {
    echo '   <script>
    alert("Usuario registrado exitosamente");
    window.location="../main.html";
    
    </script>';
 
}else {
    echo '   <script>
    alert("Error al registrar usuario");
    window.location="../registrarte.php";
    
    </script>';
 
}

mysqli_close($conexion);



?>