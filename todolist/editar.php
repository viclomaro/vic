<?php

$id = $_GET['id'];
$tarea = $_GET['tarea'];
$descripcion = $_GET['descripcion'];

include_once 'conexion.php';

$sql_editar = 'UPDATE tareas SET tarea = ?, descripcion = ? WHERE id = ?';
$sentendiaEditar = $pdo->prepare($sql_editar);
$sentendiaEditar->execute(array($tarea, $descripcion, $id));

$pdo = null;
$sentendiaEditar = null;

header('location:index.php');

?>