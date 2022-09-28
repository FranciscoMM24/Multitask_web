<?php
include 'conect.php';

$nombre_cliente= $_POST['name_cliente'];
$contra_cliente=$_POST['contrase_cliente'];

$validar_login= mysqli_query($conexion, "SELECT * FROM clientes WHERE nombre='$nombre_cliente'
and contrase='$contra_cliente'");

if (mysqli_num_rows($validar_login)>0 ) {
    header("location: ../main.html");
}else {
    echo '   <script>
    alert("Usuario no registrado");
    window.location="../iniciaSecion.html";
    
    </script>';
}


?>