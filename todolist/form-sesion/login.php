<?php

session_start();

// Conectar a la base de datos
include_once '../conexion.php';

$usuario_login = $_POST['nombre_usuario'];
$contrasena_login = $_POST['contrasena'];

//Comprobar si el usuario existe en la bbdd
$sql = 'SELECT * FROM usuarios WHERE nombre = ?';
$sentencia = $pdo->prepare($sql);
$sentencia->execute(array($usuario_login));
$resultado = $sentencia->fetch();

if(!$resultado){
    echo 'No existe el usuario';
    die();
}

$contrasena_bbdd = $resultado['contrasena'];

if(password_verify($contrasena_login, $contrasena_bbdd)){
    $_SESSION['admin'] = $usuario_login;
    header('Location: ../index.php');
}else{
    echo 'La contraseña no es válida';
    die();
}


?>