<?php

include_once 'conexion.php';

// Leer tareas
$sql_leer = 'SELECT * FROM tareas';

$gsent = $pdo->prepare($sql_leer);
$gsent->execute();

$tareas = $gsent->fetchAll();

// var_dump($tareas);

// Añadir tareas
if($_POST){
  $tarea = $_POST['tarea'];
  $descripcion = $_POST['descripcion'];

  $sqlInsertar = 'INSERT INTO tareas (tarea, descripcion) VALUES (?,?)';

  $sentenciaAgregar = $pdo->prepare($sqlInsertar);
  $sentenciaAgregar->execute(array($tarea, $descripcion));

}


if($_GET){
  $id = $_GET['id'];
  $sql_unico = 'SELECT * FROM tareas WHERE id=?';
  $gsent_unico = $pdo->prepare($sql_unico);
  $gsent_unico->execute(array($id));
  $tareas_unico = $gsent_unico->fetch();

  //var_dump($tareas_unico);
}


?>

<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <title>Todolist php</title>
  </head>
  <body>
    <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">

            <?php foreach($tareas as $tarea): ?>

                <div class="alert alert-primary text-uppercase" role="alert">
                    <?php echo $tarea['tarea'] ?>
                    -
                    <?php echo $tarea['descripcion'] ?> 

                    <a href="eliminar.php?id=<?php echo $tarea['id'] ?>" class="float-right ml-2">
                      <i class="fas fa-trash"></i>
                    </a>

                    <a href="index.php?id=<?php echo $tarea['id'] ?>" class="float-right">
                      <i class="fas fa-edit"></i>
                    </a>
                </div>

                <?php endforeach ?>
          </div>

          <div class="col-md-6">
              <?php if(!$_GET): ?>

              <h2>Añadir Tareas</h2>
              <form method="POST">
                <input type="text" class="form-control" name="tarea" placeholder="Tarea">
                <input type="text" class="form-control mt-3" name="descripcion" placeholder="Descripción">
                <button class="btn btn-primary mt-3">Añadir</button>
              </form>

              <?php endif ?>

              <?php if($_GET): ?>

              <h2>Editar Tareas</h2>
              <form method="GET" action="editar.php">
                <input type="text" class="form-control" name="tarea" placeholder="Tarea" value="<?php echo $tareas_unico['tarea'] ?>">
                <input type="text" class="form-control mt-3" name="descripcion" placeholder="Descripción" value="<?php echo $tareas_unico['descripcion'] ?>">
                <input type="text" class="d-none" name="id" value="<?php echo $tareas_unico['id'] ?>">
                <button class="btn btn-primary mt-3">Añadir</button>
              </form>

              <?php endif ?>
          </div>
        </div>
    </div>


  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

  </body>
</html>