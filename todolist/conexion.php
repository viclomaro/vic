<?php 

$link = 'mysql:host=localhost;dbname=todolist';
$usuario = 'root';
$pass = 'root';

try{

    $pdo = new PDO($link, $usuario, $pass);

    //echo 'Conectado';

   /*  foreach($pdo->query('SELECT * from `tareas`') as $fila) {
        print_r($fila);
    } */

}catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}


?>


