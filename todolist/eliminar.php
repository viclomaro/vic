<?php

include_once 'conexion.php';

$id = $_GET['id'];

$slq_eliminar = 'DELETE FROM tareas WHERE id=?';
$sentenciaEliminar = $pdo->prepare($slq_eliminar);
$sentenciaEliminar->execute(array($id));

header('location:index.php');

?>