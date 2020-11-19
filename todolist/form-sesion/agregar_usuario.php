<?php

$usuario_nuevo = $_POST['nombre_usuario'];
$contrasena = $_POST['contrasena'];
$contrasena2 = $_POST['contrasena2'];

$contrasena = password_hash($contrasena, PASSWORD_DEFAULT);

echo '<pre>';
var_dump($usuario_nuevo);
var_dump($contrasena);
var_dump($contrasena2);
echo '<pre>';

if(password_verify($contrasena2, $contrasena)){
    //echo 'La contraseña es válida';

    include_once '../conexion.php';

    $sqlAgregar = 'INSERT INTO usuarios (nombre, contrasena) VALUES (?,?)';

    $sentenciaAgregar = $pdo->prepare($sqlAgregar);

    if($sentenciaAgregar->execute(array($usuario_nuevo, $contrasena))){
        echo 'Añadido <br>';
    }else{
        echo 'error<br>';
    }
    
    // Cerrar conexión bbdd y sentencia
    $sentenciaAgregar = null;
    $pdo = null;
    //header('location:index.php');

}else{
    //echo 'La contraeña no es válida';
}

?>
