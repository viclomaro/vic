<?php

// Conectar a la base de datos
include_once '../conexion.php';

// Capturar datos por POST
$usuario_nuevo = $_POST['nombre_usuario'];
$contrasena = $_POST['contrasena'];
$contrasena2 = $_POST['contrasena2'];

//Comprobar si el usuario nuevo ya existe en la bbdd
$sql = 'SELECT * FROM usuarios WHERE nombre = ?';
$sentencia = $pdo->prepare($sql);
$sentencia->execute(array($usuario_nuevo));
$resultado = $sentencia->fetch();

if($resultado){
    echo 'Este usuario ya existe';
    die();
} 

// Encriptar contraseña
$contrasena = password_hash($contrasena, PASSWORD_DEFAULT);

// Comprobar que coinciden las contraseñas
if(password_verify($contrasena2, $contrasena)){
    //echo 'La contraseña es válida';

    $sqlAgregar = 'INSERT INTO usuarios (nombre, contrasena) VALUES (?,?)';

    $sentenciaAgregar = $pdo->prepare($sqlAgregar);

    // Verificar contraseña
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
    echo 'La contraeña no es válida';
}

?>
